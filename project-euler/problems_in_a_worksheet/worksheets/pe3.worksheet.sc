val n: BigInt = BigInt(600851475143L)

def divisors(n: BigInt): List[BigInt] =
  def divisors1(n: BigInt, k: BigInt, acc: List[BigInt]): List[BigInt] =
    if n < k then acc 
    else if n % k == 0 then divisors1(n/k, k, k :: acc)
    else divisors1(n, k+1, acc)
  divisors1(n, 2, Nil)

divisors(n)

