#!/bin/bash
# One-time: build OCCT static libraries for WASM
# Output: $HOME/occt-wasm/{include/opencascade/, lib/}
# Prerequisites:
#   - emsdk at $HOME/emsdk
#   - cmake + ninja on PATH (or installed to $HOME/tools/)
#
# Usage: bash build_occt.sh

set -e

OCCT_VERSION="7_8_0"
OCCT_SRC="$HOME/tools/OCCT-${OCCT_VERSION}"
OCCT_BUILD="$HOME/tools/occt-build"
OCCT_INSTALL="$HOME/occt-wasm"

EMSDK_DIR="$HOME/emsdk"
EMSDK_PYTHON="$EMSDK_DIR/python/3.13.3_64bit/python.exe"

# Add cmake/ninja if in $HOME/tools
CMAKE_BIN="$HOME/tools/cmake-3.29.3-windows-x86_64/bin"
NINJA_BIN="$HOME/tools"
export PATH="$CMAKE_BIN:$NINJA_BIN:$EMSDK_DIR:$EMSDK_DIR/upstream/emscripten:$EMSDK_DIR/node/22.16.0_64bit/bin:$PATH"

echo "==> OCCT source: $OCCT_SRC"
echo "==> Build dir:   $OCCT_BUILD"
echo "==> Install to:  $OCCT_INSTALL"

# Download OCCT if not present
if [ ! -f "$OCCT_SRC/CMakeLists.txt" ]; then
    echo "==> Downloading OCCT ${OCCT_VERSION}..."
    mkdir -p "$(dirname "$OCCT_SRC")"
    curl -L -o "$HOME/tools/occt.tar.gz" \
        "https://github.com/Open-Cascade-SAS/OCCT/archive/refs/tags/V${OCCT_VERSION}.tar.gz"
    rm -rf "$OCCT_SRC"
    tar -xzf "$HOME/tools/occt.tar.gz" -C "$HOME/tools"
fi

rm -rf "$OCCT_BUILD"
mkdir -p "$OCCT_BUILD"
cd "$OCCT_BUILD"

echo "==> Configuring OCCT for WASM..."
python "$EMSDK_DIR/upstream/emscripten/emcmake.py" cmake \
  -G "Ninja" \
  -DCMAKE_BUILD_TYPE=Release \
  -DCMAKE_INSTALL_PREFIX="$OCCT_INSTALL" \
  -DBUILD_LIBRARY_TYPE=Static \
  -DBUILD_MODULE_ApplicationFramework=OFF \
  -DBUILD_MODULE_DataExchange=OFF \
  -DBUILD_MODULE_Draw=OFF \
  -DBUILD_MODULE_FoundationClasses=ON \
  -DBUILD_MODULE_ModelingAlgorithms=ON \
  -DBUILD_MODULE_ModelingData=ON \
  -DBUILD_MODULE_Visualization=OFF \
  -DUSE_FREETYPE=OFF \
  -DUSE_FREEIMAGE=OFF \
  -DUSE_TBB=OFF \
  -DUSE_VTK=OFF \
  -DUSE_OPENGL=OFF \
  -DBUILD_DOC_Overview=OFF \
  -DBUILD_SAMPLES=OFF \
  -DINSTALL_DIR_LAYOUT=Unix \
  "$OCCT_SRC"

echo "==> Building OCCT (30-60 min)..."
ninja -j4 install

echo "==> Done: $(ls "$OCCT_INSTALL/lib/"*.a | wc -l) libraries in $OCCT_INSTALL"
