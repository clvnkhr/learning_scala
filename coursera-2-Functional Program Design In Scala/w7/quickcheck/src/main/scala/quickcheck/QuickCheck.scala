package quickcheck

import org.scalacheck.*
import Arbitrary.*
import Gen.*
import Prop.forAll

abstract class QuickCheckHeap extends Properties("Heap") with IntHeap:
  lazy val genHeap: Gen[H] = oneOf(
    const(empty),
    for {
      a <- arbitrary[A]
      h <- oneOf(const(empty), genHeap)
    } yield insert(a, h)
  )

  def minsFromHeap(h: H): List[A] = 
  // if h.isEmpty then Nil else findMin(h) :: minsFromHeap(removeMin(h))
    def mFHAcc(h: H, acc: List[A]): List[A] =
      if isEmpty(h) then acc else mFHAcc(deleteMin(h), findMin(h) :: acc)
    mFHAcc(h, Nil)

  def equal(h1: H, h2: H): Boolean = 
    // we define two heaps to be equal if the sequence of minima are equal
    minsFromHeap(h1) == minsFromHeap(h2)

  given Arbitrary[H] = Arbitrary(genHeap)

  property("findMin(insert(minimal element, any heap) = minimal element") = forAll { (h: H) =>
    val m = if isEmpty(h) then 0 else findMin(h)
    findMin(insert(m, h)) == m
  }

  property("minimum of heap of one element is the element") = forAll { (a: Int) =>
    val h = insert(a, empty)
    findMin(h) == a
  }

  property("min of heap with two elements is the min of the two elements") = forAll { (a: Int, b: Int) =>
    val h = insert(a, insert(b, empty))
    val m = if a < b then a else b
    findMin(h) == m
  }

  property("adding and deleting on empty makes empty") = forAll { (a: Int) =>
    val h = deleteMin(insert(a, empty))
    isEmpty(h)
  }

  property("get decreasing sequence by prepending minima off one by one") = forAll { (h: H) =>
    val lst = minsFromHeap(h)
    lst == lst.sortWith( _ > _ )
  }

  property("min of melding two is the min of one of them") = forAll { (h1: H, h2: H, a1: Int, a2: Int) =>
    // insert random elements to avoid checking for empty lists
    val h1a = insert(a1,h1)
    val h2a = insert(a2,h2)
    val h3 = meld(h1a, h2a)
    val m1 = findMin(h1a)
    val m2 = findMin(h2a)
    val m3 = findMin(h3)
    m3 == (if m1 < m2 then m1 else m2)
  }

  property("melding is associative") = forAll { (h1: H, h2: H, h3: H) =>
    val h4 = meld(meld(h1, h2), h3)
    val h5 = meld(h1, meld(h2, h3))
    equal(h4, h5)
  }

  property("melding is commutative") = forAll { (h1: H, h2: H) =>
    equal(meld(h1,h2), meld(h2,h1))
  }

  property("empty is the (L and R) identity for meld") = forAll { (h: H) => 
    equal(meld(h, empty), h) && equal(meld(empty, h), h)
  }
/*   
 In src/main/scala/quickcheck/QuickCheck.scala, write some more properties that should be satisfied. 
 Your properties should at least cover the following relevant facts:
  - If you insert any two elements into an empty heap, finding the minimum of the 
    resulting heap should get the smallest of the two elements back.
  - If you insert an element into an empty heap, then delete the minimum, 
    the resulting heap should be empty.
  - Given any heap, you should get a sorted sequence of elements when continually 
    finding and deleting minima. (Hint: recursion and helper functions are your friends.)
  - Finding a minimum of the melding of any two heaps should return a minimum of one or the other.

In order to get full credit, all tests should pass, that is you should correctly identify each buggy
implementation while only writing properties that are true of heaps. 
Your properties should cover all of the above-stated relevant facts. You are free to write as many 
or as few properties as you want in order to achieve a full passing suite.
*/