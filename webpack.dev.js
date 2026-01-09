const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const path = require('path');

// Ensure we use sass (Dart Sass) instead of node-sass
let sassImplementation;
try {
  sassImplementation = require('sass');
} catch (e) {
  console.error('sass (Dart Sass) not found. Please install it: npm install sass --save-dev');
  process.exit(1);
}

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
      favicon: './src/assets/favicon.png'
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', //3. Inject styles into DOM
          'css-loader', //2. Turns css into commonjs
          {
            loader: 'sass-loader',
            options: {
              implementation: sassImplementation, // Use Dart Sass instead of node-sass
              sassOptions: {
                outputStyle: 'expanded',
              },
            }
          }
        ] //1. Turns sass into css
      }
    ]
  }
});
