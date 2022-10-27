// output-es/Data.Maybe/index.js
var $Maybe = (tag, _1) => ({ tag, _1 });
var Nothing = /* @__PURE__ */ $Maybe("Nothing");

// output-es/Fac/index.js
var fac$p = (fac$p$a0$copy) => (fac$p$a1$copy) => {
  let fac$p$a0 = fac$p$a0$copy, fac$p$a1 = fac$p$a1$copy, fac$p$c = true, fac$p$r;
  while (fac$p$c) {
    const n = fac$p$a0, acc = fac$p$a1;
    if (n === 0) {
      fac$p$c = false;
      fac$p$r = acc;
      continue;
    }
    fac$p$a0 = n - 1 | 0;
    fac$p$a1 = acc * n | 0;
    continue;
  }
  ;
  return fac$p$r;
};
var fac = (n) => {
  if (n < 0) {
    return Nothing;
  }
  return $Maybe(
    "Just",
    (() => {
      if (n === 0) {
        return 1;
      }
      return fac$p(n - 1 | 0)(1 * n | 0);
    })()
  );
};

// output-es/Fib/index.js
var fib = (n) => {
  if (n < 0) {
    return Nothing;
  }
  return $Maybe(
    "Just",
    (() => {
      const loop = (loop$a0$copy) => (loop$a1$copy) => (loop$a2$copy) => {
        let loop$a0 = loop$a0$copy, loop$a1 = loop$a1$copy, loop$a2 = loop$a2$copy, loop$c = true, loop$r;
        while (loop$c) {
          const v = loop$a0, v1 = loop$a1, v2 = loop$a2;
          if (v === 0) {
            loop$c = false;
            loop$r = v1;
            continue;
          }
          loop$a0 = v - 1 | 0;
          loop$a1 = v2;
          loop$a2 = v1 + v2 | 0;
          continue;
        }
        ;
        return loop$r;
      };
      return loop(n)(0)(1);
    })()
  );
};

// output-es/Cmd/index.js
var execute = (i) => {
  if (i.op === "fac") {
    return { input: i, output: fac(i.n) };
  }
  if (i.op === "fib") {
    return { input: i, output: fib(i.n) };
  }
  return { input: i, output: Nothing };
};

// Code above here is build output from a PureScript project.
// Wire this up as a js2wasm command.
Cmd = {execute};
