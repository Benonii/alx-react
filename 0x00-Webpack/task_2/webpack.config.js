const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-laoder', 'css-loader'],
      },
      {
        test: /\/(png|jpg|jpeg|gif|svg)$/,
        type: 'asset/resource',
        use: {
          loader: 'image-webpack-loader',
        },
      },
    ],
  }, 
};
