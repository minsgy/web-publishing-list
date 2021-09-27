const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  stats: {
    children: true,
  },
  mode: "development",
  entry: "./index.js",
  output: {
    path: __dirname + "/public",
    filename: "./public/bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          { loader: "file-loader", options: { name: "[name].[ext]?[hash]" } },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: true,
      },
      hash: true,
      template: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "index.scss",
    }),
  ],
  devServer: {
    port: 9000,
  },
};
