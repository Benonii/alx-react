const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    output: {
     path: path.resolve(__dirname, '../dist'),
     filename: 'bundle.js',
    },
    devServer: {
        static: {
          directory: path.resolve(__dirname, '/dist'),
        },
        hot: true,
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
              }
            },
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            type: "asset/resource",
            use: [
              {
                loader: 'image-webpack-loader',
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
        new HtmlWebPackPlugin({
          template: './src/index.html',
          filename: 'index.html'
        })
      ],
      devtool: 'inline-source-map'
 }
