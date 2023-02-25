// 9 Special Pythagorean triplet

val maxlen = 1000
for
  a <- 1 to maxlen
  b <- a to maxlen
  if a * a + b * b == (maxlen - b - a) * (maxlen - b - a)
yield a * b * (maxlen - b - a)
