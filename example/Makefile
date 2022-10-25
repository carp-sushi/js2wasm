.PHONY: all build optimize run clean

all: build optimize

build:
	../target/release/js2wasm index.js -o index.wasm

optimize:
	wasm-opt -ol 3 -s 0 --strip -o cmd.wasm index.wasm

optimize-md:
	wasm-opt -Os --strip -o cmd-md.wasm index.wasm

optimize-sm:
	wasm-opt -Oz --strip -o cmd-sm.wasm index.wasm

run:
	echo '{"n": 10, "op": "fib"}' | wasmtime cmd.wasm | jq
	@echo ""
	echo '{"n": 10, "op": "fac"}' | wasmtime cmd.wasm | jq
	@echo ""

clean:
	rm -rf *.wasm
