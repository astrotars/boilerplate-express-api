#!/bin/bash

# build code from /src to /dist
rm -rf dist && mkdir dist
npx babel src --out-dir dist
