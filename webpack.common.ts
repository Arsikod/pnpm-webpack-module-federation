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
  entry: {
    "greeting-page": path.resolve(__dirname, "src", "greeting-page.ts"),
    "image-page": path.resolve(__dirname, "src", "image-page.ts"),
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png)$/,
        type: "asset/resource",
      },
      babelLoader,
    ],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/static/",
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx"],
  },
};
