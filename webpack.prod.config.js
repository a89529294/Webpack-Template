const { merge } = require("webpack-merge");
const base = require("./webpack.base.config");

const config = {
  mode: "production",
};

module.exports = merge(base, config);
