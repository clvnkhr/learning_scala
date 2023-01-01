val a = (1 to 5).groupBy(i => i % 3 == 0)
val b = List("apple", "orange", "art").groupBy(str => str.head)
val c = "apple".groupBy(c => c).map((a, b) => (a, b.length))

(1 to 3).toList
(1 until 3).toList

val lst = List(3, 10, 4)
lst.fold(0)((a, b) => a + b)

val lst2 = List((a, 3), (c, 10), (a, 4))
lst2.foldLeft(('x', 0))
