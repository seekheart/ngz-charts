#!/usr/bin/env bash

rm -rf release

NGC="node node_modules/.bin/ngc"

$NGC -p src/tsconfig-build.json

cp ./package.json dist/package.json
