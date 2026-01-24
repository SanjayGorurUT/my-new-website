#!/bin/bash
set -e

export NODE_OPTIONS="--openssl-legacy-provider"
webpack --config webpack.prod.js







