package typings.chartJs.mod

import org.scalablytyped.runtime.Instantiable2
import org.scalajs.dom.CanvasRenderingContext2D
import org.scalajs.dom.HTMLCanvasElement
import typings.std.ArrayLike
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

@js.native
trait Chart extends StObject {
  
  var aspectRatio: Double | Null = js.native
  
  var canvas: HTMLCanvasElement | Null = js.native
  
  var chartArea: ChartArea = js.native
  
  def clear(): Chart = js.native
  
  var config: ChartConfiguration = js.native
  
  var ctx: CanvasRenderingContext2D | Null = js.native
  
  var data: ChartData = js.native
  
  def destroy(): js.Object = js.native
  
  def generateLegend(): js.Object = js.native
  
  def getDatasetAtEvent(e: Any): js.Array[js.Object] = js.native
  
  def getDatasetMeta(index: Double): Meta = js.native
  
  def getElementAtEvent(e: Any): js.Array[js.Object] = js.native
  
  def getElementsAtEvent(e: Any): js.Array[js.Object] = js.native
  
  def getElementsAtXAxis(e: Any): js.Array[js.Object] = js.native
  
  def getVisibleDatasetCount(): Double = js.native
  
  var height: Double | Null = js.native
  
  def isDatasetVisible(datasetIndex: Double): Boolean = js.native
  
  var options: ChartOptions = js.native
  
  def render(): js.Object = js.native
  def render(param0: ChartRenderProps): js.Object = js.native
  
  def resize(): Chart = js.native
  
  def setDatasetVisibility(datasetIndex: Double, visible: Boolean): Unit = js.native
  
  def stop(): Chart = js.native
  
  def toBase64Image(): String = js.native
  
  def update(): js.Object = js.native
  def update(param0: ChartUpdateProps): js.Object = js.native
  
  var width: Double | Null = js.native
}
object Chart {
  
  /* static member */
  inline def apply: Instantiable2[
    /* context */ String | CanvasRenderingContext2D | HTMLCanvasElement | (ArrayLike[CanvasRenderingContext2D | HTMLCanvasElement]), 
    /* options */ ChartConfiguration, 
    Chart
  ] = ^.asInstanceOf[js.Dynamic].selectDynamic("Chart").asInstanceOf[Instantiable2[
    /* context */ String | CanvasRenderingContext2D | HTMLCanvasElement | (ArrayLike[CanvasRenderingContext2D | HTMLCanvasElement]), 
    /* options */ ChartConfiguration, 
    Chart
  ]]
}
