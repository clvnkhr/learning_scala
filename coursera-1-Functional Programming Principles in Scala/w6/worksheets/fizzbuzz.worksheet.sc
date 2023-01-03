(1 to 30).map( 
  i => 
    if i%15==0 then "FizzBuzz"
    else if i%3==0 then "Fizz"
    else if i%5==0 then "Buzz" 
    else i.toString
  ).mkString(",")

(for i <- (1 to 30)
  yield
    if i%15==0 then "FizzBuzz"
      else if i%3==0 then "Fizz"
      else if i%5==0 then "Buzz" 
      else i.toString
).mkString(",")

"Hello World".collect {
  case character if Character.isUpperCase(character) => character.toLower
}

val numToString = List(3 -> "Fizz", 5 -> "Buzz")

def fizzBuzzFromScalaAlgorithms(n: Int): String = {
  def isDivisibleBy(i: Int): Boolean = n % i == 0
  numToString.collect({
    case (n, str) if isDivisibleBy(n) => str
  }) match {
    case Nil =>
      s"$n"
    case strings =>
      strings.mkString
  }
}

// What a horrible mess???

fizzBuzzFromScalaAlgorithms(33)

def partOfAbove (k: Int) =
  numToString.collect({
    case (n, str) if k % n == 0 => str
  })

partOfAbove(15)

def rewrite(k: Int) =
  val fb = List(3 -> "Fizz", 5 -> "Buzz").filter( (i,_) => k % i == 0 )
  fb match
    case Nil => k.toString
    case (_,str) :: Nil => str
    case (_,str1) :: (_,str2) :: xs => str1 + str2
  
rewrite(15)

def rewrite2(k: Int) =
  val divisors = List(3, 5).filter(k % _ == 0)
  divisors match
    case Nil => k.toString
    case i :: Nil => if i==3 then "Fizz" else "Buzz"
    case _ => "FizzBuzz"

rewrite2(15)
