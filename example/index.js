// output/Data.Boolean/index.js
var otherwise = true;

// output/Data.Bounded/foreign.js
var topChar = String.fromCharCode(65535);
var bottomChar = String.fromCharCode(0);
var topNumber = Number.POSITIVE_INFINITY;
var bottomNumber = Number.NEGATIVE_INFINITY;

// output/Data.Show/foreign.js
var showIntImpl = function(n) {
  return n.toString();
};

// output/Data.Show/index.js
var showInt = {
  show: showIntImpl
};
var show = function(dict) {
  return dict.show;
};

// output/Data.Maybe/index.js
var Nothing = /* @__PURE__ */ function() {
  function Nothing2() {
  }
  ;
  Nothing2.value = new Nothing2();
  return Nothing2;
}();
var Just = /* @__PURE__ */ function() {
  function Just2(value0) {
    this.value0 = value0;
  }
  ;
  Just2.create = function(value0) {
    return new Just2(value0);
  };
  return Just2;
}();
var showMaybe = function(dictShow) {
  var show2 = show(dictShow);
  return {
    show: function(v) {
      if (v instanceof Just) {
        return "(Just " + (show2(v.value0) + ")");
      }
      ;
      if (v instanceof Nothing) {
        return "Nothing";
      }
      ;
      throw new Error("Failed pattern match at Data.Maybe (line 223, column 1 - line 225, column 28): " + [v.constructor.name]);
    }
  };
};

// output/Effect.Console/foreign.js
var log = function(s) {
  return function() {
    console.log(s);
  };
};

// output/Effect.Console/index.js
var logShow = function(dictShow) {
  var show2 = show(dictShow);
  return function(a) {
    return log(show2(a));
  };
};

// output/Fac/index.js
var fac$prime = function($copy_n) {
  return function($copy_acc) {
    var $tco_var_n = $copy_n;
    var $tco_done = false;
    var $tco_result;
    function $tco_loop(n, acc) {
      var $4 = n === 0;
      if ($4) {
        $tco_done = true;
        return acc;
      }
      ;
      $tco_var_n = n - 1 | 0;
      $copy_acc = acc * n | 0;
      return;
    }
    ;
    while (!$tco_done) {
      $tco_result = $tco_loop($tco_var_n, $copy_acc);
    }
    ;
    return $tco_result;
  };
};
var fac = function(n) {
  if (n < 0) {
    return 0;
  }
  ;
  if (otherwise) {
    return fac$prime(n)(1);
  }
  ;
  throw new Error("Failed pattern match at Fac (line 6, column 1 - line 6, column 18): " + [n.constructor.name]);
};

// output/Fib/index.js
var fib$prime = function(n) {
  var loop = function($copy_v) {
    return function($copy_v1) {
      return function($copy_v2) {
        var $tco_var_v = $copy_v;
        var $tco_var_v1 = $copy_v1;
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v, v1, v2) {
          if (v === 0) {
            $tco_done = true;
            return v1;
          }
          ;
          $tco_var_v = v - 1 | 0;
          $tco_var_v1 = v2;
          $copy_v2 = v1 + v2 | 0;
          return;
        }
        ;
        while (!$tco_done) {
          $tco_result = $tco_loop($tco_var_v, $tco_var_v1, $copy_v2);
        }
        ;
        return $tco_result;
      };
    };
  };
  return loop(n)(0)(1);
};
var fib = function(n) {
  if (n <= 0) {
    return 0;
  }
  ;
  if (otherwise) {
    return fib$prime(n);
  }
  ;
  throw new Error("Failed pattern match at Fib (line 7, column 1 - line 7, column 18): " + [n.constructor.name]);
};

// output/Main/index.js
var logShow2 = /* @__PURE__ */ logShow(/* @__PURE__ */ showMaybe(showInt));
var run = function(op) {
  return function(n) {
    if (op === "fac") {
      return new Just(fac(n));
    }
    ;
    if (op === "fib") {
      return new Just(fib(n));
    }
    ;
    return Nothing.value;
  };
};
var main = function __do() {
  log("The 10th fib number is: ")();
  logShow2(run("fib")(10))();
  log("The value of 10! is: ")();
  return logShow2(run("fac")(10))();
};

// Code above here is build output from a PureScript project.

// Wire this up as a js2wasm command.
Cmd = {
  execute: function(msg) {
	result = run(msg.op)(msg.n|0);
	return {
	  'input': msg,
	  'result': result,
	};
  }
};
