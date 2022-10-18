# js2wasm

JavaScript to WebAssembly toolchain

## TODO

- Add build, usage instructions.
- Add config options for optimization of code size / speed.

## Acknowledgements

The code in the repo was adaptated from [Javy](https://github.com/Shopify/javy) with the following
changes:

- Change naming, make company agnostic (i.e. Shopify -> Cmd).
- Remove Wasm optimization (can be done later with `wasm-opt`)
- Reference quickjs-wasm-rs as a lib from crates.io

