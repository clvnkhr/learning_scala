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
import akka.actor.Cancellable

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
  // a map from secondary replicas to replicators
  var secondaries = Map.empty[ActorRef, ActorRef]
  // the current set of replicators
  var replicators = Set.empty[ActorRef]

  var unsent = Map.empty[Long, (ActorRef, Option[Persist], Option[Replicate])]
  var checks = Map.empty[Long, Cancellable]

  def checkForFailure(id: Long) = if unsent.contains(id) then
    unsent(id)(0) ! OperationFailed(id)
    unsent = unsent - id

  def ackAttempt(id: Long) = unsent(id) match
    case (sender, None, None) =>
      checks(id).cancel()
      sender ! OperationAck(id)
      checks = checks - id
      unsent = unsent - id
    case _ => ()

  def receive =
    case JoinedPrimary   => context.become(leader)
    case JoinedSecondary => context.become(replica)

  /* TODO Behavior for  the leader role. */
  val leader: Receive =
    case Replicas(replicas) =>
      // NOTE: remove replicators whose replicas that have left the system
      for
        (replica, replicator) <- secondaries
        if !replicas.contains(replica)
      do
        replicator ! PoisonPill
        secondaries = secondaries - replica
        replicators = replicators - replicator

      // NOTE: add new replicas and start new replicators for them
      for
        replica <- replicas
        if !secondaries.contains(replica)
      do
        val newReplicator = context.actorOf(Replicator.props(replica))
        secondaries += (replica -> newReplicator)
        replicators = replicators + newReplicator

    case Insert(key, value, id) =>
      kv = kv + (key -> value)
      unsent = unsent + (id -> (
        sender(),
        Some(Persist(key, Some(value), id)),
        if replicators.nonEmpty then Some(Replicate(key, Some(value), id))
        else None
      ))

      val check =
        context.system.scheduler.scheduleOnce(1.second)(checkForFailure(id))
      checks = checks + (id -> check)

    case Remove(key, id) =>
      kv = kv - key
      unsent = unsent + (id -> (
        sender(),
        Some(Persist(key, None, id)),
        if replicators.nonEmpty then Some(Replicate(key, None, id)) else None
      ))

      val check =
        context.system.scheduler.scheduleOnce(1.second)(checkForFailure(id))
      checks = checks + (id -> check)

    case Get(key, id) =>
      sender() ! GetResult(key, kv.get(key), id)

    case Persisted(key, id) =>
      val prev = unsent(id)
      unsent = unsent + (id -> (prev(0), None, prev(2)))
      ackAttempt(id)

    case Replicated(key, id) =>
      val prev = unsent(id)
      unsent = unsent + (id -> (prev(0), prev(1), None))
      ackAttempt(id)

  end leader

  /* TODO Behavior for the replica (secondary) role. */
  val replica: Receive =
    case Get(key, id) =>
      sender() ! GetResult(key, kv.get(key), id)

    case Snapshot(key, valueOption, seq) =>
      if seq < nextSeq then sender() ! SnapshotAck(key, seq)
      else if seq == nextSeq then
        nextSeq += 1
        valueOption match
          case None =>
            kv = kv - key
          case Some(value) =>
            kv = kv + (key -> value)
        unsent = unsent + (seq -> (sender(),
        Some(Persist(key, valueOption, seq)),
        None))
      else ()
    case Persisted(key, id) =>
      unsent(id)(0) ! SnapshotAck(key, id)
      unsent = unsent - id
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
    unsent.foreach {
      case (_, (_, op: Option[Persist], or: Option[Replicate])) =>
        // println(s"[op,or]=[$op,$or], replicators = $replicators")
        op.foreach(p => persister ! p)
        or.foreach(r => replicators.foreach(reptrs => reptrs ! r))
    }
  }
