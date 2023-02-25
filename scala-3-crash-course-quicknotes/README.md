# Things I'm (re)learning via the Scala Crash Course by DevInsideYou

- sbt: You can run `~compile` in `sbt` to make sbt automatically react to changes in the source code. Similarly for all sbt commands.

- Package sugar:

    ```scala
    package com.outerpack
    package innerpack
    ???
    ```

    desugars to

    ```scala
    package com.outerpack {
      package innerpack {
        ???
      }
    }
    ```

- Right-click on folder lets you select to create a new scala file. For instance a worksheet (`*.worksheet.sc`)
- `object` keyword: singleton object. Body is the constructor of the object.

- sbt looks for a main method:

  ```scala
  object Main {
    def main(args: Array[String]): Unit = {
        println("Hello world")
    }
  }
  ```

- Comments: apparently there is a keyboard shortcut for `\*...*\` type comments. Javadoc comments start with an extra star `\**...*\`.

- There is a Go To Definition keyboard shortcut. ATM this is `F12`. this is clearly going to be a timesaver

- distinction between methods and functions are blurry. Eta expansion takes a method and creates a function on the fly when you use it. Methods can be overloaded, functions cannot. See <https://www.reddit.com/r/scala/comments/6fp49j/function_vs_method/> In a narrative blog: <https://gleichmann.wordpress.com/2011/01/09/functional-scala-turning-methods-into-functions/> <https://medium.com/@sinisalouc/on-method-invocations-or-what-exactly-is-eta-expansion-1019b37e010c>. In Scala 3 however, Eta expansion is depreciated for defs with empty parameter lists.
<!-- - `val,var, def, lazy val`. -->
- Scala 2: Top level definitions: `class`, `object`, `trait`. Everything else must be inside one of these.
- Scala 3: `def` is also top level.
- Uniform Access Principle: `"hello world".length` should 'in fact' be `'hello world'.length()`. But because it has no parameters, *Scala will automagically add the brackets for you.*

- Scala also has nulls: `val danger: Null = null`. But essentially only the scala devs use it; never use it as a Scala programmer.
- Byte class `minByte : Byte = Byte.MinValue`
- Byte class `minByte : Byte = Byte.MaxValue`
- `Shorts, Ints, Longs, Float, Double`
- `type` makes a type alias.
- `class Dog` *also* defines a type dog, so you can do `type D = Dog`.
- Raw string interpolator `raw'hello\n world$var`
- `if (true) 'good'` comes with an `else ()` (Unit)
- `eq` and `ne` check for *reference equality* but you don't need these.
- `1=="test"` and `"test"==1` compile in Scala 2 because Any has `==` defined. `1=="test"` has a warning.
- Instead of import `scala.annotation.tailrec` then `@tailrec` you can simply `@scala.annotation.tailrec`
- `Console.YELLOW` is a special char that the console uses to change colours(!) `Console.RESET` might reset the colour...?
- flatMap can implement filter
- `class Calculator(a :Int) extends Add with SubtractWithAdd` just means extends twice. But, <https://stackoverflow.com/questions/41031166/scala-extends-vs-with>,recall in Scala you can only extend one class. So you should `extend` the class and other traits can be mixed with `with`.
- Scala has something called selftypes. It can enforce trait mixin:

    ```scala
    class Dog {
        this: Animal =>
        
        ???
      }
    ```

  And now

    ```scala
    class Poodle extends Dog // error
    class Poodle extends Dog with Animal // compiles
    ```

- A sealed class/trait can only be extended in the same compilation unit, usually the same file.

- Should learn about opaque types (new to Scala 3) exports and top level definitions
- pprint from haoyi
- there was some way to debug a loop? ah, its tap.
