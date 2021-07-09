const HtmlWebpackPlugin = require("html-webpack-plugin"),
  MiniCSSExtractPlugin = require("mini-css-extract-plugin");

const htmlPlugin = new HtmlWebpackPlugin({
  template: "./src/public/index.html",
  filename: "./index.html",
});

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
  },
  optimization: {
    usedExports: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.html$/i,
        use: {
          loader: "html-loader",
          options: {
            minimize: true,
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCSSExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [htmlPlugin, new MiniCSSExtractPlugin()],
};
