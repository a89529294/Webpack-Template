const { merge } = require("webpack-merge");
const base = require("./webpack.base.config");
const path = require("path");

const config = {
  entry: ["react-hot-loader/patch", "./src/index.js"],
  mode: "development",
  devServer: { static: path.join(__dirname, "dist") },
};

module.exports = merge(base, config);
