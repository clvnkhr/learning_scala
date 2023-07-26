package protocols

import akka.actor.typed.*
import akka.actor.typed.scaladsl.*

import scala.concurrent.duration.*
import akka.actor.TimerScheduler

object Transactor:
  sealed trait PrivateCommand[T] extends Product with Serializable
  final case class Committed[T](session: ActorRef[Session[T]], value: T)
      extends PrivateCommand[T]
  final case class RolledBack[T](session: ActorRef[Session[T]])
      extends PrivateCommand[T]

  sealed trait Command[T] extends PrivateCommand[T]
  final case class Begin[T](replyTo: ActorRef[ActorRef[Session[T]]])
      extends Command[T]

  sealed trait Session[T] extends Product with Serializable
  final case class Extract[T, U](f: T => U, replyTo: ActorRef[U])
      extends Session[T]
  final case class Modify[T, U](
      f: T => T,
      id: Long,
      reply: U,
      replyTo: ActorRef[U]
  ) extends Session[T]
  final case class Commit[T, U](reply: U, replyTo: ActorRef[U])
      extends Session[T]
  final case class Rollback[T]() extends Session[T]

  /** @return
    *   A behavior that accepts public [[Command]] messages. The behavior should
    *   be wrapped in a [[SelectiveReceive]] decorator (with a capacity of 30
    *   messages) so that beginning new sessions while there is already a
    *   currently running session is deferred to the point where the current
    *   session is terminated.
    * @param value
    *   Initial value of the transactor
    * @param sessionTimeout
    *   Delay before rolling back the pending modifications and terminating the
    *   session
    */
  def apply[T](value: T, sessionTimeout: FiniteDuration): Behavior[Command[T]] =
    val initialBehavior = idle(value, sessionTimeout).narrow[Command[T]]
    // narrow wasn't in the course, I don't think
    SelectiveReceive(30, initialBehavior)

  /** @return
    *   A behavior that defines how to react to any [[PrivateCommand]] when the
    *   transactor has no currently running session. [[Committed]] and
    *   [[RolledBack]] messages should be ignored, and a [[Begin]] message
    *   should create a new session.
    *
    * @param value
    *   Value of the transactor
    * @param sessionTimeout
    *   Delay before rolling back the pending modifications and terminating the
    *   session
    *
    * Note: To implement the timeout you have to use `ctx.scheduleOnce` instead
    * of `Behaviors.withTimers`, due to a current limitation of Akka:
    * https://github.com/akka/akka/issues/2486
    *
    * Hints:
    *   - When a [[Begin]] message is received, an anonymous child actor
    *     handling the session should be spawned,
    *   - In case the child actor is terminated, the session should be rolled
    *     back,
    *   - When `sessionTimeout` expires, the session should be rolled back,
    *   - After a session is started, the next behavior should be [[inSession]],
    *   - Messages other than [[Begin]] should not change the behavior.
    */
  private def idle[T](
      value: T,
      sessionTimeout: FiniteDuration
  ): Behavior[PrivateCommand[T]] =
    Behaviors.receive({
      case (ctx, Begin(replyTo)) =>
        val child = ctx.spawnAnonymous(sessionHandler(value, ctx.self, Set()))
        ctx.watchWith(child, RolledBack(child))
        ctx.scheduleOnce(sessionTimeout, child, Rollback())
        // NOTE: Somehow I pass with this above line, and without?
        // shouldn't I need to explicitly shut down the child actor?
        // and why doesn't it work with only the top line and not the below?
        // Is there too much delay?
        ctx.scheduleOnce(sessionTimeout, ctx.self, RolledBack(child))
        replyTo ! child
        inSession(value, sessionTimeout, child)
      case _ => Behaviors.same
    })

  /** @return
    *   A behavior that defines how to react to [[PrivateCommand]] messages when
    *   the transactor has a running session. [[Committed]] and [[RolledBack]]
    *   messages should commit and rollback the session, respectively. [[Begin]]
    *   messages should be unhandled (they will be handled by the
    *   [[SelectiveReceive]] decorator).
    *
    * @param rollbackValue
    *   Value to rollback to
    * @param sessionTimeout
    *   Timeout to use for the next session
    * @param sessionRef
    *   Reference to the child [[Session]] actor
    */
  private def inSession[T](
      rollbackValue: T,
      sessionTimeout: FiniteDuration,
      sessionRef: ActorRef[Session[T]]
  ): Behavior[PrivateCommand[T]] =
    Behaviors
      .receive({
        case (ctx, Begin(replyTo)) => Behaviors.unhandled
        case (ctx, Committed(session, value)) =>
          if session == sessionRef then idle(value, sessionTimeout)
          else Behaviors.same
        case (ctx, RolledBack(session)) =>
          if session == sessionRef then idle(rollbackValue, sessionTimeout)
          else Behaviors.same
      })

  /** @return
    *   A behavior handling [[Session]] messages. See in the instructions the
    *   precise semantics that each message should have.
    *
    * @param currentValue
    *   The session’s current value
    * @param commit
    *   Parent actor reference, to send the [[Committed]] message to
    * @param done
    *   Set of already applied [[Modify]] messages
    */
  private def sessionHandler[T](
      currentValue: T,
      commit: ActorRef[Committed[T]],
      done: Set[Long]
  ): Behavior[Session[T]] = Behaviors.receive[Session[T]] {
    case (ctx, Extract(f, replyTo)) =>
      try
        val newValue = f(currentValue)
        replyTo ! newValue
        Behaviors.same
      catch
        case _: Exception =>
          //   ctx.self ! Rollback()
          //   I think there's a problem with this:
          //   it just adds the message to the queue,
          //   which might process e.g. a commit in the meantime.
          //   I should instead short-circuit that.
          Behaviors.stopped
    case (ctx, Modify(f, id, reply, replyTo)) =>
      try
        if !done.contains(id)
        then
          val newValue = f(currentValue)
          replyTo ! reply
          sessionHandler(newValue, commit, done + id)
        else
          replyTo ! reply
          Behaviors.same
      catch case _: Exception => Behaviors.stopped
    case (ctx, Commit(reply, replyTo)) =>
      commit ! Committed(ctx.self, currentValue)
      replyTo ! reply
      Behaviors.stopped
    case (ctx, Rollback()) =>
      Behaviors.stopped
  }
