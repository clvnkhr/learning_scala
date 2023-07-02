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

  var persists = Map.empty[Long, (ActorRef, Persist)]
  var persistChecks = Map.empty[Long, Cancellable]
  def persistTimer(id: Long) = if persists.contains(id) then
    persists(id)(0) ! OperationFailed(id)
    persists = persists - id

  def receive =
    case JoinedPrimary   => context.become(leader)
    case JoinedSecondary => context.become(replica)

  /* TODO Behavior for  the leader role. */
  val leader: Receive =
    case Insert(key, value, id) =>
      kv = kv + (key -> value)
      replicators.foreach(_ ! Replicate(key, Some(value), id))
      persists = persists + (id -> (sender(), Persist(key, Some(value), id)))
      val persistCheck =
        context.system.scheduler.scheduleOnce(1.second)(persistTimer(id))
      persistChecks = persistChecks + (id -> persistCheck)

    case Remove(key, id) =>
      kv = kv - key
      replicators.foreach(_ ! Replicate(key, None, id))
      persists = persists + (id -> (sender(), Persist(key, None, id)))
      val persistCheck =
        context.system.scheduler.scheduleOnce(1.second)(persistTimer(id))
      persistChecks = persistChecks + (id -> persistCheck)

    case Get(key, id) =>
      sender() ! GetResult(key, kv.get(key), id)

    case Replicas(replicas) =>
      // TODO: need to consider how to remove replicas that exit the system
      for
        replica <- replicas
        if !secondaries.contains(replica)
      do
        val newReplicator = context.actorOf(Replicator.props(replica))
        secondaries += (replica -> newReplicator)
        replicators = replicators + newReplicator

    case Persisted(key, id) =>
      persists(id)(0) ! OperationAck(id)
      persistChecks(id).cancel()
      persists = persists - id

    case _ => ???

  /* TODO Behavior for the replica (secondary) role. */
  val replica: Receive = {
    case Get(key, id) =>
      sender() ! GetResult(key, kv.get(key), id)

    case Snapshot(key, valueOption, seq) =>
      if seq < nextSeq then sender() ! SnapshotAck(key, seq)
      else if seq == nextSeq then
        nextSeq += 1 // TODO: change this maybe? not working
        valueOption match
          case None =>
            kv = kv - key
          case Some(value) =>
            kv = kv + (key -> value)
        persists =
          persists + (seq -> (sender(), Persist(key, valueOption, seq)))
        // sender() ! SnapshotAck(key, seq)
      else ()
    case Persisted(key, id) =>
      persists(id)(0) ! SnapshotAck(key, id)
      persists = persists - id
  }

  override val supervisorStrategy: SupervisorStrategy = OneForOneStrategy() {
    case _: PersistenceException => Restart
  }

  // register with the arbiter
  arbiter ! Join

  // make a Persistence actor
  var persister = context.actorOf(persistenceProps)

  // repeatedly ask the Persistence actor to reply with Persisted
  context.system.scheduler.scheduleAtFixedRate(0.millis, 100.millis) { () =>
    persists.foreach { case (seq, (_, p: Persist)) =>
      persister ! p
    }
  }
