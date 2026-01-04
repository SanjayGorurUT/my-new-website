#!/usr/bin/env node

// This script wraps webpack to handle the OpenSSL legacy provider issue
// It uses execFile to run node with the flag directly
const { execFile } = require('child_process');
const path = require('path');

const nodePath = process.execPath;
const webpackPath = path.join(__dirname, '..', 'node_modules', '.bin', 'webpack');
const webpackConfig = path.join(__dirname, '..', 'webpack.prod.js');

// Use execFile to run node directly with the flag
// Note: This approach may still have limitations, but it's worth trying
const child = execFile(
  nodePath,
  ['--openssl-legacy-provider', webpackPath, '--config', webpackConfig],
  {
    env: process.env,
    stdio: 'inherit'
  },
  (error, stdout, stderr) => {
    if (error) {
      console.error(error);
      process.exit(1);
    }
  }
);

