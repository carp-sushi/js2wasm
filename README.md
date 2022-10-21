# js2wasm

JavaScript to WebAssembly toolchain

## Purpose

The intent for this tool is to provide a means to write PureScript, compile to JavaScript, and package as a self-contained Wasi command.

## Build

Ensure Rust stable is installed.

```shell
rustup install stable && rustup default stable
```

Add the wasm32-wasi target.

```shell
rustup target add wasm32-wasi
```

From the root of the `js2wasm` project, download the wasi sdk.

```shell
./download-wasi-sdk.sh
```

Set the QuickJS Wasi SDK environment variable.

```shell
export QUICKJS_WASM_SYS_WASI_SDK_PATH=$(pwd)/wasi-sdk
```

Alternatively, `direnv` can be used to set the above automatically. See the .envrc file.

```shell
direnv allow .
```

Invoke the default make target.

```shell
make
```

Note: this project has only been built on Ubuntu LTS 22.04 w/ the clang development
package installed.

## Usage

```shell
target/release/js2wasm
error: The following required arguments were not provided:
    <input>

USAGE:
  js2wasm <input> -o <output>
```

Where `<input>` is a JavaScript command file and `<output>` is a Wasm file name. For example:

```shell
js2wasm index.js -o index.wasm
```

## Example

See the `wasm` dir in the [fib-purs](https://github.com/carp-sushi/fib-purs) repo.

## TODO

- Ensure build works on OSX.
- Add config options for optimization of code size / speed.

## Acknowledgements

The code in the repo was adaptated from [Javy](https://github.com/Shopify/javy) with the following
changes:

- Change naming, make company agnostic (i.e. Shopify -> Cmd).
- Remove hard-coded Wasm optimization (can be done later with `wasm-opt`).
- Reference quickjs-wasm-rs as a lib from crates.io.

