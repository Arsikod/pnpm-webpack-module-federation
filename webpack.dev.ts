import { Configuration } from "webpack";
import { Configuration as DevServerConfig } from "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { commonConfig } from "./webpack.common";
import { merge } from "webpack-merge";

const devServerConfig: DevServerConfig = {
  port: 8080,
  open: true,
  hot: true,
};

const cssLoaderWIthModules = {
  loader: "css-loader",

  options: {
    modules: {
      localIdentName: "[path][name]__[local]",
      namedExport: false,
    },
  },
};

const devConfig: Configuration = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: devServerConfig,
  plugins: [new HtmlWebpackPlugin()],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", cssLoaderWIthModules],
      },
    ],
  },
};

export default merge(commonConfig, devConfig);
