/* val primes: LazyList[Int] = 2 #:: LazyList
  .from(3)
  .filter(n => primes.takeWhile(_ <= math.sqrt(n)).forall(k => n % k != 0))

primes.take(1).toList
def sumOfDivided(lst: Array[Int]): String =
  (for p <- primes
      .takeWhile(q => q <= lst.max)
      .filter(q => lst.exists(_ % q == 0))
  yield (p, lst.filter(_ % p == 0).sum)).mkString

sumOfDivided(Array(-2, 3, -6))
 */

// LazyList.from(1L)

object Sol {
  val primes: LazyList[Int] = 2 #:: LazyList
    .from(3)
    .filter(k => primes.takeWhile(_ <= math.sqrt(k)).forall(k % _ != 0))

  def factorization(n: Long): Map[Int, Int] =
    @annotation.tailrec
    def factor1(n: Long, factors: Map[Int, Int]): Map[Int, Int] =
      if n == 1 then factors.withDefaultValue(0)
      else
        val minPrime = primes.filter(n % _ == 0).head
        val newFactors =
          factors.updated(minPrime, factors.getOrElse(minPrime, 0) + 1)
        factor1(n / minPrime, newFactors)
    factor1(n, Map())

  def fallingPow(n: Int, k: Int): Long =
    def fPow1(n: Int, k: Int, acc: Long): Long =
      if k == 0 then acc
      else fPow1(n - 1, k - 1, acc * n)
    fPow1(n, k, 1)

  def fact(n: Int): Long = fallingPow(n, n)

  def binom(n: Int, k: Int): Long =
    val (small, big) = (math.min(k, n - k), math.max(k, n - k))
    fallingPow(n, big) / fact(small)

  def numFactors(n: Long): Long =
    factorization(n).values.foldLeft(1)(_ * _)

  // def totient(n: Long):
//
}

Sol.factorization(600)
Sol.fact(10)
Sol.fallingPow(10, 10)
Sol.numFactors(600)
Sol.binom(4, 2)
