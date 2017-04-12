const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    app: "./app.js"
  },

  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/",
    filename: "[name].bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      },
      // {
      //   test: /\.scss$/,
      //   use : ["style-loader", "css-loader", "sass-loader"]
      // },
      {
        test: /\.(?:png|jpg|gif|svg)$/,
        exclude: /node_modules/,
        use: {
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]"
          }
        }
      },
      {
        test: /\.(?:eot|woff2|woff|ttf|svg)$/,
        include: /node_modules\/bootstrap-sass\//,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]",
          }
        }
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin("style.css")
  ]
};
