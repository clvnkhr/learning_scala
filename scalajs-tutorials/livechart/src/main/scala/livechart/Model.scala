package livechart

import com.raquo.laminar.api.L.{_, given}
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.*

import scala.util.Random

final class DataItemID

case class DataItem(id: DataItemID, label: String, price: Double, count: Int):
  def fullPrice: Double = price * count

object DataItem:
  def apply(): DataItem =
    DataItem(
      DataItemID(),
      "?",
      math.floor(Random.nextDouble() * 100) / 100,
      Random.nextInt(5) + 1
    )
end DataItem

type DataList = List[DataItem]

final class Model:
  val dataVar: Var[DataList] = Var(List(DataItem(DataItemID(), "one", 1.0, 1)))
  val dataSignal = dataVar.signal

  def addDataItem(item: DataItem): Unit =
    dataVar.update(data => data :+ item)

  def removeDataItem(id: DataItemID): Unit =
    dataVar.update(data => data.filter(_.id != id))
end Model
