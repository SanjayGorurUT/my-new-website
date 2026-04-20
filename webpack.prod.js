const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// Ensure we use sass (Dart Sass) instead of node-sass
let sassImplementation;
try {
  sassImplementation = require('sass');
} catch (e) {
  console.error('sass (Dart Sass) not found. Please install it: npm install sass --save-dev');
  process.exit(1);
}

const minifyOptions = {
  removeAttributeQuotes: true,
  collapseWhitespace: true,
  removeComments: true
};

const htmlPlugins = [
  new HtmlWebpackPlugin({
    template: './src/template.html',
    filename: 'index.html',
    favicon: './src/assets/favicon.png',
    chunks: ['vendor', 'main'],
    minify: minifyOptions
  }),
  new HtmlWebpackPlugin({
    template: './src/programming-intro.html',
    filename: 'projects/programming-intro/index.html',
    favicon: './src/assets/favicon.png',
    chunks: ['vendor', 'main'],
    minify: minifyOptions
  })
];

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contentHash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin()]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contentHash].css'
    }),
    ...htmlPlugins
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, //3. Extract css into files
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
