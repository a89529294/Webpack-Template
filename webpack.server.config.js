const { merge } = require("webpack-merge");
const base = require("./webpack.base.config");
const path = require("path");
const nodeExternals = require("webpack-node-externals");

const config = {
  entry: "./src/server.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "backend-bundle.js",
  },
  target: "node", // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()],
  // in order to ignore all modules in node_modules folder
  // The server already has access to this folder so there is no need to bundle them. When we
  // build for the frontend we must include them in the bundle because the browser cannot
  // access the node_module folder on the server.”
};

module.exports = merge(base, config);
