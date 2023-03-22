import projecteuler.util.pprint
import projecteuler.numbertheory._

def pe001code(n: Int = 1000): Int =
  (1 until n).filter(i => i % 3 == 0 || i % 5 == 0).sum

def pe002code(f1: Int = 1, f2: Int = 1, total: Int = 0): Int =
  if f2 > 4000000 then total
  else
    val f3 = f1 + f2
    val newTotal = if f3 % 2 == 0 then total + f3 else total
    pe002code(f2, f3, newTotal)

def pe003code(n: Long = 600851475143L): Long = divisors(n).head

def pe004code(n: Int = 999): Long =
  def isPalindrome(n: Int): Boolean =
    val str = n.toString
    str == str.reverse

  val palindromes = (
    for
      i <- (1 to n)
      j <- (i to n)
      if isPalindrome(i * j)
    yield i * j
  ).sortWith(_ > _)

  palindromes.head

def pe005code(n: Int = 20): BigInt = (1 to n).foldLeft(BigInt(1))(hcf)

def pe006code(n: BigInt = 100): BigInt =
  (n * (n + 1) / 2) * (n * (n + 1) / 2) - n * (n + 1) * (2 * n + 1) / 6 // TODO: move these to numbertheory?

def pe007code(n: Int = 10001) = primes(n)

def pe008code(window_size: Int = 13) =
  val bigboy =
    "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450"
  (
    for i <- 0 until bigboy.length - window_size
    yield bigboy
      .substring(i, i + window_size)
      .toList
      .map(_.toInt - 48) // toInt on char gives the ASCII code point...
      .foldLeft(BigInt(1))((a, b) => a * BigInt(b))
  ).max

def pe009code(maxlen: Int = 1000) =
  (for
    a <- 1 to maxlen
    b <- a to maxlen
    if a * a + b * b == (maxlen - b - a) * (maxlen - b - a)
  yield a * b * (maxlen - b - a)).head

def pe010code(n: Long = 2_000_000L) =
  primes.takeWhile(_ < n).foldLeft(0L)(_ + _.toLong)

@main def pe001soln: Unit =
  pprint(1, pe001code())

@main def pe002soln: Unit =
  pprint(2, pe002code())

@main def pe003soln: Unit =
  pprint(3, pe003code())

@main def pe004soln: Unit =
  pprint(4, pe004code())

@main def pe005soln: Unit =
  pprint(5, pe005code())

@main def pe006soln: Unit =
  pprint(6, pe006code())

@main def pe007soln: Unit =
  pprint(7, pe007code())

@main def pe008soln: Unit =
  pprint(8, pe008code())

@main def pe009soln: Unit =
  pprint(9, pe009code())

@main def pe010soln: Unit =
  pprint(10, pe010code())
