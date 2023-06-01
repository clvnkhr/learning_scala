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
// end data model

// import javascriptLogo from "/javascript.svg"
@js.native @JSImport("/javascript.svg", JSImport.Default)
val javascriptLogo: String = js.native

@main
def LiveChart(): Unit =
  renderOnDomContentLoaded(
    dom.document.getElementById("app"),
    Main.appElement()
  )

object Main:
  val model = new Model
  import model.*
  def appElement(): Element =
    div(
      h1("Live Chart"),
      hello(),
      renderDataTable(),
      renderDataList()
    )
  end appElement

  def renderDataTable(): Element =
    table(
      thead(
        tr(
          th("Label"),
          th("Price"),
          th("Count"),
          th("Full price"),
          th("Action")
        )
      ),
      tbody(
        children <-- dataSignal.split(_.id) { (id, initial, itemSignal) =>
          renderDataItem(id, itemSignal)
        }
      ),
      tfoot(
        tr(
          td(button("➕", onClick --> (_ => addDataItem(DataItem())))),
          td(),
          td(),
          td(
            child.text <-- dataSignal.map(data =>
              "%.2f".format(data.map(_.fullPrice).sum)
            )
          )
        )
      )
    )
  end renderDataTable

  def renderDataItem(id: DataItemID, itemSignal: Signal[DataItem]): Element =
    tr(
      td(
        inputForString(
          itemSignal.map(_.label),
          makeDataItemUpdater(
            id,
            { (item, newLabel) =>
              item.copy(label = newLabel)
            }
          )
        )
      ),
      td(
        inputForDouble(
          itemSignal.map(_.price),
          makeDataItemUpdater(
            id,
            { (item, newPrice) =>
              item.copy(price = newPrice)
            }
          )
        )
      ),
      td(child.text <-- itemSignal.map(_.price)),
      td(child.text <-- itemSignal.map(_.count)),
      td(child.text <-- itemSignal.map(item => "%.2f".format(item.fullPrice))),
      td(button("🗑️", onClick --> (_ => removeDataItem(id))))
    )
  end renderDataItem

  def inputForDouble(
      valueSignal: Signal[Double],
      valueUpdater: Observer[Double]
  ): Input =
    val strValue = Var[String]("")
    input(
      typ := "text",
      value <-- strValue.signal,
      onInput.mapToValue --> strValue,
      valueSignal --> strValue.updater[Double] { (prevStr, newValue) =>
        if prevStr.toDoubleOption.contains(newValue) then prevStr
        else newValue.toString
      },
      strValue.signal --> { valueStr =>
        valueStr.toDoubleOption.foreach(valueUpdater.onNext)
      }
    )
  end inputForDouble

  def inputForString(
      valueSignal: Signal[String],
      valueUpdater: Observer[String]
  ): Input =
    input(
      typ := "text",
      value <-- valueSignal,
      onInput.mapToValue --> valueUpdater
    )
  end inputForString

  def makeDataItemUpdater[A](
      id: DataItemID,
      f: (DataItem, A) => DataItem
  ): Observer[A] =
    dataVar.updater { (data, newValue) =>
      data.map { item =>
        if item.id == id then f(item, newValue) else item
      }
    }
  end makeDataItemUpdater

  def hello(): Element =
    div(
      a(
        href := "https://vitejs.dev",
        target := "_blank",
        img(src := "/vite.svg", className := "logo", alt := "Vite logo")
      ),
      a(
        href := "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        target := "_blank",
        img(
          src := javascriptLogo,
          className := "logo vanilla",
          alt := "JavaScript logo"
        )
      ),
      h4("Hello LiveChart!!"),
      div(className := "card", counterButton()),
      p(className := "read-the-docs", "Click on the Vite logo to learn more")
    )
  end hello

  def renderDataList(): Element =
    ul(
      children <-- dataSignal.split(_.id) { (id, initial, itemSignal) =>
        li(
          child.text <-- itemSignal.map(item => s"${item.count} ${item.label}")
        )
      }
    )
  end renderDataList

end Main

def counterButton(): Element =
  val counter = Var(0)
  button(
    "count is ",
    child.text <-- counter,
    onClick --> { event => counter.update(c => c + 1) }
  )
end counterButton
