package funsets

/**
 * This class is a test suite for the methods in object FunSets.
 *
 * To run this test suite, start "sbt" then run the "test" command.
 */
class FunSetSuite extends munit.FunSuite:

  import FunSets.*

  test("contains is implemented") {
    assert(contains(x => true, 100))
  }

  /**
   * When writing tests, one would often like to re-use certain values for multiple
   * tests. For instance, we would like to create an Int-set and have multiple test
   * about it.
   *
   * Instead of copy-pasting the code for creating the set into every test, we can
   * store it in the test class using a val:
   *
   *   val s1 = singletonSet(1)
   *
   * However, what happens if the method "singletonSet" has a bug and crashes? Then
   * the test methods are not even executed, because creating an instance of the
   * test class fails!
   *
   * Therefore, we put the shared values into a separate trait (traits are like
   * abstract classes), and create an instance inside each test method.
   *
   */

  trait TestSets:
    val s1 = singletonSet(1)
    val s2 = singletonSet(2)
    val s3 = singletonSet(3)
    val sNegative: FunSet = x => if x < 0 then true else false
    val sPositive: FunSet = x => if x > 0 then true else false
    val sNonNegative: FunSet  = x => if x >= 0 then true else false
    val sUniversal: FunSet  = x => true
    val sEmpty: FunSet  = x => false
    val sEvens: FunSet  = x => if x%2 == 0 then true else false
    val sOdds: FunSet  = x => if x%2 == 0 then false else true
    val s1to4 = filter(sPositive, _ <= 4)
    val sOdds1to7 = filter(sOdds, x => x >= 1 && x <= 7)
    val sOdds1to7and4and1000 = union(union(sOdds1to7, singletonSet(4)), singletonSet(1000))

  /**
   * This test is currently disabled (by using @Ignore) because the method
   * "singletonSet" is not yet implemented and the test would fail.
   *
   * Once you finish your implementation of "singletonSet", remove the
   * .ignore annotation.
   */
  test("singleton set one contains one") {

    /**
     * We create a new instance of the "TestSets" trait, this gives us access
     * to the values "s1" to "s3".
     */
    new TestSets:
      /**
       * The string argument of "assert" is a message that is printed in case
       * the test fails. This helps identifying which assertion failed.
       */
      assert(contains(s1, 1), "Singleton")
  }

  test("s2 does not contain 1") {
    new TestSets:
      assert(!contains(s2, 1), "Singleton")
  }

  test("union contains all elements of each set") {
    new TestSets:
      val s = union(s1, s2)
      assert(contains(s, 1), "Union 1")
      assert(contains(s, 2), "Union 2")
      assert(!contains(s, 3), "Union 3")
  }

  test("intersection contains only the common elements") {
    new TestSets:
      val sA = intersect(sOdds, sEvens)
      val sB = intersect(sUniversal, s3)
      val sC = intersect(sEmpty, sUniversal)
      val sD = intersect(sEvens, union(union(s1,s2),s3))
      // testing is hampered without a test for equality of sets. Just test a couple numbers for now.
      // more thoroughly test when testing exists and forall.
      assert(!contains(sA, 42), "intersect 1")
      assert(contains(sB, 3), "intersect 2")
      assert(!contains(sC, -5), "intersect 3")
      assert(!contains(sC, 0), "intersect 4")
      assert(!contains(sD, 1), "intersect 5")
      assert(contains(sD, 2), "intersect 6")
      assert(!contains(sD, 3), "intersect 6")
  }

  test("diff gives elements that are in the first set and not in the second") {
    new TestSets:
      val sA = diff(s1,s1)
      val sB = diff(s1,s2)
      assert(!contains(sA,1), "diff 1")
      assert(contains(sB,1) && !contains(sB,2), "diff 2")
      val sC = diff(union(s1,s2), union(s2,s3))
      assert(contains(sC,1) && !contains(sC,2) && !contains(sC,3), "diff 3")
  }

  test("filter removes elements where p returns false") {
    new TestSets:
      val sA = filter(sUniversal, _.abs < 5)
      assert(contains(sA,1), "filter 1")
      assert(!contains(sA,5), "filter 2")
      assert(!contains(sA,-5), "filter 3")
      assert(contains(sA,-3), "filter 4")

  }

  test("forall tests") {
    new TestSets:
      assert(forall(sEmpty, _ => true), "vacuously true")
      assert(!forall(sUniversal, _ % 2 == 1 ), "not every integer is odd")
      assert(forall(union(s1,s3), _ % 2 == 1 ), "1 and 3 are odd")
  }

  test("exists tests") {
    new TestSets:
      assert(exists(sUniversal, _ => true), "the set of all integers is not empty")
      assert(exists(sUniversal, _ % 2 == 1 ), "there is an odd integer")
      assert(exists(union(s1,s2), _ % 2 == 0 ), "{1,2} has an even integer")
      assert(!exists(intersect(sEvens,sOdds), _ => true), "no integer is even and odd")
  }

  test("maps tests") {
    new TestSets:
      val sMinusOne = singletonSet(-1)
      val s = map(union(sMinusOne,s3), x => x*x)
      assert(contains(s,1) && contains(s,9) && !contains(s,-1), "square of elements")
  }


  import scala.concurrent.duration.*
  override val munitTimeout = 10.seconds
