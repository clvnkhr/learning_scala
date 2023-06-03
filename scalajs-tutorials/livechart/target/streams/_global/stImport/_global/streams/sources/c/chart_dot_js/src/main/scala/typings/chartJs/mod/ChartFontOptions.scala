package typings.chartJs.mod

import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

trait ChartFontOptions extends StObject {
  
  var defaultFontColor: js.UndefOr[ChartColor] = js.undefined
  
  var defaultFontFamily: js.UndefOr[String] = js.undefined
  
  var defaultFontSize: js.UndefOr[Double] = js.undefined
  
  var defaultFontStyle: js.UndefOr[String] = js.undefined
}
object ChartFontOptions {
  
  inline def apply(): ChartFontOptions = {
    val __obj = js.Dynamic.literal()
    __obj.asInstanceOf[ChartFontOptions]
  }
  
  @scala.inline
  implicit open class MutableBuilder[Self <: ChartFontOptions] (val x: Self) extends AnyVal {
    
    inline def setDefaultFontColor(value: ChartColor): Self = StObject.set(x, "defaultFontColor", value.asInstanceOf[js.Any])
    
    inline def setDefaultFontColorUndefined: Self = StObject.set(x, "defaultFontColor", js.undefined)
    
    inline def setDefaultFontColorVarargs(value: String*): Self = StObject.set(x, "defaultFontColor", js.Array(value*))
    
    inline def setDefaultFontFamily(value: String): Self = StObject.set(x, "defaultFontFamily", value.asInstanceOf[js.Any])
    
    inline def setDefaultFontFamilyUndefined: Self = StObject.set(x, "defaultFontFamily", js.undefined)
    
    inline def setDefaultFontSize(value: Double): Self = StObject.set(x, "defaultFontSize", value.asInstanceOf[js.Any])
    
    inline def setDefaultFontSizeUndefined: Self = StObject.set(x, "defaultFontSize", js.undefined)
    
    inline def setDefaultFontStyle(value: String): Self = StObject.set(x, "defaultFontStyle", value.asInstanceOf[js.Any])
    
    inline def setDefaultFontStyleUndefined: Self = StObject.set(x, "defaultFontStyle", js.undefined)
  }
}
