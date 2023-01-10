import collection.immutable.HashMap

def from(n: Int): LazyList[Int] = n #:: from(n + 1)

def pow(n: Int, power: Int): Int =
  def pow1(n: Int, power: Int, acc: Int): Int =
    if power == 0 then acc else pow1(n, power-1, acc*n)
  pow1(n,power,1)

val nat = from(1)

def eratosthenes(l: LazyList[Int]): LazyList[Int] =
  l.head #:: eratosthenes(l.tail.filter(_ % l.head != 0))

val primes = eratosthenes(nat.tail)

def factorization(n: Int): Map[Int, Int] =
  def factor1(n: Int, factors: Map[Int,Int]): Map[Int, Int] =
    if n == 1 then factors.withDefaultValue(0)
    else
      val minPrime = primes.filter(n % _ == 0).head
      val newFactors = factors.updated(minPrime, factors.getOrElse(minPrime,0)+1)
      factor1(n/minPrime, newFactors)
  factor1(n,Map())

def factorsToNumber(factors: Map[Int,Int]) =
  factors.map( (prime,pows) => pow(prime,pows) ).foldLeft(1)(_ * _)

def leastFactors(n: Int) =
  def lf1(n: Int, acc: HashMap[Int,Int]): HashMap[Int,Int] =
    if n == 1 then acc
    else
      lf1(
        n-1, 
        acc.merged(factorization(n).to(HashMap))({ case ((k,v1),(_,v2)) => (k, v1 max v2) })
        )
  lf1(n, HashMap())
        
factorsToNumber(leastFactors(20))


