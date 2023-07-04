package kvstore

import akka.actor.Props
import akka.actor.Actor
import akka.actor.ActorRef
import akka.actor.actorRef2Scala
import scala.concurrent.duration.*
import akka.actor.SupervisorStrategy
import akka.actor.OneForOneStrategy

object Replicator:
  case class Replicate(key: String, valueOption: Option[String], id: Long)
  case class Replicated(key: String, id: Long)

  case class Snapshot(key: String, valueOption: Option[String], seq: Long)
  case class SnapshotAck(key: String, seq: Long)

  def props(replica: ActorRef): Props = Props(Replicator(replica))

class Replicator(val replica: ActorRef) extends Actor:
  import Replicator.*
  import context.dispatcher

  /*
   * The contents of this actor is just a suggestion, you can implement it in any way you like.
   */

  // map from sequence number to pair of sender and request
  var acks = Map.empty[Long, (ActorRef, Replicate)]
  // a sequence of not-yet-sent snapshots (you can disregard this if not implementing batching)
  var pending = Vector.empty[Snapshot]

  var _seqCounter = 0L
  def nextSeq() =
    val ret = _seqCounter
    _seqCounter += 1
    ret

  /* TODO Behavior for the Replicator. */
  def receive: Receive =
    case Replicate(key, valueOption, id) =>
      acks = acks + (nextSeq() -> (sender(), Replicate(key, valueOption, id)))

    case SnapshotAck(key, seq) =>
      for (ackRef: ActorRef, Replicate(_, _, id)) <- acks.get(seq)
      do
        acks = acks - seq
        ackRef ! Replicated(key, id)

  context.system.scheduler.scheduleAtFixedRate(0.millis, 100.millis) { () =>
    acks.foreach { case (seq, (_, Replicate(key, valueOption, _))) =>
      replica ! Snapshot(key, valueOption, seq)
    }
  }
