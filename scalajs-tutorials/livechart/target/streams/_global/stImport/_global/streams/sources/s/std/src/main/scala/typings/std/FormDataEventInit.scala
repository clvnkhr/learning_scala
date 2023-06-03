package typings.std

import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

trait FormDataEventInit
  extends StObject
     with EventInit {
  
  /* standard dom */
  var formData: org.scalajs.dom.FormData
}
object FormDataEventInit {
  
  inline def apply(formData: org.scalajs.dom.FormData): FormDataEventInit = {
    val __obj = js.Dynamic.literal(formData = formData.asInstanceOf[js.Any])
    __obj.asInstanceOf[FormDataEventInit]
  }
  
  @scala.inline
  implicit open class MutableBuilder[Self <: FormDataEventInit] (val x: Self) extends AnyVal {
    
    inline def setFormData(value: org.scalajs.dom.FormData): Self = StObject.set(x, "formData", value.asInstanceOf[js.Any])
  }
}
