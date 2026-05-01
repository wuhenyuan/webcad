#!/bin/bash
# Build C++ → WASM and copy output to demo/public/
# Requires: emsdk installed at $HOME/emsdk

set -e

emsdk_dir="$HOME/emsdk"
export EMSDK_NODE="$emsdk_dir/node/22.16.0_64bit/bin/node.exe"
export EMSDK_PYTHON="$emsdk_dir/python/3.13.3_64bit/python.exe"
export PATH="$emsdk_dir:$emsdk_dir/upstream/emscripten:$emsdk_dir/node/22.16.0_64bit/bin:$PATH"

script_dir="$(cd "$(dirname "$0")" && pwd)"
cd "$script_dir/bindings"

echo "==> Compiling C++ to WASM..."
python "$EMSDK_PYTHON" "$emsdk_dir/upstream/emscripten/emcc.py" \
  bindings.cpp ../core/geometry.cpp \
  -o geometry_module.js \
  --bind \
  -s WASM=1 \
  -s ALLOW_MEMORY_GROWTH=1 \
  -s MODULARIZE=1 \
  -s EXPORT_NAME='GeometryModule' \
  -s ENVIRONMENT='web,worker' \
  -I../core \
  -O2

echo "==> Copying to demo/public/"
cp geometry_module.js geometry_module.wasm ../demo/public/

echo "==> Done: geometry_module.js + geometry_module.wasm"
