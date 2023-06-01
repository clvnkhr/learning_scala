'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
import * as $j_livechart$002eModelTest from "./livechart.ModelTest.js";
/** @constructor */
function $c_jl_ClassLoader() {
  /*<skip>*/
}
$c_jl_ClassLoader.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_jl_ClassLoader.prototype.constructor = $c_jl_ClassLoader;
/** @constructor */
function $h_jl_ClassLoader() {
  /*<skip>*/
}
$h_jl_ClassLoader.prototype = $c_jl_ClassLoader.prototype;
/** @constructor */
function $c_jl_System$NanoTime$() {
  this.jl_System$NanoTime$__f_getHighPrecisionTime = null;
  $n_jl_System$NanoTime$ = this;
  this.jl_System$NanoTime$__f_getHighPrecisionTime = (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T((typeof performance)) !== "undefined") ? ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ((!(!performance.now))) ? (() => $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uD(performance.now())) : ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ((!(!performance.webkitNow))) ? (() => $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uD(performance.webkitNow())) : (() => $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uD(new Date().getTime())))) : (() => $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uD(new Date().getTime())))
}
$c_jl_System$NanoTime$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_jl_System$NanoTime$.prototype.constructor = $c_jl_System$NanoTime$;
/** @constructor */
function $h_jl_System$NanoTime$() {
  /*<skip>*/
}
$h_jl_System$NanoTime$.prototype = $c_jl_System$NanoTime$.prototype;
var $d_jl_System$NanoTime$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  jl_System$NanoTime$: 0
}, false, "java.lang.System$NanoTime$", {
  jl_System$NanoTime$: 1,
  O: 1
});
$c_jl_System$NanoTime$.prototype.$classData = $d_jl_System$NanoTime$;
var $n_jl_System$NanoTime$;
function $m_jl_System$NanoTime$() {
  if ((!$n_jl_System$NanoTime$)) {
    $n_jl_System$NanoTime$ = new $c_jl_System$NanoTime$()
  };
  return $n_jl_System$NanoTime$
}
/** @constructor */
function $c_Lmunit_MUnitRunner$BeforeEachResult(outer, error, loadedFixtures) {
  this.Lmunit_MUnitRunner$BeforeEachResult__f_error = null;
  this.Lmunit_MUnitRunner$BeforeEachResult__f_loadedFixtures = null;
  this.Lmunit_MUnitRunner$BeforeEachResult__f_error = error;
  this.Lmunit_MUnitRunner$BeforeEachResult__f_loadedFixtures = loadedFixtures;
  if ((outer === null)) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_NullPointerException__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_NullPointerException())
  }
}
$c_Lmunit_MUnitRunner$BeforeEachResult.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lmunit_MUnitRunner$BeforeEachResult.prototype.constructor = $c_Lmunit_MUnitRunner$BeforeEachResult;
/** @constructor */
function $h_Lmunit_MUnitRunner$BeforeEachResult() {
  /*<skip>*/
}
$h_Lmunit_MUnitRunner$BeforeEachResult.prototype = $c_Lmunit_MUnitRunner$BeforeEachResult.prototype;
var $d_Lmunit_MUnitRunner$BeforeEachResult = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lmunit_MUnitRunner$BeforeEachResult: 0
}, false, "munit.MUnitRunner$BeforeEachResult", {
  Lmunit_MUnitRunner$BeforeEachResult: 1,
  O: 1
});
$c_Lmunit_MUnitRunner$BeforeEachResult.prototype.$classData = $d_Lmunit_MUnitRunner$BeforeEachResult;
function $as_Lmunit_Suite$Fixture(obj) {
  return ((false || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "munit.Suite$Fixture"))
}
function $isArrayOf_Lmunit_Suite$Fixture(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lmunit_Suite$Fixture)))
}
function $asArrayOf_Lmunit_Suite$Fixture(obj, depth) {
  return (($isArrayOf_Lmunit_Suite$Fixture(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lmunit.Suite$Fixture;", depth))
}
/** @constructor */
function $c_Lmunit_TestValues$() {
  this.Lmunit_TestValues$__f_Ignore = null;
  $n_Lmunit_TestValues$ = this;
  this.Lmunit_TestValues$__f_Ignore = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_package$().Lmunit_package$__f_Ignore
}
$c_Lmunit_TestValues$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lmunit_TestValues$.prototype.constructor = $c_Lmunit_TestValues$;
/** @constructor */
function $h_Lmunit_TestValues$() {
  /*<skip>*/
}
$h_Lmunit_TestValues$.prototype = $c_Lmunit_TestValues$.prototype;
var $d_Lmunit_TestValues$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lmunit_TestValues$: 0
}, false, "munit.TestValues$", {
  Lmunit_TestValues$: 1,
  O: 1
});
$c_Lmunit_TestValues$.prototype.$classData = $d_Lmunit_TestValues$;
var $n_Lmunit_TestValues$;
function $m_Lmunit_TestValues$() {
  if ((!$n_Lmunit_TestValues$)) {
    $n_Lmunit_TestValues$ = new $c_Lmunit_TestValues$()
  };
  return $n_Lmunit_TestValues$
}
/** @constructor */
function $c_Lmunit_internal_PlatformCompat$() {
  /*<skip>*/
}
$c_Lmunit_internal_PlatformCompat$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lmunit_internal_PlatformCompat$.prototype.constructor = $c_Lmunit_internal_PlatformCompat$;
/** @constructor */
function $h_Lmunit_internal_PlatformCompat$() {
  /*<skip>*/
}
$h_Lmunit_internal_PlatformCompat$.prototype = $c_Lmunit_internal_PlatformCompat$.prototype;
$c_Lmunit_internal_PlatformCompat$.prototype.newRunner__Lsbt_testing_TaskDef__jl_ClassLoader__s_Option = (function(taskDef, classLoader) {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_reflect_Reflect$().lookupInstantiatableClass__T__s_Option($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(taskDef).Lsbt_testing_TaskDef__f__fullyQualifiedName));
  if (this$1.isEmpty__Z()) {
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()
  } else {
    var arg1 = this$1.get__O();
    var cls = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sjs_reflect_InstantiatableClass(arg1);
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(new $c_Lmunit_MUnitRunner($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(cls).sjs_reflect_InstantiatableClass__f_runtimeClass, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0((() => $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lmunit_Suite($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(cls).newInstance__O())))))
  }
});
var $d_Lmunit_internal_PlatformCompat$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lmunit_internal_PlatformCompat$: 0
}, false, "munit.internal.PlatformCompat$", {
  Lmunit_internal_PlatformCompat$: 1,
  O: 1
});
$c_Lmunit_internal_PlatformCompat$.prototype.$classData = $d_Lmunit_internal_PlatformCompat$;
var $n_Lmunit_internal_PlatformCompat$;
function $m_Lmunit_internal_PlatformCompat$() {
  if ((!$n_Lmunit_internal_PlatformCompat$)) {
    $n_Lmunit_internal_PlatformCompat$ = new $c_Lmunit_internal_PlatformCompat$()
  };
  return $n_Lmunit_internal_PlatformCompat$
}
/** @constructor */
function $c_Lmunit_internal_junitinterface_CustomRunners(runners) {
  this.Lmunit_internal_junitinterface_CustomRunners__f_runners = null;
  this.Lmunit_internal_junitinterface_CustomRunners__f_runners = runners;
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(runners).iterator__sc_Iterator());
  var f = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((_$1) => {
    var _$1$1 = $as_Lmunit_internal_junitinterface_CustomFingerprint(_$1);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$1$1).Lmunit_internal_junitinterface_CustomFingerprint__f_suite
  }));
  var this$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sc_Iterator$$anon$9(this$1, f);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().from__sc_IterableOnce__sci_Set(this$2)
}
$c_Lmunit_internal_junitinterface_CustomRunners.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lmunit_internal_junitinterface_CustomRunners.prototype.constructor = $c_Lmunit_internal_junitinterface_CustomRunners;
/** @constructor */
function $h_Lmunit_internal_junitinterface_CustomRunners() {
  /*<skip>*/
}
$h_Lmunit_internal_junitinterface_CustomRunners.prototype = $c_Lmunit_internal_junitinterface_CustomRunners.prototype;
var $d_Lmunit_internal_junitinterface_CustomRunners = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lmunit_internal_junitinterface_CustomRunners: 0
}, false, "munit.internal.junitinterface.CustomRunners", {
  Lmunit_internal_junitinterface_CustomRunners: 1,
  O: 1
});
$c_Lmunit_internal_junitinterface_CustomRunners.prototype.$classData = $d_Lmunit_internal_junitinterface_CustomRunners;
function $p_Lmunit_internal_junitinterface_JUnitReporter__trace__jl_Throwable__V($thiz, t) {
  if (((!(t instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_AssertionError)) || $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lmunit_internal_junitinterface_JUnitReporter__f_settings).Lmunit_internal_junitinterface_RunSettings__f_logAssert)) {
    $p_Lmunit_internal_junitinterface_JUnitReporter__logTrace__jl_Throwable__V($thiz, t)
  }
}
function $p_Lmunit_internal_junitinterface_JUnitReporter__emitEvent__T__Lsbt_testing_Status__Lsbt_testing_OptionalThrowable__V($thiz, method, status, throwable) {
  var testName = (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lmunit_internal_junitinterface_JUnitReporter__f_taskDef).Lsbt_testing_TaskDef__f__fullyQualifiedName + ".") + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lmunit_internal_junitinterface_JUnitReporter__f_settings).decodeName__T__T(method));
  var selector = new $c_Lsbt_testing_TestSelector(testName);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lmunit_internal_junitinterface_JUnitReporter__f_eventHandler).handle__Lsbt_testing_Event__V(new $c_Lmunit_internal_junitinterface_JUnitEvent($thiz.Lmunit_internal_junitinterface_JUnitReporter__f_taskDef, testName, status, selector, throwable, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong((-1), (-1))))
}
function $p_Lmunit_internal_junitinterface_JUnitReporter__log__I__T__V($thiz, level, s) {
  if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lmunit_internal_junitinterface_JUnitReporter__f_settings).Lmunit_internal_junitinterface_RunSettings__f_useSbtLoggers) {
    var xs = $thiz.Lmunit_internal_junitinterface_JUnitReporter__f_loggers;
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$();
    var f = ((l) => {
      var l$1 = $as_Lsbt_testing_Logger(l);
      var msg = $p_Lmunit_internal_junitinterface_JUnitReporter__filterAnsiIfNeeded__Z__T__T($thiz, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(l$1).ansiCodesSupported__Z(), s);
      if (($thiz.Lmunit_internal_junitinterface_JUnitReporter__f_Debug === level)) {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(l$1).debug__T__V(msg)
      } else if (($thiz.Lmunit_internal_junitinterface_JUnitReporter__f_Info === level)) {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(l$1).info__T__V(msg)
      } else if (($thiz.Lmunit_internal_junitinterface_JUnitReporter__f_Warn === level)) {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(l$1).warn__T__V(msg)
      } else if (($thiz.Lmunit_internal_junitinterface_JUnitReporter__f_Error === level)) {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(l$1).error__T__V(msg)
      } else {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(l$1).error__T__V(msg)
      }
    });
    var len = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).u.length;
    var i = 0;
    if ((xs !== null)) {
      while ((i < len)) {
        var arg1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).get(i);
        f(arg1);
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I)) {
      var x3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_I(xs, 1);
      while ((i < len)) {
        var arg1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).get(i);
        f(arg1$1);
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_D)) {
      var x4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_D(xs, 1);
      while ((i < len)) {
        var arg1$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4).get(i);
        f(arg1$2);
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_J)) {
      var x5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_J(xs, 1);
      while ((i < len)) {
        var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5).get(i);
        var lo = t.RTLong__f_lo;
        var hi = t.RTLong__f_hi;
        f(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_F)) {
      var x6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_F(xs, 1);
      while ((i < len)) {
        var arg1$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x6).get(i);
        f(arg1$3);
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C)) {
      var x7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_C(xs, 1);
      while ((i < len)) {
        var arg1$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x7).get(i);
        f($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(arg1$4));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B)) {
      var x8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_B(xs, 1);
      while ((i < len)) {
        var arg1$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x8).get(i);
        f(arg1$5);
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_S)) {
      var x9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_S(xs, 1);
      while ((i < len)) {
        var arg1$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x9).get(i);
        f(arg1$6);
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z)) {
      var x10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_Z(xs, 1);
      while ((i < len)) {
        var arg1$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x10).get(i);
        f(arg1$7);
        i = ((1 + i) | 0)
      }
    } else {
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(xs)
    }
  } else {
    matchResult2: {
      matchAlts1: {
        matchAlts2: {
          if (($thiz.Lmunit_internal_junitinterface_JUnitReporter__f_Debug === level)) {
            break matchAlts2
          };
          if (($thiz.Lmunit_internal_junitinterface_JUnitReporter__f_Trace === level)) {
            break matchAlts2
          };
          break matchAlts1
        };
        if ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lmunit_internal_junitinterface_JUnitReporter__f_settings).Lmunit_internal_junitinterface_RunSettings__f_verbose)) {
          break matchResult2
        }
      };
      var x = $p_Lmunit_internal_junitinterface_JUnitReporter__filterAnsiIfNeeded__Z__T__T($thiz, $thiz.Lmunit_internal_junitinterface_JUnitReporter__f_isAnsiSupported, s);
      var this$5 = $m_s_Console$();
      var this$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$5.out__Ljava_io_PrintStream());
      this$6.java$lang$JSConsoleBasedPrintStream$$printString__T__V((x + "\n"))
    }
  }
}
function $p_Lmunit_internal_junitinterface_JUnitReporter__filterAnsiIfNeeded__Z__T__T($thiz, isColorSupported, s) {
  return ((isColorSupported && $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lmunit_internal_junitinterface_JUnitReporter__f_settings).Lmunit_internal_junitinterface_RunSettings__f_color) ? s : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_internal_console_AnsiColors$().filterAnsi__T__T(s))
}
function $p_Lmunit_internal_junitinterface_JUnitReporter__logTrace__jl_Throwable__V($thiz, t) {
  var xs = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).getStackTrace__Ajl_StackTraceElement();
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$();
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$();
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$();
  var from = 0;
  _return: {
    var i = from;
    while ((i < $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).u.length)) {
      var x1 = i;
      var arg1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).get(x1);
      var p = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_StackTraceElement(arg1);
      if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(p).jl_StackTraceElement__f_fileName !== null)) {
        var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(p).jl_StackTraceElement__f_fileName);
        if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this$4.indexOf("StackTrace.scala")) !== (-1))) {
          var $$x1 = true
        } else {
          var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(p).jl_StackTraceElement__f_fileName);
          var $$x1 = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this$5.indexOf("Throwables.scala")) !== (-1))
        }
      } else {
        var $$x1 = false
      };
      if ((!$$x1)) {
        var i$1 = i;
        break _return
      };
      i = ((1 + i) | 0)
    };
    var i$1 = (-1)
  };
  var lo = ((i$1 < 0) ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).u.length : i$1);
  var trace = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_jl_StackTraceElement($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$().slice$extension__O__I__I__O(xs, lo, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).u.length), 1);
  var testFileName = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lmunit_internal_junitinterface_JUnitReporter__f_settings).Lmunit_internal_junitinterface_RunSettings__f_color ? $p_Lmunit_internal_junitinterface_JUnitReporter__findTestFileName__Ajl_StackTraceElement__T($thiz, trace) : null);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$();
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$();
  var from$1 = 0;
  _return$1: {
    var i$2 = from$1;
    while ((i$2 < $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).u.length)) {
      var x1$1 = i$2;
      var arg1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).get(x1$1);
      var p$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_StackTraceElement(arg1$1);
      if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(p$1).jl_StackTraceElement__f_fileName !== null)) {
        var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(p$1).jl_StackTraceElement__f_fileName);
        var $$x3 = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this$8.indexOf("JUnitExecuteTest.scala")) !== (-1))
      } else {
        var $$x3 = false
      };
      if ($$x3) {
        var $$x2 = i$2;
        break _return$1
      };
      i$2 = ((1 + i$2) | 0)
    };
    var $$x2 = (-1)
  };
  var i$3 = (((-1) + $$x2) | 0);
  var m = ((i$3 > 0) ? i$3 : (((-1) + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).u.length) | 0));
  $p_Lmunit_internal_junitinterface_JUnitReporter__logStackTracePart__Ajl_StackTraceElement__I__I__jl_Throwable__T__V($thiz, trace, m, (((-1) + (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).u.length - m) | 0)) | 0), t, testFileName)
}
function $p_Lmunit_internal_junitinterface_JUnitReporter__logStackTracePart__Ajl_StackTraceElement__I__I__jl_Throwable__T__V($thiz, trace, m, framesInCommon, t, testFileName) {
  var m2 = m;
  var top = 0;
  var i = top;
  while ((i <= m2)) {
    var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).get(i)).toString__T());
    if (((this$1.length >= 0) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$1.substring(0, 10)) === "org.junit."))) {
      var $$x1 = true
    } else {
      var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).get(i)).toString__T());
      var $$x1 = ((this$2.length >= 0) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$2.substring(0, 13)) === "org.hamcrest."))
    };
    if ($$x1) {
      if ((i === top)) {
        top = ((1 + top) | 0)
      } else {
        m2 = (((-1) + i) | 0);
        var break$1 = false;
        while (((m2 > top) && (!break$1))) {
          var s = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).get(m2)).toString__T();
          var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s);
          if ((!((this$3.length >= 0) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$3.substring(0, 18)) === "java.lang.reflect.")))) {
            var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s);
            var $$x2 = (!((this$4.length >= 0) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$4.substring(0, 12)) === "sun.reflect.")))
          } else {
            var $$x2 = false
          };
          if ($$x2) {
            break$1 = true
          } else {
            m2 = (((-1) + m2) | 0)
          }
        };
        i = m2
      }
    };
    i = ((1 + i) | 0)
  };
  var x = top;
  var end = m2;
  var isEmpty = (x > end);
  if ((!isEmpty)) {
    var i$1 = x;
    while (true) {
      var arg1 = i$1;
      $p_Lmunit_internal_junitinterface_JUnitReporter__log__I__T__V($thiz, $thiz.Lmunit_internal_junitinterface_JUnitReporter__f_Error, $p_Lmunit_internal_junitinterface_JUnitReporter__stackTraceElementToString__jl_StackTraceElement__T__T($thiz, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).get(arg1), testFileName));
      if ((i$1 === end)) {
        break
      };
      i$1 = ((1 + i$1) | 0)
    }
  };
  if ((m !== m2)) {
    $p_Lmunit_internal_junitinterface_JUnitReporter__log__I__T__V($thiz, $thiz.Lmunit_internal_junitinterface_JUnitReporter__f_Error, "    ...")
  } else if ((framesInCommon !== 0)) {
    $p_Lmunit_internal_junitinterface_JUnitReporter__log__I__T__V($thiz, $thiz.Lmunit_internal_junitinterface_JUnitReporter__f_Error, (("    ... " + framesInCommon) + " more"))
  };
  $p_Lmunit_internal_junitinterface_JUnitReporter__logStackTraceAsCause__Ajl_StackTraceElement__jl_Throwable__T__V($thiz, trace, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).getCause__jl_Throwable(), testFileName)
}
function $p_Lmunit_internal_junitinterface_JUnitReporter__logStackTraceAsCause__Ajl_StackTraceElement__jl_Throwable__T__V($thiz, causedTrace, t, testFileName) {
  if ((t !== null)) {
    var trace = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).getStackTrace__Ajl_StackTraceElement();
    var m = (((-1) + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).u.length) | 0);
    var n = (((-1) + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(causedTrace).u.length) | 0);
    while (true) {
      if (((m >= 0) && (n >= 0))) {
        var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).get(m);
        var x$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(causedTrace).get(n);
        var $$x1 = ((x === null) ? (x$2 === null) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).equals__O__Z(x$2))
      } else {
        var $$x1 = false
      };
      if ($$x1) {
        m = (((-1) + m) | 0);
        n = (((-1) + n) | 0)
      } else {
        break
      }
    };
    $p_Lmunit_internal_junitinterface_JUnitReporter__log__I__T__V($thiz, $thiz.Lmunit_internal_junitinterface_JUnitReporter__f_Error, ("Caused by: " + t));
    $p_Lmunit_internal_junitinterface_JUnitReporter__logStackTracePart__Ajl_StackTraceElement__I__I__jl_Throwable__T__V($thiz, trace, m, (((((-1) + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).u.length) | 0) - m) | 0), t, testFileName)
  }
}
function $p_Lmunit_internal_junitinterface_JUnitReporter__findTestFileName__Ajl_StackTraceElement__T($thiz, trace) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$();
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$();
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$();
  var from = 0;
  _return: {
    var i = from;
    while ((i < $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).u.length)) {
      var x1 = i;
      var arg1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).get(x1);
      var _$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_StackTraceElement(arg1);
      if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$2).jl_StackTraceElement__f_declaringClass === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lmunit_internal_junitinterface_JUnitReporter__f_taskDef).Lsbt_testing_TaskDef__f__fullyQualifiedName)) {
        var idx = i;
        break _return
      };
      i = ((1 + i) | 0)
    };
    var idx = (-1)
  };
  var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(((idx === (-1)) ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).get(idx))));
  if (this$4.isEmpty__Z()) {
    var $$x1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()
  } else {
    var arg1$1 = this$4.get__O();
    var _$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_StackTraceElement(arg1$1);
    var $$x1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$3).jl_StackTraceElement__f_fileName)
  };
  var this$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x1);
  var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_$less$colon$less$();
  var ev = this$5.s_$less$colon$less$__f_singleton;
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T((this$6.isEmpty__Z() ? ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ev), null) : this$6.get__O()))
}
function $p_Lmunit_internal_junitinterface_JUnitReporter__stackTraceElementToString__jl_StackTraceElement__T__T($thiz, e, testFileName) {
  if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lmunit_internal_junitinterface_JUnitReporter__f_settings).Lmunit_internal_junitinterface_RunSettings__f_color) {
    if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e).jl_StackTraceElement__f_fileName !== null)) {
      var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e).jl_StackTraceElement__f_fileName);
      var highlight = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this$1.indexOf("file:/")) !== (-1))
    } else {
      var highlight = false
    }
  } else {
    var highlight = false
  };
  var $$x2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_scm_StringBuilder__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_scm_StringBuilder()).append__T__scm_StringBuilder($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_internal_console_AnsiColors$().Lmunit_internal_console_AnsiColors$__f_Reset)).append__T__scm_StringBuilder((highlight ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_internal_console_AnsiColors$().Lmunit_internal_console_AnsiColors$__f_Bold : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_internal_console_AnsiColors$().Lmunit_internal_console_AnsiColors$__f_DarkGrey))).append__T__scm_StringBuilder("    at ")).append__T__scm_StringBuilder($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lmunit_internal_junitinterface_JUnitReporter__f_settings).decodeName__T__T((($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e).jl_StackTraceElement__f_declaringClass + ".") + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e).jl_StackTraceElement__f_methodName)))).append__C__scm_StringBuilder(40);
  if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e), false)) {
    var $$x1 = "Native Method"
  } else if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e).jl_StackTraceElement__f_fileName === null)) {
    var $$x1 = "Unknown Source"
  } else {
    var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e).jl_StackTraceElement__f_fileName);
    var file = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this$2.indexOf("file:/"));
    if ((file >= 0)) {
      var https = file
    } else {
      var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e).jl_StackTraceElement__f_fileName);
      var https = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this$3.indexOf("https:/"))
    };
    if ((https >= 0)) {
      var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e).jl_StackTraceElement__f_fileName);
      if (((https < 0) || (https > this$4.length))) {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$charAt(this$4, https)
      };
      var filename = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$4.substring(https))
    } else {
      var filename = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e).jl_StackTraceElement__f_fileName
    };
    var $$x1 = (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e).jl_StackTraceElement__f_lineNumber >= 0) ? ((filename + ":") + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e).jl_StackTraceElement__f_lineNumber) : filename)
  };
  var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x2).append__T__scm_StringBuilder($$x1)).append__C__scm_StringBuilder(41)).append__T__scm_StringBuilder($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_internal_console_AnsiColors$().Lmunit_internal_console_AnsiColors$__f_Reset));
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$5.scm_StringBuilder__f_underlying).jl_StringBuilder__f_java$lang$StringBuilder$$content
}
function $p_Lmunit_internal_junitinterface_JUnitReporter__formatTime__D__T($thiz, elapsedMillis) {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_internal_console_AnsiColors$().c__T__T__T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringOps$().format$extension__T__sci_Seq__T("%.2fs", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_O([(elapsedMillis / 1000.0)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_internal_console_AnsiColors$().Lmunit_internal_console_AnsiColors$__f_DarkGrey)
}
/** @constructor */
function $c_Lmunit_internal_junitinterface_JUnitReporter(eventHandler, loggers, settings, taskDef) {
  this.Lmunit_internal_junitinterface_JUnitReporter__f_eventHandler = null;
  this.Lmunit_internal_junitinterface_JUnitReporter__f_loggers = null;
  this.Lmunit_internal_junitinterface_JUnitReporter__f_settings = null;
  this.Lmunit_internal_junitinterface_JUnitReporter__f_taskDef = null;
  this.Lmunit_internal_junitinterface_JUnitReporter__f_isAnsiSupported = false;
  this.Lmunit_internal_junitinterface_JUnitReporter__f_Trace = 0;
  this.Lmunit_internal_junitinterface_JUnitReporter__f_Debug = 0;
  this.Lmunit_internal_junitinterface_JUnitReporter__f_Info = 0;
  this.Lmunit_internal_junitinterface_JUnitReporter__f_Warn = 0;
  this.Lmunit_internal_junitinterface_JUnitReporter__f_Error = 0;
  this.Lmunit_internal_junitinterface_JUnitReporter__f_eventHandler = eventHandler;
  this.Lmunit_internal_junitinterface_JUnitReporter__f_loggers = loggers;
  this.Lmunit_internal_junitinterface_JUnitReporter__f_settings = settings;
  this.Lmunit_internal_junitinterface_JUnitReporter__f_taskDef = taskDef;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$();
  _return: {
    var i = 0;
    while ((i < $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(loggers).u.length)) {
      var x1 = i;
      var arg1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(loggers).get(x1);
      var _$1 = $as_Lsbt_testing_Logger(arg1);
      if ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$1).ansiCodesSupported__Z())) {
        var $$x1 = false;
        break _return
      };
      i = ((1 + i) | 0)
    };
    var $$x1 = true
  };
  this.Lmunit_internal_junitinterface_JUnitReporter__f_isAnsiSupported = ($$x1 && $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(settings).Lmunit_internal_junitinterface_RunSettings__f_color);
  this.Lmunit_internal_junitinterface_JUnitReporter__f_Trace = 0;
  this.Lmunit_internal_junitinterface_JUnitReporter__f_Debug = 1;
  this.Lmunit_internal_junitinterface_JUnitReporter__f_Info = 2;
  this.Lmunit_internal_junitinterface_JUnitReporter__f_Warn = 3;
  this.Lmunit_internal_junitinterface_JUnitReporter__f_Error = 4
}
$c_Lmunit_internal_junitinterface_JUnitReporter.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lmunit_internal_junitinterface_JUnitReporter.prototype.constructor = $c_Lmunit_internal_junitinterface_JUnitReporter;
/** @constructor */
function $h_Lmunit_internal_junitinterface_JUnitReporter() {
  /*<skip>*/
}
$h_Lmunit_internal_junitinterface_JUnitReporter.prototype = $c_Lmunit_internal_junitinterface_JUnitReporter.prototype;
$c_Lmunit_internal_junitinterface_JUnitReporter.prototype.reportTestSuiteStarted__V = (function() {
  $p_Lmunit_internal_junitinterface_JUnitReporter__log__I__T__V(this, this.Lmunit_internal_junitinterface_JUnitReporter__f_Info, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_internal_console_AnsiColors$().c__T__T__T(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_internal_junitinterface_JUnitReporter__f_taskDef).Lsbt_testing_TaskDef__f__fullyQualifiedName + ":"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_internal_console_AnsiColors$().Lmunit_internal_console_AnsiColors$__f_GREEN))
});
$c_Lmunit_internal_junitinterface_JUnitReporter.prototype.reportTestStarted__T__V = (function(method) {
  if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_internal_junitinterface_JUnitReporter__f_settings).Lmunit_internal_junitinterface_RunSettings__f_verbose) {
    $p_Lmunit_internal_junitinterface_JUnitReporter__log__I__T__V(this, this.Lmunit_internal_junitinterface_JUnitReporter__f_Info, (method + " started"))
  }
});
$c_Lmunit_internal_junitinterface_JUnitReporter.prototype.reportTestIgnored__T__V = (function(method) {
  if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_internal_junitinterface_JUnitReporter__f_settings).Lmunit_internal_junitinterface_RunSettings__f_verbose) {
    $p_Lmunit_internal_junitinterface_JUnitReporter__log__I__T__V(this, this.Lmunit_internal_junitinterface_JUnitReporter__f_Info, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_internal_console_AnsiColors$().c__T__T__T((("==> i " + method) + " ignored"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_internal_console_AnsiColors$().Lmunit_internal_console_AnsiColors$__f_YELLOW))
  };
  $p_Lmunit_internal_junitinterface_JUnitReporter__emitEvent__T__Lsbt_testing_Status__Lsbt_testing_OptionalThrowable__V(this, method, $m_Lsbt_testing_Status$().Lsbt_testing_Status$__f_Ignored, $ct_Lsbt_testing_OptionalThrowable__(new $c_Lsbt_testing_OptionalThrowable()))
});
$c_Lmunit_internal_junitinterface_JUnitReporter.prototype.reportAssumptionViolation__T__D__jl_Throwable__V = (function(method, timeInSeconds, e) {
  if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_internal_junitinterface_JUnitReporter__f_settings).Lmunit_internal_junitinterface_RunSettings__f_verbose) {
    $p_Lmunit_internal_junitinterface_JUnitReporter__log__I__T__V(this, this.Lmunit_internal_junitinterface_JUnitReporter__f_Info, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_internal_console_AnsiColors$().c__T__T__T((("==> s " + method) + " skipped"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_internal_console_AnsiColors$().Lmunit_internal_console_AnsiColors$__f_YELLOW))
  };
  $p_Lmunit_internal_junitinterface_JUnitReporter__emitEvent__T__Lsbt_testing_Status__Lsbt_testing_OptionalThrowable__V(this, method, $m_Lsbt_testing_Status$().Lsbt_testing_Status$__f_Skipped, $ct_Lsbt_testing_OptionalThrowable__jl_Throwable__(new $c_Lsbt_testing_OptionalThrowable(), e))
});
$c_Lmunit_internal_junitinterface_JUnitReporter.prototype.reportTestPassed__T__D__V = (function(method, elapsedMillis) {
  $p_Lmunit_internal_junitinterface_JUnitReporter__log__I__T__V(this, this.Lmunit_internal_junitinterface_JUnitReporter__f_Info, (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_internal_console_AnsiColors$().c__T__T__T(("  + " + method), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_internal_console_AnsiColors$().Lmunit_internal_console_AnsiColors$__f_GREEN) + " ") + $p_Lmunit_internal_junitinterface_JUnitReporter__formatTime__D__T(this, elapsedMillis)));
  $p_Lmunit_internal_junitinterface_JUnitReporter__emitEvent__T__Lsbt_testing_Status__Lsbt_testing_OptionalThrowable__V(this, method, $m_Lsbt_testing_Status$().Lsbt_testing_Status$__f_Success, $ct_Lsbt_testing_OptionalThrowable__(new $c_Lsbt_testing_OptionalThrowable()))
});
$c_Lmunit_internal_junitinterface_JUnitReporter.prototype.reportTestFailed__T__jl_Throwable__D__V = (function(method, ex, elapsedMillis) {
  var $$x2 = this.Lmunit_internal_junitinterface_JUnitReporter__f_Info;
  var $$x1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_scm_StringBuilder__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_scm_StringBuilder()).append__T__scm_StringBuilder($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_internal_console_AnsiColors$().c__T__T__T(((("==> X " + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_internal_junitinterface_JUnitReporter__f_taskDef).Lsbt_testing_TaskDef__f__fullyQualifiedName) + ".") + method), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_internal_console_AnsiColors$().Lmunit_internal_console_AnsiColors$__f_LightRed))).append__T__scm_StringBuilder(" ")).append__T__scm_StringBuilder($p_Lmunit_internal_junitinterface_JUnitReporter__formatTime__D__T(this, elapsedMillis))).append__T__scm_StringBuilder(" ");
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ex);
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x1).append__T__scm_StringBuilder($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$objectGetClass(this$1).getName__T())).append__T__scm_StringBuilder(": ")).append__T__scm_StringBuilder($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ex).getMessage__T()));
  $p_Lmunit_internal_junitinterface_JUnitReporter__log__I__T__V(this, $$x2, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$2.scm_StringBuilder__f_underlying).jl_StringBuilder__f_java$lang$StringBuilder$$content);
  $p_Lmunit_internal_junitinterface_JUnitReporter__trace__jl_Throwable__V(this, ex);
  $p_Lmunit_internal_junitinterface_JUnitReporter__emitEvent__T__Lsbt_testing_Status__Lsbt_testing_OptionalThrowable__V(this, method, $m_Lsbt_testing_Status$().Lsbt_testing_Status$__f_Failure, $ct_Lsbt_testing_OptionalThrowable__jl_Throwable__(new $c_Lsbt_testing_OptionalThrowable(), ex))
});
var $d_Lmunit_internal_junitinterface_JUnitReporter = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lmunit_internal_junitinterface_JUnitReporter: 0
}, false, "munit.internal.junitinterface.JUnitReporter", {
  Lmunit_internal_junitinterface_JUnitReporter: 1,
  O: 1
});
$c_Lmunit_internal_junitinterface_JUnitReporter.prototype.$classData = $d_Lmunit_internal_junitinterface_JUnitReporter;
function $is_Lmunit_internal_junitinterface_Tag(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lmunit_internal_junitinterface_Tag)))
}
function $as_Lmunit_internal_junitinterface_Tag(obj) {
  return (($is_Lmunit_internal_junitinterface_Tag(obj) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "munit.internal.junitinterface.Tag"))
}
function $isArrayOf_Lmunit_internal_junitinterface_Tag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lmunit_internal_junitinterface_Tag)))
}
function $asArrayOf_Lmunit_internal_junitinterface_Tag(obj, depth) {
  return (($isArrayOf_Lmunit_internal_junitinterface_Tag(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lmunit.internal.junitinterface.Tag;", depth))
}
/** @constructor */
function $c_Lorg_junit_runner_Description(cls, methodName, annotations, children) {
  this.Lorg_junit_runner_Description__f_cls = null;
  this.Lorg_junit_runner_Description__f_methodName = null;
  this.Lorg_junit_runner_Description__f_annotations = null;
  this.Lorg_junit_runner_Description__f_children = null;
  this.Lorg_junit_runner_Description__f_cls = cls;
  this.Lorg_junit_runner_Description__f_methodName = methodName;
  this.Lorg_junit_runner_Description__f_annotations = annotations;
  this.Lorg_junit_runner_Description__f_children = children
}
$c_Lorg_junit_runner_Description.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_junit_runner_Description.prototype.constructor = $c_Lorg_junit_runner_Description;
/** @constructor */
function $h_Lorg_junit_runner_Description() {
  /*<skip>*/
}
$h_Lorg_junit_runner_Description.prototype = $c_Lorg_junit_runner_Description.prototype;
$c_Lorg_junit_runner_Description.prototype.addChild__Lorg_junit_runner_Description__Lorg_junit_runner_Description = (function(description) {
  var $$x3 = this.Lorg_junit_runner_Description__f_cls;
  var $$x2 = this.Lorg_junit_runner_Description__f_methodName;
  var $$x1 = this.Lorg_junit_runner_Description__f_annotations;
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_junit_runner_Description__f_children);
  return new $c_Lorg_junit_runner_Description($$x3, $$x2, $$x1, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(description, this$1))
});
$c_Lorg_junit_runner_Description.prototype.getMethodName__T = (function() {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_junit_runner_Description__f_methodName);
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T((this$1.isEmpty__Z() ? "<unknown>" : this$1.get__O()))
});
function $as_Lorg_junit_runner_Description(obj) {
  return (((obj instanceof $c_Lorg_junit_runner_Description) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "org.junit.runner.Description"))
}
function $isArrayOf_Lorg_junit_runner_Description(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_junit_runner_Description)))
}
function $asArrayOf_Lorg_junit_runner_Description(obj, depth) {
  return (($isArrayOf_Lorg_junit_runner_Description(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lorg.junit.runner.Description;", depth))
}
var $d_Lorg_junit_runner_Description = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_junit_runner_Description: 0
}, false, "org.junit.runner.Description", {
  Lorg_junit_runner_Description: 1,
  O: 1
});
$c_Lorg_junit_runner_Description.prototype.$classData = $d_Lorg_junit_runner_Description;
/** @constructor */
function $c_Lorg_junit_runner_Description$() {
  /*<skip>*/
}
$c_Lorg_junit_runner_Description$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_junit_runner_Description$.prototype.constructor = $c_Lorg_junit_runner_Description$;
/** @constructor */
function $h_Lorg_junit_runner_Description$() {
  /*<skip>*/
}
$h_Lorg_junit_runner_Description$.prototype = $c_Lorg_junit_runner_Description$.prototype;
$c_Lorg_junit_runner_Description$.prototype.createSuiteDescription__jl_Class__Lorg_junit_runner_Description = (function(cls) {
  return new $c_Lorg_junit_runner_Description(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(cls), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_package$().s_package$__f_Nil, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_package$().s_package$__f_Nil)
});
$c_Lorg_junit_runner_Description$.prototype.createTestDescription__jl_Class__T__sci_Seq__Lorg_junit_runner_Description = (function(cls, name, annotation) {
  return new $c_Lorg_junit_runner_Description(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(cls), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(name), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(annotation).toList__sci_List(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_package$().s_package$__f_Nil)
});
var $d_Lorg_junit_runner_Description$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_junit_runner_Description$: 0
}, false, "org.junit.runner.Description$", {
  Lorg_junit_runner_Description$: 1,
  O: 1
});
$c_Lorg_junit_runner_Description$.prototype.$classData = $d_Lorg_junit_runner_Description$;
var $n_Lorg_junit_runner_Description$;
function $m_Lorg_junit_runner_Description$() {
  if ((!$n_Lorg_junit_runner_Description$)) {
    $n_Lorg_junit_runner_Description$ = new $c_Lorg_junit_runner_Description$()
  };
  return $n_Lorg_junit_runner_Description$
}
/** @constructor */
function $c_Lorg_junit_runner_Runner() {
  /*<skip>*/
}
$c_Lorg_junit_runner_Runner.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_junit_runner_Runner.prototype.constructor = $c_Lorg_junit_runner_Runner;
/** @constructor */
function $h_Lorg_junit_runner_Runner() {
  /*<skip>*/
}
$h_Lorg_junit_runner_Runner.prototype = $c_Lorg_junit_runner_Runner.prototype;
/** @constructor */
function $c_Lorg_junit_runner_manipulation_Filter() {
  /*<skip>*/
}
$c_Lorg_junit_runner_manipulation_Filter.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_junit_runner_manipulation_Filter.prototype.constructor = $c_Lorg_junit_runner_manipulation_Filter;
/** @constructor */
function $h_Lorg_junit_runner_manipulation_Filter() {
  /*<skip>*/
}
$h_Lorg_junit_runner_manipulation_Filter.prototype = $c_Lorg_junit_runner_manipulation_Filter.prototype;
/** @constructor */
function $c_Lorg_junit_runner_notification_Failure(description, ex) {
  this.Lorg_junit_runner_notification_Failure__f_description = null;
  this.Lorg_junit_runner_notification_Failure__f_ex = null;
  this.Lorg_junit_runner_notification_Failure__f_description = description;
  this.Lorg_junit_runner_notification_Failure__f_ex = ex
}
$c_Lorg_junit_runner_notification_Failure.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_junit_runner_notification_Failure.prototype.constructor = $c_Lorg_junit_runner_notification_Failure;
/** @constructor */
function $h_Lorg_junit_runner_notification_Failure() {
  /*<skip>*/
}
$h_Lorg_junit_runner_notification_Failure.prototype = $c_Lorg_junit_runner_notification_Failure.prototype;
var $d_Lorg_junit_runner_notification_Failure = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_junit_runner_notification_Failure: 0
}, false, "org.junit.runner.notification.Failure", {
  Lorg_junit_runner_notification_Failure: 1,
  O: 1
});
$c_Lorg_junit_runner_notification_Failure.prototype.$classData = $d_Lorg_junit_runner_notification_Failure;
/** @constructor */
function $c_Lorg_scalajs_junit_Ansi$() {
  /*<skip>*/
}
$c_Lorg_scalajs_junit_Ansi$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_junit_Ansi$.prototype.constructor = $c_Lorg_scalajs_junit_Ansi$;
/** @constructor */
function $h_Lorg_scalajs_junit_Ansi$() {
  /*<skip>*/
}
$h_Lorg_scalajs_junit_Ansi$.prototype = $c_Lorg_scalajs_junit_Ansi$.prototype;
$c_Lorg_scalajs_junit_Ansi$.prototype.c__T__T__T = (function(s, colorSequence) {
  return ((colorSequence === null) ? s : ((("" + colorSequence) + s) + "\u001b[0m"))
});
$c_Lorg_scalajs_junit_Ansi$.prototype.filterAnsi__T__T = (function(s) {
  if ((s === null)) {
    return null
  } else {
    var r = "";
    var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s);
    var len = this$1.length;
    var i = 0;
    while ((i < len)) {
      var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s);
      var index = i;
      var c = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$charAt(this$2, index);
      if ((c === 27)) {
        i = ((1 + i) | 0);
        while (true) {
          if ((i < len)) {
            var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s);
            var index$1 = i;
            var $$x1 = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$charAt(this$3, index$1) !== 109)
          } else {
            var $$x1 = false
          };
          if ($$x1) {
            i = ((1 + i) | 0)
          } else {
            break
          }
        }
      } else {
        r = (("" + r) + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(c))
      };
      i = ((1 + i) | 0)
    };
    return r
  }
});
var $d_Lorg_scalajs_junit_Ansi$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_junit_Ansi$: 0
}, false, "org.scalajs.junit.Ansi$", {
  Lorg_scalajs_junit_Ansi$: 1,
  O: 1
});
$c_Lorg_scalajs_junit_Ansi$.prototype.$classData = $d_Lorg_scalajs_junit_Ansi$;
var $n_Lorg_scalajs_junit_Ansi$;
function $m_Lorg_scalajs_junit_Ansi$() {
  if ((!$n_Lorg_scalajs_junit_Ansi$)) {
    $n_Lorg_scalajs_junit_Ansi$ = new $c_Lorg_scalajs_junit_Ansi$()
  };
  return $n_Lorg_scalajs_junit_Ansi$
}
function $is_Lorg_scalajs_junit_Bootstrapper(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lorg_scalajs_junit_Bootstrapper)))
}
function $as_Lorg_scalajs_junit_Bootstrapper(obj) {
  return (($is_Lorg_scalajs_junit_Bootstrapper(obj) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "org.scalajs.junit.Bootstrapper"))
}
function $isArrayOf_Lorg_scalajs_junit_Bootstrapper(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_scalajs_junit_Bootstrapper)))
}
function $asArrayOf_Lorg_scalajs_junit_Bootstrapper(obj, depth) {
  return (($isArrayOf_Lorg_scalajs_junit_Bootstrapper(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lorg.scalajs.junit.Bootstrapper;", depth))
}
function $p_Lorg_scalajs_junit_Reporter__logTestInfo__F1__s_Option__T__V($thiz, level, method, msg) {
  $thiz.log__F1__T__V(level, ((("Test " + $p_Lorg_scalajs_junit_Reporter__formatTest__s_Option__T__T($thiz, method, "\u001b[36m")) + " ") + msg))
}
function $p_Lorg_scalajs_junit_Reporter__logTestException__F1__T__s_Option__jl_Throwable__D__V($thiz, level, prefix, method, ex, timeInSeconds) {
  var logException = ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_junit_Reporter__f_settings).Lorg_scalajs_junit_RunSettings__f_notLogExceptionClass) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_junit_Reporter__f_settings).Lorg_scalajs_junit_RunSettings__f_logAssert || (!(ex instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_AssertionError))));
  if (logException) {
    var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ex);
    var fmtName = ($p_Lorg_scalajs_junit_Reporter__formatClass__T__T__T($thiz, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$objectGetClass(this$1).getName__T(), "\u001b[31m") + ": ")
  } else {
    var fmtName = ""
  };
  var m = $p_Lorg_scalajs_junit_Reporter__formatTest__s_Option__T__T($thiz, method, "\u001b[31m");
  var msg = (((((((("" + prefix) + m) + " failed: ") + fmtName) + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ex).getMessage__T()) + ", took ") + timeInSeconds) + " sec");
  $thiz.log__F1__T__V(level, msg)
}
function $p_Lorg_scalajs_junit_Reporter__trace__jl_Throwable__V($thiz, t) {
  if (((!(t instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_AssertionError)) || $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_junit_Reporter__f_settings).Lorg_scalajs_junit_RunSettings__f_logAssert)) {
    $p_Lorg_scalajs_junit_Reporter__logTrace__jl_Throwable__V($thiz, t)
  }
}
function $p_Lorg_scalajs_junit_Reporter__infoOrDebug__F1($thiz) {
  return ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_junit_Reporter__f_settings).Lorg_scalajs_junit_RunSettings__f_verbose ? new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((x$5$2) => {
    var x$5 = $as_Lsbt_testing_Logger(x$5$2);
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((msg$2) => {
      var msg = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(msg$2);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$5).info__T__V(msg)
    }))
  })) : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((x$6$2) => {
    var x$6 = $as_Lsbt_testing_Logger(x$6$2);
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((msg$2$1) => {
      var msg$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(msg$2$1);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$6).debug__T__V(msg$1)
    }))
  })))
}
function $p_Lorg_scalajs_junit_Reporter__formatTest__s_Option__T__T($thiz, method, color) {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(method);
  if (this$1.isEmpty__Z()) {
    var $$x1 = $p_Lorg_scalajs_junit_Reporter__formattedTestClass__T($thiz)
  } else {
    var arg1 = this$1.get__O();
    var method$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(arg1);
    var fmtMethod = $m_Lorg_scalajs_junit_Ansi$().c__T__T__T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_junit_Reporter__f_settings).decodeName__T__T(method$2), color);
    var $$x1 = (($p_Lorg_scalajs_junit_Reporter__formattedTestClass__T($thiz) + ".") + fmtMethod)
  };
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($$x1)
}
function $p_Lorg_scalajs_junit_Reporter__formattedTestClass$lzycompute__T($thiz) {
  if ((!$thiz.Lorg_scalajs_junit_Reporter__f_bitmap$0)) {
    $thiz.Lorg_scalajs_junit_Reporter__f_formattedTestClass = $p_Lorg_scalajs_junit_Reporter__formatClass__T__T__T($thiz, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_junit_Reporter__f_taskDef).Lsbt_testing_TaskDef__f__fullyQualifiedName, "\u001b[33m");
    $thiz.Lorg_scalajs_junit_Reporter__f_bitmap$0 = true
  };
  return $thiz.Lorg_scalajs_junit_Reporter__f_formattedTestClass
}
function $p_Lorg_scalajs_junit_Reporter__formattedTestClass__T($thiz) {
  return ((!$thiz.Lorg_scalajs_junit_Reporter__f_bitmap$0) ? $p_Lorg_scalajs_junit_Reporter__formattedTestClass$lzycompute__T($thiz) : $thiz.Lorg_scalajs_junit_Reporter__f_formattedTestClass)
}
function $p_Lorg_scalajs_junit_Reporter__formatClass__T__T__T($thiz, fullName, color) {
  var $$x1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringOps$();
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(fullName);
  var x1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x1).splitAt$extension__T__I__T2(fullName, ((1 + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this$2.lastIndexOf("."))) | 0));
  if ((x1 === null)) {
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x1)
  };
  var prefix = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x1).T2__f__1);
  var name = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x1).T2__f__2);
  return (("" + prefix) + $m_Lorg_scalajs_junit_Ansi$().c__T__T__T(name, color))
}
function $p_Lorg_scalajs_junit_Reporter__emitEvent__s_Option__Lsbt_testing_Status__V($thiz, method, status) {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(method);
  if (this$1.isEmpty__Z()) {
    var $$x1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_junit_Reporter__f_taskDef).Lsbt_testing_TaskDef__f__fullyQualifiedName
  } else {
    var arg1 = this$1.get__O();
    var method$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(arg1);
    var $$x1 = (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_junit_Reporter__f_taskDef).Lsbt_testing_TaskDef__f__fullyQualifiedName + ".") + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_junit_Reporter__f_settings).decodeName__T__T(method$2))
  };
  var testName = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($$x1);
  var selector = new $c_Lsbt_testing_TestSelector(testName);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_junit_Reporter__f_eventHandler).handle__Lsbt_testing_Event__V(new $c_Lorg_scalajs_junit_JUnitEvent($thiz.Lorg_scalajs_junit_Reporter__f_taskDef, status, selector, $ct_Lsbt_testing_OptionalThrowable__(new $c_Lsbt_testing_OptionalThrowable()), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong((-1), (-1))))
}
function $p_Lorg_scalajs_junit_Reporter__filterAnsiIfNeeded__Lsbt_testing_Logger__T__T($thiz, l, s) {
  return (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(l).ansiCodesSupported__Z() && $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_junit_Reporter__f_settings).Lorg_scalajs_junit_RunSettings__f_color) ? s : $m_Lorg_scalajs_junit_Ansi$().filterAnsi__T__T(s))
}
function $p_Lorg_scalajs_junit_Reporter__logTrace__jl_Throwable__V($thiz, t) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$();
  var xs = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).getStackTrace__Ajl_StackTraceElement();
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$();
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$();
  var from = 0;
  _return: {
    var i = from;
    while ((i < $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).u.length)) {
      var x1 = i;
      var arg1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).get(x1);
      var p = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_StackTraceElement(arg1);
      if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(p).jl_StackTraceElement__f_fileName !== null)) {
        var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(p).jl_StackTraceElement__f_fileName);
        if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this$4.indexOf("StackTrace.scala")) !== (-1))) {
          var $$x1 = true
        } else {
          var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(p).jl_StackTraceElement__f_fileName);
          var $$x1 = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this$5.indexOf("Throwables.scala")) !== (-1))
        }
      } else {
        var $$x1 = false
      };
      if ((!$$x1)) {
        var i$1 = i;
        break _return
      };
      i = ((1 + i) | 0)
    };
    var i$1 = (-1)
  };
  var lo = ((i$1 < 0) ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).u.length : i$1);
  var trace = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_jl_StackTraceElement($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$().slice$extension__O__I__I__O(xs, lo, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).u.length), 1);
  var testFileName = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_junit_Reporter__f_settings).Lorg_scalajs_junit_RunSettings__f_color ? $p_Lorg_scalajs_junit_Reporter__findTestFileName__Ajl_StackTraceElement__T($thiz, trace) : null);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$();
  var x$2 = 0;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$();
  _return$1: {
    var i$2 = x$2;
    while ((i$2 < $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).u.length)) {
      var x1$1 = i$2;
      var arg1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).get(x1$1);
      var p$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_StackTraceElement(arg1$1);
      if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(p$3).jl_StackTraceElement__f_fileName !== null)) {
        var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(p$3).jl_StackTraceElement__f_fileName);
        var $$x3 = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this$8.indexOf("JUnitExecuteTest.scala")) !== (-1))
      } else {
        var $$x3 = false
      };
      if ($$x3) {
        var $$x2 = i$2;
        break _return$1
      };
      i$2 = ((1 + i$2) | 0)
    };
    var $$x2 = (-1)
  };
  var i$3 = (((-1) + $$x2) | 0);
  var m = ((i$3 > 0) ? i$3 : (((-1) + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).u.length) | 0));
  $p_Lorg_scalajs_junit_Reporter__logStackTracePart__Ajl_StackTraceElement__I__I__jl_Throwable__T__V($thiz, trace, m, (((-1) + (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).u.length - m) | 0)) | 0), t, testFileName)
}
function $p_Lorg_scalajs_junit_Reporter__logStackTracePart__Ajl_StackTraceElement__I__I__jl_Throwable__T__V($thiz, trace, m, framesInCommon, t, testFileName) {
  var m2 = m;
  var top = 0;
  var i = top;
  while ((i <= m2)) {
    var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).get(i)).toString__T());
    if (((this$1.length >= 0) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$1.substring(0, 10)) === "org.junit."))) {
      var $$x1 = true
    } else {
      var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).get(i)).toString__T());
      var $$x1 = ((this$2.length >= 0) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$2.substring(0, 13)) === "org.hamcrest."))
    };
    if ($$x1) {
      if ((i === top)) {
        top = ((1 + top) | 0)
      } else {
        m2 = (((-1) + i) | 0);
        var break$1 = false;
        while (((m2 > top) && (!break$1))) {
          var s = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).get(m2)).toString__T();
          var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s);
          if ((!((this$3.length >= 0) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$3.substring(0, 18)) === "java.lang.reflect.")))) {
            var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s);
            var $$x2 = (!((this$4.length >= 0) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$4.substring(0, 12)) === "sun.reflect.")))
          } else {
            var $$x2 = false
          };
          if ($$x2) {
            break$1 = true
          } else {
            m2 = (((-1) + m2) | 0)
          }
        };
        i = m2
      }
    };
    i = ((1 + i) | 0)
  };
  var x = top;
  var end = m2;
  var isEmpty = (x > end);
  if ((!isEmpty)) {
    var i$1 = x;
    while (true) {
      var v1 = i$1;
      $thiz.log__F1__T__V(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((x$8$2) => {
        var x$8 = $as_Lsbt_testing_Logger(x$8$2);
        return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((msg$2) => {
          var msg = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(msg$2);
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$8).error__T__V(msg)
        }))
      })), ("    at " + $p_Lorg_scalajs_junit_Reporter__stackTraceElementToString__jl_StackTraceElement__T__T($thiz, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).get(v1), testFileName)));
      if ((i$1 === end)) {
        break
      };
      i$1 = ((1 + i$1) | 0)
    }
  };
  if ((m !== m2)) {
    $thiz.log__F1__T__V(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((x$9$2) => {
      var x$9 = $as_Lsbt_testing_Logger(x$9$2);
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((msg$2$1) => {
        var msg$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(msg$2$1);
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$9).error__T__V(msg$1)
      }))
    })), "    ...")
  } else if ((framesInCommon !== 0)) {
    $thiz.log__F1__T__V(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((x$10$2) => {
      var x$10 = $as_Lsbt_testing_Logger(x$10$2);
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((msg$2$2) => {
        var msg$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(msg$2$2);
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$10).error__T__V(msg$3)
      }))
    })), (("    ... " + framesInCommon) + " more"))
  };
  $p_Lorg_scalajs_junit_Reporter__logStackTraceAsCause__Ajl_StackTraceElement__jl_Throwable__T__V($thiz, trace, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).getCause__jl_Throwable(), testFileName)
}
function $p_Lorg_scalajs_junit_Reporter__logStackTraceAsCause__Ajl_StackTraceElement__jl_Throwable__T__V($thiz, causedTrace, t, testFileName) {
  if ((t !== null)) {
    var trace = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).getStackTrace__Ajl_StackTraceElement();
    var m = (((-1) + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).u.length) | 0);
    var n = (((-1) + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(causedTrace).u.length) | 0);
    while (true) {
      if (((m >= 0) && (n >= 0))) {
        var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).get(m);
        var x$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(causedTrace).get(n);
        var $$x1 = ((x === null) ? (x$2 === null) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).equals__O__Z(x$2))
      } else {
        var $$x1 = false
      };
      if ($$x1) {
        m = (((-1) + m) | 0);
        n = (((-1) + n) | 0)
      } else {
        break
      }
    };
    $thiz.log__F1__T__V(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((x$11$2) => {
      var x$11 = $as_Lsbt_testing_Logger(x$11$2);
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((msg$2) => {
        var msg = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(msg$2);
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$11).error__T__V(msg)
      }))
    })), ("Caused by: " + t));
    $p_Lorg_scalajs_junit_Reporter__logStackTracePart__Ajl_StackTraceElement__I__I__jl_Throwable__T__V($thiz, trace, m, (((((-1) + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).u.length) | 0) - m) | 0), t, testFileName)
  }
}
function $p_Lorg_scalajs_junit_Reporter__findTestFileName__Ajl_StackTraceElement__T($thiz, trace) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$();
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$();
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$();
  var from = 0;
  _return: {
    var i = from;
    while ((i < $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).u.length)) {
      var x1 = i;
      var arg1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).get(x1);
      var x$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_StackTraceElement(arg1);
      if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$12).jl_StackTraceElement__f_declaringClass === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_junit_Reporter__f_taskDef).Lsbt_testing_TaskDef__f__fullyQualifiedName)) {
        var idx = i;
        break _return
      };
      i = ((1 + i) | 0)
    };
    var idx = (-1)
  };
  var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(((idx === (-1)) ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).get(idx))));
  if (this$4.isEmpty__Z()) {
    var $$x1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()
  } else {
    var arg1$1 = this$4.get__O();
    var x$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_StackTraceElement(arg1$1);
    var $$x1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$13).jl_StackTraceElement__f_fileName)
  };
  var this$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x1);
  var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_$less$colon$less$();
  var ev = this$5.s_$less$colon$less$__f_singleton;
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T((this$6.isEmpty__Z() ? ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ev), null) : this$6.get__O()))
}
function $p_Lorg_scalajs_junit_Reporter__stackTraceElementToString__jl_StackTraceElement__T__T($thiz, e, testFileName) {
  var highlight = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_junit_Reporter__f_settings).Lorg_scalajs_junit_RunSettings__f_color && (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_junit_Reporter__f_taskDef).Lsbt_testing_TaskDef__f__fullyQualifiedName === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e).jl_StackTraceElement__f_declaringClass) || ((testFileName !== null) && (testFileName === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e).jl_StackTraceElement__f_fileName))));
  var r = "";
  r = (("" + r) + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_junit_Reporter__f_settings).decodeName__T__T((($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e).jl_StackTraceElement__f_declaringClass + ".") + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e).jl_StackTraceElement__f_methodName)));
  r = (r + "(");
  if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e), false)) {
    r = (("" + r) + $m_Lorg_scalajs_junit_Ansi$().c__T__T__T("Native Method", (highlight ? "\u001b[33m" : null)))
  } else if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e).jl_StackTraceElement__f_fileName === null)) {
    r = (("" + r) + $m_Lorg_scalajs_junit_Ansi$().c__T__T__T("Unknown Source", (highlight ? "\u001b[33m" : null)))
  } else {
    r = (("" + r) + $m_Lorg_scalajs_junit_Ansi$().c__T__T__T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e).jl_StackTraceElement__f_fileName, (highlight ? "\u001b[35m" : null)));
    if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e).jl_StackTraceElement__f_lineNumber >= 0)) {
      r = (r + ":");
      var $$x2 = r;
      var $$x1 = $m_Lorg_scalajs_junit_Ansi$();
      var i = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e).jl_StackTraceElement__f_lineNumber;
      r = (("" + $$x2) + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x1).c__T__T__T(("" + i), (highlight ? "\u001b[33m" : null)))
    }
  };
  r = (r + ")");
  return r
}
function $p_Lorg_scalajs_junit_Reporter__emit$1__jl_Throwable__T__s_Option__D__V($thiz, t, prefix$1, method$1, timeInSeconds$1) {
  $p_Lorg_scalajs_junit_Reporter__logTestException__F1__T__s_Option__jl_Throwable__D__V($thiz, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((x$3$2) => {
    var x$3 = $as_Lsbt_testing_Logger(x$3$2);
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((msg$2) => {
      var msg = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(msg$2);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$3).error__T__V(msg)
    }))
  })), prefix$1, method$1, t, timeInSeconds$1);
  $p_Lorg_scalajs_junit_Reporter__trace__jl_Throwable__V($thiz, t)
}
/** @constructor */
function $c_Lorg_scalajs_junit_Reporter(eventHandler, loggers, settings, taskDef) {
  this.Lorg_scalajs_junit_Reporter__f_formattedTestClass = null;
  this.Lorg_scalajs_junit_Reporter__f_eventHandler = null;
  this.Lorg_scalajs_junit_Reporter__f_loggers = null;
  this.Lorg_scalajs_junit_Reporter__f_settings = null;
  this.Lorg_scalajs_junit_Reporter__f_taskDef = null;
  this.Lorg_scalajs_junit_Reporter__f_bitmap$0 = false;
  this.Lorg_scalajs_junit_Reporter__f_eventHandler = eventHandler;
  this.Lorg_scalajs_junit_Reporter__f_loggers = loggers;
  this.Lorg_scalajs_junit_Reporter__f_settings = settings;
  this.Lorg_scalajs_junit_Reporter__f_taskDef = taskDef
}
$c_Lorg_scalajs_junit_Reporter.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_junit_Reporter.prototype.constructor = $c_Lorg_scalajs_junit_Reporter;
/** @constructor */
function $h_Lorg_scalajs_junit_Reporter() {
  /*<skip>*/
}
$h_Lorg_scalajs_junit_Reporter.prototype = $c_Lorg_scalajs_junit_Reporter.prototype;
$c_Lorg_scalajs_junit_Reporter.prototype.reportRunStarted__V = (function() {
  this.log__F1__T__V($p_Lorg_scalajs_junit_Reporter__infoOrDebug__F1(this), $m_Lorg_scalajs_junit_Ansi$().c__T__T__T("Test run started", "\u001b[34m"))
});
$c_Lorg_scalajs_junit_Reporter.prototype.reportRunFinished__I__I__I__D__V = (function(failed, ignored, total, timeInSeconds) {
  var msg = ((((("" + $m_Lorg_scalajs_junit_Ansi$().c__T__T__T("Test run finished: ", "\u001b[34m")) + $m_Lorg_scalajs_junit_Ansi$().c__T__T__T((failed + " failed"), ((failed === 0) ? "\u001b[34m" : "\u001b[31m"))) + $m_Lorg_scalajs_junit_Ansi$().c__T__T__T(", ", "\u001b[34m")) + $m_Lorg_scalajs_junit_Ansi$().c__T__T__T((ignored + " ignored"), ((ignored === 0) ? "\u001b[34m" : "\u001b[33m"))) + $m_Lorg_scalajs_junit_Ansi$().c__T__T__T(((((", " + total) + " total, ") + timeInSeconds) + "s"), "\u001b[34m"));
  this.log__F1__T__V($p_Lorg_scalajs_junit_Reporter__infoOrDebug__F1(this), msg)
});
$c_Lorg_scalajs_junit_Reporter.prototype.reportIgnored__s_Option__V = (function(method) {
  $p_Lorg_scalajs_junit_Reporter__logTestInfo__F1__s_Option__T__V(this, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((x$1$2) => {
    var x$1 = $as_Lsbt_testing_Logger(x$1$2);
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((msg$2) => {
      var msg = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(msg$2);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1).info__T__V(msg)
    }))
  })), method, "ignored");
  $p_Lorg_scalajs_junit_Reporter__emitEvent__s_Option__Lsbt_testing_Status__V(this, method, $m_Lsbt_testing_Status$().Lsbt_testing_Status$__f_Skipped)
});
$c_Lorg_scalajs_junit_Reporter.prototype.reportTestStarted__T__V = (function(method) {
  $p_Lorg_scalajs_junit_Reporter__logTestInfo__F1__s_Option__T__V(this, $p_Lorg_scalajs_junit_Reporter__infoOrDebug__F1(this), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(method), "started")
});
$c_Lorg_scalajs_junit_Reporter.prototype.reportTestFinished__T__Z__D__V = (function(method, succeeded, timeInSeconds) {
  $p_Lorg_scalajs_junit_Reporter__logTestInfo__F1__s_Option__T__V(this, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((x$2$2) => {
    var x$2 = $as_Lsbt_testing_Logger(x$2$2);
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((msg$2) => {
      var msg = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(msg$2);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$2).debug__T__V(msg)
    }))
  })), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(method), (("finished, took " + timeInSeconds) + " sec"));
  if (succeeded) {
    $p_Lorg_scalajs_junit_Reporter__emitEvent__s_Option__Lsbt_testing_Status__V(this, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(method), $m_Lsbt_testing_Status$().Lsbt_testing_Status$__f_Success)
  }
});
$c_Lorg_scalajs_junit_Reporter.prototype.reportErrors__T__s_Option__D__sci_List__V = (function(prefix, method, timeInSeconds, errors) {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(errors);
  if ((!this$1.isEmpty__Z())) {
    $p_Lorg_scalajs_junit_Reporter__emit$1__jl_Throwable__T__s_Option__D__V(this, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Throwable($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(errors).head__O()), prefix, method, timeInSeconds);
    $p_Lorg_scalajs_junit_Reporter__emitEvent__s_Option__Lsbt_testing_Status__V(this, method, $m_Lsbt_testing_Status$().Lsbt_testing_Status$__f_Failure);
    var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(errors).tail__O()));
    var these = this$2;
    while ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).isEmpty__Z())) {
      var arg1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).head__O();
      var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Throwable(arg1);
      $p_Lorg_scalajs_junit_Reporter__emit$1__jl_Throwable__T__s_Option__D__V(this, t, prefix, method, timeInSeconds);
      these = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).tail__O())
    }
  }
});
$c_Lorg_scalajs_junit_Reporter.prototype.reportAssumptionViolation__s_Option__D__jl_Throwable__V = (function(method, timeInSeconds, e) {
  $p_Lorg_scalajs_junit_Reporter__logTestException__F1__T__s_Option__jl_Throwable__D__V(this, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((x$4$2) => {
    var x$4 = $as_Lsbt_testing_Logger(x$4$2);
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((msg$2) => {
      var msg = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(msg$2);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$4).warn__T__V(msg)
    }))
  })), "Test assumption in test ", method, e, timeInSeconds);
  $p_Lorg_scalajs_junit_Reporter__emitEvent__s_Option__Lsbt_testing_Status__V(this, method, $m_Lsbt_testing_Status$().Lsbt_testing_Status$__f_Skipped)
});
$c_Lorg_scalajs_junit_Reporter.prototype.log__F1__T__V = (function(level, s) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$();
  var xs = this.Lorg_scalajs_junit_Reporter__f_loggers;
  var f = ((l$2) => {
    var l = $as_Lsbt_testing_Logger(l$2);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_F1($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(level).apply__O__O(l))).apply__O__O($p_Lorg_scalajs_junit_Reporter__filterAnsiIfNeeded__Lsbt_testing_Logger__T__T(this, l, s))
  });
  var len = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).u.length;
  var i = 0;
  if ((xs !== null)) {
    while ((i < len)) {
      var arg1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).get(i);
      f(arg1);
      i = ((1 + i) | 0)
    }
  } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I)) {
    var x3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_I(xs, 1);
    while ((i < len)) {
      var arg1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).get(i);
      f(arg1$1);
      i = ((1 + i) | 0)
    }
  } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_D)) {
    var x4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_D(xs, 1);
    while ((i < len)) {
      var arg1$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4).get(i);
      f(arg1$2);
      i = ((1 + i) | 0)
    }
  } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_J)) {
    var x5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_J(xs, 1);
    while ((i < len)) {
      var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5).get(i);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      f(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi));
      i = ((1 + i) | 0)
    }
  } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_F)) {
    var x6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_F(xs, 1);
    while ((i < len)) {
      var arg1$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x6).get(i);
      f(arg1$3);
      i = ((1 + i) | 0)
    }
  } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C)) {
    var x7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_C(xs, 1);
    while ((i < len)) {
      var arg1$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x7).get(i);
      f($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(arg1$4));
      i = ((1 + i) | 0)
    }
  } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B)) {
    var x8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_B(xs, 1);
    while ((i < len)) {
      var arg1$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x8).get(i);
      f(arg1$5);
      i = ((1 + i) | 0)
    }
  } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_S)) {
    var x9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_S(xs, 1);
    while ((i < len)) {
      var arg1$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x9).get(i);
      f(arg1$6);
      i = ((1 + i) | 0)
    }
  } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z)) {
    var x10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_Z(xs, 1);
    while ((i < len)) {
      var arg1$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x10).get(i);
      f(arg1$7);
      i = ((1 + i) | 0)
    }
  } else {
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(xs)
  }
});
var $d_Lorg_scalajs_junit_Reporter = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_junit_Reporter: 0
}, false, "org.scalajs.junit.Reporter", {
  Lorg_scalajs_junit_Reporter: 1,
  O: 1
});
$c_Lorg_scalajs_junit_Reporter.prototype.$classData = $d_Lorg_scalajs_junit_Reporter;
/** @constructor */
function $c_Lorg_scalajs_junit_RunSettings(color, decodeScalaNames, verbose, logAssert, notLogExceptionClass) {
  this.Lorg_scalajs_junit_RunSettings__f_color = false;
  this.Lorg_scalajs_junit_RunSettings__f_decodeScalaNames = false;
  this.Lorg_scalajs_junit_RunSettings__f_verbose = false;
  this.Lorg_scalajs_junit_RunSettings__f_logAssert = false;
  this.Lorg_scalajs_junit_RunSettings__f_notLogExceptionClass = false;
  this.Lorg_scalajs_junit_RunSettings__f_color = color;
  this.Lorg_scalajs_junit_RunSettings__f_decodeScalaNames = decodeScalaNames;
  this.Lorg_scalajs_junit_RunSettings__f_verbose = verbose;
  this.Lorg_scalajs_junit_RunSettings__f_logAssert = logAssert;
  this.Lorg_scalajs_junit_RunSettings__f_notLogExceptionClass = notLogExceptionClass
}
$c_Lorg_scalajs_junit_RunSettings.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_junit_RunSettings.prototype.constructor = $c_Lorg_scalajs_junit_RunSettings;
/** @constructor */
function $h_Lorg_scalajs_junit_RunSettings() {
  /*<skip>*/
}
$h_Lorg_scalajs_junit_RunSettings.prototype = $c_Lorg_scalajs_junit_RunSettings.prototype;
$c_Lorg_scalajs_junit_RunSettings.prototype.decodeName__T__T = (function(name) {
  if (this.Lorg_scalajs_junit_RunSettings__f_decodeScalaNames) {
    try {
      var $$x1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success($m_s_reflect_NameTransformer$().decode__T__T(name))
    } catch (e) {
      var e$2 = ((e instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Throwable) ? e : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException(e));
      matchEnd8: {
        var $$x1;
        var o11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_util_control_NonFatal$().unapply__jl_Throwable__s_Option(e$2);
        if ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(o11).isEmpty__Z())) {
          var e$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Throwable($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(o11).get__O());
          var $$x1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure(e$3);
          break matchEnd8
        };
        throw ((e$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e$2))
      }
    };
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x1).getOrElse__F0__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0((() => name))))
  } else {
    return name
  }
});
var $d_Lorg_scalajs_junit_RunSettings = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_junit_RunSettings: 0
}, false, "org.scalajs.junit.RunSettings", {
  Lorg_scalajs_junit_RunSettings: 1,
  O: 1
});
$c_Lorg_scalajs_junit_RunSettings.prototype.$classData = $d_Lorg_scalajs_junit_RunSettings;
function $as_Lorg_scalajs_junit_TestMetadata(obj) {
  return ((false || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "org.scalajs.junit.TestMetadata"))
}
function $isArrayOf_Lorg_scalajs_junit_TestMetadata(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_scalajs_junit_TestMetadata)))
}
function $asArrayOf_Lorg_scalajs_junit_TestMetadata(obj, depth) {
  return (($isArrayOf_Lorg_scalajs_junit_TestMetadata(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lorg.scalajs.junit.TestMetadata;", depth))
}
function $s_Lorg_scalajs_testing_bridge_Bridge__start__V() {
  $m_Lorg_scalajs_testing_bridge_Bridge$().start__V()
}
function $p_Lorg_scalajs_testing_bridge_Bridge$__mode__Lorg_scalajs_testing_common_TestBridgeMode($thiz) {
  if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T((typeof __ScalaJSTestBridgeMode)) === "undefined")) {
    return $m_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$()
  } else {
    var modeStr = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(__ScalaJSTestBridgeMode);
    return $as_Lorg_scalajs_testing_common_TestBridgeMode($m_Lorg_scalajs_testing_common_Serializer$().deserialize__T__Lorg_scalajs_testing_common_Serializer__O(modeStr, $m_Lorg_scalajs_testing_common_TestBridgeMode$TestBridgeModeSerializer$()))
  }
}
/** @constructor */
function $c_Lorg_scalajs_testing_bridge_Bridge$() {
  /*<skip>*/
}
$c_Lorg_scalajs_testing_bridge_Bridge$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_bridge_Bridge$.prototype.constructor = $c_Lorg_scalajs_testing_bridge_Bridge$;
/** @constructor */
function $h_Lorg_scalajs_testing_bridge_Bridge$() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_bridge_Bridge$.prototype = $c_Lorg_scalajs_testing_bridge_Bridge$.prototype;
$c_Lorg_scalajs_testing_bridge_Bridge$.prototype.start__V = (function() {
  var x1 = $p_Lorg_scalajs_testing_bridge_Bridge$__mode__Lorg_scalajs_testing_common_TestBridgeMode(this);
  var x = $m_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$();
  if ((x === x1)) {
    $m_Lorg_scalajs_testing_bridge_TestAdapterBridge$().start__V()
  } else if ((x1 instanceof $c_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner)) {
    var x3 = $as_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner(x1);
    var tests = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner__f_tests;
    $m_Lorg_scalajs_testing_bridge_HTMLRunner$().start__Lorg_scalajs_testing_common_IsolatedTestSet__V(tests)
  } else {
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x1)
  }
});
var $d_Lorg_scalajs_testing_bridge_Bridge$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_bridge_Bridge$: 0
}, false, "org.scalajs.testing.bridge.Bridge$", {
  Lorg_scalajs_testing_bridge_Bridge$: 1,
  O: 1
});
$c_Lorg_scalajs_testing_bridge_Bridge$.prototype.$classData = $d_Lorg_scalajs_testing_bridge_Bridge$;
var $n_Lorg_scalajs_testing_bridge_Bridge$;
function $m_Lorg_scalajs_testing_bridge_Bridge$() {
  if ((!$n_Lorg_scalajs_testing_bridge_Bridge$)) {
    $n_Lorg_scalajs_testing_bridge_Bridge$ = new $c_Lorg_scalajs_testing_bridge_Bridge$()
  };
  return $n_Lorg_scalajs_testing_bridge_Bridge$
}
function $p_Lorg_scalajs_testing_bridge_FrameworkLoader$__frameworkExists$1__T__Z($thiz, name) {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_reflect_Reflect$().lookupInstantiatableClass__T__s_Option(name));
  if ((!this$1.isEmpty__Z())) {
    var arg1 = this$1.get__O();
    var clazz = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sjs_reflect_InstantiatableClass(arg1);
    return $d_Lsbt_testing_Framework.getClassOf().isAssignableFrom__jl_Class__Z($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(clazz).sjs_reflect_InstantiatableClass__f_runtimeClass)
  } else {
    return false
  }
}
function $p_Lorg_scalajs_testing_bridge_FrameworkLoader$__tryLoad$1__T__s_Option($thiz, name) {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_reflect_Reflect$().lookupInstantiatableClass__T__s_Option(name));
  var pf = new $c_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoad$1$1();
  if ((!this$1.isEmpty__Z())) {
    var this$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_PartialFunction$Lifted(pf);
    var v1 = this$1.get__O();
    return this$2.apply__O__s_Option(v1)
  } else {
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()
  }
}
/** @constructor */
function $c_Lorg_scalajs_testing_bridge_FrameworkLoader$() {
  /*<skip>*/
}
$c_Lorg_scalajs_testing_bridge_FrameworkLoader$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_bridge_FrameworkLoader$.prototype.constructor = $c_Lorg_scalajs_testing_bridge_FrameworkLoader$;
/** @constructor */
function $h_Lorg_scalajs_testing_bridge_FrameworkLoader$() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_bridge_FrameworkLoader$.prototype = $c_Lorg_scalajs_testing_bridge_FrameworkLoader$.prototype;
$c_Lorg_scalajs_testing_bridge_FrameworkLoader$.prototype.loadFramework__T__Lsbt_testing_Framework = (function(frameworkName) {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_reflect_Reflect$().lookupInstantiatableClass__T__s_Option(frameworkName));
  if (this$1.isEmpty__Z()) {
    throw new $c_jl_InstantiationError(frameworkName)
  };
  var clazz = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sjs_reflect_InstantiatableClass(this$1.get__O());
  return $as_Lsbt_testing_Framework($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(clazz).newInstance__O())
});
$c_Lorg_scalajs_testing_bridge_FrameworkLoader$.prototype.detectFrameworkNames__sci_List__sci_List = (function(names) {
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(names);
  var f = ((frameworkNames$2) => {
    var frameworkNames = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(frameworkNames$2);
    var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(frameworkNames);
    var these = this$2;
    while ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).isEmpty__Z())) {
      var arg1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).head__O();
      var x$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(arg1);
      if ($p_Lorg_scalajs_testing_bridge_FrameworkLoader$__frameworkExists$1__T__Z(this, x$1)) {
        return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).head__O())
      };
      these = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).tail__O())
    };
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()
  });
  if ((this$3 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$()
  } else {
    var arg1$1 = this$3.head__O();
    var h = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(arg1$1), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
    var t = h;
    var rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(this$3.tail__O());
    while ((rest !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
      var arg1$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).head__O();
      var nx = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(arg1$2), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).sci_$colon$colon__f_next = nx;
      t = nx;
      rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).tail__O())
    };
    return h
  }
});
$c_Lorg_scalajs_testing_bridge_FrameworkLoader$.prototype.tryLoadFramework__sci_List__s_Option = (function(names) {
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(names).iterator__sc_Iterator());
  var f = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((name$2) => {
    var name = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(name$2);
    return $p_Lorg_scalajs_testing_bridge_FrameworkLoader$__tryLoad$1__T__s_Option(this, name)
  }));
  var this$3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sc_Iterator$$anon$9(this$2, f);
  var pf = new $c_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoadFramework$2();
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__collectFirst__s_PartialFunction__s_Option(this$3, pf)
});
var $d_Lorg_scalajs_testing_bridge_FrameworkLoader$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_bridge_FrameworkLoader$: 0
}, false, "org.scalajs.testing.bridge.FrameworkLoader$", {
  Lorg_scalajs_testing_bridge_FrameworkLoader$: 1,
  O: 1
});
$c_Lorg_scalajs_testing_bridge_FrameworkLoader$.prototype.$classData = $d_Lorg_scalajs_testing_bridge_FrameworkLoader$;
var $n_Lorg_scalajs_testing_bridge_FrameworkLoader$;
function $m_Lorg_scalajs_testing_bridge_FrameworkLoader$() {
  if ((!$n_Lorg_scalajs_testing_bridge_FrameworkLoader$)) {
    $n_Lorg_scalajs_testing_bridge_FrameworkLoader$ = new $c_Lorg_scalajs_testing_bridge_FrameworkLoader$()
  };
  return $n_Lorg_scalajs_testing_bridge_FrameworkLoader$
}
function $p_Lorg_scalajs_testing_bridge_HTMLRunner$__onLoad__Lorg_scalajs_testing_common_IsolatedTestSet__V($thiz, tests) {
  var $$x1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringOps$();
  var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(document.location.search);
  var search = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x1).stripPrefix$extension__T__T__T(x, "?");
  var rc11 = false;
  var x2 = null;
  var $$x11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$();
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$();
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(search);
  var xs = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__split__T__I__AT(this$2, "&", 0);
  var f = ((encodedURIComponent$2) => {
    var encodedURIComponent = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(encodedURIComponent$2);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(decodeURIComponent(encodedURIComponent))
  });
  var len = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).u.length;
  var ys = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(len);
  if ((len > 0)) {
    var i = 0;
    if ((xs !== null)) {
      while ((i < len)) {
        var $$x2 = i;
        var arg1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).get(i);
        ys.set($$x2, f(arg1));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I)) {
      var x3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_I(xs, 1);
      while ((i < len)) {
        var $$x3 = i;
        var arg1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).get(i);
        ys.set($$x3, f(arg1$1));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_D)) {
      var x4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_D(xs, 1);
      while ((i < len)) {
        var $$x4 = i;
        var arg1$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4).get(i);
        ys.set($$x4, f(arg1$2));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_J)) {
      var x5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_J(xs, 1);
      while ((i < len)) {
        var $$x5 = i;
        var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5).get(i);
        var lo = t.RTLong__f_lo;
        var hi = t.RTLong__f_hi;
        ys.set($$x5, f(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi)));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_F)) {
      var x6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_F(xs, 1);
      while ((i < len)) {
        var $$x6 = i;
        var arg1$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x6).get(i);
        ys.set($$x6, f(arg1$3));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C)) {
      var x7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_C(xs, 1);
      while ((i < len)) {
        var $$x7 = i;
        var arg1$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x7).get(i);
        ys.set($$x7, f($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(arg1$4)));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B)) {
      var x8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_B(xs, 1);
      while ((i < len)) {
        var $$x8 = i;
        var arg1$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x8).get(i);
        ys.set($$x8, f(arg1$5));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_S)) {
      var x9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_S(xs, 1);
      while ((i < len)) {
        var $$x9 = i;
        var arg1$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x9).get(i);
        ys.set($$x9, f(arg1$6));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z)) {
      var x10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_Z(xs, 1);
      while ((i < len)) {
        var $$x10 = i;
        var arg1$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x10).get(i);
        ys.set($$x10, f(arg1$7));
        i = ((1 + i) | 0)
      }
    } else {
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(xs)
    }
  };
  var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x11).wrapRefArray__AO__scm_ArraySeq$ofRef(ys));
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_List$();
  var x1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(this$7);
  matchEnd12: {
    var x1$2___1;
    var x1$2___2;
    if ((x1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon)) {
      rc11 = true;
      x2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_$colon$colon(x1);
      var p3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).sci_$colon$colon__f_head);
      var p4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).sci_$colon$colon__f_next;
      if (((p3 === "i") && (p4 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon))) {
        var x5$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_$colon$colon(p4);
        var excludedHash = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5$1).sci_$colon$colon__f_head);
        var included = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5$1).sci_$colon$colon__f_next;
        var this$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(included);
        var includeSet = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().from__sc_IterableOnce__sci_Set(this$9);
        var _1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((t$2) => {
          var t$1 = $as_Lsbt_testing_TaskDef(t$2);
          return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(includeSet).contains__O__Z($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t$1).Lsbt_testing_TaskDef__f__fullyQualifiedName)
        }));
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringOps$();
        var this$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_jl_Integer$();
        var _2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(this$12.parseInt__T__I__I(excludedHash, 10));
        var x1$2___1 = _1;
        var x1$2___2 = _2;
        break matchEnd12
      }
    };
    if (rc11) {
      var p8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).sci_$colon$colon__f_head);
      var excluded = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).sci_$colon$colon__f_next;
      if ((p8 === "e")) {
        var this$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(excluded);
        var excludeSet = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().from__sc_IterableOnce__sci_Set(this$13);
        var _1$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((t$3$2) => {
          var t$3 = $as_Lsbt_testing_TaskDef(t$3$2);
          return (!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(excludeSet).contains__O__Z($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t$3).Lsbt_testing_TaskDef__f__fullyQualifiedName))
        }));
        var _2$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
        var x1$2___1 = _1$1;
        var x1$2___2 = _2$1;
        break matchEnd12
      }
    };
    var _1$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((x$1$2) => {
      $as_Lsbt_testing_TaskDef(x$1$2);
      return true
    }));
    var _2$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    var x1$2___1 = _1$2;
    var x1$2___2 = _2$2
  };
  var testFilter = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_F1(x1$2___1);
  var optExcludedHash = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Option(x1$2___2);
  var allTests = $m_Lorg_scalajs_testing_bridge_TestLoader$().loadTests__Lorg_scalajs_testing_common_IsolatedTestSet__sci_Seq(tests);
  var totalTestCount = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_IterableOnceOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(allTests).map__F1__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((x$3$2) => {
    var x$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$3$2);
    var this$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_SeqOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$3).T2__f__2));
    return this$14.length__I()
  }))))).sum__s_math_Numeric__O($m_s_math_Numeric$IntIsIntegral$()));
  var excludedTests = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Seq($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(allTests).flatMap__F1__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((x$4$2) => {
    var x$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$4$2);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Seq($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_IterableOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$4).T2__f__2)).filterNot__F1__O(testFilter))
  }))));
  var ui = new $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI(excludedTests, totalTestCount);
  var this$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(optExcludedHash);
  if ((!this$15.isEmpty__Z())) {
    var arg1$8 = this$15.get__O();
    var x$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(arg1$8);
    var $$x12 = (x$6 !== $p_Lorg_scalajs_testing_bridge_HTMLRunner$__excludedHash$1__sci_Seq__I($thiz, excludedTests))
  } else {
    var $$x12 = false
  };
  if ($$x12) {
    ui.warnTestSetChanged__V()
  };
  var oks = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Seq($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(allTests).withFilter__F1__sc_WithFilter(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((check$ifrefutable$1$2) => {
    var check$ifrefutable$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(check$ifrefutable$1$2);
    return (check$ifrefutable$1 !== null)
  })))).map__F1__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((x$7$2) => {
    var x$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$7$2);
    if ((x$7 !== null)) {
      var framework = $as_Lsbt_testing_Framework($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$7).T2__f__1);
      var taskDefs = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Seq($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$7).T2__f__2);
      return $p_Lorg_scalajs_testing_bridge_HTMLRunner$__runTests__Lsbt_testing_Framework__sci_Seq__Lorg_scalajs_testing_bridge_HTMLRunner$UI__s_concurrent_Future($m_Lorg_scalajs_testing_bridge_HTMLRunner$(), framework, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Seq($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(taskDefs).filter__F1__O(testFilter)), ui)
    } else {
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$7)
    }
  }))));
  var $$x13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_Future$();
  var this$16 = $m_sc_BuildFrom$();
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x13).sequence__sc_IterableOnce__sc_BuildFrom__s_concurrent_ExecutionContext__s_concurrent_Future(oks, new $c_sc_BuildFromLowPriority2$$anon$11(this$16), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue)).map__F1__s_concurrent_ExecutionContext__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((xs$2) => {
    var xs$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_Seq(xs$2);
    return $p_Lorg_scalajs_testing_bridge_HTMLRunner$__and__sc_Seq__Z($m_Lorg_scalajs_testing_bridge_HTMLRunner$(), xs$1)
  })), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue)).onComplete__F1__s_concurrent_ExecutionContext__V(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((ok$2) => {
    var ok = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_util_Try(ok$2);
    ui.done__s_util_Try__V(ok)
  })), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue)
}
function $p_Lorg_scalajs_testing_bridge_HTMLRunner$__runTests__Lsbt_testing_Framework__sci_Seq__Lorg_scalajs_testing_bridge_HTMLRunner$UI__s_concurrent_Future($thiz, framework, taskDefs, ui) {
  var $$x1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(framework);
  var xs = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
  var len = xs.length__I();
  var array = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(len);
  var iterator = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty;
  var i = 0;
  while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(iterator).hasNext__Z()) {
    array.set(i, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(iterator).next__O());
    i = ((1 + i) | 0)
  };
  var xs$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
  var len$1 = xs$1.length__I();
  var array$1 = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(len$1);
  var iterator$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty;
  var i$1 = 0;
  while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(iterator$1).hasNext__Z()) {
    array$1.set(i$1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(iterator$1).next__O());
    i$1 = ((1 + i$1) | 0)
  };
  var runner = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x1).runner__AT__AT__jl_ClassLoader__Lsbt_testing_Runner(array, array$1, $thiz.Lorg_scalajs_testing_bridge_HTMLRunner$__f_classLoader);
  var $$x3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(runner);
  var this$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(taskDefs);
  if ((this$6.knownSize__I() >= 0)) {
    var len$2 = this$6.knownSize__I();
    var destination = new ($d_Lsbt_testing_TaskDef.getArrayOf().constr)(len$2);
    this$6.copyToArray__O__I__I__I(destination, 0, 2147483647);
    var $$x2 = destination
  } else {
    var capacity = 0;
    var jsElems = null;
    capacity = 0;
    jsElems = [];
    var it = this$6.iterator__sc_Iterator();
    while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).hasNext__Z()) {
      var elem = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).next__O();
      var unboxedElem = ((elem === null) ? null : elem);
      jsElems.push(unboxedElem)
    };
    var $$x2 = new ($d_Lsbt_testing_TaskDef.getArrayOf().constr)(jsElems)
  };
  var tasks = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x3).tasks__ALsbt_testing_TaskDef__ALsbt_testing_Task($$x2);
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($p_Lorg_scalajs_testing_bridge_HTMLRunner$__runAllTasks$1__sc_Seq__Lorg_scalajs_testing_bridge_HTMLRunner$UI__s_concurrent_Future($thiz, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$().wrapRefArray__AO__scm_ArraySeq$ofRef(tasks), ui)).map__F1__s_concurrent_ExecutionContext__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((ok$2) => {
    var ok = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(ok$2);
    var resultStr = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(runner).done__T();
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringOps$();
    var this$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(resultStr);
    if ((!(this$12 === ""))) {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ui).reportFrameworkResult__Z__T__T__V(ok, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(framework).name__T(), resultStr)
    };
    return ok
  })), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue)
}
function $p_Lorg_scalajs_testing_bridge_HTMLRunner$__scheduleTask__Lsbt_testing_Task__Lorg_scalajs_testing_bridge_HTMLRunner$UI__s_concurrent_Future($thiz, task, ui) {
  var uiBox = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ui).newTestTask__T__Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestTask($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(task).taskDef__Lsbt_testing_TaskDef()).Lsbt_testing_TaskDef__f__fullyQualifiedName);
  var handler = new $c_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$Handler();
  var newTasks = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_s_concurrent_impl_Promise$DefaultPromise__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_concurrent_impl_Promise$DefaultPromise());
  var invocation = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_Future$().apply__F0__s_concurrent_ExecutionContext__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0((() => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(task).execute__Lsbt_testing_EventHandler__ALsbt_testing_Logger__F1__V(handler, new ($d_Lsbt_testing_Logger.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(uiBox).Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_logger]), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((value$2) => {
      var value = $asArrayOf_Lsbt_testing_Task(value$2, 1);
      $f_s_concurrent_Promise__success__O__s_concurrent_Promise(newTasks, value)
    })))
  })), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext());
  var result = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(invocation).flatMap__F1__s_concurrent_ExecutionContext__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((x$9$2) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Void(x$9$2);
    return newTasks.map__F1__s_concurrent_ExecutionContext__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((tasks$2) => {
      var tasks = $asArrayOf_Lsbt_testing_Task(tasks$2, 1);
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2((!handler.Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$Handler__f__hasErrors), tasks)
    })), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue)
  })), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(result).map__F1__s_concurrent_ExecutionContext__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((x$10$2) => {
    var x$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$10$2);
    var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$10);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(this$4.T2__f__1)
  })), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue)).onComplete__F1__s_concurrent_ExecutionContext__V(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((ok$2) => {
    var ok = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_util_Try(ok$2);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(uiBox).done__s_util_Try__V(ok)
  })), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue);
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(result).recover__s_PartialFunction__s_concurrent_ExecutionContext__s_concurrent_Future(new $c_Lorg_scalajs_testing_bridge_HTMLRunner$$anonfun$scheduleTask$7(), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue)
}
function $p_Lorg_scalajs_testing_bridge_HTMLRunner$__and__sc_Seq__Z($thiz, xs) {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).forall__F1__Z(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((x$2) => {
    var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(x$2);
    return x
  })))
}
function $p_Lorg_scalajs_testing_bridge_HTMLRunner$__excludedHash$1__sci_Seq__I($thiz, excludedTests$1) {
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_IterableOnceOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(excludedTests$1).map__F1__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((x$5$2) => {
    var x$5 = $as_Lsbt_testing_TaskDef(x$5$2);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$5).Lsbt_testing_TaskDef__f__fullyQualifiedName
  })))));
  var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().from__sc_IterableOnce__sci_Set($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_IterableOnce(this$2));
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().anyHash__O__I(x)
}
function $p_Lorg_scalajs_testing_bridge_HTMLRunner$__runAllTasks$1__sc_Seq__Lorg_scalajs_testing_bridge_HTMLRunner$UI__s_concurrent_Future($thiz, tasks, ui$2) {
  var oks = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_Seq($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(tasks).map__F1__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((task$2) => {
    var task = $as_Lsbt_testing_Task(task$2);
    var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($p_Lorg_scalajs_testing_bridge_HTMLRunner$__scheduleTask__Lsbt_testing_Task__Lorg_scalajs_testing_bridge_HTMLRunner$UI__s_concurrent_Future($m_Lorg_scalajs_testing_bridge_HTMLRunner$(), task, ui$2));
    var p = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((check$ifrefutable$2$2) => {
      var check$ifrefutable$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(check$ifrefutable$2$2);
      return (check$ifrefutable$2 !== null)
    }));
    var executor = $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue;
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$2.filter__F1__s_concurrent_ExecutionContext__s_concurrent_Future(p, executor)).flatMap__F1__s_concurrent_ExecutionContext__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((x$8$2) => {
      var x$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$8$2);
      if ((x$8 !== null)) {
        var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$8);
        var ok = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(this$3.T2__f__1);
        var newTasks = $asArrayOf_Lsbt_testing_Task($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$8).T2__f__2, 1);
        return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($p_Lorg_scalajs_testing_bridge_HTMLRunner$__runAllTasks$1__sc_Seq__Lorg_scalajs_testing_bridge_HTMLRunner$UI__s_concurrent_Future($thiz, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$().wrapRefArray__AO__scm_ArraySeq$ofRef(newTasks), ui$2)).map__F1__s_concurrent_ExecutionContext__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((newOk$2) => {
          var newOk = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(newOk$2);
          return (ok && newOk)
        })), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue)
      } else {
        throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$8)
      }
    })), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue)
  }))));
  var $$x1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_Future$();
  var this$4 = $m_sc_BuildFrom$();
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x1).sequence__sc_IterableOnce__sc_BuildFrom__s_concurrent_ExecutionContext__s_concurrent_Future(oks, new $c_sc_BuildFromLowPriority2$$anon$11(this$4), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue)).map__F1__s_concurrent_ExecutionContext__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((xs$2) => {
    var xs = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_Seq(xs$2);
    return $p_Lorg_scalajs_testing_bridge_HTMLRunner$__and__sc_Seq__Z($m_Lorg_scalajs_testing_bridge_HTMLRunner$(), xs)
  })), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue)
}
/** @constructor */
function $c_Lorg_scalajs_testing_bridge_HTMLRunner$() {
  this.Lorg_scalajs_testing_bridge_HTMLRunner$__f_classLoader = null;
  $n_Lorg_scalajs_testing_bridge_HTMLRunner$ = this;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$__f_classLoader = new $c_Lorg_scalajs_testing_bridge_ScalaJSClassLoader()
}
$c_Lorg_scalajs_testing_bridge_HTMLRunner$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_bridge_HTMLRunner$.prototype.constructor = $c_Lorg_scalajs_testing_bridge_HTMLRunner$;
/** @constructor */
function $h_Lorg_scalajs_testing_bridge_HTMLRunner$() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_bridge_HTMLRunner$.prototype = $c_Lorg_scalajs_testing_bridge_HTMLRunner$.prototype;
$c_Lorg_scalajs_testing_bridge_HTMLRunner$.prototype.start__Lorg_scalajs_testing_common_IsolatedTestSet__V = (function(tests) {
  window.addEventListener("DOMContentLoaded", (() => {
    $m_Lorg_scalajs_testing_bridge_HTMLRunner$();
    $p_Lorg_scalajs_testing_bridge_HTMLRunner$__onLoad__Lorg_scalajs_testing_common_IsolatedTestSet__V($m_Lorg_scalajs_testing_bridge_HTMLRunner$(), tests)
  }))
});
var $d_Lorg_scalajs_testing_bridge_HTMLRunner$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_bridge_HTMLRunner$: 0
}, false, "org.scalajs.testing.bridge.HTMLRunner$", {
  Lorg_scalajs_testing_bridge_HTMLRunner$: 1,
  O: 1
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$.prototype.$classData = $d_Lorg_scalajs_testing_bridge_HTMLRunner$;
var $n_Lorg_scalajs_testing_bridge_HTMLRunner$;
function $m_Lorg_scalajs_testing_bridge_HTMLRunner$() {
  if ((!$n_Lorg_scalajs_testing_bridge_HTMLRunner$)) {
    $n_Lorg_scalajs_testing_bridge_HTMLRunner$ = new $c_Lorg_scalajs_testing_bridge_HTMLRunner$()
  };
  return $n_Lorg_scalajs_testing_bridge_HTMLRunner$
}
/** @constructor */
function $c_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$() {
  this.Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$__f_org$scalajs$testing$bridge$HTMLRunner$EventCounter$$isErrorStatus = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$__f_counts = null;
  $n_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$ = this;
  var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$().s_Predef$__f_Set);
  var array = [$m_Lsbt_testing_Status$().Lsbt_testing_Status$__f_Error, $m_Lsbt_testing_Status$().Lsbt_testing_Status$__f_Failure];
  var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_WrappedVarArgs(), array);
  this.Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$__f_org$scalajs$testing$bridge$HTMLRunner$EventCounter$$isErrorStatus = this$4.from__sc_IterableOnce__sci_Set(elems);
  var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_scm_Map($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_scm_Map$().empty__O()));
  this.Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$__f_counts = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_scm_Map__withDefaultValue__O__scm_Map(this$5, 0)
}
$c_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$.prototype.constructor = $c_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$;
/** @constructor */
function $h_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$.prototype = $c_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$.prototype;
var $d_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$: 0
}, false, "org.scalajs.testing.bridge.HTMLRunner$EventCounter$", {
  Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$: 1,
  O: 1
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$.prototype.$classData = $d_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$;
var $n_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$;
function $m_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$() {
  if ((!$n_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$)) {
    $n_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$ = new $c_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$()
  };
  return $n_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$
}
/** @constructor */
function $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI(excludedTaskDefs, totalTestCount) {
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$excludedTaskDefs = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f__done = false;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$runningTests = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$excludedTests = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$container = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$rootBox = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$nextFailureLocation = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$excludedTaskDefs = excludedTaskDefs;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f__done = false;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$runningTests = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_scm_Buffer($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_scm_Buffer$().empty__sc_SeqOps());
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$excludedTests = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_scm_Buffer($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_scm_Buffer$().empty__sc_SeqOps());
  var element = document.body;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$container = $m_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$().newElement$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__T__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element(element, "", "", "div");
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(excludedTaskDefs);
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$rootBox = new $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox(this, this$2.length__I(), totalTestCount);
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(excludedTaskDefs);
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$nextFailureLocation = ((!this$3.isEmpty__Z()) ? new $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox(this) : this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$rootBox);
  this.org$scalajs$testing$bridge$HTMLRunner$UI$$updateCounts__V()
}
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI.prototype.constructor = $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI;
/** @constructor */
function $h_Lorg_scalajs_testing_bridge_HTMLRunner$UI() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_bridge_HTMLRunner$UI.prototype = $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI.prototype;
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI.prototype.newTestTask__T__Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestTask = (function(testName) {
  var task = new $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest(this, testName);
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$runningTests);
  this$1.addOne__O__scm_Growable(task);
  return task
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI.prototype.done__s_util_Try__V = (function(ok) {
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f__done = true;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ok).failed__s_util_Try()).foreach__F1__V(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((t$2) => {
    var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Throwable(t$2);
    var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$rootBox);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$2.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_box).log__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element("Test framework crashed during execution:", "error");
    var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$rootBox);
    var msg = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).toString__T();
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$3.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_box).log__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element(msg, "error")
  })));
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$rootBox).done__Z__V($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ok).getOrElse__F0__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0((() => false)))));
  this.org$scalajs$testing$bridge$HTMLRunner$UI$$updateCounts__V()
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI.prototype.warnTestSetChanged__V = (function() {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$rootBox);
  var line = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$1.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_box).log__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element("", "warn");
  $m_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$().newTextNode$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Node(line, "There are new excluded tests in your project. You may wish to ");
  $m_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$().newLink$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element(line, "?", "Run all");
  $m_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$().newTextNode$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Node(line, " to rediscover all available tests.")
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI.prototype.reportFrameworkResult__Z__T__T__V = (function(ok, framework, result) {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$rootBox);
  var msg = ((framework + " reported ") + result);
  var clss = this.org$scalajs$testing$bridge$HTMLRunner$UI$$statusClass__Z__T(ok);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$1.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_box).log__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element(msg, clss)
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI.prototype.org$scalajs$testing$bridge$HTMLRunner$UI$$updateCounts__V = (function() {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($m_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$().Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$__f_counts);
  var this$2 = new $c_sc_MapOps$$anon$1(this$1);
  var num = $m_s_math_Numeric$IntIsIntegral$();
  var total = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__sum__s_math_Numeric__O(this$2, num));
  var rassoc$1 = ("Total: " + total);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$();
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$();
  var xs = $m_Lsbt_testing_Status$().values__ALsbt_testing_Status();
  var f = ((status$2) => {
    var status = $as_Lsbt_testing_Status(status$2);
    return ((status + ": ") + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($m_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$().Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$__f_counts).apply__O__O(status))
  });
  var len = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).u.length;
  var ys = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(len);
  if ((len > 0)) {
    var i = 0;
    if ((xs !== null)) {
      while ((i < len)) {
        var $$x1 = i;
        var arg1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).get(i);
        ys.set($$x1, f(arg1));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I)) {
      var x3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_I(xs, 1);
      while ((i < len)) {
        var $$x2 = i;
        var arg1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).get(i);
        ys.set($$x2, f(arg1$1));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_D)) {
      var x4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_D(xs, 1);
      while ((i < len)) {
        var $$x3 = i;
        var arg1$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4).get(i);
        ys.set($$x3, f(arg1$2));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_J)) {
      var x5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_J(xs, 1);
      while ((i < len)) {
        var $$x4 = i;
        var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5).get(i);
        var lo = t.RTLong__f_lo;
        var hi = t.RTLong__f_hi;
        ys.set($$x4, f(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi)));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_F)) {
      var x6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_F(xs, 1);
      while ((i < len)) {
        var $$x5 = i;
        var arg1$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x6).get(i);
        ys.set($$x5, f(arg1$3));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C)) {
      var x7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_C(xs, 1);
      while ((i < len)) {
        var $$x6 = i;
        var arg1$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x7).get(i);
        ys.set($$x6, f($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(arg1$4)));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B)) {
      var x8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_B(xs, 1);
      while ((i < len)) {
        var $$x7 = i;
        var arg1$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x8).get(i);
        ys.set($$x7, f(arg1$5));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_S)) {
      var x9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_S(xs, 1);
      while ((i < len)) {
        var $$x8 = i;
        var arg1$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x9).get(i);
        ys.set($$x8, f(arg1$6));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z)) {
      var x10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_Z(xs, 1);
      while ((i < len)) {
        var $$x9 = i;
        var arg1$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x10).get(i);
        ys.set($$x9, f(arg1$7));
        i = ((1 + i) | 0)
      }
    } else {
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(xs)
    }
  };
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$();
  var len$1 = ((1 + ys.u.length) | 0);
  var dest = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(len$1);
  dest.set(0, rassoc$1);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Array$().copy__O__I__O__I__I__V(ys, 0, dest, 1, ys.u.length);
  var this$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$().wrapRefArray__AO__scm_ArraySeq$ofRef(dest));
  var countStr = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__mkString__T__T__T__T(this$11, "", ", ", "");
  if (this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f__done) {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$rootBox).counterLineText_$eq__T__V(countStr)
  } else {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$rootBox).counterLineText_$eq__T__V(("Running... " + countStr))
  }
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI.prototype.org$scalajs$testing$bridge$HTMLRunner$UI$$statusClass__Z__T = (function(ok) {
  return (ok ? "success" : "error")
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI.prototype.org$scalajs$testing$bridge$HTMLRunner$UI$$checkboxUpdater__sc_Seq__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Checkbox__sjs_js_Function0 = (function(tests, checkbox) {
  return (() => this.org$scalajs$testing$bridge$HTMLRunner$UI$$$anonfun$checkboxUpdater$1__sc_Seq__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Checkbox__Z(tests, checkbox))
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI.prototype.org$scalajs$testing$bridge$HTMLRunner$UI$$testUpdater__sc_Seq__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Checkbox__sjs_js_Function0 = (function(tests, checkbox) {
  return (() => this.org$scalajs$testing$bridge$HTMLRunner$UI$$$anonfun$testUpdater$1__sc_Seq__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Checkbox__Z(tests, checkbox))
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI.prototype.org$scalajs$testing$bridge$HTMLRunner$UI$$$anonfun$checkboxUpdater$1__sc_Seq__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Checkbox__Z = (function(tests$2, checkbox$1) {
  var all = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(tests$2).forall__F1__Z(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((x$17$2) => {
    var x$17 = $as_Lorg_scalajs_testing_bridge_HTMLRunner$UI$Test(x$17$2);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$17).selected__Z()
  })));
  var indet = ((!all) && $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(tests$2).exists__F1__Z(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((x$18$2) => {
    var x$18 = $as_Lorg_scalajs_testing_bridge_HTMLRunner$UI$Test(x$18$2);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$18).selected__Z()
  }))));
  checkbox$1.indeterminate = indet;
  if ((!indet)) {
    checkbox$1.checked = all
  };
  return true
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI.prototype.org$scalajs$testing$bridge$HTMLRunner$UI$$$anonfun$testUpdater$1__sc_Seq__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Checkbox__Z = (function(tests$3, checkbox$2) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(tests$3).foreach__F1__V(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((x$19$2) => {
    var x$19 = $as_Lorg_scalajs_testing_bridge_HTMLRunner$UI$Test(x$19$2);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$19).selected_$eq__Z__V($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(checkbox$2.checked))
  })));
  return true
});
var $d_Lorg_scalajs_testing_bridge_HTMLRunner$UI = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_bridge_HTMLRunner$UI: 0
}, false, "org.scalajs.testing.bridge.HTMLRunner$UI", {
  Lorg_scalajs_testing_bridge_HTMLRunner$UI: 1,
  O: 1
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI.prototype.$classData = $d_Lorg_scalajs_testing_bridge_HTMLRunner$UI;
function $is_Lorg_scalajs_testing_bridge_HTMLRunner$UI$Test(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lorg_scalajs_testing_bridge_HTMLRunner$UI$Test)))
}
function $as_Lorg_scalajs_testing_bridge_HTMLRunner$UI$Test(obj) {
  return (($is_Lorg_scalajs_testing_bridge_HTMLRunner$UI$Test(obj) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "org.scalajs.testing.bridge.HTMLRunner$UI$Test"))
}
function $isArrayOf_Lorg_scalajs_testing_bridge_HTMLRunner$UI$Test(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_scalajs_testing_bridge_HTMLRunner$UI$Test)))
}
function $asArrayOf_Lorg_scalajs_testing_bridge_HTMLRunner$UI$Test(obj, depth) {
  return (($isArrayOf_Lorg_scalajs_testing_bridge_HTMLRunner$UI$Test(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lorg.scalajs.testing.bridge.HTMLRunner$UI$Test;", depth))
}
/** @constructor */
function $c_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$() {
  /*<skip>*/
}
$c_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$.prototype.constructor = $c_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$;
/** @constructor */
function $h_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$.prototype = $c_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$.prototype;
$c_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$.prototype.newElement$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__T__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element = (function(this$, clss, text, tpe) {
  var el = document.createElement(tpe);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringOps$();
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(clss);
  if ((!(this$3 === ""))) {
    el.className = clss
  };
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringOps$();
  var this$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(text);
  if ((!(this$6 === ""))) {
    el.textContent = text
  };
  this$.appendChild(el);
  return el
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$.prototype.newLink$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element = (function(this$, href, text) {
  var el = $m_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$().newElement$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__T__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element(this$, "", text, "a");
  el.setAttribute("href", href);
  return el
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$.prototype.newCheckbox$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__Z__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Checkbox = (function(this$, checked) {
  var el = $m_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$().newElement$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__T__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element(this$, "", "", "input");
  el.setAttribute("type", "checkbox");
  el.checked = checked;
  return el
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$.prototype.newTextNode$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Node = (function(this$, text) {
  var n = document.createTextNode(text);
  this$.appendChild(n);
  return n
});
var $d_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$: 0
}, false, "org.scalajs.testing.bridge.HTMLRunner$dom$RichElement$", {
  Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$: 1,
  O: 1
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$.prototype.$classData = $d_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$;
var $n_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$;
function $m_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$() {
  if ((!$n_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$)) {
    $n_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$ = new $c_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$()
  };
  return $n_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$
}
function $p_Lorg_scalajs_testing_bridge_TaskInfoBuilder$__optSerializer$1__Lsbt_testing_TaskDef__Lsbt_testing_Task__T($thiz, t, task$1) {
  var x$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(task$1).taskDef__Lsbt_testing_TaskDef();
  if (((t === null) ? (x$2 === null) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).equals__O__Z(x$2))) {
    return ""
  } else {
    return $m_Lorg_scalajs_testing_common_Serializer$().serialize__O__Lorg_scalajs_testing_common_Serializer__T(t, $m_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$())
  }
}
function $p_Lorg_scalajs_testing_bridge_TaskInfoBuilder$__optDeserializer$1__T__Lorg_scalajs_testing_common_TaskInfo__Lsbt_testing_TaskDef($thiz, s, info$1) {
  return ((s === "") ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(info$1).Lorg_scalajs_testing_common_TaskInfo__f_taskDef : $as_Lsbt_testing_TaskDef($m_Lorg_scalajs_testing_common_Serializer$().deserialize__T__Lorg_scalajs_testing_common_Serializer__O(s, $m_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$())))
}
/** @constructor */
function $c_Lorg_scalajs_testing_bridge_TaskInfoBuilder$() {
  /*<skip>*/
}
$c_Lorg_scalajs_testing_bridge_TaskInfoBuilder$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_bridge_TaskInfoBuilder$.prototype.constructor = $c_Lorg_scalajs_testing_bridge_TaskInfoBuilder$;
/** @constructor */
function $h_Lorg_scalajs_testing_bridge_TaskInfoBuilder$() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_bridge_TaskInfoBuilder$.prototype = $c_Lorg_scalajs_testing_bridge_TaskInfoBuilder$.prototype;
$c_Lorg_scalajs_testing_bridge_TaskInfoBuilder$.prototype.detachTask__Lsbt_testing_Task__Lsbt_testing_Runner__Lorg_scalajs_testing_common_TaskInfo = (function(task, runner) {
  var $$x2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(runner).serializeTask__Lsbt_testing_Task__F1__T(task, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((t$2) => {
    var t = $as_Lsbt_testing_TaskDef(t$2);
    return $p_Lorg_scalajs_testing_bridge_TaskInfoBuilder$__optSerializer$1__Lsbt_testing_TaskDef__Lsbt_testing_Task__T(this, t, task)
  })));
  var $$x1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(task).taskDef__Lsbt_testing_TaskDef();
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$().wrapRefArray__AO__scm_ArraySeq$ofRef($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(task).tags__AT()));
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_List$();
  return new $c_Lorg_scalajs_testing_common_TaskInfo($$x2, $$x1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(this$2))
});
$c_Lorg_scalajs_testing_bridge_TaskInfoBuilder$.prototype.attachTask__Lorg_scalajs_testing_common_TaskInfo__Lsbt_testing_Runner__Lsbt_testing_Task = (function(info, runner) {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(runner).deserializeTask__T__F1__Lsbt_testing_Task($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(info).Lorg_scalajs_testing_common_TaskInfo__f_serializedTask, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((s$2) => {
    var s = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(s$2);
    return $p_Lorg_scalajs_testing_bridge_TaskInfoBuilder$__optDeserializer$1__T__Lorg_scalajs_testing_common_TaskInfo__Lsbt_testing_TaskDef(this, s, info)
  })))
});
var $d_Lorg_scalajs_testing_bridge_TaskInfoBuilder$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_bridge_TaskInfoBuilder$: 0
}, false, "org.scalajs.testing.bridge.TaskInfoBuilder$", {
  Lorg_scalajs_testing_bridge_TaskInfoBuilder$: 1,
  O: 1
});
$c_Lorg_scalajs_testing_bridge_TaskInfoBuilder$.prototype.$classData = $d_Lorg_scalajs_testing_bridge_TaskInfoBuilder$;
var $n_Lorg_scalajs_testing_bridge_TaskInfoBuilder$;
function $m_Lorg_scalajs_testing_bridge_TaskInfoBuilder$() {
  if ((!$n_Lorg_scalajs_testing_bridge_TaskInfoBuilder$)) {
    $n_Lorg_scalajs_testing_bridge_TaskInfoBuilder$ = new $c_Lorg_scalajs_testing_bridge_TaskInfoBuilder$()
  };
  return $n_Lorg_scalajs_testing_bridge_TaskInfoBuilder$
}
function $p_Lorg_scalajs_testing_bridge_TestAdapterBridge$__detectFrameworksFun__F1($thiz) {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((names$2) => {
    var names = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(names$2);
    var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($m_Lorg_scalajs_testing_bridge_FrameworkLoader$().detectFrameworkNames__sci_List__sci_List(names));
    var f = ((maybeName$2) => {
      var maybeName = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Option(maybeName$2);
      var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(maybeName);
      if (this$2.isEmpty__Z()) {
        return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()
      } else {
        var arg1 = this$2.get__O();
        var name = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(arg1);
        var framework = $m_Lorg_scalajs_testing_bridge_FrameworkLoader$().loadFramework__T__Lsbt_testing_Framework(name);
        var $$x1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(framework).name__T();
        var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$().wrapRefArray__AO__scm_ArraySeq$ofRef($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(framework).fingerprints__ALsbt_testing_Fingerprint()));
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_List$();
        return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(new $c_Lorg_scalajs_testing_common_FrameworkInfo(name, $$x1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(this$3)))
      }
    });
    if ((this$5 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$()
    } else {
      var arg1$1 = this$5.head__O();
      var h = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(arg1$1), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
      var t = h;
      var rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(this$5.tail__O());
      while ((rest !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
        var arg1$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).head__O();
        var nx = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(arg1$2), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).sci_$colon$colon__f_next = nx;
        t = nx;
        rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).tail__O())
      };
      return h
    }
  }))
}
function $p_Lorg_scalajs_testing_bridge_TestAdapterBridge$__createRunnerFun__Z__F1($thiz, isController) {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((args$2) => {
    var args = $as_Lorg_scalajs_testing_common_RunnerArgs(args$2);
    var framework = $m_Lorg_scalajs_testing_bridge_FrameworkLoader$().loadFramework__T__Lsbt_testing_Framework($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(args).Lorg_scalajs_testing_common_RunnerArgs__f_frameworkImpl);
    var loader = new $c_Lorg_scalajs_testing_bridge_ScalaJSClassLoader();
    var runID = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(args).Lorg_scalajs_testing_common_RunnerArgs__f_runID;
    if (isController) {
      var $$x3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(framework);
      var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(args).Lorg_scalajs_testing_common_RunnerArgs__f_args);
      if ((this$3.knownSize__I() >= 0)) {
        var len = this$3.knownSize__I();
        var destination = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(len);
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__copyToArray__O__I__I__I(this$3, destination, 0, 2147483647);
        var $$x2 = destination
      } else {
        var capacity = 0;
        var jsElems = null;
        capacity = 0;
        jsElems = [];
        var it = this$3.iterator__sc_Iterator();
        while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).hasNext__Z()) {
          var elem = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).next__O();
          var unboxedElem = ((elem === null) ? null : elem);
          jsElems.push(unboxedElem)
        };
        var $$x2 = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(jsElems)
      };
      var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(args).Lorg_scalajs_testing_common_RunnerArgs__f_remoteArgs);
      if ((this$7.knownSize__I() >= 0)) {
        var len$1 = this$7.knownSize__I();
        var destination$1 = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(len$1);
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__copyToArray__O__I__I__I(this$7, destination$1, 0, 2147483647);
        var $$x1 = destination$1
      } else {
        var capacity$1 = 0;
        var jsElems$1 = null;
        capacity$1 = 0;
        jsElems$1 = [];
        var it$1 = this$7.iterator__sc_Iterator();
        while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$1).hasNext__Z()) {
          var elem$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$1).next__O();
          var unboxedElem$1 = ((elem$1 === null) ? null : elem$1);
          jsElems$1.push(unboxedElem$1)
        };
        var $$x1 = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(jsElems$1)
      };
      var runner = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x3).runner__AT__AT__jl_ClassLoader__Lsbt_testing_Runner($$x2, $$x1, loader)
    } else {
      var $$x6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(framework);
      var this$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(args).Lorg_scalajs_testing_common_RunnerArgs__f_args);
      if ((this$11.knownSize__I() >= 0)) {
        var len$2 = this$11.knownSize__I();
        var destination$2 = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(len$2);
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__copyToArray__O__I__I__I(this$11, destination$2, 0, 2147483647);
        var $$x5 = destination$2
      } else {
        var capacity$2 = 0;
        var jsElems$2 = null;
        capacity$2 = 0;
        jsElems$2 = [];
        var it$2 = this$11.iterator__sc_Iterator();
        while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$2).hasNext__Z()) {
          var elem$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$2).next__O();
          var unboxedElem$2 = ((elem$2 === null) ? null : elem$2);
          jsElems$2.push(unboxedElem$2)
        };
        var $$x5 = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(jsElems$2)
      };
      var this$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(args).Lorg_scalajs_testing_common_RunnerArgs__f_remoteArgs);
      if ((this$15.knownSize__I() >= 0)) {
        var len$3 = this$15.knownSize__I();
        var destination$3 = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(len$3);
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__copyToArray__O__I__I__I(this$15, destination$3, 0, 2147483647);
        var $$x4 = destination$3
      } else {
        var capacity$3 = 0;
        var jsElems$3 = null;
        capacity$3 = 0;
        jsElems$3 = [];
        var it$3 = this$15.iterator__sc_Iterator();
        while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$3).hasNext__Z()) {
          var elem$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$3).next__O();
          var unboxedElem$3 = ((elem$3 === null) ? null : elem$3);
          jsElems$3.push(unboxedElem$3)
        };
        var $$x4 = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(jsElems$3)
      };
      var runner = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x6).slaveRunner__AT__AT__jl_ClassLoader__F1__Lsbt_testing_Runner($$x5, $$x4, loader, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((msg$2) => {
        var msg = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(msg$2);
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($m_Lorg_scalajs_testing_bridge_TestAdapterBridge$().Lorg_scalajs_testing_bridge_TestAdapterBridge$__f_org$scalajs$testing$bridge$TestAdapterBridge$$mux).send__Lorg_scalajs_testing_common_MsgEndpoint__I__O__V($m_Lorg_scalajs_testing_common_JVMEndpoints$().Lorg_scalajs_testing_common_JVMEndpoints$__f_msgWorker, runID, msg)
      })))
    };
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($m_Lorg_scalajs_testing_bridge_TestAdapterBridge$().Lorg_scalajs_testing_bridge_TestAdapterBridge$__f_org$scalajs$testing$bridge$TestAdapterBridge$$mux).attach__Lorg_scalajs_testing_common_RPCEndpoint__I__F1__V($m_Lorg_scalajs_testing_common_JSEndpoints$().Lorg_scalajs_testing_common_JSEndpoints$__f_tasks, runID, $p_Lorg_scalajs_testing_bridge_TestAdapterBridge$__tasksFun__Lsbt_testing_Runner__F1($m_Lorg_scalajs_testing_bridge_TestAdapterBridge$(), runner));
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($m_Lorg_scalajs_testing_bridge_TestAdapterBridge$().Lorg_scalajs_testing_bridge_TestAdapterBridge$__f_org$scalajs$testing$bridge$TestAdapterBridge$$mux).attachAsync__Lorg_scalajs_testing_common_RPCEndpoint__I__F1__V($m_Lorg_scalajs_testing_common_JSEndpoints$().Lorg_scalajs_testing_common_JSEndpoints$__f_execute, runID, $p_Lorg_scalajs_testing_bridge_TestAdapterBridge$__executeFun__I__Lsbt_testing_Runner__F1($m_Lorg_scalajs_testing_bridge_TestAdapterBridge$(), runID, runner));
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($m_Lorg_scalajs_testing_bridge_TestAdapterBridge$().Lorg_scalajs_testing_bridge_TestAdapterBridge$__f_org$scalajs$testing$bridge$TestAdapterBridge$$mux).attach__Lorg_scalajs_testing_common_RPCEndpoint__I__F1__V($m_Lorg_scalajs_testing_common_JSEndpoints$().Lorg_scalajs_testing_common_JSEndpoints$__f_done, runID, $p_Lorg_scalajs_testing_bridge_TestAdapterBridge$__doneFun__I__Lsbt_testing_Runner__Z__F1($m_Lorg_scalajs_testing_bridge_TestAdapterBridge$(), runID, runner, isController));
    if (isController) {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($m_Lorg_scalajs_testing_bridge_TestAdapterBridge$().Lorg_scalajs_testing_bridge_TestAdapterBridge$__f_org$scalajs$testing$bridge$TestAdapterBridge$$mux).attach__Lorg_scalajs_testing_common_MsgEndpoint__I__F1__V($m_Lorg_scalajs_testing_common_JSEndpoints$().Lorg_scalajs_testing_common_JSEndpoints$__f_msgController, runID, $p_Lorg_scalajs_testing_bridge_TestAdapterBridge$__msgControllerFun__I__Lsbt_testing_Runner__F1($m_Lorg_scalajs_testing_bridge_TestAdapterBridge$(), runID, runner))
    } else {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($m_Lorg_scalajs_testing_bridge_TestAdapterBridge$().Lorg_scalajs_testing_bridge_TestAdapterBridge$__f_org$scalajs$testing$bridge$TestAdapterBridge$$mux).attach__Lorg_scalajs_testing_common_MsgEndpoint__I__F1__V($m_Lorg_scalajs_testing_common_JSEndpoints$().Lorg_scalajs_testing_common_JSEndpoints$__f_msgWorker, runID, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((msg$3$2) => {
        var msg$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(msg$3$2);
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(runner).receiveMessage__T__s_Option(msg$3)
      })))
    }
  }))
}
function $p_Lorg_scalajs_testing_bridge_TestAdapterBridge$__detachRunnerCommands__I__Z__V($thiz, runID, isController) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_testing_bridge_TestAdapterBridge$__f_org$scalajs$testing$bridge$TestAdapterBridge$$mux).detach__Lorg_scalajs_testing_common_Endpoint__I__V($m_Lorg_scalajs_testing_common_JSEndpoints$().Lorg_scalajs_testing_common_JSEndpoints$__f_tasks, runID);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_testing_bridge_TestAdapterBridge$__f_org$scalajs$testing$bridge$TestAdapterBridge$$mux).detach__Lorg_scalajs_testing_common_Endpoint__I__V($m_Lorg_scalajs_testing_common_JSEndpoints$().Lorg_scalajs_testing_common_JSEndpoints$__f_execute, runID);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_testing_bridge_TestAdapterBridge$__f_org$scalajs$testing$bridge$TestAdapterBridge$$mux).detach__Lorg_scalajs_testing_common_Endpoint__I__V($m_Lorg_scalajs_testing_common_JSEndpoints$().Lorg_scalajs_testing_common_JSEndpoints$__f_done, runID);
  if (isController) {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_testing_bridge_TestAdapterBridge$__f_org$scalajs$testing$bridge$TestAdapterBridge$$mux).detach__Lorg_scalajs_testing_common_Endpoint__I__V($m_Lorg_scalajs_testing_common_JSEndpoints$().Lorg_scalajs_testing_common_JSEndpoints$__f_msgController, runID)
  } else {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_testing_bridge_TestAdapterBridge$__f_org$scalajs$testing$bridge$TestAdapterBridge$$mux).detach__Lorg_scalajs_testing_common_Endpoint__I__V($m_Lorg_scalajs_testing_common_JSEndpoints$().Lorg_scalajs_testing_common_JSEndpoints$__f_msgWorker, runID)
  }
}
function $p_Lorg_scalajs_testing_bridge_TestAdapterBridge$__tasksFun__Lsbt_testing_Runner__F1($thiz, runner) {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((taskDefs$2) => {
    var taskDefs = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(taskDefs$2);
    var $$x2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(runner);
    var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(taskDefs);
    if ((this$3.knownSize__I() >= 0)) {
      var len = this$3.knownSize__I();
      var destination = new ($d_Lsbt_testing_TaskDef.getArrayOf().constr)(len);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__copyToArray__O__I__I__I(this$3, destination, 0, 2147483647);
      var $$x1 = destination
    } else {
      var capacity = 0;
      var jsElems = null;
      capacity = 0;
      jsElems = [];
      var it = this$3.iterator__sc_Iterator();
      while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).hasNext__Z()) {
        var elem = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).next__O();
        var unboxedElem = ((elem === null) ? null : elem);
        jsElems.push(unboxedElem)
      };
      var $$x1 = new ($d_Lsbt_testing_TaskDef.getArrayOf().constr)(jsElems)
    };
    var tasks = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x2).tasks__ALsbt_testing_TaskDef__ALsbt_testing_Task($$x1);
    var $$x12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$();
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$();
    var f = ((x$1$2) => {
      var x$1 = $as_Lsbt_testing_Task(x$1$2);
      return $m_Lorg_scalajs_testing_bridge_TaskInfoBuilder$().detachTask__Lsbt_testing_Task__Lsbt_testing_Runner__Lorg_scalajs_testing_common_TaskInfo(x$1, runner)
    });
    var len$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(tasks).u.length;
    var ys = new ($d_Lorg_scalajs_testing_common_TaskInfo.getArrayOf().constr)(len$1);
    if ((len$1 > 0)) {
      var i = 0;
      if ((tasks !== null)) {
        while ((i < len$1)) {
          var $$x3 = i;
          var arg1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(tasks).get(i);
          ys.set($$x3, f(arg1));
          i = ((1 + i) | 0)
        }
      } else if ((tasks instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I)) {
        var x3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_I(tasks, 1);
        while ((i < len$1)) {
          var $$x4 = i;
          var arg1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).get(i);
          ys.set($$x4, f(arg1$1));
          i = ((1 + i) | 0)
        }
      } else if ((tasks instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_D)) {
        var x4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_D(tasks, 1);
        while ((i < len$1)) {
          var $$x5 = i;
          var arg1$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4).get(i);
          ys.set($$x5, f(arg1$2));
          i = ((1 + i) | 0)
        }
      } else if ((tasks instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_J)) {
        var x5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_J(tasks, 1);
        while ((i < len$1)) {
          var $$x6 = i;
          var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5).get(i);
          var lo = t.RTLong__f_lo;
          var hi = t.RTLong__f_hi;
          ys.set($$x6, f(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi)));
          i = ((1 + i) | 0)
        }
      } else if ((tasks instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_F)) {
        var x6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_F(tasks, 1);
        while ((i < len$1)) {
          var $$x7 = i;
          var arg1$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x6).get(i);
          ys.set($$x7, f(arg1$3));
          i = ((1 + i) | 0)
        }
      } else if ((tasks instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C)) {
        var x7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_C(tasks, 1);
        while ((i < len$1)) {
          var $$x8 = i;
          var arg1$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x7).get(i);
          ys.set($$x8, f($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(arg1$4)));
          i = ((1 + i) | 0)
        }
      } else if ((tasks instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B)) {
        var x8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_B(tasks, 1);
        while ((i < len$1)) {
          var $$x9 = i;
          var arg1$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x8).get(i);
          ys.set($$x9, f(arg1$5));
          i = ((1 + i) | 0)
        }
      } else if ((tasks instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_S)) {
        var x9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_S(tasks, 1);
        while ((i < len$1)) {
          var $$x10 = i;
          var arg1$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x9).get(i);
          ys.set($$x10, f(arg1$6));
          i = ((1 + i) | 0)
        }
      } else if ((tasks instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z)) {
        var x10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_Z(tasks, 1);
        while ((i < len$1)) {
          var $$x11 = i;
          var arg1$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x10).get(i);
          ys.set($$x11, f(arg1$7));
          i = ((1 + i) | 0)
        }
      } else {
        throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(tasks)
      }
    };
    var this$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x12).wrapRefArray__AO__scm_ArraySeq$ofRef(ys));
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_List$();
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(this$9)
  }))
}
function $p_Lorg_scalajs_testing_bridge_TestAdapterBridge$__executeFun__I__Lsbt_testing_Runner__F1($thiz, runID, runner) {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((req$2) => {
    var req = $as_Lorg_scalajs_testing_common_ExecuteRequest(req$2);
    var task = $m_Lorg_scalajs_testing_bridge_TaskInfoBuilder$().attachTask__Lorg_scalajs_testing_common_TaskInfo__Lsbt_testing_Runner__Lsbt_testing_Task($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(req).Lorg_scalajs_testing_common_ExecuteRequest__f_taskInfo, runner);
    var eventHandler = new $c_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteEventHandler(runID);
    var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(req).Lorg_scalajs_testing_common_ExecuteRequest__f_loggerColorSupport);
    var loggers = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_IterableOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__zipWithIndex__O(this$2))).withFilter__F1__sc_WithFilter(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((check$ifrefutable$1$2) => {
      var check$ifrefutable$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(check$ifrefutable$1$2);
      return (check$ifrefutable$1 !== null)
    })))).map__F1__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((x$2$2) => {
      var x$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$2$2);
      if ((x$2 !== null)) {
        var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$2);
        var withColor = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(this$3.T2__f__1);
        var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$2);
        var i = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this$4.T2__f__2);
        return new $c_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger(runID, i, withColor)
      } else {
        throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$2)
      }
    }))));
    var promise = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_s_concurrent_impl_Promise$DefaultPromise__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_concurrent_impl_Promise$DefaultPromise());
    try {
      var $$x2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(task);
      var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(loggers);
      if ((this$7.knownSize__I() >= 0)) {
        var len = this$7.knownSize__I();
        var destination = new ($d_Lsbt_testing_Logger.getArrayOf().constr)(len);
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__copyToArray__O__I__I__I(this$7, destination, 0, 2147483647);
        var $$x1 = destination
      } else {
        var capacity = 0;
        var jsElems = null;
        capacity = 0;
        jsElems = [];
        var it = this$7.iterator__sc_Iterator();
        while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).hasNext__Z()) {
          var elem = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).next__O();
          var unboxedElem = ((elem === null) ? null : elem);
          jsElems.push(unboxedElem)
        };
        var $$x1 = new ($d_Lsbt_testing_Logger.getArrayOf().constr)(jsElems)
      };
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x2).execute__Lsbt_testing_EventHandler__ALsbt_testing_Logger__F1__V(eventHandler, $$x1, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((tasks$2) => {
        var tasks = $asArrayOf_Lsbt_testing_Task(tasks$2, 1);
        $p_Lorg_scalajs_testing_bridge_TestAdapterBridge$__cont$1__ALsbt_testing_Task__Lsbt_testing_Runner__s_concurrent_Promise__s_concurrent_Promise($thiz, tasks, runner, promise)
      })))
    } catch (e) {
      var e$2 = ((e instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Throwable) ? e : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException(e));
      matchEnd8: {
        var o11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_util_control_NonFatal$().unapply__jl_Throwable__s_Option(e$2);
        if ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(o11).isEmpty__Z())) {
          var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Throwable($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(o11).get__O());
          $f_s_concurrent_Promise__tryFailure__jl_Throwable__Z(promise, t);
          break matchEnd8
        };
        throw ((e$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e$2))
      }
    };
    return promise
  }))
}
function $p_Lorg_scalajs_testing_bridge_TestAdapterBridge$__doneFun__I__Lsbt_testing_Runner__Z__F1($thiz, runID, runner, isController) {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((x$4$2) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Void(x$4$2);
    try {
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(runner).done__T()
    } finally {
      $p_Lorg_scalajs_testing_bridge_TestAdapterBridge$__detachRunnerCommands__I__Z__V($m_Lorg_scalajs_testing_bridge_TestAdapterBridge$(), runID, isController)
    }
  }))
}
function $p_Lorg_scalajs_testing_bridge_TestAdapterBridge$__msgControllerFun__I__Lsbt_testing_Runner__F1($thiz, runID, runner) {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((msg$2) => {
    var msg = $as_Lorg_scalajs_testing_common_FrameworkMessage(msg$2);
    var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(runner).receiveMessage__T__s_Option($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(msg).Lorg_scalajs_testing_common_FrameworkMessage__f_msg));
    if ((!this$2.isEmpty__Z())) {
      var arg1 = this$2.get__O();
      var reply = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(arg1);
      var fm = new $c_Lorg_scalajs_testing_common_FrameworkMessage($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(msg).Lorg_scalajs_testing_common_FrameworkMessage__f_workerId, reply);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($m_Lorg_scalajs_testing_bridge_TestAdapterBridge$().Lorg_scalajs_testing_bridge_TestAdapterBridge$__f_org$scalajs$testing$bridge$TestAdapterBridge$$mux).send__Lorg_scalajs_testing_common_MsgEndpoint__I__O__V($m_Lorg_scalajs_testing_common_JVMEndpoints$().Lorg_scalajs_testing_common_JVMEndpoints$__f_msgController, runID, fm)
    }
  }))
}
function $p_Lorg_scalajs_testing_bridge_TestAdapterBridge$__cont$1__ALsbt_testing_Task__Lsbt_testing_Runner__s_concurrent_Promise__s_concurrent_Promise($thiz, tasks, runner$3, promise$1) {
  try {
    var $$x10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$();
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$();
    var f = ((x$3$2) => {
      var x$3 = $as_Lsbt_testing_Task(x$3$2);
      return $m_Lorg_scalajs_testing_bridge_TaskInfoBuilder$().detachTask__Lsbt_testing_Task__Lsbt_testing_Runner__Lorg_scalajs_testing_common_TaskInfo(x$3, runner$3)
    });
    var len = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(tasks).u.length;
    var ys = new ($d_Lorg_scalajs_testing_common_TaskInfo.getArrayOf().constr)(len);
    if ((len > 0)) {
      var i = 0;
      if ((tasks !== null)) {
        while ((i < len)) {
          var $$x1 = i;
          var arg1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(tasks).get(i);
          ys.set($$x1, f(arg1));
          i = ((1 + i) | 0)
        }
      } else if ((tasks instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I)) {
        var x3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_I(tasks, 1);
        while ((i < len)) {
          var $$x2 = i;
          var arg1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).get(i);
          ys.set($$x2, f(arg1$1));
          i = ((1 + i) | 0)
        }
      } else if ((tasks instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_D)) {
        var x4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_D(tasks, 1);
        while ((i < len)) {
          var $$x3 = i;
          var arg1$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4).get(i);
          ys.set($$x3, f(arg1$2));
          i = ((1 + i) | 0)
        }
      } else if ((tasks instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_J)) {
        var x5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_J(tasks, 1);
        while ((i < len)) {
          var $$x4 = i;
          var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5).get(i);
          var lo = t.RTLong__f_lo;
          var hi = t.RTLong__f_hi;
          ys.set($$x4, f(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi)));
          i = ((1 + i) | 0)
        }
      } else if ((tasks instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_F)) {
        var x6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_F(tasks, 1);
        while ((i < len)) {
          var $$x5 = i;
          var arg1$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x6).get(i);
          ys.set($$x5, f(arg1$3));
          i = ((1 + i) | 0)
        }
      } else if ((tasks instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C)) {
        var x7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_C(tasks, 1);
        while ((i < len)) {
          var $$x6 = i;
          var arg1$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x7).get(i);
          ys.set($$x6, f($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(arg1$4)));
          i = ((1 + i) | 0)
        }
      } else if ((tasks instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B)) {
        var x8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_B(tasks, 1);
        while ((i < len)) {
          var $$x7 = i;
          var arg1$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x8).get(i);
          ys.set($$x7, f(arg1$5));
          i = ((1 + i) | 0)
        }
      } else if ((tasks instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_S)) {
        var x9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_S(tasks, 1);
        while ((i < len)) {
          var $$x8 = i;
          var arg1$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x9).get(i);
          ys.set($$x8, f(arg1$6));
          i = ((1 + i) | 0)
        }
      } else if ((tasks instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z)) {
        var x10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_Z(tasks, 1);
        while ((i < len)) {
          var $$x9 = i;
          var arg1$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x10).get(i);
          ys.set($$x9, f(arg1$7));
          i = ((1 + i) | 0)
        }
      } else {
        throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(tasks)
      }
    };
    var this$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x10).wrapRefArray__AO__scm_ArraySeq$ofRef(ys));
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_List$();
    var result = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(this$6))
  } catch (e) {
    var e$2 = ((e instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Throwable) ? e : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException(e));
    matchEnd8: {
      var result;
      var o11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_util_control_NonFatal$().unapply__jl_Throwable__s_Option(e$2);
      if ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(o11).isEmpty__Z())) {
        var e$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Throwable($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(o11).get__O());
        var result = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure(e$3);
        break matchEnd8
      };
      throw ((e$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e$2))
    }
  };
  var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(promise$1);
  return $f_s_concurrent_Promise__complete__s_util_Try__s_concurrent_Promise(this$8, result)
}
/** @constructor */
function $c_Lorg_scalajs_testing_bridge_TestAdapterBridge$() {
  this.Lorg_scalajs_testing_bridge_TestAdapterBridge$__f_org$scalajs$testing$bridge$TestAdapterBridge$$mux = null;
  $n_Lorg_scalajs_testing_bridge_TestAdapterBridge$ = this;
  this.Lorg_scalajs_testing_bridge_TestAdapterBridge$__f_org$scalajs$testing$bridge$TestAdapterBridge$$mux = new $c_Lorg_scalajs_testing_common_RunMuxRPC($m_Lorg_scalajs_testing_bridge_JSRPC$())
}
$c_Lorg_scalajs_testing_bridge_TestAdapterBridge$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_bridge_TestAdapterBridge$.prototype.constructor = $c_Lorg_scalajs_testing_bridge_TestAdapterBridge$;
/** @constructor */
function $h_Lorg_scalajs_testing_bridge_TestAdapterBridge$() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_bridge_TestAdapterBridge$.prototype = $c_Lorg_scalajs_testing_bridge_TestAdapterBridge$.prototype;
$c_Lorg_scalajs_testing_bridge_TestAdapterBridge$.prototype.start__V = (function() {
  $m_Lorg_scalajs_testing_bridge_JSRPC$().attach__Lorg_scalajs_testing_common_RPCEndpoint__F1__V($m_Lorg_scalajs_testing_common_JSEndpoints$().Lorg_scalajs_testing_common_JSEndpoints$__f_detectFrameworks, $p_Lorg_scalajs_testing_bridge_TestAdapterBridge$__detectFrameworksFun__F1(this));
  $m_Lorg_scalajs_testing_bridge_JSRPC$().attach__Lorg_scalajs_testing_common_RPCEndpoint__F1__V($m_Lorg_scalajs_testing_common_JSEndpoints$().Lorg_scalajs_testing_common_JSEndpoints$__f_createControllerRunner, $p_Lorg_scalajs_testing_bridge_TestAdapterBridge$__createRunnerFun__Z__F1(this, true));
  $m_Lorg_scalajs_testing_bridge_JSRPC$().attach__Lorg_scalajs_testing_common_RPCEndpoint__F1__V($m_Lorg_scalajs_testing_common_JSEndpoints$().Lorg_scalajs_testing_common_JSEndpoints$__f_createWorkerRunner, $p_Lorg_scalajs_testing_bridge_TestAdapterBridge$__createRunnerFun__Z__F1(this, false))
});
var $d_Lorg_scalajs_testing_bridge_TestAdapterBridge$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_bridge_TestAdapterBridge$: 0
}, false, "org.scalajs.testing.bridge.TestAdapterBridge$", {
  Lorg_scalajs_testing_bridge_TestAdapterBridge$: 1,
  O: 1
});
$c_Lorg_scalajs_testing_bridge_TestAdapterBridge$.prototype.$classData = $d_Lorg_scalajs_testing_bridge_TestAdapterBridge$;
var $n_Lorg_scalajs_testing_bridge_TestAdapterBridge$;
function $m_Lorg_scalajs_testing_bridge_TestAdapterBridge$() {
  if ((!$n_Lorg_scalajs_testing_bridge_TestAdapterBridge$)) {
    $n_Lorg_scalajs_testing_bridge_TestAdapterBridge$ = new $c_Lorg_scalajs_testing_bridge_TestAdapterBridge$()
  };
  return $n_Lorg_scalajs_testing_bridge_TestAdapterBridge$
}
function $p_Lorg_scalajs_testing_bridge_TestLoader$__fingerprintMatches__Lsbt_testing_Fingerprint__Lsbt_testing_Fingerprint__Z($thiz, a, b) {
  if ($is_Lsbt_testing_SubclassFingerprint(a)) {
    var x2 = $as_Lsbt_testing_SubclassFingerprint(a);
    if ($is_Lsbt_testing_SubclassFingerprint(b)) {
      var x3 = $as_Lsbt_testing_SubclassFingerprint(b);
      return (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).isModule__Z() === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).isModule__Z()) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).superclassName__T() === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).superclassName__T()))
    }
  };
  if ($is_Lsbt_testing_AnnotatedFingerprint(a)) {
    var x4 = $as_Lsbt_testing_AnnotatedFingerprint(a);
    if ($is_Lsbt_testing_AnnotatedFingerprint(b)) {
      var x5 = $as_Lsbt_testing_AnnotatedFingerprint(b);
      return (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4).isModule__Z() === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5).isModule__Z()) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4).annotationName__T() === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5).annotationName__T()))
    }
  };
  return false
}
/** @constructor */
function $c_Lorg_scalajs_testing_bridge_TestLoader$() {
  /*<skip>*/
}
$c_Lorg_scalajs_testing_bridge_TestLoader$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_bridge_TestLoader$.prototype.constructor = $c_Lorg_scalajs_testing_bridge_TestLoader$;
/** @constructor */
function $h_Lorg_scalajs_testing_bridge_TestLoader$() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_bridge_TestLoader$.prototype = $c_Lorg_scalajs_testing_bridge_TestLoader$.prototype;
$c_Lorg_scalajs_testing_bridge_TestLoader$.prototype.loadTests__Lorg_scalajs_testing_common_IsolatedTestSet__sci_Seq = (function(tests) {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(tests).Lorg_scalajs_testing_common_IsolatedTestSet__f_testFrameworkNames);
  var rest = this$1;
  var h = null;
  var t = null;
  while ((rest !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
    var arg1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).head__O();
    var nameAlternatives = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(arg1);
    var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($m_Lorg_scalajs_testing_bridge_FrameworkLoader$().tryLoadFramework__sci_List__s_Option(nameAlternatives)).toList__sci_List());
    var f$1 = ((tests) => ((framework$2) => {
      var framework = $as_Lsbt_testing_Framework(framework$2);
      var fingerprints = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(framework).fingerprints__ALsbt_testing_Fingerprint();
      var this$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(tests).Lorg_scalajs_testing_common_IsolatedTestSet__f_definedTests);
      var f = ((taskDef$2) => {
        var taskDef = $as_Lsbt_testing_TaskDef(taskDef$2);
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$();
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$();
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$();
        var from = 0;
        _return: {
          var i = from;
          while ((i < $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(fingerprints).u.length)) {
            var x1 = i;
            var arg1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(fingerprints).get(x1);
            var x$1 = $as_Lsbt_testing_Fingerprint(arg1$1);
            if ($p_Lorg_scalajs_testing_bridge_TestLoader$__fingerprintMatches__Lsbt_testing_Fingerprint__Lsbt_testing_Fingerprint__Z($m_Lorg_scalajs_testing_bridge_TestLoader$(), x$1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(taskDef).Lsbt_testing_TaskDef__f__fingerprint)) {
              var $$x1 = i;
              break _return
            };
            i = ((1 + i) | 0)
          };
          var $$x1 = (-1)
        };
        return ($$x1 >= 0)
      });
      var l = this$6;
      block: {
        var result;
        while (true) {
          if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(l).isEmpty__Z()) {
            var result = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
            break
          } else {
            var h$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(l).head__O();
            var t$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(l).tail__O());
            if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(f(h$1)) === false)) {
              l = t$1;
              continue
            };
            var start = l;
            var remaining = t$1;
            while (true) {
              if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(remaining).isEmpty__Z()) {
                var result = start;
                break block
              } else {
                var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(remaining).head__O();
                if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(f(x)) !== false)) {
                  remaining = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(remaining).tail__O());
                  continue
                };
                var firstMiss = remaining;
                var newHead = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(start).head__O(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
                var toProcess = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(start).tail__O());
                var currentLast = newHead;
                while ((toProcess !== firstMiss)) {
                  var newElem = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(toProcess).head__O(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
                  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(currentLast).sci_$colon$colon__f_next = newElem;
                  currentLast = newElem;
                  toProcess = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(toProcess).tail__O())
                };
                var next = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(firstMiss).tail__O());
                var nextToCopy = next;
                while ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(next).isEmpty__Z())) {
                  var head = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(next).head__O();
                  if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(f(head)) !== false)) {
                    next = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(next).tail__O())
                  } else {
                    while ((nextToCopy !== next)) {
                      var newElem$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(nextToCopy).head__O(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
                      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(currentLast).sci_$colon$colon__f_next = newElem$2;
                      currentLast = newElem$2;
                      nextToCopy = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(nextToCopy).tail__O())
                    };
                    nextToCopy = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(next).tail__O());
                    next = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(next).tail__O())
                  }
                };
                if ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(nextToCopy).isEmpty__Z())) {
                  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(currentLast).sci_$colon$colon__f_next = nextToCopy
                };
                var result = newHead;
                break block
              }
            }
          }
        }
      };
      var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(result);
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(framework, this$7)
    }))(tests);
    if ((this$8 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
      var $$x2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$()
    } else {
      var arg1$2 = this$8.head__O();
      var h$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f$1(arg1$2), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
      var t$2 = h$2;
      var rest$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(this$8.tail__O());
      while ((rest$1 !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
        var arg1$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest$1).head__O();
        var nx = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f$1(arg1$3), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t$2).sci_$colon$colon__f_next = nx;
        t$2 = nx;
        rest$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest$1).tail__O())
      };
      var $$x2 = h$2
    };
    var it = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x2).iterator__sc_Iterator();
    while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).hasNext__Z()) {
      var nx$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).next__O(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
      if ((t === null)) {
        h = nx$1
      } else {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).sci_$colon$colon__f_next = nx$1
      };
      t = nx$1
    };
    rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).tail__O())
  };
  return ((h === null) ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$() : h)
});
var $d_Lorg_scalajs_testing_bridge_TestLoader$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_bridge_TestLoader$: 0
}, false, "org.scalajs.testing.bridge.TestLoader$", {
  Lorg_scalajs_testing_bridge_TestLoader$: 1,
  O: 1
});
$c_Lorg_scalajs_testing_bridge_TestLoader$.prototype.$classData = $d_Lorg_scalajs_testing_bridge_TestLoader$;
var $n_Lorg_scalajs_testing_bridge_TestLoader$;
function $m_Lorg_scalajs_testing_bridge_TestLoader$() {
  if ((!$n_Lorg_scalajs_testing_bridge_TestLoader$)) {
    $n_Lorg_scalajs_testing_bridge_TestLoader$ = new $c_Lorg_scalajs_testing_bridge_TestLoader$()
  };
  return $n_Lorg_scalajs_testing_bridge_TestLoader$
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_ExecuteRequest(taskInfo, loggerColorSupport) {
  this.Lorg_scalajs_testing_common_ExecuteRequest__f_taskInfo = null;
  this.Lorg_scalajs_testing_common_ExecuteRequest__f_loggerColorSupport = null;
  this.Lorg_scalajs_testing_common_ExecuteRequest__f_taskInfo = taskInfo;
  this.Lorg_scalajs_testing_common_ExecuteRequest__f_loggerColorSupport = loggerColorSupport
}
$c_Lorg_scalajs_testing_common_ExecuteRequest.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_ExecuteRequest.prototype.constructor = $c_Lorg_scalajs_testing_common_ExecuteRequest;
/** @constructor */
function $h_Lorg_scalajs_testing_common_ExecuteRequest() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_ExecuteRequest.prototype = $c_Lorg_scalajs_testing_common_ExecuteRequest.prototype;
function $as_Lorg_scalajs_testing_common_ExecuteRequest(obj) {
  return (((obj instanceof $c_Lorg_scalajs_testing_common_ExecuteRequest) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "org.scalajs.testing.common.ExecuteRequest"))
}
function $isArrayOf_Lorg_scalajs_testing_common_ExecuteRequest(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_scalajs_testing_common_ExecuteRequest)))
}
function $asArrayOf_Lorg_scalajs_testing_common_ExecuteRequest(obj, depth) {
  return (($isArrayOf_Lorg_scalajs_testing_common_ExecuteRequest(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lorg.scalajs.testing.common.ExecuteRequest;", depth))
}
var $d_Lorg_scalajs_testing_common_ExecuteRequest = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_ExecuteRequest: 0
}, false, "org.scalajs.testing.common.ExecuteRequest", {
  Lorg_scalajs_testing_common_ExecuteRequest: 1,
  O: 1
});
$c_Lorg_scalajs_testing_common_ExecuteRequest.prototype.$classData = $d_Lorg_scalajs_testing_common_ExecuteRequest;
/** @constructor */
function $c_Lorg_scalajs_testing_common_FrameworkInfo(implName, displayName, fingerprints) {
  this.Lorg_scalajs_testing_common_FrameworkInfo__f_implName = null;
  this.Lorg_scalajs_testing_common_FrameworkInfo__f_displayName = null;
  this.Lorg_scalajs_testing_common_FrameworkInfo__f_fingerprints = null;
  this.Lorg_scalajs_testing_common_FrameworkInfo__f_implName = implName;
  this.Lorg_scalajs_testing_common_FrameworkInfo__f_displayName = displayName;
  this.Lorg_scalajs_testing_common_FrameworkInfo__f_fingerprints = fingerprints
}
$c_Lorg_scalajs_testing_common_FrameworkInfo.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_FrameworkInfo.prototype.constructor = $c_Lorg_scalajs_testing_common_FrameworkInfo;
/** @constructor */
function $h_Lorg_scalajs_testing_common_FrameworkInfo() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_FrameworkInfo.prototype = $c_Lorg_scalajs_testing_common_FrameworkInfo.prototype;
function $as_Lorg_scalajs_testing_common_FrameworkInfo(obj) {
  return (((obj instanceof $c_Lorg_scalajs_testing_common_FrameworkInfo) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "org.scalajs.testing.common.FrameworkInfo"))
}
function $isArrayOf_Lorg_scalajs_testing_common_FrameworkInfo(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_scalajs_testing_common_FrameworkInfo)))
}
function $asArrayOf_Lorg_scalajs_testing_common_FrameworkInfo(obj, depth) {
  return (($isArrayOf_Lorg_scalajs_testing_common_FrameworkInfo(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lorg.scalajs.testing.common.FrameworkInfo;", depth))
}
var $d_Lorg_scalajs_testing_common_FrameworkInfo = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_FrameworkInfo: 0
}, false, "org.scalajs.testing.common.FrameworkInfo", {
  Lorg_scalajs_testing_common_FrameworkInfo: 1,
  O: 1
});
$c_Lorg_scalajs_testing_common_FrameworkInfo.prototype.$classData = $d_Lorg_scalajs_testing_common_FrameworkInfo;
/** @constructor */
function $c_Lorg_scalajs_testing_common_FrameworkMessage(workerId, msg) {
  this.Lorg_scalajs_testing_common_FrameworkMessage__f_workerId = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$L0;
  this.Lorg_scalajs_testing_common_FrameworkMessage__f_msg = null;
  this.Lorg_scalajs_testing_common_FrameworkMessage__f_workerId = workerId;
  this.Lorg_scalajs_testing_common_FrameworkMessage__f_msg = msg
}
$c_Lorg_scalajs_testing_common_FrameworkMessage.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_FrameworkMessage.prototype.constructor = $c_Lorg_scalajs_testing_common_FrameworkMessage;
/** @constructor */
function $h_Lorg_scalajs_testing_common_FrameworkMessage() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_FrameworkMessage.prototype = $c_Lorg_scalajs_testing_common_FrameworkMessage.prototype;
function $as_Lorg_scalajs_testing_common_FrameworkMessage(obj) {
  return (((obj instanceof $c_Lorg_scalajs_testing_common_FrameworkMessage) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "org.scalajs.testing.common.FrameworkMessage"))
}
function $isArrayOf_Lorg_scalajs_testing_common_FrameworkMessage(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_scalajs_testing_common_FrameworkMessage)))
}
function $asArrayOf_Lorg_scalajs_testing_common_FrameworkMessage(obj, depth) {
  return (($isArrayOf_Lorg_scalajs_testing_common_FrameworkMessage(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lorg.scalajs.testing.common.FrameworkMessage;", depth))
}
var $d_Lorg_scalajs_testing_common_FrameworkMessage = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_FrameworkMessage: 0
}, false, "org.scalajs.testing.common.FrameworkMessage", {
  Lorg_scalajs_testing_common_FrameworkMessage: 1,
  O: 1
});
$c_Lorg_scalajs_testing_common_FrameworkMessage.prototype.$classData = $d_Lorg_scalajs_testing_common_FrameworkMessage;
/** @constructor */
function $c_Lorg_scalajs_testing_common_IsolatedTestSet(testFrameworkNames, definedTests) {
  this.Lorg_scalajs_testing_common_IsolatedTestSet__f_testFrameworkNames = null;
  this.Lorg_scalajs_testing_common_IsolatedTestSet__f_definedTests = null;
  this.Lorg_scalajs_testing_common_IsolatedTestSet__f_testFrameworkNames = testFrameworkNames;
  this.Lorg_scalajs_testing_common_IsolatedTestSet__f_definedTests = definedTests
}
$c_Lorg_scalajs_testing_common_IsolatedTestSet.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_IsolatedTestSet.prototype.constructor = $c_Lorg_scalajs_testing_common_IsolatedTestSet;
/** @constructor */
function $h_Lorg_scalajs_testing_common_IsolatedTestSet() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_IsolatedTestSet.prototype = $c_Lorg_scalajs_testing_common_IsolatedTestSet.prototype;
function $as_Lorg_scalajs_testing_common_IsolatedTestSet(obj) {
  return (((obj instanceof $c_Lorg_scalajs_testing_common_IsolatedTestSet) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "org.scalajs.testing.common.IsolatedTestSet"))
}
function $isArrayOf_Lorg_scalajs_testing_common_IsolatedTestSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_scalajs_testing_common_IsolatedTestSet)))
}
function $asArrayOf_Lorg_scalajs_testing_common_IsolatedTestSet(obj, depth) {
  return (($isArrayOf_Lorg_scalajs_testing_common_IsolatedTestSet(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lorg.scalajs.testing.common.IsolatedTestSet;", depth))
}
var $d_Lorg_scalajs_testing_common_IsolatedTestSet = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_IsolatedTestSet: 0
}, false, "org.scalajs.testing.common.IsolatedTestSet", {
  Lorg_scalajs_testing_common_IsolatedTestSet: 1,
  O: 1
});
$c_Lorg_scalajs_testing_common_IsolatedTestSet.prototype.$classData = $d_Lorg_scalajs_testing_common_IsolatedTestSet;
/** @constructor */
function $c_Lorg_scalajs_testing_common_JSEndpoints$() {
  this.Lorg_scalajs_testing_common_JSEndpoints$__f_detectFrameworks = null;
  this.Lorg_scalajs_testing_common_JSEndpoints$__f_createControllerRunner = null;
  this.Lorg_scalajs_testing_common_JSEndpoints$__f_createWorkerRunner = null;
  this.Lorg_scalajs_testing_common_JSEndpoints$__f_msgWorker = null;
  this.Lorg_scalajs_testing_common_JSEndpoints$__f_msgController = null;
  this.Lorg_scalajs_testing_common_JSEndpoints$__f_tasks = null;
  this.Lorg_scalajs_testing_common_JSEndpoints$__f_execute = null;
  this.Lorg_scalajs_testing_common_JSEndpoints$__f_done = null;
  $n_Lorg_scalajs_testing_common_JSEndpoints$ = this;
  var $$x2 = $m_Lorg_scalajs_testing_common_RPCEndpoint$();
  var evidence$3 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var evidence$3$1 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3);
  var $$x1 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3$1);
  var evidence$4 = $m_Lorg_scalajs_testing_common_FrameworkInfo$FrameworkInfoSerializer$();
  var evidence$3$2 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$2(evidence$4);
  this.Lorg_scalajs_testing_common_JSEndpoints$__f_detectFrameworks = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x2).apply__B__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_RPCEndpoint(2, $$x1, new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3$2));
  this.Lorg_scalajs_testing_common_JSEndpoints$__f_createControllerRunner = $m_Lorg_scalajs_testing_common_RPCEndpoint$().apply__B__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_RPCEndpoint(3, $m_Lorg_scalajs_testing_common_RunnerArgs$RunnerArgsSerializer$(), $m_Lorg_scalajs_testing_common_Serializer$UnitSerializer$());
  this.Lorg_scalajs_testing_common_JSEndpoints$__f_createWorkerRunner = $m_Lorg_scalajs_testing_common_RPCEndpoint$().apply__B__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_RPCEndpoint(4, $m_Lorg_scalajs_testing_common_RunnerArgs$RunnerArgsSerializer$(), $m_Lorg_scalajs_testing_common_Serializer$UnitSerializer$());
  var $$x3 = $m_Lorg_scalajs_testing_common_MsgEndpoint$();
  var evidence$1 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  this.Lorg_scalajs_testing_common_JSEndpoints$__f_msgWorker = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x3).apply__B__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_MsgEndpoint(5, new $c_Lorg_scalajs_testing_common_RunMux$$anon$1(evidence$1));
  var $$x4 = $m_Lorg_scalajs_testing_common_MsgEndpoint$();
  var evidence$1$1 = $m_Lorg_scalajs_testing_common_FrameworkMessage$FrameworkMessageSerializer$();
  this.Lorg_scalajs_testing_common_JSEndpoints$__f_msgController = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x4).apply__B__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_MsgEndpoint(6, new $c_Lorg_scalajs_testing_common_RunMux$$anon$1(evidence$1$1));
  var $$x6 = $m_Lorg_scalajs_testing_common_RPCEndpoint$();
  var evidence$3$3 = $m_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$();
  var evidence$1$2 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3$3);
  var $$x5 = new $c_Lorg_scalajs_testing_common_RunMux$$anon$1(evidence$1$2);
  var evidence$3$4 = $m_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$();
  this.Lorg_scalajs_testing_common_JSEndpoints$__f_tasks = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x6).apply__B__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_RPCEndpoint(7, $$x5, new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3$4));
  var $$x8 = $m_Lorg_scalajs_testing_common_RPCEndpoint$();
  var evidence$1$3 = $m_Lorg_scalajs_testing_common_ExecuteRequest$ExecuteRequestSerializer$();
  var $$x7 = new $c_Lorg_scalajs_testing_common_RunMux$$anon$1(evidence$1$3);
  var evidence$3$5 = $m_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$();
  this.Lorg_scalajs_testing_common_JSEndpoints$__f_execute = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x8).apply__B__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_RPCEndpoint(8, $$x7, new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3$5));
  var $$x9 = $m_Lorg_scalajs_testing_common_RPCEndpoint$();
  var evidence$1$4 = $m_Lorg_scalajs_testing_common_Serializer$UnitSerializer$();
  this.Lorg_scalajs_testing_common_JSEndpoints$__f_done = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x9).apply__B__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_RPCEndpoint(9, new $c_Lorg_scalajs_testing_common_RunMux$$anon$1(evidence$1$4), $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$())
}
$c_Lorg_scalajs_testing_common_JSEndpoints$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_JSEndpoints$.prototype.constructor = $c_Lorg_scalajs_testing_common_JSEndpoints$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_JSEndpoints$() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_JSEndpoints$.prototype = $c_Lorg_scalajs_testing_common_JSEndpoints$.prototype;
var $d_Lorg_scalajs_testing_common_JSEndpoints$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_JSEndpoints$: 0
}, false, "org.scalajs.testing.common.JSEndpoints$", {
  Lorg_scalajs_testing_common_JSEndpoints$: 1,
  O: 1
});
$c_Lorg_scalajs_testing_common_JSEndpoints$.prototype.$classData = $d_Lorg_scalajs_testing_common_JSEndpoints$;
var $n_Lorg_scalajs_testing_common_JSEndpoints$;
function $m_Lorg_scalajs_testing_common_JSEndpoints$() {
  if ((!$n_Lorg_scalajs_testing_common_JSEndpoints$)) {
    $n_Lorg_scalajs_testing_common_JSEndpoints$ = new $c_Lorg_scalajs_testing_common_JSEndpoints$()
  };
  return $n_Lorg_scalajs_testing_common_JSEndpoints$
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_JVMEndpoints$() {
  this.Lorg_scalajs_testing_common_JVMEndpoints$__f_msgWorker = null;
  this.Lorg_scalajs_testing_common_JVMEndpoints$__f_msgController = null;
  this.Lorg_scalajs_testing_common_JVMEndpoints$__f_event = null;
  this.Lorg_scalajs_testing_common_JVMEndpoints$__f_logError = null;
  this.Lorg_scalajs_testing_common_JVMEndpoints$__f_logWarn = null;
  this.Lorg_scalajs_testing_common_JVMEndpoints$__f_logInfo = null;
  this.Lorg_scalajs_testing_common_JVMEndpoints$__f_logDebug = null;
  this.Lorg_scalajs_testing_common_JVMEndpoints$__f_logTrace = null;
  $n_Lorg_scalajs_testing_common_JVMEndpoints$ = this;
  var $$x1 = $m_Lorg_scalajs_testing_common_MsgEndpoint$();
  var evidence$1 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  this.Lorg_scalajs_testing_common_JVMEndpoints$__f_msgWorker = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x1).apply__B__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_MsgEndpoint(2, new $c_Lorg_scalajs_testing_common_RunMux$$anon$1(evidence$1));
  var $$x2 = $m_Lorg_scalajs_testing_common_MsgEndpoint$();
  var evidence$1$1 = $m_Lorg_scalajs_testing_common_FrameworkMessage$FrameworkMessageSerializer$();
  this.Lorg_scalajs_testing_common_JVMEndpoints$__f_msgController = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x2).apply__B__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_MsgEndpoint(3, new $c_Lorg_scalajs_testing_common_RunMux$$anon$1(evidence$1$1));
  var $$x3 = $m_Lorg_scalajs_testing_common_MsgEndpoint$();
  var evidence$1$2 = $m_Lorg_scalajs_testing_common_Serializer$EventSerializer$();
  this.Lorg_scalajs_testing_common_JVMEndpoints$__f_event = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x3).apply__B__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_MsgEndpoint(4, new $c_Lorg_scalajs_testing_common_RunMux$$anon$1(evidence$1$2));
  var $$x4 = $m_Lorg_scalajs_testing_common_MsgEndpoint$();
  var evidence$1$3 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var evidence$1$4 = new $c_Lorg_scalajs_testing_common_LogElement$$anon$1(evidence$1$3);
  this.Lorg_scalajs_testing_common_JVMEndpoints$__f_logError = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x4).apply__B__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_MsgEndpoint(5, new $c_Lorg_scalajs_testing_common_RunMux$$anon$1(evidence$1$4));
  var $$x5 = $m_Lorg_scalajs_testing_common_MsgEndpoint$();
  var evidence$1$5 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var evidence$1$6 = new $c_Lorg_scalajs_testing_common_LogElement$$anon$1(evidence$1$5);
  this.Lorg_scalajs_testing_common_JVMEndpoints$__f_logWarn = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x5).apply__B__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_MsgEndpoint(6, new $c_Lorg_scalajs_testing_common_RunMux$$anon$1(evidence$1$6));
  var $$x6 = $m_Lorg_scalajs_testing_common_MsgEndpoint$();
  var evidence$1$7 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var evidence$1$8 = new $c_Lorg_scalajs_testing_common_LogElement$$anon$1(evidence$1$7);
  this.Lorg_scalajs_testing_common_JVMEndpoints$__f_logInfo = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x6).apply__B__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_MsgEndpoint(7, new $c_Lorg_scalajs_testing_common_RunMux$$anon$1(evidence$1$8));
  var $$x7 = $m_Lorg_scalajs_testing_common_MsgEndpoint$();
  var evidence$1$9 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var evidence$1$10 = new $c_Lorg_scalajs_testing_common_LogElement$$anon$1(evidence$1$9);
  this.Lorg_scalajs_testing_common_JVMEndpoints$__f_logDebug = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x7).apply__B__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_MsgEndpoint(8, new $c_Lorg_scalajs_testing_common_RunMux$$anon$1(evidence$1$10));
  var $$x8 = $m_Lorg_scalajs_testing_common_MsgEndpoint$();
  var evidence$1$11 = $m_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$();
  var evidence$1$12 = new $c_Lorg_scalajs_testing_common_LogElement$$anon$1(evidence$1$11);
  this.Lorg_scalajs_testing_common_JVMEndpoints$__f_logTrace = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x8).apply__B__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_MsgEndpoint(9, new $c_Lorg_scalajs_testing_common_RunMux$$anon$1(evidence$1$12))
}
$c_Lorg_scalajs_testing_common_JVMEndpoints$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_JVMEndpoints$.prototype.constructor = $c_Lorg_scalajs_testing_common_JVMEndpoints$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_JVMEndpoints$() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_JVMEndpoints$.prototype = $c_Lorg_scalajs_testing_common_JVMEndpoints$.prototype;
var $d_Lorg_scalajs_testing_common_JVMEndpoints$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_JVMEndpoints$: 0
}, false, "org.scalajs.testing.common.JVMEndpoints$", {
  Lorg_scalajs_testing_common_JVMEndpoints$: 1,
  O: 1
});
$c_Lorg_scalajs_testing_common_JVMEndpoints$.prototype.$classData = $d_Lorg_scalajs_testing_common_JVMEndpoints$;
var $n_Lorg_scalajs_testing_common_JVMEndpoints$;
function $m_Lorg_scalajs_testing_common_JVMEndpoints$() {
  if ((!$n_Lorg_scalajs_testing_common_JVMEndpoints$)) {
    $n_Lorg_scalajs_testing_common_JVMEndpoints$ = new $c_Lorg_scalajs_testing_common_JVMEndpoints$()
  };
  return $n_Lorg_scalajs_testing_common_JVMEndpoints$
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_LogElement(index, x) {
  this.Lorg_scalajs_testing_common_LogElement__f_index = 0;
  this.Lorg_scalajs_testing_common_LogElement__f_x = null;
  this.Lorg_scalajs_testing_common_LogElement__f_index = index;
  this.Lorg_scalajs_testing_common_LogElement__f_x = x
}
$c_Lorg_scalajs_testing_common_LogElement.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_LogElement.prototype.constructor = $c_Lorg_scalajs_testing_common_LogElement;
/** @constructor */
function $h_Lorg_scalajs_testing_common_LogElement() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_LogElement.prototype = $c_Lorg_scalajs_testing_common_LogElement.prototype;
function $as_Lorg_scalajs_testing_common_LogElement(obj) {
  return (((obj instanceof $c_Lorg_scalajs_testing_common_LogElement) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "org.scalajs.testing.common.LogElement"))
}
function $isArrayOf_Lorg_scalajs_testing_common_LogElement(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_scalajs_testing_common_LogElement)))
}
function $asArrayOf_Lorg_scalajs_testing_common_LogElement(obj, depth) {
  return (($isArrayOf_Lorg_scalajs_testing_common_LogElement(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lorg.scalajs.testing.common.LogElement;", depth))
}
var $d_Lorg_scalajs_testing_common_LogElement = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_LogElement: 0
}, false, "org.scalajs.testing.common.LogElement", {
  Lorg_scalajs_testing_common_LogElement: 1,
  O: 1
});
$c_Lorg_scalajs_testing_common_LogElement.prototype.$classData = $d_Lorg_scalajs_testing_common_LogElement;
/** @constructor */
function $c_Lorg_scalajs_testing_common_MsgEndpoint$() {
  /*<skip>*/
}
$c_Lorg_scalajs_testing_common_MsgEndpoint$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_MsgEndpoint$.prototype.constructor = $c_Lorg_scalajs_testing_common_MsgEndpoint$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_MsgEndpoint$() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_MsgEndpoint$.prototype = $c_Lorg_scalajs_testing_common_MsgEndpoint$.prototype;
$c_Lorg_scalajs_testing_common_MsgEndpoint$.prototype.apply__B__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_MsgEndpoint = (function(opc, ms) {
  var requirement = (!$m_Lorg_scalajs_testing_common_RPCCore$().isReservedOpCode__B__Z(opc));
  if ((!requirement)) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IllegalArgumentException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IllegalArgumentException(), (("requirement failed: " + "Reserved op code: ") + opc))
  };
  return new $c_Lorg_scalajs_testing_common_MsgEndpoint$$anon$1(opc, ms)
});
var $d_Lorg_scalajs_testing_common_MsgEndpoint$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_MsgEndpoint$: 0
}, false, "org.scalajs.testing.common.MsgEndpoint$", {
  Lorg_scalajs_testing_common_MsgEndpoint$: 1,
  O: 1
});
$c_Lorg_scalajs_testing_common_MsgEndpoint$.prototype.$classData = $d_Lorg_scalajs_testing_common_MsgEndpoint$;
var $n_Lorg_scalajs_testing_common_MsgEndpoint$;
function $m_Lorg_scalajs_testing_common_MsgEndpoint$() {
  if ((!$n_Lorg_scalajs_testing_common_MsgEndpoint$)) {
    $n_Lorg_scalajs_testing_common_MsgEndpoint$ = new $c_Lorg_scalajs_testing_common_MsgEndpoint$()
  };
  return $n_Lorg_scalajs_testing_common_MsgEndpoint$
}
function $p_Lorg_scalajs_testing_common_RPCCore__attach__Lorg_scalajs_testing_common_RPCCore$BoundEndpoint__V($thiz, bep) {
  var opCode = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(bep).endpoint__Lorg_scalajs_testing_common_Endpoint()).opCode__B();
  var old = $as_Lorg_scalajs_testing_common_RPCCore$BoundEndpoint($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_testing_common_RPCCore__f_endpoints).put__O__O__O(opCode, bep));
  var requirement = (old === null);
  if ((!requirement)) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IllegalArgumentException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IllegalArgumentException(), (("requirement failed: " + ("Duplicate endpoint for opcode " + opCode)) + "."))
  }
}
function $p_Lorg_scalajs_testing_common_RPCCore__makeReply__J__s_util_Try__Lorg_scalajs_testing_common_Serializer__T($thiz, id, result, evidence$1) {
  var x1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(result).map__F1__s_util_Try(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((x$2$2) => $p_Lorg_scalajs_testing_common_RPCCore__makeRPCMsg__B__J__O__Lorg_scalajs_testing_common_Serializer__T($thiz, $m_Lorg_scalajs_testing_common_RPCCore$().Lorg_scalajs_testing_common_RPCCore$__f_org$scalajs$testing$common$RPCCore$$ReplyOK, id, x$2$2, evidence$1))));
  if ((x1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success)) {
    var x2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_util_Success(x1);
    var m = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).s_util_Success__f_value);
    return m
  } else if ((x1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure)) {
    var x3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_util_Failure(x1);
    var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).s_util_Failure__f_exception;
    return $p_Lorg_scalajs_testing_common_RPCCore__makeRPCMsg__B__J__O__Lorg_scalajs_testing_common_Serializer__T($thiz, $m_Lorg_scalajs_testing_common_RPCCore$().Lorg_scalajs_testing_common_RPCCore$__f_org$scalajs$testing$common$RPCCore$$ReplyErr, id, t, $m_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$())
  } else {
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x1)
  }
}
function $p_Lorg_scalajs_testing_common_RPCCore__makeRPCMsg__B__J__O__Lorg_scalajs_testing_common_Serializer__T($thiz, opCode, id, payload, evidence$2) {
  var byteOut = $ct_Ljava_io_ByteArrayOutputStream__(new $c_Ljava_io_ByteArrayOutputStream());
  var dataOut = new $c_Ljava_io_DataOutputStream(byteOut);
  try {
    var v = opCode;
    dataOut.write__I__V(v);
    var hi = id.RTLong__f_hi;
    dataOut.writeInt__I__V(hi);
    dataOut.writeInt__I__V(id.RTLong__f_lo);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(evidence$2).serialize__O__Ljava_io_DataOutputStream__V(payload, dataOut)
  } finally {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(dataOut.Ljava_io_FilterOutputStream__f_out).close__V()
  };
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$();
  var xs = byteOut.toByteArray__AB();
  var f = ((b$2) => {
    var b = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uB(b$2);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC((65535 & (255 & b)))
  });
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_reflect_ManifestFactory$CharManifest$();
  var len = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).u.length;
  var ys = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C(len);
  if ((len > 0)) {
    var i = 0;
    if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_O)) {
      var x2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_O(xs, 1);
      while ((i < len)) {
        var $$x1 = i;
        var arg1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).get(i);
        ys.set($$x1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(arg1)));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I)) {
      var x3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_I(xs, 1);
      while ((i < len)) {
        var $$x2 = i;
        var arg1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).get(i);
        ys.set($$x2, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(arg1$1)));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_D)) {
      var x4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_D(xs, 1);
      while ((i < len)) {
        var $$x3 = i;
        var arg1$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4).get(i);
        ys.set($$x3, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(arg1$2)));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_J)) {
      var x5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_J(xs, 1);
      while ((i < len)) {
        var $$x4 = i;
        var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5).get(i);
        var lo = t.RTLong__f_lo;
        var hi$1 = t.RTLong__f_hi;
        ys.set($$x4, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi$1))));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_F)) {
      var x6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_F(xs, 1);
      while ((i < len)) {
        var $$x5 = i;
        var arg1$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x6).get(i);
        ys.set($$x5, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(arg1$3)));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C)) {
      var x7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_C(xs, 1);
      while ((i < len)) {
        var $$x6 = i;
        var arg1$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x7).get(i);
        ys.set($$x6, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(arg1$4))));
        i = ((1 + i) | 0)
      }
    } else if ((xs !== null)) {
      while ((i < len)) {
        var $$x7 = i;
        var arg1$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).get(i);
        ys.set($$x7, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(arg1$5)));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_S)) {
      var x9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_S(xs, 1);
      while ((i < len)) {
        var $$x8 = i;
        var arg1$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x9).get(i);
        ys.set($$x8, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(arg1$6)));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z)) {
      var x10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_Z(xs, 1);
      while ((i < len)) {
        var $$x9 = i;
        var arg1$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x10).get(i);
        ys.set($$x9, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(arg1$7)));
        i = ((1 + i) | 0)
      }
    } else {
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(xs)
    }
  };
  var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_jl_String$();
  return this$7.new__AC__I__I__T(ys, 0, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ys).u.length)
}
function $p_Lorg_scalajs_testing_common_RPCCore__makeMsgMsg__B__O__Lorg_scalajs_testing_common_Serializer__T($thiz, opCode, payload, evidence$3) {
  var byteOut = $ct_Ljava_io_ByteArrayOutputStream__(new $c_Ljava_io_ByteArrayOutputStream());
  var dataOut = new $c_Ljava_io_DataOutputStream(byteOut);
  try {
    var v = opCode;
    dataOut.write__I__V(v);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(evidence$3).serialize__O__Ljava_io_DataOutputStream__V(payload, dataOut)
  } finally {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(dataOut.Ljava_io_FilterOutputStream__f_out).close__V()
  };
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$();
  var xs = byteOut.toByteArray__AB();
  var f = ((b$2) => {
    var b = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uB(b$2);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC((65535 & (255 & b)))
  });
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_reflect_ManifestFactory$CharManifest$();
  var len = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).u.length;
  var ys = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C(len);
  if ((len > 0)) {
    var i = 0;
    if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_O)) {
      var x2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_O(xs, 1);
      while ((i < len)) {
        var $$x1 = i;
        var arg1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).get(i);
        ys.set($$x1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(arg1)));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I)) {
      var x3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_I(xs, 1);
      while ((i < len)) {
        var $$x2 = i;
        var arg1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).get(i);
        ys.set($$x2, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(arg1$1)));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_D)) {
      var x4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_D(xs, 1);
      while ((i < len)) {
        var $$x3 = i;
        var arg1$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4).get(i);
        ys.set($$x3, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(arg1$2)));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_J)) {
      var x5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_J(xs, 1);
      while ((i < len)) {
        var $$x4 = i;
        var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5).get(i);
        var lo = t.RTLong__f_lo;
        var hi = t.RTLong__f_hi;
        ys.set($$x4, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi))));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_F)) {
      var x6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_F(xs, 1);
      while ((i < len)) {
        var $$x5 = i;
        var arg1$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x6).get(i);
        ys.set($$x5, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(arg1$3)));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C)) {
      var x7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_C(xs, 1);
      while ((i < len)) {
        var $$x6 = i;
        var arg1$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x7).get(i);
        ys.set($$x6, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(arg1$4))));
        i = ((1 + i) | 0)
      }
    } else if ((xs !== null)) {
      while ((i < len)) {
        var $$x7 = i;
        var arg1$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).get(i);
        ys.set($$x7, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(arg1$5)));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_S)) {
      var x9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_S(xs, 1);
      while ((i < len)) {
        var $$x8 = i;
        var arg1$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x9).get(i);
        ys.set($$x8, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(arg1$6)));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z)) {
      var x10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_Z(xs, 1);
      while ((i < len)) {
        var $$x9 = i;
        var arg1$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x10).get(i);
        ys.set($$x9, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(arg1$7)));
        i = ((1 + i) | 0)
      }
    } else {
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(xs)
    }
  };
  var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_jl_String$();
  return this$7.new__AC__I__I__T(ys, 0, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ys).u.length)
}
function $p_Lorg_scalajs_testing_common_RPCCore__getPending$1__Ljava_io_DataInputStream__s_Option($thiz, in$1) {
  var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$1).readLong__J();
  var lo = t.RTLong__f_lo;
  var hi = t.RTLong__f_hi;
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Option$().apply__O__s_Option($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_testing_common_RPCCore__f_pending).remove__O__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi)))
}
function $ct_Lorg_scalajs_testing_common_RPCCore__s_concurrent_ExecutionContext__($thiz, ec) {
  $thiz.Lorg_scalajs_testing_common_RPCCore__f_ec = ec;
  $thiz.Lorg_scalajs_testing_common_RPCCore__f_pending = $ct_ju_concurrent_ConcurrentHashMap__(new $c_ju_concurrent_ConcurrentHashMap());
  new $c_ju_concurrent_atomic_AtomicLong($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$L0);
  $thiz.Lorg_scalajs_testing_common_RPCCore__f_endpoints = $ct_ju_concurrent_ConcurrentHashMap__(new $c_ju_concurrent_ConcurrentHashMap());
  return $thiz
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_RPCCore() {
  this.Lorg_scalajs_testing_common_RPCCore__f_ec = null;
  this.Lorg_scalajs_testing_common_RPCCore__f_pending = null;
  this.Lorg_scalajs_testing_common_RPCCore__f_endpoints = null
}
$c_Lorg_scalajs_testing_common_RPCCore.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_RPCCore.prototype.constructor = $c_Lorg_scalajs_testing_common_RPCCore;
/** @constructor */
function $h_Lorg_scalajs_testing_common_RPCCore() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_RPCCore.prototype = $c_Lorg_scalajs_testing_common_RPCCore.prototype;
$c_Lorg_scalajs_testing_common_RPCCore.prototype.handleMessage__T__V = (function(msg) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$();
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringOps$();
  var tag = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_reflect_ManifestFactory$CharManifest$();
  var x$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_reflect_ManifestFactory$CharManifest$();
  if ((tag === x$2)) {
    var xs = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__toCharArray__AC($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(msg))
  } else {
    var this$8 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_WrappedString(msg);
    var this$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$8.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self);
    if ((this$9.length >= 0)) {
      var this$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$8.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self);
      var len = this$10.length;
      var destination = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C(len);
      this$8.copyToArray__O__I__I__I(destination, 0, 2147483647);
      var xs = destination
    } else {
      var capacity = 0;
      var jsElems = null;
      capacity = 0;
      jsElems = [];
      var this$13 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sc_StringView(this$8.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self);
      var it = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sc_IndexedSeqView$IndexedSeqViewIterator(), this$13);
      while ((it.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
        var elem = it.next__O();
        var unboxedElem = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(elem);
        jsElems.push(unboxedElem)
      };
      var xs = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C(new Uint16Array(jsElems))
    }
  };
  var f = ((x$3$2) => {
    var x$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(x$3$2);
    return ((x$3 << 24) >> 24)
  });
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_reflect_ManifestFactory$ByteManifest$();
  var len$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).u.length;
  var ys = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B(len$1);
  if ((len$1 > 0)) {
    var i = 0;
    if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_O)) {
      var x2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_O(xs, 1);
      while ((i < len$1)) {
        var $$x1 = i;
        var arg1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).get(i);
        ys.set($$x1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uB(f(arg1)));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I)) {
      var x3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_I(xs, 1);
      while ((i < len$1)) {
        var $$x2 = i;
        var arg1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).get(i);
        ys.set($$x2, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uB(f(arg1$1)));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_D)) {
      var x4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_D(xs, 1);
      while ((i < len$1)) {
        var $$x3 = i;
        var arg1$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4).get(i);
        ys.set($$x3, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uB(f(arg1$2)));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_J)) {
      var x5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_J(xs, 1);
      while ((i < len$1)) {
        var $$x4 = i;
        var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5).get(i);
        var lo = t.RTLong__f_lo;
        var hi = t.RTLong__f_hi;
        ys.set($$x4, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uB(f(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi))));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_F)) {
      var x6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_F(xs, 1);
      while ((i < len$1)) {
        var $$x5 = i;
        var arg1$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x6).get(i);
        ys.set($$x5, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uB(f(arg1$3)));
        i = ((1 + i) | 0)
      }
    } else if ((xs !== null)) {
      while ((i < len$1)) {
        var $$x6 = i;
        var arg1$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).get(i);
        ys.set($$x6, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uB(f($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(arg1$4))));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B)) {
      var x8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_B(xs, 1);
      while ((i < len$1)) {
        var $$x7 = i;
        var arg1$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x8).get(i);
        ys.set($$x7, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uB(f(arg1$5)));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_S)) {
      var x9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_S(xs, 1);
      while ((i < len$1)) {
        var $$x8 = i;
        var arg1$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x9).get(i);
        ys.set($$x8, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uB(f(arg1$6)));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z)) {
      var x10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_Z(xs, 1);
      while ((i < len$1)) {
        var $$x9 = i;
        var arg1$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x10).get(i);
        ys.set($$x9, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uB(f(arg1$7)));
        i = ((1 + i) | 0)
      }
    } else {
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(xs)
    }
  };
  var in$1 = new $c_Ljava_io_DataInputStream($ct_Ljava_io_ByteArrayInputStream__AB__(new $c_Ljava_io_ByteArrayInputStream(), ys));
  try {
    var opCode = in$1.readByte__B();
    if (($m_Lorg_scalajs_testing_common_RPCCore$().Lorg_scalajs_testing_common_RPCCore$__f_org$scalajs$testing$common$RPCCore$$ReplyOK === opCode)) {
      var this$18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($p_Lorg_scalajs_testing_common_RPCCore__getPending$1__Ljava_io_DataInputStream__s_Option(this, in$1));
      if ((!this$18.isEmpty__Z())) {
        var arg1$8 = this$18.get__O();
        var p = $as_Lorg_scalajs_testing_common_RPCCore$PendingCall(arg1$8);
        var this$21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(p).promise__s_concurrent_Promise());
        try {
          var s = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(p).serializer__Lorg_scalajs_testing_common_Serializer();
          var result = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s).deserialize__Ljava_io_DataInputStream__O(in$1))
        } catch (e) {
          var e$2 = ((e instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Throwable) ? e : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException(e));
          matchEnd8: {
            var result;
            var o11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_util_control_NonFatal$().unapply__jl_Throwable__s_Option(e$2);
            if ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(o11).isEmpty__Z())) {
              var e$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Throwable($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(o11).get__O());
              var result = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure(e$3);
              break matchEnd8
            };
            throw ((e$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e$2))
          }
        };
        $f_s_concurrent_Promise__complete__s_util_Try__s_concurrent_Promise(this$21, result)
      }
    } else if (($m_Lorg_scalajs_testing_common_RPCCore$().Lorg_scalajs_testing_common_RPCCore$__f_org$scalajs$testing$common$RPCCore$$ReplyErr === opCode)) {
      var this$22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($p_Lorg_scalajs_testing_common_RPCCore__getPending$1__Ljava_io_DataInputStream__s_Option(this, in$1));
      if ((!this$22.isEmpty__Z())) {
        var arg1$9 = this$22.get__O();
        var p$3 = $as_Lorg_scalajs_testing_common_RPCCore$PendingCall(arg1$9);
        try {
          var s$1 = $m_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$();
          var x1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success(s$1.deserialize__Ljava_io_DataInputStream__jl_Throwable(in$1))
        } catch (e$1) {
          var e$2$1 = ((e$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Throwable) ? e$1 : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException(e$1));
          matchEnd8$1: {
            var x1;
            var o11$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_util_control_NonFatal$().unapply__jl_Throwable__s_Option(e$2$1);
            if ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(o11$1).isEmpty__Z())) {
              var e$3$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Throwable($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(o11$1).get__O());
              var x1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure(e$3$1);
              break matchEnd8$1
            };
            throw ((e$2$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException) ? e$2$1.sjs_js_JavaScriptException__f_exception : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e$2$1))
          }
        };
        if ((x1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success)) {
          var x2$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_util_Success(x1);
          var t$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Throwable($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2$1).s_util_Success__f_value);
          var throwable = new $c_Lorg_scalajs_testing_common_RPCCore$RPCException(t$1)
        } else {
          if ((!(x1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure))) {
            throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x1)
          };
          var x3$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_util_Failure(x1);
          var t$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3$1).s_util_Failure__f_exception;
          var throwable = t$2
        };
        var this$25 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(p$3).promise__s_concurrent_Promise());
        $f_s_concurrent_Promise__failure__jl_Throwable__s_concurrent_Promise(this$25, throwable)
      }
    } else {
      var x1$2 = $as_Lorg_scalajs_testing_common_RPCCore$BoundEndpoint($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_common_RPCCore__f_endpoints).get__O__O(opCode));
      if ((x1$2 === null)) {
        var detail = (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($m_Lorg_scalajs_testing_common_JSEndpoints$().Lorg_scalajs_testing_common_JSEndpoints$__f_msgWorker).Lorg_scalajs_testing_common_MsgEndpoint$$anon$1__f_opCode === opCode) ? "; The test adapter could not send a message to a worker, which probably happens because the worker terminated early, without waiting for the reply to a call to send(). This is probably a bug in the testing framework you are using. See also #3201." : "");
        throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IllegalStateException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IllegalStateException(), (("Unknown opcode: " + opCode) + detail))
      } else if ($is_Lorg_scalajs_testing_common_RPCCore$BoundMsgEndpoint(x1$2)) {
        var x3$2 = $as_Lorg_scalajs_testing_common_RPCCore$BoundMsgEndpoint(x1$2);
        var ep = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3$2).Lorg_scalajs_testing_common_RPCCore$$anon$1__f_endpoint;
        var $$x10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3$2).Lorg_scalajs_testing_common_RPCCore$$anon$1__f_exec;
        var s$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ep).Lorg_scalajs_testing_common_MsgEndpoint$$anon$1__f_msgSerializer;
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Void($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x10).apply__O__O($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s$2).deserialize__Ljava_io_DataInputStream__O(in$1)))
      } else if ($is_Lorg_scalajs_testing_common_RPCCore$BoundRPCEndpoint(x1$2)) {
        var x4$1 = $as_Lorg_scalajs_testing_common_RPCCore$BoundRPCEndpoint(x1$2);
        var t$3 = in$1.readLong__J();
        var lo$1 = t$3.RTLong__f_lo;
        var hi$1 = t$3.RTLong__f_hi;
        var ep$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4$1).Lorg_scalajs_testing_common_RPCCore$$anon$2__f_endpoint;
        var $$x12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_Future$();
        try {
          var s$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ep$2).Lorg_scalajs_testing_common_RPCEndpoint$$anon$2__f_reqSerializer;
          var $$x11 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s$3).deserialize__Ljava_io_DataInputStream__O(in$1))
        } catch (e$4) {
          var e$2$2 = ((e$4 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Throwable) ? e$4 : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException(e$4));
          matchEnd8$2: {
            var $$x11;
            var o11$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_util_control_NonFatal$().unapply__jl_Throwable__s_Option(e$2$2);
            if ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(o11$2).isEmpty__Z())) {
              var e$3$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Throwable($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(o11$2).get__O());
              var $$x11 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure(e$3$2);
              break matchEnd8$2
            };
            throw ((e$2$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException) ? e$2$2.sjs_js_JavaScriptException__f_exception : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e$2$2))
          }
        };
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x12).fromTry__s_util_Try__s_concurrent_Future($$x11)).flatMap__F1__s_concurrent_ExecutionContext__s_concurrent_Future($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4$1).Lorg_scalajs_testing_common_RPCCore$$anon$2__f_exec, this.Lorg_scalajs_testing_common_RPCCore__f_ec)).onComplete__F1__s_concurrent_ExecutionContext__V(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((callID) => ((repl$2) => {
          var repl = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_util_Try(repl$2);
          this.send__T__V($p_Lorg_scalajs_testing_common_RPCCore__makeReply__J__s_util_Try__Lorg_scalajs_testing_common_Serializer__T(this, callID, repl, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ep$2).Lorg_scalajs_testing_common_RPCEndpoint$$anon$2__f_respSerializer))
        }))(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo$1, hi$1))), this.Lorg_scalajs_testing_common_RPCCore__f_ec)
      } else {
        throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x1$2)
      }
    }
  } finally {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$1.Ljava_io_FilterInputStream__f_in).close__V()
  }
});
$c_Lorg_scalajs_testing_common_RPCCore.prototype.send__Lorg_scalajs_testing_common_MsgEndpoint__O__V = (function(ep, msg) {
  this.send__T__V($p_Lorg_scalajs_testing_common_RPCCore__makeMsgMsg__B__O__Lorg_scalajs_testing_common_Serializer__T(this, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ep).Lorg_scalajs_testing_common_MsgEndpoint$$anon$1__f_opCode, msg, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ep).Lorg_scalajs_testing_common_MsgEndpoint$$anon$1__f_msgSerializer))
});
$c_Lorg_scalajs_testing_common_RPCCore.prototype.attach__Lorg_scalajs_testing_common_MsgEndpoint__F1__V = (function(ep, ex) {
  $p_Lorg_scalajs_testing_common_RPCCore__attach__Lorg_scalajs_testing_common_RPCCore$BoundEndpoint__V(this, new $c_Lorg_scalajs_testing_common_RPCCore$$anon$1(this, ep, ex))
});
$c_Lorg_scalajs_testing_common_RPCCore.prototype.attach__Lorg_scalajs_testing_common_RPCEndpoint__F1__V = (function(ep, ex) {
  this.attachAsync__Lorg_scalajs_testing_common_RPCEndpoint__F1__V(ep, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((x$2) => {
    var $$x2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_Future$();
    try {
      var $$x1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ex).apply__O__O(x$2))
    } catch (e) {
      var e$2 = ((e instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Throwable) ? e : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException(e));
      matchEnd8: {
        var $$x1;
        var o11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_util_control_NonFatal$().unapply__jl_Throwable__s_Option(e$2);
        if ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(o11).isEmpty__Z())) {
          var e$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Throwable($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(o11).get__O());
          var $$x1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure(e$3);
          break matchEnd8
        };
        throw ((e$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e$2))
      }
    };
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x2).fromTry__s_util_Try__s_concurrent_Future($$x1)
  })))
});
$c_Lorg_scalajs_testing_common_RPCCore.prototype.attachAsync__Lorg_scalajs_testing_common_RPCEndpoint__F1__V = (function(ep, ex) {
  $p_Lorg_scalajs_testing_common_RPCCore__attach__Lorg_scalajs_testing_common_RPCCore$BoundEndpoint__V(this, new $c_Lorg_scalajs_testing_common_RPCCore$$anon$2(this, ep, ex))
});
$c_Lorg_scalajs_testing_common_RPCCore.prototype.detach__Lorg_scalajs_testing_common_Endpoint__V = (function(ep) {
  var old = $as_Lorg_scalajs_testing_common_RPCCore$BoundEndpoint($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_common_RPCCore__f_endpoints).remove__O__O($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ep).opCode__B()));
  var requirement = (old !== null);
  if ((!requirement)) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IllegalArgumentException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IllegalArgumentException(), "requirement failed: Endpoint was not attached.")
  }
});
/** @constructor */
function $c_Lorg_scalajs_testing_common_RPCCore$() {
  this.Lorg_scalajs_testing_common_RPCCore$__f_org$scalajs$testing$common$RPCCore$$ReplyOK = 0;
  this.Lorg_scalajs_testing_common_RPCCore$__f_org$scalajs$testing$common$RPCCore$$ReplyErr = 0;
  this.Lorg_scalajs_testing_common_RPCCore$__f_org$scalajs$testing$common$RPCCore$$ReplyOK = 0;
  this.Lorg_scalajs_testing_common_RPCCore$__f_org$scalajs$testing$common$RPCCore$$ReplyErr = 1
}
$c_Lorg_scalajs_testing_common_RPCCore$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_RPCCore$.prototype.constructor = $c_Lorg_scalajs_testing_common_RPCCore$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_RPCCore$() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_RPCCore$.prototype = $c_Lorg_scalajs_testing_common_RPCCore$.prototype;
$c_Lorg_scalajs_testing_common_RPCCore$.prototype.isReservedOpCode__B__Z = (function(opc) {
  return ((opc === this.Lorg_scalajs_testing_common_RPCCore$__f_org$scalajs$testing$common$RPCCore$$ReplyOK) || (opc === this.Lorg_scalajs_testing_common_RPCCore$__f_org$scalajs$testing$common$RPCCore$$ReplyErr))
});
var $d_Lorg_scalajs_testing_common_RPCCore$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_RPCCore$: 0
}, false, "org.scalajs.testing.common.RPCCore$", {
  Lorg_scalajs_testing_common_RPCCore$: 1,
  O: 1
});
$c_Lorg_scalajs_testing_common_RPCCore$.prototype.$classData = $d_Lorg_scalajs_testing_common_RPCCore$;
var $n_Lorg_scalajs_testing_common_RPCCore$;
function $m_Lorg_scalajs_testing_common_RPCCore$() {
  if ((!$n_Lorg_scalajs_testing_common_RPCCore$)) {
    $n_Lorg_scalajs_testing_common_RPCCore$ = new $c_Lorg_scalajs_testing_common_RPCCore$()
  };
  return $n_Lorg_scalajs_testing_common_RPCCore$
}
function $is_Lorg_scalajs_testing_common_RPCCore$BoundEndpoint(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lorg_scalajs_testing_common_RPCCore$BoundEndpoint)))
}
function $as_Lorg_scalajs_testing_common_RPCCore$BoundEndpoint(obj) {
  return (($is_Lorg_scalajs_testing_common_RPCCore$BoundEndpoint(obj) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "org.scalajs.testing.common.RPCCore$BoundEndpoint"))
}
function $isArrayOf_Lorg_scalajs_testing_common_RPCCore$BoundEndpoint(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_scalajs_testing_common_RPCCore$BoundEndpoint)))
}
function $asArrayOf_Lorg_scalajs_testing_common_RPCCore$BoundEndpoint(obj, depth) {
  return (($isArrayOf_Lorg_scalajs_testing_common_RPCCore$BoundEndpoint(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lorg.scalajs.testing.common.RPCCore$BoundEndpoint;", depth))
}
function $is_Lorg_scalajs_testing_common_RPCCore$PendingCall(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lorg_scalajs_testing_common_RPCCore$PendingCall)))
}
function $as_Lorg_scalajs_testing_common_RPCCore$PendingCall(obj) {
  return (($is_Lorg_scalajs_testing_common_RPCCore$PendingCall(obj) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "org.scalajs.testing.common.RPCCore$PendingCall"))
}
function $isArrayOf_Lorg_scalajs_testing_common_RPCCore$PendingCall(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_scalajs_testing_common_RPCCore$PendingCall)))
}
function $asArrayOf_Lorg_scalajs_testing_common_RPCCore$PendingCall(obj, depth) {
  return (($isArrayOf_Lorg_scalajs_testing_common_RPCCore$PendingCall(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lorg.scalajs.testing.common.RPCCore$PendingCall;", depth))
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_RPCEndpoint$() {
  /*<skip>*/
}
$c_Lorg_scalajs_testing_common_RPCEndpoint$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_RPCEndpoint$.prototype.constructor = $c_Lorg_scalajs_testing_common_RPCEndpoint$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_RPCEndpoint$() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_RPCEndpoint$.prototype = $c_Lorg_scalajs_testing_common_RPCEndpoint$.prototype;
$c_Lorg_scalajs_testing_common_RPCEndpoint$.prototype.apply__B__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_RPCEndpoint = (function(opc, rqs, rps) {
  var requirement = (!$m_Lorg_scalajs_testing_common_RPCCore$().isReservedOpCode__B__Z(opc));
  if ((!requirement)) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IllegalArgumentException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IllegalArgumentException(), (("requirement failed: " + "Reserved op code: ") + opc))
  };
  return new $c_Lorg_scalajs_testing_common_RPCEndpoint$$anon$2(opc, rqs, rps)
});
var $d_Lorg_scalajs_testing_common_RPCEndpoint$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_RPCEndpoint$: 0
}, false, "org.scalajs.testing.common.RPCEndpoint$", {
  Lorg_scalajs_testing_common_RPCEndpoint$: 1,
  O: 1
});
$c_Lorg_scalajs_testing_common_RPCEndpoint$.prototype.$classData = $d_Lorg_scalajs_testing_common_RPCEndpoint$;
var $n_Lorg_scalajs_testing_common_RPCEndpoint$;
function $m_Lorg_scalajs_testing_common_RPCEndpoint$() {
  if ((!$n_Lorg_scalajs_testing_common_RPCEndpoint$)) {
    $n_Lorg_scalajs_testing_common_RPCEndpoint$ = new $c_Lorg_scalajs_testing_common_RPCEndpoint$()
  };
  return $n_Lorg_scalajs_testing_common_RPCEndpoint$
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_RunMux(runId, value) {
  this.Lorg_scalajs_testing_common_RunMux__f_runId = 0;
  this.Lorg_scalajs_testing_common_RunMux__f_value = null;
  this.Lorg_scalajs_testing_common_RunMux__f_runId = runId;
  this.Lorg_scalajs_testing_common_RunMux__f_value = value
}
$c_Lorg_scalajs_testing_common_RunMux.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_RunMux.prototype.constructor = $c_Lorg_scalajs_testing_common_RunMux;
/** @constructor */
function $h_Lorg_scalajs_testing_common_RunMux() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_RunMux.prototype = $c_Lorg_scalajs_testing_common_RunMux.prototype;
function $as_Lorg_scalajs_testing_common_RunMux(obj) {
  return (((obj instanceof $c_Lorg_scalajs_testing_common_RunMux) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "org.scalajs.testing.common.RunMux"))
}
function $isArrayOf_Lorg_scalajs_testing_common_RunMux(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_scalajs_testing_common_RunMux)))
}
function $asArrayOf_Lorg_scalajs_testing_common_RunMux(obj, depth) {
  return (($isArrayOf_Lorg_scalajs_testing_common_RunMux(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lorg.scalajs.testing.common.RunMux;", depth))
}
var $d_Lorg_scalajs_testing_common_RunMux = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_RunMux: 0
}, false, "org.scalajs.testing.common.RunMux", {
  Lorg_scalajs_testing_common_RunMux: 1,
  O: 1
});
$c_Lorg_scalajs_testing_common_RunMux.prototype.$classData = $d_Lorg_scalajs_testing_common_RunMux;
function $p_Lorg_scalajs_testing_common_RunMuxRPC__attachMux__B__I__F1__F1__V($thiz, opCode, runId, ex, attach) {
  var dispatch = $as_ju_concurrent_ConcurrentHashMap($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_testing_common_RunMuxRPC__f_mux).getOrElseUpdate__O__F0__O(opCode, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0((() => $p_Lorg_scalajs_testing_common_RunMuxRPC__newDispatchMap$1__F1__ju_concurrent_ConcurrentHashMap($thiz, attach)))));
  var old = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_F1($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(dispatch).put__O__O__O(runId, ex));
  var requirement = (old === null);
  if ((!requirement)) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IllegalArgumentException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IllegalArgumentException(), (("requirement failed: " + (("Duplicate endpoint for opcode " + opCode) + " run ")) + runId))
  }
}
function $p_Lorg_scalajs_testing_common_RunMuxRPC__newDispatchMap$1__F1__ju_concurrent_ConcurrentHashMap($thiz, attach$1) {
  var dispatch = $ct_ju_concurrent_ConcurrentHashMap__(new $c_ju_concurrent_ConcurrentHashMap());
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(attach$1).apply__O__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((r$2) => {
    var r = $as_Lorg_scalajs_testing_common_RunMux(r$2);
    var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Option$().apply__O__s_Option(dispatch.get__O__O($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(r).Lorg_scalajs_testing_common_RunMux__f_runId)));
    if (this$2.isEmpty__Z()) {
      throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IllegalArgumentException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IllegalArgumentException(), ("Unknown run " + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(r).Lorg_scalajs_testing_common_RunMux__f_runId))
    } else {
      var arg1 = this$2.get__O();
      var f = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_F1(arg1);
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(f).apply__O__O($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(r).Lorg_scalajs_testing_common_RunMux__f_value)
    }
  })));
  return dispatch
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_RunMuxRPC(rpc) {
  this.Lorg_scalajs_testing_common_RunMuxRPC__f_rpc = null;
  this.Lorg_scalajs_testing_common_RunMuxRPC__f_mux = null;
  this.Lorg_scalajs_testing_common_RunMuxRPC__f_rpc = rpc;
  this.Lorg_scalajs_testing_common_RunMuxRPC__f_mux = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_scm_Map($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_scm_Map$().empty__O())
}
$c_Lorg_scalajs_testing_common_RunMuxRPC.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_RunMuxRPC.prototype.constructor = $c_Lorg_scalajs_testing_common_RunMuxRPC;
/** @constructor */
function $h_Lorg_scalajs_testing_common_RunMuxRPC() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_RunMuxRPC.prototype = $c_Lorg_scalajs_testing_common_RunMuxRPC.prototype;
$c_Lorg_scalajs_testing_common_RunMuxRPC.prototype.send__Lorg_scalajs_testing_common_MsgEndpoint__I__O__V = (function(ep, runId, msg) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_common_RunMuxRPC__f_rpc).send__Lorg_scalajs_testing_common_MsgEndpoint__O__V(ep, new $c_Lorg_scalajs_testing_common_RunMux(runId, msg))
});
$c_Lorg_scalajs_testing_common_RunMuxRPC.prototype.attach__Lorg_scalajs_testing_common_MsgEndpoint__I__F1__V = (function(ep, runId, ex) {
  $p_Lorg_scalajs_testing_common_RunMuxRPC__attachMux__B__I__F1__F1__V(this, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ep).Lorg_scalajs_testing_common_MsgEndpoint$$anon$1__f_opCode, runId, ex, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((ex$2$2) => {
    var ex$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_F1(ex$2$2);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_common_RunMuxRPC__f_rpc).attach__Lorg_scalajs_testing_common_MsgEndpoint__F1__V(ep, ex$2)
  })))
});
$c_Lorg_scalajs_testing_common_RunMuxRPC.prototype.attach__Lorg_scalajs_testing_common_RPCEndpoint__I__F1__V = (function(ep, runId, ex) {
  this.attachAsync__Lorg_scalajs_testing_common_RPCEndpoint__I__F1__V(ep, runId, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((x$2) => {
    var $$x2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_Future$();
    try {
      var $$x1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ex).apply__O__O(x$2))
    } catch (e) {
      var e$2 = ((e instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Throwable) ? e : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException(e));
      matchEnd8: {
        var $$x1;
        var o11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_util_control_NonFatal$().unapply__jl_Throwable__s_Option(e$2);
        if ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(o11).isEmpty__Z())) {
          var e$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Throwable($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(o11).get__O());
          var $$x1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure(e$3);
          break matchEnd8
        };
        throw ((e$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e$2))
      }
    };
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x2).fromTry__s_util_Try__s_concurrent_Future($$x1)
  })))
});
$c_Lorg_scalajs_testing_common_RunMuxRPC.prototype.attachAsync__Lorg_scalajs_testing_common_RPCEndpoint__I__F1__V = (function(ep, runId, ex) {
  $p_Lorg_scalajs_testing_common_RunMuxRPC__attachMux__B__I__F1__F1__V(this, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ep).Lorg_scalajs_testing_common_RPCEndpoint$$anon$2__f_opCode, runId, ex, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((ex$3$2) => {
    var ex$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_F1(ex$3$2);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_common_RunMuxRPC__f_rpc).attachAsync__Lorg_scalajs_testing_common_RPCEndpoint__F1__V(ep, ex$3)
  })))
});
$c_Lorg_scalajs_testing_common_RunMuxRPC.prototype.detach__Lorg_scalajs_testing_common_Endpoint__I__V = (function(ep, runId) {
  var opCode = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ep).opCode__B();
  var dispatch = $as_ju_concurrent_ConcurrentHashMap($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_common_RunMuxRPC__f_mux).getOrElse__O__F0__O(opCode, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0((() => {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IllegalArgumentException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IllegalArgumentException(), ("No endpoint attached for opCode " + opCode))
  }))));
  var old = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(dispatch).remove__O__O(runId);
  var requirement = (old !== null);
  if ((!requirement)) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IllegalArgumentException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IllegalArgumentException(), (("requirement failed: " + (("No endpoint attached for opCode " + opCode) + " run ")) + runId))
  };
  if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(dispatch).isEmpty__Z()) {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_common_RunMuxRPC__f_rpc).detach__Lorg_scalajs_testing_common_Endpoint__V(ep);
    var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_common_RunMuxRPC__f_mux);
    this$3.subtractOne__O__scm_Shrinkable(opCode)
  }
});
var $d_Lorg_scalajs_testing_common_RunMuxRPC = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_RunMuxRPC: 0
}, false, "org.scalajs.testing.common.RunMuxRPC", {
  Lorg_scalajs_testing_common_RunMuxRPC: 1,
  O: 1
});
$c_Lorg_scalajs_testing_common_RunMuxRPC.prototype.$classData = $d_Lorg_scalajs_testing_common_RunMuxRPC;
/** @constructor */
function $c_Lorg_scalajs_testing_common_RunnerArgs(runID, frameworkImpl, args, remoteArgs) {
  this.Lorg_scalajs_testing_common_RunnerArgs__f_runID = 0;
  this.Lorg_scalajs_testing_common_RunnerArgs__f_frameworkImpl = null;
  this.Lorg_scalajs_testing_common_RunnerArgs__f_args = null;
  this.Lorg_scalajs_testing_common_RunnerArgs__f_remoteArgs = null;
  this.Lorg_scalajs_testing_common_RunnerArgs__f_runID = runID;
  this.Lorg_scalajs_testing_common_RunnerArgs__f_frameworkImpl = frameworkImpl;
  this.Lorg_scalajs_testing_common_RunnerArgs__f_args = args;
  this.Lorg_scalajs_testing_common_RunnerArgs__f_remoteArgs = remoteArgs
}
$c_Lorg_scalajs_testing_common_RunnerArgs.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_RunnerArgs.prototype.constructor = $c_Lorg_scalajs_testing_common_RunnerArgs;
/** @constructor */
function $h_Lorg_scalajs_testing_common_RunnerArgs() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_RunnerArgs.prototype = $c_Lorg_scalajs_testing_common_RunnerArgs.prototype;
function $as_Lorg_scalajs_testing_common_RunnerArgs(obj) {
  return (((obj instanceof $c_Lorg_scalajs_testing_common_RunnerArgs) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "org.scalajs.testing.common.RunnerArgs"))
}
function $isArrayOf_Lorg_scalajs_testing_common_RunnerArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_scalajs_testing_common_RunnerArgs)))
}
function $asArrayOf_Lorg_scalajs_testing_common_RunnerArgs(obj, depth) {
  return (($isArrayOf_Lorg_scalajs_testing_common_RunnerArgs(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lorg.scalajs.testing.common.RunnerArgs;", depth))
}
var $d_Lorg_scalajs_testing_common_RunnerArgs = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_RunnerArgs: 0
}, false, "org.scalajs.testing.common.RunnerArgs", {
  Lorg_scalajs_testing_common_RunnerArgs: 1,
  O: 1
});
$c_Lorg_scalajs_testing_common_RunnerArgs.prototype.$classData = $d_Lorg_scalajs_testing_common_RunnerArgs;
/** @constructor */
function $c_Lorg_scalajs_testing_common_Serializer$() {
  /*<skip>*/
}
$c_Lorg_scalajs_testing_common_Serializer$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_Serializer$.prototype.constructor = $c_Lorg_scalajs_testing_common_Serializer$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_Serializer$() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_Serializer$.prototype = $c_Lorg_scalajs_testing_common_Serializer$.prototype;
$c_Lorg_scalajs_testing_common_Serializer$.prototype.serialize__O__Lorg_scalajs_testing_common_Serializer__T = (function(t, evidence$1) {
  var byteOut = $ct_Ljava_io_ByteArrayOutputStream__(new $c_Ljava_io_ByteArrayOutputStream());
  var dataOut = new $c_Ljava_io_DataOutputStream(byteOut);
  try {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(evidence$1).serialize__O__Ljava_io_DataOutputStream__V(t, dataOut)
  } finally {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(dataOut.Ljava_io_FilterOutputStream__f_out).close__V()
  };
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$();
  var xs = byteOut.toByteArray__AB();
  var f = ((b$2) => {
    var b = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uB(b$2);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC((65535 & (255 & b)))
  });
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_reflect_ManifestFactory$CharManifest$();
  var len = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).u.length;
  var ys = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C(len);
  if ((len > 0)) {
    var i = 0;
    if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_O)) {
      var x2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_O(xs, 1);
      while ((i < len)) {
        var $$x1 = i;
        var arg1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).get(i);
        ys.set($$x1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(arg1)));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I)) {
      var x3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_I(xs, 1);
      while ((i < len)) {
        var $$x2 = i;
        var arg1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).get(i);
        ys.set($$x2, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(arg1$1)));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_D)) {
      var x4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_D(xs, 1);
      while ((i < len)) {
        var $$x3 = i;
        var arg1$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4).get(i);
        ys.set($$x3, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(arg1$2)));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_J)) {
      var x5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_J(xs, 1);
      while ((i < len)) {
        var $$x4 = i;
        var t$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5).get(i);
        var lo = t$1.RTLong__f_lo;
        var hi = t$1.RTLong__f_hi;
        ys.set($$x4, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi))));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_F)) {
      var x6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_F(xs, 1);
      while ((i < len)) {
        var $$x5 = i;
        var arg1$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x6).get(i);
        ys.set($$x5, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(arg1$3)));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C)) {
      var x7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_C(xs, 1);
      while ((i < len)) {
        var $$x6 = i;
        var arg1$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x7).get(i);
        ys.set($$x6, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(arg1$4))));
        i = ((1 + i) | 0)
      }
    } else if ((xs !== null)) {
      while ((i < len)) {
        var $$x7 = i;
        var arg1$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).get(i);
        ys.set($$x7, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(arg1$5)));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_S)) {
      var x9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_S(xs, 1);
      while ((i < len)) {
        var $$x8 = i;
        var arg1$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x9).get(i);
        ys.set($$x8, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(arg1$6)));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z)) {
      var x10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_Z(xs, 1);
      while ((i < len)) {
        var $$x9 = i;
        var arg1$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x10).get(i);
        ys.set($$x9, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(arg1$7)));
        i = ((1 + i) | 0)
      }
    } else {
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(xs)
    }
  };
  var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_jl_String$();
  return this$7.new__AC__I__I__T(ys, 0, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ys).u.length)
});
$c_Lorg_scalajs_testing_common_Serializer$.prototype.deserialize__T__Lorg_scalajs_testing_common_Serializer__O = (function(s, evidence$2) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$();
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringOps$();
  var tag = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_reflect_ManifestFactory$CharManifest$();
  var x$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_reflect_ManifestFactory$CharManifest$();
  if ((tag === x$2)) {
    var xs = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__toCharArray__AC($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s))
  } else {
    var this$7 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_WrappedString(s);
    var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$7.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self);
    if ((this$8.length >= 0)) {
      var this$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$7.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self);
      var len = this$9.length;
      var destination = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C(len);
      this$7.copyToArray__O__I__I__I(destination, 0, 2147483647);
      var xs = destination
    } else {
      var capacity = 0;
      var jsElems = null;
      capacity = 0;
      jsElems = [];
      var this$12 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sc_StringView(this$7.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self);
      var it = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sc_IndexedSeqView$IndexedSeqViewIterator(), this$12);
      while ((it.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
        var elem = it.next__O();
        var unboxedElem = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(elem);
        jsElems.push(unboxedElem)
      };
      var xs = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C(new Uint16Array(jsElems))
    }
  };
  var f = ((x$3$2) => {
    var x$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(x$3$2);
    return ((x$3 << 24) >> 24)
  });
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_reflect_ManifestFactory$ByteManifest$();
  var len$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).u.length;
  var ys = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B(len$1);
  if ((len$1 > 0)) {
    var i = 0;
    if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_O)) {
      var x2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_O(xs, 1);
      while ((i < len$1)) {
        var $$x1 = i;
        var arg1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).get(i);
        ys.set($$x1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uB(f(arg1)));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I)) {
      var x3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_I(xs, 1);
      while ((i < len$1)) {
        var $$x2 = i;
        var arg1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).get(i);
        ys.set($$x2, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uB(f(arg1$1)));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_D)) {
      var x4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_D(xs, 1);
      while ((i < len$1)) {
        var $$x3 = i;
        var arg1$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4).get(i);
        ys.set($$x3, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uB(f(arg1$2)));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_J)) {
      var x5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_J(xs, 1);
      while ((i < len$1)) {
        var $$x4 = i;
        var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5).get(i);
        var lo = t.RTLong__f_lo;
        var hi = t.RTLong__f_hi;
        ys.set($$x4, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uB(f(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi))));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_F)) {
      var x6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_F(xs, 1);
      while ((i < len$1)) {
        var $$x5 = i;
        var arg1$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x6).get(i);
        ys.set($$x5, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uB(f(arg1$3)));
        i = ((1 + i) | 0)
      }
    } else if ((xs !== null)) {
      while ((i < len$1)) {
        var $$x6 = i;
        var arg1$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).get(i);
        ys.set($$x6, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uB(f($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(arg1$4))));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B)) {
      var x8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_B(xs, 1);
      while ((i < len$1)) {
        var $$x7 = i;
        var arg1$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x8).get(i);
        ys.set($$x7, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uB(f(arg1$5)));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_S)) {
      var x9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_S(xs, 1);
      while ((i < len$1)) {
        var $$x8 = i;
        var arg1$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x9).get(i);
        ys.set($$x8, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uB(f(arg1$6)));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z)) {
      var x10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_Z(xs, 1);
      while ((i < len$1)) {
        var $$x9 = i;
        var arg1$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x10).get(i);
        ys.set($$x9, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uB(f(arg1$7)));
        i = ((1 + i) | 0)
      }
    } else {
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(xs)
    }
  };
  var in$1 = new $c_Ljava_io_DataInputStream($ct_Ljava_io_ByteArrayInputStream__AB__(new $c_Ljava_io_ByteArrayInputStream(), ys));
  try {
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(evidence$2).deserialize__Ljava_io_DataInputStream__O(in$1)
  } finally {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$1.Ljava_io_FilterInputStream__f_in).close__V()
  }
});
var $d_Lorg_scalajs_testing_common_Serializer$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_Serializer$: 0
}, false, "org.scalajs.testing.common.Serializer$", {
  Lorg_scalajs_testing_common_Serializer$: 1,
  O: 1
});
$c_Lorg_scalajs_testing_common_Serializer$.prototype.$classData = $d_Lorg_scalajs_testing_common_Serializer$;
var $n_Lorg_scalajs_testing_common_Serializer$;
function $m_Lorg_scalajs_testing_common_Serializer$() {
  if ((!$n_Lorg_scalajs_testing_common_Serializer$)) {
    $n_Lorg_scalajs_testing_common_Serializer$ = new $c_Lorg_scalajs_testing_common_Serializer$()
  };
  return $n_Lorg_scalajs_testing_common_Serializer$
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_Serializer$SerializeState$() {
  /*<skip>*/
}
$c_Lorg_scalajs_testing_common_Serializer$SerializeState$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_Serializer$SerializeState$.prototype.constructor = $c_Lorg_scalajs_testing_common_Serializer$SerializeState$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_Serializer$SerializeState$() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_Serializer$SerializeState$.prototype = $c_Lorg_scalajs_testing_common_Serializer$SerializeState$.prototype;
$c_Lorg_scalajs_testing_common_Serializer$SerializeState$.prototype.write$extension__Ljava_io_DataOutputStream__O__Lorg_scalajs_testing_common_Serializer__V = (function(this$, t, s) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s).serialize__O__Ljava_io_DataOutputStream__V(t, this$)
});
var $d_Lorg_scalajs_testing_common_Serializer$SerializeState$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_Serializer$SerializeState$: 0
}, false, "org.scalajs.testing.common.Serializer$SerializeState$", {
  Lorg_scalajs_testing_common_Serializer$SerializeState$: 1,
  O: 1
});
$c_Lorg_scalajs_testing_common_Serializer$SerializeState$.prototype.$classData = $d_Lorg_scalajs_testing_common_Serializer$SerializeState$;
var $n_Lorg_scalajs_testing_common_Serializer$SerializeState$;
function $m_Lorg_scalajs_testing_common_Serializer$SerializeState$() {
  if ((!$n_Lorg_scalajs_testing_common_Serializer$SerializeState$)) {
    $n_Lorg_scalajs_testing_common_Serializer$SerializeState$ = new $c_Lorg_scalajs_testing_common_Serializer$SerializeState$()
  };
  return $n_Lorg_scalajs_testing_common_Serializer$SerializeState$
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_TaskInfo(serializedTask, taskDef, tags) {
  this.Lorg_scalajs_testing_common_TaskInfo__f_serializedTask = null;
  this.Lorg_scalajs_testing_common_TaskInfo__f_taskDef = null;
  this.Lorg_scalajs_testing_common_TaskInfo__f_tags = null;
  this.Lorg_scalajs_testing_common_TaskInfo__f_serializedTask = serializedTask;
  this.Lorg_scalajs_testing_common_TaskInfo__f_taskDef = taskDef;
  this.Lorg_scalajs_testing_common_TaskInfo__f_tags = tags
}
$c_Lorg_scalajs_testing_common_TaskInfo.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_TaskInfo.prototype.constructor = $c_Lorg_scalajs_testing_common_TaskInfo;
/** @constructor */
function $h_Lorg_scalajs_testing_common_TaskInfo() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_TaskInfo.prototype = $c_Lorg_scalajs_testing_common_TaskInfo.prototype;
function $as_Lorg_scalajs_testing_common_TaskInfo(obj) {
  return (((obj instanceof $c_Lorg_scalajs_testing_common_TaskInfo) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "org.scalajs.testing.common.TaskInfo"))
}
function $isArrayOf_Lorg_scalajs_testing_common_TaskInfo(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_scalajs_testing_common_TaskInfo)))
}
function $asArrayOf_Lorg_scalajs_testing_common_TaskInfo(obj, depth) {
  return (($isArrayOf_Lorg_scalajs_testing_common_TaskInfo(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lorg.scalajs.testing.common.TaskInfo;", depth))
}
var $d_Lorg_scalajs_testing_common_TaskInfo = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_TaskInfo: 0
}, false, "org.scalajs.testing.common.TaskInfo", {
  Lorg_scalajs_testing_common_TaskInfo: 1,
  O: 1
});
$c_Lorg_scalajs_testing_common_TaskInfo.prototype.$classData = $d_Lorg_scalajs_testing_common_TaskInfo;
/** @constructor */
function $c_Lorg_scalajs_testing_common_TestBridgeMode() {
  /*<skip>*/
}
$c_Lorg_scalajs_testing_common_TestBridgeMode.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_TestBridgeMode.prototype.constructor = $c_Lorg_scalajs_testing_common_TestBridgeMode;
/** @constructor */
function $h_Lorg_scalajs_testing_common_TestBridgeMode() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_TestBridgeMode.prototype = $c_Lorg_scalajs_testing_common_TestBridgeMode.prototype;
function $as_Lorg_scalajs_testing_common_TestBridgeMode(obj) {
  return (((obj instanceof $c_Lorg_scalajs_testing_common_TestBridgeMode) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "org.scalajs.testing.common.TestBridgeMode"))
}
function $isArrayOf_Lorg_scalajs_testing_common_TestBridgeMode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_scalajs_testing_common_TestBridgeMode)))
}
function $asArrayOf_Lorg_scalajs_testing_common_TestBridgeMode(obj, depth) {
  return (($isArrayOf_Lorg_scalajs_testing_common_TestBridgeMode(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lorg.scalajs.testing.common.TestBridgeMode;", depth))
}
function $is_Lsbt_testing_Event(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lsbt_testing_Event)))
}
function $as_Lsbt_testing_Event(obj) {
  return (($is_Lsbt_testing_Event(obj) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "sbt.testing.Event"))
}
function $isArrayOf_Lsbt_testing_Event(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lsbt_testing_Event)))
}
function $asArrayOf_Lsbt_testing_Event(obj, depth) {
  return (($isArrayOf_Lsbt_testing_Event(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lsbt.testing.Event;", depth))
}
function $is_Lsbt_testing_Fingerprint(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lsbt_testing_Fingerprint)))
}
function $as_Lsbt_testing_Fingerprint(obj) {
  return (($is_Lsbt_testing_Fingerprint(obj) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "sbt.testing.Fingerprint"))
}
function $isArrayOf_Lsbt_testing_Fingerprint(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lsbt_testing_Fingerprint)))
}
function $asArrayOf_Lsbt_testing_Fingerprint(obj, depth) {
  return (($isArrayOf_Lsbt_testing_Fingerprint(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lsbt.testing.Fingerprint;", depth))
}
var $d_Lsbt_testing_Fingerprint = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lsbt_testing_Fingerprint: 0
}, true, "sbt.testing.Fingerprint", {
  Lsbt_testing_Fingerprint: 1,
  O: 1
});
function $is_Lsbt_testing_Framework(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lsbt_testing_Framework)))
}
function $as_Lsbt_testing_Framework(obj) {
  return (($is_Lsbt_testing_Framework(obj) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "sbt.testing.Framework"))
}
function $isArrayOf_Lsbt_testing_Framework(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lsbt_testing_Framework)))
}
function $asArrayOf_Lsbt_testing_Framework(obj, depth) {
  return (($isArrayOf_Lsbt_testing_Framework(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lsbt.testing.Framework;", depth))
}
var $d_Lsbt_testing_Framework = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lsbt_testing_Framework: 0
}, true, "sbt.testing.Framework", {
  Lsbt_testing_Framework: 1,
  O: 1
});
function $is_Lsbt_testing_Logger(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lsbt_testing_Logger)))
}
function $as_Lsbt_testing_Logger(obj) {
  return (($is_Lsbt_testing_Logger(obj) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "sbt.testing.Logger"))
}
function $isArrayOf_Lsbt_testing_Logger(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lsbt_testing_Logger)))
}
function $asArrayOf_Lsbt_testing_Logger(obj, depth) {
  return (($isArrayOf_Lsbt_testing_Logger(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lsbt.testing.Logger;", depth))
}
var $d_Lsbt_testing_Logger = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lsbt_testing_Logger: 0
}, true, "sbt.testing.Logger", {
  Lsbt_testing_Logger: 1,
  O: 1
});
/** @constructor */
function $c_Lsbt_testing_Selector() {
  /*<skip>*/
}
$c_Lsbt_testing_Selector.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lsbt_testing_Selector.prototype.constructor = $c_Lsbt_testing_Selector;
/** @constructor */
function $h_Lsbt_testing_Selector() {
  /*<skip>*/
}
$h_Lsbt_testing_Selector.prototype = $c_Lsbt_testing_Selector.prototype;
function $as_Lsbt_testing_Selector(obj) {
  return (((obj instanceof $c_Lsbt_testing_Selector) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "sbt.testing.Selector"))
}
function $isArrayOf_Lsbt_testing_Selector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lsbt_testing_Selector)))
}
function $asArrayOf_Lsbt_testing_Selector(obj, depth) {
  return (($isArrayOf_Lsbt_testing_Selector(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lsbt.testing.Selector;", depth))
}
var $d_Lsbt_testing_Selector = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lsbt_testing_Selector: 0
}, false, "sbt.testing.Selector", {
  Lsbt_testing_Selector: 1,
  O: 1
});
$c_Lsbt_testing_Selector.prototype.$classData = $d_Lsbt_testing_Selector;
function $is_Lsbt_testing_Task(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lsbt_testing_Task)))
}
function $as_Lsbt_testing_Task(obj) {
  return (($is_Lsbt_testing_Task(obj) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "sbt.testing.Task"))
}
function $isArrayOf_Lsbt_testing_Task(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lsbt_testing_Task)))
}
function $asArrayOf_Lsbt_testing_Task(obj, depth) {
  return (($isArrayOf_Lsbt_testing_Task(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lsbt.testing.Task;", depth))
}
var $d_Lsbt_testing_Task = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lsbt_testing_Task: 0
}, true, "sbt.testing.Task", {
  Lsbt_testing_Task: 1,
  O: 1
});
/** @constructor */
function $c_sc_Factory$() {
  this.sc_Factory$__f_stringFactory = null;
  $n_sc_Factory$ = this;
  this.sc_Factory$__f_stringFactory = new $c_sc_Factory$StringFactory()
}
$c_sc_Factory$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_sc_Factory$.prototype.constructor = $c_sc_Factory$;
/** @constructor */
function $h_sc_Factory$() {
  /*<skip>*/
}
$h_sc_Factory$.prototype = $c_sc_Factory$.prototype;
var $d_sc_Factory$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  sc_Factory$: 0
}, false, "scala.collection.Factory$", {
  sc_Factory$: 1,
  O: 1
});
$c_sc_Factory$.prototype.$classData = $d_sc_Factory$;
var $n_sc_Factory$;
function $m_sc_Factory$() {
  if ((!$n_sc_Factory$)) {
    $n_sc_Factory$ = new $c_sc_Factory$()
  };
  return $n_sc_Factory$
}
/** @constructor */
function $c_scm_HashSet$Node(_key, _hash, _next) {
  this.scm_HashSet$Node__f__key = null;
  this.scm_HashSet$Node__f__hash = 0;
  this.scm_HashSet$Node__f__next = null;
  this.scm_HashSet$Node__f__key = _key;
  this.scm_HashSet$Node__f__hash = _hash;
  this.scm_HashSet$Node__f__next = _next
}
$c_scm_HashSet$Node.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_scm_HashSet$Node.prototype.constructor = $c_scm_HashSet$Node;
/** @constructor */
function $h_scm_HashSet$Node() {
  /*<skip>*/
}
$h_scm_HashSet$Node.prototype = $c_scm_HashSet$Node.prototype;
$c_scm_HashSet$Node.prototype.findNode__O__I__scm_HashSet$Node = (function(k, h) {
  var _$this = this;
  while (true) {
    if (((h === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$this).scm_HashSet$Node__f__hash) && $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_BoxesRunTime$().equals__O__O__Z(k, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$this).scm_HashSet$Node__f__key))) {
      return _$this
    } else if ((($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$this).scm_HashSet$Node__f__next === null) || ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$this).scm_HashSet$Node__f__hash > h))) {
      return null
    } else {
      _$this = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$this).scm_HashSet$Node__f__next
    }
  }
});
$c_scm_HashSet$Node.prototype.foreach__F1__V = (function(f) {
  var _$this = this;
  while (true) {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(f).apply__O__O($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$this).scm_HashSet$Node__f__key);
    if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$this).scm_HashSet$Node__f__next !== null)) {
      _$this = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$this).scm_HashSet$Node__f__next;
      continue
    };
    break
  }
});
$c_scm_HashSet$Node.prototype.toString__T = (function() {
  return ((((("Node(" + this.scm_HashSet$Node__f__key) + ", ") + this.scm_HashSet$Node__f__hash) + ") -> ") + this.scm_HashSet$Node__f__next)
});
function $as_scm_HashSet$Node(obj) {
  return (((obj instanceof $c_scm_HashSet$Node) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "scala.collection.mutable.HashSet$Node"))
}
function $isArrayOf_scm_HashSet$Node(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_HashSet$Node)))
}
function $asArrayOf_scm_HashSet$Node(obj, depth) {
  return (($isArrayOf_scm_HashSet$Node(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lscala.collection.mutable.HashSet$Node;", depth))
}
var $d_scm_HashSet$Node = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  scm_HashSet$Node: 0
}, false, "scala.collection.mutable.HashSet$Node", {
  scm_HashSet$Node: 1,
  O: 1
});
$c_scm_HashSet$Node.prototype.$classData = $d_scm_HashSet$Node;
function $f_s_concurrent_Promise__complete__s_util_Try__s_concurrent_Promise($thiz, result) {
  if ($thiz.tryComplete__s_util_Try__Z(result)) {
    return $thiz
  } else {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IllegalStateException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IllegalStateException(), "Promise already completed.")
  }
}
function $f_s_concurrent_Promise__success__O__s_concurrent_Promise($thiz, value) {
  var result = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success(value);
  return $f_s_concurrent_Promise__complete__s_util_Try__s_concurrent_Promise($thiz, result)
}
function $f_s_concurrent_Promise__failure__jl_Throwable__s_concurrent_Promise($thiz, cause) {
  var result = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure(cause);
  return $f_s_concurrent_Promise__complete__s_util_Try__s_concurrent_Promise($thiz, result)
}
function $f_s_concurrent_Promise__tryFailure__jl_Throwable__Z($thiz, cause) {
  return $thiz.tryComplete__s_util_Try__Z(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure(cause))
}
function $p_s_reflect_NameTransformer$__enterOp__C__T__V($thiz, op, code) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.s_reflect_NameTransformer$__f_op2code).set(op, code);
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(code);
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(code);
  var c = (((-97) + ((Math.imul(26, (((-97) + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$charAt(this$1, 1)) | 0)) + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$charAt(this$2, 2)) | 0)) | 0);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.s_reflect_NameTransformer$__f_code2op).set(c, new $c_s_reflect_NameTransformer$OpCodes(op, code, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.s_reflect_NameTransformer$__f_code2op).get(c)))
}
/** @constructor */
function $c_s_reflect_NameTransformer$() {
  this.s_reflect_NameTransformer$__f_nops = 0;
  this.s_reflect_NameTransformer$__f_ncodes = 0;
  this.s_reflect_NameTransformer$__f_op2code = null;
  this.s_reflect_NameTransformer$__f_code2op = null;
  $n_s_reflect_NameTransformer$ = this;
  this.s_reflect_NameTransformer$__f_nops = 128;
  this.s_reflect_NameTransformer$__f_ncodes = 676;
  this.s_reflect_NameTransformer$__f_op2code = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(this.s_reflect_NameTransformer$__f_nops);
  this.s_reflect_NameTransformer$__f_code2op = new ($d_s_reflect_NameTransformer$OpCodes.getArrayOf().constr)(this.s_reflect_NameTransformer$__f_ncodes);
  $p_s_reflect_NameTransformer$__enterOp__C__T__V(this, 126, "$tilde");
  $p_s_reflect_NameTransformer$__enterOp__C__T__V(this, 61, "$eq");
  $p_s_reflect_NameTransformer$__enterOp__C__T__V(this, 60, "$less");
  $p_s_reflect_NameTransformer$__enterOp__C__T__V(this, 62, "$greater");
  $p_s_reflect_NameTransformer$__enterOp__C__T__V(this, 33, "$bang");
  $p_s_reflect_NameTransformer$__enterOp__C__T__V(this, 35, "$hash");
  $p_s_reflect_NameTransformer$__enterOp__C__T__V(this, 37, "$percent");
  $p_s_reflect_NameTransformer$__enterOp__C__T__V(this, 94, "$up");
  $p_s_reflect_NameTransformer$__enterOp__C__T__V(this, 38, "$amp");
  $p_s_reflect_NameTransformer$__enterOp__C__T__V(this, 124, "$bar");
  $p_s_reflect_NameTransformer$__enterOp__C__T__V(this, 42, "$times");
  $p_s_reflect_NameTransformer$__enterOp__C__T__V(this, 47, "$div");
  $p_s_reflect_NameTransformer$__enterOp__C__T__V(this, 43, "$plus");
  $p_s_reflect_NameTransformer$__enterOp__C__T__V(this, 45, "$minus");
  $p_s_reflect_NameTransformer$__enterOp__C__T__V(this, 58, "$colon");
  $p_s_reflect_NameTransformer$__enterOp__C__T__V(this, 92, "$bslash");
  $p_s_reflect_NameTransformer$__enterOp__C__T__V(this, 63, "$qmark");
  $p_s_reflect_NameTransformer$__enterOp__C__T__V(this, 64, "$at")
}
$c_s_reflect_NameTransformer$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_s_reflect_NameTransformer$.prototype.constructor = $c_s_reflect_NameTransformer$;
/** @constructor */
function $h_s_reflect_NameTransformer$() {
  /*<skip>*/
}
$h_s_reflect_NameTransformer$.prototype = $c_s_reflect_NameTransformer$.prototype;
$c_s_reflect_NameTransformer$.prototype.decode__T__T = (function(name0) {
  var name = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__endsWith__T__Z($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(name0), "<init>") ? ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringOps$().stripSuffix$extension__T__T__T(name0, "<init>") + "this") : name0);
  var buf = null;
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(name);
  var len = this$2.length;
  var i = 0;
  while ((i < len)) {
    var ops = null;
    var unicode = false;
    var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(name);
    var index = i;
    var c = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$charAt(this$3, index);
    if (((c === 36) && (((2 + i) | 0) < len))) {
      var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(name);
      var index$1 = ((1 + i) | 0);
      var ch1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$charAt(this$4, index$1);
      if (((ch1 >= 97) && (ch1 <= 122))) {
        var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(name);
        var index$2 = ((2 + i) | 0);
        var ch2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$charAt(this$5, index$2);
        if (((ch2 >= 97) && (ch2 <= 122))) {
          ops = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.s_reflect_NameTransformer$__f_code2op).get((((-97) + ((Math.imul(26, (((-97) + ch1) | 0)) + ch2) | 0)) | 0));
          while (true) {
            if ((ops !== null)) {
              var this$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(name);
              var prefix = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ops).s_reflect_NameTransformer$OpCodes__f_code;
              var toffset = i;
              if (((toffset <= this$6.length) && (toffset >= 0))) {
                var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(prefix);
                var $$x3 = this$6.substring(toffset, ((toffset + this$7.length) | 0));
                var $$x2 = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($$x3) === prefix)
              } else {
                var $$x2 = false
              };
              var $$x1 = (!$$x2)
            } else {
              var $$x1 = false
            };
            if ($$x1) {
              ops = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ops).s_reflect_NameTransformer$OpCodes__f_next
            } else {
              break
            }
          };
          if ((ops !== null)) {
            if ((buf === null)) {
              buf = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_scm_StringBuilder__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_scm_StringBuilder());
              var $$x4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(buf);
              var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(name);
              var endIndex = i;
              if ((endIndex > this$8.length)) {
                $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$charAt(this$8, endIndex)
              };
              if ((endIndex < 0)) {
                $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$charAt(this$8, (-1))
              };
              $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x4).append__T__scm_StringBuilder($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$8.substring(0, endIndex)))
            };
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(buf).append__C__scm_StringBuilder($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ops).s_reflect_NameTransformer$OpCodes__f_op);
            var $$x5 = i;
            var this$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ops).s_reflect_NameTransformer$OpCodes__f_code);
            i = (($$x5 + this$9.length) | 0)
          }
        } else {
          if (((((len - i) | 0) >= 6) && (ch1 === 117))) {
            var this$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_jl_Character$();
            if (this$10.isDigit__I__Z(ch2)) {
              var $$x6 = true
            } else {
              var $$x6 = ((ch2 >= 65) && (ch2 <= 70))
            }
          } else {
            var $$x6 = false
          };
          if ($$x6) {
            var this$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(name);
            var beginIndex = ((2 + i) | 0);
            var endIndex$1 = ((6 + i) | 0);
            if ((beginIndex < 0)) {
              $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$charAt(this$11, beginIndex)
            };
            if ((endIndex$1 > this$11.length)) {
              $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$charAt(this$11, endIndex$1)
            };
            if ((endIndex$1 < beginIndex)) {
              $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$charAt(this$11, (-1))
            };
            var hex = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$11.substring(beginIndex, endIndex$1));
            try {
              var str = (65535 & $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_jl_Integer$().parseInt__T__I__I(hex, 16));
              if ((buf === null)) {
                buf = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_scm_StringBuilder__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_scm_StringBuilder());
                var $$x7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(buf);
                var this$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(name);
                var endIndex$2 = i;
                if ((endIndex$2 > this$12.length)) {
                  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$charAt(this$12, endIndex$2)
                };
                if ((endIndex$2 < 0)) {
                  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$charAt(this$12, (-1))
                };
                $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x7).append__T__scm_StringBuilder($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$12.substring(0, endIndex$2)))
              };
              $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(buf).append__C__scm_StringBuilder(str);
              i = ((6 + i) | 0);
              unicode = true
            } catch (e) {
              if ((!(e instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_NumberFormatException))) {
                throw e
              }
            }
          }
        }
      }
    };
    if (((ops === null) && (!unicode))) {
      if ((buf !== null)) {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(buf).append__C__scm_StringBuilder(c)
      };
      i = ((1 + i) | 0)
    }
  };
  if ((buf === null)) {
    return name
  } else {
    var this$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(buf);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$13.scm_StringBuilder__f_underlying).jl_StringBuilder__f_java$lang$StringBuilder$$content
  }
});
var $d_s_reflect_NameTransformer$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  s_reflect_NameTransformer$: 0
}, false, "scala.reflect.NameTransformer$", {
  s_reflect_NameTransformer$: 1,
  O: 1
});
$c_s_reflect_NameTransformer$.prototype.$classData = $d_s_reflect_NameTransformer$;
var $n_s_reflect_NameTransformer$;
function $m_s_reflect_NameTransformer$() {
  if ((!$n_s_reflect_NameTransformer$)) {
    $n_s_reflect_NameTransformer$ = new $c_s_reflect_NameTransformer$()
  };
  return $n_s_reflect_NameTransformer$
}
/** @constructor */
function $c_s_reflect_NameTransformer$OpCodes(op, code, next) {
  this.s_reflect_NameTransformer$OpCodes__f_op = 0;
  this.s_reflect_NameTransformer$OpCodes__f_code = null;
  this.s_reflect_NameTransformer$OpCodes__f_next = null;
  this.s_reflect_NameTransformer$OpCodes__f_op = op;
  this.s_reflect_NameTransformer$OpCodes__f_code = code;
  this.s_reflect_NameTransformer$OpCodes__f_next = next
}
$c_s_reflect_NameTransformer$OpCodes.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_s_reflect_NameTransformer$OpCodes.prototype.constructor = $c_s_reflect_NameTransformer$OpCodes;
/** @constructor */
function $h_s_reflect_NameTransformer$OpCodes() {
  /*<skip>*/
}
$h_s_reflect_NameTransformer$OpCodes.prototype = $c_s_reflect_NameTransformer$OpCodes.prototype;
var $d_s_reflect_NameTransformer$OpCodes = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  s_reflect_NameTransformer$OpCodes: 0
}, false, "scala.reflect.NameTransformer$OpCodes", {
  s_reflect_NameTransformer$OpCodes: 1,
  O: 1
});
$c_s_reflect_NameTransformer$OpCodes.prototype.$classData = $d_s_reflect_NameTransformer$OpCodes;
/** @constructor */
function $c_sjs_concurrent_JSExecutionContext$Implicits$() {
  this.sjs_concurrent_JSExecutionContext$Implicits$__f_queue = null;
  $n_sjs_concurrent_JSExecutionContext$Implicits$ = this;
  this.sjs_concurrent_JSExecutionContext$Implicits$__f_queue = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_concurrent_JSExecutionContext$().sjs_concurrent_JSExecutionContext$__f_queue
}
$c_sjs_concurrent_JSExecutionContext$Implicits$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_sjs_concurrent_JSExecutionContext$Implicits$.prototype.constructor = $c_sjs_concurrent_JSExecutionContext$Implicits$;
/** @constructor */
function $h_sjs_concurrent_JSExecutionContext$Implicits$() {
  /*<skip>*/
}
$h_sjs_concurrent_JSExecutionContext$Implicits$.prototype = $c_sjs_concurrent_JSExecutionContext$Implicits$.prototype;
var $d_sjs_concurrent_JSExecutionContext$Implicits$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  sjs_concurrent_JSExecutionContext$Implicits$: 0
}, false, "scala.scalajs.concurrent.JSExecutionContext$Implicits$", {
  sjs_concurrent_JSExecutionContext$Implicits$: 1,
  O: 1
});
$c_sjs_concurrent_JSExecutionContext$Implicits$.prototype.$classData = $d_sjs_concurrent_JSExecutionContext$Implicits$;
var $n_sjs_concurrent_JSExecutionContext$Implicits$;
function $m_sjs_concurrent_JSExecutionContext$Implicits$() {
  if ((!$n_sjs_concurrent_JSExecutionContext$Implicits$)) {
    $n_sjs_concurrent_JSExecutionContext$Implicits$ = new $c_sjs_concurrent_JSExecutionContext$Implicits$()
  };
  return $n_sjs_concurrent_JSExecutionContext$Implicits$
}
function $as_sjs_reflect_LoadableModuleClass(obj) {
  return ((false || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "scala.scalajs.reflect.LoadableModuleClass"))
}
function $isArrayOf_sjs_reflect_LoadableModuleClass(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_reflect_LoadableModuleClass)))
}
function $asArrayOf_sjs_reflect_LoadableModuleClass(obj, depth) {
  return (($isArrayOf_sjs_reflect_LoadableModuleClass(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lscala.scalajs.reflect.LoadableModuleClass;", depth))
}
/** @constructor */
function $c_s_util_DynamicVariable(init) {
  this.s_util_DynamicVariable__f_v = null;
  this.s_util_DynamicVariable__f_v = init
}
$c_s_util_DynamicVariable.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_s_util_DynamicVariable.prototype.constructor = $c_s_util_DynamicVariable;
/** @constructor */
function $h_s_util_DynamicVariable() {
  /*<skip>*/
}
$h_s_util_DynamicVariable.prototype = $c_s_util_DynamicVariable.prototype;
$c_s_util_DynamicVariable.prototype.toString__T = (function() {
  return (("DynamicVariable(" + this.s_util_DynamicVariable__f_v) + ")")
});
var $d_s_util_DynamicVariable = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  s_util_DynamicVariable: 0
}, false, "scala.util.DynamicVariable", {
  s_util_DynamicVariable: 1,
  O: 1
});
$c_s_util_DynamicVariable.prototype.$classData = $d_s_util_DynamicVariable;
function $sct_Lcom_novocode_junit_JUnitFramework__stinit__() {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_reflect_Reflect$().registerInstantiatableClass__T__jl_Class__sjs_js_Array__V("com.novocode.junit.JUnitFramework", $d_Lcom_novocode_junit_JUnitFramework.getClassOf(), [[[], (() => new $c_Lcom_novocode_junit_JUnitFramework())]])
}
/** @constructor */
function $c_Lcom_novocode_junit_JUnitFramework() {
  this.Lcom_novocode_junit_JUnitFramework__f_f = null;
  this.Lcom_novocode_junit_JUnitFramework__f_name = null;
  this.Lcom_novocode_junit_JUnitFramework__f_f = new $c_Lorg_scalajs_junit_JUnitFramework();
  this.Lcom_novocode_junit_JUnitFramework__f_name = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lcom_novocode_junit_JUnitFramework__f_f).Lorg_scalajs_junit_JUnitFramework__f_name
}
$c_Lcom_novocode_junit_JUnitFramework.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lcom_novocode_junit_JUnitFramework.prototype.constructor = $c_Lcom_novocode_junit_JUnitFramework;
/** @constructor */
function $h_Lcom_novocode_junit_JUnitFramework() {
  /*<skip>*/
}
$h_Lcom_novocode_junit_JUnitFramework.prototype = $c_Lcom_novocode_junit_JUnitFramework.prototype;
$c_Lcom_novocode_junit_JUnitFramework.prototype.name__T = (function() {
  return this.Lcom_novocode_junit_JUnitFramework__f_name
});
$c_Lcom_novocode_junit_JUnitFramework.prototype.fingerprints__ALsbt_testing_Fingerprint = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lcom_novocode_junit_JUnitFramework__f_f).fingerprints__ALsbt_testing_Fingerprint()
});
$c_Lcom_novocode_junit_JUnitFramework.prototype.runner__AT__AT__jl_ClassLoader__Lsbt_testing_Runner = (function(args, remoteArgs, testClassLoader) {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lcom_novocode_junit_JUnitFramework__f_f).runner__AT__AT__jl_ClassLoader__Lsbt_testing_Runner(args, remoteArgs, testClassLoader)
});
$c_Lcom_novocode_junit_JUnitFramework.prototype.slaveRunner__AT__AT__jl_ClassLoader__F1__Lsbt_testing_Runner = (function(args, remoteArgs, testClassLoader, send) {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lcom_novocode_junit_JUnitFramework__f_f).slaveRunner__AT__AT__jl_ClassLoader__F1__Lsbt_testing_Runner(args, remoteArgs, testClassLoader, send)
});
var $d_Lcom_novocode_junit_JUnitFramework = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lcom_novocode_junit_JUnitFramework: 0
}, false, "com.novocode.junit.JUnitFramework", {
  Lcom_novocode_junit_JUnitFramework: 1,
  O: 1,
  Lsbt_testing_Framework: 1
});
$c_Lcom_novocode_junit_JUnitFramework.prototype.$classData = $d_Lcom_novocode_junit_JUnitFramework;
function $ct_ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator__ju_concurrent_ConcurrentHashMap$InnerHashMap__($thiz, outer) {
  if ((outer === null)) {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(null)
  } else {
    $thiz.ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator__f_$outer = outer
  };
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(outer).java$util$concurrent$ConcurrentHashMap$InnerHashMap$$makeSnapshot__ju_ArrayList());
  $thiz.ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator__f_innerIter = this$1.listIterator__I__ju_ListIterator(0);
  return $thiz
}
/** @constructor */
function $c_ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator() {
  this.ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator__f_innerIter = null;
  this.ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator__f_lastNode = null;
  this.ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator__f_$outer = null
}
$c_ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator.prototype.constructor = $c_ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator;
/** @constructor */
function $h_ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator() {
  /*<skip>*/
}
$h_ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator.prototype = $c_ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator.prototype;
$c_ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator.prototype.hasNext__Z = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator__f_innerIter).hasNext__Z()
});
$c_ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator.prototype.next__O = (function() {
  var node = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_ju_HashMap$Node($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator__f_innerIter).next__O());
  this.ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator__f_lastNode = node;
  return this.extract__ju_HashMap$Node__O(node)
});
/** @constructor */
function $c_Lmunit_GenericAfterEach(test) {
  /*<skip>*/
}
$c_Lmunit_GenericAfterEach.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lmunit_GenericAfterEach.prototype.constructor = $c_Lmunit_GenericAfterEach;
/** @constructor */
function $h_Lmunit_GenericAfterEach() {
  /*<skip>*/
}
$h_Lmunit_GenericAfterEach.prototype = $c_Lmunit_GenericAfterEach.prototype;
var $d_Lmunit_GenericAfterEach = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lmunit_GenericAfterEach: 0
}, false, "munit.GenericAfterEach", {
  Lmunit_GenericAfterEach: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Lmunit_GenericAfterEach.prototype.$classData = $d_Lmunit_GenericAfterEach;
/** @constructor */
function $c_Lmunit_GenericBeforeEach(test) {
  /*<skip>*/
}
$c_Lmunit_GenericBeforeEach.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lmunit_GenericBeforeEach.prototype.constructor = $c_Lmunit_GenericBeforeEach;
/** @constructor */
function $h_Lmunit_GenericBeforeEach() {
  /*<skip>*/
}
$h_Lmunit_GenericBeforeEach.prototype = $c_Lmunit_GenericBeforeEach.prototype;
var $d_Lmunit_GenericBeforeEach = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lmunit_GenericBeforeEach: 0
}, false, "munit.GenericBeforeEach", {
  Lmunit_GenericBeforeEach: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Lmunit_GenericBeforeEach.prototype.$classData = $d_Lmunit_GenericBeforeEach;
/** @constructor */
function $c_Lmunit_internal_junitinterface_JUnitEvent(taskDef, fullyQualifiedName, status, selector, throwable, duration) {
  this.Lmunit_internal_junitinterface_JUnitEvent__f_taskDef = null;
  this.Lmunit_internal_junitinterface_JUnitEvent__f_fullyQualifiedName = null;
  this.Lmunit_internal_junitinterface_JUnitEvent__f_status = null;
  this.Lmunit_internal_junitinterface_JUnitEvent__f_selector = null;
  this.Lmunit_internal_junitinterface_JUnitEvent__f_throwable = null;
  this.Lmunit_internal_junitinterface_JUnitEvent__f_duration = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$L0;
  this.Lmunit_internal_junitinterface_JUnitEvent__f_taskDef = taskDef;
  this.Lmunit_internal_junitinterface_JUnitEvent__f_fullyQualifiedName = fullyQualifiedName;
  this.Lmunit_internal_junitinterface_JUnitEvent__f_status = status;
  this.Lmunit_internal_junitinterface_JUnitEvent__f_selector = selector;
  this.Lmunit_internal_junitinterface_JUnitEvent__f_throwable = throwable;
  this.Lmunit_internal_junitinterface_JUnitEvent__f_duration = duration
}
$c_Lmunit_internal_junitinterface_JUnitEvent.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lmunit_internal_junitinterface_JUnitEvent.prototype.constructor = $c_Lmunit_internal_junitinterface_JUnitEvent;
/** @constructor */
function $h_Lmunit_internal_junitinterface_JUnitEvent() {
  /*<skip>*/
}
$h_Lmunit_internal_junitinterface_JUnitEvent.prototype = $c_Lmunit_internal_junitinterface_JUnitEvent.prototype;
$c_Lmunit_internal_junitinterface_JUnitEvent.prototype.fullyQualifiedName__T = (function() {
  return this.Lmunit_internal_junitinterface_JUnitEvent__f_fullyQualifiedName
});
$c_Lmunit_internal_junitinterface_JUnitEvent.prototype.status__Lsbt_testing_Status = (function() {
  return this.Lmunit_internal_junitinterface_JUnitEvent__f_status
});
$c_Lmunit_internal_junitinterface_JUnitEvent.prototype.selector__Lsbt_testing_Selector = (function() {
  return this.Lmunit_internal_junitinterface_JUnitEvent__f_selector
});
$c_Lmunit_internal_junitinterface_JUnitEvent.prototype.throwable__Lsbt_testing_OptionalThrowable = (function() {
  return this.Lmunit_internal_junitinterface_JUnitEvent__f_throwable
});
$c_Lmunit_internal_junitinterface_JUnitEvent.prototype.duration__J = (function() {
  return this.Lmunit_internal_junitinterface_JUnitEvent__f_duration
});
$c_Lmunit_internal_junitinterface_JUnitEvent.prototype.fingerprint__Lsbt_testing_Fingerprint = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_internal_junitinterface_JUnitEvent__f_taskDef).Lsbt_testing_TaskDef__f__fingerprint
});
var $d_Lmunit_internal_junitinterface_JUnitEvent = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lmunit_internal_junitinterface_JUnitEvent: 0
}, false, "munit.internal.junitinterface.JUnitEvent", {
  Lmunit_internal_junitinterface_JUnitEvent: 1,
  O: 1,
  Lsbt_testing_Event: 1
});
$c_Lmunit_internal_junitinterface_JUnitEvent.prototype.$classData = $d_Lmunit_internal_junitinterface_JUnitEvent;
function $ct_Lmunit_internal_junitinterface_JUnitFramework__($thiz) {
  return $thiz
}
function $p_Lmunit_internal_junitinterface_JUnitFramework__parseRunSettings__AT__Lmunit_internal_junitinterface_RunSettings($thiz, args) {
  new $c_Lmunit_internal_junitinterface_Settings$$anon$1();
  var verbose = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_BooleanRef(false);
  var noColor = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_BooleanRef(false);
  var decodeScalaNames = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_BooleanRef(false);
  var logAssert = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_BooleanRef(false);
  var notLogExceptionClass = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_BooleanRef(false);
  var useSbtLoggers = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_BooleanRef(false);
  var trimStackTraces = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_BooleanRef(true);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$().s_Predef$__f_Set);
  var elem = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$EmptySet$();
  var includeTags = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_ObjectRef(elem);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$().s_Predef$__f_Set);
  var elem$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$EmptySet$();
  var excludeTags = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_ObjectRef(elem$1);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$();
  var f = ((str) => {
    var str$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(str);
    matchResult1: {
      if ((str$1 === "-v")) {
        verbose.sr_BooleanRef__f_elem = true;
        break matchResult1
      };
      if ((str$1 === "-n")) {
        noColor.sr_BooleanRef__f_elem = true;
        break matchResult1
      };
      if ((str$1 === "-s")) {
        decodeScalaNames.sr_BooleanRef__f_elem = true;
        break matchResult1
      };
      if ((str$1 === "-a")) {
        logAssert.sr_BooleanRef__f_elem = true;
        break matchResult1
      };
      if ((str$1 === "-c")) {
        notLogExceptionClass.sr_BooleanRef__f_elem = true;
        break matchResult1
      };
      var this$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(str$1);
      if (((this$14.length >= 0) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$14.substring(0, 7)) === "-tests="))) {
        throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_UnsupportedOperationException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_UnsupportedOperationException(), "-tests")
      };
      var this$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(str$1);
      if (((this$15.length >= 0) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$15.substring(0, 8)) === "--tests="))) {
        throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_UnsupportedOperationException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_UnsupportedOperationException(), "--tests")
      };
      var this$16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(str$1);
      if (((this$16.length >= 0) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$16.substring(0, 17)) === "--ignore-runners="))) {
        throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_UnsupportedOperationException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_UnsupportedOperationException(), "--ignore-runners")
      };
      var this$17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(str$1);
      if (((this$17.length >= 0) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$17.substring(0, 15)) === "--run-listener="))) {
        throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_UnsupportedOperationException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_UnsupportedOperationException(), "--run-listener")
      };
      var this$18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(str$1);
      if (((this$18.length >= 0) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$18.substring(0, 15)) === "--exclude-tags="))) {
        var this$20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Set(excludeTags.sr_ObjectRef__f_elem));
        var elem$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringOps$().stripPrefix$extension__T__T__T(str$1, "--exclude-tags=");
        var ev$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Set(this$20.incl__O__sci_SetOps(elem$2));
        excludeTags.sr_ObjectRef__f_elem = ev$8;
        break matchResult1
      };
      var this$21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(str$1);
      if (((this$21.length >= 0) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$21.substring(0, 15)) === "--include-tags="))) {
        var this$23 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Set(includeTags.sr_ObjectRef__f_elem));
        var elem$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringOps$().stripPrefix$extension__T__T__T(str$1, "--include-tags=");
        var ev$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Set(this$23.incl__O__sci_SetOps(elem$3));
        includeTags.sr_ObjectRef__f_elem = ev$9;
        break matchResult1
      };
      var this$24 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(str$1);
      if (((this$24.length >= 0) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$24.substring(0, 21)) === "--include-categories="))) {
        throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_UnsupportedOperationException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_UnsupportedOperationException(), "--include-categories")
      };
      var this$25 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(str$1);
      if (((this$25.length >= 0) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$25.substring(0, 21)) === "--exclude-categories="))) {
        throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_UnsupportedOperationException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_UnsupportedOperationException(), "--exclude-categories")
      };
      var this$26 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(str$1);
      if (((this$26.length >= 0) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$26.substring(0, 2)) === "-D"))) {
        var this$27 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(str$1);
        var $$x1 = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this$27.indexOf("=")) !== (-1))
      } else {
        var $$x1 = false
      };
      if ($$x1) {
        throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_UnsupportedOperationException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_UnsupportedOperationException(), "-Dkey=value")
      };
      var this$28 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(str$1);
      if ((!((this$28.length >= 0) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$28.substring(0, 1)) === "-")))) {
        var this$29 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(str$1);
        var $$x2 = (!((this$29.length >= 0) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$29.substring(0, 1)) === "+")))
      } else {
        var $$x2 = false
      };
      if ($$x2) {
        throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_UnsupportedOperationException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_UnsupportedOperationException(), str$1)
      }
    }
  });
  var len = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(args).u.length;
  var i = 0;
  if ((args !== null)) {
    while ((i < len)) {
      var arg1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(args).get(i);
      f(arg1);
      i = ((1 + i) | 0)
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I)) {
    var x3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_I(args, 1);
    while ((i < len)) {
      var arg1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).get(i);
      f(arg1$1);
      i = ((1 + i) | 0)
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_D)) {
    var x4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_D(args, 1);
    while ((i < len)) {
      var arg1$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4).get(i);
      f(arg1$2);
      i = ((1 + i) | 0)
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_J)) {
    var x5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_J(args, 1);
    while ((i < len)) {
      var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5).get(i);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      f(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi));
      i = ((1 + i) | 0)
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_F)) {
    var x6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_F(args, 1);
    while ((i < len)) {
      var arg1$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x6).get(i);
      f(arg1$3);
      i = ((1 + i) | 0)
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C)) {
    var x7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_C(args, 1);
    while ((i < len)) {
      var arg1$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x7).get(i);
      f($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(arg1$4));
      i = ((1 + i) | 0)
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B)) {
    var x8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_B(args, 1);
    while ((i < len)) {
      var arg1$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x8).get(i);
      f(arg1$5);
      i = ((1 + i) | 0)
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_S)) {
    var x9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_S(args, 1);
    while ((i < len)) {
      var arg1$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x9).get(i);
      f(arg1$6);
      i = ((1 + i) | 0)
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z)) {
    var x10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_Z(args, 1);
    while ((i < len)) {
      var arg1$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x10).get(i);
      f(arg1$7);
      i = ((1 + i) | 0)
    }
  } else {
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(args)
  };
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$();
  var f$1 = ((s) => {
    var s$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(s);
    if ((s$1 === "+v")) {
      verbose.sr_BooleanRef__f_elem = false
    } else if ((s$1 === "+n")) {
      noColor.sr_BooleanRef__f_elem = false
    } else if ((s$1 === "+s")) {
      decodeScalaNames.sr_BooleanRef__f_elem = false
    } else if ((s$1 === "+a")) {
      logAssert.sr_BooleanRef__f_elem = false
    } else if ((s$1 === "+c")) {
      notLogExceptionClass.sr_BooleanRef__f_elem = false
    } else if ((s$1 === "+l")) {
      useSbtLoggers.sr_BooleanRef__f_elem = true
    } else if ((s$1 === "-l")) {
      useSbtLoggers.sr_BooleanRef__f_elem = false
    } else if ((s$1 === "+F")) {
      trimStackTraces.sr_BooleanRef__f_elem = true
    } else if ((s$1 === "-F")) {
      trimStackTraces.sr_BooleanRef__f_elem = false
    }
  });
  var len$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(args).u.length;
  var i$1 = 0;
  if ((args !== null)) {
    while ((i$1 < len$1)) {
      var arg1$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(args).get(i$1);
      f$1(arg1$8);
      i$1 = ((1 + i$1) | 0)
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I)) {
    var x3$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_I(args, 1);
    while ((i$1 < len$1)) {
      var arg1$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3$1).get(i$1);
      f$1(arg1$9);
      i$1 = ((1 + i$1) | 0)
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_D)) {
    var x4$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_D(args, 1);
    while ((i$1 < len$1)) {
      var arg1$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4$1).get(i$1);
      f$1(arg1$10);
      i$1 = ((1 + i$1) | 0)
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_J)) {
    var x5$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_J(args, 1);
    while ((i$1 < len$1)) {
      var t$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5$1).get(i$1);
      var lo$1 = t$1.RTLong__f_lo;
      var hi$1 = t$1.RTLong__f_hi;
      f$1(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo$1, hi$1));
      i$1 = ((1 + i$1) | 0)
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_F)) {
    var x6$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_F(args, 1);
    while ((i$1 < len$1)) {
      var arg1$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x6$1).get(i$1);
      f$1(arg1$11);
      i$1 = ((1 + i$1) | 0)
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C)) {
    var x7$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_C(args, 1);
    while ((i$1 < len$1)) {
      var arg1$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x7$1).get(i$1);
      f$1($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(arg1$12));
      i$1 = ((1 + i$1) | 0)
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B)) {
    var x8$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_B(args, 1);
    while ((i$1 < len$1)) {
      var arg1$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x8$1).get(i$1);
      f$1(arg1$13);
      i$1 = ((1 + i$1) | 0)
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_S)) {
    var x9$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_S(args, 1);
    while ((i$1 < len$1)) {
      var arg1$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x9$1).get(i$1);
      f$1(arg1$14);
      i$1 = ((1 + i$1) | 0)
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z)) {
    var x10$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_Z(args, 1);
    while ((i$1 < len$1)) {
      var arg1$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x10$1).get(i$1);
      f$1(arg1$15);
      i$1 = ((1 + i$1) | 0)
    }
  } else {
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(args)
  };
  return new $c_Lmunit_internal_junitinterface_RunSettings((!noColor.sr_BooleanRef__f_elem), decodeScalaNames.sr_BooleanRef__f_elem, verbose.sr_BooleanRef__f_elem, logAssert.sr_BooleanRef__f_elem, notLogExceptionClass.sr_BooleanRef__f_elem, useSbtLoggers.sr_BooleanRef__f_elem, trimStackTraces.sr_BooleanRef__f_elem, new $c_Lmunit_internal_junitinterface_TagsFilter($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Set(includeTags.sr_ObjectRef__f_elem), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Set(excludeTags.sr_ObjectRef__f_elem)))
}
/** @constructor */
function $c_Lmunit_internal_junitinterface_JUnitFramework() {
  /*<skip>*/
}
$c_Lmunit_internal_junitinterface_JUnitFramework.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lmunit_internal_junitinterface_JUnitFramework.prototype.constructor = $c_Lmunit_internal_junitinterface_JUnitFramework;
/** @constructor */
function $h_Lmunit_internal_junitinterface_JUnitFramework() {
  /*<skip>*/
}
$h_Lmunit_internal_junitinterface_JUnitFramework.prototype = $c_Lmunit_internal_junitinterface_JUnitFramework.prototype;
$c_Lmunit_internal_junitinterface_JUnitFramework.prototype.fingerprints__ALsbt_testing_Fingerprint = (function() {
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_Framework__f_customRunners).Lmunit_internal_junitinterface_CustomRunners__f_runners);
  if ((this$2.knownSize__I() >= 0)) {
    var len = this$2.knownSize__I();
    var destination = new ($d_Lsbt_testing_Fingerprint.getArrayOf().constr)(len);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__copyToArray__O__I__I__I(this$2, destination, 0, 2147483647);
    return destination
  } else {
    var capacity = 0;
    var jsElems = null;
    capacity = 0;
    jsElems = [];
    var it = this$2.iterator__sc_Iterator();
    while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).hasNext__Z()) {
      var elem = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).next__O();
      var unboxedElem = ((elem === null) ? null : elem);
      jsElems.push(unboxedElem)
    };
    return new ($d_Lsbt_testing_Fingerprint.getArrayOf().constr)(jsElems)
  }
});
$c_Lmunit_internal_junitinterface_JUnitFramework.prototype.runner__AT__AT__jl_ClassLoader__Lsbt_testing_Runner = (function(args, remoteArgs, testClassLoader) {
  return new $c_Lmunit_internal_junitinterface_JUnitRunner(args, remoteArgs, $p_Lmunit_internal_junitinterface_JUnitFramework__parseRunSettings__AT__Lmunit_internal_junitinterface_RunSettings(this, args), testClassLoader, this.Lmunit_Framework__f_customRunners)
});
$c_Lmunit_internal_junitinterface_JUnitFramework.prototype.slaveRunner__AT__AT__jl_ClassLoader__F1__Lsbt_testing_Runner = (function(args, remoteArgs, testClassLoader, send) {
  return new $c_Lmunit_internal_junitinterface_JUnitRunner(args, remoteArgs, $p_Lmunit_internal_junitinterface_JUnitFramework__parseRunSettings__AT__Lmunit_internal_junitinterface_RunSettings(this, args), testClassLoader, this.Lmunit_Framework__f_customRunners)
});
/** @constructor */
function $c_Lmunit_internal_junitinterface_JUnitRunner(args, remoteArgs, runSettings, classLoader, customRunners) {
  this.Lmunit_internal_junitinterface_JUnitRunner__f_runSettings = null;
  this.Lmunit_internal_junitinterface_JUnitRunner__f_classLoader = null;
  this.Lmunit_internal_junitinterface_JUnitRunner__f_runSettings = runSettings;
  this.Lmunit_internal_junitinterface_JUnitRunner__f_classLoader = classLoader
}
$c_Lmunit_internal_junitinterface_JUnitRunner.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lmunit_internal_junitinterface_JUnitRunner.prototype.constructor = $c_Lmunit_internal_junitinterface_JUnitRunner;
/** @constructor */
function $h_Lmunit_internal_junitinterface_JUnitRunner() {
  /*<skip>*/
}
$h_Lmunit_internal_junitinterface_JUnitRunner.prototype = $c_Lmunit_internal_junitinterface_JUnitRunner.prototype;
$c_Lmunit_internal_junitinterface_JUnitRunner.prototype.tasks__ALsbt_testing_TaskDef__ALsbt_testing_Task = (function(taskDefs) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$();
  var f = ((_$1) => {
    var _$1$1 = $as_Lsbt_testing_TaskDef(_$1);
    return new $c_Lmunit_internal_junitinterface_JUnitTask(_$1$1, this.Lmunit_internal_junitinterface_JUnitRunner__f_runSettings, this.Lmunit_internal_junitinterface_JUnitRunner__f_classLoader)
  });
  var len = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(taskDefs).u.length;
  var ys = new ($d_Lsbt_testing_Task.getArrayOf().constr)(len);
  if ((len > 0)) {
    var i = 0;
    if ((taskDefs !== null)) {
      while ((i < len)) {
        var $$x1 = i;
        var arg1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(taskDefs).get(i);
        ys.set($$x1, f(arg1));
        i = ((1 + i) | 0)
      }
    } else if ((taskDefs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I)) {
      var x3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_I(taskDefs, 1);
      while ((i < len)) {
        var $$x2 = i;
        var arg1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).get(i);
        ys.set($$x2, f(arg1$1));
        i = ((1 + i) | 0)
      }
    } else if ((taskDefs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_D)) {
      var x4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_D(taskDefs, 1);
      while ((i < len)) {
        var $$x3 = i;
        var arg1$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4).get(i);
        ys.set($$x3, f(arg1$2));
        i = ((1 + i) | 0)
      }
    } else if ((taskDefs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_J)) {
      var x5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_J(taskDefs, 1);
      while ((i < len)) {
        var $$x4 = i;
        var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5).get(i);
        var lo = t.RTLong__f_lo;
        var hi = t.RTLong__f_hi;
        ys.set($$x4, f(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi)));
        i = ((1 + i) | 0)
      }
    } else if ((taskDefs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_F)) {
      var x6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_F(taskDefs, 1);
      while ((i < len)) {
        var $$x5 = i;
        var arg1$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x6).get(i);
        ys.set($$x5, f(arg1$3));
        i = ((1 + i) | 0)
      }
    } else if ((taskDefs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C)) {
      var x7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_C(taskDefs, 1);
      while ((i < len)) {
        var $$x6 = i;
        var arg1$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x7).get(i);
        ys.set($$x6, f($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(arg1$4)));
        i = ((1 + i) | 0)
      }
    } else if ((taskDefs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B)) {
      var x8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_B(taskDefs, 1);
      while ((i < len)) {
        var $$x7 = i;
        var arg1$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x8).get(i);
        ys.set($$x7, f(arg1$5));
        i = ((1 + i) | 0)
      }
    } else if ((taskDefs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_S)) {
      var x9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_S(taskDefs, 1);
      while ((i < len)) {
        var $$x8 = i;
        var arg1$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x9).get(i);
        ys.set($$x8, f(arg1$6));
        i = ((1 + i) | 0)
      }
    } else if ((taskDefs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z)) {
      var x10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_Z(taskDefs, 1);
      while ((i < len)) {
        var $$x9 = i;
        var arg1$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x10).get(i);
        ys.set($$x9, f(arg1$7));
        i = ((1 + i) | 0)
      }
    } else {
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(taskDefs)
    }
  };
  return ys
});
$c_Lmunit_internal_junitinterface_JUnitRunner.prototype.done__T = (function() {
  return ""
});
$c_Lmunit_internal_junitinterface_JUnitRunner.prototype.serializeTask__Lsbt_testing_Task__F1__T = (function(task, serializer) {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(serializer).apply__O__O($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(task).taskDef__Lsbt_testing_TaskDef()))
});
$c_Lmunit_internal_junitinterface_JUnitRunner.prototype.deserializeTask__T__F1__Lsbt_testing_Task = (function(task, deserializer) {
  return new $c_Lmunit_internal_junitinterface_JUnitTask($as_Lsbt_testing_TaskDef($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(deserializer).apply__O__O(task)), this.Lmunit_internal_junitinterface_JUnitRunner__f_runSettings, this.Lmunit_internal_junitinterface_JUnitRunner__f_classLoader)
});
$c_Lmunit_internal_junitinterface_JUnitRunner.prototype.receiveMessage__T__s_Option = (function(msg) {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()
});
var $d_Lmunit_internal_junitinterface_JUnitRunner = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lmunit_internal_junitinterface_JUnitRunner: 0
}, false, "munit.internal.junitinterface.JUnitRunner", {
  Lmunit_internal_junitinterface_JUnitRunner: 1,
  O: 1,
  Lsbt_testing_Runner: 1
});
$c_Lmunit_internal_junitinterface_JUnitRunner.prototype.$classData = $d_Lmunit_internal_junitinterface_JUnitRunner;
/** @constructor */
function $c_Lmunit_internal_junitinterface_JUnitTask(taskDef, runSettings, classLoader) {
  this.Lmunit_internal_junitinterface_JUnitTask__f_taskDef = null;
  this.Lmunit_internal_junitinterface_JUnitTask__f_runSettings = null;
  this.Lmunit_internal_junitinterface_JUnitTask__f_classLoader = null;
  this.Lmunit_internal_junitinterface_JUnitTask__f_taskDef = taskDef;
  this.Lmunit_internal_junitinterface_JUnitTask__f_runSettings = runSettings;
  this.Lmunit_internal_junitinterface_JUnitTask__f_classLoader = classLoader
}
$c_Lmunit_internal_junitinterface_JUnitTask.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lmunit_internal_junitinterface_JUnitTask.prototype.constructor = $c_Lmunit_internal_junitinterface_JUnitTask;
/** @constructor */
function $h_Lmunit_internal_junitinterface_JUnitTask() {
  /*<skip>*/
}
$h_Lmunit_internal_junitinterface_JUnitTask.prototype = $c_Lmunit_internal_junitinterface_JUnitTask.prototype;
$c_Lmunit_internal_junitinterface_JUnitTask.prototype.taskDef__Lsbt_testing_TaskDef = (function() {
  return this.Lmunit_internal_junitinterface_JUnitTask__f_taskDef
});
$c_Lmunit_internal_junitinterface_JUnitTask.prototype.tags__AT = (function() {
  return new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(0)
});
$c_Lmunit_internal_junitinterface_JUnitTask.prototype.execute__Lsbt_testing_EventHandler__ALsbt_testing_Logger__F1__V = (function(eventHandler, loggers, continuation) {
  var x1 = $m_Lmunit_internal_PlatformCompat$().newRunner__Lsbt_testing_TaskDef__jl_ClassLoader__s_Option(this.Lmunit_internal_junitinterface_JUnitTask__f_taskDef, this.Lmunit_internal_junitinterface_JUnitTask__f_classLoader);
  var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  if ((x === x1)) {
    return (void 0)
  };
  if ((x1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
    var runner = $as_Lmunit_MUnitRunner($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Some(x1)).s_Some__f_value);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(runner).filter__Lorg_junit_runner_manipulation_Filter__V($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_internal_junitinterface_JUnitTask__f_runSettings).Lmunit_internal_junitinterface_RunSettings__f_tags);
    var reporter = new $c_Lmunit_internal_junitinterface_JUnitReporter(eventHandler, loggers, this.Lmunit_internal_junitinterface_JUnitTask__f_runSettings, this.Lmunit_internal_junitinterface_JUnitTask__f_taskDef);
    var notifier = new $c_Lmunit_internal_junitinterface_MUnitRunNotifier(reporter);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(runner).runAsync__Lorg_junit_runner_notification_RunNotifier__s_concurrent_Future(notifier)).foreach__F1__s_concurrent_ExecutionContext__V(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((_$2) => {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Void(_$2);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(continuation).apply__O__O(new ($d_Lsbt_testing_Task.getArrayOf().constr)([]))
    })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_ExecutionContext$().global__s_concurrent_ExecutionContextExecutor());
    return (void 0)
  };
  throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x1)
});
var $d_Lmunit_internal_junitinterface_JUnitTask = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lmunit_internal_junitinterface_JUnitTask: 0
}, false, "munit.internal.junitinterface.JUnitTask", {
  Lmunit_internal_junitinterface_JUnitTask: 1,
  O: 1,
  Lsbt_testing_Task: 1
});
$c_Lmunit_internal_junitinterface_JUnitTask.prototype.$classData = $d_Lmunit_internal_junitinterface_JUnitTask;
/** @constructor */
function $c_Lmunit_internal_junitinterface_MUnitRunNotifier(reporter) {
  this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_reporter = null;
  this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_ignored = 0;
  this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_total = 0;
  this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_startedTimestamp = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$L0;
  this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_isFailed = null;
  this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_reporter = reporter;
  this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_ignored = 0;
  this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_total = 0;
  this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_startedTimestamp = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$L0;
  this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_isFailed = $as_scm_Set($m_scm_Set$().empty__O())
}
$c_Lmunit_internal_junitinterface_MUnitRunNotifier.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lmunit_internal_junitinterface_MUnitRunNotifier.prototype.constructor = $c_Lmunit_internal_junitinterface_MUnitRunNotifier;
/** @constructor */
function $h_Lmunit_internal_junitinterface_MUnitRunNotifier() {
  /*<skip>*/
}
$h_Lmunit_internal_junitinterface_MUnitRunNotifier.prototype = $c_Lmunit_internal_junitinterface_MUnitRunNotifier.prototype;
$c_Lmunit_internal_junitinterface_MUnitRunNotifier.prototype.fireTestSuiteStarted__Lorg_junit_runner_Description__V = (function(description) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_reporter).reportTestSuiteStarted__V()
});
$c_Lmunit_internal_junitinterface_MUnitRunNotifier.prototype.fireTestStarted__Lorg_junit_runner_Description__V = (function(description) {
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_RTLong$();
  var value = (1000000.0 * $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uD((0, $m_jl_System$NanoTime$().jl_System$NanoTime$__f_getHighPrecisionTime)()));
  var lo = this$2.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value);
  var hi = this$2.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_startedTimestamp = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_reporter).reportTestStarted__T__V($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(description).getMethodName__T())
});
$c_Lmunit_internal_junitinterface_MUnitRunNotifier.prototype.elapsedMillis__D = (function() {
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_RTLong$();
  var value = (1000000.0 * $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uD((0, $m_jl_System$NanoTime$().jl_System$NanoTime$__f_getHighPrecisionTime)()));
  var lo = this$2.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value);
  var hi = this$2.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  var b = this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_startedTimestamp;
  var bhi = b.RTLong__f_hi;
  var lo$1 = ((lo - b.RTLong__f_lo) | 0);
  var hi$1 = ((((-2147483648) ^ lo$1) > ((-2147483648) ^ lo)) ? (((-1) + ((hi - bhi) | 0)) | 0) : ((hi - bhi) | 0));
  return ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo$1, hi$1) / 1000000.0)
});
$c_Lmunit_internal_junitinterface_MUnitRunNotifier.prototype.fireTestIgnored__Lorg_junit_runner_Description__V = (function(description) {
  this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_ignored = ((1 + this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_ignored) | 0);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_reporter).reportTestIgnored__T__V($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(description).getMethodName__T())
});
$c_Lmunit_internal_junitinterface_MUnitRunNotifier.prototype.fireTestAssumptionFailed__Lorg_junit_runner_notification_Failure__V = (function(failure) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_reporter).reportAssumptionViolation__T__D__jl_Throwable__V($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(failure).Lorg_junit_runner_notification_Failure__f_description).getMethodName__T(), this.elapsedMillis__D(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(failure).Lorg_junit_runner_notification_Failure__f_ex)
});
$c_Lmunit_internal_junitinterface_MUnitRunNotifier.prototype.fireTestFailure__Lorg_junit_runner_notification_Failure__V = (function(failure) {
  var methodName = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(failure).Lorg_junit_runner_notification_Failure__f_description).getMethodName__T();
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_isFailed);
  this$1.add__O__Z(methodName);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_reporter).reportTestFailed__T__jl_Throwable__D__V(methodName, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(failure).Lorg_junit_runner_notification_Failure__f_ex, this.elapsedMillis__D())
});
$c_Lmunit_internal_junitinterface_MUnitRunNotifier.prototype.fireTestFinished__Lorg_junit_runner_Description__V = (function(description) {
  var methodName = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(description).getMethodName__T();
  this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_total = ((1 + this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_total) | 0);
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_isFailed);
  if ((!this$1.contains__O__Z(methodName))) {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_reporter).reportTestPassed__T__D__V(methodName, this.elapsedMillis__D())
  }
});
var $d_Lmunit_internal_junitinterface_MUnitRunNotifier = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lmunit_internal_junitinterface_MUnitRunNotifier: 0
}, false, "munit.internal.junitinterface.MUnitRunNotifier", {
  Lmunit_internal_junitinterface_MUnitRunNotifier: 1,
  O: 1,
  Lorg_junit_runner_notification_RunNotifier: 1
});
$c_Lmunit_internal_junitinterface_MUnitRunNotifier.prototype.$classData = $d_Lmunit_internal_junitinterface_MUnitRunNotifier;
/** @constructor */
function $c_Lmunit_internal_junitinterface_RunSettings(color, decodeScalaNames, verbose, logAssert, notLogExceptionClass, useSbtLoggers, trimStackTraces, tags) {
  this.Lmunit_internal_junitinterface_RunSettings__f_color = false;
  this.Lmunit_internal_junitinterface_RunSettings__f_decodeScalaNames = false;
  this.Lmunit_internal_junitinterface_RunSettings__f_verbose = false;
  this.Lmunit_internal_junitinterface_RunSettings__f_logAssert = false;
  this.Lmunit_internal_junitinterface_RunSettings__f_useSbtLoggers = false;
  this.Lmunit_internal_junitinterface_RunSettings__f_trimStackTraces = false;
  this.Lmunit_internal_junitinterface_RunSettings__f_tags = null;
  this.Lmunit_internal_junitinterface_RunSettings__f_color = color;
  this.Lmunit_internal_junitinterface_RunSettings__f_decodeScalaNames = decodeScalaNames;
  this.Lmunit_internal_junitinterface_RunSettings__f_verbose = verbose;
  this.Lmunit_internal_junitinterface_RunSettings__f_logAssert = logAssert;
  this.Lmunit_internal_junitinterface_RunSettings__f_useSbtLoggers = useSbtLoggers;
  this.Lmunit_internal_junitinterface_RunSettings__f_trimStackTraces = trimStackTraces;
  this.Lmunit_internal_junitinterface_RunSettings__f_tags = tags
}
$c_Lmunit_internal_junitinterface_RunSettings.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lmunit_internal_junitinterface_RunSettings.prototype.constructor = $c_Lmunit_internal_junitinterface_RunSettings;
/** @constructor */
function $h_Lmunit_internal_junitinterface_RunSettings() {
  /*<skip>*/
}
$h_Lmunit_internal_junitinterface_RunSettings.prototype = $c_Lmunit_internal_junitinterface_RunSettings.prototype;
$c_Lmunit_internal_junitinterface_RunSettings.prototype.trimStackTraces__Z = (function() {
  return this.Lmunit_internal_junitinterface_RunSettings__f_trimStackTraces
});
$c_Lmunit_internal_junitinterface_RunSettings.prototype.decodeName__T__T = (function(name) {
  if (this.Lmunit_internal_junitinterface_RunSettings__f_decodeScalaNames) {
    try {
      var $$x1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success($m_s_reflect_NameTransformer$().decode__T__T(name))
    } catch (e) {
      var e$2 = ((e instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Throwable) ? e : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException(e));
      matchEnd8: {
        var $$x1;
        var o11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_util_control_NonFatal$().unapply__jl_Throwable__s_Option(e$2);
        if ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(o11).isEmpty__Z())) {
          var e$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Throwable($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(o11).get__O());
          var $$x1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure(e$3);
          break matchEnd8
        };
        throw ((e$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e$2))
      }
    };
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x1).getOrElse__F0__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0((() => name))))
  } else {
    return name
  }
});
var $d_Lmunit_internal_junitinterface_RunSettings = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lmunit_internal_junitinterface_RunSettings: 0
}, false, "munit.internal.junitinterface.RunSettings", {
  Lmunit_internal_junitinterface_RunSettings: 1,
  O: 1,
  Lmunit_internal_junitinterface_Settings: 1
});
$c_Lmunit_internal_junitinterface_RunSettings.prototype.$classData = $d_Lmunit_internal_junitinterface_RunSettings;
/** @constructor */
function $c_Lmunit_internal_junitinterface_Settings$$anon$1() {
  /*<skip>*/
}
$c_Lmunit_internal_junitinterface_Settings$$anon$1.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lmunit_internal_junitinterface_Settings$$anon$1.prototype.constructor = $c_Lmunit_internal_junitinterface_Settings$$anon$1;
/** @constructor */
function $h_Lmunit_internal_junitinterface_Settings$$anon$1() {
  /*<skip>*/
}
$h_Lmunit_internal_junitinterface_Settings$$anon$1.prototype = $c_Lmunit_internal_junitinterface_Settings$$anon$1.prototype;
$c_Lmunit_internal_junitinterface_Settings$$anon$1.prototype.trimStackTraces__Z = (function() {
  return true
});
var $d_Lmunit_internal_junitinterface_Settings$$anon$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lmunit_internal_junitinterface_Settings$$anon$1: 0
}, false, "munit.internal.junitinterface.Settings$$anon$1", {
  Lmunit_internal_junitinterface_Settings$$anon$1: 1,
  O: 1,
  Lmunit_internal_junitinterface_Settings: 1
});
$c_Lmunit_internal_junitinterface_Settings$$anon$1.prototype.$classData = $d_Lmunit_internal_junitinterface_Settings$$anon$1;
/** @constructor */
function $c_Lmunit_internal_junitinterface_TagsFilter(include, exclude) {
  this.Lmunit_internal_junitinterface_TagsFilter__f_include = null;
  this.Lmunit_internal_junitinterface_TagsFilter__f_exclude = null;
  this.Lmunit_internal_junitinterface_TagsFilter__f_include = include;
  this.Lmunit_internal_junitinterface_TagsFilter__f_exclude = exclude
}
$c_Lmunit_internal_junitinterface_TagsFilter.prototype = new $h_Lorg_junit_runner_manipulation_Filter();
$c_Lmunit_internal_junitinterface_TagsFilter.prototype.constructor = $c_Lmunit_internal_junitinterface_TagsFilter;
/** @constructor */
function $h_Lmunit_internal_junitinterface_TagsFilter() {
  /*<skip>*/
}
$h_Lmunit_internal_junitinterface_TagsFilter.prototype = $c_Lmunit_internal_junitinterface_TagsFilter.prototype;
$c_Lmunit_internal_junitinterface_TagsFilter.prototype.shouldRun__Lorg_junit_runner_Description__Z = (function(description) {
  if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_internal_junitinterface_TagsFilter__f_include).isEmpty__Z() && $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_internal_junitinterface_TagsFilter__f_exclude).isEmpty__Z())) {
    return true
  } else {
    var elem = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_internal_junitinterface_TagsFilter__f_include).isEmpty__Z();
    var elem$1 = false;
    elem$1 = elem;
    var elem$2 = false;
    elem$2 = false;
    var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(description).Lorg_junit_runner_Description__f_annotations);
    var these = this$3;
    while ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).isEmpty__Z())) {
      var arg1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).head__O();
      var x$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_annotation_Annotation(arg1);
      if ($is_Lmunit_internal_junitinterface_Tag(x$1)) {
        var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_annotation_Annotation($as_Lmunit_internal_junitinterface_Tag(x$1));
        var ev$1 = (elem$1 || $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_internal_junitinterface_TagsFilter__f_include).contains__O__Z($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($as_Lmunit_internal_junitinterface_Tag(t)).Lmunit_Tag__f_value));
        elem$1 = ev$1;
        var ev$2 = (elem$2 || $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_internal_junitinterface_TagsFilter__f_exclude).contains__O__Z($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($as_Lmunit_internal_junitinterface_Tag(t)).Lmunit_Tag__f_value));
        elem$2 = ev$2
      };
      these = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).tail__O())
    };
    return (elem$1 && (!elem$2))
  }
});
var $d_Lmunit_internal_junitinterface_TagsFilter = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lmunit_internal_junitinterface_TagsFilter: 0
}, false, "munit.internal.junitinterface.TagsFilter", {
  Lmunit_internal_junitinterface_TagsFilter: 1,
  Lorg_junit_runner_manipulation_Filter: 1,
  O: 1
});
$c_Lmunit_internal_junitinterface_TagsFilter.prototype.$classData = $d_Lmunit_internal_junitinterface_TagsFilter;
/** @constructor */
function $c_Lorg_scalajs_junit_JUnitEvent(taskDef, status, selector, throwable, duration) {
  this.Lorg_scalajs_junit_JUnitEvent__f_taskDef = null;
  this.Lorg_scalajs_junit_JUnitEvent__f_status = null;
  this.Lorg_scalajs_junit_JUnitEvent__f_selector = null;
  this.Lorg_scalajs_junit_JUnitEvent__f_throwable = null;
  this.Lorg_scalajs_junit_JUnitEvent__f_duration = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$L0;
  this.Lorg_scalajs_junit_JUnitEvent__f_taskDef = taskDef;
  this.Lorg_scalajs_junit_JUnitEvent__f_status = status;
  this.Lorg_scalajs_junit_JUnitEvent__f_selector = selector;
  this.Lorg_scalajs_junit_JUnitEvent__f_throwable = throwable;
  this.Lorg_scalajs_junit_JUnitEvent__f_duration = duration
}
$c_Lorg_scalajs_junit_JUnitEvent.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_junit_JUnitEvent.prototype.constructor = $c_Lorg_scalajs_junit_JUnitEvent;
/** @constructor */
function $h_Lorg_scalajs_junit_JUnitEvent() {
  /*<skip>*/
}
$h_Lorg_scalajs_junit_JUnitEvent.prototype = $c_Lorg_scalajs_junit_JUnitEvent.prototype;
$c_Lorg_scalajs_junit_JUnitEvent.prototype.status__Lsbt_testing_Status = (function() {
  return this.Lorg_scalajs_junit_JUnitEvent__f_status
});
$c_Lorg_scalajs_junit_JUnitEvent.prototype.selector__Lsbt_testing_Selector = (function() {
  return this.Lorg_scalajs_junit_JUnitEvent__f_selector
});
$c_Lorg_scalajs_junit_JUnitEvent.prototype.throwable__Lsbt_testing_OptionalThrowable = (function() {
  return this.Lorg_scalajs_junit_JUnitEvent__f_throwable
});
$c_Lorg_scalajs_junit_JUnitEvent.prototype.duration__J = (function() {
  return this.Lorg_scalajs_junit_JUnitEvent__f_duration
});
$c_Lorg_scalajs_junit_JUnitEvent.prototype.fullyQualifiedName__T = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_junit_JUnitEvent__f_taskDef).Lsbt_testing_TaskDef__f__fullyQualifiedName
});
$c_Lorg_scalajs_junit_JUnitEvent.prototype.fingerprint__Lsbt_testing_Fingerprint = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_junit_JUnitEvent__f_taskDef).Lsbt_testing_TaskDef__f__fingerprint
});
var $d_Lorg_scalajs_junit_JUnitEvent = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_junit_JUnitEvent: 0
}, false, "org.scalajs.junit.JUnitEvent", {
  Lorg_scalajs_junit_JUnitEvent: 1,
  O: 1,
  Lsbt_testing_Event: 1
});
$c_Lorg_scalajs_junit_JUnitEvent.prototype.$classData = $d_Lorg_scalajs_junit_JUnitEvent;
function $p_Lorg_scalajs_junit_JUnitFramework__JUnitFingerprint__Lorg_scalajs_junit_JUnitFramework$JUnitFingerprint$($thiz) {
  if (($thiz.Lorg_scalajs_junit_JUnitFramework__f_JUnitFingerprint$module === null)) {
    $p_Lorg_scalajs_junit_JUnitFramework__JUnitFingerprint$lzycompute$1__V($thiz)
  };
  return $thiz.Lorg_scalajs_junit_JUnitFramework__f_JUnitFingerprint$module
}
function $p_Lorg_scalajs_junit_JUnitFramework__parseRunSettings__AT__Lorg_scalajs_junit_RunSettings($thiz, args) {
  var verbose = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_BooleanRef(false);
  var noColor = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_BooleanRef(false);
  var decodeScalaNames = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_BooleanRef(false);
  var logAssert = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_BooleanRef(false);
  var notLogExceptionClass = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_BooleanRef(false);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$();
  var f = ((str$2) => {
    var str = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(str$2);
    if ((str === "-v")) {
      verbose.sr_BooleanRef__f_elem = true
    } else if ((str === "-n")) {
      noColor.sr_BooleanRef__f_elem = true
    } else if ((str === "-s")) {
      decodeScalaNames.sr_BooleanRef__f_elem = true
    } else if ((str === "-a")) {
      logAssert.sr_BooleanRef__f_elem = true
    } else if ((str === "-c")) {
      notLogExceptionClass.sr_BooleanRef__f_elem = true
    } else {
      var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(str);
      if (((this$8.length >= 0) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$8.substring(0, 7)) === "-tests="))) {
        throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_UnsupportedOperationException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_UnsupportedOperationException(), "-tests")
      } else {
        var this$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(str);
        if (((this$9.length >= 0) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$9.substring(0, 8)) === "--tests="))) {
          throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_UnsupportedOperationException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_UnsupportedOperationException(), "--tests")
        } else {
          var this$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(str);
          if (((this$10.length >= 0) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$10.substring(0, 17)) === "--ignore-runners="))) {
            throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_UnsupportedOperationException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_UnsupportedOperationException(), "--ignore-runners")
          } else {
            var this$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(str);
            if (((this$11.length >= 0) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$11.substring(0, 15)) === "--run-listener="))) {
              throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_UnsupportedOperationException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_UnsupportedOperationException(), "--run-listener")
            } else {
              var this$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(str);
              if (((this$12.length >= 0) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$12.substring(0, 21)) === "--include-categories="))) {
                throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_UnsupportedOperationException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_UnsupportedOperationException(), "--include-categories")
              } else {
                var this$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(str);
                if (((this$13.length >= 0) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$13.substring(0, 21)) === "--exclude-categories="))) {
                  throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_UnsupportedOperationException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_UnsupportedOperationException(), "--exclude-categories")
                } else {
                  var this$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(str);
                  if (((this$14.length >= 0) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$14.substring(0, 2)) === "-D"))) {
                    var this$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(str);
                    var $$x1 = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this$15.indexOf("=")) !== (-1))
                  } else {
                    var $$x1 = false
                  };
                  if ($$x1) {
                    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_UnsupportedOperationException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_UnsupportedOperationException(), "-Dkey=value")
                  } else {
                    var this$16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(str);
                    if ((!((this$16.length >= 0) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$16.substring(0, 1)) === "-")))) {
                      var this$17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(str);
                      var $$x2 = (!((this$17.length >= 0) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$17.substring(0, 1)) === "+")))
                    } else {
                      var $$x2 = false
                    };
                    if ($$x2) {
                      throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_UnsupportedOperationException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_UnsupportedOperationException(), str)
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  });
  var len = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(args).u.length;
  var i = 0;
  if ((args !== null)) {
    while ((i < len)) {
      var arg1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(args).get(i);
      f(arg1);
      i = ((1 + i) | 0)
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I)) {
    var x3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_I(args, 1);
    while ((i < len)) {
      var arg1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).get(i);
      f(arg1$1);
      i = ((1 + i) | 0)
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_D)) {
    var x4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_D(args, 1);
    while ((i < len)) {
      var arg1$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4).get(i);
      f(arg1$2);
      i = ((1 + i) | 0)
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_J)) {
    var x5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_J(args, 1);
    while ((i < len)) {
      var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5).get(i);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      f(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi));
      i = ((1 + i) | 0)
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_F)) {
    var x6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_F(args, 1);
    while ((i < len)) {
      var arg1$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x6).get(i);
      f(arg1$3);
      i = ((1 + i) | 0)
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C)) {
    var x7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_C(args, 1);
    while ((i < len)) {
      var arg1$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x7).get(i);
      f($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(arg1$4));
      i = ((1 + i) | 0)
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B)) {
    var x8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_B(args, 1);
    while ((i < len)) {
      var arg1$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x8).get(i);
      f(arg1$5);
      i = ((1 + i) | 0)
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_S)) {
    var x9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_S(args, 1);
    while ((i < len)) {
      var arg1$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x9).get(i);
      f(arg1$6);
      i = ((1 + i) | 0)
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z)) {
    var x10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_Z(args, 1);
    while ((i < len)) {
      var arg1$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x10).get(i);
      f(arg1$7);
      i = ((1 + i) | 0)
    }
  } else {
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(args)
  };
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$();
  var f$1 = ((s$2) => {
    var s = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(s$2);
    if ((s === "+v")) {
      verbose.sr_BooleanRef__f_elem = false
    } else if ((s === "+n")) {
      noColor.sr_BooleanRef__f_elem = false
    } else if ((s === "+s")) {
      decodeScalaNames.sr_BooleanRef__f_elem = false
    } else if ((s === "+a")) {
      logAssert.sr_BooleanRef__f_elem = false
    } else if ((s === "+c")) {
      notLogExceptionClass.sr_BooleanRef__f_elem = false
    }
  });
  var len$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(args).u.length;
  var i$1 = 0;
  if ((args !== null)) {
    while ((i$1 < len$1)) {
      var arg1$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(args).get(i$1);
      f$1(arg1$8);
      i$1 = ((1 + i$1) | 0)
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I)) {
    var x3$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_I(args, 1);
    while ((i$1 < len$1)) {
      var arg1$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3$1).get(i$1);
      f$1(arg1$9);
      i$1 = ((1 + i$1) | 0)
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_D)) {
    var x4$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_D(args, 1);
    while ((i$1 < len$1)) {
      var arg1$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4$1).get(i$1);
      f$1(arg1$10);
      i$1 = ((1 + i$1) | 0)
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_J)) {
    var x5$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_J(args, 1);
    while ((i$1 < len$1)) {
      var t$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5$1).get(i$1);
      var lo$1 = t$1.RTLong__f_lo;
      var hi$1 = t$1.RTLong__f_hi;
      f$1(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo$1, hi$1));
      i$1 = ((1 + i$1) | 0)
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_F)) {
    var x6$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_F(args, 1);
    while ((i$1 < len$1)) {
      var arg1$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x6$1).get(i$1);
      f$1(arg1$11);
      i$1 = ((1 + i$1) | 0)
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C)) {
    var x7$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_C(args, 1);
    while ((i$1 < len$1)) {
      var arg1$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x7$1).get(i$1);
      f$1($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(arg1$12));
      i$1 = ((1 + i$1) | 0)
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B)) {
    var x8$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_B(args, 1);
    while ((i$1 < len$1)) {
      var arg1$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x8$1).get(i$1);
      f$1(arg1$13);
      i$1 = ((1 + i$1) | 0)
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_S)) {
    var x9$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_S(args, 1);
    while ((i$1 < len$1)) {
      var arg1$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x9$1).get(i$1);
      f$1(arg1$14);
      i$1 = ((1 + i$1) | 0)
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z)) {
    var x10$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_Z(args, 1);
    while ((i$1 < len$1)) {
      var arg1$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x10$1).get(i$1);
      f$1(arg1$15);
      i$1 = ((1 + i$1) | 0)
    }
  } else {
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(args)
  };
  return new $c_Lorg_scalajs_junit_RunSettings((!noColor.sr_BooleanRef__f_elem), decodeScalaNames.sr_BooleanRef__f_elem, verbose.sr_BooleanRef__f_elem, logAssert.sr_BooleanRef__f_elem, notLogExceptionClass.sr_BooleanRef__f_elem)
}
function $p_Lorg_scalajs_junit_JUnitFramework__JUnitFingerprint$lzycompute$1__V($thiz) {
  if (($thiz.Lorg_scalajs_junit_JUnitFramework__f_JUnitFingerprint$module === null)) {
    $thiz.Lorg_scalajs_junit_JUnitFramework__f_JUnitFingerprint$module = new $c_Lorg_scalajs_junit_JUnitFramework$JUnitFingerprint$($thiz)
  }
}
function $sct_Lorg_scalajs_junit_JUnitFramework__stinit__() {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_reflect_Reflect$().registerInstantiatableClass__T__jl_Class__sjs_js_Array__V("org.scalajs.junit.JUnitFramework", $d_Lorg_scalajs_junit_JUnitFramework.getClassOf(), [[[], (() => new $c_Lorg_scalajs_junit_JUnitFramework())]])
}
/** @constructor */
function $c_Lorg_scalajs_junit_JUnitFramework() {
  this.Lorg_scalajs_junit_JUnitFramework__f_JUnitFingerprint$module = null;
  this.Lorg_scalajs_junit_JUnitFramework__f_name = null;
  this.Lorg_scalajs_junit_JUnitFramework__f_name = "Scala.js JUnit test framework"
}
$c_Lorg_scalajs_junit_JUnitFramework.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_junit_JUnitFramework.prototype.constructor = $c_Lorg_scalajs_junit_JUnitFramework;
/** @constructor */
function $h_Lorg_scalajs_junit_JUnitFramework() {
  /*<skip>*/
}
$h_Lorg_scalajs_junit_JUnitFramework.prototype = $c_Lorg_scalajs_junit_JUnitFramework.prototype;
$c_Lorg_scalajs_junit_JUnitFramework.prototype.name__T = (function() {
  return this.Lorg_scalajs_junit_JUnitFramework__f_name
});
$c_Lorg_scalajs_junit_JUnitFramework.prototype.fingerprints__ALsbt_testing_Fingerprint = (function() {
  return new ($d_Lsbt_testing_Fingerprint.getArrayOf().constr)([$p_Lorg_scalajs_junit_JUnitFramework__JUnitFingerprint__Lorg_scalajs_junit_JUnitFramework$JUnitFingerprint$(this)])
});
$c_Lorg_scalajs_junit_JUnitFramework.prototype.runner__AT__AT__jl_ClassLoader__Lsbt_testing_Runner = (function(args, remoteArgs, testClassLoader) {
  return new $c_Lorg_scalajs_junit_JUnitRunner(args, remoteArgs, $p_Lorg_scalajs_junit_JUnitFramework__parseRunSettings__AT__Lorg_scalajs_junit_RunSettings(this, args))
});
$c_Lorg_scalajs_junit_JUnitFramework.prototype.slaveRunner__AT__AT__jl_ClassLoader__F1__Lsbt_testing_Runner = (function(args, remoteArgs, testClassLoader, send) {
  return new $c_Lorg_scalajs_junit_JUnitRunner(args, remoteArgs, $p_Lorg_scalajs_junit_JUnitFramework__parseRunSettings__AT__Lorg_scalajs_junit_RunSettings(this, args))
});
var $d_Lorg_scalajs_junit_JUnitFramework = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_junit_JUnitFramework: 0
}, false, "org.scalajs.junit.JUnitFramework", {
  Lorg_scalajs_junit_JUnitFramework: 1,
  O: 1,
  Lsbt_testing_Framework: 1
});
$c_Lorg_scalajs_junit_JUnitFramework.prototype.$classData = $d_Lorg_scalajs_junit_JUnitFramework;
/** @constructor */
function $c_Lorg_scalajs_junit_JUnitRunner(args, remoteArgs, runSettings) {
  this.Lorg_scalajs_junit_JUnitRunner__f_runSettings = null;
  this.Lorg_scalajs_junit_JUnitRunner__f_runSettings = runSettings
}
$c_Lorg_scalajs_junit_JUnitRunner.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_junit_JUnitRunner.prototype.constructor = $c_Lorg_scalajs_junit_JUnitRunner;
/** @constructor */
function $h_Lorg_scalajs_junit_JUnitRunner() {
  /*<skip>*/
}
$h_Lorg_scalajs_junit_JUnitRunner.prototype = $c_Lorg_scalajs_junit_JUnitRunner.prototype;
$c_Lorg_scalajs_junit_JUnitRunner.prototype.tasks__ALsbt_testing_TaskDef__ALsbt_testing_Task = (function(taskDefs) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$();
  var f = ((x$1$2) => {
    var x$1 = $as_Lsbt_testing_TaskDef(x$1$2);
    return new $c_Lorg_scalajs_junit_JUnitTask(x$1, this.Lorg_scalajs_junit_JUnitRunner__f_runSettings)
  });
  var len = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(taskDefs).u.length;
  var ys = new ($d_Lsbt_testing_Task.getArrayOf().constr)(len);
  if ((len > 0)) {
    var i = 0;
    if ((taskDefs !== null)) {
      while ((i < len)) {
        var $$x1 = i;
        var arg1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(taskDefs).get(i);
        ys.set($$x1, f(arg1));
        i = ((1 + i) | 0)
      }
    } else if ((taskDefs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I)) {
      var x3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_I(taskDefs, 1);
      while ((i < len)) {
        var $$x2 = i;
        var arg1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).get(i);
        ys.set($$x2, f(arg1$1));
        i = ((1 + i) | 0)
      }
    } else if ((taskDefs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_D)) {
      var x4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_D(taskDefs, 1);
      while ((i < len)) {
        var $$x3 = i;
        var arg1$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4).get(i);
        ys.set($$x3, f(arg1$2));
        i = ((1 + i) | 0)
      }
    } else if ((taskDefs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_J)) {
      var x5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_J(taskDefs, 1);
      while ((i < len)) {
        var $$x4 = i;
        var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5).get(i);
        var lo = t.RTLong__f_lo;
        var hi = t.RTLong__f_hi;
        ys.set($$x4, f(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi)));
        i = ((1 + i) | 0)
      }
    } else if ((taskDefs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_F)) {
      var x6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_F(taskDefs, 1);
      while ((i < len)) {
        var $$x5 = i;
        var arg1$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x6).get(i);
        ys.set($$x5, f(arg1$3));
        i = ((1 + i) | 0)
      }
    } else if ((taskDefs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C)) {
      var x7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_C(taskDefs, 1);
      while ((i < len)) {
        var $$x6 = i;
        var arg1$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x7).get(i);
        ys.set($$x6, f($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(arg1$4)));
        i = ((1 + i) | 0)
      }
    } else if ((taskDefs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B)) {
      var x8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_B(taskDefs, 1);
      while ((i < len)) {
        var $$x7 = i;
        var arg1$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x8).get(i);
        ys.set($$x7, f(arg1$5));
        i = ((1 + i) | 0)
      }
    } else if ((taskDefs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_S)) {
      var x9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_S(taskDefs, 1);
      while ((i < len)) {
        var $$x8 = i;
        var arg1$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x9).get(i);
        ys.set($$x8, f(arg1$6));
        i = ((1 + i) | 0)
      }
    } else if ((taskDefs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z)) {
      var x10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_Z(taskDefs, 1);
      while ((i < len)) {
        var $$x9 = i;
        var arg1$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x10).get(i);
        ys.set($$x9, f(arg1$7));
        i = ((1 + i) | 0)
      }
    } else {
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(taskDefs)
    }
  };
  return ys
});
$c_Lorg_scalajs_junit_JUnitRunner.prototype.done__T = (function() {
  return ""
});
$c_Lorg_scalajs_junit_JUnitRunner.prototype.serializeTask__Lsbt_testing_Task__F1__T = (function(task, serializer) {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(serializer).apply__O__O($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(task).taskDef__Lsbt_testing_TaskDef()))
});
$c_Lorg_scalajs_junit_JUnitRunner.prototype.deserializeTask__T__F1__Lsbt_testing_Task = (function(task, deserializer) {
  return new $c_Lorg_scalajs_junit_JUnitTask($as_Lsbt_testing_TaskDef($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(deserializer).apply__O__O(task)), this.Lorg_scalajs_junit_JUnitRunner__f_runSettings)
});
$c_Lorg_scalajs_junit_JUnitRunner.prototype.receiveMessage__T__s_Option = (function(msg) {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()
});
var $d_Lorg_scalajs_junit_JUnitRunner = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_junit_JUnitRunner: 0
}, false, "org.scalajs.junit.JUnitRunner", {
  Lorg_scalajs_junit_JUnitRunner: 1,
  O: 1,
  Lsbt_testing_Runner: 1
});
$c_Lorg_scalajs_junit_JUnitRunner.prototype.$classData = $d_Lorg_scalajs_junit_JUnitRunner;
function $p_Lorg_scalajs_junit_JUnitTask__executeTests__Lorg_scalajs_junit_Bootstrapper__Lorg_scalajs_junit_Reporter__s_concurrent_Future($thiz, bootstrapper, reporter) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(reporter).reportRunStarted__V();
  var failed = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_IntRef(0);
  var ignored = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_IntRef(0);
  var total = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_IntRef(0);
  var after = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((x$6$2) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Void(x$6$2);
    try {
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(bootstrapper).afterClass__V(), (void 0)))
    } catch (e) {
      var e$1 = e;
      var e$2 = ((e$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Throwable) ? e$1 : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException(e$1));
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure(e$2)
    }
  }));
  var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_RTLong$();
  var value = (1000000.0 * $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uD((0, $m_jl_System$NanoTime$().jl_System$NanoTime$__f_getHighPrecisionTime)()));
  var lo = this$7.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value);
  var hi = this$7.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  var x1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success((void 0));
  var x = x1.s_util_Success__f_value;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Void(x);
  try {
    var x1$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(bootstrapper).beforeClass__V(), (void 0)))
  } catch (e$3) {
    var e$4 = e$3;
    var e$2$1 = ((e$4 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Throwable) ? e$4 : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException(e$4));
    var x1$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure(e$2$1)
  };
  matchEnd7: {
    var bodyFuture;
    if ((x1$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success)) {
      var x2$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_util_Success(x1$2);
      var p3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Void($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2$2).s_util_Success__f_value);
      if ((p3 === (void 0))) {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Void(x);
        var this$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$().wrapRefArray__AO__scm_ArraySeq$ofRef($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(bootstrapper).tests__ALorg_scalajs_junit_TestMetadata()));
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_List$();
        var bodyFuture = $p_Lorg_scalajs_junit_JUnitTask__runTests$1__sci_List__Lorg_scalajs_junit_Reporter__sr_IntRef__sr_IntRef__Lorg_scalajs_junit_Bootstrapper__sr_IntRef__s_concurrent_Future($thiz, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(this$9), reporter, ignored, total, bootstrapper, failed);
        break matchEnd7
      }
    };
    if ((x1$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure)) {
      var x4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_util_Failure(x1$2);
      var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4).s_util_Failure__f_exception;
      var bodyFuture = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_Future$().successful__O__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure(t));
      break matchEnd7
    };
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x1$2)
  };
  var exceptions = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(bodyFuture).map__F1__s_concurrent_ExecutionContext__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((bodyResult$2) => {
    var bodyResult = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_util_Try(bodyResult$2);
    var afterException = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_util_Try(after.apply__O__O(x))).failed__s_util_Try()).toOption__s_Option();
    var this$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(bodyResult).failed__s_util_Try()).toOption__s_Option()).toList__sci_List());
    var suffix = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(afterException).toList__sci_List();
    return this$12.appendedAll__sc_IterableOnce__sci_List(suffix)
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_ExecutionContext$().global__s_concurrent_ExecutionContextExecutor());
  var result = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(exceptions).map__F1__s_concurrent_ExecutionContext__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((startTime) => ((es$2) => {
    var es = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(es$2);
    var this$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_RTLong$();
    var value$1 = (1000000.0 * $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uD((0, $m_jl_System$NanoTime$().jl_System$NanoTime$__f_getHighPrecisionTime)()));
    var lo$1 = this$15.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value$1);
    var hi$1 = this$15.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    var bhi = startTime.RTLong__f_hi;
    var lo$2 = ((lo$1 - startTime.RTLong__f_lo) | 0);
    var hi$2 = ((((-2147483648) ^ lo$2) > ((-2147483648) ^ lo$1)) ? (((-1) + ((hi$1 - bhi) | 0)) | 0) : ((hi$1 - bhi) | 0));
    var timeInSeconds = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo$2, hi$2) / 1.0E9);
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(es, timeInSeconds)
  }))(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_ExecutionContext$().global__s_concurrent_ExecutionContextExecutor());
  var this$19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(result);
  var p = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((check$ifrefutable$1$2) => {
    var check$ifrefutable$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(check$ifrefutable$1$2);
    return (check$ifrefutable$1 !== null)
  }));
  var executor = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_ExecutionContext$().global__s_concurrent_ExecutionContextExecutor();
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$19.filter__F1__s_concurrent_ExecutionContext__s_concurrent_Future(p, executor)).map__F1__s_concurrent_ExecutionContext__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((x$7$2) => {
    var x$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$7$2);
    if ((x$7 !== null)) {
      var errors = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$7).T2__f__1);
      var this$20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$7);
      var timeInSeconds$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uD(this$20.T2__f__2);
      failed.sr_IntRef__f_elem = ((failed.sr_IntRef__f_elem + $p_Lorg_scalajs_junit_JUnitTask__reportExecutionErrors__Lorg_scalajs_junit_Reporter__s_Option__D__sci_List__I($thiz, reporter, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), timeInSeconds$1, errors)) | 0);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(reporter).reportRunFinished__I__I__I__D__V(failed.sr_IntRef__f_elem, ignored.sr_IntRef__f_elem, total.sr_IntRef__f_elem, timeInSeconds$1)
    } else {
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$7)
    }
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_ExecutionContext$().global__s_concurrent_ExecutionContextExecutor())
}
function $p_Lorg_scalajs_junit_JUnitTask__executeTestMethod__Lorg_scalajs_junit_Bootstrapper__Lorg_scalajs_junit_TestMetadata__Lorg_scalajs_junit_Reporter__s_concurrent_Future($thiz, bootstrapper, test, reporter) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(reporter).reportTestStarted__T__V($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(test).name__T());
  var after = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((instance$4$2) => {
    try {
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(bootstrapper).after__O__V(instance$4$2), (void 0)))
    } catch (e) {
      var e$1 = e;
      var e$2 = ((e$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Throwable) ? e$1 : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException(e$1));
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure(e$2)
    }
  }));
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_RTLong$();
  var value = (1000000.0 * $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uD((0, $m_jl_System$NanoTime$().jl_System$NanoTime$__f_getHighPrecisionTime)()));
  var lo = this$3.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value);
  var hi = this$3.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  try {
    var x1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(bootstrapper).newInstance__O())
  } catch (e$3) {
    var e$4 = e$3;
    var e$2$1 = ((e$4 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Throwable) ? e$4 : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException(e$4));
    var x1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure(e$2$1)
  };
  if ((x1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success)) {
    var x2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_util_Success(x1);
    var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).s_util_Success__f_value;
    try {
      var x1$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(bootstrapper).before__O__V(x), (void 0)))
    } catch (e$5) {
      var e$6 = e$5;
      var e$2$2 = ((e$6 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Throwable) ? e$6 : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException(e$6));
      var x1$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure(e$2$2)
    };
    matchEnd7: {
      var bodyFuture;
      if ((x1$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success)) {
        var x2$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_util_Success(x1$2);
        var p3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Void($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2$2).s_util_Success__f_value);
        if ((p3 === (void 0))) {
          var expectedException = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(test).annotation__Lorg_junit_Test()).expected__jl_Class();
          var f$1 = (() => {
            try {
              var x1$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(bootstrapper).invokeTest__O__T__s_concurrent_Future(x, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(test).name__T()))
            } catch (e$7) {
              var e$8 = e$7;
              var e$2$3 = ((e$8 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Throwable) ? e$8 : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException(e$8));
              var x1$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure(e$2$3)
            };
            if ((x1$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success)) {
              var x2$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_util_Success(x1$1);
              var f = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_concurrent_Future($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2$1).s_util_Success__f_value);
              return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(f).recover__s_PartialFunction__s_concurrent_ExecutionContext__s_concurrent_Future(new $c_Lorg_scalajs_junit_JUnitTask$$anonfun$$nestedInanonfun$executeTestMethod$6$1($thiz), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_ExecutionContext$().global__s_concurrent_ExecutionContextExecutor())
            } else if ((x1$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure)) {
              var x3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_util_Failure(x1$1);
              var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).s_util_Failure__f_exception;
              return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_Future$().successful__O__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure(t))
            } else {
              throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x1$1)
            }
          });
          if ((expectedException !== null)) {
            var this$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(expectedException);
            var $$x1 = (this$10 === $d_Lorg_junit_Test$None.getClassOf())
          } else {
            var $$x1 = false
          };
          var wantException = (!$$x1);
          var bodyFuture = (wantException ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_concurrent_Future(f$1())).map__F1__s_concurrent_ExecutionContext__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((r$2) => {
            var r = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_util_Try(r$2);
            var rc7 = false;
            var x4 = null;
            if ((r instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success)) {
              return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_AssertionError__O__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_AssertionError(), ("Expected exception: " + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(expectedException).getName__T())))
            };
            if ((r instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure)) {
              rc7 = true;
              x4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_util_Failure(r);
              var t$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4).s_util_Failure__f_exception;
              if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(expectedException).isInstance__O__Z(t$1)) {
                return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success((void 0))
              }
            };
            if (rc7) {
              var t$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4).s_util_Failure__f_exception;
              var expName = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(expectedException).getName__T();
              var this$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t$2);
              var gotName = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$objectGetClass(this$12).getName__T();
              return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_Exception__T__jl_Throwable__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Exception(), (((("Unexpected exception, expected<" + expName) + "> but was<") + gotName) + ">"), t$2))
            };
            throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(r)
          })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_ExecutionContext$().global__s_concurrent_ExecutionContextExecutor()) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_concurrent_Future(f$1()));
          break matchEnd7
        }
      };
      if ((x1$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure)) {
        var x4$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_util_Failure(x1$2);
        var t$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4$1).s_util_Failure__f_exception;
        var bodyFuture = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_Future$().successful__O__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure(t$3));
        break matchEnd7
      };
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x1$2)
    };
    var exceptions = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(bodyFuture).map__F1__s_concurrent_ExecutionContext__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((bodyResult$2) => {
      var bodyResult = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_util_Try(bodyResult$2);
      var afterException = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_util_Try(after.apply__O__O(x))).failed__s_util_Try()).toOption__s_Option();
      var this$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(bodyResult).failed__s_util_Try()).toOption__s_Option()).toList__sci_List());
      var suffix = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(afterException).toList__sci_List();
      return this$15.appendedAll__sc_IterableOnce__sci_List(suffix)
    })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_ExecutionContext$().global__s_concurrent_ExecutionContextExecutor())
  } else {
    if ((!(x1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure))) {
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x1)
    };
    var x3$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_util_Failure(x1);
    var t$2$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3$1).s_util_Failure__f_exception;
    var $$x2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_Future$();
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_package$().s_package$__f_List);
    var array = [t$2$1];
    var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_WrappedVarArgs(), array);
    var exceptions = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x2).successful__O__s_concurrent_Future($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems))
  };
  var result = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(exceptions).map__F1__s_concurrent_ExecutionContext__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((startTime) => ((es$2) => {
    var es = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(es$2);
    var this$22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_RTLong$();
    var value$1 = (1000000.0 * $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uD((0, $m_jl_System$NanoTime$().jl_System$NanoTime$__f_getHighPrecisionTime)()));
    var lo$1 = this$22.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value$1);
    var hi$1 = this$22.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    var bhi = startTime.RTLong__f_hi;
    var lo$2 = ((lo$1 - startTime.RTLong__f_lo) | 0);
    var hi$2 = ((((-2147483648) ^ lo$2) > ((-2147483648) ^ lo$1)) ? (((-1) + ((hi$1 - bhi) | 0)) | 0) : ((hi$1 - bhi) | 0));
    var timeInSeconds = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo$2, hi$2) / 1.0E9);
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(es, timeInSeconds)
  }))(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_ExecutionContext$().global__s_concurrent_ExecutionContextExecutor());
  var this$26 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(result);
  var p = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((check$ifrefutable$2$2) => {
    var check$ifrefutable$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(check$ifrefutable$2$2);
    return (check$ifrefutable$2 !== null)
  }));
  var executor = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_ExecutionContext$().global__s_concurrent_ExecutionContextExecutor();
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$26.filter__F1__s_concurrent_ExecutionContext__s_concurrent_Future(p, executor)).map__F1__s_concurrent_ExecutionContext__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((x$9$2) => {
    var x$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$9$2);
    if ((x$9 !== null)) {
      var errors = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$9).T2__f__1);
      var this$27 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$9);
      var timeInSeconds$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uD(this$27.T2__f__2);
      var failed = $p_Lorg_scalajs_junit_JUnitTask__reportExecutionErrors__Lorg_scalajs_junit_Reporter__s_Option__D__sci_List__I($thiz, reporter, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(test).name__T()), timeInSeconds$1, errors);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(reporter).reportTestFinished__T__Z__D__V($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(test).name__T(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(errors).isEmpty__Z(), timeInSeconds$1);
      var t$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(test).annotation__Lorg_junit_Test()).timeout__J();
      var lo$3 = t$4.RTLong__f_lo;
      var hi$3 = t$4.RTLong__f_hi;
      if (((!((lo$3 === 0) && (hi$3 === 0))) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo$3, hi$3) <= timeInSeconds$1))) {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(reporter).log__F1__T__V(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((x$8$2) => {
          var x$8 = $as_Lsbt_testing_Logger(x$8$2);
          return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((msg$2) => {
            var msg = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(msg$2);
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$8).warn__T__V(msg)
          }))
        })), (((("Timeout: took " + timeInSeconds$1) + " sec, expected ") + ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo$3, hi$3) / 1000.0)) + " sec"))
      };
      return failed
    } else {
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$9)
    }
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_ExecutionContext$().global__s_concurrent_ExecutionContextExecutor())
}
function $p_Lorg_scalajs_junit_JUnitTask__reportExecutionErrors__Lorg_scalajs_junit_Reporter__s_Option__D__sci_List__I($thiz, reporter, method, timeInSeconds, errors) {
  var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_package$().s_package$__f_Nil;
  if (((x === null) ? (errors === null) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).equals__O__Z(errors))) {
    return 0
  };
  if ((errors instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon)) {
    var x2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_$colon$colon(errors);
    var e = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Throwable($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).sci_$colon$colon__f_head);
    var p3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).sci_$colon$colon__f_next;
    if (false) {
      var x5 = $as_Lorg_junit_internal_AssumptionViolatedException(e);
      var x$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_package$().s_package$__f_Nil;
      if (((x$3 === null) ? (p3 === null) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$3).equals__O__Z(p3))) {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(reporter).reportAssumptionViolation__s_Option__D__jl_Throwable__V(method, timeInSeconds, x5);
        return 0
      }
    }
  };
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(errors);
  var f = ((x0$1$2) => {
    var x0$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Throwable(x0$1$2);
    if (false) {
      var x2$1 = $as_Lorg_junit_internal_AssumptionViolatedException(x0$1);
      return new $c_Lorg_junit_TestCouldNotBeSkippedException(x2$1)
    } else {
      return x0$1
    }
  });
  if ((this$2 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
    var errorsPatchedForAssumptionViolations = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$()
  } else {
    var arg1 = this$2.head__O();
    var h = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(arg1), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
    var t = h;
    var rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(this$2.tail__O());
    while ((rest !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
      var arg1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).head__O();
      var nx = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(arg1$1), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).sci_$colon$colon__f_next = nx;
      t = nx;
      rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).tail__O())
    };
    var errorsPatchedForAssumptionViolations = h
  };
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(reporter).reportErrors__T__s_Option__D__sci_List__V("Test ", method, timeInSeconds, errorsPatchedForAssumptionViolations);
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(errorsPatchedForAssumptionViolations);
  return this$3.length__I()
}
function $p_Lorg_scalajs_junit_JUnitTask__loadBootstrapper__Lorg_scalajs_junit_Reporter__s_Option($thiz, reporter) {
  var bootstrapperName = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_junit_JUnitTask__f_taskDef).Lsbt_testing_TaskDef__f__fullyQualifiedName + "$scalajs$junit$bootstrapper$");
  try {
    var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_reflect_Reflect$().lookupLoadableModuleClass__T__s_Option(bootstrapperName));
    if (this$1.isEmpty__Z()) {
      throw $ct_jl_ClassNotFoundException__T__(new $c_jl_ClassNotFoundException(), ("Cannot find " + bootstrapperName))
    };
    var b = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($as_sjs_reflect_LoadableModuleClass(this$1.get__O())).loadModule__O();
    if ($is_Lorg_scalajs_junit_Bootstrapper(b)) {
      var x2 = $as_Lorg_scalajs_junit_Bootstrapper(b);
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(x2)
    } else {
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_ClassCastException((("Expected " + bootstrapperName) + " to extend Bootstrapper"))
    }
  } catch (e) {
    var e$1 = e;
    var e$2 = ((e$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Throwable) ? e$1 : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException(e$1));
    var $$x2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(reporter);
    var $$x1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_package$().s_package$__f_List);
    var array = [e$2];
    var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_WrappedVarArgs(), array);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x2).reportErrors__T__s_Option__D__sci_List__V("Error while loading test class ", $$x1, 0.0, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems));
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()
  }
}
function $p_Lorg_scalajs_junit_JUnitTask__runTests$1__sci_List__Lorg_scalajs_junit_Reporter__sr_IntRef__sr_IntRef__Lorg_scalajs_junit_Bootstrapper__sr_IntRef__s_concurrent_Future($thiz, tests, reporter$2, ignored$1, total$1, bootstrapper$1, failed$1) {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(tests);
  var b = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_scm_ListBuffer();
  var these = this$1;
  while (true) {
    if ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).isEmpty__Z())) {
      var arg1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).head__O();
      var x$2 = $as_Lorg_scalajs_junit_TestMetadata(arg1);
      var $$x1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$2).ignored__Z()
    } else {
      var $$x1 = false
    };
    if ($$x1) {
      var elem = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).head__O();
      b.addOne__O__scm_ListBuffer(elem);
      these = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).tail__O())
    } else {
      break
    }
  };
  var _1 = b.toList__sci_List();
  var _2 = these;
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_1);
  var these$1 = this$2;
  while ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these$1).isEmpty__Z())) {
    var arg1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these$1).head__O();
    var t = $as_Lorg_scalajs_junit_TestMetadata(arg1$1);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(reporter$2).reportIgnored__s_Option__V(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).name__T()));
    these$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these$1).tail__O())
  };
  var $$x3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ignored$1);
  var $$x2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ignored$1).sr_IntRef__f_elem;
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_1);
  $$x3.sr_IntRef__f_elem = (($$x2 + this$3.length__I()) | 0);
  if ((_2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon)) {
    var x2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_$colon$colon(_2);
    var t$3 = $as_Lorg_scalajs_junit_TestMetadata($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).sci_$colon$colon__f_head);
    var ts = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).sci_$colon$colon__f_next;
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(total$1).sr_IntRef__f_elem = ((1 + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(total$1).sr_IntRef__f_elem) | 0);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($p_Lorg_scalajs_junit_JUnitTask__executeTestMethod__Lorg_scalajs_junit_Bootstrapper__Lorg_scalajs_junit_TestMetadata__Lorg_scalajs_junit_Reporter__s_concurrent_Future($thiz, bootstrapper$1, t$3, reporter$2)).flatMap__F1__s_concurrent_ExecutionContext__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((fc$2) => {
      var fc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(fc$2);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(failed$1).sr_IntRef__f_elem = (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(failed$1).sr_IntRef__f_elem + fc) | 0);
      return $p_Lorg_scalajs_junit_JUnitTask__runTests$1__sci_List__Lorg_scalajs_junit_Reporter__sr_IntRef__sr_IntRef__Lorg_scalajs_junit_Bootstrapper__sr_IntRef__s_concurrent_Future($thiz, ts, reporter$2, ignored$1, total$1, bootstrapper$1, failed$1)
    })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_ExecutionContext$().global__s_concurrent_ExecutionContextExecutor())
  } else {
    var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_package$().s_package$__f_Nil;
    if (((x === null) ? (_2 === null) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).equals__O__Z(_2))) {
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_Future$().successful__O__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success((void 0)))
    } else {
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(_2)
    }
  }
}
/** @constructor */
function $c_Lorg_scalajs_junit_JUnitTask(taskDef, runSettings) {
  this.Lorg_scalajs_junit_JUnitTask__f_taskDef = null;
  this.Lorg_scalajs_junit_JUnitTask__f_runSettings = null;
  this.Lorg_scalajs_junit_JUnitTask__f_taskDef = taskDef;
  this.Lorg_scalajs_junit_JUnitTask__f_runSettings = runSettings
}
$c_Lorg_scalajs_junit_JUnitTask.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_junit_JUnitTask.prototype.constructor = $c_Lorg_scalajs_junit_JUnitTask;
/** @constructor */
function $h_Lorg_scalajs_junit_JUnitTask() {
  /*<skip>*/
}
$h_Lorg_scalajs_junit_JUnitTask.prototype = $c_Lorg_scalajs_junit_JUnitTask.prototype;
$c_Lorg_scalajs_junit_JUnitTask.prototype.taskDef__Lsbt_testing_TaskDef = (function() {
  return this.Lorg_scalajs_junit_JUnitTask__f_taskDef
});
$c_Lorg_scalajs_junit_JUnitTask.prototype.tags__AT = (function() {
  return new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(0)
});
$c_Lorg_scalajs_junit_JUnitTask.prototype.execute__Lsbt_testing_EventHandler__ALsbt_testing_Logger__F1__V = (function(eventHandler, loggers, continuation) {
  var reporter = new $c_Lorg_scalajs_junit_Reporter(eventHandler, loggers, this.Lorg_scalajs_junit_JUnitTask__f_runSettings, this.Lorg_scalajs_junit_JUnitTask__f_taskDef);
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($p_Lorg_scalajs_junit_JUnitTask__loadBootstrapper__Lorg_scalajs_junit_Reporter__s_Option(this, reporter));
  if (this$1.isEmpty__Z()) {
    var result = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_Future$().successful__O__s_concurrent_Future((void 0))
  } else {
    var arg1 = this$1.get__O();
    var bootstrapper = $as_Lorg_scalajs_junit_Bootstrapper(arg1);
    var result = $p_Lorg_scalajs_junit_JUnitTask__executeTests__Lorg_scalajs_junit_Bootstrapper__Lorg_scalajs_junit_Reporter__s_concurrent_Future(this, bootstrapper, reporter)
  };
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(result).foreach__F1__s_concurrent_ExecutionContext__V(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((x$1$2) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Void(x$1$2);
    var $$x1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(continuation);
    var xs = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
    var len = xs.length__I();
    var array = new ($d_Lsbt_testing_Task.getArrayOf().constr)(len);
    var iterator = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty;
    var i = 0;
    while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(iterator).hasNext__Z()) {
      array.set(i, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(iterator).next__O());
      i = ((1 + i) | 0)
    };
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x1).apply__O__O(array)
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_ExecutionContext$().global__s_concurrent_ExecutionContextExecutor())
});
var $d_Lorg_scalajs_junit_JUnitTask = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_junit_JUnitTask: 0
}, false, "org.scalajs.junit.JUnitTask", {
  Lorg_scalajs_junit_JUnitTask: 1,
  O: 1,
  Lsbt_testing_Task: 1
});
$c_Lorg_scalajs_junit_JUnitTask.prototype.$classData = $d_Lorg_scalajs_junit_JUnitTask;
/** @constructor */
function $c_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$Handler() {
  this.Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$Handler__f__hasErrors = false;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$Handler__f__hasErrors = false
}
$c_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$Handler.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$Handler.prototype.constructor = $c_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$Handler;
/** @constructor */
function $h_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$Handler() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$Handler.prototype = $c_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$Handler.prototype;
$c_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$Handler.prototype.handle__Lsbt_testing_Event__V = (function(event) {
  var status = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(event).status__Lsbt_testing_Status();
  if (this.Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$Handler__f__hasErrors) {
    var $$x1 = true
  } else {
    var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($m_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$().Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$__f_org$scalajs$testing$bridge$HTMLRunner$EventCounter$$isErrorStatus);
    var $$x1 = this$1.contains__O__Z(status)
  };
  this.Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$Handler__f__hasErrors = $$x1;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($m_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$().Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$__f_counts).update__O__O__V(status, ((1 + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($m_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$().Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$__f_counts).apply__O__O(status))) | 0))
});
var $d_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$Handler = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$Handler: 0
}, false, "org.scalajs.testing.bridge.HTMLRunner$EventCounter$Handler", {
  Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$Handler: 1,
  O: 1,
  Lsbt_testing_EventHandler: 1
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$Handler.prototype.$classData = $d_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$Handler;
/** @constructor */
function $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox(outer) {
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox__f_org$scalajs$testing$bridge$HTMLRunner$UI$ExcludedTestBox$$box = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox__f_org$scalajs$testing$bridge$HTMLRunner$UI$ExcludedTestBox$$updateCheckbox = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox__f_$outer = null;
  if ((outer === null)) {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(null)
  } else {
    this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox__f_$outer = outer
  };
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(outer).Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$excludedTaskDefs);
  var count = this$1.length__I();
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox__f_org$scalajs$testing$bridge$HTMLRunner$UI$ExcludedTestBox$$box = new $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox(outer, (("Excluded Test Suites (" + count) + ")"));
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox__f_org$scalajs$testing$bridge$HTMLRunner$UI$ExcludedTestBox$$updateCheckbox = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(outer).org$scalajs$testing$bridge$HTMLRunner$UI$$checkboxUpdater__sc_Seq__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Checkbox__sjs_js_Function0($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(outer).Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$excludedTests, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox__f_org$scalajs$testing$bridge$HTMLRunner$UI$ExcludedTestBox$$box).Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_checkbox);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox__f_org$scalajs$testing$bridge$HTMLRunner$UI$ExcludedTestBox$$box).Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_checkbox.checked = false;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox__f_org$scalajs$testing$bridge$HTMLRunner$UI$ExcludedTestBox$$box).Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_checkbox.onclick = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(outer).org$scalajs$testing$bridge$HTMLRunner$UI$$testUpdater__sc_Seq__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Checkbox__sjs_js_Function0($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(outer).Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$excludedTests, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox__f_org$scalajs$testing$bridge$HTMLRunner$UI$ExcludedTestBox$$box).Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_checkbox);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(outer).Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$excludedTaskDefs).foreach__F1__V(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((taskDef$2) => {
    var taskDef = $as_Lsbt_testing_TaskDef(taskDef$2);
    var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox__f_$outer).Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$excludedTests);
    var elem = new $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest(this, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(taskDef).Lsbt_testing_TaskDef__f__fullyQualifiedName);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_scm_Buffer(this$3.addOne__O__scm_Growable(elem))
  })))
}
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox.prototype.constructor = $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox;
/** @constructor */
function $h_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox.prototype = $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox.prototype;
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox.prototype.setNextSibling__Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__V = (function(that) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox__f_org$scalajs$testing$bridge$HTMLRunner$UI$ExcludedTestBox$$box).setNextSibling__Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__V(that)
});
var $d_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox: 0
}, false, "org.scalajs.testing.bridge.HTMLRunner$UI$ExcludedTestBox", {
  Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox: 1,
  O: 1,
  Lorg_scalajs_testing_bridge_HTMLRunner$UI$MoveTarget: 1
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox.prototype.$classData = $d_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox;
/** @constructor */
function $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest(outer, testName) {
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest__f_testName = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest__f_logLine = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest__f_checkbox = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest__f_testName = testName;
  if ((outer === null)) {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(null)
  };
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest__f_logLine = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(outer).Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox__f_org$scalajs$testing$bridge$HTMLRunner$UI$ExcludedTestBox$$box).log__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element("", "info");
  var $$x1 = $m_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$();
  var element = this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest__f_logLine;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest__f_checkbox = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x1).newCheckbox$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__Z__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Checkbox(element, false);
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest__f_checkbox.onclick = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(outer).Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox__f_org$scalajs$testing$bridge$HTMLRunner$UI$ExcludedTestBox$$updateCheckbox;
  var $$x2 = $m_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$();
  var element$1 = this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest__f_logLine;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x2).newTextNode$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Node(element$1, (" " + testName))
}
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest.prototype.constructor = $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest;
/** @constructor */
function $h_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest.prototype = $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest.prototype;
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest.prototype.testName__T = (function() {
  return this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest__f_testName
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest.prototype.selected__Z = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest__f_checkbox.checked)
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest.prototype.selected_$eq__Z__V = (function(v) {
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest__f_checkbox.checked = v
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest.prototype.failed__Z = (function() {
  return false
});
var $d_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest: 0
}, false, "org.scalajs.testing.bridge.HTMLRunner$UI$ExcludedTestBox$ExcludedTest", {
  Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest: 1,
  O: 1,
  Lorg_scalajs_testing_bridge_HTMLRunner$UI$Test: 1
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest.prototype.$classData = $d_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest;
function $p_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__runLink__F1__T($thiz, condition) {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_$outer).Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$runningTests);
  var suffix = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_$outer).Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$excludedTests;
  var x1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_IterableOps(this$1.concat__sc_IterableOnce__O(suffix))).partition__F1__T2(condition);
  if ((x1 === null)) {
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x1)
  };
  var included = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_scm_Buffer($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x1).T2__f__1);
  var excluded = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_scm_Buffer($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x1).T2__f__2);
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(included);
  var $$x1 = this$2.length__I();
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(excluded);
  if (($$x1 < this$3.length__I())) {
    var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_IterableOnceOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(excluded).map__F1__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((x$14$2) => {
      var x$14 = $as_Lorg_scalajs_testing_bridge_HTMLRunner$UI$Test(x$14$2);
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$14).testName__T()
    })))));
    var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().from__sc_IterableOnce__sci_Set($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_IterableOnce(this$5));
    var this$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().anyHash__O__I(x);
    var excludedHash = ("" + this$6);
    var $$x2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_package$().s_package$__f_Seq;
    var array = ["i", excludedHash];
    var this$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x2).apply__sci_Seq__sc_SeqOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_WrappedVarArgs(), array)));
    var suffix$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_IterableOnce($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(included).map__F1__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((x$15$2) => {
      var x$15 = $as_Lorg_scalajs_testing_bridge_HTMLRunner$UI$Test(x$15$2);
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$15).testName__T()
    }))));
    var params = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_Seq(this$11.appendedAll__sc_IterableOnce__O(suffix$1))
  } else {
    var this$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_SeqOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(excluded).map__F1__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((x$16$2) => {
      var x$16 = $as_Lorg_scalajs_testing_bridge_HTMLRunner$UI$Test(x$16$2);
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$16).testName__T()
    })))));
    var params = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_Seq(this$12.prepended__O__O("e"))
  };
  var this$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_IterableOnceOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(params).map__F1__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((uriComponent$2) => {
    var uriComponent = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(uriComponent$2);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(encodeURIComponent(uriComponent))
  })))));
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__mkString__T__T__T__T(this$13, "?", "&", "")
}
/** @constructor */
function $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox(outer, excludedTestCount, totalTestCount) {
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_box = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_counterLine = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_updateCheckbox = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_$outer = null;
  if ((outer === null)) {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(null)
  } else {
    this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_$outer = outer
  };
  if ((excludedTestCount === 0)) {
    var caption = ("Total Test Suites: " + totalTestCount)
  } else {
    var selectedCount = ((totalTestCount - excludedTestCount) | 0);
    var caption = (((("Selected Test Suites " + selectedCount) + " (Total: ") + totalTestCount) + ")")
  };
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_box = new $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox(outer, caption);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_box).expand__V();
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_box).Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_checkbox.onclick = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(outer).org$scalajs$testing$bridge$HTMLRunner$UI$$testUpdater__sc_Seq__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Checkbox__sjs_js_Function0($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(outer).Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$runningTests, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_box).Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_checkbox);
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_counterLine = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_box).log__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element("", "info");
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_updateCheckbox = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(outer).org$scalajs$testing$bridge$HTMLRunner$UI$$checkboxUpdater__sc_Seq__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Checkbox__sjs_js_Function0($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(outer).Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$runningTests, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_box).Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_checkbox)
}
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox.prototype.constructor = $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox;
/** @constructor */
function $h_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox.prototype = $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox.prototype;
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox.prototype.counterLineText_$eq__T__V = (function(v) {
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_counterLine.textContent = v
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox.prototype.done__Z__V = (function(ok) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_box).done__Z__V(ok);
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_counterLine.className = ("log " + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_$outer).org$scalajs$testing$bridge$HTMLRunner$UI$$statusClass__Z__T(ok));
  var rerunLine = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_box).log__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element("Next: ", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_$outer).org$scalajs$testing$bridge$HTMLRunner$UI$$statusClass__Z__T(ok));
  if ((!ok)) {
    $m_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$().newLink$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element(rerunLine, $p_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__runLink__F1__T(this, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((x$11$2) => {
      var x$11 = $as_Lorg_scalajs_testing_bridge_HTMLRunner$UI$Test(x$11$2);
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$11).failed__Z()
    }))), "Run failed");
    $m_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$().newTextNode$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Node(rerunLine, " | ")
  };
  $m_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$().newLink$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element(rerunLine, "#", "Run selected").onclick = (() => this.org$scalajs$testing$bridge$HTMLRunner$UI$RootBox$$$anonfun$done$6__Z());
  $m_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$().newTextNode$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Node(rerunLine, " | ");
  $m_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$().newLink$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element(rerunLine, "?", "Run all")
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox.prototype.setNextSibling__Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__V = (function(that) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_box).setNextSibling__Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__V(that)
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox.prototype.org$scalajs$testing$bridge$HTMLRunner$UI$RootBox$$$anonfun$done$6__Z = (function() {
  document.location.search = $p_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__runLink__F1__T(this, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((x$12$2) => {
    var x$12 = $as_Lorg_scalajs_testing_bridge_HTMLRunner$UI$Test(x$12$2);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$12).selected__Z()
  })));
  return false
});
var $d_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox: 0
}, false, "org.scalajs.testing.bridge.HTMLRunner$UI$RootBox", {
  Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox: 1,
  O: 1,
  Lorg_scalajs_testing_bridge_HTMLRunner$UI$MoveTarget: 1
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox.prototype.$classData = $d_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox;
/** @constructor */
function $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1(outer) {
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1__f_ansiCodesSupported = false;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1__f_$outer = null;
  if ((outer === null)) {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(null)
  } else {
    this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1__f_$outer = outer
  };
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1__f_ansiCodesSupported = false
}
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1.prototype.constructor = $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1;
/** @constructor */
function $h_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1.prototype = $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1.prototype;
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1.prototype.ansiCodesSupported__Z = (function() {
  return this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1__f_ansiCodesSupported
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1.prototype.error__T__V = (function(msg) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1__f_$outer).Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_org$scalajs$testing$bridge$HTMLRunner$UI$RunningTest$$box).log__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element(msg, "error");
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1__f_$outer).Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_org$scalajs$testing$bridge$HTMLRunner$UI$RunningTest$$box).expand__V()
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1.prototype.warn__T__V = (function(msg) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1__f_$outer).Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_org$scalajs$testing$bridge$HTMLRunner$UI$RunningTest$$box).log__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element(msg, "warn")
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1.prototype.info__T__V = (function(msg) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1__f_$outer).Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_org$scalajs$testing$bridge$HTMLRunner$UI$RunningTest$$box).log__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element(msg, "info")
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1.prototype.debug__T__V = (function(msg) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1__f_$outer).Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_org$scalajs$testing$bridge$HTMLRunner$UI$RunningTest$$box).log__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element(msg, "debug")
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1.prototype.trace__jl_Throwable__V = (function(t) {
  this.error__T__V($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).toString__T())
});
var $d_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1: 0
}, false, "org.scalajs.testing.bridge.HTMLRunner$UI$RunningTest$$anon$1", {
  Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1: 1,
  O: 1,
  Lsbt_testing_Logger: 1
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1.prototype.$classData = $d_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1;
function $p_Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__toggleExpand__V($thiz) {
  $thiz.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_expanded = (!$thiz.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_expanded);
  $thiz.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_expandLink.textContent = ($thiz.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_expanded ? "[-]" : "[+]");
  $thiz.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_body.style.display = ($thiz.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_expanded ? "block" : "none")
}
/** @constructor */
function $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox(outer, caption) {
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_box = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_header = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_expandLink = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_headerCaption = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_checkbox = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_body = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_expanded = false;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_$outer = null;
  if ((outer === null)) {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(null)
  } else {
    this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_$outer = outer
  };
  var element = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(outer).Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$container;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_box = $m_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$().newElement$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__T__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element(element, "test-box", "", "div");
  var element$1 = this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_box;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_header = $m_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$().newElement$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__T__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element(element$1, "test-box-header", "", "div");
  var $$x1 = $m_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$();
  var element$2 = this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_header;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_expandLink = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x1).newLink$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element(element$2, "#", "[+]");
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_expandLink.onclick = (() => this.org$scalajs$testing$bridge$HTMLRunner$UI$TestBox$$$anonfun$new$1__Z());
  var $$x2 = $m_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$();
  var element$3 = this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_header;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_headerCaption = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x2).newTextNode$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Node(element$3, (" " + caption));
  var $$x3 = $m_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$();
  var element$4 = this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_header;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_checkbox = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x3).newCheckbox$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__Z__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Checkbox(element$4, true);
  var element$5 = this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_box;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_body = $m_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$().newElement$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__T__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element(element$5, "test-box-body", "", "div");
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_expanded = false
}
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox.prototype.constructor = $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox;
/** @constructor */
function $h_Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox.prototype = $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox.prototype;
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox.prototype.done__Z__V = (function(ok) {
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_header.className = (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_header.className) + " ") + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_$outer).org$scalajs$testing$bridge$HTMLRunner$UI$$statusClass__Z__T(ok));
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_headerCaption.textContent = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_headerCaption.textContent) + (ok ? " - Passed" : " - Failed"))
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox.prototype.expand__V = (function() {
  if ((!this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_expanded)) {
    $p_Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__toggleExpand__V(this)
  }
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox.prototype.log__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element = (function(msg, clss) {
  var $$x1 = $m_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$();
  var element = this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_body;
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x1).newElement$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__T__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element(element, ("log " + clss), msg, "pre")
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox.prototype.setNextSibling__Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__V = (function(that) {
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_box.insertAdjacentElement("afterend", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(that).Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_box)
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox.prototype.org$scalajs$testing$bridge$HTMLRunner$UI$TestBox$$$anonfun$new$1__Z = (function() {
  $p_Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__toggleExpand__V(this);
  return false
});
var $d_Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox: 0
}, false, "org.scalajs.testing.bridge.HTMLRunner$UI$TestBox", {
  Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox: 1,
  O: 1,
  Lorg_scalajs_testing_bridge_HTMLRunner$UI$MoveTarget: 1
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox.prototype.$classData = $d_Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox;
/** @constructor */
function $c_Lorg_scalajs_testing_bridge_JSRPC$() {
  this.Lorg_scalajs_testing_common_RPCCore__f_ec = null;
  this.Lorg_scalajs_testing_common_RPCCore__f_pending = null;
  this.Lorg_scalajs_testing_common_RPCCore__f_endpoints = null;
  $ct_Lorg_scalajs_testing_common_RPCCore__s_concurrent_ExecutionContext__(this, $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue);
  $n_Lorg_scalajs_testing_bridge_JSRPC$ = this;
  scalajsCom.init(((arg1$2) => {
    var arg1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(arg1$2);
    $m_Lorg_scalajs_testing_bridge_JSRPC$();
    $m_Lorg_scalajs_testing_bridge_JSRPC$().handleMessage__T__V(arg1)
  }))
}
$c_Lorg_scalajs_testing_bridge_JSRPC$.prototype = new $h_Lorg_scalajs_testing_common_RPCCore();
$c_Lorg_scalajs_testing_bridge_JSRPC$.prototype.constructor = $c_Lorg_scalajs_testing_bridge_JSRPC$;
/** @constructor */
function $h_Lorg_scalajs_testing_bridge_JSRPC$() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_bridge_JSRPC$.prototype = $c_Lorg_scalajs_testing_bridge_JSRPC$.prototype;
$c_Lorg_scalajs_testing_bridge_JSRPC$.prototype.send__T__V = (function(msg) {
  scalajsCom.send(msg)
});
var $d_Lorg_scalajs_testing_bridge_JSRPC$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_bridge_JSRPC$: 0
}, false, "org.scalajs.testing.bridge.JSRPC$", {
  Lorg_scalajs_testing_bridge_JSRPC$: 1,
  Lorg_scalajs_testing_common_RPCCore: 1,
  O: 1
});
$c_Lorg_scalajs_testing_bridge_JSRPC$.prototype.$classData = $d_Lorg_scalajs_testing_bridge_JSRPC$;
var $n_Lorg_scalajs_testing_bridge_JSRPC$;
function $m_Lorg_scalajs_testing_bridge_JSRPC$() {
  if ((!$n_Lorg_scalajs_testing_bridge_JSRPC$)) {
    $n_Lorg_scalajs_testing_bridge_JSRPC$ = new $c_Lorg_scalajs_testing_bridge_JSRPC$()
  };
  return $n_Lorg_scalajs_testing_bridge_JSRPC$
}
/** @constructor */
function $c_Lorg_scalajs_testing_bridge_ScalaJSClassLoader() {
  /*<skip>*/
}
$c_Lorg_scalajs_testing_bridge_ScalaJSClassLoader.prototype = new $h_jl_ClassLoader();
$c_Lorg_scalajs_testing_bridge_ScalaJSClassLoader.prototype.constructor = $c_Lorg_scalajs_testing_bridge_ScalaJSClassLoader;
/** @constructor */
function $h_Lorg_scalajs_testing_bridge_ScalaJSClassLoader() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_bridge_ScalaJSClassLoader.prototype = $c_Lorg_scalajs_testing_bridge_ScalaJSClassLoader.prototype;
var $d_Lorg_scalajs_testing_bridge_ScalaJSClassLoader = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_bridge_ScalaJSClassLoader: 0
}, false, "org.scalajs.testing.bridge.ScalaJSClassLoader", {
  Lorg_scalajs_testing_bridge_ScalaJSClassLoader: 1,
  jl_ClassLoader: 1,
  O: 1
});
$c_Lorg_scalajs_testing_bridge_ScalaJSClassLoader.prototype.$classData = $d_Lorg_scalajs_testing_bridge_ScalaJSClassLoader;
/** @constructor */
function $c_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteEventHandler(runID) {
  this.Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteEventHandler__f_runID = 0;
  this.Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteEventHandler__f_runID = runID
}
$c_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteEventHandler.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteEventHandler.prototype.constructor = $c_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteEventHandler;
/** @constructor */
function $h_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteEventHandler() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteEventHandler.prototype = $c_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteEventHandler.prototype;
$c_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteEventHandler.prototype.handle__Lsbt_testing_Event__V = (function(event) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($m_Lorg_scalajs_testing_bridge_TestAdapterBridge$().Lorg_scalajs_testing_bridge_TestAdapterBridge$__f_org$scalajs$testing$bridge$TestAdapterBridge$$mux).send__Lorg_scalajs_testing_common_MsgEndpoint__I__O__V($m_Lorg_scalajs_testing_common_JVMEndpoints$().Lorg_scalajs_testing_common_JVMEndpoints$__f_event, this.Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteEventHandler__f_runID, event)
});
var $d_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteEventHandler = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteEventHandler: 0
}, false, "org.scalajs.testing.bridge.TestAdapterBridge$RemoteEventHandler", {
  Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteEventHandler: 1,
  O: 1,
  Lsbt_testing_EventHandler: 1
});
$c_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteEventHandler.prototype.$classData = $d_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteEventHandler;
function $p_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger__l__O__Lorg_scalajs_testing_common_LogElement($thiz, x) {
  return new $c_Lorg_scalajs_testing_common_LogElement($thiz.Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger__f_index, x)
}
/** @constructor */
function $c_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger(runID, index, ansiCodesSupported) {
  this.Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger__f_runID = 0;
  this.Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger__f_index = 0;
  this.Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger__f_ansiCodesSupported = false;
  this.Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger__f_runID = runID;
  this.Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger__f_index = index;
  this.Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger__f_ansiCodesSupported = ansiCodesSupported
}
$c_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger.prototype.constructor = $c_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger;
/** @constructor */
function $h_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger.prototype = $c_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger.prototype;
$c_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger.prototype.ansiCodesSupported__Z = (function() {
  return this.Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger__f_ansiCodesSupported
});
$c_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger.prototype.error__T__V = (function(msg) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($m_Lorg_scalajs_testing_bridge_TestAdapterBridge$().Lorg_scalajs_testing_bridge_TestAdapterBridge$__f_org$scalajs$testing$bridge$TestAdapterBridge$$mux).send__Lorg_scalajs_testing_common_MsgEndpoint__I__O__V($m_Lorg_scalajs_testing_common_JVMEndpoints$().Lorg_scalajs_testing_common_JVMEndpoints$__f_logError, this.Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger__f_runID, $p_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger__l__O__Lorg_scalajs_testing_common_LogElement(this, msg))
});
$c_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger.prototype.warn__T__V = (function(msg) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($m_Lorg_scalajs_testing_bridge_TestAdapterBridge$().Lorg_scalajs_testing_bridge_TestAdapterBridge$__f_org$scalajs$testing$bridge$TestAdapterBridge$$mux).send__Lorg_scalajs_testing_common_MsgEndpoint__I__O__V($m_Lorg_scalajs_testing_common_JVMEndpoints$().Lorg_scalajs_testing_common_JVMEndpoints$__f_logWarn, this.Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger__f_runID, $p_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger__l__O__Lorg_scalajs_testing_common_LogElement(this, msg))
});
$c_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger.prototype.info__T__V = (function(msg) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($m_Lorg_scalajs_testing_bridge_TestAdapterBridge$().Lorg_scalajs_testing_bridge_TestAdapterBridge$__f_org$scalajs$testing$bridge$TestAdapterBridge$$mux).send__Lorg_scalajs_testing_common_MsgEndpoint__I__O__V($m_Lorg_scalajs_testing_common_JVMEndpoints$().Lorg_scalajs_testing_common_JVMEndpoints$__f_logInfo, this.Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger__f_runID, $p_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger__l__O__Lorg_scalajs_testing_common_LogElement(this, msg))
});
$c_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger.prototype.debug__T__V = (function(msg) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($m_Lorg_scalajs_testing_bridge_TestAdapterBridge$().Lorg_scalajs_testing_bridge_TestAdapterBridge$__f_org$scalajs$testing$bridge$TestAdapterBridge$$mux).send__Lorg_scalajs_testing_common_MsgEndpoint__I__O__V($m_Lorg_scalajs_testing_common_JVMEndpoints$().Lorg_scalajs_testing_common_JVMEndpoints$__f_logDebug, this.Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger__f_runID, $p_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger__l__O__Lorg_scalajs_testing_common_LogElement(this, msg))
});
$c_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger.prototype.trace__jl_Throwable__V = (function(t) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($m_Lorg_scalajs_testing_bridge_TestAdapterBridge$().Lorg_scalajs_testing_bridge_TestAdapterBridge$__f_org$scalajs$testing$bridge$TestAdapterBridge$$mux).send__Lorg_scalajs_testing_common_MsgEndpoint__I__O__V($m_Lorg_scalajs_testing_common_JVMEndpoints$().Lorg_scalajs_testing_common_JVMEndpoints$__f_logTrace, this.Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger__f_runID, $p_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger__l__O__Lorg_scalajs_testing_common_LogElement(this, t))
});
var $d_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger: 0
}, false, "org.scalajs.testing.bridge.TestAdapterBridge$RemoteLogger", {
  Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger: 1,
  O: 1,
  Lsbt_testing_Logger: 1
});
$c_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger.prototype.$classData = $d_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger;
/** @constructor */
function $c_Lorg_scalajs_testing_common_ExecuteRequest$ExecuteRequestSerializer$() {
  /*<skip>*/
}
$c_Lorg_scalajs_testing_common_ExecuteRequest$ExecuteRequestSerializer$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_ExecuteRequest$ExecuteRequestSerializer$.prototype.constructor = $c_Lorg_scalajs_testing_common_ExecuteRequest$ExecuteRequestSerializer$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_ExecuteRequest$ExecuteRequestSerializer$() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_ExecuteRequest$ExecuteRequestSerializer$.prototype = $c_Lorg_scalajs_testing_common_ExecuteRequest$ExecuteRequestSerializer$.prototype;
$c_Lorg_scalajs_testing_common_ExecuteRequest$ExecuteRequestSerializer$.prototype.serialize__Lorg_scalajs_testing_common_ExecuteRequest__Ljava_io_DataOutputStream__V = (function(x, out) {
  var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lorg_scalajs_testing_common_ExecuteRequest__f_taskInfo;
  var s = $m_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$();
  s.serialize__Lorg_scalajs_testing_common_TaskInfo__Ljava_io_DataOutputStream__V(t, out);
  var t$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lorg_scalajs_testing_common_ExecuteRequest__f_loggerColorSupport;
  var evidence$3 = $m_Lorg_scalajs_testing_common_Serializer$BooleanSerializer$();
  var s$1 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3);
  s$1.serialize__sci_List__Ljava_io_DataOutputStream__V(t$1, out)
});
$c_Lorg_scalajs_testing_common_ExecuteRequest$ExecuteRequestSerializer$.prototype.deserialize__Ljava_io_DataInputStream__Lorg_scalajs_testing_common_ExecuteRequest = (function(in$1) {
  var s = $m_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$();
  var $$x1 = s.deserialize__Ljava_io_DataInputStream__Lorg_scalajs_testing_common_TaskInfo(in$1);
  var evidence$3 = $m_Lorg_scalajs_testing_common_Serializer$BooleanSerializer$();
  var s$1 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3);
  return new $c_Lorg_scalajs_testing_common_ExecuteRequest($$x1, s$1.deserialize__Ljava_io_DataInputStream__sci_List(in$1))
});
$c_Lorg_scalajs_testing_common_ExecuteRequest$ExecuteRequestSerializer$.prototype.deserialize__Ljava_io_DataInputStream__O = (function(in$1) {
  return this.deserialize__Ljava_io_DataInputStream__Lorg_scalajs_testing_common_ExecuteRequest(in$1)
});
$c_Lorg_scalajs_testing_common_ExecuteRequest$ExecuteRequestSerializer$.prototype.serialize__O__Ljava_io_DataOutputStream__V = (function(x, out) {
  this.serialize__Lorg_scalajs_testing_common_ExecuteRequest__Ljava_io_DataOutputStream__V($as_Lorg_scalajs_testing_common_ExecuteRequest(x), out)
});
var $d_Lorg_scalajs_testing_common_ExecuteRequest$ExecuteRequestSerializer$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_ExecuteRequest$ExecuteRequestSerializer$: 0
}, false, "org.scalajs.testing.common.ExecuteRequest$ExecuteRequestSerializer$", {
  Lorg_scalajs_testing_common_ExecuteRequest$ExecuteRequestSerializer$: 1,
  O: 1,
  Lorg_scalajs_testing_common_Serializer: 1
});
$c_Lorg_scalajs_testing_common_ExecuteRequest$ExecuteRequestSerializer$.prototype.$classData = $d_Lorg_scalajs_testing_common_ExecuteRequest$ExecuteRequestSerializer$;
var $n_Lorg_scalajs_testing_common_ExecuteRequest$ExecuteRequestSerializer$;
function $m_Lorg_scalajs_testing_common_ExecuteRequest$ExecuteRequestSerializer$() {
  if ((!$n_Lorg_scalajs_testing_common_ExecuteRequest$ExecuteRequestSerializer$)) {
    $n_Lorg_scalajs_testing_common_ExecuteRequest$ExecuteRequestSerializer$ = new $c_Lorg_scalajs_testing_common_ExecuteRequest$ExecuteRequestSerializer$()
  };
  return $n_Lorg_scalajs_testing_common_ExecuteRequest$ExecuteRequestSerializer$
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_FrameworkInfo$FrameworkInfoSerializer$() {
  /*<skip>*/
}
$c_Lorg_scalajs_testing_common_FrameworkInfo$FrameworkInfoSerializer$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_FrameworkInfo$FrameworkInfoSerializer$.prototype.constructor = $c_Lorg_scalajs_testing_common_FrameworkInfo$FrameworkInfoSerializer$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_FrameworkInfo$FrameworkInfoSerializer$() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_FrameworkInfo$FrameworkInfoSerializer$.prototype = $c_Lorg_scalajs_testing_common_FrameworkInfo$FrameworkInfoSerializer$.prototype;
$c_Lorg_scalajs_testing_common_FrameworkInfo$FrameworkInfoSerializer$.prototype.serialize__Lorg_scalajs_testing_common_FrameworkInfo__Ljava_io_DataOutputStream__V = (function(x, out) {
  var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lorg_scalajs_testing_common_FrameworkInfo__f_implName;
  var s = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  s.serialize__T__Ljava_io_DataOutputStream__V(t, out);
  var t$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lorg_scalajs_testing_common_FrameworkInfo__f_displayName;
  var s$1 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  s$1.serialize__T__Ljava_io_DataOutputStream__V(t$1, out);
  var t$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lorg_scalajs_testing_common_FrameworkInfo__f_fingerprints;
  var evidence$3 = $m_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$();
  var s$2 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3);
  s$2.serialize__sci_List__Ljava_io_DataOutputStream__V(t$2, out)
});
$c_Lorg_scalajs_testing_common_FrameworkInfo$FrameworkInfoSerializer$.prototype.deserialize__Ljava_io_DataInputStream__Lorg_scalajs_testing_common_FrameworkInfo = (function(in$1) {
  var s = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var $$x2 = s.deserialize__Ljava_io_DataInputStream__T(in$1);
  var s$1 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var $$x1 = s$1.deserialize__Ljava_io_DataInputStream__T(in$1);
  var evidence$3 = $m_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$();
  var s$2 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3);
  return new $c_Lorg_scalajs_testing_common_FrameworkInfo($$x2, $$x1, s$2.deserialize__Ljava_io_DataInputStream__sci_List(in$1))
});
$c_Lorg_scalajs_testing_common_FrameworkInfo$FrameworkInfoSerializer$.prototype.deserialize__Ljava_io_DataInputStream__O = (function(in$1) {
  return this.deserialize__Ljava_io_DataInputStream__Lorg_scalajs_testing_common_FrameworkInfo(in$1)
});
$c_Lorg_scalajs_testing_common_FrameworkInfo$FrameworkInfoSerializer$.prototype.serialize__O__Ljava_io_DataOutputStream__V = (function(x, out) {
  this.serialize__Lorg_scalajs_testing_common_FrameworkInfo__Ljava_io_DataOutputStream__V($as_Lorg_scalajs_testing_common_FrameworkInfo(x), out)
});
var $d_Lorg_scalajs_testing_common_FrameworkInfo$FrameworkInfoSerializer$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_FrameworkInfo$FrameworkInfoSerializer$: 0
}, false, "org.scalajs.testing.common.FrameworkInfo$FrameworkInfoSerializer$", {
  Lorg_scalajs_testing_common_FrameworkInfo$FrameworkInfoSerializer$: 1,
  O: 1,
  Lorg_scalajs_testing_common_Serializer: 1
});
$c_Lorg_scalajs_testing_common_FrameworkInfo$FrameworkInfoSerializer$.prototype.$classData = $d_Lorg_scalajs_testing_common_FrameworkInfo$FrameworkInfoSerializer$;
var $n_Lorg_scalajs_testing_common_FrameworkInfo$FrameworkInfoSerializer$;
function $m_Lorg_scalajs_testing_common_FrameworkInfo$FrameworkInfoSerializer$() {
  if ((!$n_Lorg_scalajs_testing_common_FrameworkInfo$FrameworkInfoSerializer$)) {
    $n_Lorg_scalajs_testing_common_FrameworkInfo$FrameworkInfoSerializer$ = new $c_Lorg_scalajs_testing_common_FrameworkInfo$FrameworkInfoSerializer$()
  };
  return $n_Lorg_scalajs_testing_common_FrameworkInfo$FrameworkInfoSerializer$
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_FrameworkMessage$FrameworkMessageSerializer$() {
  /*<skip>*/
}
$c_Lorg_scalajs_testing_common_FrameworkMessage$FrameworkMessageSerializer$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_FrameworkMessage$FrameworkMessageSerializer$.prototype.constructor = $c_Lorg_scalajs_testing_common_FrameworkMessage$FrameworkMessageSerializer$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_FrameworkMessage$FrameworkMessageSerializer$() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_FrameworkMessage$FrameworkMessageSerializer$.prototype = $c_Lorg_scalajs_testing_common_FrameworkMessage$FrameworkMessageSerializer$.prototype;
$c_Lorg_scalajs_testing_common_FrameworkMessage$FrameworkMessageSerializer$.prototype.serialize__Lorg_scalajs_testing_common_FrameworkMessage__Ljava_io_DataOutputStream__V = (function(x, out) {
  var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lorg_scalajs_testing_common_FrameworkMessage__f_workerId;
  var lo = t.RTLong__f_lo;
  var hi = t.RTLong__f_hi;
  var t$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uJ(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi));
  var lo$1 = t$1.RTLong__f_lo;
  var hi$1 = t$1.RTLong__f_hi;
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out);
  this$2.writeInt__I__V(hi$1);
  this$2.writeInt__I__V(lo$1);
  var t$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lorg_scalajs_testing_common_FrameworkMessage__f_msg;
  var s$1 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  s$1.serialize__T__Ljava_io_DataOutputStream__V(t$2, out)
});
$c_Lorg_scalajs_testing_common_FrameworkMessage$FrameworkMessageSerializer$.prototype.deserialize__Ljava_io_DataInputStream__Lorg_scalajs_testing_common_FrameworkMessage = (function(in$1) {
  var $$x1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$1).readLong__J();
  var s$1 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  return new $c_Lorg_scalajs_testing_common_FrameworkMessage($$x1, s$1.deserialize__Ljava_io_DataInputStream__T(in$1))
});
$c_Lorg_scalajs_testing_common_FrameworkMessage$FrameworkMessageSerializer$.prototype.deserialize__Ljava_io_DataInputStream__O = (function(in$1) {
  return this.deserialize__Ljava_io_DataInputStream__Lorg_scalajs_testing_common_FrameworkMessage(in$1)
});
$c_Lorg_scalajs_testing_common_FrameworkMessage$FrameworkMessageSerializer$.prototype.serialize__O__Ljava_io_DataOutputStream__V = (function(x, out) {
  this.serialize__Lorg_scalajs_testing_common_FrameworkMessage__Ljava_io_DataOutputStream__V($as_Lorg_scalajs_testing_common_FrameworkMessage(x), out)
});
var $d_Lorg_scalajs_testing_common_FrameworkMessage$FrameworkMessageSerializer$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_FrameworkMessage$FrameworkMessageSerializer$: 0
}, false, "org.scalajs.testing.common.FrameworkMessage$FrameworkMessageSerializer$", {
  Lorg_scalajs_testing_common_FrameworkMessage$FrameworkMessageSerializer$: 1,
  O: 1,
  Lorg_scalajs_testing_common_Serializer: 1
});
$c_Lorg_scalajs_testing_common_FrameworkMessage$FrameworkMessageSerializer$.prototype.$classData = $d_Lorg_scalajs_testing_common_FrameworkMessage$FrameworkMessageSerializer$;
var $n_Lorg_scalajs_testing_common_FrameworkMessage$FrameworkMessageSerializer$;
function $m_Lorg_scalajs_testing_common_FrameworkMessage$FrameworkMessageSerializer$() {
  if ((!$n_Lorg_scalajs_testing_common_FrameworkMessage$FrameworkMessageSerializer$)) {
    $n_Lorg_scalajs_testing_common_FrameworkMessage$FrameworkMessageSerializer$ = new $c_Lorg_scalajs_testing_common_FrameworkMessage$FrameworkMessageSerializer$()
  };
  return $n_Lorg_scalajs_testing_common_FrameworkMessage$FrameworkMessageSerializer$
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_IsolatedTestSet$IsolatedTestSetSerializer$() {
  /*<skip>*/
}
$c_Lorg_scalajs_testing_common_IsolatedTestSet$IsolatedTestSetSerializer$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_IsolatedTestSet$IsolatedTestSetSerializer$.prototype.constructor = $c_Lorg_scalajs_testing_common_IsolatedTestSet$IsolatedTestSetSerializer$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_IsolatedTestSet$IsolatedTestSetSerializer$() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_IsolatedTestSet$IsolatedTestSetSerializer$.prototype = $c_Lorg_scalajs_testing_common_IsolatedTestSet$IsolatedTestSetSerializer$.prototype;
$c_Lorg_scalajs_testing_common_IsolatedTestSet$IsolatedTestSetSerializer$.prototype.serialize__Lorg_scalajs_testing_common_IsolatedTestSet__Ljava_io_DataOutputStream__V = (function(x, out) {
  var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lorg_scalajs_testing_common_IsolatedTestSet__f_testFrameworkNames;
  var evidence$3 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var evidence$3$1 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3);
  var s = new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3$1);
  s.serialize__sci_List__Ljava_io_DataOutputStream__V(t, out);
  var t$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lorg_scalajs_testing_common_IsolatedTestSet__f_definedTests;
  var evidence$3$2 = $m_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$();
  var s$1 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3$2);
  s$1.serialize__sci_List__Ljava_io_DataOutputStream__V(t$1, out)
});
$c_Lorg_scalajs_testing_common_IsolatedTestSet$IsolatedTestSetSerializer$.prototype.deserialize__Ljava_io_DataInputStream__Lorg_scalajs_testing_common_IsolatedTestSet = (function(in$1) {
  var evidence$3 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var evidence$3$1 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3);
  var s = new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3$1);
  var $$x1 = s.deserialize__Ljava_io_DataInputStream__sci_List(in$1);
  var evidence$3$2 = $m_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$();
  var s$1 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3$2);
  return new $c_Lorg_scalajs_testing_common_IsolatedTestSet($$x1, s$1.deserialize__Ljava_io_DataInputStream__sci_List(in$1))
});
$c_Lorg_scalajs_testing_common_IsolatedTestSet$IsolatedTestSetSerializer$.prototype.deserialize__Ljava_io_DataInputStream__O = (function(in$1) {
  return this.deserialize__Ljava_io_DataInputStream__Lorg_scalajs_testing_common_IsolatedTestSet(in$1)
});
$c_Lorg_scalajs_testing_common_IsolatedTestSet$IsolatedTestSetSerializer$.prototype.serialize__O__Ljava_io_DataOutputStream__V = (function(x, out) {
  this.serialize__Lorg_scalajs_testing_common_IsolatedTestSet__Ljava_io_DataOutputStream__V($as_Lorg_scalajs_testing_common_IsolatedTestSet(x), out)
});
var $d_Lorg_scalajs_testing_common_IsolatedTestSet$IsolatedTestSetSerializer$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_IsolatedTestSet$IsolatedTestSetSerializer$: 0
}, false, "org.scalajs.testing.common.IsolatedTestSet$IsolatedTestSetSerializer$", {
  Lorg_scalajs_testing_common_IsolatedTestSet$IsolatedTestSetSerializer$: 1,
  O: 1,
  Lorg_scalajs_testing_common_Serializer: 1
});
$c_Lorg_scalajs_testing_common_IsolatedTestSet$IsolatedTestSetSerializer$.prototype.$classData = $d_Lorg_scalajs_testing_common_IsolatedTestSet$IsolatedTestSetSerializer$;
var $n_Lorg_scalajs_testing_common_IsolatedTestSet$IsolatedTestSetSerializer$;
function $m_Lorg_scalajs_testing_common_IsolatedTestSet$IsolatedTestSetSerializer$() {
  if ((!$n_Lorg_scalajs_testing_common_IsolatedTestSet$IsolatedTestSetSerializer$)) {
    $n_Lorg_scalajs_testing_common_IsolatedTestSet$IsolatedTestSetSerializer$ = new $c_Lorg_scalajs_testing_common_IsolatedTestSet$IsolatedTestSetSerializer$()
  };
  return $n_Lorg_scalajs_testing_common_IsolatedTestSet$IsolatedTestSetSerializer$
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_LogElement$$anon$1(evidence$1$1) {
  this.Lorg_scalajs_testing_common_LogElement$$anon$1__f_evidence$1$1 = null;
  this.Lorg_scalajs_testing_common_LogElement$$anon$1__f_evidence$1$1 = evidence$1$1
}
$c_Lorg_scalajs_testing_common_LogElement$$anon$1.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_LogElement$$anon$1.prototype.constructor = $c_Lorg_scalajs_testing_common_LogElement$$anon$1;
/** @constructor */
function $h_Lorg_scalajs_testing_common_LogElement$$anon$1() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_LogElement$$anon$1.prototype = $c_Lorg_scalajs_testing_common_LogElement$$anon$1.prototype;
$c_Lorg_scalajs_testing_common_LogElement$$anon$1.prototype.serialize__Lorg_scalajs_testing_common_LogElement__Ljava_io_DataOutputStream__V = (function(x, out) {
  var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lorg_scalajs_testing_common_LogElement__f_index;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out).writeInt__I__V(t);
  var t$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lorg_scalajs_testing_common_LogElement__f_x;
  var s$1 = this.Lorg_scalajs_testing_common_LogElement$$anon$1__f_evidence$1$1;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s$1).serialize__O__Ljava_io_DataOutputStream__V(t$1, out)
});
$c_Lorg_scalajs_testing_common_LogElement$$anon$1.prototype.deserialize__Ljava_io_DataInputStream__Lorg_scalajs_testing_common_LogElement = (function(in$1) {
  var $$x1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$1).readInt__I();
  var s$1 = this.Lorg_scalajs_testing_common_LogElement$$anon$1__f_evidence$1$1;
  return new $c_Lorg_scalajs_testing_common_LogElement($$x1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s$1).deserialize__Ljava_io_DataInputStream__O(in$1))
});
$c_Lorg_scalajs_testing_common_LogElement$$anon$1.prototype.deserialize__Ljava_io_DataInputStream__O = (function(in$1) {
  return this.deserialize__Ljava_io_DataInputStream__Lorg_scalajs_testing_common_LogElement(in$1)
});
$c_Lorg_scalajs_testing_common_LogElement$$anon$1.prototype.serialize__O__Ljava_io_DataOutputStream__V = (function(x, out) {
  this.serialize__Lorg_scalajs_testing_common_LogElement__Ljava_io_DataOutputStream__V($as_Lorg_scalajs_testing_common_LogElement(x), out)
});
var $d_Lorg_scalajs_testing_common_LogElement$$anon$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_LogElement$$anon$1: 0
}, false, "org.scalajs.testing.common.LogElement$$anon$1", {
  Lorg_scalajs_testing_common_LogElement$$anon$1: 1,
  O: 1,
  Lorg_scalajs_testing_common_Serializer: 1
});
$c_Lorg_scalajs_testing_common_LogElement$$anon$1.prototype.$classData = $d_Lorg_scalajs_testing_common_LogElement$$anon$1;
function $is_Lorg_scalajs_testing_common_RPCCore$BoundMsgEndpoint(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lorg_scalajs_testing_common_RPCCore$BoundMsgEndpoint)))
}
function $as_Lorg_scalajs_testing_common_RPCCore$BoundMsgEndpoint(obj) {
  return (($is_Lorg_scalajs_testing_common_RPCCore$BoundMsgEndpoint(obj) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "org.scalajs.testing.common.RPCCore$BoundMsgEndpoint"))
}
function $isArrayOf_Lorg_scalajs_testing_common_RPCCore$BoundMsgEndpoint(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_scalajs_testing_common_RPCCore$BoundMsgEndpoint)))
}
function $asArrayOf_Lorg_scalajs_testing_common_RPCCore$BoundMsgEndpoint(obj, depth) {
  return (($isArrayOf_Lorg_scalajs_testing_common_RPCCore$BoundMsgEndpoint(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lorg.scalajs.testing.common.RPCCore$BoundMsgEndpoint;", depth))
}
function $is_Lorg_scalajs_testing_common_RPCCore$BoundRPCEndpoint(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lorg_scalajs_testing_common_RPCCore$BoundRPCEndpoint)))
}
function $as_Lorg_scalajs_testing_common_RPCCore$BoundRPCEndpoint(obj) {
  return (($is_Lorg_scalajs_testing_common_RPCCore$BoundRPCEndpoint(obj) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "org.scalajs.testing.common.RPCCore$BoundRPCEndpoint"))
}
function $isArrayOf_Lorg_scalajs_testing_common_RPCCore$BoundRPCEndpoint(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_scalajs_testing_common_RPCCore$BoundRPCEndpoint)))
}
function $asArrayOf_Lorg_scalajs_testing_common_RPCCore$BoundRPCEndpoint(obj, depth) {
  return (($isArrayOf_Lorg_scalajs_testing_common_RPCCore$BoundRPCEndpoint(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lorg.scalajs.testing.common.RPCCore$BoundRPCEndpoint;", depth))
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_RunMux$$anon$1(evidence$1$1) {
  this.Lorg_scalajs_testing_common_RunMux$$anon$1__f_evidence$1$1 = null;
  this.Lorg_scalajs_testing_common_RunMux$$anon$1__f_evidence$1$1 = evidence$1$1
}
$c_Lorg_scalajs_testing_common_RunMux$$anon$1.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_RunMux$$anon$1.prototype.constructor = $c_Lorg_scalajs_testing_common_RunMux$$anon$1;
/** @constructor */
function $h_Lorg_scalajs_testing_common_RunMux$$anon$1() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_RunMux$$anon$1.prototype = $c_Lorg_scalajs_testing_common_RunMux$$anon$1.prototype;
$c_Lorg_scalajs_testing_common_RunMux$$anon$1.prototype.serialize__Lorg_scalajs_testing_common_RunMux__Ljava_io_DataOutputStream__V = (function(x, out) {
  var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lorg_scalajs_testing_common_RunMux__f_runId;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out).writeInt__I__V(t);
  var t$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lorg_scalajs_testing_common_RunMux__f_value;
  var s$1 = this.Lorg_scalajs_testing_common_RunMux$$anon$1__f_evidence$1$1;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s$1).serialize__O__Ljava_io_DataOutputStream__V(t$1, out)
});
$c_Lorg_scalajs_testing_common_RunMux$$anon$1.prototype.deserialize__Ljava_io_DataInputStream__Lorg_scalajs_testing_common_RunMux = (function(in$1) {
  var $$x1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$1).readInt__I();
  var s$1 = this.Lorg_scalajs_testing_common_RunMux$$anon$1__f_evidence$1$1;
  return new $c_Lorg_scalajs_testing_common_RunMux($$x1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s$1).deserialize__Ljava_io_DataInputStream__O(in$1))
});
$c_Lorg_scalajs_testing_common_RunMux$$anon$1.prototype.deserialize__Ljava_io_DataInputStream__O = (function(in$1) {
  return this.deserialize__Ljava_io_DataInputStream__Lorg_scalajs_testing_common_RunMux(in$1)
});
$c_Lorg_scalajs_testing_common_RunMux$$anon$1.prototype.serialize__O__Ljava_io_DataOutputStream__V = (function(x, out) {
  this.serialize__Lorg_scalajs_testing_common_RunMux__Ljava_io_DataOutputStream__V($as_Lorg_scalajs_testing_common_RunMux(x), out)
});
var $d_Lorg_scalajs_testing_common_RunMux$$anon$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_RunMux$$anon$1: 0
}, false, "org.scalajs.testing.common.RunMux$$anon$1", {
  Lorg_scalajs_testing_common_RunMux$$anon$1: 1,
  O: 1,
  Lorg_scalajs_testing_common_Serializer: 1
});
$c_Lorg_scalajs_testing_common_RunMux$$anon$1.prototype.$classData = $d_Lorg_scalajs_testing_common_RunMux$$anon$1;
/** @constructor */
function $c_Lorg_scalajs_testing_common_RunnerArgs$RunnerArgsSerializer$() {
  /*<skip>*/
}
$c_Lorg_scalajs_testing_common_RunnerArgs$RunnerArgsSerializer$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_RunnerArgs$RunnerArgsSerializer$.prototype.constructor = $c_Lorg_scalajs_testing_common_RunnerArgs$RunnerArgsSerializer$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_RunnerArgs$RunnerArgsSerializer$() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_RunnerArgs$RunnerArgsSerializer$.prototype = $c_Lorg_scalajs_testing_common_RunnerArgs$RunnerArgsSerializer$.prototype;
$c_Lorg_scalajs_testing_common_RunnerArgs$RunnerArgsSerializer$.prototype.serialize__Lorg_scalajs_testing_common_RunnerArgs__Ljava_io_DataOutputStream__V = (function(x, out) {
  var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lorg_scalajs_testing_common_RunnerArgs__f_runID;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out).writeInt__I__V(t);
  var t$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lorg_scalajs_testing_common_RunnerArgs__f_frameworkImpl;
  var s$1 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  s$1.serialize__T__Ljava_io_DataOutputStream__V(t$1, out);
  var t$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lorg_scalajs_testing_common_RunnerArgs__f_args;
  var evidence$3 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var s$2 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3);
  s$2.serialize__sci_List__Ljava_io_DataOutputStream__V(t$2, out);
  var t$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lorg_scalajs_testing_common_RunnerArgs__f_remoteArgs;
  var evidence$3$1 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var s$3 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3$1);
  s$3.serialize__sci_List__Ljava_io_DataOutputStream__V(t$3, out)
});
$c_Lorg_scalajs_testing_common_RunnerArgs$RunnerArgsSerializer$.prototype.deserialize__Ljava_io_DataInputStream__Lorg_scalajs_testing_common_RunnerArgs = (function(in$1) {
  var $$x3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$1).readInt__I();
  var s$1 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var $$x2 = s$1.deserialize__Ljava_io_DataInputStream__T(in$1);
  var evidence$3 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var s$2 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3);
  var $$x1 = s$2.deserialize__Ljava_io_DataInputStream__sci_List(in$1);
  var evidence$3$1 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var s$3 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3$1);
  return new $c_Lorg_scalajs_testing_common_RunnerArgs($$x3, $$x2, $$x1, s$3.deserialize__Ljava_io_DataInputStream__sci_List(in$1))
});
$c_Lorg_scalajs_testing_common_RunnerArgs$RunnerArgsSerializer$.prototype.deserialize__Ljava_io_DataInputStream__O = (function(in$1) {
  return this.deserialize__Ljava_io_DataInputStream__Lorg_scalajs_testing_common_RunnerArgs(in$1)
});
$c_Lorg_scalajs_testing_common_RunnerArgs$RunnerArgsSerializer$.prototype.serialize__O__Ljava_io_DataOutputStream__V = (function(x, out) {
  this.serialize__Lorg_scalajs_testing_common_RunnerArgs__Ljava_io_DataOutputStream__V($as_Lorg_scalajs_testing_common_RunnerArgs(x), out)
});
var $d_Lorg_scalajs_testing_common_RunnerArgs$RunnerArgsSerializer$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_RunnerArgs$RunnerArgsSerializer$: 0
}, false, "org.scalajs.testing.common.RunnerArgs$RunnerArgsSerializer$", {
  Lorg_scalajs_testing_common_RunnerArgs$RunnerArgsSerializer$: 1,
  O: 1,
  Lorg_scalajs_testing_common_Serializer: 1
});
$c_Lorg_scalajs_testing_common_RunnerArgs$RunnerArgsSerializer$.prototype.$classData = $d_Lorg_scalajs_testing_common_RunnerArgs$RunnerArgsSerializer$;
var $n_Lorg_scalajs_testing_common_RunnerArgs$RunnerArgsSerializer$;
function $m_Lorg_scalajs_testing_common_RunnerArgs$RunnerArgsSerializer$() {
  if ((!$n_Lorg_scalajs_testing_common_RunnerArgs$RunnerArgsSerializer$)) {
    $n_Lorg_scalajs_testing_common_RunnerArgs$RunnerArgsSerializer$ = new $c_Lorg_scalajs_testing_common_RunnerArgs$RunnerArgsSerializer$()
  };
  return $n_Lorg_scalajs_testing_common_RunnerArgs$RunnerArgsSerializer$
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3$1) {
  this.Lorg_scalajs_testing_common_Serializer$$anon$1__f_evidence$3$1 = null;
  this.Lorg_scalajs_testing_common_Serializer$$anon$1__f_evidence$3$1 = evidence$3$1
}
$c_Lorg_scalajs_testing_common_Serializer$$anon$1.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_Serializer$$anon$1.prototype.constructor = $c_Lorg_scalajs_testing_common_Serializer$$anon$1;
/** @constructor */
function $h_Lorg_scalajs_testing_common_Serializer$$anon$1() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_Serializer$$anon$1.prototype = $c_Lorg_scalajs_testing_common_Serializer$$anon$1.prototype;
$c_Lorg_scalajs_testing_common_Serializer$$anon$1.prototype.serialize__sci_List__Ljava_io_DataOutputStream__V = (function(x, out) {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x);
  var t = this$1.length__I();
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out).writeInt__I__V(t);
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x);
  var these = this$3;
  while ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).isEmpty__Z())) {
    var arg1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).head__O();
    var s$1 = this.Lorg_scalajs_testing_common_Serializer$$anon$1__f_evidence$3$1;
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s$1).serialize__O__Ljava_io_DataOutputStream__V(arg1, out);
    these = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).tail__O())
  }
});
$c_Lorg_scalajs_testing_common_Serializer$$anon$1.prototype.deserialize__Ljava_io_DataInputStream__sci_List = (function(in$1) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_package$().s_package$__f_List);
  var n = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$1).readInt__I();
  var b = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_scm_ListBuffer();
  var i = 0;
  while ((i < n)) {
    var s$1 = this.Lorg_scalajs_testing_common_Serializer$$anon$1__f_evidence$3$1;
    var elem = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s$1).deserialize__Ljava_io_DataInputStream__O(in$1);
    b.addOne__O__scm_ListBuffer(elem);
    i = ((1 + i) | 0)
  };
  return b.toList__sci_List()
});
$c_Lorg_scalajs_testing_common_Serializer$$anon$1.prototype.deserialize__Ljava_io_DataInputStream__O = (function(in$1) {
  return this.deserialize__Ljava_io_DataInputStream__sci_List(in$1)
});
$c_Lorg_scalajs_testing_common_Serializer$$anon$1.prototype.serialize__O__Ljava_io_DataOutputStream__V = (function(x, out) {
  this.serialize__sci_List__Ljava_io_DataOutputStream__V($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(x), out)
});
var $d_Lorg_scalajs_testing_common_Serializer$$anon$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_Serializer$$anon$1: 0
}, false, "org.scalajs.testing.common.Serializer$$anon$1", {
  Lorg_scalajs_testing_common_Serializer$$anon$1: 1,
  O: 1,
  Lorg_scalajs_testing_common_Serializer: 1
});
$c_Lorg_scalajs_testing_common_Serializer$$anon$1.prototype.$classData = $d_Lorg_scalajs_testing_common_Serializer$$anon$1;
/** @constructor */
function $c_Lorg_scalajs_testing_common_Serializer$$anon$2(evidence$4$1) {
  this.Lorg_scalajs_testing_common_Serializer$$anon$2__f_evidence$4$1 = null;
  this.Lorg_scalajs_testing_common_Serializer$$anon$2__f_evidence$4$1 = evidence$4$1
}
$c_Lorg_scalajs_testing_common_Serializer$$anon$2.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_Serializer$$anon$2.prototype.constructor = $c_Lorg_scalajs_testing_common_Serializer$$anon$2;
/** @constructor */
function $h_Lorg_scalajs_testing_common_Serializer$$anon$2() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_Serializer$$anon$2.prototype = $c_Lorg_scalajs_testing_common_Serializer$$anon$2.prototype;
$c_Lorg_scalajs_testing_common_Serializer$$anon$2.prototype.serialize__s_Option__Ljava_io_DataOutputStream__V = (function(x, out) {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x);
  var t = (!this$1.isEmpty__Z());
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out).writeBoolean__Z__V(t);
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x);
  if ((!this$3.isEmpty__Z())) {
    var arg1 = this$3.get__O();
    var s$1 = this.Lorg_scalajs_testing_common_Serializer$$anon$2__f_evidence$4$1;
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s$1).serialize__O__Ljava_io_DataOutputStream__V(arg1, out)
  }
});
$c_Lorg_scalajs_testing_common_Serializer$$anon$2.prototype.deserialize__Ljava_io_DataInputStream__s_Option = (function(in$1) {
  if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$1).readBoolean__Z()) {
    var s$1 = this.Lorg_scalajs_testing_common_Serializer$$anon$2__f_evidence$4$1;
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s$1).deserialize__Ljava_io_DataInputStream__O(in$1))
  } else {
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()
  }
});
$c_Lorg_scalajs_testing_common_Serializer$$anon$2.prototype.deserialize__Ljava_io_DataInputStream__O = (function(in$1) {
  return this.deserialize__Ljava_io_DataInputStream__s_Option(in$1)
});
$c_Lorg_scalajs_testing_common_Serializer$$anon$2.prototype.serialize__O__Ljava_io_DataOutputStream__V = (function(x, out) {
  this.serialize__s_Option__Ljava_io_DataOutputStream__V($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Option(x), out)
});
var $d_Lorg_scalajs_testing_common_Serializer$$anon$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_Serializer$$anon$2: 0
}, false, "org.scalajs.testing.common.Serializer$$anon$2", {
  Lorg_scalajs_testing_common_Serializer$$anon$2: 1,
  O: 1,
  Lorg_scalajs_testing_common_Serializer: 1
});
$c_Lorg_scalajs_testing_common_Serializer$$anon$2.prototype.$classData = $d_Lorg_scalajs_testing_common_Serializer$$anon$2;
/** @constructor */
function $c_Lorg_scalajs_testing_common_Serializer$BooleanSerializer$() {
  /*<skip>*/
}
$c_Lorg_scalajs_testing_common_Serializer$BooleanSerializer$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_Serializer$BooleanSerializer$.prototype.constructor = $c_Lorg_scalajs_testing_common_Serializer$BooleanSerializer$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_Serializer$BooleanSerializer$() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_Serializer$BooleanSerializer$.prototype = $c_Lorg_scalajs_testing_common_Serializer$BooleanSerializer$.prototype;
$c_Lorg_scalajs_testing_common_Serializer$BooleanSerializer$.prototype.deserialize__Ljava_io_DataInputStream__O = (function(in$1) {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$1).readBoolean__Z()
});
$c_Lorg_scalajs_testing_common_Serializer$BooleanSerializer$.prototype.serialize__O__Ljava_io_DataOutputStream__V = (function(x, out) {
  var x$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(x);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out).writeBoolean__Z__V(x$1)
});
var $d_Lorg_scalajs_testing_common_Serializer$BooleanSerializer$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_Serializer$BooleanSerializer$: 0
}, false, "org.scalajs.testing.common.Serializer$BooleanSerializer$", {
  Lorg_scalajs_testing_common_Serializer$BooleanSerializer$: 1,
  O: 1,
  Lorg_scalajs_testing_common_Serializer: 1
});
$c_Lorg_scalajs_testing_common_Serializer$BooleanSerializer$.prototype.$classData = $d_Lorg_scalajs_testing_common_Serializer$BooleanSerializer$;
var $n_Lorg_scalajs_testing_common_Serializer$BooleanSerializer$;
function $m_Lorg_scalajs_testing_common_Serializer$BooleanSerializer$() {
  if ((!$n_Lorg_scalajs_testing_common_Serializer$BooleanSerializer$)) {
    $n_Lorg_scalajs_testing_common_Serializer$BooleanSerializer$ = new $c_Lorg_scalajs_testing_common_Serializer$BooleanSerializer$()
  };
  return $n_Lorg_scalajs_testing_common_Serializer$BooleanSerializer$
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_Serializer$EventSerializer$() {
  /*<skip>*/
}
$c_Lorg_scalajs_testing_common_Serializer$EventSerializer$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_Serializer$EventSerializer$.prototype.constructor = $c_Lorg_scalajs_testing_common_Serializer$EventSerializer$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_Serializer$EventSerializer$() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_Serializer$EventSerializer$.prototype = $c_Lorg_scalajs_testing_common_Serializer$EventSerializer$.prototype;
$c_Lorg_scalajs_testing_common_Serializer$EventSerializer$.prototype.serialize__Lsbt_testing_Event__Ljava_io_DataOutputStream__V = (function(x, out) {
  var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).fullyQualifiedName__T();
  var s = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  s.serialize__T__Ljava_io_DataOutputStream__V(t, out);
  var t$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).fingerprint__Lsbt_testing_Fingerprint();
  var s$1 = $m_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$();
  s$1.serialize__Lsbt_testing_Fingerprint__Ljava_io_DataOutputStream__V(t$1, out);
  var t$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).selector__Lsbt_testing_Selector();
  var s$2 = $m_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$();
  s$2.serialize__Lsbt_testing_Selector__Ljava_io_DataOutputStream__V(t$2, out);
  var t$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).status__Lsbt_testing_Status();
  $m_Lorg_scalajs_testing_common_Serializer$SerializeState$().write$extension__Ljava_io_DataOutputStream__O__Lorg_scalajs_testing_common_Serializer__V(out, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t$3).jl_Enum__f__ordinal, $m_Lorg_scalajs_testing_common_Serializer$IntSerializer$());
  var t$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).throwable__Lsbt_testing_OptionalThrowable();
  var s$4 = $m_Lorg_scalajs_testing_common_Serializer$OptionalThrowableSerializer$();
  s$4.serialize__Lsbt_testing_OptionalThrowable__Ljava_io_DataOutputStream__V(t$4, out);
  var t$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).duration__J();
  var lo = t$5.RTLong__f_lo;
  var hi = t$5.RTLong__f_hi;
  var t$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uJ(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi));
  var lo$1 = t$6.RTLong__f_lo;
  var hi$1 = t$6.RTLong__f_hi;
  var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out);
  this$7.writeInt__I__V(hi$1);
  this$7.writeInt__I__V(lo$1)
});
$c_Lorg_scalajs_testing_common_Serializer$EventSerializer$.prototype.deserialize__Ljava_io_DataInputStream__O = (function(in$1) {
  return new $c_Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6(in$1)
});
$c_Lorg_scalajs_testing_common_Serializer$EventSerializer$.prototype.serialize__O__Ljava_io_DataOutputStream__V = (function(x, out) {
  this.serialize__Lsbt_testing_Event__Ljava_io_DataOutputStream__V($as_Lsbt_testing_Event(x), out)
});
var $d_Lorg_scalajs_testing_common_Serializer$EventSerializer$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_Serializer$EventSerializer$: 0
}, false, "org.scalajs.testing.common.Serializer$EventSerializer$", {
  Lorg_scalajs_testing_common_Serializer$EventSerializer$: 1,
  O: 1,
  Lorg_scalajs_testing_common_Serializer: 1
});
$c_Lorg_scalajs_testing_common_Serializer$EventSerializer$.prototype.$classData = $d_Lorg_scalajs_testing_common_Serializer$EventSerializer$;
var $n_Lorg_scalajs_testing_common_Serializer$EventSerializer$;
function $m_Lorg_scalajs_testing_common_Serializer$EventSerializer$() {
  if ((!$n_Lorg_scalajs_testing_common_Serializer$EventSerializer$)) {
    $n_Lorg_scalajs_testing_common_Serializer$EventSerializer$ = new $c_Lorg_scalajs_testing_common_Serializer$EventSerializer$()
  };
  return $n_Lorg_scalajs_testing_common_Serializer$EventSerializer$
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6(in$4) {
  this.Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6__f_fullyQualifiedName = null;
  this.Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6__f_fingerprint = null;
  this.Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6__f_selector = null;
  this.Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6__f_status = null;
  this.Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6__f_throwable = null;
  this.Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6__f_duration = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$L0;
  var s = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  this.Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6__f_fullyQualifiedName = s.deserialize__Ljava_io_DataInputStream__T(in$4);
  var s$1 = $m_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$();
  this.Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6__f_fingerprint = s$1.deserialize__Ljava_io_DataInputStream__Lsbt_testing_Fingerprint(in$4);
  var s$2 = $m_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$();
  this.Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6__f_selector = s$2.deserialize__Ljava_io_DataInputStream__Lsbt_testing_Selector(in$4);
  var s$3 = $m_Lorg_scalajs_testing_common_Serializer$StatusSerializer$();
  this.Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6__f_status = s$3.deserialize__Ljava_io_DataInputStream__Lsbt_testing_Status(in$4);
  var s$4 = $m_Lorg_scalajs_testing_common_Serializer$OptionalThrowableSerializer$();
  this.Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6__f_throwable = s$4.deserialize__Ljava_io_DataInputStream__Lsbt_testing_OptionalThrowable(in$4);
  this.Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6__f_duration = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$4).readLong__J()
}
$c_Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6.prototype.constructor = $c_Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6;
/** @constructor */
function $h_Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6.prototype = $c_Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6.prototype;
$c_Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6.prototype.fullyQualifiedName__T = (function() {
  return this.Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6__f_fullyQualifiedName
});
$c_Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6.prototype.fingerprint__Lsbt_testing_Fingerprint = (function() {
  return this.Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6__f_fingerprint
});
$c_Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6.prototype.selector__Lsbt_testing_Selector = (function() {
  return this.Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6__f_selector
});
$c_Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6.prototype.status__Lsbt_testing_Status = (function() {
  return this.Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6__f_status
});
$c_Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6.prototype.throwable__Lsbt_testing_OptionalThrowable = (function() {
  return this.Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6__f_throwable
});
$c_Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6.prototype.duration__J = (function() {
  return this.Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6__f_duration
});
var $d_Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6: 0
}, false, "org.scalajs.testing.common.Serializer$EventSerializer$$anon$6", {
  Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6: 1,
  O: 1,
  Lsbt_testing_Event: 1
});
$c_Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6.prototype.$classData = $d_Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6;
/** @constructor */
function $c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$() {
  this.Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$__f_Annotated = 0;
  this.Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$__f_Subclass = 0;
  this.Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$__f_Annotated = 1;
  this.Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$__f_Subclass = 2
}
$c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$.prototype.constructor = $c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$.prototype = $c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$.prototype;
$c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$.prototype.serialize__Lsbt_testing_Fingerprint__Ljava_io_DataOutputStream__V = (function(fp, out) {
  if ($is_Lsbt_testing_AnnotatedFingerprint(fp)) {
    var x2 = $as_Lsbt_testing_AnnotatedFingerprint(fp);
    var t = this.Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$__f_Annotated;
    var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out);
    var v = t;
    this$2.write__I__V(v);
    var t$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).isModule__Z();
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out).writeBoolean__Z__V(t$1);
    var t$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).annotationName__T();
    var s$2 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
    s$2.serialize__T__Ljava_io_DataOutputStream__V(t$2, out)
  } else if ($is_Lsbt_testing_SubclassFingerprint(fp)) {
    var x3 = $as_Lsbt_testing_SubclassFingerprint(fp);
    var t$3 = this.Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$__f_Subclass;
    var this$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out);
    var v$1 = t$3;
    this$6.write__I__V(v$1);
    var t$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).isModule__Z();
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out).writeBoolean__Z__V(t$4);
    var t$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).superclassName__T();
    var s$5 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
    s$5.serialize__T__Ljava_io_DataOutputStream__V(t$5, out);
    var t$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).requireNoArgConstructor__Z();
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out).writeBoolean__Z__V(t$6)
  } else {
    var this$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(fp);
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IllegalArgumentException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IllegalArgumentException(), ("Unknown Fingerprint type: " + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$objectGetClass(this$10)))
  }
});
$c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$.prototype.deserialize__Ljava_io_DataInputStream__Lsbt_testing_Fingerprint = (function(in$1) {
  var x1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$1).readByte__B();
  if ((this.Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$__f_Annotated === x1)) {
    return new $c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$4(in$1)
  } else if ((this.Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$__f_Subclass === x1)) {
    return new $c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5(in$1)
  } else {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_Ljava_io_IOException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Ljava_io_IOException(), ("Unknown Fingerprint type: " + x1))
  }
});
$c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$.prototype.deserialize__Ljava_io_DataInputStream__O = (function(in$1) {
  return this.deserialize__Ljava_io_DataInputStream__Lsbt_testing_Fingerprint(in$1)
});
$c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$.prototype.serialize__O__Ljava_io_DataOutputStream__V = (function(x, out) {
  this.serialize__Lsbt_testing_Fingerprint__Ljava_io_DataOutputStream__V($as_Lsbt_testing_Fingerprint(x), out)
});
var $d_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$: 0
}, false, "org.scalajs.testing.common.Serializer$FingerprintSerializer$", {
  Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$: 1,
  O: 1,
  Lorg_scalajs_testing_common_Serializer: 1
});
$c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$.prototype.$classData = $d_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$;
var $n_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$;
function $m_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$() {
  if ((!$n_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$)) {
    $n_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$ = new $c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$()
  };
  return $n_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_Serializer$IntSerializer$() {
  /*<skip>*/
}
$c_Lorg_scalajs_testing_common_Serializer$IntSerializer$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_Serializer$IntSerializer$.prototype.constructor = $c_Lorg_scalajs_testing_common_Serializer$IntSerializer$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_Serializer$IntSerializer$() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_Serializer$IntSerializer$.prototype = $c_Lorg_scalajs_testing_common_Serializer$IntSerializer$.prototype;
$c_Lorg_scalajs_testing_common_Serializer$IntSerializer$.prototype.deserialize__Ljava_io_DataInputStream__O = (function(in$1) {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$1).readInt__I()
});
$c_Lorg_scalajs_testing_common_Serializer$IntSerializer$.prototype.serialize__O__Ljava_io_DataOutputStream__V = (function(x, out) {
  var x$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(x);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out).writeInt__I__V(x$1)
});
var $d_Lorg_scalajs_testing_common_Serializer$IntSerializer$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_Serializer$IntSerializer$: 0
}, false, "org.scalajs.testing.common.Serializer$IntSerializer$", {
  Lorg_scalajs_testing_common_Serializer$IntSerializer$: 1,
  O: 1,
  Lorg_scalajs_testing_common_Serializer: 1
});
$c_Lorg_scalajs_testing_common_Serializer$IntSerializer$.prototype.$classData = $d_Lorg_scalajs_testing_common_Serializer$IntSerializer$;
var $n_Lorg_scalajs_testing_common_Serializer$IntSerializer$;
function $m_Lorg_scalajs_testing_common_Serializer$IntSerializer$() {
  if ((!$n_Lorg_scalajs_testing_common_Serializer$IntSerializer$)) {
    $n_Lorg_scalajs_testing_common_Serializer$IntSerializer$ = new $c_Lorg_scalajs_testing_common_Serializer$IntSerializer$()
  };
  return $n_Lorg_scalajs_testing_common_Serializer$IntSerializer$
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_Serializer$OptionalThrowableSerializer$() {
  /*<skip>*/
}
$c_Lorg_scalajs_testing_common_Serializer$OptionalThrowableSerializer$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_Serializer$OptionalThrowableSerializer$.prototype.constructor = $c_Lorg_scalajs_testing_common_Serializer$OptionalThrowableSerializer$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_Serializer$OptionalThrowableSerializer$() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_Serializer$OptionalThrowableSerializer$.prototype = $c_Lorg_scalajs_testing_common_Serializer$OptionalThrowableSerializer$.prototype;
$c_Lorg_scalajs_testing_common_Serializer$OptionalThrowableSerializer$.prototype.serialize__Lsbt_testing_OptionalThrowable__Ljava_io_DataOutputStream__V = (function(x, out) {
  var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).isDefined__Z();
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out).writeBoolean__Z__V(t);
  if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).isDefined__Z()) {
    var t$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).get__jl_Throwable();
    var s$1 = $m_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$();
    s$1.serialize__jl_Throwable__Ljava_io_DataOutputStream__V(t$1, out)
  }
});
$c_Lorg_scalajs_testing_common_Serializer$OptionalThrowableSerializer$.prototype.deserialize__Ljava_io_DataInputStream__Lsbt_testing_OptionalThrowable = (function(in$1) {
  if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$1).readBoolean__Z()) {
    var s$1 = $m_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$();
    return $ct_Lsbt_testing_OptionalThrowable__jl_Throwable__(new $c_Lsbt_testing_OptionalThrowable(), s$1.deserialize__Ljava_io_DataInputStream__jl_Throwable(in$1))
  } else {
    return $ct_Lsbt_testing_OptionalThrowable__(new $c_Lsbt_testing_OptionalThrowable())
  }
});
$c_Lorg_scalajs_testing_common_Serializer$OptionalThrowableSerializer$.prototype.deserialize__Ljava_io_DataInputStream__O = (function(in$1) {
  return this.deserialize__Ljava_io_DataInputStream__Lsbt_testing_OptionalThrowable(in$1)
});
$c_Lorg_scalajs_testing_common_Serializer$OptionalThrowableSerializer$.prototype.serialize__O__Ljava_io_DataOutputStream__V = (function(x, out) {
  this.serialize__Lsbt_testing_OptionalThrowable__Ljava_io_DataOutputStream__V($as_Lsbt_testing_OptionalThrowable(x), out)
});
var $d_Lorg_scalajs_testing_common_Serializer$OptionalThrowableSerializer$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_Serializer$OptionalThrowableSerializer$: 0
}, false, "org.scalajs.testing.common.Serializer$OptionalThrowableSerializer$", {
  Lorg_scalajs_testing_common_Serializer$OptionalThrowableSerializer$: 1,
  O: 1,
  Lorg_scalajs_testing_common_Serializer: 1
});
$c_Lorg_scalajs_testing_common_Serializer$OptionalThrowableSerializer$.prototype.$classData = $d_Lorg_scalajs_testing_common_Serializer$OptionalThrowableSerializer$;
var $n_Lorg_scalajs_testing_common_Serializer$OptionalThrowableSerializer$;
function $m_Lorg_scalajs_testing_common_Serializer$OptionalThrowableSerializer$() {
  if ((!$n_Lorg_scalajs_testing_common_Serializer$OptionalThrowableSerializer$)) {
    $n_Lorg_scalajs_testing_common_Serializer$OptionalThrowableSerializer$ = new $c_Lorg_scalajs_testing_common_Serializer$OptionalThrowableSerializer$()
  };
  return $n_Lorg_scalajs_testing_common_Serializer$OptionalThrowableSerializer$
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$() {
  this.Lorg_scalajs_testing_common_Serializer$SelectorSerializer$__f_Suite = 0;
  this.Lorg_scalajs_testing_common_Serializer$SelectorSerializer$__f_Test = 0;
  this.Lorg_scalajs_testing_common_Serializer$SelectorSerializer$__f_NestedSuite = 0;
  this.Lorg_scalajs_testing_common_Serializer$SelectorSerializer$__f_NestedTest = 0;
  this.Lorg_scalajs_testing_common_Serializer$SelectorSerializer$__f_TestWildcard = 0;
  this.Lorg_scalajs_testing_common_Serializer$SelectorSerializer$__f_Suite = 1;
  this.Lorg_scalajs_testing_common_Serializer$SelectorSerializer$__f_Test = 2;
  this.Lorg_scalajs_testing_common_Serializer$SelectorSerializer$__f_NestedSuite = 3;
  this.Lorg_scalajs_testing_common_Serializer$SelectorSerializer$__f_NestedTest = 4;
  this.Lorg_scalajs_testing_common_Serializer$SelectorSerializer$__f_TestWildcard = 5
}
$c_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$.prototype.constructor = $c_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$.prototype = $c_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$.prototype;
$c_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$.prototype.serialize__Lsbt_testing_Selector__Ljava_io_DataOutputStream__V = (function(sel, out) {
  if ((sel instanceof $c_Lsbt_testing_SuiteSelector)) {
    var t = this.Lorg_scalajs_testing_common_Serializer$SelectorSerializer$__f_Suite;
    var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out);
    var v = t;
    this$2.write__I__V(v)
  } else if ((sel instanceof $c_Lsbt_testing_TestSelector)) {
    var x3 = $as_Lsbt_testing_TestSelector(sel);
    var t$1 = this.Lorg_scalajs_testing_common_Serializer$SelectorSerializer$__f_Test;
    var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out);
    var v$1 = t$1;
    this$4.write__I__V(v$1);
    var t$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).Lsbt_testing_TestSelector__f__testName;
    var s$2 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
    s$2.serialize__T__Ljava_io_DataOutputStream__V(t$2, out)
  } else if ((sel instanceof $c_Lsbt_testing_NestedSuiteSelector)) {
    var x4 = $as_Lsbt_testing_NestedSuiteSelector(sel);
    var t$3 = this.Lorg_scalajs_testing_common_Serializer$SelectorSerializer$__f_NestedSuite;
    var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out);
    var v$2 = t$3;
    this$7.write__I__V(v$2);
    var t$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4).Lsbt_testing_NestedSuiteSelector__f__suiteId;
    var s$4 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
    s$4.serialize__T__Ljava_io_DataOutputStream__V(t$4, out)
  } else if ((sel instanceof $c_Lsbt_testing_NestedTestSelector)) {
    var x5 = $as_Lsbt_testing_NestedTestSelector(sel);
    var t$5 = this.Lorg_scalajs_testing_common_Serializer$SelectorSerializer$__f_NestedTest;
    var this$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out);
    var v$3 = t$5;
    this$10.write__I__V(v$3);
    var t$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5).Lsbt_testing_NestedTestSelector__f__suiteId;
    var s$6 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
    s$6.serialize__T__Ljava_io_DataOutputStream__V(t$6, out);
    var t$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5).Lsbt_testing_NestedTestSelector__f__testName;
    var s$7 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
    s$7.serialize__T__Ljava_io_DataOutputStream__V(t$7, out)
  } else if ((sel instanceof $c_Lsbt_testing_TestWildcardSelector)) {
    var x6 = $as_Lsbt_testing_TestWildcardSelector(sel);
    var t$8 = this.Lorg_scalajs_testing_common_Serializer$SelectorSerializer$__f_TestWildcard;
    var this$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out);
    var v$4 = t$8;
    this$14.write__I__V(v$4);
    var t$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x6).Lsbt_testing_TestWildcardSelector__f__testWildcard;
    var s$9 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
    s$9.serialize__T__Ljava_io_DataOutputStream__V(t$9, out)
  } else {
    var this$16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(sel);
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IllegalArgumentException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IllegalArgumentException(), ("Unknown Selector type: " + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$objectGetClass(this$16)))
  }
});
$c_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$.prototype.deserialize__Ljava_io_DataInputStream__Lsbt_testing_Selector = (function(in$1) {
  var x1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$1).readByte__B();
  if ((this.Lorg_scalajs_testing_common_Serializer$SelectorSerializer$__f_Suite === x1)) {
    return new $c_Lsbt_testing_SuiteSelector()
  } else if ((this.Lorg_scalajs_testing_common_Serializer$SelectorSerializer$__f_Test === x1)) {
    var s$1 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
    return new $c_Lsbt_testing_TestSelector(s$1.deserialize__Ljava_io_DataInputStream__T(in$1))
  } else if ((this.Lorg_scalajs_testing_common_Serializer$SelectorSerializer$__f_NestedSuite === x1)) {
    var s$2 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
    return new $c_Lsbt_testing_NestedSuiteSelector(s$2.deserialize__Ljava_io_DataInputStream__T(in$1))
  } else if ((this.Lorg_scalajs_testing_common_Serializer$SelectorSerializer$__f_NestedTest === x1)) {
    var s$3 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
    var $$x1 = s$3.deserialize__Ljava_io_DataInputStream__T(in$1);
    var s$4 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
    return new $c_Lsbt_testing_NestedTestSelector($$x1, s$4.deserialize__Ljava_io_DataInputStream__T(in$1))
  } else if ((this.Lorg_scalajs_testing_common_Serializer$SelectorSerializer$__f_TestWildcard === x1)) {
    var s$5 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
    return new $c_Lsbt_testing_TestWildcardSelector(s$5.deserialize__Ljava_io_DataInputStream__T(in$1))
  } else {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_Ljava_io_IOException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Ljava_io_IOException(), ("Unknown Selector type: " + x1))
  }
});
$c_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$.prototype.deserialize__Ljava_io_DataInputStream__O = (function(in$1) {
  return this.deserialize__Ljava_io_DataInputStream__Lsbt_testing_Selector(in$1)
});
$c_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$.prototype.serialize__O__Ljava_io_DataOutputStream__V = (function(x, out) {
  this.serialize__Lsbt_testing_Selector__Ljava_io_DataOutputStream__V($as_Lsbt_testing_Selector(x), out)
});
var $d_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_Serializer$SelectorSerializer$: 0
}, false, "org.scalajs.testing.common.Serializer$SelectorSerializer$", {
  Lorg_scalajs_testing_common_Serializer$SelectorSerializer$: 1,
  O: 1,
  Lorg_scalajs_testing_common_Serializer: 1
});
$c_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$.prototype.$classData = $d_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$;
var $n_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$;
function $m_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$() {
  if ((!$n_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$)) {
    $n_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$ = new $c_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$()
  };
  return $n_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_Serializer$StackTraceElementSerializer$() {
  /*<skip>*/
}
$c_Lorg_scalajs_testing_common_Serializer$StackTraceElementSerializer$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_Serializer$StackTraceElementSerializer$.prototype.constructor = $c_Lorg_scalajs_testing_common_Serializer$StackTraceElementSerializer$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_Serializer$StackTraceElementSerializer$() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_Serializer$StackTraceElementSerializer$.prototype = $c_Lorg_scalajs_testing_common_Serializer$StackTraceElementSerializer$.prototype;
$c_Lorg_scalajs_testing_common_Serializer$StackTraceElementSerializer$.prototype.serialize__jl_StackTraceElement__Ljava_io_DataOutputStream__V = (function(x, out) {
  var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).jl_StackTraceElement__f_declaringClass;
  var s = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  s.serialize__T__Ljava_io_DataOutputStream__V(t, out);
  var t$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).jl_StackTraceElement__f_methodName;
  var s$1 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  s$1.serialize__T__Ljava_io_DataOutputStream__V(t$1, out);
  var t$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Option$().apply__O__s_Option($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).jl_StackTraceElement__f_fileName);
  var evidence$4 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var s$2 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$2(evidence$4);
  s$2.serialize__s_Option__Ljava_io_DataOutputStream__V(t$2, out);
  var t$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).jl_StackTraceElement__f_lineNumber;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out).writeInt__I__V(t$3)
});
$c_Lorg_scalajs_testing_common_Serializer$StackTraceElementSerializer$.prototype.deserialize__Ljava_io_DataInputStream__jl_StackTraceElement = (function(in$1) {
  var s = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var $$x2 = s.deserialize__Ljava_io_DataInputStream__T(in$1);
  var s$1 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var $$x1 = s$1.deserialize__Ljava_io_DataInputStream__T(in$1);
  var evidence$4 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var s$2 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$2(evidence$4);
  var this$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s$2.deserialize__Ljava_io_DataInputStream__s_Option(in$1));
  var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_$less$colon$less$();
  var ev = this$5.s_$less$colon$less$__f_singleton;
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_StackTraceElement__T__T__T__I__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_StackTraceElement(), $$x2, $$x1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T((this$6.isEmpty__Z() ? ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ev), null) : this$6.get__O())), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$1).readInt__I())
});
$c_Lorg_scalajs_testing_common_Serializer$StackTraceElementSerializer$.prototype.deserialize__Ljava_io_DataInputStream__O = (function(in$1) {
  return this.deserialize__Ljava_io_DataInputStream__jl_StackTraceElement(in$1)
});
$c_Lorg_scalajs_testing_common_Serializer$StackTraceElementSerializer$.prototype.serialize__O__Ljava_io_DataOutputStream__V = (function(x, out) {
  this.serialize__jl_StackTraceElement__Ljava_io_DataOutputStream__V($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_StackTraceElement(x), out)
});
var $d_Lorg_scalajs_testing_common_Serializer$StackTraceElementSerializer$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_Serializer$StackTraceElementSerializer$: 0
}, false, "org.scalajs.testing.common.Serializer$StackTraceElementSerializer$", {
  Lorg_scalajs_testing_common_Serializer$StackTraceElementSerializer$: 1,
  O: 1,
  Lorg_scalajs_testing_common_Serializer: 1
});
$c_Lorg_scalajs_testing_common_Serializer$StackTraceElementSerializer$.prototype.$classData = $d_Lorg_scalajs_testing_common_Serializer$StackTraceElementSerializer$;
var $n_Lorg_scalajs_testing_common_Serializer$StackTraceElementSerializer$;
function $m_Lorg_scalajs_testing_common_Serializer$StackTraceElementSerializer$() {
  if ((!$n_Lorg_scalajs_testing_common_Serializer$StackTraceElementSerializer$)) {
    $n_Lorg_scalajs_testing_common_Serializer$StackTraceElementSerializer$ = new $c_Lorg_scalajs_testing_common_Serializer$StackTraceElementSerializer$()
  };
  return $n_Lorg_scalajs_testing_common_Serializer$StackTraceElementSerializer$
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_Serializer$StatusSerializer$() {
  /*<skip>*/
}
$c_Lorg_scalajs_testing_common_Serializer$StatusSerializer$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_Serializer$StatusSerializer$.prototype.constructor = $c_Lorg_scalajs_testing_common_Serializer$StatusSerializer$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_Serializer$StatusSerializer$() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_Serializer$StatusSerializer$.prototype = $c_Lorg_scalajs_testing_common_Serializer$StatusSerializer$.prototype;
$c_Lorg_scalajs_testing_common_Serializer$StatusSerializer$.prototype.deserialize__Ljava_io_DataInputStream__Lsbt_testing_Status = (function(in$1) {
  var values = $m_Lsbt_testing_Status$().values__ALsbt_testing_Status();
  var ord = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$1).readInt__I();
  if (((ord < 0) || (ord >= ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(values).u.length)))) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_Ljava_io_IOException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Ljava_io_IOException(), ("Got bad status ordinal: " + ord))
  };
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(values).get(ord)
});
$c_Lorg_scalajs_testing_common_Serializer$StatusSerializer$.prototype.deserialize__Ljava_io_DataInputStream__O = (function(in$1) {
  return this.deserialize__Ljava_io_DataInputStream__Lsbt_testing_Status(in$1)
});
$c_Lorg_scalajs_testing_common_Serializer$StatusSerializer$.prototype.serialize__O__Ljava_io_DataOutputStream__V = (function(x, out) {
  var x$1 = $as_Lsbt_testing_Status(x);
  var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1).jl_Enum__f__ordinal;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out).writeInt__I__V(t)
});
var $d_Lorg_scalajs_testing_common_Serializer$StatusSerializer$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_Serializer$StatusSerializer$: 0
}, false, "org.scalajs.testing.common.Serializer$StatusSerializer$", {
  Lorg_scalajs_testing_common_Serializer$StatusSerializer$: 1,
  O: 1,
  Lorg_scalajs_testing_common_Serializer: 1
});
$c_Lorg_scalajs_testing_common_Serializer$StatusSerializer$.prototype.$classData = $d_Lorg_scalajs_testing_common_Serializer$StatusSerializer$;
var $n_Lorg_scalajs_testing_common_Serializer$StatusSerializer$;
function $m_Lorg_scalajs_testing_common_Serializer$StatusSerializer$() {
  if ((!$n_Lorg_scalajs_testing_common_Serializer$StatusSerializer$)) {
    $n_Lorg_scalajs_testing_common_Serializer$StatusSerializer$ = new $c_Lorg_scalajs_testing_common_Serializer$StatusSerializer$()
  };
  return $n_Lorg_scalajs_testing_common_Serializer$StatusSerializer$
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_Serializer$StringSerializer$() {
  /*<skip>*/
}
$c_Lorg_scalajs_testing_common_Serializer$StringSerializer$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_Serializer$StringSerializer$.prototype.constructor = $c_Lorg_scalajs_testing_common_Serializer$StringSerializer$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_Serializer$StringSerializer$() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_Serializer$StringSerializer$.prototype = $c_Lorg_scalajs_testing_common_Serializer$StringSerializer$.prototype;
$c_Lorg_scalajs_testing_common_Serializer$StringSerializer$.prototype.serialize__T__Ljava_io_DataOutputStream__V = (function(x, out) {
  var $$x1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out);
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x1).writeInt__I__V(this$1.length);
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x);
  var end = this$3.length;
  var isEmpty = (end <= 0);
  var scala$collection$immutable$Range$$lastElement = (((-1) + end) | 0);
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      var v1 = i;
      var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x);
      var c = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$charAt(this$8, v1);
      if (((c <= 127) && (c >= 1))) {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out).write__I__V(c)
      } else if ((c < 2048)) {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out).write__I__V((192 | (c >> 6)));
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out).write__I__V((128 | (63 & c)))
      } else {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out).write__I__V((224 | (c >> 12)));
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out).write__I__V((128 | (63 & (c >> 6))));
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out).write__I__V((128 | (63 & c)))
      };
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break
      };
      i = ((1 + i) | 0)
    }
  }
});
$c_Lorg_scalajs_testing_common_Serializer$StringSerializer$.prototype.deserialize__Ljava_io_DataInputStream__T = (function(in$1) {
  var n = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$1).readInt__I();
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_reflect_ManifestFactory$CharManifest$();
  if ((n <= 0)) {
    var chars = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C(0)
  } else {
    var array = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C(n);
    var i = 0;
    while ((i < n)) {
      var $$x2 = i;
      var a = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$1).readByte__B();
      if (((128 & a) === 0)) {
        var $$x1 = (65535 & a)
      } else if (((224 & a) === 192)) {
        var b = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$1).readByte__B();
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$().require__Z__V(((192 & b) === 128));
        var $$x1 = (65535 & (((31 & a) << 6) | (63 & b)))
      } else {
        if (((240 & a) !== 224)) {
          throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IllegalArgumentException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IllegalArgumentException(), ("bad byte: " + a))
        };
        var b$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$1).readByte__B();
        var c = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$1).readByte__B();
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$().require__Z__V(((192 & b$2) === 128));
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$().require__Z__V(((192 & c) === 128));
        var $$x1 = (65535 & ((((15 & a) << 12) | ((63 & b$2) << 6)) | (63 & c)))
      };
      array.set($$x2, $$x1);
      i = ((1 + i) | 0)
    };
    var chars = array
  };
  var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_jl_String$();
  return this$4.new__AC__I__I__T(chars, 0, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chars).u.length)
});
$c_Lorg_scalajs_testing_common_Serializer$StringSerializer$.prototype.deserialize__Ljava_io_DataInputStream__O = (function(in$1) {
  return this.deserialize__Ljava_io_DataInputStream__T(in$1)
});
$c_Lorg_scalajs_testing_common_Serializer$StringSerializer$.prototype.serialize__O__Ljava_io_DataOutputStream__V = (function(x, out) {
  this.serialize__T__Ljava_io_DataOutputStream__V($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(x), out)
});
var $d_Lorg_scalajs_testing_common_Serializer$StringSerializer$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_Serializer$StringSerializer$: 0
}, false, "org.scalajs.testing.common.Serializer$StringSerializer$", {
  Lorg_scalajs_testing_common_Serializer$StringSerializer$: 1,
  O: 1,
  Lorg_scalajs_testing_common_Serializer: 1
});
$c_Lorg_scalajs_testing_common_Serializer$StringSerializer$.prototype.$classData = $d_Lorg_scalajs_testing_common_Serializer$StringSerializer$;
var $n_Lorg_scalajs_testing_common_Serializer$StringSerializer$;
function $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$() {
  if ((!$n_Lorg_scalajs_testing_common_Serializer$StringSerializer$)) {
    $n_Lorg_scalajs_testing_common_Serializer$StringSerializer$ = new $c_Lorg_scalajs_testing_common_Serializer$StringSerializer$()
  };
  return $n_Lorg_scalajs_testing_common_Serializer$StringSerializer$
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$() {
  /*<skip>*/
}
$c_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$.prototype.constructor = $c_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$.prototype = $c_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$.prototype;
$c_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$.prototype.serialize__Lsbt_testing_TaskDef__Ljava_io_DataOutputStream__V = (function(x, out) {
  var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lsbt_testing_TaskDef__f__fullyQualifiedName;
  var s = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  s.serialize__T__Ljava_io_DataOutputStream__V(t, out);
  var t$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lsbt_testing_TaskDef__f__fingerprint;
  var s$1 = $m_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$();
  s$1.serialize__Lsbt_testing_Fingerprint__Ljava_io_DataOutputStream__V(t$1, out);
  var t$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lsbt_testing_TaskDef__f__explicitlySpecified;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out).writeBoolean__Z__V(t$2);
  var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$().wrapRefArray__AO__scm_ArraySeq$ofRef($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lsbt_testing_TaskDef__f__selectors));
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_List$();
  var t$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(this$4);
  var evidence$3 = $m_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$();
  var s$3 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3);
  s$3.serialize__sci_List__Ljava_io_DataOutputStream__V(t$3, out)
});
$c_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$.prototype.deserialize__Ljava_io_DataInputStream__Lsbt_testing_TaskDef = (function(in$1) {
  var s = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var $$x4 = s.deserialize__Ljava_io_DataInputStream__T(in$1);
  var s$1 = $m_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$();
  var $$x3 = s$1.deserialize__Ljava_io_DataInputStream__Lsbt_testing_Fingerprint(in$1);
  var $$x2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$1).readBoolean__Z();
  var evidence$3 = $m_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$();
  var s$3 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3);
  var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s$3.deserialize__Ljava_io_DataInputStream__sci_List(in$1));
  if ((this$7.knownSize__I() >= 0)) {
    var len = this$7.knownSize__I();
    var destination = new ($d_Lsbt_testing_Selector.getArrayOf().constr)(len);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__copyToArray__O__I__I__I(this$7, destination, 0, 2147483647);
    var $$x1 = destination
  } else {
    var capacity = 0;
    var jsElems = null;
    capacity = 0;
    jsElems = [];
    var it = this$7.iterator__sc_Iterator();
    while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).hasNext__Z()) {
      var elem = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).next__O();
      var unboxedElem = ((elem === null) ? null : elem);
      jsElems.push(unboxedElem)
    };
    var $$x1 = new ($d_Lsbt_testing_Selector.getArrayOf().constr)(jsElems)
  };
  return new $c_Lsbt_testing_TaskDef($$x4, $$x3, $$x2, $$x1)
});
$c_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$.prototype.deserialize__Ljava_io_DataInputStream__O = (function(in$1) {
  return this.deserialize__Ljava_io_DataInputStream__Lsbt_testing_TaskDef(in$1)
});
$c_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$.prototype.serialize__O__Ljava_io_DataOutputStream__V = (function(x, out) {
  this.serialize__Lsbt_testing_TaskDef__Ljava_io_DataOutputStream__V($as_Lsbt_testing_TaskDef(x), out)
});
var $d_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$: 0
}, false, "org.scalajs.testing.common.Serializer$TaskDefSerializer$", {
  Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$: 1,
  O: 1,
  Lorg_scalajs_testing_common_Serializer: 1
});
$c_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$.prototype.$classData = $d_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$;
var $n_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$;
function $m_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$() {
  if ((!$n_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$)) {
    $n_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$ = new $c_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$()
  };
  return $n_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$() {
  /*<skip>*/
}
$c_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$.prototype.constructor = $c_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$.prototype = $c_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$.prototype;
$c_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$.prototype.serialize__jl_Throwable__Ljava_io_DataOutputStream__V = (function(x, out) {
  var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Option$().apply__O__s_Option($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).getMessage__T());
  var evidence$4 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var s = new $c_Lorg_scalajs_testing_common_Serializer$$anon$2(evidence$4);
  s.serialize__s_Option__Ljava_io_DataOutputStream__V(t, out);
  var t$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).toString__T();
  var s$1 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  s$1.serialize__T__Ljava_io_DataOutputStream__V(t$1, out);
  var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$().wrapRefArray__AO__scm_ArraySeq$ofRef($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).getStackTrace__Ajl_StackTraceElement()));
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_List$();
  var t$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(this$4);
  var evidence$3 = $m_Lorg_scalajs_testing_common_Serializer$StackTraceElementSerializer$();
  var s$2 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3);
  s$2.serialize__sci_List__Ljava_io_DataOutputStream__V(t$2, out);
  var t$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Option$().apply__O__s_Option($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).getCause__jl_Throwable());
  var evidence$4$1 = $m_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$();
  var s$3 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$2(evidence$4$1);
  s$3.serialize__s_Option__Ljava_io_DataOutputStream__V(t$3, out)
});
$c_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$.prototype.deserialize__Ljava_io_DataInputStream__jl_Throwable = (function(in$1) {
  var evidence$4 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var s = new $c_Lorg_scalajs_testing_common_Serializer$$anon$2(evidence$4);
  var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s.deserialize__Ljava_io_DataInputStream__s_Option(in$1));
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_$less$colon$less$();
  var ev = this$3.s_$less$colon$less$__f_singleton;
  var msg = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T((this$4.isEmpty__Z() ? ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ev), null) : this$4.get__O()));
  var s$1 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var toStr = s$1.deserialize__Ljava_io_DataInputStream__T(in$1);
  var evidence$3 = $m_Lorg_scalajs_testing_common_Serializer$StackTraceElementSerializer$();
  var s$2 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3);
  var trace = s$2.deserialize__Ljava_io_DataInputStream__sci_List(in$1);
  var evidence$4$1 = $m_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$();
  var s$3 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$2(evidence$4$1);
  var cause = s$3.deserialize__Ljava_io_DataInputStream__s_Option(in$1);
  var res = new $c_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$$anon$3(msg, cause, toStr);
  var this$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace);
  if ((this$12.knownSize__I() >= 0)) {
    var len = this$12.knownSize__I();
    var destination = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_jl_StackTraceElement.getArrayOf().constr)(len);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__copyToArray__O__I__I__I(this$12, destination, 0, 2147483647);
    var $$x1 = destination
  } else {
    var capacity = 0;
    var jsElems = null;
    capacity = 0;
    jsElems = [];
    var it = this$12.iterator__sc_Iterator();
    while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).hasNext__Z()) {
      var elem = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).next__O();
      var unboxedElem = ((elem === null) ? null : elem);
      jsElems.push(unboxedElem)
    };
    var $$x1 = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_jl_StackTraceElement.getArrayOf().constr)(jsElems)
  };
  res.setStackTrace__Ajl_StackTraceElement__V($$x1);
  return res
});
$c_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$.prototype.deserialize__Ljava_io_DataInputStream__O = (function(in$1) {
  return this.deserialize__Ljava_io_DataInputStream__jl_Throwable(in$1)
});
$c_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$.prototype.serialize__O__Ljava_io_DataOutputStream__V = (function(x, out) {
  this.serialize__jl_Throwable__Ljava_io_DataOutputStream__V($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Throwable(x), out)
});
var $d_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$: 0
}, false, "org.scalajs.testing.common.Serializer$ThrowableSerializer$", {
  Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$: 1,
  O: 1,
  Lorg_scalajs_testing_common_Serializer: 1
});
$c_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$.prototype.$classData = $d_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$;
var $n_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$;
function $m_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$() {
  if ((!$n_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$)) {
    $n_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$ = new $c_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$()
  };
  return $n_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_Serializer$UnitSerializer$() {
  /*<skip>*/
}
$c_Lorg_scalajs_testing_common_Serializer$UnitSerializer$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_Serializer$UnitSerializer$.prototype.constructor = $c_Lorg_scalajs_testing_common_Serializer$UnitSerializer$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_Serializer$UnitSerializer$() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_Serializer$UnitSerializer$.prototype = $c_Lorg_scalajs_testing_common_Serializer$UnitSerializer$.prototype;
$c_Lorg_scalajs_testing_common_Serializer$UnitSerializer$.prototype.deserialize__Ljava_io_DataInputStream__O = (function(in$1) {
  return (void 0)
});
$c_Lorg_scalajs_testing_common_Serializer$UnitSerializer$.prototype.serialize__O__Ljava_io_DataOutputStream__V = (function(x, out) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Void(x)
});
var $d_Lorg_scalajs_testing_common_Serializer$UnitSerializer$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_Serializer$UnitSerializer$: 0
}, false, "org.scalajs.testing.common.Serializer$UnitSerializer$", {
  Lorg_scalajs_testing_common_Serializer$UnitSerializer$: 1,
  O: 1,
  Lorg_scalajs_testing_common_Serializer: 1
});
$c_Lorg_scalajs_testing_common_Serializer$UnitSerializer$.prototype.$classData = $d_Lorg_scalajs_testing_common_Serializer$UnitSerializer$;
var $n_Lorg_scalajs_testing_common_Serializer$UnitSerializer$;
function $m_Lorg_scalajs_testing_common_Serializer$UnitSerializer$() {
  if ((!$n_Lorg_scalajs_testing_common_Serializer$UnitSerializer$)) {
    $n_Lorg_scalajs_testing_common_Serializer$UnitSerializer$ = new $c_Lorg_scalajs_testing_common_Serializer$UnitSerializer$()
  };
  return $n_Lorg_scalajs_testing_common_Serializer$UnitSerializer$
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$() {
  /*<skip>*/
}
$c_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$.prototype.constructor = $c_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$.prototype = $c_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$.prototype;
$c_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$.prototype.serialize__Lorg_scalajs_testing_common_TaskInfo__Ljava_io_DataOutputStream__V = (function(x, out) {
  var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lorg_scalajs_testing_common_TaskInfo__f_serializedTask;
  var s = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  s.serialize__T__Ljava_io_DataOutputStream__V(t, out);
  var t$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lorg_scalajs_testing_common_TaskInfo__f_taskDef;
  var s$1 = $m_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$();
  s$1.serialize__Lsbt_testing_TaskDef__Ljava_io_DataOutputStream__V(t$1, out);
  var t$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lorg_scalajs_testing_common_TaskInfo__f_tags;
  var evidence$3 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var s$2 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3);
  s$2.serialize__sci_List__Ljava_io_DataOutputStream__V(t$2, out)
});
$c_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$.prototype.deserialize__Ljava_io_DataInputStream__Lorg_scalajs_testing_common_TaskInfo = (function(in$1) {
  var s = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var $$x2 = s.deserialize__Ljava_io_DataInputStream__T(in$1);
  var s$1 = $m_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$();
  var $$x1 = s$1.deserialize__Ljava_io_DataInputStream__Lsbt_testing_TaskDef(in$1);
  var evidence$3 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var s$2 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3);
  return new $c_Lorg_scalajs_testing_common_TaskInfo($$x2, $$x1, s$2.deserialize__Ljava_io_DataInputStream__sci_List(in$1))
});
$c_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$.prototype.deserialize__Ljava_io_DataInputStream__O = (function(in$1) {
  return this.deserialize__Ljava_io_DataInputStream__Lorg_scalajs_testing_common_TaskInfo(in$1)
});
$c_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$.prototype.serialize__O__Ljava_io_DataOutputStream__V = (function(x, out) {
  this.serialize__Lorg_scalajs_testing_common_TaskInfo__Ljava_io_DataOutputStream__V($as_Lorg_scalajs_testing_common_TaskInfo(x), out)
});
var $d_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$: 0
}, false, "org.scalajs.testing.common.TaskInfo$TaskInfoSerializer$", {
  Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$: 1,
  O: 1,
  Lorg_scalajs_testing_common_Serializer: 1
});
$c_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$.prototype.$classData = $d_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$;
var $n_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$;
function $m_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$() {
  if ((!$n_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$)) {
    $n_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$ = new $c_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$()
  };
  return $n_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_TestBridgeMode$TestBridgeModeSerializer$() {
  /*<skip>*/
}
$c_Lorg_scalajs_testing_common_TestBridgeMode$TestBridgeModeSerializer$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_TestBridgeMode$TestBridgeModeSerializer$.prototype.constructor = $c_Lorg_scalajs_testing_common_TestBridgeMode$TestBridgeModeSerializer$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_TestBridgeMode$TestBridgeModeSerializer$() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_TestBridgeMode$TestBridgeModeSerializer$.prototype = $c_Lorg_scalajs_testing_common_TestBridgeMode$TestBridgeModeSerializer$.prototype;
$c_Lorg_scalajs_testing_common_TestBridgeMode$TestBridgeModeSerializer$.prototype.serialize__Lorg_scalajs_testing_common_TestBridgeMode__Ljava_io_DataOutputStream__V = (function(x, out) {
  var x$2 = $m_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$();
  if ((x$2 === x)) {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out).writeInt__I__V(0)
  } else if ((x instanceof $c_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner)) {
    var x3 = $as_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner(x);
    var tests = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner__f_tests;
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out).writeInt__I__V(1);
    var s$2 = $m_Lorg_scalajs_testing_common_IsolatedTestSet$IsolatedTestSetSerializer$();
    s$2.serialize__Lorg_scalajs_testing_common_IsolatedTestSet__Ljava_io_DataOutputStream__V(tests, out)
  } else {
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x)
  }
});
$c_Lorg_scalajs_testing_common_TestBridgeMode$TestBridgeModeSerializer$.prototype.deserialize__Ljava_io_DataInputStream__Lorg_scalajs_testing_common_TestBridgeMode = (function(in$1) {
  var x1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$1).readInt__I();
  switch (x1) {
    case 0: {
      return $m_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$();
      break
    }
    case 1: {
      var s$1 = $m_Lorg_scalajs_testing_common_IsolatedTestSet$IsolatedTestSetSerializer$();
      return new $c_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner(s$1.deserialize__Ljava_io_DataInputStream__Lorg_scalajs_testing_common_IsolatedTestSet(in$1));
      break
    }
    default: {
      throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_Ljava_io_IOException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Ljava_io_IOException(), ("Unknown bridge mode: " + x1))
    }
  }
});
$c_Lorg_scalajs_testing_common_TestBridgeMode$TestBridgeModeSerializer$.prototype.deserialize__Ljava_io_DataInputStream__O = (function(in$1) {
  return this.deserialize__Ljava_io_DataInputStream__Lorg_scalajs_testing_common_TestBridgeMode(in$1)
});
$c_Lorg_scalajs_testing_common_TestBridgeMode$TestBridgeModeSerializer$.prototype.serialize__O__Ljava_io_DataOutputStream__V = (function(x, out) {
  this.serialize__Lorg_scalajs_testing_common_TestBridgeMode__Ljava_io_DataOutputStream__V($as_Lorg_scalajs_testing_common_TestBridgeMode(x), out)
});
var $d_Lorg_scalajs_testing_common_TestBridgeMode$TestBridgeModeSerializer$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_TestBridgeMode$TestBridgeModeSerializer$: 0
}, false, "org.scalajs.testing.common.TestBridgeMode$TestBridgeModeSerializer$", {
  Lorg_scalajs_testing_common_TestBridgeMode$TestBridgeModeSerializer$: 1,
  O: 1,
  Lorg_scalajs_testing_common_Serializer: 1
});
$c_Lorg_scalajs_testing_common_TestBridgeMode$TestBridgeModeSerializer$.prototype.$classData = $d_Lorg_scalajs_testing_common_TestBridgeMode$TestBridgeModeSerializer$;
var $n_Lorg_scalajs_testing_common_TestBridgeMode$TestBridgeModeSerializer$;
function $m_Lorg_scalajs_testing_common_TestBridgeMode$TestBridgeModeSerializer$() {
  if ((!$n_Lorg_scalajs_testing_common_TestBridgeMode$TestBridgeModeSerializer$)) {
    $n_Lorg_scalajs_testing_common_TestBridgeMode$TestBridgeModeSerializer$ = new $c_Lorg_scalajs_testing_common_TestBridgeMode$TestBridgeModeSerializer$()
  };
  return $n_Lorg_scalajs_testing_common_TestBridgeMode$TestBridgeModeSerializer$
}
function $is_Lsbt_testing_AnnotatedFingerprint(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lsbt_testing_AnnotatedFingerprint)))
}
function $as_Lsbt_testing_AnnotatedFingerprint(obj) {
  return (($is_Lsbt_testing_AnnotatedFingerprint(obj) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "sbt.testing.AnnotatedFingerprint"))
}
function $isArrayOf_Lsbt_testing_AnnotatedFingerprint(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lsbt_testing_AnnotatedFingerprint)))
}
function $asArrayOf_Lsbt_testing_AnnotatedFingerprint(obj, depth) {
  return (($isArrayOf_Lsbt_testing_AnnotatedFingerprint(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lsbt.testing.AnnotatedFingerprint;", depth))
}
function $ct_Lsbt_testing_OptionalThrowable__jl_Throwable__($thiz, exception) {
  $thiz.Lsbt_testing_OptionalThrowable__f_exception = exception;
  return $thiz
}
function $ct_Lsbt_testing_OptionalThrowable__($thiz) {
  $ct_Lsbt_testing_OptionalThrowable__jl_Throwable__($thiz, null);
  return $thiz
}
/** @constructor */
function $c_Lsbt_testing_OptionalThrowable() {
  this.Lsbt_testing_OptionalThrowable__f_exception = null
}
$c_Lsbt_testing_OptionalThrowable.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lsbt_testing_OptionalThrowable.prototype.constructor = $c_Lsbt_testing_OptionalThrowable;
/** @constructor */
function $h_Lsbt_testing_OptionalThrowable() {
  /*<skip>*/
}
$h_Lsbt_testing_OptionalThrowable.prototype = $c_Lsbt_testing_OptionalThrowable.prototype;
$c_Lsbt_testing_OptionalThrowable.prototype.isDefined__Z = (function() {
  return (this.Lsbt_testing_OptionalThrowable__f_exception !== null)
});
$c_Lsbt_testing_OptionalThrowable.prototype.get__jl_Throwable = (function() {
  if ((this.Lsbt_testing_OptionalThrowable__f_exception === null)) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IllegalStateException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IllegalStateException(), "This OptionalThrowable is not defined")
  } else {
    return this.Lsbt_testing_OptionalThrowable__f_exception
  }
});
$c_Lsbt_testing_OptionalThrowable.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_Lsbt_testing_OptionalThrowable)) {
    var x2 = $as_Lsbt_testing_OptionalThrowable(that);
    return (this.Lsbt_testing_OptionalThrowable__f_exception === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).Lsbt_testing_OptionalThrowable__f_exception)
  } else {
    return false
  }
});
$c_Lsbt_testing_OptionalThrowable.prototype.hashCode__I = (function() {
  return ((this.Lsbt_testing_OptionalThrowable__f_exception === null) ? 0 : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lsbt_testing_OptionalThrowable__f_exception).hashCode__I())
});
$c_Lsbt_testing_OptionalThrowable.prototype.toString__T = (function() {
  return ((this.Lsbt_testing_OptionalThrowable__f_exception === null) ? "OptionalThrowable()" : (("OptionalThrowable(" + this.Lsbt_testing_OptionalThrowable__f_exception) + ")"))
});
function $as_Lsbt_testing_OptionalThrowable(obj) {
  return (((obj instanceof $c_Lsbt_testing_OptionalThrowable) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "sbt.testing.OptionalThrowable"))
}
function $isArrayOf_Lsbt_testing_OptionalThrowable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lsbt_testing_OptionalThrowable)))
}
function $asArrayOf_Lsbt_testing_OptionalThrowable(obj, depth) {
  return (($isArrayOf_Lsbt_testing_OptionalThrowable(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lsbt.testing.OptionalThrowable;", depth))
}
var $d_Lsbt_testing_OptionalThrowable = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lsbt_testing_OptionalThrowable: 0
}, false, "sbt.testing.OptionalThrowable", {
  Lsbt_testing_OptionalThrowable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Lsbt_testing_OptionalThrowable.prototype.$classData = $d_Lsbt_testing_OptionalThrowable;
/** @constructor */
function $c_Lsbt_testing_Status$() {
  this.Lsbt_testing_Status$__f_Success = null;
  this.Lsbt_testing_Status$__f_Error = null;
  this.Lsbt_testing_Status$__f_Failure = null;
  this.Lsbt_testing_Status$__f_Skipped = null;
  this.Lsbt_testing_Status$__f_Ignored = null;
  this.Lsbt_testing_Status$__f_Canceled = null;
  this.Lsbt_testing_Status$__f_Pending = null;
  this.Lsbt_testing_Status$__f__values = null;
  $n_Lsbt_testing_Status$ = this;
  this.Lsbt_testing_Status$__f_Success = new $c_Lsbt_testing_Status("Success", 0);
  this.Lsbt_testing_Status$__f_Error = new $c_Lsbt_testing_Status("Error", 1);
  this.Lsbt_testing_Status$__f_Failure = new $c_Lsbt_testing_Status("Failure", 2);
  this.Lsbt_testing_Status$__f_Skipped = new $c_Lsbt_testing_Status("Skipped", 3);
  this.Lsbt_testing_Status$__f_Ignored = new $c_Lsbt_testing_Status("Ignored", 4);
  this.Lsbt_testing_Status$__f_Canceled = new $c_Lsbt_testing_Status("Canceled", 5);
  this.Lsbt_testing_Status$__f_Pending = new $c_Lsbt_testing_Status("Pending", 6);
  this.Lsbt_testing_Status$__f__values = new ($d_Lsbt_testing_Status.getArrayOf().constr)([this.Lsbt_testing_Status$__f_Success, this.Lsbt_testing_Status$__f_Error, this.Lsbt_testing_Status$__f_Failure, this.Lsbt_testing_Status$__f_Skipped, this.Lsbt_testing_Status$__f_Ignored, this.Lsbt_testing_Status$__f_Canceled, this.Lsbt_testing_Status$__f_Pending])
}
$c_Lsbt_testing_Status$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lsbt_testing_Status$.prototype.constructor = $c_Lsbt_testing_Status$;
/** @constructor */
function $h_Lsbt_testing_Status$() {
  /*<skip>*/
}
$h_Lsbt_testing_Status$.prototype = $c_Lsbt_testing_Status$.prototype;
$c_Lsbt_testing_Status$.prototype.values__ALsbt_testing_Status = (function() {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lsbt_testing_Status$__f__values);
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$1).clone__O()
});
var $d_Lsbt_testing_Status$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lsbt_testing_Status$: 0
}, false, "sbt.testing.Status$", {
  Lsbt_testing_Status$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Lsbt_testing_Status$.prototype.$classData = $d_Lsbt_testing_Status$;
var $n_Lsbt_testing_Status$;
function $m_Lsbt_testing_Status$() {
  if ((!$n_Lsbt_testing_Status$)) {
    $n_Lsbt_testing_Status$ = new $c_Lsbt_testing_Status$()
  };
  return $n_Lsbt_testing_Status$
}
function $is_Lsbt_testing_SubclassFingerprint(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lsbt_testing_SubclassFingerprint)))
}
function $as_Lsbt_testing_SubclassFingerprint(obj) {
  return (($is_Lsbt_testing_SubclassFingerprint(obj) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "sbt.testing.SubclassFingerprint"))
}
function $isArrayOf_Lsbt_testing_SubclassFingerprint(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lsbt_testing_SubclassFingerprint)))
}
function $asArrayOf_Lsbt_testing_SubclassFingerprint(obj, depth) {
  return (($isArrayOf_Lsbt_testing_SubclassFingerprint(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lsbt.testing.SubclassFingerprint;", depth))
}
/** @constructor */
function $c_Lsbt_testing_TaskDef(_fullyQualifiedName, _fingerprint, _explicitlySpecified, _selectors) {
  this.Lsbt_testing_TaskDef__f__fullyQualifiedName = null;
  this.Lsbt_testing_TaskDef__f__fingerprint = null;
  this.Lsbt_testing_TaskDef__f__explicitlySpecified = false;
  this.Lsbt_testing_TaskDef__f__selectors = null;
  this.Lsbt_testing_TaskDef__f__fullyQualifiedName = _fullyQualifiedName;
  this.Lsbt_testing_TaskDef__f__fingerprint = _fingerprint;
  this.Lsbt_testing_TaskDef__f__explicitlySpecified = _explicitlySpecified;
  this.Lsbt_testing_TaskDef__f__selectors = _selectors;
  if ((_fullyQualifiedName === null)) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_NullPointerException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_NullPointerException(), "fullyQualifiedName was null")
  };
  if ((_fingerprint === null)) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_NullPointerException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_NullPointerException(), "fingerprint was null")
  };
  if ((_selectors === null)) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_NullPointerException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_NullPointerException(), "selectors was null")
  }
}
$c_Lsbt_testing_TaskDef.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lsbt_testing_TaskDef.prototype.constructor = $c_Lsbt_testing_TaskDef;
/** @constructor */
function $h_Lsbt_testing_TaskDef() {
  /*<skip>*/
}
$h_Lsbt_testing_TaskDef.prototype = $c_Lsbt_testing_TaskDef.prototype;
$c_Lsbt_testing_TaskDef.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_Lsbt_testing_TaskDef)) {
    var x2 = $as_Lsbt_testing_TaskDef(that);
    if ((this.Lsbt_testing_TaskDef__f__fullyQualifiedName === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).Lsbt_testing_TaskDef__f__fullyQualifiedName)) {
      var x = this.Lsbt_testing_TaskDef__f__fingerprint;
      var x$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).Lsbt_testing_TaskDef__f__fingerprint;
      if ((x === null)) {
        var $$x1 = (x$2 === null)
      } else {
        var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x);
        var $$x1 = (this$1 === x$2)
      }
    } else {
      var $$x1 = false
    };
    if (($$x1 && (this.Lsbt_testing_TaskDef__f__explicitlySpecified === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).Lsbt_testing_TaskDef__f__explicitlySpecified))) {
      var a = this.Lsbt_testing_TaskDef__f__selectors;
      var b = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).Lsbt_testing_TaskDef__f__selectors;
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_ju_Arrays$().equals__AO__AO__Z(a, b)
    } else {
      return false
    }
  } else {
    return false
  }
});
$c_Lsbt_testing_TaskDef.prototype.hashCode__I = (function() {
  var retVal = 17;
  retVal = ((Math.imul(31, retVal) + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__hashCode__I($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lsbt_testing_TaskDef__f__fullyQualifiedName))) | 0);
  var $$x1 = retVal;
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lsbt_testing_TaskDef__f__fingerprint);
  retVal = ((Math.imul(31, $$x1) + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$systemIdentityHashCode(this$1)) | 0);
  retVal = ((Math.imul(31, retVal) + (this.Lsbt_testing_TaskDef__f__explicitlySpecified ? 1 : 0)) | 0);
  var $$x2 = retVal;
  var a = this.Lsbt_testing_TaskDef__f__selectors;
  retVal = ((Math.imul(31, $$x2) + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_ju_Arrays$().hashCode__AO__I(a)) | 0);
  return retVal
});
$c_Lsbt_testing_TaskDef.prototype.toString__T = (function() {
  var $$x3 = this.Lsbt_testing_TaskDef__f__fullyQualifiedName;
  var $$x2 = this.Lsbt_testing_TaskDef__f__fingerprint;
  var $$x1 = this.Lsbt_testing_TaskDef__f__explicitlySpecified;
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$().wrapRefArray__AO__scm_ArraySeq$ofRef(this.Lsbt_testing_TaskDef__f__selectors));
  return (((((((("TaskDef(" + $$x3) + ", ") + $$x2) + ", ") + $$x1) + ", ") + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__mkString__T__T__T__T(this$1, "[", ", ", "]")) + ")")
});
function $as_Lsbt_testing_TaskDef(obj) {
  return (((obj instanceof $c_Lsbt_testing_TaskDef) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "sbt.testing.TaskDef"))
}
function $isArrayOf_Lsbt_testing_TaskDef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lsbt_testing_TaskDef)))
}
function $asArrayOf_Lsbt_testing_TaskDef(obj, depth) {
  return (($isArrayOf_Lsbt_testing_TaskDef(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lsbt.testing.TaskDef;", depth))
}
var $d_Lsbt_testing_TaskDef = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lsbt_testing_TaskDef: 0
}, false, "sbt.testing.TaskDef", {
  Lsbt_testing_TaskDef: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Lsbt_testing_TaskDef.prototype.$classData = $d_Lsbt_testing_TaskDef;
/** @constructor */
function $c_s_Console$() {
  this.s_Console$__f_outVar = null;
  $n_s_Console$ = this;
  this.s_Console$__f_outVar = new $c_s_util_DynamicVariable($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_jl_System$Streams$().jl_System$Streams$__f_out);
  new $c_s_util_DynamicVariable($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_jl_System$Streams$().jl_System$Streams$__f_err);
  new $c_s_util_DynamicVariable(null)
}
$c_s_Console$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_s_Console$.prototype.constructor = $c_s_Console$;
/** @constructor */
function $h_s_Console$() {
  /*<skip>*/
}
$h_s_Console$.prototype = $c_s_Console$.prototype;
$c_s_Console$.prototype.out__Ljava_io_PrintStream = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Ljava_io_PrintStream($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.s_Console$__f_outVar).s_util_DynamicVariable__f_v)
});
var $d_s_Console$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  s_Console$: 0
}, false, "scala.Console$", {
  s_Console$: 1,
  O: 1,
  s_io_AnsiColor: 1
});
$c_s_Console$.prototype.$classData = $d_s_Console$;
var $n_s_Console$;
function $m_s_Console$() {
  if ((!$n_s_Console$)) {
    $n_s_Console$ = new $c_s_Console$()
  };
  return $n_s_Console$
}
/** @constructor */
function $c_sc_BuildFrom$$anon$5() {
  /*<skip>*/
}
$c_sc_BuildFrom$$anon$5.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_sc_BuildFrom$$anon$5.prototype.constructor = $c_sc_BuildFrom$$anon$5;
/** @constructor */
function $h_sc_BuildFrom$$anon$5() {
  /*<skip>*/
}
$h_sc_BuildFrom$$anon$5.prototype = $c_sc_BuildFrom$$anon$5.prototype;
$c_sc_BuildFrom$$anon$5.prototype.newBuilder__O__scm_Builder = (function(from) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(from);
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($m_sc_Factory$().sc_Factory$__f_stringFactory).newBuilder__scm_Builder()
});
var $d_sc_BuildFrom$$anon$5 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  sc_BuildFrom$$anon$5: 0
}, false, "scala.collection.BuildFrom$$anon$5", {
  sc_BuildFrom$$anon$5: 1,
  O: 1,
  sc_BuildFrom: 1
});
$c_sc_BuildFrom$$anon$5.prototype.$classData = $d_sc_BuildFrom$$anon$5;
/** @constructor */
function $c_sc_BuildFrom$$anon$6() {
  /*<skip>*/
}
$c_sc_BuildFrom$$anon$6.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_sc_BuildFrom$$anon$6.prototype.constructor = $c_sc_BuildFrom$$anon$6;
/** @constructor */
function $h_sc_BuildFrom$$anon$6() {
  /*<skip>*/
}
$h_sc_BuildFrom$$anon$6.prototype = $c_sc_BuildFrom$$anon$6.prototype;
$c_sc_BuildFrom$$anon$6.prototype.newBuilder__O__scm_Builder = (function(from) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_WrappedString(from);
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_WrappedString$().newBuilder__scm_Builder()
});
var $d_sc_BuildFrom$$anon$6 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  sc_BuildFrom$$anon$6: 0
}, false, "scala.collection.BuildFrom$$anon$6", {
  sc_BuildFrom$$anon$6: 1,
  O: 1,
  sc_BuildFrom: 1
});
$c_sc_BuildFrom$$anon$6.prototype.$classData = $d_sc_BuildFrom$$anon$6;
/** @constructor */
function $c_sc_BuildFromLowPriority2$$anon$11(outer) {
  /*<skip>*/
}
$c_sc_BuildFromLowPriority2$$anon$11.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_sc_BuildFromLowPriority2$$anon$11.prototype.constructor = $c_sc_BuildFromLowPriority2$$anon$11;
/** @constructor */
function $h_sc_BuildFromLowPriority2$$anon$11() {
  /*<skip>*/
}
$h_sc_BuildFromLowPriority2$$anon$11.prototype = $c_sc_BuildFromLowPriority2$$anon$11.prototype;
$c_sc_BuildFromLowPriority2$$anon$11.prototype.newBuilder__O__scm_Builder = (function(from) {
  var from$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_Iterable(from);
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(from$1).iterableFactory__sc_IterableFactory()).newBuilder__scm_Builder()
});
var $d_sc_BuildFromLowPriority2$$anon$11 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  sc_BuildFromLowPriority2$$anon$11: 0
}, false, "scala.collection.BuildFromLowPriority2$$anon$11", {
  sc_BuildFromLowPriority2$$anon$11: 1,
  O: 1,
  sc_BuildFrom: 1
});
$c_sc_BuildFromLowPriority2$$anon$11.prototype.$classData = $d_sc_BuildFromLowPriority2$$anon$11;
/** @constructor */
function $c_Ljava_io_InputStream() {
  /*<skip>*/
}
$c_Ljava_io_InputStream.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Ljava_io_InputStream.prototype.constructor = $c_Ljava_io_InputStream;
/** @constructor */
function $h_Ljava_io_InputStream() {
  /*<skip>*/
}
$h_Ljava_io_InputStream.prototype = $c_Ljava_io_InputStream.prototype;
/** @constructor */
function $c_ju_NullRejectingHashMap$Node(key, hash, value, previous, next) {
  this.ju_HashMap$Node__f_key = null;
  this.ju_HashMap$Node__f_hash = 0;
  this.ju_HashMap$Node__f_value = null;
  this.ju_HashMap$Node__f_previous = null;
  this.ju_HashMap$Node__f_next = null;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_ju_HashMap$Node__O__I__O__ju_HashMap$Node__ju_HashMap$Node__(this, key, hash, value, previous, next)
}
$c_ju_NullRejectingHashMap$Node.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_ju_HashMap$Node();
$c_ju_NullRejectingHashMap$Node.prototype.constructor = $c_ju_NullRejectingHashMap$Node;
/** @constructor */
function $h_ju_NullRejectingHashMap$Node() {
  /*<skip>*/
}
$h_ju_NullRejectingHashMap$Node.prototype = $c_ju_NullRejectingHashMap$Node.prototype;
var $d_ju_NullRejectingHashMap$Node = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  ju_NullRejectingHashMap$Node: 0
}, false, "java.util.NullRejectingHashMap$Node", {
  ju_NullRejectingHashMap$Node: 1,
  ju_HashMap$Node: 1,
  O: 1,
  ju_Map$Entry: 1
});
$c_ju_NullRejectingHashMap$Node.prototype.$classData = $d_ju_NullRejectingHashMap$Node;
/** @constructor */
function $c_ju_concurrent_ConcurrentHashMap$InnerHashMap$KeyIterator(outer) {
  this.ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator__f_innerIter = null;
  this.ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator__f_lastNode = null;
  this.ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator__f_$outer = null;
  $ct_ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator__ju_concurrent_ConcurrentHashMap$InnerHashMap__(this, outer)
}
$c_ju_concurrent_ConcurrentHashMap$InnerHashMap$KeyIterator.prototype = new $h_ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator();
$c_ju_concurrent_ConcurrentHashMap$InnerHashMap$KeyIterator.prototype.constructor = $c_ju_concurrent_ConcurrentHashMap$InnerHashMap$KeyIterator;
/** @constructor */
function $h_ju_concurrent_ConcurrentHashMap$InnerHashMap$KeyIterator() {
  /*<skip>*/
}
$h_ju_concurrent_ConcurrentHashMap$InnerHashMap$KeyIterator.prototype = $c_ju_concurrent_ConcurrentHashMap$InnerHashMap$KeyIterator.prototype;
$c_ju_concurrent_ConcurrentHashMap$InnerHashMap$KeyIterator.prototype.extract__ju_HashMap$Node__O = (function(node) {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(node).ju_HashMap$Node__f_key
});
var $d_ju_concurrent_ConcurrentHashMap$InnerHashMap$KeyIterator = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  ju_concurrent_ConcurrentHashMap$InnerHashMap$KeyIterator: 0
}, false, "java.util.concurrent.ConcurrentHashMap$InnerHashMap$KeyIterator", {
  ju_concurrent_ConcurrentHashMap$InnerHashMap$KeyIterator: 1,
  ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator: 1,
  O: 1,
  ju_Iterator: 1
});
$c_ju_concurrent_ConcurrentHashMap$InnerHashMap$KeyIterator.prototype.$classData = $d_ju_concurrent_ConcurrentHashMap$InnerHashMap$KeyIterator;
/** @constructor */
function $c_ju_concurrent_ConcurrentHashMap$InnerHashMap$NodeIterator(outer) {
  this.ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator__f_innerIter = null;
  this.ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator__f_lastNode = null;
  this.ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator__f_$outer = null;
  $ct_ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator__ju_concurrent_ConcurrentHashMap$InnerHashMap__(this, outer)
}
$c_ju_concurrent_ConcurrentHashMap$InnerHashMap$NodeIterator.prototype = new $h_ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator();
$c_ju_concurrent_ConcurrentHashMap$InnerHashMap$NodeIterator.prototype.constructor = $c_ju_concurrent_ConcurrentHashMap$InnerHashMap$NodeIterator;
/** @constructor */
function $h_ju_concurrent_ConcurrentHashMap$InnerHashMap$NodeIterator() {
  /*<skip>*/
}
$h_ju_concurrent_ConcurrentHashMap$InnerHashMap$NodeIterator.prototype = $c_ju_concurrent_ConcurrentHashMap$InnerHashMap$NodeIterator.prototype;
$c_ju_concurrent_ConcurrentHashMap$InnerHashMap$NodeIterator.prototype.extract__ju_HashMap$Node__O = (function(node) {
  return node
});
var $d_ju_concurrent_ConcurrentHashMap$InnerHashMap$NodeIterator = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  ju_concurrent_ConcurrentHashMap$InnerHashMap$NodeIterator: 0
}, false, "java.util.concurrent.ConcurrentHashMap$InnerHashMap$NodeIterator", {
  ju_concurrent_ConcurrentHashMap$InnerHashMap$NodeIterator: 1,
  ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator: 1,
  O: 1,
  ju_Iterator: 1
});
$c_ju_concurrent_ConcurrentHashMap$InnerHashMap$NodeIterator.prototype.$classData = $d_ju_concurrent_ConcurrentHashMap$InnerHashMap$NodeIterator;
/** @constructor */
function $c_ju_concurrent_atomic_AtomicLong(value) {
  this.ju_concurrent_atomic_AtomicLong__f_java$util$concurrent$atomic$AtomicLong$$value = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$L0;
  this.ju_concurrent_atomic_AtomicLong__f_java$util$concurrent$atomic$AtomicLong$$value = value
}
$c_ju_concurrent_atomic_AtomicLong.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_jl_Number();
$c_ju_concurrent_atomic_AtomicLong.prototype.constructor = $c_ju_concurrent_atomic_AtomicLong;
/** @constructor */
function $h_ju_concurrent_atomic_AtomicLong() {
  /*<skip>*/
}
$h_ju_concurrent_atomic_AtomicLong.prototype = $c_ju_concurrent_atomic_AtomicLong.prototype;
$c_ju_concurrent_atomic_AtomicLong.prototype.toString__T = (function() {
  var this$1 = this.ju_concurrent_atomic_AtomicLong__f_java$util$concurrent$atomic$AtomicLong$$value;
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(this$1.RTLong__f_lo, this$1.RTLong__f_hi)
});
var $d_ju_concurrent_atomic_AtomicLong = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  ju_concurrent_atomic_AtomicLong: 0
}, false, "java.util.concurrent.atomic.AtomicLong", {
  ju_concurrent_atomic_AtomicLong: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_concurrent_atomic_AtomicLong.prototype.$classData = $d_ju_concurrent_atomic_AtomicLong;
function $sct_Lmunit_Framework__stinit__() {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_reflect_Reflect$().registerInstantiatableClass__T__jl_Class__sjs_js_Array__V("munit.Framework", $d_Lmunit_Framework.getClassOf(), [[[], (() => new $c_Lmunit_Framework())]])
}
/** @constructor */
function $c_Lmunit_Framework() {
  this.Lmunit_Framework__f_name = null;
  this.Lmunit_Framework__f_munitFingerprint = null;
  this.Lmunit_Framework__f_customRunners = null;
  $ct_Lmunit_internal_junitinterface_JUnitFramework__(this);
  this.Lmunit_Framework__f_name = "munit";
  this.Lmunit_Framework__f_munitFingerprint = new $c_Lmunit_internal_junitinterface_CustomFingerprint("munit.Suite", false);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_package$().s_package$__f_List);
  var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lmunit_internal_junitinterface_CustomFingerprint.getArrayOf().constr)([this.Lmunit_Framework__f_munitFingerprint, new $c_Lmunit_internal_junitinterface_CustomFingerprint("munit.Suite", true)]));
  this.Lmunit_Framework__f_customRunners = new $c_Lmunit_internal_junitinterface_CustomRunners($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems))
}
$c_Lmunit_Framework.prototype = new $h_Lmunit_internal_junitinterface_JUnitFramework();
$c_Lmunit_Framework.prototype.constructor = $c_Lmunit_Framework;
/** @constructor */
function $h_Lmunit_Framework() {
  /*<skip>*/
}
$h_Lmunit_Framework.prototype = $c_Lmunit_Framework.prototype;
$c_Lmunit_Framework.prototype.name__T = (function() {
  return this.Lmunit_Framework__f_name
});
var $d_Lmunit_Framework = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lmunit_Framework: 0
}, false, "munit.Framework", {
  Lmunit_Framework: 1,
  Lmunit_internal_junitinterface_JUnitFramework: 1,
  O: 1,
  Lsbt_testing_Framework: 1
});
$c_Lmunit_Framework.prototype.$classData = $d_Lmunit_Framework;
/** @constructor */
function $c_Lmunit_internal_junitinterface_CustomFingerprint(suite, isModule) {
  this.Lmunit_internal_junitinterface_CustomFingerprint__f_suite = null;
  this.Lmunit_internal_junitinterface_CustomFingerprint__f_isModule = false;
  this.Lmunit_internal_junitinterface_CustomFingerprint__f_suite = suite;
  this.Lmunit_internal_junitinterface_CustomFingerprint__f_isModule = isModule
}
$c_Lmunit_internal_junitinterface_CustomFingerprint.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lmunit_internal_junitinterface_CustomFingerprint.prototype.constructor = $c_Lmunit_internal_junitinterface_CustomFingerprint;
/** @constructor */
function $h_Lmunit_internal_junitinterface_CustomFingerprint() {
  /*<skip>*/
}
$h_Lmunit_internal_junitinterface_CustomFingerprint.prototype = $c_Lmunit_internal_junitinterface_CustomFingerprint.prototype;
$c_Lmunit_internal_junitinterface_CustomFingerprint.prototype.isModule__Z = (function() {
  return this.Lmunit_internal_junitinterface_CustomFingerprint__f_isModule
});
$c_Lmunit_internal_junitinterface_CustomFingerprint.prototype.superclassName__T = (function() {
  return this.Lmunit_internal_junitinterface_CustomFingerprint__f_suite
});
$c_Lmunit_internal_junitinterface_CustomFingerprint.prototype.requireNoArgConstructor__Z = (function() {
  return true
});
function $as_Lmunit_internal_junitinterface_CustomFingerprint(obj) {
  return (((obj instanceof $c_Lmunit_internal_junitinterface_CustomFingerprint) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "munit.internal.junitinterface.CustomFingerprint"))
}
function $isArrayOf_Lmunit_internal_junitinterface_CustomFingerprint(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lmunit_internal_junitinterface_CustomFingerprint)))
}
function $asArrayOf_Lmunit_internal_junitinterface_CustomFingerprint(obj, depth) {
  return (($isArrayOf_Lmunit_internal_junitinterface_CustomFingerprint(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lmunit.internal.junitinterface.CustomFingerprint;", depth))
}
var $d_Lmunit_internal_junitinterface_CustomFingerprint = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lmunit_internal_junitinterface_CustomFingerprint: 0
}, false, "munit.internal.junitinterface.CustomFingerprint", {
  Lmunit_internal_junitinterface_CustomFingerprint: 1,
  O: 1,
  Lsbt_testing_Fingerprint: 1,
  Lsbt_testing_SubclassFingerprint: 1
});
$c_Lmunit_internal_junitinterface_CustomFingerprint.prototype.$classData = $d_Lmunit_internal_junitinterface_CustomFingerprint;
var $d_Lorg_junit_Test$None = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_junit_Test$None: 0
}, false, "org.junit.Test$None", {
  Lorg_junit_Test$None: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
/** @constructor */
function $c_Lorg_scalajs_junit_JUnitFramework$JUnitFingerprint$(outer) {
  /*<skip>*/
}
$c_Lorg_scalajs_junit_JUnitFramework$JUnitFingerprint$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_junit_JUnitFramework$JUnitFingerprint$.prototype.constructor = $c_Lorg_scalajs_junit_JUnitFramework$JUnitFingerprint$;
/** @constructor */
function $h_Lorg_scalajs_junit_JUnitFramework$JUnitFingerprint$() {
  /*<skip>*/
}
$h_Lorg_scalajs_junit_JUnitFramework$JUnitFingerprint$.prototype = $c_Lorg_scalajs_junit_JUnitFramework$JUnitFingerprint$.prototype;
$c_Lorg_scalajs_junit_JUnitFramework$JUnitFingerprint$.prototype.annotationName__T = (function() {
  return "org.junit.Test"
});
$c_Lorg_scalajs_junit_JUnitFramework$JUnitFingerprint$.prototype.isModule__Z = (function() {
  return false
});
var $d_Lorg_scalajs_junit_JUnitFramework$JUnitFingerprint$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_junit_JUnitFramework$JUnitFingerprint$: 0
}, false, "org.scalajs.junit.JUnitFramework$JUnitFingerprint$", {
  Lorg_scalajs_junit_JUnitFramework$JUnitFingerprint$: 1,
  O: 1,
  Lsbt_testing_AnnotatedFingerprint: 1,
  Lsbt_testing_Fingerprint: 1
});
$c_Lorg_scalajs_junit_JUnitFramework$JUnitFingerprint$.prototype.$classData = $d_Lorg_scalajs_junit_JUnitFramework$JUnitFingerprint$;
/** @constructor */
function $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest(outer, testName) {
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_testName = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_org$scalajs$testing$bridge$HTMLRunner$UI$RunningTest$$box = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f__ok = false;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_logger = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_$outer = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_testName = testName;
  if ((outer === null)) {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(null)
  } else {
    this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_$outer = outer
  };
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_org$scalajs$testing$bridge$HTMLRunner$UI$RunningTest$$box = new $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox(outer, testName);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_org$scalajs$testing$bridge$HTMLRunner$UI$RunningTest$$box).Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_checkbox.onclick = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(outer).Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$rootBox).Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_updateCheckbox;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f__ok = false;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_logger = new $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1(this)
}
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest.prototype.constructor = $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest;
/** @constructor */
function $h_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest.prototype = $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest.prototype;
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest.prototype.testName__T = (function() {
  return this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_testName
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest.prototype.done__s_util_Try__V = (function(ok) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ok).failed__s_util_Try()).foreach__F1__V(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((t$2) => {
    var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Throwable(t$2);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_logger).error__T__V("Test framework crashed during test:");
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_logger).trace__jl_Throwable__V(t)
  })));
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f__ok = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ok).getOrElse__F0__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0((() => false))));
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_$outer).org$scalajs$testing$bridge$HTMLRunner$UI$$updateCounts__V();
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_org$scalajs$testing$bridge$HTMLRunner$UI$RunningTest$$box).done__Z__V(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f__ok);
  if ((!this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f__ok)) {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_org$scalajs$testing$bridge$HTMLRunner$UI$RunningTest$$box).expand__V();
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_$outer).Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$nextFailureLocation).setNextSibling__Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__V(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_org$scalajs$testing$bridge$HTMLRunner$UI$RunningTest$$box);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_$outer).Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$nextFailureLocation = this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_org$scalajs$testing$bridge$HTMLRunner$UI$RunningTest$$box
  }
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest.prototype.selected__Z = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_org$scalajs$testing$bridge$HTMLRunner$UI$RunningTest$$box).Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_checkbox.checked)
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest.prototype.selected_$eq__Z__V = (function(v) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_org$scalajs$testing$bridge$HTMLRunner$UI$RunningTest$$box).Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_checkbox.checked = v
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest.prototype.failed__Z = (function() {
  return (!this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f__ok)
});
var $d_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest: 0
}, false, "org.scalajs.testing.bridge.HTMLRunner$UI$RunningTest", {
  Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest: 1,
  O: 1,
  Lorg_scalajs_testing_bridge_HTMLRunner$UI$Test: 1,
  Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestTask: 1
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest.prototype.$classData = $d_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest;
/** @constructor */
function $c_Lorg_scalajs_testing_common_MsgEndpoint$$anon$1(opc$1, ms$1) {
  this.Lorg_scalajs_testing_common_MsgEndpoint$$anon$1__f_opCode = 0;
  this.Lorg_scalajs_testing_common_MsgEndpoint$$anon$1__f_msgSerializer = null;
  this.Lorg_scalajs_testing_common_MsgEndpoint$$anon$1__f_opCode = opc$1;
  this.Lorg_scalajs_testing_common_MsgEndpoint$$anon$1__f_msgSerializer = ms$1
}
$c_Lorg_scalajs_testing_common_MsgEndpoint$$anon$1.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_MsgEndpoint$$anon$1.prototype.constructor = $c_Lorg_scalajs_testing_common_MsgEndpoint$$anon$1;
/** @constructor */
function $h_Lorg_scalajs_testing_common_MsgEndpoint$$anon$1() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_MsgEndpoint$$anon$1.prototype = $c_Lorg_scalajs_testing_common_MsgEndpoint$$anon$1.prototype;
$c_Lorg_scalajs_testing_common_MsgEndpoint$$anon$1.prototype.opCode__B = (function() {
  return this.Lorg_scalajs_testing_common_MsgEndpoint$$anon$1__f_opCode
});
var $d_Lorg_scalajs_testing_common_MsgEndpoint$$anon$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_MsgEndpoint$$anon$1: 0
}, false, "org.scalajs.testing.common.MsgEndpoint$$anon$1", {
  Lorg_scalajs_testing_common_MsgEndpoint$$anon$1: 1,
  O: 1,
  Lorg_scalajs_testing_common_MsgEndpoint: 1,
  Lorg_scalajs_testing_common_Endpoint: 1
});
$c_Lorg_scalajs_testing_common_MsgEndpoint$$anon$1.prototype.$classData = $d_Lorg_scalajs_testing_common_MsgEndpoint$$anon$1;
/** @constructor */
function $c_Lorg_scalajs_testing_common_RPCCore$$anon$1(outer, ep$2, ex$1$1) {
  this.Lorg_scalajs_testing_common_RPCCore$$anon$1__f_endpoint = null;
  this.Lorg_scalajs_testing_common_RPCCore$$anon$1__f_exec = null;
  this.Lorg_scalajs_testing_common_RPCCore$$anon$1__f_endpoint = ep$2;
  this.Lorg_scalajs_testing_common_RPCCore$$anon$1__f_exec = ex$1$1
}
$c_Lorg_scalajs_testing_common_RPCCore$$anon$1.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_RPCCore$$anon$1.prototype.constructor = $c_Lorg_scalajs_testing_common_RPCCore$$anon$1;
/** @constructor */
function $h_Lorg_scalajs_testing_common_RPCCore$$anon$1() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_RPCCore$$anon$1.prototype = $c_Lorg_scalajs_testing_common_RPCCore$$anon$1.prototype;
$c_Lorg_scalajs_testing_common_RPCCore$$anon$1.prototype.endpoint__Lorg_scalajs_testing_common_Endpoint = (function() {
  return this.Lorg_scalajs_testing_common_RPCCore$$anon$1__f_endpoint
});
var $d_Lorg_scalajs_testing_common_RPCCore$$anon$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_RPCCore$$anon$1: 0
}, false, "org.scalajs.testing.common.RPCCore$$anon$1", {
  Lorg_scalajs_testing_common_RPCCore$$anon$1: 1,
  O: 1,
  Lorg_scalajs_testing_common_RPCCore$BoundMsgEndpoint: 1,
  Lorg_scalajs_testing_common_RPCCore$BoundEndpoint: 1
});
$c_Lorg_scalajs_testing_common_RPCCore$$anon$1.prototype.$classData = $d_Lorg_scalajs_testing_common_RPCCore$$anon$1;
/** @constructor */
function $c_Lorg_scalajs_testing_common_RPCCore$$anon$2(outer, ep$3, ex$3$1) {
  this.Lorg_scalajs_testing_common_RPCCore$$anon$2__f_endpoint = null;
  this.Lorg_scalajs_testing_common_RPCCore$$anon$2__f_exec = null;
  this.Lorg_scalajs_testing_common_RPCCore$$anon$2__f_endpoint = ep$3;
  this.Lorg_scalajs_testing_common_RPCCore$$anon$2__f_exec = ex$3$1
}
$c_Lorg_scalajs_testing_common_RPCCore$$anon$2.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_RPCCore$$anon$2.prototype.constructor = $c_Lorg_scalajs_testing_common_RPCCore$$anon$2;
/** @constructor */
function $h_Lorg_scalajs_testing_common_RPCCore$$anon$2() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_RPCCore$$anon$2.prototype = $c_Lorg_scalajs_testing_common_RPCCore$$anon$2.prototype;
$c_Lorg_scalajs_testing_common_RPCCore$$anon$2.prototype.endpoint__Lorg_scalajs_testing_common_Endpoint = (function() {
  return this.Lorg_scalajs_testing_common_RPCCore$$anon$2__f_endpoint
});
var $d_Lorg_scalajs_testing_common_RPCCore$$anon$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_RPCCore$$anon$2: 0
}, false, "org.scalajs.testing.common.RPCCore$$anon$2", {
  Lorg_scalajs_testing_common_RPCCore$$anon$2: 1,
  O: 1,
  Lorg_scalajs_testing_common_RPCCore$BoundRPCEndpoint: 1,
  Lorg_scalajs_testing_common_RPCCore$BoundEndpoint: 1
});
$c_Lorg_scalajs_testing_common_RPCCore$$anon$2.prototype.$classData = $d_Lorg_scalajs_testing_common_RPCCore$$anon$2;
/** @constructor */
function $c_Lorg_scalajs_testing_common_RPCEndpoint$$anon$2(opc$2, rqs$1, rps$1) {
  this.Lorg_scalajs_testing_common_RPCEndpoint$$anon$2__f_opCode = 0;
  this.Lorg_scalajs_testing_common_RPCEndpoint$$anon$2__f_reqSerializer = null;
  this.Lorg_scalajs_testing_common_RPCEndpoint$$anon$2__f_respSerializer = null;
  this.Lorg_scalajs_testing_common_RPCEndpoint$$anon$2__f_opCode = opc$2;
  this.Lorg_scalajs_testing_common_RPCEndpoint$$anon$2__f_reqSerializer = rqs$1;
  this.Lorg_scalajs_testing_common_RPCEndpoint$$anon$2__f_respSerializer = rps$1
}
$c_Lorg_scalajs_testing_common_RPCEndpoint$$anon$2.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_RPCEndpoint$$anon$2.prototype.constructor = $c_Lorg_scalajs_testing_common_RPCEndpoint$$anon$2;
/** @constructor */
function $h_Lorg_scalajs_testing_common_RPCEndpoint$$anon$2() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_RPCEndpoint$$anon$2.prototype = $c_Lorg_scalajs_testing_common_RPCEndpoint$$anon$2.prototype;
$c_Lorg_scalajs_testing_common_RPCEndpoint$$anon$2.prototype.opCode__B = (function() {
  return this.Lorg_scalajs_testing_common_RPCEndpoint$$anon$2__f_opCode
});
var $d_Lorg_scalajs_testing_common_RPCEndpoint$$anon$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_RPCEndpoint$$anon$2: 0
}, false, "org.scalajs.testing.common.RPCEndpoint$$anon$2", {
  Lorg_scalajs_testing_common_RPCEndpoint$$anon$2: 1,
  O: 1,
  Lorg_scalajs_testing_common_RPCEndpoint: 1,
  Lorg_scalajs_testing_common_Endpoint: 1
});
$c_Lorg_scalajs_testing_common_RPCEndpoint$$anon$2.prototype.$classData = $d_Lorg_scalajs_testing_common_RPCEndpoint$$anon$2;
/** @constructor */
function $c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$4(in$3) {
  this.Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$4__f_isModule = false;
  this.Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$4__f_annotationName = null;
  this.Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$4__f_isModule = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$3).readBoolean__Z();
  var s$1 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  this.Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$4__f_annotationName = s$1.deserialize__Ljava_io_DataInputStream__T(in$3)
}
$c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$4.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$4.prototype.constructor = $c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$4;
/** @constructor */
function $h_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$4() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$4.prototype = $c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$4.prototype;
$c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$4.prototype.isModule__Z = (function() {
  return this.Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$4__f_isModule
});
$c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$4.prototype.annotationName__T = (function() {
  return this.Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$4__f_annotationName
});
var $d_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$4 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$4: 0
}, false, "org.scalajs.testing.common.Serializer$FingerprintSerializer$$anon$4", {
  Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$4: 1,
  O: 1,
  Lsbt_testing_AnnotatedFingerprint: 1,
  Lsbt_testing_Fingerprint: 1
});
$c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$4.prototype.$classData = $d_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$4;
/** @constructor */
function $c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5(in$3) {
  this.Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5__f_isModule = false;
  this.Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5__f_superclassName = null;
  this.Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5__f_requireNoArgConstructor = false;
  this.Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5__f_isModule = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$3).readBoolean__Z();
  var s$1 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  this.Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5__f_superclassName = s$1.deserialize__Ljava_io_DataInputStream__T(in$3);
  this.Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5__f_requireNoArgConstructor = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$3).readBoolean__Z()
}
$c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5.prototype.constructor = $c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5;
/** @constructor */
function $h_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5.prototype = $c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5.prototype;
$c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5.prototype.isModule__Z = (function() {
  return this.Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5__f_isModule
});
$c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5.prototype.superclassName__T = (function() {
  return this.Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5__f_superclassName
});
$c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5.prototype.requireNoArgConstructor__Z = (function() {
  return this.Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5__f_requireNoArgConstructor
});
var $d_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5: 0
}, false, "org.scalajs.testing.common.Serializer$FingerprintSerializer$$anon$5", {
  Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5: 1,
  O: 1,
  Lsbt_testing_SubclassFingerprint: 1,
  Lsbt_testing_Fingerprint: 1
});
$c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5.prototype.$classData = $d_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5;
class $c_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$$anon$3 extends $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Throwable {
  constructor(msg$1, cause$1, toStr$1) {
    super();
    this.Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$$anon$3__f_toStr$1 = null;
    this.Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$$anon$3__f_toStr$1 = toStr$1;
    var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(cause$1);
    var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_$less$colon$less$();
    var ev = this$1.s_$less$colon$less$__f_singleton;
    var cause = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Throwable((this$2.isEmpty__Z() ? ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ev), null) : this$2.get__O()));
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, msg$1, cause, true, true)
  };
  toString__T() {
    return this.Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$$anon$3__f_toStr$1
  };
}
var $d_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$$anon$3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$$anon$3: 0
}, false, "org.scalajs.testing.common.Serializer$ThrowableSerializer$$anon$3", {
  Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$$anon$3: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$$anon$3.prototype.$classData = $d_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$$anon$3;
/** @constructor */
function $c_Lsbt_testing_NestedSuiteSelector(_suiteId) {
  this.Lsbt_testing_NestedSuiteSelector__f__suiteId = null;
  this.Lsbt_testing_NestedSuiteSelector__f__suiteId = _suiteId;
  if ((_suiteId === null)) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_NullPointerException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_NullPointerException(), "suiteId was null")
  }
}
$c_Lsbt_testing_NestedSuiteSelector.prototype = new $h_Lsbt_testing_Selector();
$c_Lsbt_testing_NestedSuiteSelector.prototype.constructor = $c_Lsbt_testing_NestedSuiteSelector;
/** @constructor */
function $h_Lsbt_testing_NestedSuiteSelector() {
  /*<skip>*/
}
$h_Lsbt_testing_NestedSuiteSelector.prototype = $c_Lsbt_testing_NestedSuiteSelector.prototype;
$c_Lsbt_testing_NestedSuiteSelector.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_Lsbt_testing_NestedSuiteSelector)) {
    var x2 = $as_Lsbt_testing_NestedSuiteSelector(that);
    return (this.Lsbt_testing_NestedSuiteSelector__f__suiteId === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).Lsbt_testing_NestedSuiteSelector__f__suiteId)
  } else {
    return false
  }
});
$c_Lsbt_testing_NestedSuiteSelector.prototype.hashCode__I = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__hashCode__I($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lsbt_testing_NestedSuiteSelector__f__suiteId))
});
$c_Lsbt_testing_NestedSuiteSelector.prototype.toString__T = (function() {
  return (("NestedSuiteSelector(" + this.Lsbt_testing_NestedSuiteSelector__f__suiteId) + ")")
});
function $as_Lsbt_testing_NestedSuiteSelector(obj) {
  return (((obj instanceof $c_Lsbt_testing_NestedSuiteSelector) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "sbt.testing.NestedSuiteSelector"))
}
function $isArrayOf_Lsbt_testing_NestedSuiteSelector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lsbt_testing_NestedSuiteSelector)))
}
function $asArrayOf_Lsbt_testing_NestedSuiteSelector(obj, depth) {
  return (($isArrayOf_Lsbt_testing_NestedSuiteSelector(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lsbt.testing.NestedSuiteSelector;", depth))
}
var $d_Lsbt_testing_NestedSuiteSelector = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lsbt_testing_NestedSuiteSelector: 0
}, false, "sbt.testing.NestedSuiteSelector", {
  Lsbt_testing_NestedSuiteSelector: 1,
  Lsbt_testing_Selector: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Lsbt_testing_NestedSuiteSelector.prototype.$classData = $d_Lsbt_testing_NestedSuiteSelector;
/** @constructor */
function $c_Lsbt_testing_NestedTestSelector(_suiteId, _testName) {
  this.Lsbt_testing_NestedTestSelector__f__suiteId = null;
  this.Lsbt_testing_NestedTestSelector__f__testName = null;
  this.Lsbt_testing_NestedTestSelector__f__suiteId = _suiteId;
  this.Lsbt_testing_NestedTestSelector__f__testName = _testName;
  if ((_suiteId === null)) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_NullPointerException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_NullPointerException(), "suiteId was null")
  };
  if ((_testName === null)) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_NullPointerException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_NullPointerException(), "testName was null")
  }
}
$c_Lsbt_testing_NestedTestSelector.prototype = new $h_Lsbt_testing_Selector();
$c_Lsbt_testing_NestedTestSelector.prototype.constructor = $c_Lsbt_testing_NestedTestSelector;
/** @constructor */
function $h_Lsbt_testing_NestedTestSelector() {
  /*<skip>*/
}
$h_Lsbt_testing_NestedTestSelector.prototype = $c_Lsbt_testing_NestedTestSelector.prototype;
$c_Lsbt_testing_NestedTestSelector.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_Lsbt_testing_NestedTestSelector)) {
    var x2 = $as_Lsbt_testing_NestedTestSelector(that);
    return ((this.Lsbt_testing_NestedTestSelector__f__suiteId === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).Lsbt_testing_NestedTestSelector__f__suiteId) && (this.Lsbt_testing_NestedTestSelector__f__testName === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).Lsbt_testing_NestedTestSelector__f__testName))
  } else {
    return false
  }
});
$c_Lsbt_testing_NestedTestSelector.prototype.hashCode__I = (function() {
  var retVal = 17;
  retVal = ((Math.imul(31, retVal) + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__hashCode__I($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lsbt_testing_NestedTestSelector__f__suiteId))) | 0);
  retVal = ((Math.imul(31, retVal) + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__hashCode__I($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lsbt_testing_NestedTestSelector__f__testName))) | 0);
  return retVal
});
$c_Lsbt_testing_NestedTestSelector.prototype.toString__T = (function() {
  return (((("NestedTestSelector(" + this.Lsbt_testing_NestedTestSelector__f__suiteId) + ", ") + this.Lsbt_testing_NestedTestSelector__f__testName) + ")")
});
function $as_Lsbt_testing_NestedTestSelector(obj) {
  return (((obj instanceof $c_Lsbt_testing_NestedTestSelector) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "sbt.testing.NestedTestSelector"))
}
function $isArrayOf_Lsbt_testing_NestedTestSelector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lsbt_testing_NestedTestSelector)))
}
function $asArrayOf_Lsbt_testing_NestedTestSelector(obj, depth) {
  return (($isArrayOf_Lsbt_testing_NestedTestSelector(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lsbt.testing.NestedTestSelector;", depth))
}
var $d_Lsbt_testing_NestedTestSelector = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lsbt_testing_NestedTestSelector: 0
}, false, "sbt.testing.NestedTestSelector", {
  Lsbt_testing_NestedTestSelector: 1,
  Lsbt_testing_Selector: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Lsbt_testing_NestedTestSelector.prototype.$classData = $d_Lsbt_testing_NestedTestSelector;
/** @constructor */
function $c_Lsbt_testing_SuiteSelector() {
  /*<skip>*/
}
$c_Lsbt_testing_SuiteSelector.prototype = new $h_Lsbt_testing_Selector();
$c_Lsbt_testing_SuiteSelector.prototype.constructor = $c_Lsbt_testing_SuiteSelector;
/** @constructor */
function $h_Lsbt_testing_SuiteSelector() {
  /*<skip>*/
}
$h_Lsbt_testing_SuiteSelector.prototype = $c_Lsbt_testing_SuiteSelector.prototype;
$c_Lsbt_testing_SuiteSelector.prototype.equals__O__Z = (function(o) {
  return (o instanceof $c_Lsbt_testing_SuiteSelector)
});
$c_Lsbt_testing_SuiteSelector.prototype.hashCode__I = (function() {
  return 29
});
$c_Lsbt_testing_SuiteSelector.prototype.toString__T = (function() {
  return "SuiteSelector"
});
function $as_Lsbt_testing_SuiteSelector(obj) {
  return (((obj instanceof $c_Lsbt_testing_SuiteSelector) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "sbt.testing.SuiteSelector"))
}
function $isArrayOf_Lsbt_testing_SuiteSelector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lsbt_testing_SuiteSelector)))
}
function $asArrayOf_Lsbt_testing_SuiteSelector(obj, depth) {
  return (($isArrayOf_Lsbt_testing_SuiteSelector(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lsbt.testing.SuiteSelector;", depth))
}
var $d_Lsbt_testing_SuiteSelector = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lsbt_testing_SuiteSelector: 0
}, false, "sbt.testing.SuiteSelector", {
  Lsbt_testing_SuiteSelector: 1,
  Lsbt_testing_Selector: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Lsbt_testing_SuiteSelector.prototype.$classData = $d_Lsbt_testing_SuiteSelector;
/** @constructor */
function $c_Lsbt_testing_TestSelector(_testName) {
  this.Lsbt_testing_TestSelector__f__testName = null;
  this.Lsbt_testing_TestSelector__f__testName = _testName;
  if ((_testName === null)) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_NullPointerException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_NullPointerException(), "testName was null")
  }
}
$c_Lsbt_testing_TestSelector.prototype = new $h_Lsbt_testing_Selector();
$c_Lsbt_testing_TestSelector.prototype.constructor = $c_Lsbt_testing_TestSelector;
/** @constructor */
function $h_Lsbt_testing_TestSelector() {
  /*<skip>*/
}
$h_Lsbt_testing_TestSelector.prototype = $c_Lsbt_testing_TestSelector.prototype;
$c_Lsbt_testing_TestSelector.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_Lsbt_testing_TestSelector)) {
    var x2 = $as_Lsbt_testing_TestSelector(that);
    return (this.Lsbt_testing_TestSelector__f__testName === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).Lsbt_testing_TestSelector__f__testName)
  } else {
    return false
  }
});
$c_Lsbt_testing_TestSelector.prototype.hashCode__I = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__hashCode__I($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lsbt_testing_TestSelector__f__testName))
});
$c_Lsbt_testing_TestSelector.prototype.toString__T = (function() {
  return (("TestSelector(" + this.Lsbt_testing_TestSelector__f__testName) + ")")
});
function $as_Lsbt_testing_TestSelector(obj) {
  return (((obj instanceof $c_Lsbt_testing_TestSelector) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "sbt.testing.TestSelector"))
}
function $isArrayOf_Lsbt_testing_TestSelector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lsbt_testing_TestSelector)))
}
function $asArrayOf_Lsbt_testing_TestSelector(obj, depth) {
  return (($isArrayOf_Lsbt_testing_TestSelector(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lsbt.testing.TestSelector;", depth))
}
var $d_Lsbt_testing_TestSelector = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lsbt_testing_TestSelector: 0
}, false, "sbt.testing.TestSelector", {
  Lsbt_testing_TestSelector: 1,
  Lsbt_testing_Selector: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Lsbt_testing_TestSelector.prototype.$classData = $d_Lsbt_testing_TestSelector;
/** @constructor */
function $c_Lsbt_testing_TestWildcardSelector(_testWildcard) {
  this.Lsbt_testing_TestWildcardSelector__f__testWildcard = null;
  this.Lsbt_testing_TestWildcardSelector__f__testWildcard = _testWildcard;
  if ((_testWildcard === null)) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_NullPointerException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_NullPointerException(), "testWildcard was null")
  }
}
$c_Lsbt_testing_TestWildcardSelector.prototype = new $h_Lsbt_testing_Selector();
$c_Lsbt_testing_TestWildcardSelector.prototype.constructor = $c_Lsbt_testing_TestWildcardSelector;
/** @constructor */
function $h_Lsbt_testing_TestWildcardSelector() {
  /*<skip>*/
}
$h_Lsbt_testing_TestWildcardSelector.prototype = $c_Lsbt_testing_TestWildcardSelector.prototype;
$c_Lsbt_testing_TestWildcardSelector.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_Lsbt_testing_TestWildcardSelector)) {
    var x2 = $as_Lsbt_testing_TestWildcardSelector(that);
    return (this.Lsbt_testing_TestWildcardSelector__f__testWildcard === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).Lsbt_testing_TestWildcardSelector__f__testWildcard)
  } else {
    return false
  }
});
$c_Lsbt_testing_TestWildcardSelector.prototype.hashCode__I = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__hashCode__I($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lsbt_testing_TestWildcardSelector__f__testWildcard))
});
$c_Lsbt_testing_TestWildcardSelector.prototype.toString__T = (function() {
  return (("TestWildcardSelector(" + this.Lsbt_testing_TestWildcardSelector__f__testWildcard) + ")")
});
function $as_Lsbt_testing_TestWildcardSelector(obj) {
  return (((obj instanceof $c_Lsbt_testing_TestWildcardSelector) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "sbt.testing.TestWildcardSelector"))
}
function $isArrayOf_Lsbt_testing_TestWildcardSelector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lsbt_testing_TestWildcardSelector)))
}
function $asArrayOf_Lsbt_testing_TestWildcardSelector(obj, depth) {
  return (($isArrayOf_Lsbt_testing_TestWildcardSelector(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lsbt.testing.TestWildcardSelector;", depth))
}
var $d_Lsbt_testing_TestWildcardSelector = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lsbt_testing_TestWildcardSelector: 0
}, false, "sbt.testing.TestWildcardSelector", {
  Lsbt_testing_TestWildcardSelector: 1,
  Lsbt_testing_Selector: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Lsbt_testing_TestWildcardSelector.prototype.$classData = $d_Lsbt_testing_TestWildcardSelector;
/** @constructor */
function $c_sc_BuildFrom$() {
  $n_sc_BuildFrom$ = this;
  new $c_sc_BuildFrom$$anon$5();
  new $c_sc_BuildFrom$$anon$6()
}
$c_sc_BuildFrom$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_sc_BuildFrom$.prototype.constructor = $c_sc_BuildFrom$;
/** @constructor */
function $h_sc_BuildFrom$() {
  /*<skip>*/
}
$h_sc_BuildFrom$.prototype = $c_sc_BuildFrom$.prototype;
var $d_sc_BuildFrom$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  sc_BuildFrom$: 0
}, false, "scala.collection.BuildFrom$", {
  sc_BuildFrom$: 1,
  O: 1,
  sc_BuildFromLowPriority1: 1,
  sc_BuildFromLowPriority2: 1
});
$c_sc_BuildFrom$.prototype.$classData = $d_sc_BuildFrom$;
var $n_sc_BuildFrom$;
function $m_sc_BuildFrom$() {
  if ((!$n_sc_BuildFrom$)) {
    $n_sc_BuildFrom$ = new $c_sc_BuildFrom$()
  };
  return $n_sc_BuildFrom$
}
/** @constructor */
function $c_sc_Factory$StringFactory() {
  /*<skip>*/
}
$c_sc_Factory$StringFactory.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_sc_Factory$StringFactory.prototype.constructor = $c_sc_Factory$StringFactory;
/** @constructor */
function $h_sc_Factory$StringFactory() {
  /*<skip>*/
}
$h_sc_Factory$StringFactory.prototype = $c_sc_Factory$StringFactory.prototype;
$c_sc_Factory$StringFactory.prototype.newBuilder__scm_Builder = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_scm_StringBuilder__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_scm_StringBuilder())
});
var $d_sc_Factory$StringFactory = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  sc_Factory$StringFactory: 0
}, false, "scala.collection.Factory$StringFactory", {
  sc_Factory$StringFactory: 1,
  O: 1,
  sc_Factory: 1,
  Ljava_io_Serializable: 1
});
$c_sc_Factory$StringFactory.prototype.$classData = $d_sc_Factory$StringFactory;
/** @constructor */
function $c_scm_HashSet$() {
  /*<skip>*/
}
$c_scm_HashSet$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_scm_HashSet$.prototype.constructor = $c_scm_HashSet$;
/** @constructor */
function $h_scm_HashSet$() {
  /*<skip>*/
}
$h_scm_HashSet$.prototype = $c_scm_HashSet$.prototype;
$c_scm_HashSet$.prototype.from__sc_IterableOnce__scm_HashSet = (function(it) {
  var k = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).knownSize__I();
  var cap = ((k > 0) ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$doubleToInt((((1 + k) | 0) / 0.75)) : 16);
  var this$1 = $ct_scm_HashSet__I__D__(new $c_scm_HashSet(), cap, 0.75);
  return this$1.addAll__sc_IterableOnce__scm_HashSet(it)
});
$c_scm_HashSet$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_scm_HashSet$$anon$4(16, 0.75)
});
$c_scm_HashSet$.prototype.empty__O = (function() {
  return $ct_scm_HashSet__(new $c_scm_HashSet())
});
$c_scm_HashSet$.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__scm_HashSet(source)
});
var $d_scm_HashSet$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  scm_HashSet$: 0
}, false, "scala.collection.mutable.HashSet$", {
  scm_HashSet$: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_scm_HashSet$.prototype.$classData = $d_scm_HashSet$;
var $n_scm_HashSet$;
function $m_scm_HashSet$() {
  if ((!$n_scm_HashSet$)) {
    $n_scm_HashSet$ = new $c_scm_HashSet$()
  };
  return $n_scm_HashSet$
}
function $ct_Ljava_io_ByteArrayInputStream__AB__I__I__($thiz, buf, offset, length) {
  $thiz.Ljava_io_ByteArrayInputStream__f_buf = buf;
  $thiz.Ljava_io_ByteArrayInputStream__f_count = ((offset + length) | 0);
  $thiz.Ljava_io_ByteArrayInputStream__f_pos = offset;
  return $thiz
}
function $ct_Ljava_io_ByteArrayInputStream__AB__($thiz, buf) {
  $ct_Ljava_io_ByteArrayInputStream__AB__I__I__($thiz, buf, 0, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(buf).u.length);
  return $thiz
}
/** @constructor */
function $c_Ljava_io_ByteArrayInputStream() {
  this.Ljava_io_ByteArrayInputStream__f_buf = null;
  this.Ljava_io_ByteArrayInputStream__f_count = 0;
  this.Ljava_io_ByteArrayInputStream__f_pos = 0
}
$c_Ljava_io_ByteArrayInputStream.prototype = new $h_Ljava_io_InputStream();
$c_Ljava_io_ByteArrayInputStream.prototype.constructor = $c_Ljava_io_ByteArrayInputStream;
/** @constructor */
function $h_Ljava_io_ByteArrayInputStream() {
  /*<skip>*/
}
$h_Ljava_io_ByteArrayInputStream.prototype = $c_Ljava_io_ByteArrayInputStream.prototype;
$c_Ljava_io_ByteArrayInputStream.prototype.read__I = (function() {
  if ((this.Ljava_io_ByteArrayInputStream__f_pos >= this.Ljava_io_ByteArrayInputStream__f_count)) {
    return (-1)
  } else {
    var res = (255 & $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Ljava_io_ByteArrayInputStream__f_buf).get(this.Ljava_io_ByteArrayInputStream__f_pos));
    this.Ljava_io_ByteArrayInputStream__f_pos = ((1 + this.Ljava_io_ByteArrayInputStream__f_pos) | 0);
    return res
  }
});
$c_Ljava_io_ByteArrayInputStream.prototype.close__V = (function() {
  /*<skip>*/
});
var $d_Ljava_io_ByteArrayInputStream = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Ljava_io_ByteArrayInputStream: 0
}, false, "java.io.ByteArrayInputStream", {
  Ljava_io_ByteArrayInputStream: 1,
  Ljava_io_InputStream: 1,
  O: 1,
  Ljava_io_Closeable: 1,
  jl_AutoCloseable: 1
});
$c_Ljava_io_ByteArrayInputStream.prototype.$classData = $d_Ljava_io_ByteArrayInputStream;
function $ct_Ljava_io_FilterInputStream__Ljava_io_InputStream__($thiz, in$1) {
  $thiz.Ljava_io_FilterInputStream__f_in = in$1;
  return $thiz
}
/** @constructor */
function $c_Ljava_io_FilterInputStream() {
  this.Ljava_io_FilterInputStream__f_in = null
}
$c_Ljava_io_FilterInputStream.prototype = new $h_Ljava_io_InputStream();
$c_Ljava_io_FilterInputStream.prototype.constructor = $c_Ljava_io_FilterInputStream;
/** @constructor */
function $h_Ljava_io_FilterInputStream() {
  /*<skip>*/
}
$h_Ljava_io_FilterInputStream.prototype = $c_Ljava_io_FilterInputStream.prototype;
$c_Ljava_io_FilterInputStream.prototype.close__V = (function() {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Ljava_io_FilterInputStream__f_in).close__V()
});
function $p_Lmunit_MUnitRunner__munitTests__scm_ArrayBuffer($thiz) {
  if ((!$thiz.Lmunit_MUnitRunner__f_munitTestsbitmap$1)) {
    var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_scm_ArrayBuffer$();
    var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lmunit_MUnitRunner__f_suite).munitTests__sci_Seq();
    $thiz.Lmunit_MUnitRunner__f_munitTests$lzy1 = this$1.from__sc_IterableOnce__scm_ArrayBuffer(elems);
    $thiz.Lmunit_MUnitRunner__f_munitTestsbitmap$1 = true
  };
  return $thiz.Lmunit_MUnitRunner__f_munitTests$lzy1
}
function $p_Lmunit_MUnitRunner__runAsyncTestsSynchronously__Lorg_junit_runner_notification_RunNotifier__s_concurrent_Future($thiz, notifier) {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($p_Lmunit_MUnitRunner__munitTests__scm_ArrayBuffer($thiz));
  return $p_Lmunit_MUnitRunner__loop$1__Lorg_junit_runner_notification_RunNotifier__sc_Iterator__s_concurrent_Future($thiz, notifier, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$1.view__scm_ArrayBufferView()).iterator__sc_Iterator())
}
function $p_Lmunit_MUnitRunner__runAll__Lorg_junit_runner_notification_RunNotifier__s_concurrent_Future($thiz, notifier) {
  var isBeforeAllRun = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_BooleanRef(false);
  var isContinue = $p_Lmunit_MUnitRunner__runBeforeAll__Lorg_junit_runner_notification_RunNotifier__Z($thiz, notifier);
  isBeforeAllRun.sr_BooleanRef__f_elem = isContinue;
  var result = (isContinue ? $p_Lmunit_MUnitRunner__runAsyncTestsSynchronously__Lorg_junit_runner_notification_RunNotifier__s_concurrent_Future($thiz, notifier) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_Future$().successful__O__s_concurrent_Future((void 0)));
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lmunit_internal_FutureCompat$ExtensionFuture(result).transformCompat__F1__s_concurrent_ExecutionContext__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((s) => {
    var s$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_util_Try(s);
    if (isBeforeAllRun.sr_BooleanRef__f_elem) {
      $p_Lmunit_MUnitRunner__runAfterAll__Lorg_junit_runner_notification_RunNotifier__V($thiz, notifier)
    };
    return s$1
  })), $thiz.Lmunit_MUnitRunner__f_ec)
}
function $p_Lmunit_MUnitRunner__runBeforeAll__Lorg_junit_runner_notification_RunNotifier__Z($thiz, notifier) {
  var elem = $p_Lmunit_MUnitRunner__runHiddenTest__Lorg_junit_runner_notification_RunNotifier__T__F0__Z($thiz, notifier, "beforeAll", new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0((() => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lmunit_MUnitRunner__f_suite)
  })));
  var elem$1 = false;
  elem$1 = elem;
  var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lmunit_MUnitRunner__f_suite), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_package$().s_package$__f_Nil));
  var these = this$4;
  while ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).isEmpty__Z())) {
    var arg1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).head__O();
    var fixture = $as_Lmunit_Suite$Fixture(arg1);
    var ev$2 = (!(!(elem$1 & $p_Lmunit_MUnitRunner__runHiddenTest__Lorg_junit_runner_notification_RunNotifier__T__F0__Z($thiz, notifier, (("beforeAllFixture(" + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(fixture).fixtureName__T()) + ")"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0(((fixture) => (() => {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(fixture).beforeAll__V()
    }))(fixture))))));
    elem$1 = ev$2;
    these = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).tail__O())
  };
  return elem$1
}
function $p_Lmunit_MUnitRunner__runAfterAll__Lorg_junit_runner_notification_RunNotifier__V($thiz, notifier) {
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lmunit_MUnitRunner__f_suite), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_package$().s_package$__f_Nil));
  var these = this$2;
  while ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).isEmpty__Z())) {
    var arg1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).head__O();
    var fixture = $as_Lmunit_Suite$Fixture(arg1);
    $p_Lmunit_MUnitRunner__runHiddenTest__Lorg_junit_runner_notification_RunNotifier__T__F0__Z($thiz, notifier, (("afterAllFixture(" + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(fixture).fixtureName__T()) + ")"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0(((fixture) => (() => {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(fixture).afterAll__V()
    }))(fixture)));
    these = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).tail__O())
  };
  $p_Lmunit_MUnitRunner__runHiddenTest__Lorg_junit_runner_notification_RunNotifier__T__F0__Z($thiz, notifier, "afterAll", new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0((() => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lmunit_MUnitRunner__f_suite)
  })))
}
function $p_Lmunit_MUnitRunner__runBeforeEach__Lmunit_GenericTest__Lmunit_MUnitRunner$BeforeEachResult($thiz, test) {
  new $c_Lmunit_GenericBeforeEach(test);
  var fixtures = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_scm_ListBuffer();
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_package$().s_package$__f_List);
  var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_F0.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0((() => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lmunit_MUnitRunner__f_suite)
  }))]));
  var this$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems));
  var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lmunit_MUnitRunner__f_suite), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_package$().s_package$__f_Nil));
  if ((this$5 !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
    new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(this$5.head__E(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
    this$5.tail__E()
  };
  var suffix = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
  var error = $p_Lmunit_MUnitRunner__foreachUnsafe__sc_Iterable__s_util_Try($thiz, this$6.appendedAll__sc_IterableOnce__sci_List(suffix));
  return new $c_Lmunit_MUnitRunner$BeforeEachResult($thiz, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(error).failed__s_util_Try()).toOption__s_Option(), fixtures.toList__sci_List())
}
function $p_Lmunit_MUnitRunner__runAfterEach__Lmunit_GenericTest__sci_List__V($thiz, test, fixtures) {
  var afterEach = new $c_Lmunit_GenericAfterEach(test);
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(fixtures);
  var f = ((fixture) => {
    var fixture$1 = $as_Lmunit_Suite$Fixture(fixture);
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0((() => {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(fixture$1).afterEach__Lmunit_GenericAfterEach__V(afterEach)
    }))
  });
  if ((this$1 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
    var $$x1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$()
  } else {
    var arg1 = this$1.head__O();
    var h = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(arg1), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
    var t = h;
    var rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(this$1.tail__O());
    while ((rest !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
      var arg1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).head__O();
      var nx = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(arg1$1), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).sci_$colon$colon__f_next = nx;
      t = nx;
      rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).tail__O())
    };
    var $$x1 = h
  };
  var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x1);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_package$().s_package$__f_List);
  var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_F0.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0((() => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lmunit_MUnitRunner__f_suite)
  }))]));
  var suffix = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems);
  var error = $p_Lmunit_MUnitRunner__foreachUnsafe__sc_Iterable__s_util_Try($thiz, this$4.appendedAll__sc_IterableOnce__sci_List(suffix));
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(error).get__O()
}
function $p_Lmunit_MUnitRunner__runTest__Lorg_junit_runner_notification_RunNotifier__Lmunit_GenericTest__s_concurrent_Future($thiz, notifier, test) {
  var description = $thiz.createTestDescription__Lmunit_GenericTest__Lorg_junit_runner_Description(test);
  if ($thiz.Lmunit_MUnitRunner__f_munit$MUnitRunner$$suiteAborted) {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(notifier).fireTestAssumptionFailed__Lorg_junit_runner_notification_Failure__V(new $c_Lorg_junit_runner_notification_Failure(description, new $c_Lmunit_FailSuiteException("Suite has been aborted", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(test).Lmunit_GenericTest__f_location)));
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_Future$().successful__O__s_concurrent_Future(false)
  };
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(notifier).fireTestStarted__Lorg_junit_runner_Description__V(description);
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(test).Lmunit_GenericTest__f_tags);
  var elem = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_package$().Lmunit_package$__f_Ignore;
  if (this$1.contains__O__Z(elem)) {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(notifier).fireTestIgnored__Lorg_junit_runner_Description__V(description);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_Future$().successful__O__s_concurrent_Future(false)
  };
  var onError = new $c_Lmunit_MUnitRunner$$anon$1(notifier, description, $thiz);
  try {
    var result = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($p_Lmunit_MUnitRunner__runTestBody__Lorg_junit_runner_notification_RunNotifier__Lorg_junit_runner_Description__Lmunit_GenericTest__s_concurrent_Future($thiz, notifier, description, test)).recoverWith__s_PartialFunction__s_concurrent_ExecutionContext__s_concurrent_Future(onError, $thiz.Lmunit_MUnitRunner__f_ec)
  } catch (e) {
    var e$1 = e;
    var e$2 = ((e$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Throwable) ? e$1 : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException(e$1));
    if (onError.isDefinedAt__jl_Throwable__Z(e$2)) {
      var default$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_PartialFunction$().s_PartialFunction$__f_empty_pf;
      var result = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_concurrent_Future(onError.applyOrElse__jl_Throwable__F1__O(e$2, default$1))
    } else {
      var result;
      throw e$2
    }
  };
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(result).map__F1__s_concurrent_ExecutionContext__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((_$2) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Void(_$2);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(notifier).fireTestFinished__Lorg_junit_runner_Description__V(description);
    return true
  })), $thiz.Lmunit_MUnitRunner__f_ec)
}
function $p_Lmunit_MUnitRunner__futureFromAny__O__s_concurrent_Future($thiz, any) {
  if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$is_s_concurrent_Future(any)) {
    var f = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_concurrent_Future(any);
    return f
  } else {
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_Future$().successful__O__s_concurrent_Future(any)
  }
}
function $p_Lmunit_MUnitRunner__runTestBody__Lorg_junit_runner_notification_RunNotifier__Lorg_junit_runner_Description__Lmunit_GenericTest__s_concurrent_Future($thiz, notifier, description, test) {
  var result = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_concurrent_Future($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_internal_console_StackTraces$().dropOutside__F0__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0((() => {
    var beforeEachResult = $p_Lmunit_MUnitRunner__runBeforeEach__Lmunit_GenericTest__Lmunit_MUnitRunner$BeforeEachResult($thiz, test);
    matchResult8: {
      var any;
      var x25 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(beforeEachResult).Lmunit_MUnitRunner$BeforeEachResult__f_error;
      var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
      if ((x === x25)) {
        try {
          var any = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(test).Lmunit_GenericTest__f_body).apply__O();
          break matchResult8
        } finally {
          $p_Lmunit_MUnitRunner__runAfterEach__Lmunit_GenericTest__sci_List__V($thiz, test, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(beforeEachResult).Lmunit_MUnitRunner$BeforeEachResult__f_loadedFixtures)
        }
      };
      if ((x25 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
        var error = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Throwable($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Some(x25)).s_Some__f_value);
        try {
          $p_Lmunit_MUnitRunner__runAfterEach__Lmunit_GenericTest__sci_List__V($thiz, test, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(beforeEachResult).Lmunit_MUnitRunner$BeforeEachResult__f_loadedFixtures);
          var any = (void 0);
          break matchResult8
        } finally {
          throw ((error === null) ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(null) : error)
        }
      };
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x25)
    };
    return $p_Lmunit_MUnitRunner__futureFromAny__O__s_concurrent_Future($thiz, any)
  }))));
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(result).map__F1__s_concurrent_ExecutionContext__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((x$1) => {
    if ((x$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lmunit_TestValues$FlakyFailure)) {
      var f = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lmunit_TestValues$FlakyFailure(x$1);
      $thiz.munit$MUnitRunner$$trimStackTrace__jl_Throwable__V(f);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(notifier).fireTestAssumptionFailed__Lorg_junit_runner_notification_Failure__V(new $c_Lorg_junit_runner_notification_Failure(description, f))
    } else {
      var x$2 = $m_Lmunit_TestValues$().Lmunit_TestValues$__f_Ignore;
      if (((x$2 === null) ? (x$1 === null) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$2).equals__O__Z(x$1))) {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(notifier).fireTestIgnored__Lorg_junit_runner_Description__V(description)
      }
    }
  })), $thiz.Lmunit_MUnitRunner__f_ec)
}
function $p_Lmunit_MUnitRunner__foreachUnsafe__sc_Iterable__s_util_Try($thiz, thunks) {
  var elem = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_scm_ListBuffer();
  var errors = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_ObjectRef(elem);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(thunks).foreach__F1__V(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((thunk) => {
    var thunk$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_F0(thunk);
    return $ps_Lmunit_MUnitRunner__liftedTree1$1__sr_ObjectRef__F0__O(errors, thunk$1)
  })));
  var x31 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_scm_ListBuffer(errors.sr_ObjectRef__f_elem)).toList__sci_List();
  if ((x31 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon)) {
    var x32 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_$colon$colon(x31);
    var x34 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x32).sci_$colon$colon__f_next;
    var head = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Throwable($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x32).sci_$colon$colon__f_head);
    var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x34);
    var these = this$3;
    while ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).isEmpty__Z())) {
      var arg1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).head__O();
      var e = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Throwable(arg1);
      if ((e !== head)) {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(head).addSuppressed__jl_Throwable__V(e)
      };
      these = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).tail__O())
    };
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure(head)
  };
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success((void 0))
}
function $p_Lmunit_MUnitRunner__runHiddenTest__Lorg_junit_runner_notification_RunNotifier__T__F0__Z($thiz, notifier, name, thunk) {
  try {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_internal_console_StackTraces$().dropOutside__F0__O(thunk);
    return true
  } catch (e) {
    var e$1 = e;
    var e$2 = ((e$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Throwable) ? e$1 : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException(e$1));
    $p_Lmunit_MUnitRunner__fireHiddenTest__Lorg_junit_runner_notification_RunNotifier__T__jl_Throwable__V($thiz, notifier, name, e$2);
    return false
  }
}
function $p_Lmunit_MUnitRunner__fireHiddenTest__Lorg_junit_runner_notification_RunNotifier__T__jl_Throwable__V($thiz, notifier, name, ex) {
  var test = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_Lmunit_GenericTest__T__F0__sci_Set__Lmunit_Location__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lmunit_GenericTest(), name, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0((() => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$().$qmark$qmark$qmark__E()
  })), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$().s_Predef$__f_Set), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$EmptySet$()), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lmunit_Location("", 0));
  var description = $thiz.createTestDescription__Lmunit_GenericTest__Lorg_junit_runner_Description(test);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(notifier).fireTestStarted__Lorg_junit_runner_Description__V(description);
  $thiz.munit$MUnitRunner$$trimStackTrace__jl_Throwable__V(ex);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(notifier).fireTestFailure__Lorg_junit_runner_notification_Failure__V(new $c_Lorg_junit_runner_notification_Failure(description, ex));
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(notifier).fireTestFinished__Lorg_junit_runner_Description__V(description)
}
function $p_Lmunit_MUnitRunner__loop$1__Lorg_junit_runner_notification_RunNotifier__sc_Iterator__s_concurrent_Future($thiz, notifier$1, it) {
  while (true) {
    if ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).hasNext__Z())) {
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_Future$().successful__O__s_concurrent_Future((void 0))
    } else {
      var future = $p_Lmunit_MUnitRunner__runTest__Lorg_junit_runner_notification_RunNotifier__Lmunit_GenericTest__s_concurrent_Future($thiz, notifier$1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lmunit_GenericTest($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).next__O()));
      var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(future);
      var x2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Option$().apply__O__s_Option($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$p_s_concurrent_impl_Promise$DefaultPromise__value0__s_util_Try(this$1));
      if ((x2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
        continue
      };
      var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
      if ((x === x2)) {
        return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(future).flatMap__F1__s_concurrent_ExecutionContext__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((notifier$1, it) => ((_$1) => {
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(_$1);
          return $p_Lmunit_MUnitRunner__loop$1__Lorg_junit_runner_notification_RunNotifier__sc_Iterator__s_concurrent_Future($thiz, notifier$1, it)
        }))(notifier$1, it)), $thiz.Lmunit_MUnitRunner__f_ec)
      };
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x2)
    }
  }
}
function $ps_Lmunit_MUnitRunner__liftedTree1$1__sr_ObjectRef__F0__O(errors$1, thunk$1) {
  try {
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(thunk$1).apply__O()
  } catch (e) {
    var e$1 = e;
    var e$2 = ((e$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Throwable) ? e$1 : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException(e$1));
    if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_util_control_NonFatal$().apply__jl_Throwable__Z(e$2)) {
      var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_scm_ListBuffer($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(errors$1).sr_ObjectRef__f_elem));
      return this$2.addOne__O__scm_ListBuffer(e$2)
    };
    throw e$2
  }
}
/** @constructor */
function $c_Lmunit_MUnitRunner(cls, newInstance) {
  this.Lmunit_MUnitRunner__f_cls = null;
  this.Lmunit_MUnitRunner__f_suite = null;
  this.Lmunit_MUnitRunner__f_ec = null;
  this.Lmunit_MUnitRunner__f_settings = null;
  this.Lmunit_MUnitRunner__f_munit$MUnitRunner$$suiteAborted = false;
  this.Lmunit_MUnitRunner__f_descriptions = null;
  this.Lmunit_MUnitRunner__f_testNames = null;
  this.Lmunit_MUnitRunner__f_munitTests$lzy1 = null;
  this.Lmunit_MUnitRunner__f_munitTestsbitmap$1 = false;
  this.Lmunit_MUnitRunner__f_cls = cls;
  this.Lmunit_MUnitRunner__f_suite = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lmunit_Suite($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(newInstance).apply__O());
  this.Lmunit_MUnitRunner__f_ec = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_MUnitRunner__f_suite).Lmunit_Suite__f_parasiticExecutionContext;
  this.Lmunit_MUnitRunner__f_settings = new $c_Lmunit_internal_junitinterface_Settings$$anon$1();
  this.Lmunit_MUnitRunner__f_munit$MUnitRunner$$suiteAborted = false;
  this.Lmunit_MUnitRunner__f_descriptions = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_scm_Map($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_scm_Map$().empty__O());
  this.Lmunit_MUnitRunner__f_testNames = $as_scm_Set($m_scm_Set$().empty__O())
}
$c_Lmunit_MUnitRunner.prototype = new $h_Lorg_junit_runner_Runner();
$c_Lmunit_MUnitRunner.prototype.constructor = $c_Lmunit_MUnitRunner;
/** @constructor */
function $h_Lmunit_MUnitRunner() {
  /*<skip>*/
}
$h_Lmunit_MUnitRunner.prototype = $c_Lmunit_MUnitRunner.prototype;
$c_Lmunit_MUnitRunner.prototype.filter__Lorg_junit_runner_manipulation_Filter__V = (function(filter) {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($p_Lmunit_MUnitRunner__munitTests__scm_ArrayBuffer(this));
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_scm_ArrayBuffer$();
  var b = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_scm_ArrayBuffer$$anon$1();
  var it = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$1.view__scm_ArrayBufferView()).iterator__sc_Iterator();
  while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).hasNext__Z()) {
    var elem = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).next__O();
    var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lmunit_GenericTest(elem);
    if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(filter).shouldRun__Lorg_junit_runner_Description__Z(this.createTestDescription__Lmunit_GenericTest__Lorg_junit_runner_Description(t)) !== false)) {
      b.addOne__O__scm_GrowableBuilder(elem)
    }
  };
  var newTests = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_scm_ArrayBuffer(b.scm_GrowableBuilder__f_elems);
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($p_Lmunit_MUnitRunner__munitTests__scm_ArrayBuffer(this));
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$p_scm_ArrayBuffer__reduceToSize__I__V(this$3, 0);
  var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($p_Lmunit_MUnitRunner__munitTests__scm_ArrayBuffer(this));
  this$4.addAll__sc_IterableOnce__scm_ArrayBuffer(newTests)
});
$c_Lmunit_MUnitRunner.prototype.createTestDescription__Lmunit_GenericTest__Lorg_junit_runner_Description = (function(test) {
  return $as_Lorg_junit_runner_Description($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_MUnitRunner__f_descriptions).getOrElseUpdate__O__F0__O(test, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0((() => {
    var escapedName = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_internal_console_Printers$().escapeNonVisible__T__T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(test).Lmunit_GenericTest__f_name);
    var $$x2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Option$();
    var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_internal_Compat$().Lmunit_internal_Compat$__f_LazyList);
    var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$2.from__I__I__sci_LazyList(0, 1)).map__F1__sci_LazyList(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((x$1) => {
      var x$1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(x$1);
      return ((x$1$1 === 0) ? escapedName : ((escapedName + "-") + x$1$1))
    }))));
    var _$this = this$3;
    var $$x1;
    while (true) {
      if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$this).isEmpty__Z()) {
        var $$x1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
        break
      } else {
        var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$this);
        var elem = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$4.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).head__O();
        var candidate = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(elem);
        if ((!(!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_MUnitRunner__f_testNames).contains__O__Z(candidate)))) {
          var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$this);
          _$this = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$5.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
          continue
        };
        var $$x1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(elem);
        break
      }
    };
    var testName = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($$x2).option2Iterable__s_Option__sc_Iterable($$x1)).head__O());
    var this$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_MUnitRunner__f_testNames);
    this$6.add__O__Z(testName);
    var desc = $m_Lorg_junit_runner_Description$().createTestDescription__jl_Class__T__sci_Seq__Lorg_junit_runner_Description(this.Lmunit_MUnitRunner__f_cls, testName, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(test).annotations__Ajl_annotation_Annotation()));
    return desc
  }))))
});
$c_Lmunit_MUnitRunner.prototype.getDescription__Lorg_junit_runner_Description = (function() {
  var description = $m_Lorg_junit_runner_Description$().createSuiteDescription__jl_Class__Lorg_junit_runner_Description(this.Lmunit_MUnitRunner__f_cls);
  try {
    var suiteTests = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_scm_ArrayBuffer($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_internal_console_StackTraces$().dropOutside__F0__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0((() => $p_Lmunit_MUnitRunner__munitTests__scm_ArrayBuffer(this)))));
    var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(suiteTests);
    var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$2.view__scm_ArrayBufferView()).iterator__sc_Iterator());
    var f = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((test) => {
      var test$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lmunit_GenericTest(test);
      return this.createTestDescription__Lmunit_GenericTest__Lorg_junit_runner_Description(test$1)
    }));
    var this$4 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sc_Iterator$$anon$9(this$3, f);
    while (this$4.hasNext__Z()) {
      var arg1 = this$4.next__O();
      var description$1 = $as_Lorg_junit_runner_Description(arg1);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(description).addChild__Lorg_junit_runner_Description__Lorg_junit_runner_Description(description$1)
    }
  } catch (e) {
    var e$1 = e;
    var e$2 = ((e$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Throwable) ? e$1 : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException(e$1));
    this.munit$MUnitRunner$$trimStackTrace__jl_Throwable__V(e$2);
    e$2.printStackTrace__Ljava_io_PrintStream__V($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_jl_System$Streams$().jl_System$Streams$__f_err)
  };
  return description
});
$c_Lmunit_MUnitRunner.prototype.runAsync__Lorg_junit_runner_notification_RunNotifier__s_concurrent_Future = (function(notifier) {
  var description = this.getDescription__Lorg_junit_runner_Description();
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(notifier).fireTestSuiteStarted__Lorg_junit_runner_Description__V(description);
  try {
    return $p_Lmunit_MUnitRunner__runAll__Lorg_junit_runner_notification_RunNotifier__s_concurrent_Future(this, notifier)
  } catch (e) {
    var e$1 = e;
    var e$2 = ((e$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Throwable) ? e$1 : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException(e$1));
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_Future$().successful__O__s_concurrent_Future(($p_Lmunit_MUnitRunner__fireHiddenTest__Lorg_junit_runner_notification_RunNotifier__T__jl_Throwable__V(this, notifier, "expected error running tests", e$2), (void 0)))
  } finally {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(notifier)
  }
});
$c_Lmunit_MUnitRunner.prototype.munit$MUnitRunner$$rootCause__jl_Throwable__jl_Throwable = (function(x) {
  var this$ = this;
  var x$tailLocal1 = x;
  while (true) {
    var x18 = x$tailLocal1;
    matchAlts1: {
      matchAlts2: {
        if (false) {
          break matchAlts2
        };
        if (false) {
          break matchAlts2
        };
        if (false) {
          break matchAlts2
        };
        if ((x18 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_ju_concurrent_ExecutionException)) {
          break matchAlts2
        };
        break matchAlts1
      };
      if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$tailLocal1).getCause__jl_Throwable() !== null)) {
        var \u03b4this$tmp1 = this$;
        var x$tailLocal1$tmp1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$tailLocal1).getCause__jl_Throwable();
        this$ = \u03b4this$tmp1;
        x$tailLocal1 = x$tailLocal1$tmp1;
        continue
      }
    };
    return x$tailLocal1
  }
});
$c_Lmunit_MUnitRunner.prototype.munit$MUnitRunner$$trimStackTrace__jl_Throwable__V = (function(ex) {
  if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_MUnitRunner__f_settings).trimStackTraces__Z()) {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_internal_console_StackTraces$().trimStackTrace__jl_Throwable__jl_Throwable(ex)
  }
});
function $as_Lmunit_MUnitRunner(obj) {
  return (((obj instanceof $c_Lmunit_MUnitRunner) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "munit.MUnitRunner"))
}
function $isArrayOf_Lmunit_MUnitRunner(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lmunit_MUnitRunner)))
}
function $asArrayOf_Lmunit_MUnitRunner(obj, depth) {
  return (($isArrayOf_Lmunit_MUnitRunner(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lmunit.MUnitRunner;", depth))
}
var $d_Lmunit_MUnitRunner = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lmunit_MUnitRunner: 0
}, false, "munit.MUnitRunner", {
  Lmunit_MUnitRunner: 1,
  Lorg_junit_runner_Runner: 1,
  O: 1,
  Lorg_junit_runner_manipulation_Filterable: 1,
  Lmunit_internal_junitinterface_Configurable: 1
});
$c_Lmunit_MUnitRunner.prototype.$classData = $d_Lmunit_MUnitRunner;
/** @constructor */
function $c_Lsbt_testing_Status(name, ordinal) {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_Enum__T__I__(this, name, ordinal)
}
$c_Lsbt_testing_Status.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_jl_Enum();
$c_Lsbt_testing_Status.prototype.constructor = $c_Lsbt_testing_Status;
/** @constructor */
function $h_Lsbt_testing_Status() {
  /*<skip>*/
}
$h_Lsbt_testing_Status.prototype = $c_Lsbt_testing_Status.prototype;
function $as_Lsbt_testing_Status(obj) {
  return (((obj instanceof $c_Lsbt_testing_Status) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "sbt.testing.Status"))
}
function $isArrayOf_Lsbt_testing_Status(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lsbt_testing_Status)))
}
function $asArrayOf_Lsbt_testing_Status(obj, depth) {
  return (($isArrayOf_Lsbt_testing_Status(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lsbt.testing.Status;", depth))
}
var $d_Lsbt_testing_Status = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lsbt_testing_Status: 0
}, false, "sbt.testing.Status", {
  Lsbt_testing_Status: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1
});
$c_Lsbt_testing_Status.prototype.$classData = $d_Lsbt_testing_Status;
/** @constructor */
function $c_scm_Set$() {
  this.sc_IterableFactory$Delegate__f_delegate = null;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_scm_HashSet$())
}
$c_scm_Set$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_sc_IterableFactory$Delegate();
$c_scm_Set$.prototype.constructor = $c_scm_Set$;
/** @constructor */
function $h_scm_Set$() {
  /*<skip>*/
}
$h_scm_Set$.prototype = $c_scm_Set$.prototype;
var $d_scm_Set$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  scm_Set$: 0
}, false, "scala.collection.mutable.Set$", {
  scm_Set$: 1,
  sc_IterableFactory$Delegate: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_scm_Set$.prototype.$classData = $d_scm_Set$;
var $n_scm_Set$;
function $m_scm_Set$() {
  if ((!$n_scm_Set$)) {
    $n_scm_Set$ = new $c_scm_Set$()
  };
  return $n_scm_Set$
}
function $p_Ljava_io_ByteArrayOutputStream__growBuf__I__V($thiz, minIncrement) {
  var a = (($thiz.Ljava_io_ByteArrayOutputStream__f_count + minIncrement) | 0);
  var b = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Ljava_io_ByteArrayOutputStream__f_buf).u.length << 1);
  var newSize = ((a > b) ? a : b);
  var newBuf = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B(newSize);
  var x0 = $thiz.Ljava_io_ByteArrayOutputStream__f_buf;
  var x4 = $thiz.Ljava_io_ByteArrayOutputStream__f_count;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$systemArraycopy($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x0), 0, newBuf, 0, x4);
  $thiz.Ljava_io_ByteArrayOutputStream__f_buf = newBuf
}
function $ct_Ljava_io_ByteArrayOutputStream__I__($thiz, initBufSize) {
  $thiz.Ljava_io_ByteArrayOutputStream__f_buf = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B(initBufSize);
  $thiz.Ljava_io_ByteArrayOutputStream__f_count = 0;
  return $thiz
}
function $ct_Ljava_io_ByteArrayOutputStream__($thiz) {
  $ct_Ljava_io_ByteArrayOutputStream__I__($thiz, 32);
  return $thiz
}
/** @constructor */
function $c_Ljava_io_ByteArrayOutputStream() {
  this.Ljava_io_ByteArrayOutputStream__f_buf = null;
  this.Ljava_io_ByteArrayOutputStream__f_count = 0
}
$c_Ljava_io_ByteArrayOutputStream.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_Ljava_io_OutputStream();
$c_Ljava_io_ByteArrayOutputStream.prototype.constructor = $c_Ljava_io_ByteArrayOutputStream;
/** @constructor */
function $h_Ljava_io_ByteArrayOutputStream() {
  /*<skip>*/
}
$h_Ljava_io_ByteArrayOutputStream.prototype = $c_Ljava_io_ByteArrayOutputStream.prototype;
$c_Ljava_io_ByteArrayOutputStream.prototype.write__I__V = (function(b) {
  if ((this.Ljava_io_ByteArrayOutputStream__f_count >= $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Ljava_io_ByteArrayOutputStream__f_buf).u.length)) {
    $p_Ljava_io_ByteArrayOutputStream__growBuf__I__V(this, 1)
  };
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Ljava_io_ByteArrayOutputStream__f_buf).set(this.Ljava_io_ByteArrayOutputStream__f_count, ((b << 24) >> 24));
  this.Ljava_io_ByteArrayOutputStream__f_count = ((1 + this.Ljava_io_ByteArrayOutputStream__f_count) | 0)
});
$c_Ljava_io_ByteArrayOutputStream.prototype.toByteArray__AB = (function() {
  var res = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B(this.Ljava_io_ByteArrayOutputStream__f_count);
  var x0 = this.Ljava_io_ByteArrayOutputStream__f_buf;
  var x4 = this.Ljava_io_ByteArrayOutputStream__f_count;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$systemArraycopy($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x0), 0, res, 0, x4);
  return res
});
$c_Ljava_io_ByteArrayOutputStream.prototype.toString__T = (function() {
  var bytes = this.Ljava_io_ByteArrayOutputStream__f_buf;
  var length = this.Ljava_io_ByteArrayOutputStream__f_count;
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_jl_String$();
  return this$1.new__AB__I__I__Ljava_nio_charset_Charset__T(bytes, 0, length, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Ljava_nio_charset_UTF\uff3f8$())
});
$c_Ljava_io_ByteArrayOutputStream.prototype.close__V = (function() {
  /*<skip>*/
});
var $d_Ljava_io_ByteArrayOutputStream = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Ljava_io_ByteArrayOutputStream: 0
}, false, "java.io.ByteArrayOutputStream", {
  Ljava_io_ByteArrayOutputStream: 1,
  Ljava_io_OutputStream: 1,
  O: 1,
  Ljava_io_Closeable: 1,
  jl_AutoCloseable: 1,
  Ljava_io_Flushable: 1
});
$c_Ljava_io_ByteArrayOutputStream.prototype.$classData = $d_Ljava_io_ByteArrayOutputStream;
class $c_Ljava_io_EOFException extends $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Ljava_io_IOException {
  constructor() {
    super();
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
}
var $d_Ljava_io_EOFException = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Ljava_io_EOFException: 0
}, false, "java.io.EOFException", {
  Ljava_io_EOFException: 1,
  Ljava_io_IOException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Ljava_io_EOFException.prototype.$classData = $d_Ljava_io_EOFException;
function $ct_jl_ClassNotFoundException__T__jl_Throwable__($thiz, s, e) {
  $thiz.jl_ClassNotFoundException__f_e = e;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
}
function $ct_jl_ClassNotFoundException__T__($thiz, s) {
  $ct_jl_ClassNotFoundException__T__jl_Throwable__($thiz, s, null);
  return $thiz
}
class $c_jl_ClassNotFoundException extends $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_ReflectiveOperationException {
  constructor() {
    super();
    this.jl_ClassNotFoundException__f_e = null
  };
  getCause__jl_Throwable() {
    return this.jl_ClassNotFoundException__f_e
  };
}
var $d_jl_ClassNotFoundException = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  jl_ClassNotFoundException: 0
}, false, "java.lang.ClassNotFoundException", {
  jl_ClassNotFoundException: 1,
  jl_ReflectiveOperationException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ClassNotFoundException.prototype.$classData = $d_jl_ClassNotFoundException;
function $as_jl_ExceptionInInitializerError(obj) {
  return ((false || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "java.lang.ExceptionInInitializerError"))
}
function $isArrayOf_jl_ExceptionInInitializerError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_ExceptionInInitializerError)))
}
function $asArrayOf_jl_ExceptionInInitializerError(obj, depth) {
  return (($isArrayOf_jl_ExceptionInInitializerError(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Ljava.lang.ExceptionInInitializerError;", depth))
}
class $c_jl_IncompatibleClassChangeError extends $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_LinkageError {
}
function $as_jl_reflect_InvocationTargetException(obj) {
  return ((false || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "java.lang.reflect.InvocationTargetException"))
}
function $isArrayOf_jl_reflect_InvocationTargetException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_reflect_InvocationTargetException)))
}
function $asArrayOf_jl_reflect_InvocationTargetException(obj, depth) {
  return (($isArrayOf_jl_reflect_InvocationTargetException(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Ljava.lang.reflect.InvocationTargetException;", depth))
}
function $as_jl_reflect_UndeclaredThrowableException(obj) {
  return ((false || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "java.lang.reflect.UndeclaredThrowableException"))
}
function $isArrayOf_jl_reflect_UndeclaredThrowableException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_reflect_UndeclaredThrowableException)))
}
function $asArrayOf_jl_reflect_UndeclaredThrowableException(obj, depth) {
  return (($isArrayOf_jl_reflect_UndeclaredThrowableException(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Ljava.lang.reflect.UndeclaredThrowableException;", depth))
}
function $ct_ju_concurrent_ConcurrentHashMap__I__F__($thiz, initialCapacity, loadFactor) {
  $thiz.ju_concurrent_ConcurrentHashMap__f_inner = new $c_ju_concurrent_ConcurrentHashMap$InnerHashMap(initialCapacity, loadFactor);
  return $thiz
}
function $ct_ju_concurrent_ConcurrentHashMap__($thiz) {
  $ct_ju_concurrent_ConcurrentHashMap__I__F__($thiz, 16, 0.75);
  return $thiz
}
/** @constructor */
function $c_ju_concurrent_ConcurrentHashMap() {
  this.ju_concurrent_ConcurrentHashMap__f_inner = null
}
$c_ju_concurrent_ConcurrentHashMap.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_ju_AbstractMap();
$c_ju_concurrent_ConcurrentHashMap.prototype.constructor = $c_ju_concurrent_ConcurrentHashMap;
/** @constructor */
function $h_ju_concurrent_ConcurrentHashMap() {
  /*<skip>*/
}
$h_ju_concurrent_ConcurrentHashMap.prototype = $c_ju_concurrent_ConcurrentHashMap.prototype;
$c_ju_concurrent_ConcurrentHashMap.prototype.size__I = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.ju_concurrent_ConcurrentHashMap__f_inner).ju_HashMap__f_contentSize
});
$c_ju_concurrent_ConcurrentHashMap.prototype.isEmpty__Z = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.ju_concurrent_ConcurrentHashMap__f_inner).isEmpty__Z()
});
$c_ju_concurrent_ConcurrentHashMap.prototype.get__O__O = (function(key) {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.ju_concurrent_ConcurrentHashMap__f_inner).get__O__O(key)
});
$c_ju_concurrent_ConcurrentHashMap.prototype.put__O__O__O = (function(key, value) {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.ju_concurrent_ConcurrentHashMap__f_inner).put__O__O__O(key, value)
});
$c_ju_concurrent_ConcurrentHashMap.prototype.remove__O__O = (function(key) {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.ju_concurrent_ConcurrentHashMap__f_inner).remove__O__O(key)
});
$c_ju_concurrent_ConcurrentHashMap.prototype.keySet__ju_concurrent_ConcurrentHashMap$KeySetView = (function() {
  return new $c_ju_concurrent_ConcurrentHashMap$KeySetView(this.ju_concurrent_ConcurrentHashMap__f_inner, null)
});
$c_ju_concurrent_ConcurrentHashMap.prototype.entrySet__ju_Set = (function() {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.ju_concurrent_ConcurrentHashMap__f_inner);
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_ju_HashMap$EntrySet(this$1)
});
$c_ju_concurrent_ConcurrentHashMap.prototype.hashCode__I = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.ju_concurrent_ConcurrentHashMap__f_inner).hashCode__I()
});
$c_ju_concurrent_ConcurrentHashMap.prototype.toString__T = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.ju_concurrent_ConcurrentHashMap__f_inner).toString__T()
});
$c_ju_concurrent_ConcurrentHashMap.prototype.equals__O__Z = (function(o) {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.ju_concurrent_ConcurrentHashMap__f_inner).equals__O__Z(o)
});
$c_ju_concurrent_ConcurrentHashMap.prototype.keySet__ju_Set = (function() {
  return this.keySet__ju_concurrent_ConcurrentHashMap$KeySetView()
});
function $as_ju_concurrent_ConcurrentHashMap(obj) {
  return (((obj instanceof $c_ju_concurrent_ConcurrentHashMap) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "java.util.concurrent.ConcurrentHashMap"))
}
function $isArrayOf_ju_concurrent_ConcurrentHashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.ju_concurrent_ConcurrentHashMap)))
}
function $asArrayOf_ju_concurrent_ConcurrentHashMap(obj, depth) {
  return (($isArrayOf_ju_concurrent_ConcurrentHashMap(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Ljava.util.concurrent.ConcurrentHashMap;", depth))
}
var $d_ju_concurrent_ConcurrentHashMap = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  ju_concurrent_ConcurrentHashMap: 0
}, false, "java.util.concurrent.ConcurrentHashMap", {
  ju_concurrent_ConcurrentHashMap: 1,
  ju_AbstractMap: 1,
  O: 1,
  ju_Map: 1,
  ju_concurrent_ConcurrentMap: 1,
  Ljava_io_Serializable: 1
});
$c_ju_concurrent_ConcurrentHashMap.prototype.$classData = $d_ju_concurrent_ConcurrentHashMap;
/** @constructor */
function $c_ju_concurrent_ConcurrentHashMap$KeySetView(innerMap, defaultValue) {
  this.ju_concurrent_ConcurrentHashMap$KeySetView__f_innerMap = null;
  this.ju_concurrent_ConcurrentHashMap$KeySetView__f_defaultValue = null;
  this.ju_concurrent_ConcurrentHashMap$KeySetView__f_innerMap = innerMap;
  this.ju_concurrent_ConcurrentHashMap$KeySetView__f_defaultValue = defaultValue
}
$c_ju_concurrent_ConcurrentHashMap$KeySetView.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_ju_concurrent_ConcurrentHashMap$KeySetView.prototype.constructor = $c_ju_concurrent_ConcurrentHashMap$KeySetView;
/** @constructor */
function $h_ju_concurrent_ConcurrentHashMap$KeySetView() {
  /*<skip>*/
}
$h_ju_concurrent_ConcurrentHashMap$KeySetView.prototype = $c_ju_concurrent_ConcurrentHashMap$KeySetView.prototype;
$c_ju_concurrent_ConcurrentHashMap$KeySetView.prototype.iterator__ju_Iterator = (function() {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.ju_concurrent_ConcurrentHashMap$KeySetView__f_innerMap);
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_ju_HashMap$KeySet(this$1).iterator__ju_Iterator()
});
$c_ju_concurrent_ConcurrentHashMap$KeySetView.prototype.size__I = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.ju_concurrent_ConcurrentHashMap$KeySetView__f_innerMap).ju_HashMap__f_contentSize
});
$c_ju_concurrent_ConcurrentHashMap$KeySetView.prototype.add__O__Z = (function(e) {
  if ((this.ju_concurrent_ConcurrentHashMap$KeySetView__f_defaultValue === null)) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_UnsupportedOperationException__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_UnsupportedOperationException())
  };
  return ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.ju_concurrent_ConcurrentHashMap$KeySetView__f_innerMap).putIfAbsent__O__O__O(e, this.ju_concurrent_ConcurrentHashMap$KeySetView__f_defaultValue) === null)
});
$c_ju_concurrent_ConcurrentHashMap$KeySetView.prototype.toString__T = (function() {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.ju_concurrent_ConcurrentHashMap$KeySetView__f_innerMap);
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_ju_HashMap$KeySet(this$1).toString__T()
});
var $d_ju_concurrent_ConcurrentHashMap$KeySetView = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  ju_concurrent_ConcurrentHashMap$KeySetView: 0
}, false, "java.util.concurrent.ConcurrentHashMap$KeySetView", {
  ju_concurrent_ConcurrentHashMap$KeySetView: 1,
  O: 1,
  ju_Set: 1,
  ju_Collection: 1,
  jl_Iterable: 1,
  Ljava_io_Serializable: 1
});
$c_ju_concurrent_ConcurrentHashMap$KeySetView.prototype.$classData = $d_ju_concurrent_ConcurrentHashMap$KeySetView;
/** @constructor */
function $c_Lmunit_MUnitRunner$$anon$1(notifier$11, description$5, outer) {
  this.Lmunit_MUnitRunner$$anon$1__f_notifier$1 = null;
  this.Lmunit_MUnitRunner$$anon$1__f_description$1 = null;
  this.Lmunit_MUnitRunner$$anon$1__f_$outer = null;
  this.Lmunit_MUnitRunner$$anon$1__f_notifier$1 = notifier$11;
  this.Lmunit_MUnitRunner$$anon$1__f_description$1 = description$5;
  if ((outer === null)) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_NullPointerException__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_NullPointerException())
  };
  this.Lmunit_MUnitRunner$$anon$1__f_$outer = outer
}
$c_Lmunit_MUnitRunner$$anon$1.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_sr_AbstractPartialFunction();
$c_Lmunit_MUnitRunner$$anon$1.prototype.constructor = $c_Lmunit_MUnitRunner$$anon$1;
/** @constructor */
function $h_Lmunit_MUnitRunner$$anon$1() {
  /*<skip>*/
}
$h_Lmunit_MUnitRunner$$anon$1.prototype = $c_Lmunit_MUnitRunner$$anon$1.prototype;
$c_Lmunit_MUnitRunner$$anon$1.prototype.isDefinedAt__jl_Throwable__Z = (function(x) {
  if (false) {
    $as_Lorg_junit_AssumptionViolatedException(x);
    return true
  };
  if ((x !== null)) {
    var x6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_util_control_NonFatal$().unapply__jl_Throwable__s_Option(x);
    if ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x6).isEmpty__Z())) {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Throwable($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x6).get__O());
      return true
    }
  };
  return false
});
$c_Lmunit_MUnitRunner$$anon$1.prototype.applyOrElse__jl_Throwable__F1__O = (function(x, default$1) {
  if (false) {
    var ex = $as_Lorg_junit_AssumptionViolatedException(x);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_MUnitRunner$$anon$1__f_$outer).munit$MUnitRunner$$trimStackTrace__jl_Throwable__V(ex);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_Future$().successful__O__s_concurrent_Future((void 0))
  };
  if ((x !== null)) {
    var x14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_util_control_NonFatal$().unapply__jl_Throwable__s_Option(x);
    if ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x14).isEmpty__Z())) {
      var x15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Throwable($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x14).get__O());
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_MUnitRunner$$anon$1__f_$outer).munit$MUnitRunner$$trimStackTrace__jl_Throwable__V(x15);
      var cause = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_MUnitRunner$$anon$1__f_$outer).munit$MUnitRunner$$rootCause__jl_Throwable__jl_Throwable(x15);
      var failure = new $c_Lorg_junit_runner_notification_Failure(this.Lmunit_MUnitRunner$$anon$1__f_description$1, cause);
      if (false) {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_MUnitRunner$$anon$1__f_notifier$1).fireTestAssumptionFailed__Lorg_junit_runner_notification_Failure__V(failure)
      } else if ((cause instanceof $c_Lmunit_FailSuiteException)) {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_MUnitRunner$$anon$1__f_$outer).Lmunit_MUnitRunner__f_munit$MUnitRunner$$suiteAborted = true;
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_MUnitRunner$$anon$1__f_notifier$1).fireTestFailure__Lorg_junit_runner_notification_Failure__V(failure)
      } else {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_MUnitRunner$$anon$1__f_notifier$1).fireTestFailure__Lorg_junit_runner_notification_Failure__V(failure)
      };
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_Future$().successful__O__s_concurrent_Future((void 0))
    }
  };
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(default$1).apply__O__O(x)
});
$c_Lmunit_MUnitRunner$$anon$1.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__jl_Throwable__Z($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Throwable(x))
});
$c_Lmunit_MUnitRunner$$anon$1.prototype.applyOrElse__O__F1__O = (function(x, default$1) {
  return this.applyOrElse__jl_Throwable__F1__O($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Throwable(x), default$1)
});
var $d_Lmunit_MUnitRunner$$anon$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lmunit_MUnitRunner$$anon$1: 0
}, false, "munit.MUnitRunner$$anon$1", {
  Lmunit_MUnitRunner$$anon$1: 1,
  sr_AbstractPartialFunction: 1,
  O: 1,
  F1: 1,
  s_PartialFunction: 1,
  Ljava_io_Serializable: 1
});
$c_Lmunit_MUnitRunner$$anon$1.prototype.$classData = $d_Lmunit_MUnitRunner$$anon$1;
class $c_Lorg_junit_TestCouldNotBeSkippedException extends $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_RuntimeException {
  constructor(cause) {
    super();
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, "Test could not be skipped due to other failures", cause, true, true)
  };
}
var $d_Lorg_junit_TestCouldNotBeSkippedException = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_junit_TestCouldNotBeSkippedException: 0
}, false, "org.junit.TestCouldNotBeSkippedException", {
  Lorg_junit_TestCouldNotBeSkippedException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Lorg_junit_TestCouldNotBeSkippedException.prototype.$classData = $d_Lorg_junit_TestCouldNotBeSkippedException;
/** @constructor */
function $c_Lorg_scalajs_junit_JUnitTask$$anonfun$$nestedInanonfun$executeTestMethod$6$1(outer) {
  /*<skip>*/
}
$c_Lorg_scalajs_junit_JUnitTask$$anonfun$$nestedInanonfun$executeTestMethod$6$1.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_sr_AbstractPartialFunction();
$c_Lorg_scalajs_junit_JUnitTask$$anonfun$$nestedInanonfun$executeTestMethod$6$1.prototype.constructor = $c_Lorg_scalajs_junit_JUnitTask$$anonfun$$nestedInanonfun$executeTestMethod$6$1;
/** @constructor */
function $h_Lorg_scalajs_junit_JUnitTask$$anonfun$$nestedInanonfun$executeTestMethod$6$1() {
  /*<skip>*/
}
$h_Lorg_scalajs_junit_JUnitTask$$anonfun$$nestedInanonfun$executeTestMethod$6$1.prototype = $c_Lorg_scalajs_junit_JUnitTask$$anonfun$$nestedInanonfun$executeTestMethod$6$1.prototype;
$c_Lorg_scalajs_junit_JUnitTask$$anonfun$$nestedInanonfun$executeTestMethod$6$1.prototype.applyOrElse__jl_Throwable__F1__O = (function(x1, default$1) {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure(x1)
});
$c_Lorg_scalajs_junit_JUnitTask$$anonfun$$nestedInanonfun$executeTestMethod$6$1.prototype.isDefinedAt__jl_Throwable__Z = (function(x1) {
  return true
});
$c_Lorg_scalajs_junit_JUnitTask$$anonfun$$nestedInanonfun$executeTestMethod$6$1.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__jl_Throwable__Z($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Throwable(x))
});
$c_Lorg_scalajs_junit_JUnitTask$$anonfun$$nestedInanonfun$executeTestMethod$6$1.prototype.applyOrElse__O__F1__O = (function(x, default$1) {
  return this.applyOrElse__jl_Throwable__F1__O($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Throwable(x), default$1)
});
var $d_Lorg_scalajs_junit_JUnitTask$$anonfun$$nestedInanonfun$executeTestMethod$6$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_junit_JUnitTask$$anonfun$$nestedInanonfun$executeTestMethod$6$1: 0
}, false, "org.scalajs.junit.JUnitTask$$anonfun$$nestedInanonfun$executeTestMethod$6$1", {
  Lorg_scalajs_junit_JUnitTask$$anonfun$$nestedInanonfun$executeTestMethod$6$1: 1,
  sr_AbstractPartialFunction: 1,
  O: 1,
  F1: 1,
  s_PartialFunction: 1,
  Ljava_io_Serializable: 1
});
$c_Lorg_scalajs_junit_JUnitTask$$anonfun$$nestedInanonfun$executeTestMethod$6$1.prototype.$classData = $d_Lorg_scalajs_junit_JUnitTask$$anonfun$$nestedInanonfun$executeTestMethod$6$1;
/** @constructor */
function $c_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoad$1$1() {
  /*<skip>*/
}
$c_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoad$1$1.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_sr_AbstractPartialFunction();
$c_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoad$1$1.prototype.constructor = $c_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoad$1$1;
/** @constructor */
function $h_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoad$1$1() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoad$1$1.prototype = $c_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoad$1$1.prototype;
$c_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoad$1$1.prototype.applyOrElse__sjs_reflect_InstantiatableClass__F1__O = (function(x1, default$1) {
  return ($d_Lsbt_testing_Framework.getClassOf().isAssignableFrom__jl_Class__Z($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x1).sjs_reflect_InstantiatableClass__f_runtimeClass) ? $as_Lsbt_testing_Framework($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x1).newInstance__O()) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(default$1).apply__O__O(x1))
});
$c_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoad$1$1.prototype.isDefinedAt__sjs_reflect_InstantiatableClass__Z = (function(x1) {
  return $d_Lsbt_testing_Framework.getClassOf().isAssignableFrom__jl_Class__Z($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x1).sjs_reflect_InstantiatableClass__f_runtimeClass)
});
$c_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoad$1$1.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__sjs_reflect_InstantiatableClass__Z($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sjs_reflect_InstantiatableClass(x))
});
$c_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoad$1$1.prototype.applyOrElse__O__F1__O = (function(x, default$1) {
  return this.applyOrElse__sjs_reflect_InstantiatableClass__F1__O($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sjs_reflect_InstantiatableClass(x), default$1)
});
var $d_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoad$1$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoad$1$1: 0
}, false, "org.scalajs.testing.bridge.FrameworkLoader$$anonfun$tryLoad$1$1", {
  Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoad$1$1: 1,
  sr_AbstractPartialFunction: 1,
  O: 1,
  F1: 1,
  s_PartialFunction: 1,
  Ljava_io_Serializable: 1
});
$c_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoad$1$1.prototype.$classData = $d_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoad$1$1;
/** @constructor */
function $c_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoadFramework$2() {
  /*<skip>*/
}
$c_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoadFramework$2.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_sr_AbstractPartialFunction();
$c_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoadFramework$2.prototype.constructor = $c_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoadFramework$2;
/** @constructor */
function $h_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoadFramework$2() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoadFramework$2.prototype = $c_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoadFramework$2.prototype;
$c_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoadFramework$2.prototype.applyOrElse__s_Option__F1__O = (function(x1, default$1) {
  if ((x1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
    var x2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Some(x1);
    var framework = $as_Lsbt_testing_Framework($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).s_Some__f_value);
    return framework
  } else {
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(default$1).apply__O__O(x1)
  }
});
$c_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoadFramework$2.prototype.isDefinedAt__s_Option__Z = (function(x1) {
  return (x1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)
});
$c_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoadFramework$2.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__s_Option__Z($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Option(x))
});
$c_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoadFramework$2.prototype.applyOrElse__O__F1__O = (function(x, default$1) {
  return this.applyOrElse__s_Option__F1__O($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Option(x), default$1)
});
var $d_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoadFramework$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoadFramework$2: 0
}, false, "org.scalajs.testing.bridge.FrameworkLoader$$anonfun$tryLoadFramework$2", {
  Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoadFramework$2: 1,
  sr_AbstractPartialFunction: 1,
  O: 1,
  F1: 1,
  s_PartialFunction: 1,
  Ljava_io_Serializable: 1
});
$c_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoadFramework$2.prototype.$classData = $d_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoadFramework$2;
/** @constructor */
function $c_Lorg_scalajs_testing_bridge_HTMLRunner$$anonfun$scheduleTask$7() {
  /*<skip>*/
}
$c_Lorg_scalajs_testing_bridge_HTMLRunner$$anonfun$scheduleTask$7.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_sr_AbstractPartialFunction();
$c_Lorg_scalajs_testing_bridge_HTMLRunner$$anonfun$scheduleTask$7.prototype.constructor = $c_Lorg_scalajs_testing_bridge_HTMLRunner$$anonfun$scheduleTask$7;
/** @constructor */
function $h_Lorg_scalajs_testing_bridge_HTMLRunner$$anonfun$scheduleTask$7() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_bridge_HTMLRunner$$anonfun$scheduleTask$7.prototype = $c_Lorg_scalajs_testing_bridge_HTMLRunner$$anonfun$scheduleTask$7.prototype;
$c_Lorg_scalajs_testing_bridge_HTMLRunner$$anonfun$scheduleTask$7.prototype.applyOrElse__jl_Throwable__F1__O = (function(x1, default$1) {
  var xs = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
  var len = xs.length__I();
  var array = new ($d_Lsbt_testing_Task.getArrayOf().constr)(len);
  var iterator = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty;
  var i = 0;
  while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(iterator).hasNext__Z()) {
    array.set(i, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(iterator).next__O());
    i = ((1 + i) | 0)
  };
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(false, array)
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$$anonfun$scheduleTask$7.prototype.isDefinedAt__jl_Throwable__Z = (function(x1) {
  return true
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$$anonfun$scheduleTask$7.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__jl_Throwable__Z($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Throwable(x))
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$$anonfun$scheduleTask$7.prototype.applyOrElse__O__F1__O = (function(x, default$1) {
  return this.applyOrElse__jl_Throwable__F1__O($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Throwable(x), default$1)
});
var $d_Lorg_scalajs_testing_bridge_HTMLRunner$$anonfun$scheduleTask$7 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_bridge_HTMLRunner$$anonfun$scheduleTask$7: 0
}, false, "org.scalajs.testing.bridge.HTMLRunner$$anonfun$scheduleTask$7", {
  Lorg_scalajs_testing_bridge_HTMLRunner$$anonfun$scheduleTask$7: 1,
  sr_AbstractPartialFunction: 1,
  O: 1,
  F1: 1,
  s_PartialFunction: 1,
  Ljava_io_Serializable: 1
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$$anonfun$scheduleTask$7.prototype.$classData = $d_Lorg_scalajs_testing_bridge_HTMLRunner$$anonfun$scheduleTask$7;
/** @constructor */
function $c_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$() {
  /*<skip>*/
}
$c_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$.prototype = new $h_Lorg_scalajs_testing_common_TestBridgeMode();
$c_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$.prototype.constructor = $c_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$.prototype = $c_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$.prototype;
$c_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$.prototype.productElementName__I__T = (function(n) {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_s_Product__productElementName__I__T(this, n)
});
$c_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$.prototype.productPrefix__T = (function() {
  return "FullBridge"
});
$c_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$.prototype.productArity__I = (function() {
  return 0
});
$c_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$.prototype.productElement__I__O = (function(x$1) {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().ioobe__I__O(x$1)
});
$c_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_ScalaRunTime$$anon$1(this)
});
$c_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$.prototype.hashCode__I = (function() {
  return 714286872
});
$c_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$.prototype.toString__T = (function() {
  return "FullBridge"
});
var $d_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$: 0
}, false, "org.scalajs.testing.common.TestBridgeMode$FullBridge$", {
  Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$: 1,
  Lorg_scalajs_testing_common_TestBridgeMode: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$.prototype.$classData = $d_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$;
var $n_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$;
function $m_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$() {
  if ((!$n_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$)) {
    $n_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$ = new $c_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$()
  };
  return $n_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner(tests) {
  this.Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner__f_tests = null;
  this.Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner__f_tests = tests
}
$c_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner.prototype = new $h_Lorg_scalajs_testing_common_TestBridgeMode();
$c_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner.prototype.constructor = $c_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner;
/** @constructor */
function $h_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner() {
  /*<skip>*/
}
$h_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner.prototype = $c_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner.prototype;
$c_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner.prototype.productPrefix__T = (function() {
  return "HTMLRunner"
});
$c_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner.prototype.productArity__I = (function() {
  return 1
});
$c_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner.prototype.productElement__I__O = (function(x$1) {
  return ((x$1 === 0) ? this.Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner__f_tests : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().ioobe__I__O(x$1))
});
$c_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_ScalaRunTime$$anon$1(this)
});
$c_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner.prototype.productElementName__I__T = (function(x$1) {
  return ((x$1 === 0) ? "tests" : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().ioobe__I__O(x$1)))
});
$c_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner.prototype.hashCode__I = (function() {
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner.prototype.toString__T = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner)) {
    var HTMLRunner$1 = $as_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner(x$1);
    var x = this.Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner__f_tests;
    var x$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(HTMLRunner$1).Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner__f_tests;
    if ((x === null)) {
      return (x$2 === null)
    } else {
      var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x);
      return (this$1 === x$2)
    }
  } else {
    return false
  }
});
function $as_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner(obj) {
  return (((obj instanceof $c_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "org.scalajs.testing.common.TestBridgeMode$HTMLRunner"))
}
function $isArrayOf_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner)))
}
function $asArrayOf_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner(obj, depth) {
  return (($isArrayOf_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lorg.scalajs.testing.common.TestBridgeMode$HTMLRunner;", depth))
}
var $d_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner: 0
}, false, "org.scalajs.testing.common.TestBridgeMode$HTMLRunner", {
  Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner: 1,
  Lorg_scalajs_testing_common_TestBridgeMode: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner.prototype.$classData = $d_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner;
/** @constructor */
function $c_scm_HashSet$$anon$4(initialCapacity$1, loadFactor$1) {
  this.scm_GrowableBuilder__f_elems = null;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_scm_GrowableBuilder__scm_Growable__(this, $ct_scm_HashSet__I__D__(new $c_scm_HashSet(), initialCapacity$1, loadFactor$1))
}
$c_scm_HashSet$$anon$4.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_scm_GrowableBuilder();
$c_scm_HashSet$$anon$4.prototype.constructor = $c_scm_HashSet$$anon$4;
/** @constructor */
function $h_scm_HashSet$$anon$4() {
  /*<skip>*/
}
$h_scm_HashSet$$anon$4.prototype = $c_scm_HashSet$$anon$4.prototype;
$c_scm_HashSet$$anon$4.prototype.sizeHint__I__V = (function(size) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($as_scm_HashSet(this.scm_GrowableBuilder__f_elems)).sizeHint__I__V(size)
});
var $d_scm_HashSet$$anon$4 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  scm_HashSet$$anon$4: 0
}, false, "scala.collection.mutable.HashSet$$anon$4", {
  scm_HashSet$$anon$4: 1,
  scm_GrowableBuilder: 1,
  O: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_scm_HashSet$$anon$4.prototype.$classData = $d_scm_HashSet$$anon$4;
function $ct_scm_HashSet$HashSetIterator__scm_HashSet__($thiz, outer) {
  if ((outer === null)) {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(null)
  } else {
    $thiz.scm_HashSet$HashSetIterator__f_$outer = outer
  };
  $thiz.scm_HashSet$HashSetIterator__f_i = 0;
  $thiz.scm_HashSet$HashSetIterator__f_node = null;
  $thiz.scm_HashSet$HashSetIterator__f_len = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(outer).scm_HashSet__f_scala$collection$mutable$HashSet$$table).u.length;
  return $thiz
}
/** @constructor */
function $c_scm_HashSet$HashSetIterator() {
  this.scm_HashSet$HashSetIterator__f_i = 0;
  this.scm_HashSet$HashSetIterator__f_node = null;
  this.scm_HashSet$HashSetIterator__f_len = 0;
  this.scm_HashSet$HashSetIterator__f_$outer = null
}
$c_scm_HashSet$HashSetIterator.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_sc_AbstractIterator();
$c_scm_HashSet$HashSetIterator.prototype.constructor = $c_scm_HashSet$HashSetIterator;
/** @constructor */
function $h_scm_HashSet$HashSetIterator() {
  /*<skip>*/
}
$h_scm_HashSet$HashSetIterator.prototype = $c_scm_HashSet$HashSetIterator.prototype;
$c_scm_HashSet$HashSetIterator.prototype.hasNext__Z = (function() {
  if ((this.scm_HashSet$HashSetIterator__f_node !== null)) {
    return true
  } else {
    while ((this.scm_HashSet$HashSetIterator__f_i < this.scm_HashSet$HashSetIterator__f_len)) {
      var n = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.scm_HashSet$HashSetIterator__f_$outer).scm_HashSet__f_scala$collection$mutable$HashSet$$table).get(this.scm_HashSet$HashSetIterator__f_i);
      this.scm_HashSet$HashSetIterator__f_i = ((1 + this.scm_HashSet$HashSetIterator__f_i) | 0);
      if ((n !== null)) {
        this.scm_HashSet$HashSetIterator__f_node = n;
        return true
      }
    };
    return false
  }
});
$c_scm_HashSet$HashSetIterator.prototype.next__O = (function() {
  if ((!this.hasNext__Z())) {
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O()
  } else {
    var r = this.extract__scm_HashSet$Node__O(this.scm_HashSet$HashSetIterator__f_node);
    this.scm_HashSet$HashSetIterator__f_node = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.scm_HashSet$HashSetIterator__f_node).scm_HashSet$Node__f__next;
    return r
  }
});
function $p_Ljava_io_DataInputStream__eof__E($thiz) {
  throw new $c_Ljava_io_EOFException()
}
/** @constructor */
function $c_Ljava_io_DataInputStream(in$1) {
  this.Ljava_io_FilterInputStream__f_in = null;
  this.Ljava_io_DataInputStream__f_pushedBack = 0;
  $ct_Ljava_io_FilterInputStream__Ljava_io_InputStream__(this, in$1);
  this.Ljava_io_DataInputStream__f_pushedBack = (-1)
}
$c_Ljava_io_DataInputStream.prototype = new $h_Ljava_io_FilterInputStream();
$c_Ljava_io_DataInputStream.prototype.constructor = $c_Ljava_io_DataInputStream;
/** @constructor */
function $h_Ljava_io_DataInputStream() {
  /*<skip>*/
}
$h_Ljava_io_DataInputStream.prototype = $c_Ljava_io_DataInputStream.prototype;
$c_Ljava_io_DataInputStream.prototype.readBoolean__Z = (function() {
  return (this.readByte__B() !== 0)
});
$c_Ljava_io_DataInputStream.prototype.readByte__B = (function() {
  var res = this.read__I();
  if ((res === (-1))) {
    $p_Ljava_io_DataInputStream__eof__E(this)
  };
  return ((res << 24) >> 24)
});
$c_Ljava_io_DataInputStream.prototype.readInt__I = (function() {
  return ((((this.readUnsignedByte__I() << 24) | (this.readUnsignedByte__I() << 16)) | (this.readUnsignedByte__I() << 8)) | this.readUnsignedByte__I())
});
$c_Ljava_io_DataInputStream.prototype.readLong__J = (function() {
  var value = this.readInt__I();
  var value$1 = this.readInt__I();
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(value$1, value)
});
$c_Ljava_io_DataInputStream.prototype.readUnsignedByte__I = (function() {
  var res = this.read__I();
  if ((res === (-1))) {
    $p_Ljava_io_DataInputStream__eof__E(this)
  };
  return res
});
$c_Ljava_io_DataInputStream.prototype.read__I = (function() {
  var res = ((this.Ljava_io_DataInputStream__f_pushedBack !== (-1)) ? this.Ljava_io_DataInputStream__f_pushedBack : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Ljava_io_FilterInputStream__f_in).read__I());
  this.Ljava_io_DataInputStream__f_pushedBack = (-1);
  return res
});
var $d_Ljava_io_DataInputStream = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Ljava_io_DataInputStream: 0
}, false, "java.io.DataInputStream", {
  Ljava_io_DataInputStream: 1,
  Ljava_io_FilterInputStream: 1,
  Ljava_io_InputStream: 1,
  O: 1,
  Ljava_io_Closeable: 1,
  jl_AutoCloseable: 1,
  Ljava_io_DataInput: 1
});
$c_Ljava_io_DataInputStream.prototype.$classData = $d_Ljava_io_DataInputStream;
class $c_jl_InstantiationError extends $c_jl_IncompatibleClassChangeError {
  constructor(s) {
    super();
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_InstantiationError = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  jl_InstantiationError: 0
}, false, "java.lang.InstantiationError", {
  jl_InstantiationError: 1,
  jl_IncompatibleClassChangeError: 1,
  jl_LinkageError: 1,
  jl_Error: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_InstantiationError.prototype.$classData = $d_jl_InstantiationError;
/** @constructor */
function $c_ju_NullRejectingHashMap() {
  this.ju_HashMap__f_java$util$HashMap$$loadFactor = 0.0;
  this.ju_HashMap__f_java$util$HashMap$$table = null;
  this.ju_HashMap__f_threshold = 0;
  this.ju_HashMap__f_contentSize = 0
}
$c_ju_NullRejectingHashMap.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_ju_HashMap();
$c_ju_NullRejectingHashMap.prototype.constructor = $c_ju_NullRejectingHashMap;
/** @constructor */
function $h_ju_NullRejectingHashMap() {
  /*<skip>*/
}
$h_ju_NullRejectingHashMap.prototype = $c_ju_NullRejectingHashMap.prototype;
$c_ju_NullRejectingHashMap.prototype.newNode__O__I__O__ju_HashMap$Node__ju_HashMap$Node__ju_HashMap$Node = (function(key, hash, value, previous, next) {
  return new $c_ju_NullRejectingHashMap$Node(key, hash, value, previous, next)
});
$c_ju_NullRejectingHashMap.prototype.get__O__O = (function(key) {
  if ((key === null)) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_NullPointerException__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_NullPointerException())
  };
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$p_ju_HashMap__getOrDefaultImpl__O__O__O(this, key, null)
});
$c_ju_NullRejectingHashMap.prototype.containsKey__O__Z = (function(key) {
  if ((key === null)) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_NullPointerException__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_NullPointerException())
  };
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_ju_HashMap.prototype.containsKey__O__Z.call(this, key)
});
$c_ju_NullRejectingHashMap.prototype.put__O__O__O = (function(key, value) {
  if (((key === null) || (value === null))) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_NullPointerException__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_NullPointerException())
  };
  if ((key === null)) {
    var $$x1 = 0
  } else {
    var originalHash = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$dp_hashCode__I($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(key));
    var $$x1 = (originalHash ^ ((originalHash >>> 16) | 0))
  };
  return this.java$util$HashMap$$put0__O__O__I__Z__O(key, value, $$x1, false)
});
$c_ju_NullRejectingHashMap.prototype.putIfAbsent__O__O__O = (function(key, value) {
  if ((value === null)) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_NullPointerException__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_NullPointerException())
  };
  var old = this.get__O__O(key);
  if ((old === null)) {
    if ((key === null)) {
      var $$x1 = 0
    } else {
      var originalHash = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$dp_hashCode__I($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(key));
      var $$x1 = (originalHash ^ ((originalHash >>> 16) | 0))
    };
    this.java$util$HashMap$$put0__O__O__I__Z__O(key, value, $$x1, false)
  };
  return old
});
$c_ju_NullRejectingHashMap.prototype.remove__O__O = (function(key) {
  if ((key === null)) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_NullPointerException__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_NullPointerException())
  };
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_ju_HashMap.prototype.remove__O__O.call(this, key)
});
function $as_Lorg_junit_internal_AssumptionViolatedException(obj) {
  return ((false || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "org.junit.internal.AssumptionViolatedException"))
}
function $isArrayOf_Lorg_junit_internal_AssumptionViolatedException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_junit_internal_AssumptionViolatedException)))
}
function $asArrayOf_Lorg_junit_internal_AssumptionViolatedException(obj, depth) {
  return (($isArrayOf_Lorg_junit_internal_AssumptionViolatedException(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lorg.junit.internal.AssumptionViolatedException;", depth))
}
class $c_Lorg_scalajs_testing_common_RPCCore$RPCException extends $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Exception {
  constructor(c) {
    super();
    this.Lorg_scalajs_testing_common_RPCCore$RPCException__f_c = null;
    this.Lorg_scalajs_testing_common_RPCCore$RPCException__f_c = c;
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_Exception__jl_Throwable__(this, c)
  };
  productPrefix__T() {
    return "RPCException"
  };
  productArity__I() {
    return 1
  };
  productElement__I__O(x$1) {
    return ((x$1 === 0) ? this.Lorg_scalajs_testing_common_RPCCore$RPCException__f_c : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().ioobe__I__O(x$1))
  };
  productIterator__sc_Iterator() {
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_ScalaRunTime$$anon$1(this)
  };
  productElementName__I__T(x$1) {
    return ((x$1 === 0) ? "c" : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().ioobe__I__O(x$1)))
  };
  hashCode__I() {
    var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_Lorg_scalajs_testing_common_RPCCore$RPCException)) {
      var RPCException$1 = $as_Lorg_scalajs_testing_common_RPCCore$RPCException(x$1);
      var x = this.Lorg_scalajs_testing_common_RPCCore$RPCException__f_c;
      var x$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(RPCException$1).Lorg_scalajs_testing_common_RPCCore$RPCException__f_c;
      return ((x === null) ? (x$2 === null) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).equals__O__Z(x$2))
    } else {
      return false
    }
  };
}
function $as_Lorg_scalajs_testing_common_RPCCore$RPCException(obj) {
  return (((obj instanceof $c_Lorg_scalajs_testing_common_RPCCore$RPCException) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "org.scalajs.testing.common.RPCCore$RPCException"))
}
function $isArrayOf_Lorg_scalajs_testing_common_RPCCore$RPCException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_scalajs_testing_common_RPCCore$RPCException)))
}
function $asArrayOf_Lorg_scalajs_testing_common_RPCCore$RPCException(obj, depth) {
  return (($isArrayOf_Lorg_scalajs_testing_common_RPCCore$RPCException(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lorg.scalajs.testing.common.RPCCore$RPCException;", depth))
}
var $d_Lorg_scalajs_testing_common_RPCCore$RPCException = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lorg_scalajs_testing_common_RPCCore$RPCException: 0
}, false, "org.scalajs.testing.common.RPCCore$RPCException", {
  Lorg_scalajs_testing_common_RPCCore$RPCException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1,
  s_Equals: 1
});
$c_Lorg_scalajs_testing_common_RPCCore$RPCException.prototype.$classData = $d_Lorg_scalajs_testing_common_RPCCore$RPCException;
/** @constructor */
function $c_scm_HashSet$$anon$1(outer) {
  this.scm_HashSet$HashSetIterator__f_i = 0;
  this.scm_HashSet$HashSetIterator__f_node = null;
  this.scm_HashSet$HashSetIterator__f_len = 0;
  this.scm_HashSet$HashSetIterator__f_$outer = null;
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer)
}
$c_scm_HashSet$$anon$1.prototype = new $h_scm_HashSet$HashSetIterator();
$c_scm_HashSet$$anon$1.prototype.constructor = $c_scm_HashSet$$anon$1;
/** @constructor */
function $h_scm_HashSet$$anon$1() {
  /*<skip>*/
}
$h_scm_HashSet$$anon$1.prototype = $c_scm_HashSet$$anon$1.prototype;
$c_scm_HashSet$$anon$1.prototype.extract__scm_HashSet$Node__O = (function(nd) {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(nd).scm_HashSet$Node__f__key
});
var $d_scm_HashSet$$anon$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  scm_HashSet$$anon$1: 0
}, false, "scala.collection.mutable.HashSet$$anon$1", {
  scm_HashSet$$anon$1: 1,
  scm_HashSet$HashSetIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_scm_HashSet$$anon$1.prototype.$classData = $d_scm_HashSet$$anon$1;
/** @constructor */
function $c_scm_HashSet$$anon$2(outer) {
  this.scm_HashSet$HashSetIterator__f_i = 0;
  this.scm_HashSet$HashSetIterator__f_node = null;
  this.scm_HashSet$HashSetIterator__f_len = 0;
  this.scm_HashSet$HashSetIterator__f_$outer = null;
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer)
}
$c_scm_HashSet$$anon$2.prototype = new $h_scm_HashSet$HashSetIterator();
$c_scm_HashSet$$anon$2.prototype.constructor = $c_scm_HashSet$$anon$2;
/** @constructor */
function $h_scm_HashSet$$anon$2() {
  /*<skip>*/
}
$h_scm_HashSet$$anon$2.prototype = $c_scm_HashSet$$anon$2.prototype;
$c_scm_HashSet$$anon$2.prototype.extract__scm_HashSet$Node__O = (function(nd) {
  return nd
});
var $d_scm_HashSet$$anon$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  scm_HashSet$$anon$2: 0
}, false, "scala.collection.mutable.HashSet$$anon$2", {
  scm_HashSet$$anon$2: 1,
  scm_HashSet$HashSetIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_scm_HashSet$$anon$2.prototype.$classData = $d_scm_HashSet$$anon$2;
/** @constructor */
function $c_scm_HashSet$$anon$3(outer) {
  this.scm_HashSet$HashSetIterator__f_i = 0;
  this.scm_HashSet$HashSetIterator__f_node = null;
  this.scm_HashSet$HashSetIterator__f_len = 0;
  this.scm_HashSet$HashSetIterator__f_$outer = null;
  this.scm_HashSet$$anon$3__f_hash = 0;
  this.scm_HashSet$$anon$3__f_$outer = null;
  if ((outer === null)) {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(null)
  } else {
    this.scm_HashSet$$anon$3__f_$outer = outer
  };
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
  this.scm_HashSet$$anon$3__f_hash = 0
}
$c_scm_HashSet$$anon$3.prototype = new $h_scm_HashSet$HashSetIterator();
$c_scm_HashSet$$anon$3.prototype.constructor = $c_scm_HashSet$$anon$3;
/** @constructor */
function $h_scm_HashSet$$anon$3() {
  /*<skip>*/
}
$h_scm_HashSet$$anon$3.prototype = $c_scm_HashSet$$anon$3.prototype;
$c_scm_HashSet$$anon$3.prototype.hashCode__I = (function() {
  return this.scm_HashSet$$anon$3__f_hash
});
$c_scm_HashSet$$anon$3.prototype.extract__scm_HashSet$Node__O = (function(nd) {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.scm_HashSet$$anon$3__f_$outer);
  var improvedHash = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(nd).scm_HashSet$Node__f__hash;
  this.scm_HashSet$$anon$3__f_hash = this$1.scala$collection$mutable$HashSet$$improveHash__I__I(improvedHash);
  return this
});
var $d_scm_HashSet$$anon$3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  scm_HashSet$$anon$3: 0
}, false, "scala.collection.mutable.HashSet$$anon$3", {
  scm_HashSet$$anon$3: 1,
  scm_HashSet$HashSetIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_scm_HashSet$$anon$3.prototype.$classData = $d_scm_HashSet$$anon$3;
/** @constructor */
function $c_Ljava_io_DataOutputStream(out) {
  this.Ljava_io_FilterOutputStream__f_out = null;
  this.Ljava_io_DataOutputStream__f_written = 0;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__(this, out);
  this.Ljava_io_DataOutputStream__f_written = 0
}
$c_Ljava_io_DataOutputStream.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_Ljava_io_FilterOutputStream();
$c_Ljava_io_DataOutputStream.prototype.constructor = $c_Ljava_io_DataOutputStream;
/** @constructor */
function $h_Ljava_io_DataOutputStream() {
  /*<skip>*/
}
$h_Ljava_io_DataOutputStream.prototype = $c_Ljava_io_DataOutputStream.prototype;
$c_Ljava_io_DataOutputStream.prototype.write__I__V = (function(b) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Ljava_io_FilterOutputStream__f_out).write__I__V(b);
  this.Ljava_io_DataOutputStream__f_written = ((1 + this.Ljava_io_DataOutputStream__f_written) | 0)
});
$c_Ljava_io_DataOutputStream.prototype.writeBoolean__Z__V = (function(v) {
  this.write__I__V((v ? 1 : 0))
});
$c_Ljava_io_DataOutputStream.prototype.writeInt__I__V = (function(v) {
  this.write__I__V((v >> 24));
  this.write__I__V((v >> 16));
  this.write__I__V((v >> 8));
  this.write__I__V(v)
});
var $d_Ljava_io_DataOutputStream = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Ljava_io_DataOutputStream: 0
}, false, "java.io.DataOutputStream", {
  Ljava_io_DataOutputStream: 1,
  Ljava_io_FilterOutputStream: 1,
  Ljava_io_OutputStream: 1,
  O: 1,
  Ljava_io_Closeable: 1,
  jl_AutoCloseable: 1,
  Ljava_io_Flushable: 1,
  Ljava_io_DataOutput: 1
});
$c_Ljava_io_DataOutputStream.prototype.$classData = $d_Ljava_io_DataOutputStream;
/** @constructor */
function $c_ju_concurrent_ConcurrentHashMap$InnerHashMap(initialCapacity, loadFactor) {
  this.ju_HashMap__f_java$util$HashMap$$loadFactor = 0.0;
  this.ju_HashMap__f_java$util$HashMap$$table = null;
  this.ju_HashMap__f_threshold = 0;
  this.ju_HashMap__f_contentSize = 0;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_ju_HashMap__I__F__(this, initialCapacity, loadFactor)
}
$c_ju_concurrent_ConcurrentHashMap$InnerHashMap.prototype = new $h_ju_NullRejectingHashMap();
$c_ju_concurrent_ConcurrentHashMap$InnerHashMap.prototype.constructor = $c_ju_concurrent_ConcurrentHashMap$InnerHashMap;
/** @constructor */
function $h_ju_concurrent_ConcurrentHashMap$InnerHashMap() {
  /*<skip>*/
}
$h_ju_concurrent_ConcurrentHashMap$InnerHashMap.prototype = $c_ju_concurrent_ConcurrentHashMap$InnerHashMap.prototype;
$c_ju_concurrent_ConcurrentHashMap$InnerHashMap.prototype.nodeIterator__ju_Iterator = (function() {
  return new $c_ju_concurrent_ConcurrentHashMap$InnerHashMap$NodeIterator(this)
});
$c_ju_concurrent_ConcurrentHashMap$InnerHashMap.prototype.keyIterator__ju_Iterator = (function() {
  return new $c_ju_concurrent_ConcurrentHashMap$InnerHashMap$KeyIterator(this)
});
$c_ju_concurrent_ConcurrentHashMap$InnerHashMap.prototype.java$util$concurrent$ConcurrentHashMap$InnerHashMap$$makeSnapshot__ju_ArrayList = (function() {
  var snapshot = $ct_ju_ArrayList__I__(new $c_ju_ArrayList(), this.ju_HashMap__f_contentSize);
  var iter = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_ju_HashMap$NodeIterator(this);
  while (iter.hasNext__Z()) {
    snapshot.add__O__Z(iter.next__O())
  };
  return snapshot
});
var $d_ju_concurrent_ConcurrentHashMap$InnerHashMap = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  ju_concurrent_ConcurrentHashMap$InnerHashMap: 0
}, false, "java.util.concurrent.ConcurrentHashMap$InnerHashMap", {
  ju_concurrent_ConcurrentHashMap$InnerHashMap: 1,
  ju_NullRejectingHashMap: 1,
  ju_HashMap: 1,
  ju_AbstractMap: 1,
  O: 1,
  ju_Map: 1,
  Ljava_io_Serializable: 1,
  jl_Cloneable: 1
});
$c_ju_concurrent_ConcurrentHashMap$InnerHashMap.prototype.$classData = $d_ju_concurrent_ConcurrentHashMap$InnerHashMap;
class $c_Lmunit_FailSuiteException extends $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lmunit_FailException {
  constructor(message, location) {
    super();
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_Lmunit_FailException__T__jl_Throwable__Z__Lmunit_Location__(this, message, null, true, location)
  };
}
function $as_Lmunit_FailSuiteException(obj) {
  return (((obj instanceof $c_Lmunit_FailSuiteException) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "munit.FailSuiteException"))
}
function $isArrayOf_Lmunit_FailSuiteException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lmunit_FailSuiteException)))
}
function $asArrayOf_Lmunit_FailSuiteException(obj, depth) {
  return (($isArrayOf_Lmunit_FailSuiteException(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lmunit.FailSuiteException;", depth))
}
var $d_Lmunit_FailSuiteException = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lmunit_FailSuiteException: 0
}, false, "munit.FailSuiteException", {
  Lmunit_FailSuiteException: 1,
  Lmunit_FailException: 1,
  jl_AssertionError: 1,
  jl_Error: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  Lmunit_FailExceptionLike: 1
});
$c_Lmunit_FailSuiteException.prototype.$classData = $d_Lmunit_FailSuiteException;
function $as_Lorg_junit_AssumptionViolatedException(obj) {
  return ((false || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "org.junit.AssumptionViolatedException"))
}
function $isArrayOf_Lorg_junit_AssumptionViolatedException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_junit_AssumptionViolatedException)))
}
function $asArrayOf_Lorg_junit_AssumptionViolatedException(obj, depth) {
  return (($isArrayOf_Lorg_junit_AssumptionViolatedException(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lorg.junit.AssumptionViolatedException;", depth))
}
function $ct_ju_ArrayList__O__($thiz, inner) {
  $thiz.ju_ArrayList__f_java$util$ArrayList$$inner = inner;
  return $thiz
}
function $ct_ju_ArrayList__I__($thiz, initialCapacity) {
  $ct_ju_ArrayList__O__($thiz, []);
  if ((initialCapacity < 0)) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IllegalArgumentException__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IllegalArgumentException())
  };
  return $thiz
}
/** @constructor */
function $c_ju_ArrayList() {
  this.ju_ArrayList__f_java$util$ArrayList$$inner = null
}
$c_ju_ArrayList.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_ju_AbstractList();
$c_ju_ArrayList.prototype.constructor = $c_ju_ArrayList;
/** @constructor */
function $h_ju_ArrayList() {
  /*<skip>*/
}
$h_ju_ArrayList.prototype = $c_ju_ArrayList.prototype;
$c_ju_ArrayList.prototype.size__I = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this.ju_ArrayList__f_java$util$ArrayList$$inner.length)
});
$c_ju_ArrayList.prototype.get__I__O = (function(index) {
  this.checkIndexInBounds__I__V(index);
  return this.ju_ArrayList__f_java$util$ArrayList$$inner[index]
});
$c_ju_ArrayList.prototype.add__O__Z = (function(e) {
  this.ju_ArrayList__f_java$util$ArrayList$$inner.push(e);
  return true
});
$c_ju_ArrayList.prototype.add__I__O__V = (function(index, element) {
  this.checkIndexOnBounds__I__V(index);
  this.ju_ArrayList__f_java$util$ArrayList$$inner.splice(index, 0, element)
});
var $d_ju_ArrayList = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  ju_ArrayList: 0
}, false, "java.util.ArrayList", {
  ju_ArrayList: 1,
  ju_AbstractList: 1,
  ju_AbstractCollection: 1,
  O: 1,
  ju_Collection: 1,
  jl_Iterable: 1,
  ju_List: 1,
  ju_RandomAccess: 1,
  jl_Cloneable: 1,
  Ljava_io_Serializable: 1
});
$c_ju_ArrayList.prototype.$classData = $d_ju_ArrayList;
/** @constructor */
function $c_sc_MapOps$$anon$1(outer) {
  this.sc_MapOps$$anon$1__f_$outer = null;
  if ((outer === null)) {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(null)
  } else {
    this.sc_MapOps$$anon$1__f_$outer = outer
  }
}
$c_sc_MapOps$$anon$1.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_sc_AbstractIterable();
$c_sc_MapOps$$anon$1.prototype.constructor = $c_sc_MapOps$$anon$1;
/** @constructor */
function $h_sc_MapOps$$anon$1() {
  /*<skip>*/
}
$h_sc_MapOps$$anon$1.prototype = $c_sc_MapOps$$anon$1.prototype;
$c_sc_MapOps$$anon$1.prototype.knownSize__I = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.sc_MapOps$$anon$1__f_$outer).knownSize__I()
});
$c_sc_MapOps$$anon$1.prototype.iterator__sc_Iterator = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.sc_MapOps$$anon$1__f_$outer).valuesIterator__sc_Iterator()
});
$c_sc_MapOps$$anon$1.prototype.collectionClassName__ = (function() {
  return "Iterable"
});
var $d_sc_MapOps$$anon$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  sc_MapOps$$anon$1: 0
}, false, "scala.collection.MapOps$$anon$1", {
  sc_MapOps$$anon$1: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sc_MapOps$$anon$1.prototype.$classData = $d_sc_MapOps$$anon$1;
/** @constructor */
function $c_s_math_Numeric$IntIsIntegral$() {
  /*<skip>*/
}
$c_s_math_Numeric$IntIsIntegral$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_s_math_Numeric$IntIsIntegral$.prototype.constructor = $c_s_math_Numeric$IntIsIntegral$;
/** @constructor */
function $h_s_math_Numeric$IntIsIntegral$() {
  /*<skip>*/
}
$h_s_math_Numeric$IntIsIntegral$.prototype = $c_s_math_Numeric$IntIsIntegral$.prototype;
var $d_s_math_Numeric$IntIsIntegral$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  s_math_Numeric$IntIsIntegral$: 0
}, false, "scala.math.Numeric$IntIsIntegral$", {
  s_math_Numeric$IntIsIntegral$: 1,
  O: 1,
  s_math_Numeric$IntIsIntegral: 1,
  s_math_Integral: 1,
  s_math_Numeric: 1,
  s_math_Ordering: 1,
  ju_Comparator: 1,
  s_math_PartialOrdering: 1,
  s_math_Equiv: 1,
  Ljava_io_Serializable: 1,
  s_math_Ordering$IntOrdering: 1
});
$c_s_math_Numeric$IntIsIntegral$.prototype.$classData = $d_s_math_Numeric$IntIsIntegral$;
var $n_s_math_Numeric$IntIsIntegral$;
function $m_s_math_Numeric$IntIsIntegral$() {
  if ((!$n_s_math_Numeric$IntIsIntegral$)) {
    $n_s_math_Numeric$IntIsIntegral$ = new $c_s_math_Numeric$IntIsIntegral$()
  };
  return $n_s_math_Numeric$IntIsIntegral$
}
function $is_scm_Set(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scm_Set)))
}
function $as_scm_Set(obj) {
  return (($is_scm_Set(obj) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "scala.collection.mutable.Set"))
}
function $isArrayOf_scm_Set(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_Set)))
}
function $asArrayOf_scm_Set(obj, depth) {
  return (($isArrayOf_scm_Set(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lscala.collection.mutable.Set;", depth))
}
/** @constructor */
function $c_scm_AbstractSet() {
  /*<skip>*/
}
$c_scm_AbstractSet.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_sc_AbstractSet();
$c_scm_AbstractSet.prototype.constructor = $c_scm_AbstractSet;
/** @constructor */
function $h_scm_AbstractSet() {
  /*<skip>*/
}
$h_scm_AbstractSet.prototype = $c_scm_AbstractSet.prototype;
$c_scm_AbstractSet.prototype.result__O = (function() {
  return this
});
function $p_scm_HashSet__addElem__O__I__Z($thiz, elem, hash) {
  var idx = (hash & (((-1) + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.scm_HashSet__f_scala$collection$mutable$HashSet$$table).u.length) | 0));
  var x1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.scm_HashSet__f_scala$collection$mutable$HashSet$$table).get(idx);
  if ((x1 === null)) {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.scm_HashSet__f_scala$collection$mutable$HashSet$$table).set(idx, new $c_scm_HashSet$Node(elem, hash, null))
  } else {
    var prev = null;
    var n = x1;
    while (((n !== null) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(n).scm_HashSet$Node__f__hash <= hash))) {
      if ((($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(n).scm_HashSet$Node__f__hash === hash) && $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_BoxesRunTime$().equals__O__O__Z(elem, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(n).scm_HashSet$Node__f__key))) {
        return false
      };
      prev = n;
      n = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(n).scm_HashSet$Node__f__next
    };
    if ((prev === null)) {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.scm_HashSet__f_scala$collection$mutable$HashSet$$table).set(idx, new $c_scm_HashSet$Node(elem, hash, x1))
    } else {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(prev).scm_HashSet$Node__f__next = new $c_scm_HashSet$Node(elem, hash, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(prev).scm_HashSet$Node__f__next)
    }
  };
  $thiz.scm_HashSet__f_contentSize = ((1 + $thiz.scm_HashSet__f_contentSize) | 0);
  return true
}
function $p_scm_HashSet__growTable__I__V($thiz, newlen) {
  var oldlen = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.scm_HashSet__f_scala$collection$mutable$HashSet$$table).u.length;
  $thiz.scm_HashSet__f_threshold = $p_scm_HashSet__newThreshold__I__I($thiz, newlen);
  if (($thiz.scm_HashSet__f_contentSize === 0)) {
    $thiz.scm_HashSet__f_scala$collection$mutable$HashSet$$table = new ($d_scm_HashSet$Node.getArrayOf().constr)(newlen)
  } else {
    var original = $thiz.scm_HashSet__f_scala$collection$mutable$HashSet$$table;
    $thiz.scm_HashSet__f_scala$collection$mutable$HashSet$$table = $asArrayOf_scm_HashSet$Node($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_ju_Arrays$().copyOf__AO__I__AO(original, newlen), 1);
    var preLow = new $c_scm_HashSet$Node(null, 0, null);
    var preHigh = new $c_scm_HashSet$Node(null, 0, null);
    while ((oldlen < newlen)) {
      var i = 0;
      while ((i < oldlen)) {
        var old = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.scm_HashSet__f_scala$collection$mutable$HashSet$$table).get(i);
        if ((old !== null)) {
          preLow.scm_HashSet$Node__f__next = null;
          preHigh.scm_HashSet$Node__f__next = null;
          var lastLow = preLow;
          var lastHigh = preHigh;
          var n = old;
          while ((n !== null)) {
            var next = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(n).scm_HashSet$Node__f__next;
            if ((($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(n).scm_HashSet$Node__f__hash & oldlen) === 0)) {
              $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(lastLow).scm_HashSet$Node__f__next = n;
              lastLow = n
            } else {
              $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(lastHigh).scm_HashSet$Node__f__next = n;
              lastHigh = n
            };
            n = next
          };
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(lastLow).scm_HashSet$Node__f__next = null;
          if ((old !== preLow.scm_HashSet$Node__f__next)) {
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.scm_HashSet__f_scala$collection$mutable$HashSet$$table).set(i, preLow.scm_HashSet$Node__f__next)
          };
          if ((preHigh.scm_HashSet$Node__f__next !== null)) {
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.scm_HashSet__f_scala$collection$mutable$HashSet$$table).set(((i + oldlen) | 0), preHigh.scm_HashSet$Node__f__next);
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(lastHigh).scm_HashSet$Node__f__next = null
          }
        };
        i = ((1 + i) | 0)
      };
      oldlen = (oldlen << 1)
    }
  }
}
function $p_scm_HashSet__tableSizeFor__I__I($thiz, capacity) {
  var x = (((-1) + capacity) | 0);
  var i = ((x > 4) ? x : 4);
  var x$1 = ((((-2147483648) >> $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(Math.clz32(i))) & i) << 1);
  return ((x$1 < 1073741824) ? x$1 : 1073741824)
}
function $p_scm_HashSet__newThreshold__I__I($thiz, size) {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$doubleToInt((size * $thiz.scm_HashSet__f_loadFactor))
}
function $ct_scm_HashSet__I__D__($thiz, initialCapacity, loadFactor) {
  $thiz.scm_HashSet__f_loadFactor = loadFactor;
  $thiz.scm_HashSet__f_scala$collection$mutable$HashSet$$table = new ($d_scm_HashSet$Node.getArrayOf().constr)($p_scm_HashSet__tableSizeFor__I__I($thiz, initialCapacity));
  $thiz.scm_HashSet__f_threshold = $p_scm_HashSet__newThreshold__I__I($thiz, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.scm_HashSet__f_scala$collection$mutable$HashSet$$table).u.length);
  $thiz.scm_HashSet__f_contentSize = 0;
  return $thiz
}
function $ct_scm_HashSet__($thiz) {
  $ct_scm_HashSet__I__D__($thiz, 16, 0.75);
  return $thiz
}
/** @constructor */
function $c_scm_HashSet() {
  this.scm_HashSet__f_loadFactor = 0.0;
  this.scm_HashSet__f_scala$collection$mutable$HashSet$$table = null;
  this.scm_HashSet__f_threshold = 0;
  this.scm_HashSet__f_contentSize = 0
}
$c_scm_HashSet.prototype = new $h_scm_AbstractSet();
$c_scm_HashSet.prototype.constructor = $c_scm_HashSet;
/** @constructor */
function $h_scm_HashSet() {
  /*<skip>*/
}
$h_scm_HashSet.prototype = $c_scm_HashSet.prototype;
$c_scm_HashSet.prototype.partition__F1__T2 = (function(p) {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__partition__F1__T2(this, p)
});
$c_scm_HashSet.prototype.filterNot__F1__O = (function(pred) {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__filterImpl__F1__Z__O(this, pred, true)
});
$c_scm_HashSet.prototype.size__I = (function() {
  return this.scm_HashSet__f_contentSize
});
$c_scm_HashSet.prototype.scala$collection$mutable$HashSet$$improveHash__I__I = (function(originalHash) {
  return (originalHash ^ ((originalHash >>> 16) | 0))
});
$c_scm_HashSet.prototype.contains__O__Z = (function(elem) {
  var hash = this.scala$collection$mutable$HashSet$$improveHash__I__I($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().anyHash__O__I(elem));
  var x1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.scm_HashSet__f_scala$collection$mutable$HashSet$$table).get((hash & (((-1) + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.scm_HashSet__f_scala$collection$mutable$HashSet$$table).u.length) | 0)));
  return (((x1 === null) ? null : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x1).findNode__O__I__scm_HashSet$Node(elem, hash)) !== null)
});
$c_scm_HashSet.prototype.sizeHint__I__V = (function(size) {
  var target = $p_scm_HashSet__tableSizeFor__I__I(this, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$doubleToInt((((1 + size) | 0) / this.scm_HashSet__f_loadFactor)));
  if ((target > $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.scm_HashSet__f_scala$collection$mutable$HashSet$$table).u.length)) {
    $p_scm_HashSet__growTable__I__V(this, target)
  }
});
$c_scm_HashSet.prototype.add__O__Z = (function(elem) {
  if ((((1 + this.scm_HashSet__f_contentSize) | 0) >= this.scm_HashSet__f_threshold)) {
    $p_scm_HashSet__growTable__I__V(this, ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.scm_HashSet__f_scala$collection$mutable$HashSet$$table).u.length << 1))
  };
  return $p_scm_HashSet__addElem__O__I__Z(this, elem, this.scala$collection$mutable$HashSet$$improveHash__I__I($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().anyHash__O__I(elem)))
});
$c_scm_HashSet.prototype.addAll__sc_IterableOnce__scm_HashSet = (function(xs) {
  this.sizeHint__I__V($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).knownSize__I());
  if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_HashSet)) {
    var x2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_HashSet(xs);
    var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2);
    var f = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction2(((k$2, h$2) => {
      var h = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(h$2);
      $p_scm_HashSet__addElem__O__I__Z(this, k$2, this.scala$collection$mutable$HashSet$$improveHash__I__I(h))
    }));
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$2.sci_HashSet__f_rootNode).foreachWithHash__F2__V(f);
    return this
  } else if ((xs instanceof $c_scm_HashSet)) {
    var x3 = $as_scm_HashSet(xs);
    var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3);
    var iter = new $c_scm_HashSet$$anon$2(this$3);
    while (iter.hasNext__Z()) {
      var next = $as_scm_HashSet$Node(iter.next__O());
      $p_scm_HashSet__addElem__O__I__Z(this, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(next).scm_HashSet$Node__f__key, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(next).scm_HashSet$Node__f__hash)
    };
    return this
  } else {
    return $as_scm_HashSet($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs))
  }
});
$c_scm_HashSet.prototype.iterator__sc_Iterator = (function() {
  return new $c_scm_HashSet$$anon$1(this)
});
$c_scm_HashSet.prototype.iterableFactory__sc_IterableFactory = (function() {
  return $m_scm_HashSet$()
});
$c_scm_HashSet.prototype.knownSize__I = (function() {
  return this.scm_HashSet__f_contentSize
});
$c_scm_HashSet.prototype.isEmpty__Z = (function() {
  return (this.scm_HashSet__f_contentSize === 0)
});
$c_scm_HashSet.prototype.foreach__F1__V = (function(f) {
  var len = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.scm_HashSet__f_scala$collection$mutable$HashSet$$table).u.length;
  var i = 0;
  while ((i < len)) {
    var n = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.scm_HashSet__f_scala$collection$mutable$HashSet$$table).get(i);
    if ((n !== null)) {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(n).foreach__F1__V(f)
    };
    i = ((1 + i) | 0)
  }
});
$c_scm_HashSet.prototype.className__T = (function() {
  return "HashSet"
});
$c_scm_HashSet.prototype.hashCode__I = (function() {
  var setIterator = new $c_scm_HashSet$$anon$1(this);
  var hashIterator = ((!setIterator.hasNext__Z()) ? setIterator : new $c_scm_HashSet$$anon$3(this));
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_util_hashing_MurmurHash3$().unorderedHash__sc_IterableOnce__I__I(hashIterator, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_setSeed)
});
$c_scm_HashSet.prototype.addOne__O__scm_Growable = (function(elem) {
  this.add__O__Z(elem);
  return this
});
$c_scm_HashSet.prototype.addAll__sc_IterableOnce__scm_Growable = (function(xs) {
  return this.addAll__sc_IterableOnce__scm_HashSet(xs)
});
$c_scm_HashSet.prototype.collectionClassName__ = (function() {
  return "HashSet"
});
function $as_scm_HashSet(obj) {
  return (((obj instanceof $c_scm_HashSet) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "scala.collection.mutable.HashSet"))
}
function $isArrayOf_scm_HashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_HashSet)))
}
function $asArrayOf_scm_HashSet(obj, depth) {
  return (($isArrayOf_scm_HashSet(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lscala.collection.mutable.HashSet;", depth))
}
var $d_scm_HashSet = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  scm_HashSet: 0
}, false, "scala.collection.mutable.HashSet", {
  scm_HashSet: 1,
  scm_AbstractSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Set: 1,
  sc_SetOps: 1,
  F1: 1,
  s_Equals: 1,
  scm_Set: 1,
  scm_Iterable: 1,
  scm_SetOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_Shrinkable: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_scm_HashSet.prototype.$classData = $d_scm_HashSet;
$sct_Lcom_novocode_junit_JUnitFramework__stinit__();
$sct_Lorg_scalajs_junit_JUnitFramework__stinit__();
$sct_Lmunit_Framework__stinit__();
$s_Lorg_scalajs_testing_bridge_Bridge__start__V();
//# sourceMappingURL=main.js.map
