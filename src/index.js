module.exports = {
    entry: "./src/index.js", // Ensure this path exists
    output: {
      filename: "main.js",
      path: __dirname + "/dist",
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    devServer: {
      contentBase: "./public",
      hot: true,
    },
  };
  