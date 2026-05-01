cmake_minimum_required(VERSION 3.10)
project(GeometryBindings LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# Core library (pure C++, no Emscripten deps)
add_library(geometry_core STATIC
    ../core/geometry.cpp
)
target_include_directories(geometry_core PUBLIC ../core)

# WASM binding executable
add_executable(geometry_module bindings.cpp)
target_link_libraries(geometry_module geometry_core)

# Emscripten link flags
set_target_properties(geometry_module PROPERTIES
    LINK_FLAGS "-s WASM=1 --bind -s ALLOW_MEMORY_GROWTH=1 -s MODULARIZE=1 -s EXPORT_NAME='GeometryModule' -s ENVIRONMENT='web,worker'"
)
