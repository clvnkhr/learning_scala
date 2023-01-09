def from(n: Int): LazyList[Int] = n #:: from(n + 1)

val nat = from(1)

def eratosthenes(l: LazyList[Int]): LazyList[Int] =
  l.head #:: eratosthenes(l.tail.filter(_ % l.head != 0))

val primes = eratosthenes(nat.tail)

// STACK OVERFLOW when running this in scala with 10001 in place of 500.
primes(500)
