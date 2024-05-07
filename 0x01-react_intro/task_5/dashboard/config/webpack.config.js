const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    entry: '../src/index.js',
    output: {
     path: path.resolve(__dirname, 'dist'),
     filename: 'bundle.js',
    },
    devServer: {
        contentBase: '../dist',
        hot: true,
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
          {
            test: /\.html$/,
            use: ['html-loader']
          }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
          filename: 'index.html'
        })
      ],
      devtool: 'inline-source-map'
 }