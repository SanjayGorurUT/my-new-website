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

const htmlPlugins = [
  new HtmlWebpackPlugin({
    template: './src/template.html',
    filename: 'index.html',
    favicon: './src/assets/favicon.png',
    chunks: ['vendor', 'main']
  }),
  new HtmlWebpackPlugin({
    template: './src/programming-intro.html',
    filename: 'projects/programming-intro/index.html',
    favicon: './src/assets/favicon.png',
    chunks: ['vendor', 'main']
  }),
  new HtmlWebpackPlugin({
    template: './src/group-ultimate-guitar.html',
    filename: 'projects/group/ultimate-guitar-song-decomposition/index.html',
    favicon: './src/assets/favicon.png',
    chunks: ['vendor', 'main']
  })
];

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: false,
    publicPath: '/'
  },
  plugins: [...htmlPlugins],
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
