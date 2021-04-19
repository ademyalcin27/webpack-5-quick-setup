
const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(common ,{
    mode: "development",
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, "dist"),
        publicPath: '',
        assetModuleFilename: 'assets/img/[hash][ext][query]'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    }
   
})