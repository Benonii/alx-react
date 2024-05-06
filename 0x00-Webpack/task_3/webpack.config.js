const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    header: './modules/header.js',
    body: './modules/body.js',
    footer: './modules/footer.js',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  mode: "development",
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        filename: 'index.html',
      }),
      new CleanWebpackPlugin()
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 8564,
    open: true,
  }
};
