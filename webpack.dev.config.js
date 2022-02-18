const { merge } = require("webpack-merge");
const base = require("./webpack.base.config");
const path = require("path");

const config = {
  mode: "development",
  devServer: { static: path.join(__dirname, "dist") },
  //for better denugging, check sources tab in inspector
  devtool: "eval-source-map",
};

module.exports = merge(base, config);
