// NB both 290797 = 13 * 22369 and 50515093 = 5807 * 8699 are composite...

val s0 = 290797L

val s: LazyList[Long] =
  s0 #:: LazyList.from(1).map(n => (s(n - 1) * s(n - 1)) % 50515093)

val p: LazyList[(Long, Long)] =
  LazyList.from(1).map(n => (s(2 * n), s(2 * n + 1)))

p.take(1000).toSet.size
// val distances =

def d2(p: (Long, Long), q: (Long, Long)): Long =
  (p(0) - q(0)) * (p(0) - q(0)) + (p(1) - q(1)) * (p(1) - q(1))
def d(p: (Long, Long), q: (Long, Long)): Double = math.sqrt(d2(p, q).toDouble)

val numPts = 14

(for i <- (0 to numPts).toSet
j <- (i + 1 to numPts)
yield d(p(i), p(j))).min
