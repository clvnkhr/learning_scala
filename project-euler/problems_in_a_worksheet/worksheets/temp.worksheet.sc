val range = 1 to 3

val ans = (for 
  a11 <- range
  a12 <- range
  a13 <- range
  a21 <- range
  a22 <- range
  a23 <- range
  a31 <- range
  a32 <- range
  a33 <- range
  if ({val sums = List(
        a11 + a12 + a13,
        a21 + a22 + a23,
        a31 + a32 + a33,
        a11 + a21 + a31,
        a12 + a22 + a32,
        a13 + a23 + a33,
        a11 + a22 + a33,
        a13 + a22 + a31
        )
      sums.toSet.toList.length == sums.length})
yield 
  (a11, a12, a13, a21, a22, a23, a31, a32, a33)
)