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

// output/Fac/index.js
var fac = function(n) {
  var fac$prime = function($copy_n1) {
    return function($copy_acc) {
      var $tco_var_n1 = $copy_n1;
      var $tco_done = false;
      var $tco_result;
      function $tco_loop(n1, acc) {
        var $4 = n1 === 0;
        if ($4) {
          $tco_done = true;
          return acc;
        }
        ;
        $tco_var_n1 = n1 - 1 | 0;
        $copy_acc = acc * n1 | 0;
        return;
      }
      ;
      while (!$tco_done) {
        $tco_result = $tco_loop($tco_var_n1, $copy_acc);
      }
      ;
      return $tco_result;
    };
  };
  var $5 = n < 0;
  if ($5) {
    return 0;
  }
  ;
  return fac$prime(n)(1);
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
  var $11 = n <= 0;
  if ($11) {
    return 0;
  }
  ;
  return fib$prime(n);
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
	  return {
		'input': msg,
		'status': 'success',
		'result': fac(msg.n|0)
	  };
	}
	if (msg.op === 'fib') {
	  return {
		'input': msg,
		'status': 'success',
		'result': fib(msg.n|0)
	  };
	}
	return {
	  'status': 'error',
	  'error': 'invalid operation'
	};
  }
};
