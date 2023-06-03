'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
/** @constructor */
function $c_Llivechart_Main$$anon$1() {
  /*<skip>*/
}
export { $c_Llivechart_Main$$anon$1 as $c_Llivechart_Main$$anon$1 };
$c_Llivechart_Main$$anon$1.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_sr_AbstractPartialFunction();
$c_Llivechart_Main$$anon$1.prototype.constructor = $c_Llivechart_Main$$anon$1;
/** @constructor */
function $h_Llivechart_Main$$anon$1() {
  /*<skip>*/
}
export { $h_Llivechart_Main$$anon$1 as $h_Llivechart_Main$$anon$1 };
$h_Llivechart_Main$$anon$1.prototype = $c_Llivechart_Main$$anon$1.prototype;
$c_Llivechart_Main$$anon$1.prototype.isDefinedAt__s_Option__Z = (function(x) {
  return ((x instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Some(x)).s_Some__f_value), true))
});
$c_Llivechart_Main$$anon$1.prototype.applyOrElse__s_Option__F1__O = (function(x, default$1) {
  if ((x instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
    var newCount = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Some(x)).s_Some__f_value);
    return newCount
  } else {
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(default$1).apply__O__O(x)
  }
});
$c_Llivechart_Main$$anon$1.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__s_Option__Z($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Option(x))
});
$c_Llivechart_Main$$anon$1.prototype.applyOrElse__O__F1__O = (function(x, default$1) {
  return this.applyOrElse__s_Option__F1__O($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Option(x), default$1)
});
var $d_Llivechart_Main$$anon$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Llivechart_Main$$anon$1: 0
}, false, "livechart.Main$$anon$1", {
  Llivechart_Main$$anon$1: 1,
  sr_AbstractPartialFunction: 1,
  O: 1,
  F1: 1,
  s_PartialFunction: 1,
  Ljava_io_Serializable: 1
});
export { $d_Llivechart_Main$$anon$1 as $d_Llivechart_Main$$anon$1 };
$c_Llivechart_Main$$anon$1.prototype.$classData = $d_Llivechart_Main$$anon$1;
//# sourceMappingURL=livechart.Main$$anon$1.js.map
