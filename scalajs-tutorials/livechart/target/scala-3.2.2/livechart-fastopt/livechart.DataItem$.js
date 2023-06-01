'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
import * as $j_livechart$002eDataItem from "./livechart.DataItem.js";
import * as $j_livechart$002eDataItemID from "./livechart.DataItemID.js";
/** @constructor */
function $c_Llivechart_DataItem$() {
  /*<skip>*/
}
export { $c_Llivechart_DataItem$ as $c_Llivechart_DataItem$ };
$c_Llivechart_DataItem$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Llivechart_DataItem$.prototype.constructor = $c_Llivechart_DataItem$;
/** @constructor */
function $h_Llivechart_DataItem$() {
  /*<skip>*/
}
export { $h_Llivechart_DataItem$ as $h_Llivechart_DataItem$ };
$h_Llivechart_DataItem$.prototype = $c_Llivechart_DataItem$.prototype;
$c_Llivechart_DataItem$.prototype.toString__T = (function() {
  return "DataItem"
});
$c_Llivechart_DataItem$.prototype.apply__Llivechart_DataItem = (function() {
  var id = new $j_livechart$002eDataItemID.$c_Llivechart_DataItemID();
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_util_Random$();
  var x = (100.0 * $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$1.s_util_Random__f_self).nextDouble__D());
  var price = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uD(Math.floor(x)) / 100.0);
  var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_util_Random$();
  var count = ((1 + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$4.s_util_Random__f_self).nextInt__I__I(5)) | 0);
  return new $j_livechart$002eDataItem.$c_Llivechart_DataItem(id, "?", price, count)
});
var $d_Llivechart_DataItem$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Llivechart_DataItem$: 0
}, false, "livechart.DataItem$", {
  Llivechart_DataItem$: 1,
  O: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1
});
export { $d_Llivechart_DataItem$ as $d_Llivechart_DataItem$ };
$c_Llivechart_DataItem$.prototype.$classData = $d_Llivechart_DataItem$;
var $n_Llivechart_DataItem$;
function $m_Llivechart_DataItem$() {
  if ((!$n_Llivechart_DataItem$)) {
    $n_Llivechart_DataItem$ = new $c_Llivechart_DataItem$()
  };
  return $n_Llivechart_DataItem$
}
export { $m_Llivechart_DataItem$ as $m_Llivechart_DataItem$ };
//# sourceMappingURL=livechart.DataItem$.js.map
