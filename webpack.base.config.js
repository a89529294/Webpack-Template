const webpack = require("webpack");
const path = require("path");

//loader order matters e.g. style-loader then css-loader
const config = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  //This is why you can leave off extensions when importing .js and .jsx files,
  //by default webpack only look for .js when you leave off extensions.
  resolve: { extensions: [".js", ".jsx"] },
};

module.exports = config;
