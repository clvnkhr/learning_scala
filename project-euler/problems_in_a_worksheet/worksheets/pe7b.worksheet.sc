/* Rough estimate of the size of the 10001th prime

There are pi(n) ~ n/log(n) primes in 1...n
we need to find an n where n/log(n) is approximately 10001
200000/ln(200000) = 16,385.3 too much
100000/ln(100000) =  8,685.9 too little
150000/ln(150000) = 12,585.6 whatever lets use it
 */

val k = 150000
val start = (2 to k).toList

def sieve(unsifted: List[Int]): List[Int] =
  def sieve1(unsifted: List[Int], acc: List[Int]): List[Int] =
    if unsifted.isEmpty then acc.reverse
    else
      sieve1(unsifted.tail.filter( _ % unsifted.head != 0), unsifted.head :: acc)
  sieve1(unsifted, Nil)

sieve(start)(10001-1)
