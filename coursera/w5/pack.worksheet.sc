/* 
* Exercise in Lecture 5.3: write a function that packs
* consecutive duplicates of list elements into sublists.
* For Instance,
*     pack(List("a","a","a","b","c","c","a"))
* should give
*     List(List("a","a","a",List("b"),List("c","c"),List("a")))
*/
def pack[T](xs: List[T]): List[List[T]] = xs match
  case Nil => Nil
  case x :: xs => 
    val (xsTakeWhile,xsDropWhile) = xs.span(_ == x)
    (x :: xsTakeWhile) :: pack(xsDropWhile)

  val test = List(1,1,1,2,3,3,4,1)
  pack(test)

  pack(List("a","a","a","b","c","c","a", "a"))