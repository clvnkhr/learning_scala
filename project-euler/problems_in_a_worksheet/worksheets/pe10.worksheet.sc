/* Rough estimate of the size of the 2 millionth prime

There are pi(n) ~ n/log(n) primes in 1...n
we need to find an n where n/log(n) is approximately 2 000 000.

def from(n: Int): LazyList[Int] = n #:: from(n+1)
from(2).filter(n => n/math.log(n) >= 2000000).head

after like 10 seconds gives 34725999.
 */

// val k = 34725999
val k = 2000
val start = (2 to k).to(List)

def primesum(unsifted: List[Int]): (BigInt,Int) =
  def sieve(unsifted: List[Int], acc: BigInt, biggest: Int): (BigInt,Int) =
    if unsifted.isEmpty then (acc, biggest)
    else sieve(unsifted.tail.filter( _ % unsifted.head != 0), BigInt(unsifted.head) + acc, unsifted.head)
  sieve(unsifted, 0, 0)

primesum(start)
