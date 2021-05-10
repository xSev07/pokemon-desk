const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  mode: NODE_ENV || "development",
  entry: path.resolve(__dirname, "src/index.js"),
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ["ts-loader"],
      },
      {
        test: /\.(s*)css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[name]__[local]__[hash:base64:5]",
                auto: /\.modules\.\w+$/i,
              },
            }
          },
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html")
    })
  ],
  devServer: {
    port: 3080,
    open: false,
    hot: true,
  },
  devtool: "source-map",
};
