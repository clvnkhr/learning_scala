val arr: Array[Int] = Array(1, 2, 3)

(arr.update(1, 3), arr.update(2, 4))

arr.toList

(arr(1) = 99, arr(2) = 999)

arr.toList
// hello this is a test
extension (arrTup: (Array[Int], Array[Int]))
  def update(is: (Int, Int), vals: (Int, Int)): Unit =
    arrTup(0)(is(0)) = vals(0)
    arrTup(1)(is(1)) = vals(1)

(arr, arr)((1, 2)) = (-5, -7)

arr.toList

extension (arr: (Array[Int]))
  def update(is: (Int, Int), vals: (Int, Int)): Unit =
    arr(is(0)) = vals(0)
    arr(is(1)) = vals(1)

arr((0, 1)) = (100, 101)

arr.toList
