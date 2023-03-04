package numbertheory

def divisors(n: Long): List[Long] =
  def divisors1(n: Long, k: Long, acc: List[Long]): List[Long] =
    if n < k then acc
    else if n % k == 0 then divisors1(n / k, k, k :: acc)
    else divisors1(n, k + 1, acc)
  divisors1(n, 2, Nil)

def pow(n: Long, power: Int): Long =
  @annotation.tailrec
  def pow1(n: Long, power: Int, acc: Long): Long =
    if power == 0 then acc else pow1(n, power - 1, acc * n)
  pow1(n, power, 1)

val primes: LazyList[Int] =
  2 #:: (
    LazyList
      .from(3)
      .filter(i => (primes.takeWhile(_ <= math.sqrt(i)).forall(i % _ != 0)))
  )

def factorization(n: Int): Map[Int, Int] =
  @annotation.tailrec
  def factor1(n: Int, factors: Map[Int, Int]): Map[Int, Int] =
    if n == 1 then factors.withDefaultValue(0)
    else
      val minPrime = primes.filter(n % _ == 0).head
      val newFactors =
        factors.updated(minPrime, factors.getOrElse(minPrime, 0) + 1)
      factor1(n / minPrime, newFactors)
  factor1(n, Map())

@main def pe014: Unit =
  @annotation.tailrec
  def len(n: Long, k: Int = 0): Int =
    if n == 1 then k + 1
    else if n % 2 == 0 then len(n / 2, k + 1)
    else len((3 * n + 1) / 2, k + 2)

  println(
    (1 to 1000000)
      .map(n => (n, len(n, 0)))
      .reduceLeft((p, q) => if p(1) > q(1) then p else q)(0)
  )
