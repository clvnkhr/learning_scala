// 12 Highly divisible triangular number

val primes: LazyList[Int] =
  2 #:: (
    LazyList
      .from(3)
      .filter(i => (primes.takeWhile(_ <= math.sqrt(i)).forall(i % _ != 0)))
  )

def factorization(n: Int): Map[Int, Int] =
  def factor1(n: Int, factors: Map[Int, Int]): Map[Int, Int] =
    if n == 1 then factors.withDefaultValue(0)
    else
      val minPrime = primes.filter(n % _ == 0).head
      val newFactors =
        factors.updated(minPrime, factors.getOrElse(minPrime, 0) + 1)
      factor1(n / minPrime, newFactors)
  factor1(n, Map())

def numFactors(n: Int): Int =
  factorization(n).map((prime, pow) => pow + 1).product

val triangles = LazyList.from(1).map(n => n * (n + 1) / 2)

triangles.filter(numFactors(_) > 500).head
