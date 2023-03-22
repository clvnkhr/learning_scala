// 5 Smallest multiple

import collection.immutable.HashMap

def pow(n: Int, power: Int): Int =
  @annotation.tailrec
  def pow1(power: Int, acc: Int): Int =
    if power == 0 then acc
    else if power % 2 == 0 then pow1(power / 2, acc * acc)
    else pow1(power - 1, acc * n)
  if power == 0 then 1 else pow1(power - 1, n)

val primes: LazyList[Int] = 2 #:: LazyList
  .from(3)
  .filter(k => primes.takeWhile(_ <= math.sqrt(k)).forall(k % _ != 0))

def factorization(n: Int): Map[Int, Int] =
  @annotation.tailrec
  def factor1(n: Int, factors: Map[Int, Int]): Map[Int, Int] =
    if n == 1 then factors.withDefaultValue(0)
    else
      val minPrime = primes.filter(n % _ == 0).head
      val newFactors =
        factors.updated(minPrime, factors.getOrElse(minPrime, 0) + 1)
      factor1(n / minPrime, newFactors)
  factor1(n, Map())

def factorsToNumber(factors: Map[Int, Int]) =
  factors.map((prime, pows) => pow(prime, pows)).foldLeft(1)(_ * _)

def gcd(x: BigInt, y: BigInt): BigInt =
  val (div, mod) = x /% y
  if mod == 0 then div else gcd(y, mod)

def leastFactors(n: Int) =
  def lf1(n: Int, acc: HashMap[Int, Int]): HashMap[Int, Int] =
    if n == 1 then acc
    else
      lf1(
        n - 1,
        acc.merged(factorization(n).to(HashMap))({ case ((k, v1), (_, v2)) =>
          (k, v1 max v2)
        })
      )
  lf1(n, HashMap())

factorsToNumber(leastFactors(20))
