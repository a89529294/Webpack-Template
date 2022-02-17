const { merge } = require("webpack-merge");
const base = require("./webpack.base.config");

const config = {
  entry: "./src/index.js",
  mode: "production",
};

module.exports = merge(base, config);
