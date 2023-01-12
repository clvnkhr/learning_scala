import math.{log10}

log10(math.pow(2, 1000))

def pow(x: Int, y: Int): BigInt =
  def pow1(x: Int, y: Int, acc: BigInt): BigInt =
    if y == 0 then acc else pow1(x, y - 1, acc * x)
  pow1(x, y, BigInt(1))

pow(2, 1000).toString.toList.map(_.toString.toInt).sum
