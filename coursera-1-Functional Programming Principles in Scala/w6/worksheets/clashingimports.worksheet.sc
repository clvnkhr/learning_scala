object Thing1:
  def stuff: Int = 1

object Thing2:
  def stuff: Int = 2

import Thing2._
import Thing1._

stuff
