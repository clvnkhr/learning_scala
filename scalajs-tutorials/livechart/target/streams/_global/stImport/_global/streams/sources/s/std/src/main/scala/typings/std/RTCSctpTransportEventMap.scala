package typings.std

import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

trait RTCSctpTransportEventMap extends StObject {
  
  /* standard dom */
  var statechange: org.scalajs.dom.Event
}
object RTCSctpTransportEventMap {
  
  inline def apply(statechange: org.scalajs.dom.Event): RTCSctpTransportEventMap = {
    val __obj = js.Dynamic.literal(statechange = statechange.asInstanceOf[js.Any])
    __obj.asInstanceOf[RTCSctpTransportEventMap]
  }
  
  @scala.inline
  implicit open class MutableBuilder[Self <: RTCSctpTransportEventMap] (val x: Self) extends AnyVal {
    
    inline def setStatechange(value: org.scalajs.dom.Event): Self = StObject.set(x, "statechange", value.asInstanceOf[js.Any])
  }
}
