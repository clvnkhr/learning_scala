// 4	Largest palindrome product
def isPalindrome(n: Int): Boolean =
  val str = n.toString
  str == str.reverse

val palindromes = (
  for
    i <- (1 to 999)
    j <- (i to 999)
    if isPalindrome(i * j)
  yield i * j
).sortWith(_ > _)

palindromes.head
