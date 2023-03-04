util.Properties.versionString

trait Functor[F[_]]:
  extension [A](x: F[A]) def map[B](f: A => B): F[B]

given Functor[List] with
  extension [A](xs: List[A])
    def map[B](f: A => B): List[B] =
      xs.map(f).reverse // List already has a `map` method

def myEq[F[_]: Functor, A, B](
    expected: F[B],
    original: F[A],
    mapping: A => B
): Boolean = expected == original.map(mapping)

myEq(List(1, 2), List(2, 1), int => int)

def myEq2[F[_], A, B](
    expected: F[B],
    original: F[A],
    mapping: A => B
)(using Functor[F]): Boolean = expected == original.map(mapping)

myEq2(List(1, 2), List(2, 1), int => int)

def myEq3[F[_], A, B](
    expected: F[B],
    original: F[A],
    mapping: A => B
)(using Functor[F]): Boolean =
  expected == summon[Functor[F]].map(original)(mapping)

case class Num(x: Int)
extension (n: Num) def plus(m: Num) = Num(n.x + m.x)

Num(1).plus(Num(2))

plus(Num(1))(Num(2))

1.abs

List(1,2,3).max