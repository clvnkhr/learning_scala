// 23 Non-abundant sums
/*
A perfect number is a number for which the sum of its proper divisors is exactly equal to the number.
For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two
abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as
the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is
known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
 */

// reusing code from pe021
lazy val primes: LazyList[Int] = {
  2 #:: (
    LazyList
      .from(3)
      .filter(i => (primes.takeWhile(_ <= math.sqrt(i)).forall(i % _ != 0)))
  )
}

def pow(n: Int, power: Int): Int =
  def pow1(n: Int, power: Int, acc: Int): Int =
    if power == 0 then acc else pow1(n, power - 1, acc * n)
  pow1(n, power, 1)

def factorization(n: Int): Map[Int, Int] =
  @annotation.tailrec
  def fact1(n: Int, factors: Map[Int, Int]): Map[Int, Int] =
    if n == 1 then factors.withDefaultValue(0)
    else
      val minPrime = primes.filter(n % _ == 0).head
      val newFactors =
        factors.updated(minPrime, factors.getOrElse(minPrime, 0) + 1)
      fact1(n / minPrime, newFactors)
  fact1(n, Map())

def factors(n: Int): List[Int] =
  require(n > 0)
  val fact = factorization(n)
  def factors1(curFact: Map[Int, Int], acc: List[Int]): List[Int] =
    if curFact.isEmpty then acc
    else
      val (prime, k) = curFact.head
      factors1(
        curFact.tail,
        (0 to k).toList.flatMap(m => acc.map(_ / pow(prime, m)))
      )
  factors1(fact, List(n))

//new code below
factors(10)

extension (n: Int) def isAbundant: Boolean = factors(n).tail.sum > n

Range(1, 11).exists(_.isAbundant)
12.isAbundant

val abundants = LazyList.from(12).filter(_.isAbundant)

abundants(0)
abundants(100)

val upperBd = 28123
val summand = abundants.takeWhile(_ <= upperBd - 12)

upperBd * (upperBd + 1) / 2 - (for
  i <- summand
  j <- summand
  if i + j <= upperBd
yield (i + j)).distinct.sum
