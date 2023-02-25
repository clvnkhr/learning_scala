// 10 Summation of primes

lazy val primes: LazyList[Int] =
  2 #:: LazyList
    .from(3)
    .filter(i => (primes.takeWhile(_ <= math.sqrt(i)).forall(i % _ != 0)))

primes.takeWhile(_ < 2000000).foldLeft(0.toLong)(_ + _.toLong)
