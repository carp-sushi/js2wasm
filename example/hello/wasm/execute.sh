#!/bin/bash

echo '{"name":"David"}' \
  | wasmtime cmd.wasm \
  | jq -r '.greeting'

