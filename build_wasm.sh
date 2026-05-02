#!/bin/bash
# Build C++ → WASM with OCCT and copy output to demo/public/
# Requires:
#   - emsdk installed at $HOME/emsdk
#   - OCCT WASM libs at $HOME/occt-wasm/ (run build_occt.sh once to produce)
set -e

emsdk_dir="$HOME/emsdk"
export EMSDK_NODE="$emsdk_dir/node/22.16.0_64bit/bin/node.exe"
export EMSDK_PYTHON="$emsdk_dir/python/3.13.3_64bit/python.exe"
export PATH="$emsdk_dir:$emsdk_dir/upstream/emscripten:$emsdk_dir/node/22.16.0_64bit/bin:$PATH"

script_dir="$(cd "$(dirname "$0")" && pwd)"
cd "$script_dir/bindings"

OCCT_ROOT="$HOME/occt-wasm"
OCCT_INC="$OCCT_ROOT/include/opencascade"
OCCT_LIB="$OCCT_ROOT/lib"

echo "==> Compiling C++ to WASM..."

OCCT_FLAGS=""
if [ -d "$OCCT_LIB" ] && [ -f "$OCCT_LIB/libTKernel.a" ]; then
    echo "    OCCT libraries found at $OCCT_ROOT"
    OCCT_FLAGS="-fexceptions -I$OCCT_INC -L$OCCT_LIB \
        -lTKMesh -lTKShHealing -lTKPrim -lTKTopAlgo \
        -lTKBRep -lTKGeomBase -lTKGeomAlgo \
        -lTKG3d -lTKG2d \
        -lTKMath -lTKernel \
        -Wl,--start-group -Wl,--end-group \
        -sDISABLE_EXCEPTION_CATCHING=0"
else
    echo "    WARNING: OCCT not found at $OCCT_ROOT"
    echo "    Run: bash build_occt.sh"
fi

python "$EMSDK_PYTHON" "$emsdk_dir/upstream/emscripten/emcc.py" \
  bindings.cpp ../core/geometry.cpp ../core/occ_geometry.cpp \
  -o geometry_module.js \
  --bind \
  -s WASM=1 \
  -s ALLOW_MEMORY_GROWTH=1 \
  -s MODULARIZE=1 \
  -s EXPORT_NAME='GeometryModule' \
  -s ENVIRONMENT='web,worker' \
  -s INITIAL_MEMORY=32MB \
  -I../core \
  $OCCT_FLAGS \
  -O2

echo "==> Copying to demo/public/"
cp geometry_module.js geometry_module.wasm ../demo/public/

echo "==> Done: geometry_module.js + geometry_module.wasm"
