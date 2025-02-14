const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry:{
        main: "./scripts/main.js"
    },
    output:{
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    module:{
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_module/,
                use: "babel-loader"
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].miin.css"
        }),
        new HtmlWebpackPlugin({
            template: "./index.html",
            chunks: ["main"],
            filename: "index.html"
        })
    ],
    devServer: {
        static: "./dist",
        port: 9000
    },
    ignoreWarnings: [
        (warning) => warning.message.includes("Sass @import rules are deprecated")
    ]
}
