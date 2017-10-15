#!/usr/bin/env bash
set -e

rm -rf build

# Pointers to executables
NGC="node node_modules/.bin/ngc"
ROLLUP="node node_modules/.bin/rollup"

$NGC -p src/lib/tsconfig-build.json

cp ./package.json build/package.json
