package recfun

object RecFun extends RecFunInterface:

  def main(args: Array[String]): Unit =
    println("Pascal's Triangle")
    for row <- 0 to 10 do
      for col <- 0 to row do
        print(s"${pascal(col, row)} ")
      println()

  /**
   * Exercise 1
   * 1
   * 11
   * 121
   * 1331
   * 14641
   */
  def pascal(c: Int, r: Int): Int = 
    if c<0 || c>r then 
      0
    else if c == 0 || c==r then 
      1 
    else pascal(c,r-1) + pascal(c-1,r-1)

  /**
   * Exercise 2
   */
  def balance(chars: List[Char]): Boolean = 
    def balance1(chars: List[Char],energy: Int): Boolean =
      if energy < 0 then 
        false
      else if chars.isEmpty then
        if energy > 0 then false else true
      else if chars.head == ')' then
        balance1(chars.tail, energy - 1)
      else if chars.head == '(' then 
        balance1(chars.tail, energy + 1)
      else balance1(chars.tail, energy)

    balance1(chars,0)


  /**
   * Exercise 3
   */
  def countChange(money: Int, coins: List[Int]): Int = 
    if money == 0 then 
      1
    else if coins.isEmpty then
      0
    else if money >= coins.head then
      countChange(money - coins.head, coins)  + countChange(money, coins.tail)
    else 
      countChange(money, coins.tail)