// def numDigits(n: Int): Int =
//   if n < 0 then numDigits( - n) else n.toString.length

// numDigits(1223233)

def isPalindrome(n: Int): Boolean =
  if n < 0 then isPalindrome( - n) 
  else 
    val str = n.toString
    str == str.reverse

isPalindrome(12321)

val palindromes = (
  for i <- (1 to 999)
    j <- (1 to 999)
    if isPalindrome(i*j)
  yield i*j
).toSet.toList.sorted

palindromes.last