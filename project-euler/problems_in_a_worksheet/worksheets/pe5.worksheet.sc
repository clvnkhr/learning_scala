def from(n: Int): LazyList[Int] = n #:: from(n + 1)

val nat = from(1)

def eratosthenes(l: LazyList[Int]): LazyList[Int] =
  l.head #:: eratosthenes(l.tail.filter(_ % l.head != 0))

val primes = eratosthenes(nat.tail)
primes.take(30).toList

def factorization(n: Int): Map[Int, Int] =
  def factor1(n: Int, factors: Map[Int,Int]): Map[Int, Int] =
    if n == 1 then factors.withDefaultValue(0)
    else
      val minPrime = primes.filter(n % _ == 0).head
      val newMap = factors.updated(minPrime, factors.getOrElse(minPrime,0)+1)
      factor1(n/minPrime, newMap)
  factor1(n,Map())

val primesLessThanTwenty = primes.filter( _ <= 20).toList
