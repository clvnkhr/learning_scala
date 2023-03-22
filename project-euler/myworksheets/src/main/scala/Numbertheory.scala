package projecteuler
package numbertheory

def fromL(n: Long, jump: Long = 1L): LazyList[Long] = n #:: fromL(n + jump)

val primes: LazyList[Int] = 2 #:: LazyList
  .from(3)
  .filter(k => primes.takeWhile(_ <= math.sqrt(k)).forall(k % _ != 0))

val primesL: LazyList[Long] = 2L #:: fromL(3L).filter(k =>
  primesL.takeWhile(_ <= math.sqrt(k)).forall(k % _ != 0)
)

def pow(n: BigInt, power: Long): BigInt =
  assert(power >= 0)
  @annotation.tailrec
  def pow1(n: BigInt, power: Long, acc: BigInt): BigInt =
    assert(power >= 0)
    if power == 0 then acc
    else if power % 2 == 0 then pow1(n * n, power / 2, acc)
    else pow1(n, power - 1, acc * n)
  pow1(n, power, 1)

def divisors(n: Long): List[Long] =
  def divisors1(n: Long, k: Long, acc: List[Long]): List[Long] =
    if n < k then acc
    else if n % k == 0 then divisors1(n / k, k, k :: acc)
    else divisors1(n, k + 1, acc)
  divisors1(n, 2, Nil)

def factorization(n: BigInt): Map[Int, Long] =
  @annotation.tailrec
  def factor1(n: BigInt, factors: Map[Int, Long]): Map[Int, Long] =
    if n == 1 then factors.withDefaultValue(0)
    else
      val minPrime = primes.filter(n % _ == 0).head
      val newFactors =
        factors.updated(minPrime, factors.getOrElse(minPrime, 0L) + 1)
      factor1(n / minPrime, newFactors)
  factor1(n, Map())

def factorsToNumber(factors: Map[Int, Long]) =
  factors.map((prime, pows) => pow(prime, pows)).foldLeft(BigInt(1))(_ * _)

def totient(n: BigInt): BigInt =
  val factors = factorization(n)
  (for (prime, power) <- factors
  yield pow(prime, power - 1) * (prime - 1)).foldLeft(BigInt(1))(_ * _)

def gcd(a: BigInt, b: BigInt): BigInt =
  val (q, r) = a /% b
  if r == 0 then b else gcd(b, r)

// TODO: https://en.wikipedia.org/wiki/Extended_Euclidean_algorithm

def hcf(a: BigInt, b: BigInt): BigInt = a * b / gcd(a, b)

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

@main def tests: Unit =
  println(primes.take(7).toList == List(2, 3, 5, 7, 11, 13, 17))
  println((0 to 10).map(pow(2, _)))
  println(totient(700000000))
  println(gcd(5, 7))
  println(gcd(18, 4))
  println(gcd(400, 950))
