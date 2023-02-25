// 22 Names scores

val home = java.io.File(".").getAbsolutePath().dropRight(1)
print(home)

val bufferedSource = io.Source.fromFile(s"${home}src/main/scala/pe022names.txt")
val sortedNames =
  bufferedSource.getLines.mkString
    .filter(_ != '"')
    .split(',')
    .toList
    .sorted

sortedNames(937)

def score(index: Int, name: String): Int =
  def charScore(c: Char) = c.toInt - ('A'.toInt - 1)
  index * name.foldLeft(0)(_ + charScore(_))

score(938, "COLIN")

sortedNames
  .map(n => score(sortedNames.indexOf(n) + 1, n))
  .sum

bufferedSource.close // not necessary in a worksheet I guess?
