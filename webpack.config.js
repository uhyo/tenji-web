"use strict";
const path=require('path');
const webpack=require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports={
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    devtool: "source-map",
    entry: './lib-dist/index.js',
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
        //sourceMapFilename: "[file].map"
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: "file-loader?name=[name].[ext]"
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            './html/index.html',
        ]),
    ],
    devServer: {
        contentBase: "./dist",
        port: 8080,
    }
};
