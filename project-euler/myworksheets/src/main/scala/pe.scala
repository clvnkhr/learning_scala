package projecteuler

import projecteuler.util._
import projecteuler.numbertheory._

def pe(number: Int) = number match
  case _: 1 =>
    (1 until 1000).filter(i => i % 3 == 0 || i % 5 == 0).sum

  case _: 2 =>
    @annotation.tailrec
    def pe002(f1: Int = 1, f2: Int = 1, total: Int = 0): Int =
      if f2 > 4000000 then total
      else
        val f3 = f1 + f2
        val newTotal = if f3 % 2 == 0 then total + f3 else total
        pe002(f2, f3, newTotal)
    pe002()

  case _: 3 =>
    divisors(600851475143L).head

  case _: 4 => {
    val n = 999
    extension (n: Int)
      def isPalindrome: Boolean =
        val str = n.toString
        str == str.reverse

    (
      for
        i <- (1 to n)
        j <- (i to n)
        if (i * j).isPalindrome
      yield i * j
    ).max(using (a, b) => if a > b then 1 else -1)
  }

  case _: 5 =>
    (1 to 20).map(BigInt(_)).foldLeft(BigInt(1))(lcm)

  case _: 6 =>
    sumFourthPowers(100) - sumCubes(100)

  case _: 7 =>
    primes(10001)

  case _: 8 =>
    (
      for i <- 0 until pe008data.length - 13
      yield pe008data
        .substring(i, i + 13)
        .toList
        .map(_.toInt - 48) // toInt on char gives the ASCII point...
        .foldLeft(BigInt(1))((a, b) => a * BigInt(b))
    ).max

  case _: 9 =>
    val maxlen: Int = 1000
    (for
      a <- 1 to maxlen
      b <- a to maxlen
      if a * a + b * b == (maxlen - b - a) * (maxlen - b - a)
    yield a * b * (maxlen - b - a)).head

  case _: 10 =>
    // TODO: this would be faster if we implemented a sieve
    primes.takeWhile(_ < 2_000_000).foldLeft(0L)(_ + _.toLong)

  case _: 11 => {
    val numList = pe011data.split("\\s+").map(_.toLong)
    val gridMap = (
      for
        i <- 0 until 20
        j <- 0 until 20
      yield (i, j) -> numList(i + 20 * j)
    ).toMap.withDefaultValue(0L)
    def window(pt: (Int, Int), dir: (Int, Int), w: Int) =
      for i <- 0 until w yield (pt(0) + i * dir(0), pt(1) + i * dir(1))
    (
      for
        i <- 0 to 20
        j <- 0 to 20
        direction <- List((1, 0), (0, 1), (1, 1), (1, -1))
      yield window((i, j), direction, 4).map(gridMap).product
    ).max
  }

  case _: 12 =>
    def numFactors(n: Int): Long =
      factorization(n).map((prime, pow) => pow + 1).product
    val triangles = LazyList.from(1).map(sumTo)
    triangles.filter(numFactors(_) > 500).head

  case _: 13 =>
    pe013data
      .split("\\s+")
      .map(BigInt(_))
      .foldLeft(BigInt(0))(_ + _)
      .toString
      .take(10)

  case _: 14 => {
    val m: Int = 1000000
    /* returns the length of the collatz sequence starting at n
     * */
    @annotation.tailrec
    def collatzlen(n: Long, len: Int = 0): Int =
      if n == 1 then len + 1
      else if n % 2 == 0 then collatzlen(n / 2, len + 1)
      else collatzlen((3 * n + 1) / 2, len + 2)

    (1 to m)
      .map(n => (n, collatzlen(n, 0)))
      .reduceLeft((p, q) => if p(1) > q(1) then p else q)(0)
  }

  case _: 15 => binom(40, 20)
  // Explanation: take h=20 steps down and w=20 steps right, in any order.
  // Use balls and bins model
  //
  case _: 16 => pow(2, 1000).toString.toList.map(_.toString.toInt).sum

  case _: 17 => {
    def basicToEnglish: Map[Int, String] = Map(
      1 -> "one",
      2 -> "two",
      3 -> "three",
      4 -> "four",
      5 -> "five",
      6 -> "six",
      7 -> "seven",
      8 -> "eight",
      9 -> "nine",
      10 -> "ten",
      11 -> "eleven",
      12 -> "twelve",
      13 -> "thirteen",
      14 -> "fourteen",
      15 -> "fifteen",
      16 -> "sixteen",
      17 -> "seventeen",
      18 -> "eighteen",
      19 -> "nineteen",
      20 -> "twenty",
      30 -> "thirty",
      40 -> "forty",
      50 -> "fifty",
      60 -> "sixty",
      70 -> "seventy",
      80 -> "eighty",
      90 -> "ninety"
    )
    def toEnglish(n: Int): String =
      if basicToEnglish contains n then basicToEnglish(n)
      else if (21 to 99) contains n then
        toEnglish((n / 10) * 10) + toEnglish(n % 10)
      else if (100 to 900 by 100) contains n then toEnglish(n / 100) + "hundred"
      else if (101 to 999) contains n then
        toEnglish((n / 100) * 100) + "and" + toEnglish(n % 100)
      else if n == 1000 then "one" + "thousand"
      else "huh?"

    (1 to 1000).map(toEnglish(_).length).sum
  }

  case _: 18 => {
    val triRows =
      pe018data.split("\n").toList.map(_.trim.split(" ").toList.map(_.toInt))
    def pathsum(directions: String): Long =
      @annotation.tailrec
      def psAcc(dir: String, acc: Long, point: (Int, Int)): Long =
        if dir.isEmpty then acc
        else
          val a = point(0) + 1
          val b = if dir.head == '0' then point(1) else point(1) + 1
          psAcc(dir.tail, acc + triRows(a)(b), (a, b))

      if directions.length <= 14 then psAcc(directions, triRows(0)(0), (0, 0))
      else 0

    (for i <- (0 to (math.pow(2, 15).toInt - 1)).map(_.toBinaryString)
    yield
      val l = i.length
      val rem = if l > 8 then 0 else 8 - l
      pathsum("0" * rem + i)
    ).max
  }

  case _: 19 => {
    val firstYear = 1901
    val lastYear = 2000
    def leapYear(year: Int): Boolean =
      year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)
    def numDaysInYear(year: Int): Int = if leapYear(year) then 366 else 365
    def lengthOfMonth(month: Int, year: Int): Int =
      require(month >= 1 && month <= 12)
      if month == 2 then if leapYear(year) then 29 else 28
      else if List(9, 4, 6, 11) contains month then 30
      else 31
    def firstsOfMonths(year: Int): Set[Int] =
      (1 to 12).map(lengthOfMonth(_, year)).scanLeft(0)(_ + _).toSet.map(_ + 1)
      //                                  one-indexing------------------^^^^^^^
    def setOfDay(day: Int, year: Int): Set[Int] =
      val offset =
        if year == 1900 then 0
        else
          val sgn = (year - 1900).sign
          ((1900 until year by sgn).map(numDaysInYear(_)).sum)
      (1 to numDaysInYear(year))
        .filter(d => (d + offset) % 7 == day % 7)
        .toSet

    (firstYear to lastYear)
      .map(year => (firstsOfMonths(year) & setOfDay(0, year)).size)
      .sum
  }

  case _: 20 =>
    factorial(100).toString.map(_.toString.toInt).foldLeft(0)(_ + _)

  case _: 21 =>
    def amicUpto(n: Int): List[Int] =
      for
        i <- (2 to n).toList
        i1 = psigma(i)
        if i == psigma(i1) && i != i1
      yield i
    amicUpto(10000).takeWhile(_ < 10000).sum

  case _: 22 =>
    val home = java.io.File(".").getAbsolutePath().dropRight(1)
    val bufferedSource =
      io.Source.fromFile(s"${home}src/main/scala/pe022names.txt")
    val sortedNames = bufferedSource.getLines.mkString
      .filter(_ != '"')
      .split(',')
      .sorted
    bufferedSource.close
    def score(index: Int, name: String): Int =
      def charScore(c: Char) = c.toInt - ('A'.toInt - 1)
      index * name.foldLeft(0)(_ + charScore(_))

    sortedNames
      .map(n => score(sortedNames.indexOf(n) + 1, n))
      .sum

  case _: 23 =>
    // WARNING: quite slow
    val upperBd: Int = 28123
    val abundants = LazyList.from(12).filter(_.isAbundant)
    val summand = abundants.takeWhile(_ <= upperBd - 12)

    upperBd * (upperBd + 1) / 2 - (for
      i <- summand
      j <- summand
      if i + j <= upperBd
    yield (i + j)).distinct.sum
  // solution with distinct is faster than toSet (!)

  case _: 24 =>
    // WARNING: quite slow and memory intensive
    // TODO: redo with pure math
    lazy val canonicalLists = (0 to 10).map(i => lexicoPerm((0 until i).toList))
    def lexicoPerm[A](lst: List[A]): LazyList[List[A]] =
      require(lst.length < 11) // any higher and it will never terminate
      lst match
        case Nil      => LazyList(Nil)
        case x :: Nil => LazyList(List(x))
        case _ =>
          val len = lst.length
          for
            i <- (0 until lst.length).to(LazyList)
            p <- canonicalLists(len - 1)
          yield lst(i) :: p.map(lst.take(i) ::: lst.drop(i + 1))
    end lexicoPerm
    lexicoPerm((0 to 9).toList)(1_000_000 - 1).mkString

  case _: 25 =>
    @annotation.tailrec
    def fibpe25(index: Int, prev1: BigInt, prev2: BigInt): Int =
      if prev1 >= pow(10, 1000 - 1) then index
      else fibpe25(index + 1, prev1 + prev2, prev1)
    fibpe25(2, 1, 1)
  case _: 27 =>
    // INFO: for n*n +  a*n + b to be prime at n=0,
    // we need b to be prime (and positive).
    // We also need a to be odd
    // (else we have for n=1, 1 + a + b which is even so cannot be prime)
    def numPrimesFromZero(a: Int, b: Int): Int = ???
    (for
      b <- primes.takeWhile(_ < 1000)
      a <- (-999 to 999 by 2)
    yield (a, b, numPrimesFromZero(a, b))).max
  case x => s"Solution $x is not implemented"

@main def main(problem: Int): Unit =
  if problem == 0 then for x <- (1 to 25) do main(x)
  else if problem == -1 then unitTests()
  else pprint(problem, pe(problem))
