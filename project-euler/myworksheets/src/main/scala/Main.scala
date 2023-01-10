import scala.annotation.tailrec

@main def pe014: Unit = 
  @tailrec
  def len(n: Long, k: Int = 0): Int = 
    if n == 1 then k+1
    else 
      if n%2 == 0 then len(n/2, k+1)
      else len((3*n+1)/2, k+2)

  println((1 to 1000000).map(n => (n,len(n,0))).reduceLeft((p,q) => if p(1) > q(1) then p else q)(0))