import { Configuration } from "webpack";
import path from "path";

const babelLoader = {
  test: /\.tsx?$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env", "@babel/preset-typescript"],
    },
  },
};

export const commonConfig: Configuration = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  module: {
    rules: [
      {
        test: /\.(jpg|png)$/,
        type: "asset/resource",
      },
      babelLoader,
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx"],
  },
};
