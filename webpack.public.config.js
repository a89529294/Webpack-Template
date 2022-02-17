const { merge } = require("webpack-merge");
const base = require("./webpack.base.config");
const path = require("path");

const config = {
  entry: "./src/index-public.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "public-bundle.js",
  },
};

module.exports = merge(base, config);
