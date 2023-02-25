type Queens = List[Int]

def queens(using n: Int): Set[Queens] =
  def queens1(n: Int, k: Int): Set[Queens] =
    if k == 0 then Set(List())
    else
      for
        queens <- queens1(n, k - 1)
        j <- 0 until n
        if isSafe(j, queens)
      yield j :: queens
  queens1(n, n)

def isSafe(j: Int, queens: Queens): Boolean = !checked(j, queens)

def checked(j: Int, queens: Queens): Boolean =
  def checked1(j: Int, qrow: Int, queens: Queens): Boolean =
    queens match
      case qcol :: qs =>
        qcol == j
        || math.abs(qcol - j) == qrow
        || checked1(j, qrow + 1, qs)

      case _ => false
  checked1(j, 1, queens)

val (a, b) = Range(0, 4).toList.partition(_ < 2)
a.toString

def queenPrinter(queens: Queens)(using n: Int): Unit =
  queens.foreach(q => {
    print(Range(0, q).map(_ => " . ").mkString)
    print(" " + q + " ")
    println(Range(q + 1, n).map(_ => " . ").mkString)
  })
  println()

// queens.foreach(queenPrinter)

given n: Int = 8
queenPrinter(queens.head)
