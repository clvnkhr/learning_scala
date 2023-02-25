// 3	Largest prime factor

val n = 600851475143L

def divisors(n: Long): List[Long] =
  def divisors1(n: Long, k: Long, acc: List[Long]): List[Long] =
    if n < k then acc
    else if n % k == 0 then divisors1(n / k, k, k :: acc)
    else divisors1(n, k + 1, acc)
  divisors1(n, 2, Nil)

divisors(n)
