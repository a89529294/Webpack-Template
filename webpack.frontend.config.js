const { merge } = require("webpack-merge");
const base = require("./webpack.base.config");
const path = require("path");

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};

module.exports = merge(base, config);
