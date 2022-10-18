.PHONY: cli engine clean
.DEFAULT_GOAL := cli

cli: engine
	cd packages/cli && cargo build --release && cd -

engine:
	cd packages/engine \
		&& cargo build --release --target=wasm32-wasi \
		&& cd -

clean:
	cargo clean
