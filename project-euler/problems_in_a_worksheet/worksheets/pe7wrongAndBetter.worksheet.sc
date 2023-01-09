def from(n: Int): LazyList[Int] = n #:: from(n + 1)
val nat = from(1)
def eratosthenes(l: LazyList[Int]): LazyList[Int] =
  l.head #:: eratosthenes(l.tail.filter(_ % l.head != 0))
lazy val primes = eratosthenes(nat.tail)

// STACK OVERFLOW when running this in scala with 10001 in place of 100.
// problem: too many function calls.
primes(100)

val betterprimes: LazyList[Int] =
  2 #:: (
    from(3).filter(i =>
      (betterprimes.takeWhile(_ <= math.sqrt(i)).forall(i % _ != 0))
    )
  )

betterprimes(10001)
