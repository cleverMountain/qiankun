const { resolve } = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: resolve(__dirname, "./src/main.js"),
  output: {
    path: resolve(__dirname, "./dist"),
    filename: 'js/main.js',
    publicPath: '/'
  },
  module: {
    rules: [

      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(jpg|png|gif)$/,

        loader: 'url-loader',
        options: {
          limit: 0.0001 * 1024,
          name: '[hash:8].[ext]'
        }
      },

    ]
  },
  plugins: [
    new VueLoaderPlugin(),

    new htmlWebpackPlugin({
      template: resolve(__dirname, "./index.html")
    })
  ],
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    port: 9000,
    hot: true
  }
}