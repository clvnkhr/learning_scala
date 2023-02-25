// 18 Maximum path sum I

val rawTri = """75
95 64
17 47 82
18 35 87 10
20 04 82 47 65
19 01 23 75 03 34
88 02 77 73 07 63 67
99 65 04 28 06 16 70 92
41 41 26 56 83 40 80 70 33
41 48 72 33 47 32 37 16 94 29
53 71 44 65 25 43 91 52 97 51 14
70 11 33 28 77 73 17 78 39 68 17 57
91 71 52 38 17 14 91 43 58 50 27 29 48
63 66 04 68 89 53 67 30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23"""

val triRows =
  rawTri.split("\n").toList.map(_.strip.split(" ").toList.map(_.toInt))

def pathsum(directions: String): Long =

  def psAcc(dir: String, acc: Long, point: (Int, Int)): Long =
    if dir.isEmpty then acc
    else
      val a = point(0) + 1
      val b = if dir.head == '0' then point(1) else point(1) + 1
      psAcc(dir.tail, acc + triRows(a)(b), (a, b))

  if directions.length <= 14 then psAcc(directions, triRows(0)(0), (0, 0))
  else 0

pathsum("0" * 14) == triRows.foldLeft(0)(_ + _.head)
pathsum("1" * 14) == triRows.foldLeft(0)(_ + _.last)

(for i <- (0 to (math.pow(2, 15).toInt - 1)).map(_.toBinaryString)
yield
  val l = i.length
  val rem = if l > 8 then 0 else 8 - l
  pathsum("0" * rem + i)
).max
