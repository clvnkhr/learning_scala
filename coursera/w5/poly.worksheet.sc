class Polynom(nonZeroTerms: Map[Int, Double]):

  def this(bindings: (Int, Double)*)  = this(bindings.toMap)

  val terms = nonZeroTerms.withDefaultValue(0.0)

  def + (other: Polynom): Polynom = 
    Polynom(terms ++ other.terms.map((exp, coeff) => (exp, this.terms(exp) + coeff)))

  def unary_- : Polynom = Polynom(terms.map((exp,coeff) => (exp,-coeff)))

  def - (other: Polynom): Polynom = 
    this + (- other)

  def pprint(s: String): String = 
    if s.isEmpty then ""
    else 
      if s.head == '-' then "- " + s.tail else "+ " + s   

  override def toString =
    val termStrings =
      for (exp, coeff) <- this.terms.toList.sortWith( _._1 > _._1 )
      yield
        val exponent = exp match
          case 0 => ""
          case 1 => "x"
          case _ => s"x^$exp"
        s"${coeff}$exponent"
    termStrings match
      case Nil => "0"
      case head :: next => (head :: next.map(pprint)).mkString(" ")


    


  // override def toString =
  //   val signsAndTerms =
  //     for (exp, coeff) <- this.terms.toList.sortWith( _._1 > _._1 )
  //     yield
  //       val exponent = exp match
  //         case 0 => ""
  //         case 1 => "x"
  //         case _ => s"x^$exp"
  //       val sign = if coeff >= 0 then "+" else "-"
  //       val coeffAsString = 
  //         if (coeff - coeff.round).abs < 0.0001 then coeff.abs.round.toString else coeff.abs.toString
  //       (sign,s"${coeffAsString}$exponent")
  //   if terms.isEmpty then "0.0" else 
  //     val (firstSign, firstTerm) = signsAndTerms.head
  //     val firstTermString = if firstSign == "+" then firstTerm else "- " + firstTerm  
  //     val otherTermStrings = signsAndTerms.tail.map(" " + _ + " " + _).mkString
  //     firstTermString + otherTermStrings

    // termStrings.mkString(" + ")

val p1 = Polynom(0 -> 1, 3 -> 6)
val p2 = Polynom()
val p3 = Polynom(1 -> -1,5 -> -5, 3 -> -12.3)

p1 + p3

- p1

p1 - p3

// note though that it is now impossible to create Polynomials explicitly with Map[Int, Int]:

// val p4 = Polynom(Map(3->1)) 

// WHY?

 val p4 = Polynom(Map(3->1.0)) // WHY???