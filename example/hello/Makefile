.PHONY: all format build test clean run module cmd

all: format build test

format:
	purs-tidy format-in-place src/**/*.purs test/**/*.purs

build:
	spago build

test:
	spago test

clean:
	rm -rf index.* output .spago .psci_modules

run:
	spago run

module:
	spago bundle-module

cmd: module
	sed -i.bak s/export\ \{/Cmd=\{execute\}\;\\/\*/g index.js && echo "*/" >> index.js
	minify -o index.min.js index.js
	js2wasm index.min.js
	wasm-opt -ol 3 -s 0 --strip -o wasm/cmd.wasm index.wasm
