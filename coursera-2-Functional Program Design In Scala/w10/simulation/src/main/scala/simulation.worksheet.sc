trait Simulation:
  type Action = () => Unit

  private case class Event(time: Int, action: Action)
  private type Agenda = List[Event]
  private var agenda: Agenda = List()
  private var curtime = 0

  def currentTime: Int = curtime

  def afterDelay(delay: Int)(block: => Unit): Unit =
    val item = Event(currentTime + delay, () => block)
    val (earlier, later) = agenda.span(_.time < item.time)
    agenda = earlier ++ (item :: later)

  def run(): Unit =
    afterDelay(0) {
      println(s"*** simulation started, time = $currentTime ***")
    }
    loop()

  private def loop(): Unit = agenda match
    case first :: rest =>
      agenda = rest
      curtime = first.time
      first.action()
      loop()
    case Nil =>
end Simulation

trait Gates extends Simulation:

  def InverterDelay: Int
  def AndGateDelay: Int
  def OrGateDelay: Int
  class Wire:
    private var sigVal = false

    private var actions: List[Action] = List()

    def getSignal(): Boolean = sigVal

    def setSignal(s: Boolean): Unit =
      if s != sigVal then
        sigVal = s
        actions.foreach(_())

    def addAction(a: Action): Unit =
      actions = a :: actions
      a()
  end Wire

  def inverter(input: Wire, output: Wire): Unit =
    def invertAction(): Unit =
      val inputSig = input.getSignal()
      afterDelay(InverterDelay)(output.setSignal(!inputSig))
    input.addAction(invertAction)

  def andGate(in1: Wire, in2: Wire, output: Wire): Unit =
    def andAction(): Unit =
      val in1Sig = in1.getSignal()
      val in2Sig = in2.getSignal()
      afterDelay(AndGateDelay)(output.setSignal(in1Sig & in2Sig))
    in1.addAction(andAction)
    in2.addAction(andAction)

  def orGate(in1: Wire, in2: Wire, output: Wire): Unit =
    def orAction(): Unit =
      val in1Sig = in1.getSignal()
      val in2Sig = in2.getSignal()
      afterDelay(OrGateDelay)(output.setSignal(in1Sig | in2Sig))
    in1.addAction(orAction)
    in2.addAction(orAction)

  def probe(name: String, wire: Wire): Unit =
    def probeAction(): Unit =
      println(s"$name $currentTime value = ${wire.getSignal()}")
    wire.addAction(probeAction)

  // orGate2 from exercise
  def orGate2(in1: Wire, in2: Wire, output: Wire): Unit =
    def orAction(): Unit =
      afterDelay(OrGateDelay) {
        output.setSignal(in1.getSignal() | in2.getSignal())
      }
    in1.addAction(orAction)
    in2.addAction(orAction)

  // orGateAlt from slides
  def orGateAlt(inl: Wire, in2: Wire, output: Wire): Unit =
    val notIn1, notIn2, notOut = Wire()
    inverter(inl, notIn1); inverter(in2, notIn2)
    andGate(notIn1, notIn2, notOut)
    inverter(notOut, output)
end Gates

trait Circuits extends Gates:

  def halfAdder(a: Wire, b: Wire, s: Wire, c: Wire): Unit =
    val d = Wire()
    val e = Wire()
    orGate(a, b, d)
    andGate(a, b, c)
    inverter(c, e)
    andGate(d, e, s)

  def fullAdder(a: Wire, b: Wire, cin: Wire, sum: Wire, cout: Wire): Unit =
    val s = Wire()
    val c1 = Wire()
    val c2 = Wire()
    halfAdder(a, cin, s, c1)
    halfAdder(b, s, sum, c2)
    orGate(c1, c2, cout)
end Circuits

object sim extends Circuits, Delays

trait Delays:
  def InverterDelay = 2
  def AndGateDelay = 3
  def OrGateDelay = 5
end Delays

import sim._
val input1, input2, sum, carry = Wire()
probe("sum", sum)
probe("carry", carry)
halfAdder(input1, input2, sum, carry)

input1.setSignal(true)
run()
input2.setSignal(true)
run()
