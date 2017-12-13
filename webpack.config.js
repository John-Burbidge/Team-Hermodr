var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");
  module.exports = {
      entry: './src/app.js',
      output: {
          path: path.resolve(__dirname, "dist"),
          publicPath: "/",
          filename: 'app.bundle.js'
      },
      module: {
          rules: [
              {
                  test: /\.s?css$/,
                  use: ['style-loader', 'css-loader', 'sass-loader']
              }, {
                  test: /\.js$/,
                  exclude: /node_modules/,
                  use: 'babel-loader'
              }, {
                  test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                  loader: 'file-loader?name=fonts/[name].[ext]'
              }, {
                  test:  /\.(gif|png|jpe?g|svg)$/i,
                  loader: 'file-loader'
              }
          ]
      },
      devServer: {
          historyApiFallback: true
      },
      plugins: [new HtmlWebpackPlugin({template: './src/index.html'})]
  }