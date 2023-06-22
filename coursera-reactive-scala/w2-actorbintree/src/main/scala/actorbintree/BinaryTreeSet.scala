/** Copyright (C) 2009-2013 Typesafe Inc. <http://www.typesafe.com>
  */
package actorbintree

import akka.actor.*
import scala.collection.immutable.Queue

object BinaryTreeSet:

  trait Operation:
    def requester: ActorRef
    def id: Int
    def elem: Int

  trait OperationReply:
    def id: Int

  /** Request with identifier `id` to insert an element `elem` into the tree.
    * The actor at reference `requester` should be notified when this operation
    * is completed.
    */
  case class Insert(requester: ActorRef, id: Int, elem: Int) extends Operation

  /** Request with identifier `id` to check whether an element `elem` is present
    * in the tree. The actor at reference `requester` should be notified when
    * this operation is completed.
    */
  case class Contains(requester: ActorRef, id: Int, elem: Int) extends Operation

  /** Request with identifier `id` to remove the element `elem` from the tree.
    * The actor at reference `requester` should be notified when this operation
    * is completed.
    */
  case class Remove(requester: ActorRef, id: Int, elem: Int) extends Operation

  /** Request to perform garbage collection */
  case object GC

  /** Holds the answer to the Contains request with identifier `id`. `result` is
    * true if and only if the element is present in the tree.
    */
  case class ContainsResult(id: Int, result: Boolean) extends OperationReply

  /** Message to signal successful completion of an insert or remove operation.
    */
  case class OperationFinished(id: Int) extends OperationReply
end BinaryTreeSet

class BinaryTreeSet extends Actor:
  import BinaryTreeSet.*
  import BinaryTreeNode.*

  def createRoot: ActorRef =
    context.actorOf(BinaryTreeNode.props(0, initiallyRemoved = true))

  var root = createRoot

  type pendingOps = Operation | GC.type
  // optional (used to stash incoming operations during garbage collection)
  var pendingQueue = Queue.empty[pendingOps]

  // optional
  def receive = normal

  // optional
  /** Accepts `Operation` and `GC` messages. */
  val normal: Receive = {
    case op: Operation => root ! op
    case GC =>
      val newRoot = createRoot
      root ! CopyTo(newRoot)
      context.become(garbageCollecting(newRoot))
  }

  // optional
  /** Handles messages while garbage collection is performed. `newRoot` is the
    * root of the new binary tree where we want to copy all non-removed elements
    * into.
    */
  def garbageCollecting(newRoot: ActorRef): Receive = {
    case op: pendingOps => pendingQueue = pendingQueue.enqueue(op)
    case CopyFinished =>
      root ! PoisonPill
      root = newRoot
      context.become(normal)
      for op <- pendingQueue do root ! op
      pendingQueue = Queue.empty[Operation]
  }

end BinaryTreeSet

object BinaryTreeNode:
  trait Position

  case object Left extends Position
  case object Right extends Position

  case class CopyTo(treeNode: ActorRef)

  /** Acknowledges that a copy has been completed. This message should be sent
    * from a node to its parent, when this node and all its children nodes have
    * finished being copied.
    */
  case object CopyFinished

  def props(elem: Int, initiallyRemoved: Boolean) =
    Props(classOf[BinaryTreeNode], elem, initiallyRemoved)
end BinaryTreeNode

class BinaryTreeNode(val elem: Int, initiallyRemoved: Boolean) extends Actor:
  import BinaryTreeNode.*
  import BinaryTreeSet.*

  var subtrees = Map[Position, ActorRef]()
  var removed = initiallyRemoved

  // optional
  def receive = normal

  // optional
  /** Handles `Operation` messages and `CopyTo` requests. */
  val normal: Receive = {
    case Contains(req, id, elem) =>
      if this.elem == elem then req ! ContainsResult(id, !removed)
      else
        val direction = if elem < this.elem then Left else Right
        if subtrees contains direction then
          subtrees(direction) ! Contains(req, id, elem)
        else req ! ContainsResult(id, false)

    case Insert(req, id, elem) =>
      if this.elem == elem then
        removed = false
        req ! OperationFinished(id)
      else
        val direction = if elem < this.elem then Left else Right
        if subtrees.contains(direction) then
          subtrees(direction) ! Insert(req, id, elem)
        else
          subtrees += direction -> context.actorOf(
            BinaryTreeNode.props(elem, false)
          )
          req ! OperationFinished(id)

    case Remove(req, id, elem) =>
      if this.elem == elem then
        removed = true
        req ! OperationFinished(id)
      else
        val direction = if elem < this.elem then Left else Right
        if subtrees.contains(direction) then
          subtrees(direction) ! Remove(req, id, elem)
        else req ! OperationFinished(id)

    case CopyTo(node) =>
      if !removed then node ! Insert(self, 42, elem)
      if subtrees.isEmpty then
        sender() ! CopyFinished
        context.become(normal)
      else
        context.become(copying(subtrees.values.toSet))
        for child <- subtrees.values
        do child ! CopyTo(node)

  }

  // optional
  /** `expected` is the set of ActorRefs whose replies we are waiting for,
    * `insertConfirmed` tracks whether the copy of this node to the new tree has
    * been confirmed.
    */
  def copying(expected: Set[ActorRef]): Receive = { case CopyFinished =>
    if (expected - sender()).isEmpty then
      context.parent ! CopyFinished
      sender() ! PoisonPill
    else context.become(copying(expected - sender()))
  }

end BinaryTreeNode
