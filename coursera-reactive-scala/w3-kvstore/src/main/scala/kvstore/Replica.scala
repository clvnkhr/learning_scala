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
  // a map from secondary replicas to replicators
  var secondaries = Map.empty[ActorRef, ActorRef]
  // the current set of replicators
  var replicators = Set.empty[ActorRef]

  def receive =
    case JoinedPrimary   => context.become(leader)
    case JoinedSecondary => context.become(replica)

  /* TODO Behavior for  the leader role. */
  val leader: Receive =
    case Insert(key, value, id) => {
      kv = kv + (key -> value)
      sender() ! OperationAck(id)
      replicators.foreach(_ ! Replicate(key, Some(value), id))
    }
    case Remove(key, id) => {
      kv = kv - key
      sender() ! OperationAck(id)
      replicators.foreach(_ ! Replicate(key, None, id))
    }
    case Get(key, id) => {
      sender() ! GetResult(key, kv.get(key), id)
    }
    case Replicas(replicas) => {
      for
        replica <- replicas
        if !secondaries.contains(replica)
      do
        val newReplicator = context.actorOf(Replicator.props(replica))
        secondaries += (replica -> newReplicator)
        replicators = replicators + newReplicator
    }
    case _ => ???

  /* TODO Behavior for the replica (secondary) role. */
  val replica: Receive = {
    case Get(key, id) => {
      sender() ! GetResult(key, kv.get(key), id)
    }
    case Snapshot(key, valueOption, seq) =>
      if seq < nextSeq then sender() ! SnapshotAck(key, seq)
      else if seq == nextSeq then
        nextSeq += 1
        valueOption match
          case None =>
            kv = kv - key
          case Some(value) =>
            kv = kv + (key -> value)
        sender() ! SnapshotAck(key, seq)
      else ()
  }

  override val supervisorStrategy: SupervisorStrategy = OneForOneStrategy() {
    case _: PersistenceException => Restart
  }

  // register with the arbiter
  arbiter ! Join

end Replica
