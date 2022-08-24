const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  mode: 'development',
  entry: {
    index: './src/index.js',

  },
  devServer: {
    static: './dist',
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,

  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(gif|png|jpe?g)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/',
            },
          },
        ],
      },

      {
        test: /\.html$/,
        use: [
          'html-loader',
        ],
      },

    ],
  },

  plugins: [
    new HtmlWebpackPlugin({

      template: './src/index.html',
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
  },

};