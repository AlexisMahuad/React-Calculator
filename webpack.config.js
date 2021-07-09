const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebpackPlugin({
  template: "./src/public/index.html",
  filename: "./index.html",
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        use: ["file-loader?name=assets/[name].[ext]", "image-webpack-loader"],
      },
    ],
  },
  devtool: "inline-source-map",
  plugins: [htmlPlugin],
};
