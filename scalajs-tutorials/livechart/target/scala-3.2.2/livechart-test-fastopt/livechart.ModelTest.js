'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
import * as $j_livechart$002eDataItem from "./livechart.DataItem.js";
import * as $j_livechart$002eDataItemID from "./livechart.DataItemID.js";
import * as $j_livechart$002eModel from "./livechart.Model.js";
function $sct_Llivechart_ModelTest__stinit__() {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_reflect_Reflect$().registerInstantiatableClass__T__jl_Class__sjs_js_Array__V("livechart.ModelTest", $d_Llivechart_ModelTest.getClassOf(), [[[], (() => new $c_Llivechart_ModelTest())]])
}
export { $sct_Llivechart_ModelTest__stinit__ as $sct_Llivechart_ModelTest__stinit__ };
/** @constructor */
function $c_Llivechart_ModelTest() {
  this.Lmunit_Suite__f_parasiticExecutionContext = null;
  this.Lmunit_FunSuite__f_munitLines = null;
  this.Lmunit_FunSuite__f_munit$Assertions$$munitCapturedClues = null;
  this.Lmunit_FunSuite__f_munitTestsBuffer = null;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_Lmunit_FunSuite__(this);
  this.test__T__F0__Lmunit_Location__V("fullPrice", new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0((() => {
    var id = new $j_livechart$002eDataItemID.$c_Llivechart_DataItemID();
    var item = new $j_livechart$002eDataItem.$c_Llivechart_DataItem(id, "test", 0.5, 5);
    var cond = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0((() => (item.fullPrice__D() === 2.5)));
    var clue = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0((() => "assertion failed"));
    var loc = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lmunit_Location("/Users/calvinkhor/Documents/GitHub/learning_scala/scalajs-tutorials/livechart/src/test/scala/livechart/ModelTest.scala", 6);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lmunit_Assertions__assert__F0__F0__Lmunit_Location__V(this, cond, clue, loc)
  })), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lmunit_Location("/Users/calvinkhor/Documents/GitHub/learning_scala/scalajs-tutorials/livechart/src/test/scala/livechart/ModelTest.scala", 7));
  this.test__T__F0__Lmunit_Location__V("addDataItem", new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0((() => {
    var model = new $j_livechart$002eModel.$c_Llivechart_Model();
    var id$1 = new $j_livechart$002eDataItemID.$c_Llivechart_DataItemID();
    var item$1 = new $j_livechart$002eDataItem.$c_Llivechart_DataItem(id$1, "test", 0.5, 2);
    model.addDataItem__Llivechart_DataItem__V(item$1);
    var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(model.Llivechart_Model__f_dataSignal);
    var afterItems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this$4)).get__O());
    var cond$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0((() => {
      var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(afterItems);
      return (this$5.length__I() === 2)
    }));
    var clue$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0((() => "assertion failed"));
    var loc$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lmunit_Location("/Users/calvinkhor/Documents/GitHub/learning_scala/scalajs-tutorials/livechart/src/test/scala/livechart/ModelTest.scala", 15);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lmunit_Assertions__assert__F0__F0__Lmunit_Location__V(this, cond$1, clue$1, loc$1);
    var cond$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0((() => {
      var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(afterItems).last__O();
      return ((x !== null) && $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$dp_equals__O__Z($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x), item$1))
    }));
    var clue$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0((() => "assertion failed"));
    var loc$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lmunit_Location("/Users/calvinkhor/Documents/GitHub/learning_scala/scalajs-tutorials/livechart/src/test/scala/livechart/ModelTest.scala", 16);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lmunit_Assertions__assert__F0__F0__Lmunit_Location__V(this, cond$2, clue$2, loc$2)
  })), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lmunit_Location("/Users/calvinkhor/Documents/GitHub/learning_scala/scalajs-tutorials/livechart/src/test/scala/livechart/ModelTest.scala", 17));
  this.test__T__F0__Lmunit_Location__V("removeDataItem", new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0((() => {
    var model$1 = new $j_livechart$002eModel.$c_Llivechart_Model();
    var id$2 = new $j_livechart$002eDataItemID.$c_Llivechart_DataItemID();
    model$1.addDataItem__Llivechart_DataItem__V(new $j_livechart$002eDataItem.$c_Llivechart_DataItem(id$2, "test", 0.5, 2));
    var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(model$1.Llivechart_Model__f_dataSignal);
    var beforeItems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this$7)).get__O());
    var cond$3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0((() => {
      var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(beforeItems);
      return (this$8.length__I() === 2)
    }));
    var clue$3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0((() => "assertion failed"));
    var loc$3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lmunit_Location("/Users/calvinkhor/Documents/GitHub/learning_scala/scalajs-tutorials/livechart/src/test/scala/livechart/ModelTest.scala", 25);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lmunit_Assertions__assert__F0__F0__Lmunit_Location__V(this, cond$3, clue$3, loc$3);
    model$1.removeDataItem__Llivechart_DataItemID__V($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_livechart$002eDataItem.$as_Llivechart_DataItem($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(beforeItems).head__O())).Llivechart_DataItem__f_id);
    var this$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(model$1.Llivechart_Model__f_dataSignal);
    var afterItems$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this$9)).get__O());
    var cond$4 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0((() => {
      var this$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(afterItems$1);
      return (this$10.length__I() === 1)
    }));
    var clue$4 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0((() => "assertion failed"));
    var loc$4 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lmunit_Location("/Users/calvinkhor/Documents/GitHub/learning_scala/scalajs-tutorials/livechart/src/test/scala/livechart/ModelTest.scala", 30);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lmunit_Assertions__assert__F0__F0__Lmunit_Location__V(this, cond$4, clue$4, loc$4);
    var cond$5 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0((() => {
      var x$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(beforeItems).tail__O();
      return ((afterItems$1 === null) ? (x$2 === null) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(afterItems$1).equals__O__Z(x$2))
    }));
    var clue$5 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0((() => "assertion failed"));
    var loc$5 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lmunit_Location("/Users/calvinkhor/Documents/GitHub/learning_scala/scalajs-tutorials/livechart/src/test/scala/livechart/ModelTest.scala", 31);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lmunit_Assertions__assert__F0__F0__Lmunit_Location__V(this, cond$5, clue$5, loc$5)
  })), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lmunit_Location("/Users/calvinkhor/Documents/GitHub/learning_scala/scalajs-tutorials/livechart/src/test/scala/livechart/ModelTest.scala", 32))
}
export { $c_Llivechart_ModelTest as $c_Llivechart_ModelTest };
$c_Llivechart_ModelTest.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_Lmunit_FunSuite();
$c_Llivechart_ModelTest.prototype.constructor = $c_Llivechart_ModelTest;
/** @constructor */
function $h_Llivechart_ModelTest() {
  /*<skip>*/
}
export { $h_Llivechart_ModelTest as $h_Llivechart_ModelTest };
$h_Llivechart_ModelTest.prototype = $c_Llivechart_ModelTest.prototype;
var $d_Llivechart_ModelTest = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Llivechart_ModelTest: 0
}, false, "livechart.ModelTest", {
  Llivechart_ModelTest: 1,
  Lmunit_FunSuite: 1,
  Lmunit_Suite: 1,
  O: 1,
  Lmunit_PlatformSuite: 1,
  Lmunit_internal_MacroCompat$CompileErrorMacro: 1,
  Lmunit_Assertions: 1,
  Lmunit_FunFixtures: 1,
  Lmunit_TestOptionsConversions: 1,
  Lmunit_TestTransforms: 1,
  Lmunit_SuiteTransforms: 1,
  Lmunit_ValueTransforms: 1
});
export { $d_Llivechart_ModelTest as $d_Llivechart_ModelTest };
$c_Llivechart_ModelTest.prototype.$classData = $d_Llivechart_ModelTest;
$sct_Llivechart_ModelTest__stinit__();
//# sourceMappingURL=livechart.ModelTest.js.map
