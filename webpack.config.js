const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {
      'api': path.resolve(__dirname, 'src/api/'),
      'assets': path.resolve(__dirname, 'src/assets/'),
      'components': path.resolve(__dirname, 'src/components/'),
      'constants': path.resolve(__dirname, 'src/constants/'),
      'containers': path.resolve(__dirname, 'src/containers/'),
      'utils': path.resolve(__dirname, 'src/utils/'),
      'languages': path.resolve(__dirname, 'src/languages/'),
      'store': path.resolve(__dirname, 'src/store/'),
      'styles': path.resolve(__dirname, 'src/styles/'),
      'routes': path.resolve(__dirname, 'src/routes/')
    }
  },
  devServer: {
    contentBase: './build',
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          // style-loader
          { loader: 'style-loader' },
          // css-loader
          {
            loader: 'css-loader',
            options: {
              modules: false,
            },
          },
          // sass-loader
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'assets',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
      favicon: './public/favicon.ico',
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new Dotenv(),
  ],
  node: {
    fs: 'empty',
  }
};
