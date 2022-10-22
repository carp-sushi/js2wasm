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

// output/Data.Boolean/index.js
var otherwise = true;

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

// output/Data.Bounded/foreign.js
var topChar = String.fromCharCode(65535);
var bottomChar = String.fromCharCode(0);
var topNumber = Number.POSITIVE_INFINITY;
var bottomNumber = Number.NEGATIVE_INFINITY;

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
var logShow2 = /* @__PURE__ */ logShow(showInt);
var main = function __do() {
  log("The 10th fib number is: ")();
  logShow2(fib(10))();
  log("The value of 10! is: ")();
  return logShow2(fac(10))();
};

// Code above here is build output from a PureScript project.

// Wire this up as a js2wasm command.
Cmd = {
  execute: function(msg) {
	if (msg.op === 'fac') {
	  return { 'fac': fac(msg.n|0) };
	}
	if (msg.op === 'fib') {
	  return { 'fib': fib(msg.n|0) };
	}
	return {};
  }
};
