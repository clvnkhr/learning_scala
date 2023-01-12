val primes: LazyList[Int] =
  2 #:: (
    LazyList
      .from(3)
      .filter(i => (primes.takeWhile(_ <= math.sqrt(i)).forall(i % _ != 0)))
  )

def pow(n: Int, power: Int): Int =
  def pow1(n: Int, power: Int, acc: Int): Int =
    if power == 0 then acc else pow1(n, power - 1, acc * n)
  pow1(n, power, 1)

def factorization(n: Int): Map[Int, Int] =
  def fact1(n: Int, factors: Map[Int, Int]): Map[Int, Int] =
    if n == 1 then factors.withDefaultValue(0)
    else
      val minPrime = primes.filter(n % _ == 0).head
      val newFactors =
        factors.updated(minPrime, factors.getOrElse(minPrime, 0) + 1)
      fact1(n / minPrime, newFactors)
  fact1(n, Map())

def factors(n: Int): List[Int] =
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

factors(130)

def sigma(n: Int) = factors(n).sum

def psigma(n: Int) = factors(n).sum - n

def amic(n: Int) =
  if n < 2 then false else (psigma(psigma(n)) == n)

amic(220)

def amicUpto(n: Int): List[Int] =
  for
    i <- (2 to n).toList
    i1 = psigma(i)
    if i == psigma(i1) && i != i1
  yield i

amicUpto(10000).takeWhile(_ < 10000).sum
