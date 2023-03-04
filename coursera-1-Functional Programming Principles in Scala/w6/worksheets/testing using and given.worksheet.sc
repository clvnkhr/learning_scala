def props(url: java.net.URL): java.util.Properties = {
  val properties = new java.util.Properties()
  val is = url.openStream()
  try {
    properties.load(is)
    properties
  } finally is.close()
}

def scala2Version: String =
  props(getClass.getResource("/library.properties"))
    .getProperty("version.number")

def checkScala3(res: java.util.Enumeration[java.net.URL]): String =
  if (!res.hasMoreElements) scala2Version
  else {
    val manifest = props(res.nextElement)
    manifest.getProperty("Specification-Title") match {
      case "scala3-library-bootstrapped" =>
        manifest.getProperty("Implementation-Version")
      case _ => checkScala3(res)
    }
  }
val manifests = getClass.getClassLoader.getResources("META-INF/MANIFEST.MF")

val scalaVersion = checkScala3(manifests)
val javaVersion = System.getProperty("java.version")

trait Ord[T]:
  def compare(x: T, y: T): Int
  extension (x: T)
    def <(y: T) = compare(x, y) < 0
    def >(y: T) = compare(x, y) > 0

given Ord[Int] with
  def compare(x: Int, y: Int) =
    if x < y then -1 else if x > y then +1 else 0

given [T](using ord: Ord[T]): Ord[List[T]] with
  def compare(xs: List[T], ys: List[T]): Int = (xs, ys) match
    case (Nil, Nil) => 0
    case (Nil, _)   => -1
    case (_, Nil)   => +1
    case (x :: xs1, y :: ys1) =>
      val fst = ord.compare(x, y)
      if fst != 0 then fst else compare(xs1, ys1)

def max[T](x: T, y: T)(using ord: Ord[T]): T =
  if x < y then y else x

max(8, 4)
max(List(2, 2), List(1, 3, 5))
max(List(2), List(3, 1, 1))



trait Functor[F[_]]:
  extension [A](x: F[A]) def map[B](f: A => B): F[B]

given Functor[List] with
  extension [A](xs: List[A])
    def map[B](f: A => B): List[B] =
      xs.map(f).reverse // List already has a `map` method

// test
def assertTransformation[F[_]: Functor, A, B](
    expected: F[B],
    original: F[A],
    mapping: A => B
): Unit =
  assert(expected == original.map(mapping))

assert(List("a1", "b1") == List("a", "b").map(elt => s"${elt}1"))
assertTransformation(List("b1", "a1"), List("a", "b"), elt => s"${elt}1")

def assertTransformation2[F[_], A, B](
    expected: F[B],
    original: F[A],
    mapping: A => B
)(using Functor[F]): Unit =
  assert(expected == original.map(mapping))

// def assertTransformation3[F[_], A, B](
//     expected: F[B],
//     original: F[A],
//     mapping: A => B
// )(using Functor[F]): Unit =
//   assert(expected == map(original)(mapping))

assertTransformation2(List("b1", "a1"), List("a", "b"), elt => s"${elt}1")

type ExecutionContext = Char
type Executable[T] = ExecutionContext ?=> T
given ec: ExecutionContext = 'c'

def f(x: Int): ExecutionContext ?=> Int = summon[ExecutionContext] * x

// could be written as follows with the type alias from above
// def f(x: Int): Executable[Int] = ...

f(2)(using ec) // explicit argument
f(2) // argument is inferred

f(2)
