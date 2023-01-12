def fact(n: Int): BigInt =
  def fact1(n: Int, acc: BigInt): BigInt =
    if n <= 1 then acc else fact1(n - 1, n * acc)
  fact1(n, 1)

fact(100).toString.map(_.toString.toInt).foldLeft(0)(_ + _)
