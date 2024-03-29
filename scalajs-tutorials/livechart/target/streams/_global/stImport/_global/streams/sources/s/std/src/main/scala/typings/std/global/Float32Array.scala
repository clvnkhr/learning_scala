package typings.std.global

import typings.std.ArrayLike
import typings.std.Float32ArrayConstructor
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

/* This class was inferred from a value with a constructor. In rare cases (like HTMLElement in the DOM) it might not work as you expect. */
@JSGlobal("Float32Array")
@js.native
open class Float32Array protected ()
  extends StObject
     with typings.std.Float32Array {
  /* standard es5 */
  def this(array: js.typedarray.ArrayBuffer) = this()
  /* standard es5 */
  def this(array: ArrayLike[Double]) = this()
  /* standard es2015.iterable */
  def this(elements: js.Iterable[Double]) = this()
  /* standard es5 */
  def this(length: Double) = this()
  def this(buffer: js.typedarray.ArrayBuffer, byteOffset: Double) = this()
  def this(buffer: js.typedarray.ArrayBuffer, byteOffset: Double, length: Double) = this()
  def this(buffer: js.typedarray.ArrayBuffer, byteOffset: Unit, length: Double) = this()
}
object Float32Array {
  
  inline def apply: Float32ArrayConstructor = js.Dynamic.global.selectDynamic("Float32Array").asInstanceOf[Float32ArrayConstructor]
}
