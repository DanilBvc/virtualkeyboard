/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: './src/assets/index.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist') 
    },
    plugins: [ 
        new HTMLWebpackPlugin({
            template: './src/assets/index.html'
        }),
        new CleanWebpackPlugin()
    ], 
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpeg|svg|gif|webp)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            }
        ]
    }
}