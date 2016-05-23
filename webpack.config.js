"use strict";
const path=require('path');
const webpack=require('webpack');

module.exports={
    devtool: "source-map",
    entry: {
        js: "./lib-dist/index.js",
        html: "./html/index.html"
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
        //sourceMapFilename: "[file].map"
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]"
            },
            {
                test: /\.json$/,
                loader: "json",
            }
        ]
    },
    plugins: [
    ],
    devServer: {
        contentBase: "./dist",
        port: 8080,
    }
};
