// 15 Lattice paths

def numPaths(h: Int, w: Int): BigInt =
//   if h > w then numPaths(w, h)
//   else if h == 0 then 1L
//   else numPaths(h - 1, w) + numPaths(h, w - 1)

// using the above,  numPaths(17, 17) takes 10 seconds, and 20x20 doesn't finish

// instead we compute by hand. We need to take h steps down and w steps right, in any order.
// we can interpret this in balls and bins model, where we have to pick h bins out of w+h bins.
// so the answer is just w+h choose h = (w+h)!/(h!w!).
  def fact(n: Int): BigInt =
    def factacc(n: Int, acc: BigInt): BigInt =
      if n == 1 then acc else factacc(n - 1, n * acc)
    factacc(n, 1)

  fact(w + h) / (fact(w) * fact(h))
numPaths(20, 20)
