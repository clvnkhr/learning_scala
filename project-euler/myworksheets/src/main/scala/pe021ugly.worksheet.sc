val primes: LazyList[Int] =
  2 #:: (
    LazyList
      .from(3)
      .filter(i => (primes.takeWhile(_ <= math.sqrt(i)).forall(i % _ != 0)))
  )

def factorization(n: Int): Map[Int, Int] =
  def factor1(n: Int, factors: Map[Int, Int]): Map[Int, Int] =
    if n == 1 then factors.withDefaultValue(0)
    else
      val minPrime = primes.filter(n % _ == 0).head
      val newFactors =
        factors.updated(minPrime, factors.getOrElse(minPrime, 0) + 1)
      factor1(n / minPrime, newFactors)
  factor1(n, Map())

def pow(n: Int, power: Int): Int =
  def pow1(n: Int, power: Int, acc: Int): Int =
    if power == 0 then acc else pow1(n, power - 1, acc * n)
  pow1(n, power, 1)

def factorizationToNumber(factors: Map[Int, Int]) =
  factors.map((prime, pows) => pow(prime, pows)).foldLeft(1)(_ * _)

val fact = factorization(50)
fact.map((a, b) => (0 to b))

// def factToListList(fact: Map[Int, Int]): List[List[Int]] =
//   val factList = fact.toList
//   val largestList = factList.map((_, pow) => pow)
//   val initialList = factList.map(_ => 0).toList

//   def increment(list: List[Int]): List[Int] =
//     if list == largestList then throw new IllegalArgumentException
//     else if list.head < largestList.drop(largestList.length - list.length).head
//     then (list.head + 1) :: list.tail
//     else 0 :: increment(list.tail)

//   def fTT1(acc: List[List[Int]]): List[List[Int]] =
//     val head = acc.head
//     if head == largestList then acc
//     else fTT1(increment(head) :: acc)

//   fTT1(List(initialList))

// factToListList(factorization(12))

def factorizationToFactorsFactorisations(
    fact: Map[Int, Int]
): List[List[(Int, Int)]] =
  val factList = fact.toList // fix order
  val initialList = factList.map((a, _) => (a, 0)).toList

  def increment(list: List[(Int, Int)]): List[(Int, Int)] =
    if list == factList then throw new IllegalArgumentException
    else if list.head(1) < factList.drop(factList.length - list.length).head(1)
    then (list.head(0), list.head(1) + 1) :: list.tail
    else (list.head(0), 0) :: increment(list.tail)

  def ftf1(
      acc: List[List[(Int, Int)]]
  ): List[List[(Int, Int)]] =
    val head = acc.head
    if head == factList then acc
    else ftf1(increment(head) :: acc)

  ftf1(List(initialList))

factorizationToFactorsFactorisations(factorization(12))

def factorizationToFactors(fact: Map[Int, Int]): List[Int] =
  for factorization <- factorizationToFactorsFactorisations(fact)
  yield factorizationToNumber(factorization.toMap)

def factors(n: Int): List[Int] =
  factorizationToFactors(factorization(n))

factors(46)

// def properFactors(n: Int) =
//   val fact = factorization(n)

// def numFactors(n: Int): Int =
//   factorization(n).map((prime, pow) => pow + 1).product
