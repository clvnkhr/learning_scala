val s1 = "a-test-string"
val s2 = "The_Tester"

def capFirstLetter(s: String) =
  s.head.toUpper +: s.tail

capFirstLetter(s1)

def toCamelCase(s: String): String =
  val sep = if s.contains('-') then '-' else '_'
  val words = s.split(sep)
  words.tail.foldLeft(words.head)((c, w) => c ++ capFirstLetter(w))

toCamelCase(s1)
toCamelCase(s2)

object Kata {

  def validBraces(s: String): Boolean =
    s.foldLeft((List('c'), true))({
      case ((lst: List[Char], b: Boolean), c: Char) =>
        if !b then (lst, false)
        else if "([{".contains(c) then (c :: lst, b)
        else if (
          (lst.head == '(' && c == ')')
          || (lst.head == '[' && c == ']')
          || (lst.head == '{' && c == '}')
        )
        then (lst.tail, b)
        else (lst, false)
    })(1)
}

Kata.validBraces("([{])")
val s = "abc123a9"

def intToStr(i: Int, padding: Int) =
  val pureStr = s"$i"
  val numZeros = math.max(0, padding - pureStr.length)
  "0" * numZeros + pureStr

intToStr(10, 3)

def charToInt = Map(
  '1' -> 1,
  '2' -> 2,
  '3' -> 3,
  '4' -> 4,
  '5' -> 5,
  '6' -> 6,
  '7' -> 7,
  '8' -> 8,
  '9' -> 9,
  '0' -> 0
)

def strToInt(s: String): Int =
  s.map(charToInt).foldLeft(0)(10 * _ + _)

strToInt("123454320")

val List(preDigits, digits) = s.reverse
  .span("0123456789".contains(_))
  .toList
  .map((s: String) => s.reverse)
  .reverse

digits.toInt
preDigits + intToStr(strToInt(digits) + 1, digits.length)

"123".format(12223)

def incrementString(s: String): String = {
  val num = s.reverse.takeWhile(_.isDigit).reverse
  if (num == "") s"${s}1"
  else s"${s.dropRight(num.size)}%0${num.size}d" // .format(num.toInt + 1)
}
incrementString("asd1")
