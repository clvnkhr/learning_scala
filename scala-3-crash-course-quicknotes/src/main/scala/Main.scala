import util.chaining.scalaUtilChainingOps

@main def hello: Unit =
  println("Hello world!")
  println(msg)
  1.tap(println)

def msg = "I was compiled by Scala 3. :)"
