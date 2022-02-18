const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//loader order matters, it goes from right to left. The output of the loader on the
//right serves as the input of the loader on the left.
const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    //contenthash is for cache busting
    // filename: "[name].[contenthash].js",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        // MiniCss is for css splitting, it conflicts with style-loader because style-loader
        // puts css in bundle.js but MiniCss put css in seperate css files.
        // style loader changes css into document.createElement('style',....) so that eventually
        // a style tag is generated in html header.
        // MiniCss keeps css in seperate css files and eventually adds a link tag in html header.
        // css-loader simply replaces import and url(...) in css files to location strings
        // use: [MiniCssExtractPlugin.loader, "css-loader"],
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|svg)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: ({ htmlWebpackPlugin }) =>
        '<!DOCTYPE html><html><head><meta charset="utf-8"><title>' +
        htmlWebpackPlugin.options.title +
        '</title></head><body><div id="root"></div></body></html>',
      filename: "index.html",
      meta: {
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
      },
      title: "Webpack Tutorial",
    }),
    // new MiniCssExtractPlugin({
    //   filename: "[name].[contenthash].css",
    //   chunkFilename: "[id].[contenthash].css",
    // }),
  ],
  //This is why you can leave off extensions when importing .js and .jsx files,
  //by default webpack only look for .js when you leave off extensions.
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  //This is for vendor splitting
  // optimization: {
  //   splitChunks: {
  //     chunks: "all",
  //   },
  // },
};

module.exports = config;
