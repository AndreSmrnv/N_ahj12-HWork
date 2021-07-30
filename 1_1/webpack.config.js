const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "src", "index.js"),
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: path.join("js", "bundle.js"),
    publicPath: '/',

  },
  experiments: {
       asset: true
     },
  resolve: {
    alias: {
      img: path.resolve(__dirname, 'src/img/'),
    },
  },
  target: "web",
  module: {
    rules: [
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
    },

      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.js?$/i,
        exclude: /.yarn/,
        loader: "babel-loader",
        
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: path.join("css", "[name].css"),
      chunkFilename: "[id].css",
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
  devServer: {
    port: 3300,
    hot: true,
    open: true,
    contentBase: path.resolve(__dirname, './dist'),
        
        compress: true,
      
  },
};
