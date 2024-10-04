const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const paths = require('./paths');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    index: paths.src.index.jsEntry,
    dashboard: paths.src.dashboard.jsEntry,
    profile: paths.src.profile.jsEntry,
   trending: paths.src.trending.jsEntry,
    reddit: paths.src.reddit.jsEntry,
  },
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
  },
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    contentBase: [paths.build, `${__dirname}/assets`],
    open: true,
    compress: true,
    hot: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'assets',
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{
        from: paths.assets,
        to: 'assets',
        globOptions: {
          ignore: ['*.DS_STORE'],
        },
        noErrorOnMissing: false,
      }]
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: paths.src.index.htmlEntry,
      inject: true,
      chunks: ['index'],
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: paths.src.dashboard.htmlEntry,
      inject: true,
      chunks: ['dashboard'],
      filename: 'dashboard.html'
    }),
    new HtmlWebpackPlugin({
      template: paths.src.reddit.htmlEntry,
      inject: true,
      chunks: ['reddit'],
      filename: 'reddit.html'
    }),
    new HtmlWebpackPlugin({
      template: paths.src.trending.htmlEntry,
      inject: true,
      chunks: ['trending'],
      filename: 'trending.html'
    }),
    new HtmlWebpackPlugin({
      template: paths.src.profile.htmlEntry,
      inject: true,
      chunks: ['profile'],
      filename: 'profile.html'
    }),
  ]
};
