import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { commonConfig } from "./webpack.common";
import { merge } from "webpack-merge";
import path from "path";

const { ModuleFederationPlugin } = require("webpack").container;

const cssLoaderWIthModules = {
  loader: "css-loader",

  options: {
    modules: {
      localIdentName: "[path][name]__[local]",
      namedExport: false,
    },
  },
};

const prodConfig: Configuration = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, cssLoaderWIthModules],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css",
    }),
    new HtmlWebpackPlugin(),

    new ModuleFederationPlugin({
      name: "aboutApp",
      filename: "remoteEntry.js",
      exposes: {
        "./About": "./src/components/hello-world-button.ts",
      },
    }),
  ],
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "http://localhost:9001/",
  },
};

export default merge(commonConfig, prodConfig);
