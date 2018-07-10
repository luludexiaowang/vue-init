const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './test/index.js',
    // print: './test/print.js'
  },
  output:{
    filename: '[name].bundle.js',
    path: path.resolve(__dirname,'test/dist')
  },
  module: {
    rules: [
        {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },{
        test:/\.(png|svg|jpg|gif)$/,
        use:[
          'file-loader'
        ]
      },{
        test:/\.(woff|woff2|eot|ttf|otf)$/,
        use:[
          'file-loader'
        ]
      }
    ]
  },
  plugins:[
    new CleanWebpackPlugin(['test/dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
};