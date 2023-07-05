package kvstore

import akka.actor.{
  OneForOneStrategy,
  PoisonPill,
  Props,
  SupervisorStrategy,
  Terminated,
  ActorRef,
  Actor,
  actorRef2Scala
}
import kvstore.Arbiter.*
import akka.pattern.{ask, pipe}
import scala.concurrent.duration.*
import akka.util.Timeout
import scala.concurrent.java8.FuturesConvertersImpl.P
import kvstore.Replica.props
import akka.actor.SupervisorStrategy.Restart

object Replica:

  sealed trait Operation:
    def key: String
    def id: Long
  case class Insert(key: String, value: String, id: Long) extends Operation
  case class Remove(key: String, id: Long) extends Operation
  case class Get(key: String, id: Long) extends Operation

  sealed trait OperationReply
  case class OperationAck(id: Long) extends OperationReply
  case class OperationFailed(id: Long) extends OperationReply
  case class GetResult(key: String, valueOption: Option[String], id: Long)
      extends OperationReply

  def props(arbiter: ActorRef, persistenceProps: Props): Props = Props(
    Replica(arbiter, persistenceProps)
  )

class Replica(val arbiter: ActorRef, persistenceProps: Props) extends Actor:
  import Replica.*
  import Replicator.*
  import Persistence.*
  import context.dispatcher

  /*
   * The contents of this actor is just a suggestion, you can implement it in any way you like.
   */

  var nextSeq = 0L

  var kv = Map.empty[String, String]
  // INFO: In order to init each new replica,
  // I need to keep track of the id of the most recent request for that kv pair
  // so that I do not overwrite other requests and know how to react correctly.
  // This is a separate var from kv only because kv was supplied as part of the original suggestion
  // But they are always updated in lockstep
  var ki = Map.empty[String, Long]

  //
  // a map from secondary replicas to replicators
  var secondaries = Map.empty[ActorRef, ActorRef]
  // the current set of replicators
  var replicators = Set.empty[ActorRef]

  // all the things we need for Insert/Remove/Get to work
  //

  case class Unsent(
      sender: ActorRef,
      key: String,
      valueOption: Option[String],
      persisted: Boolean,
      requiredReplies: Set[ActorRef]
  )

  extension (unsent: Unsent)
    def recPersist: Unsent = unsent match
      case Unsent(v1, v2, v3, _, v5) => Unsent(v1, v2, v3, true, v5)

    def recReply(replier: ActorRef) = unsent match
      case Unsent(v1, v2, v3, v4, set) => Unsent(v1, v2, v3, v4, set - replier)

    def withNewReplier(replier: ActorRef) = unsent match
      case Unsent(v1, v2, v3, v4, set) => Unsent(v1, v2, v3, v4, set + replier)

  var unsents = Map.empty[Long, Unsent]

  // var kvInits = Map.empty[ActorRef, Map[String, String]]

  def checkForFailure(id: Long) = if unsents.contains(id) then
    unsents(id).sender ! OperationFailed(id)
    // println(s"unsents=$unsents")
    unsents = unsents - id

  def addCheck(id: Long) =
    context.system.scheduler.scheduleOnce(1.second)(checkForFailure(id))

  def ackAttempt(id: Long) = unsents(id) match
    case Unsent(sender, _, _, true, set) if set.isEmpty =>
      sender ! OperationAck(id)
      unsents = unsents - id
    case _ => ()

  def receive =
    case JoinedPrimary   => context.become(leader)
    case JoinedSecondary => context.become(replica)

  /* TODO Behavior for  the leader role. */
  val leader: Receive =
    case Replicas(replicas) =>
      // remove replicators whose replicas that have left the system
      for
        (replica, replicator) <- secondaries
        if !replicas.contains(replica)
      do
        replicator ! PoisonPill
        // println(s"killed $replicator")
        secondaries = secondaries - replica
        replicators = replicators - replicator
        for
          (id -> unsent) <- unsents
          if unsent.requiredReplies.contains(replicator)
        do
          unsents = unsents + (id -> unsent.recReply(replicator))
          ackAttempt(id)

      // add new replicas and start new replicators for them
      for
        replica <- replicas
        if !secondaries.contains(replica)
        if replica != self
      do
        val newReplicator = context.actorOf(Replicator.props(replica))
        secondaries += (replica -> newReplicator)
        replicators = replicators + newReplicator
        // println(s"copying values $kv to new replica $replica")
        for
          (k -> v) <- kv
          i <- ki.get(k)
        do
          val currentUnsent =
            unsents.getOrElse(i, Unsent(sender(), k, Some(v), true, Set()))
          unsents = unsents + (i -> currentUnsent.withNewReplier(newReplicator))

    case Insert(key, value, id) =>
      kv = kv + (key -> value)
      ki = ki + (key -> id)
      unsents =
        unsents + (id -> Unsent(sender(), key, Some(value), false, replicators))
      addCheck(id)

    case Remove(key, id) =>
      kv = kv - key
      ki = ki - key
      unsents =
        unsents + (id -> Unsent(sender(), key, None, false, replicators))
      addCheck(id)

    case Get(key, id) =>
      sender() ! GetResult(key, kv.get(key), id)

    case Persisted(key, id) =>
      if unsents.contains(id) then
        unsents = unsents + (id -> unsents(id).recPersist)
        ackAttempt(id)

    case Replicated(key, id) =>
      if unsents.contains(id) then
        unsents = unsents + (id -> unsents(id).recReply(sender()))
        ackAttempt(id)

    case Replicate(key, valueOption, id) =>
      valueOption match
        case None    => self ! Remove(key, id)
        case Some(v) => self ! Insert(key, v, id)

  end leader

  /* TODO Behavior for the replica (secondary) role. */
  val replica: Receive =
    case Get(key, id) =>
      sender() ! GetResult(key, kv.get(key), id)

    case Snapshot(key, oval, seq) =>
      if seq < nextSeq then sender() ! SnapshotAck(key, seq)
      else if seq == nextSeq then
        nextSeq += 1
        oval match
          case None =>
            kv = kv - key
          case Some(value) =>
            kv = kv + (key -> value)
        unsents = unsents +
          (seq -> Unsent(sender(), key, oval, false, Set()))
      else ()
    case Persisted(key, id) =>
      // println(s"hi ${unsents(id).sender}")
      unsents(id).sender ! SnapshotAck(key, id)
      unsents = unsents - id
  end replica

  // register with the arbiter
  arbiter ! Join

  // make a Persistence actor
  var persister = context.actorOf(persistenceProps)

  override val supervisorStrategy: SupervisorStrategy = OneForOneStrategy():
    case _: PersistenceException => Restart

  // repeatedly ask the Persistence actor to reply with Persisted,
  // and the replicators to reply with Replicated
  context.system.scheduler.scheduleAtFixedRate(0.millis, 100.millis) { () =>
    unsents.foreach {
      case (id -> Unsent(_, key, valueOption, persisted, repliers)) =>
        if !persisted then persister ! Persist(key, valueOption, id)
        repliers.foreach(_ ! Replicate(key, valueOption, id))
    }

  }
