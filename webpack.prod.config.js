const { merge } = require("webpack-merge");
const base = require("./webpack.base.config");

const config = {
  mode: "production",
  //for better denugging, check sources tab in inspector
  // devtool: "source-map",
};

module.exports = merge(base, config);
