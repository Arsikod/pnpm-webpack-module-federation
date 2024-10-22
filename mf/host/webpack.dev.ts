import { Configuration } from "webpack";
import { Configuration as DevServerConfig } from "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { commonConfig } from "./webpack.common";
import { merge } from "webpack-merge";

const { ModuleFederationPlugin } = require("webpack").container;

const devServerConfig: DevServerConfig = {
  port: 9999,
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
  plugins: [
    new HtmlWebpackPlugin(),

    new ModuleFederationPlugin({
      name: "hostApp",
      remotes: {
        aboutApp: "aboutApp@http://localhost:9001/remoteEntry.js",
        dashboardApp: "dashboardApp@http://localhost:9002/remoteEntry.js",
      },
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", cssLoaderWIthModules],
      },
    ],
  },
  output: {
    publicPath: "http://localhost:9999/",
  },
};

export default merge(commonConfig, devConfig);