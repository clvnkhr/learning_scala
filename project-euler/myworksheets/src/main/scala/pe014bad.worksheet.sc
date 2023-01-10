import scala.annotation.tailrec

// def collatzMap(n: Int): Int = if n%2 == 0 then n/2 else 3*n+1

// def c(n: Int): LazyList[Int] =
//   if n==1 then LazyList(1)
//   else
//     n #:: LazyList.from(1).map( k => collatzMap(c(n)(k-1)) )

// // (c(5).takeWhile(_!=1).toList ::: List(1)).length

@tailrec
final def len(n: Long, k: Int = 0): Int = 
  if n == 1 then k+1
  else 
    if n%2 == 0 then len(n/2, k+1)
    else len((3*n+1)/2, k+2)

(1 to 1000000).map(n => (n,len(n,0))).reduceLeft((p,q) => if p(1)>q(1) then p else q)(0)


// def cLen(n: Int): Map[Int, Int] =
//   var cache = Map(1->1)

//   @tailrec
//   def cLen1(n: Int, path: List[Int]): Map[Int, Int] =
//     if cache contains n then
//       (path zip (cache(n)+1 until (cache(n) + path.length + 1))).toMap
//     else
//       if n % 2 == 0 then cLen1(n/2, n::path) 
//       else cLen1((3*n+1)/2, (3*n+1)::n::path)
      
  
//   for i <- 1 to n yield
//     cache = cache ++ cLen1(i,Nil)

//   cache

// cLen(1_0).map((_,len) => len).max