const { merge } = require("webpack-merge");
const path = require("path");
const base = require("./webpack.base.config");

const config = {
  mode: "development",
  devServer: { static: path.join(__dirname, "dist") },
};

module.exports = merge(base, config);
