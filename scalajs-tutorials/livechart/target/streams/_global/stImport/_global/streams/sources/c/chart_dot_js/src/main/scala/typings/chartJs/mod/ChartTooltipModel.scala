package typings.chartJs.mod

import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

trait ChartTooltipModel extends StObject {
  
  var _bodyAlign: String
  
  var _bodyFontFamily: String
  
  var _bodyFontStyle: String
  
  var _footerAlign: String
  
  var _footerFontFamily: String
  
  var _footerFontStyle: String
  
  var _titleAlign: String
  
  var _titleFontFamily: String
  
  var _titleFontStyle: String
  
  var afterBody: js.Array[String]
  
  var backgroundColor: String
  
  var beforeBody: js.Array[String]
  
  var body: js.Array[ChartTooltipModelBody]
  
  var bodyFontColor: String
  
  var bodyFontSize: Double
  
  var bodySpacing: Double
  
  var borderColor: String
  
  var borderWidth: Double
  
  var caretPadding: Double
  
  var caretSize: Double
  
  var caretX: Double
  
  var caretY: Double
  
  var cornerRadius: Double
  
  var dataPoints: js.Array[ChartTooltipItem]
  
  var displayColors: Boolean
  
  var footer: js.Array[String]
  
  var footerFontColor: String
  
  var footerFontSize: Double
  
  var footerMarginTop: Double
  
  var footerSpacing: Double
  
  var height: Double
  
  var labelColors: js.Array[String]
  
  var labelTextColors: js.Array[String]
  
  var legendColorBackground: String
  
  var opacity: Double
  
  var title: js.Array[String]
  
  var titleFontColor: String
  
  var titleFontSize: Double
  
  var titleMarginBottom: Double
  
  var titleSpacing: Double
  
  var width: Double
  
  var x: Double
  
  var xAlign: String
  
  var xPadding: Double
  
  var y: Double
  
  var yAlign: String
  
  var yPadding: Double
}
object ChartTooltipModel {
  
  inline def apply(
    _bodyAlign: String,
    _bodyFontFamily: String,
    _bodyFontStyle: String,
    _footerAlign: String,
    _footerFontFamily: String,
    _footerFontStyle: String,
    _titleAlign: String,
    _titleFontFamily: String,
    _titleFontStyle: String,
    afterBody: js.Array[String],
    backgroundColor: String,
    beforeBody: js.Array[String],
    body: js.Array[ChartTooltipModelBody],
    bodyFontColor: String,
    bodyFontSize: Double,
    bodySpacing: Double,
    borderColor: String,
    borderWidth: Double,
    caretPadding: Double,
    caretSize: Double,
    caretX: Double,
    caretY: Double,
    cornerRadius: Double,
    dataPoints: js.Array[ChartTooltipItem],
    displayColors: Boolean,
    footer: js.Array[String],
    footerFontColor: String,
    footerFontSize: Double,
    footerMarginTop: Double,
    footerSpacing: Double,
    height: Double,
    labelColors: js.Array[String],
    labelTextColors: js.Array[String],
    legendColorBackground: String,
    opacity: Double,
    title: js.Array[String],
    titleFontColor: String,
    titleFontSize: Double,
    titleMarginBottom: Double,
    titleSpacing: Double,
    width: Double,
    x: Double,
    xAlign: String,
    xPadding: Double,
    y: Double,
    yAlign: String,
    yPadding: Double
  ): ChartTooltipModel = {
    val __obj = js.Dynamic.literal(_bodyAlign = _bodyAlign.asInstanceOf[js.Any], _bodyFontFamily = _bodyFontFamily.asInstanceOf[js.Any], _bodyFontStyle = _bodyFontStyle.asInstanceOf[js.Any], _footerAlign = _footerAlign.asInstanceOf[js.Any], _footerFontFamily = _footerFontFamily.asInstanceOf[js.Any], _footerFontStyle = _footerFontStyle.asInstanceOf[js.Any], _titleAlign = _titleAlign.asInstanceOf[js.Any], _titleFontFamily = _titleFontFamily.asInstanceOf[js.Any], _titleFontStyle = _titleFontStyle.asInstanceOf[js.Any], afterBody = afterBody.asInstanceOf[js.Any], backgroundColor = backgroundColor.asInstanceOf[js.Any], beforeBody = beforeBody.asInstanceOf[js.Any], body = body.asInstanceOf[js.Any], bodyFontColor = bodyFontColor.asInstanceOf[js.Any], bodyFontSize = bodyFontSize.asInstanceOf[js.Any], bodySpacing = bodySpacing.asInstanceOf[js.Any], borderColor = borderColor.asInstanceOf[js.Any], borderWidth = borderWidth.asInstanceOf[js.Any], caretPadding = caretPadding.asInstanceOf[js.Any], caretSize = caretSize.asInstanceOf[js.Any], caretX = caretX.asInstanceOf[js.Any], caretY = caretY.asInstanceOf[js.Any], cornerRadius = cornerRadius.asInstanceOf[js.Any], dataPoints = dataPoints.asInstanceOf[js.Any], displayColors = displayColors.asInstanceOf[js.Any], footer = footer.asInstanceOf[js.Any], footerFontColor = footerFontColor.asInstanceOf[js.Any], footerFontSize = footerFontSize.asInstanceOf[js.Any], footerMarginTop = footerMarginTop.asInstanceOf[js.Any], footerSpacing = footerSpacing.asInstanceOf[js.Any], height = height.asInstanceOf[js.Any], labelColors = labelColors.asInstanceOf[js.Any], labelTextColors = labelTextColors.asInstanceOf[js.Any], legendColorBackground = legendColorBackground.asInstanceOf[js.Any], opacity = opacity.asInstanceOf[js.Any], title = title.asInstanceOf[js.Any], titleFontColor = titleFontColor.asInstanceOf[js.Any], titleFontSize = titleFontSize.asInstanceOf[js.Any], titleMarginBottom = titleMarginBottom.asInstanceOf[js.Any], titleSpacing = titleSpacing.asInstanceOf[js.Any], width = width.asInstanceOf[js.Any], x = x.asInstanceOf[js.Any], xAlign = xAlign.asInstanceOf[js.Any], xPadding = xPadding.asInstanceOf[js.Any], y = y.asInstanceOf[js.Any], yAlign = yAlign.asInstanceOf[js.Any], yPadding = yPadding.asInstanceOf[js.Any])
    __obj.asInstanceOf[ChartTooltipModel]
  }
  
  @scala.inline
  implicit open class MutableBuilder[Self <: ChartTooltipModel] (val x: Self) extends AnyVal {
    
    inline def setAfterBody(value: js.Array[String]): Self = StObject.set(x, "afterBody", value.asInstanceOf[js.Any])
    
    inline def setAfterBodyVarargs(value: String*): Self = StObject.set(x, "afterBody", js.Array(value*))
    
    inline def setBackgroundColor(value: String): Self = StObject.set(x, "backgroundColor", value.asInstanceOf[js.Any])
    
    inline def setBeforeBody(value: js.Array[String]): Self = StObject.set(x, "beforeBody", value.asInstanceOf[js.Any])
    
    inline def setBeforeBodyVarargs(value: String*): Self = StObject.set(x, "beforeBody", js.Array(value*))
    
    inline def setBody(value: js.Array[ChartTooltipModelBody]): Self = StObject.set(x, "body", value.asInstanceOf[js.Any])
    
    inline def setBodyFontColor(value: String): Self = StObject.set(x, "bodyFontColor", value.asInstanceOf[js.Any])
    
    inline def setBodyFontSize(value: Double): Self = StObject.set(x, "bodyFontSize", value.asInstanceOf[js.Any])
    
    inline def setBodySpacing(value: Double): Self = StObject.set(x, "bodySpacing", value.asInstanceOf[js.Any])
    
    inline def setBodyVarargs(value: ChartTooltipModelBody*): Self = StObject.set(x, "body", js.Array(value*))
    
    inline def setBorderColor(value: String): Self = StObject.set(x, "borderColor", value.asInstanceOf[js.Any])
    
    inline def setBorderWidth(value: Double): Self = StObject.set(x, "borderWidth", value.asInstanceOf[js.Any])
    
    inline def setCaretPadding(value: Double): Self = StObject.set(x, "caretPadding", value.asInstanceOf[js.Any])
    
    inline def setCaretSize(value: Double): Self = StObject.set(x, "caretSize", value.asInstanceOf[js.Any])
    
    inline def setCaretX(value: Double): Self = StObject.set(x, "caretX", value.asInstanceOf[js.Any])
    
    inline def setCaretY(value: Double): Self = StObject.set(x, "caretY", value.asInstanceOf[js.Any])
    
    inline def setCornerRadius(value: Double): Self = StObject.set(x, "cornerRadius", value.asInstanceOf[js.Any])
    
    inline def setDataPoints(value: js.Array[ChartTooltipItem]): Self = StObject.set(x, "dataPoints", value.asInstanceOf[js.Any])
    
    inline def setDataPointsVarargs(value: ChartTooltipItem*): Self = StObject.set(x, "dataPoints", js.Array(value*))
    
    inline def setDisplayColors(value: Boolean): Self = StObject.set(x, "displayColors", value.asInstanceOf[js.Any])
    
    inline def setFooter(value: js.Array[String]): Self = StObject.set(x, "footer", value.asInstanceOf[js.Any])
    
    inline def setFooterFontColor(value: String): Self = StObject.set(x, "footerFontColor", value.asInstanceOf[js.Any])
    
    inline def setFooterFontSize(value: Double): Self = StObject.set(x, "footerFontSize", value.asInstanceOf[js.Any])
    
    inline def setFooterMarginTop(value: Double): Self = StObject.set(x, "footerMarginTop", value.asInstanceOf[js.Any])
    
    inline def setFooterSpacing(value: Double): Self = StObject.set(x, "footerSpacing", value.asInstanceOf[js.Any])
    
    inline def setFooterVarargs(value: String*): Self = StObject.set(x, "footer", js.Array(value*))
    
    inline def setHeight(value: Double): Self = StObject.set(x, "height", value.asInstanceOf[js.Any])
    
    inline def setLabelColors(value: js.Array[String]): Self = StObject.set(x, "labelColors", value.asInstanceOf[js.Any])
    
    inline def setLabelColorsVarargs(value: String*): Self = StObject.set(x, "labelColors", js.Array(value*))
    
    inline def setLabelTextColors(value: js.Array[String]): Self = StObject.set(x, "labelTextColors", value.asInstanceOf[js.Any])
    
    inline def setLabelTextColorsVarargs(value: String*): Self = StObject.set(x, "labelTextColors", js.Array(value*))
    
    inline def setLegendColorBackground(value: String): Self = StObject.set(x, "legendColorBackground", value.asInstanceOf[js.Any])
    
    inline def setOpacity(value: Double): Self = StObject.set(x, "opacity", value.asInstanceOf[js.Any])
    
    inline def setTitle(value: js.Array[String]): Self = StObject.set(x, "title", value.asInstanceOf[js.Any])
    
    inline def setTitleFontColor(value: String): Self = StObject.set(x, "titleFontColor", value.asInstanceOf[js.Any])
    
    inline def setTitleFontSize(value: Double): Self = StObject.set(x, "titleFontSize", value.asInstanceOf[js.Any])
    
    inline def setTitleMarginBottom(value: Double): Self = StObject.set(x, "titleMarginBottom", value.asInstanceOf[js.Any])
    
    inline def setTitleSpacing(value: Double): Self = StObject.set(x, "titleSpacing", value.asInstanceOf[js.Any])
    
    inline def setTitleVarargs(value: String*): Self = StObject.set(x, "title", js.Array(value*))
    
    inline def setWidth(value: Double): Self = StObject.set(x, "width", value.asInstanceOf[js.Any])
    
    inline def setX(value: Double): Self = StObject.set(x, "x", value.asInstanceOf[js.Any])
    
    inline def setXAlign(value: String): Self = StObject.set(x, "xAlign", value.asInstanceOf[js.Any])
    
    inline def setXPadding(value: Double): Self = StObject.set(x, "xPadding", value.asInstanceOf[js.Any])
    
    inline def setY(value: Double): Self = StObject.set(x, "y", value.asInstanceOf[js.Any])
    
    inline def setYAlign(value: String): Self = StObject.set(x, "yAlign", value.asInstanceOf[js.Any])
    
    inline def setYPadding(value: Double): Self = StObject.set(x, "yPadding", value.asInstanceOf[js.Any])
    
    inline def set_bodyAlign(value: String): Self = StObject.set(x, "_bodyAlign", value.asInstanceOf[js.Any])
    
    inline def set_bodyFontFamily(value: String): Self = StObject.set(x, "_bodyFontFamily", value.asInstanceOf[js.Any])
    
    inline def set_bodyFontStyle(value: String): Self = StObject.set(x, "_bodyFontStyle", value.asInstanceOf[js.Any])
    
    inline def set_footerAlign(value: String): Self = StObject.set(x, "_footerAlign", value.asInstanceOf[js.Any])
    
    inline def set_footerFontFamily(value: String): Self = StObject.set(x, "_footerFontFamily", value.asInstanceOf[js.Any])
    
    inline def set_footerFontStyle(value: String): Self = StObject.set(x, "_footerFontStyle", value.asInstanceOf[js.Any])
    
    inline def set_titleAlign(value: String): Self = StObject.set(x, "_titleAlign", value.asInstanceOf[js.Any])
    
    inline def set_titleFontFamily(value: String): Self = StObject.set(x, "_titleFontFamily", value.asInstanceOf[js.Any])
    
    inline def set_titleFontStyle(value: String): Self = StObject.set(x, "_titleFontStyle", value.asInstanceOf[js.Any])
  }
}
