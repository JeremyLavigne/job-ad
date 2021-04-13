const commonPaths = require("./common-paths");
const port = process.env.PORT || 3000;
const config = {
  mode: "development",
  entry: {
    app: `${commonPaths.appEntry}/index.js`,
  },
  output: {
    filename: "[name].[hash].js",
  },
  // resolve: {
  //   alias: {
  //     "react-dom": "@hot-loader/react-dom",
  //   },
  // },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [],
  devServer: {
    host: "localhost",
    port: port,
    historyApiFallback: true,
    open: true,
  },
};
module.exports = config;
