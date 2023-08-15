const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    output: {
        filename: '[bundle].main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Custom template',
            // Load a custom template (lodash by default)
            template: './src/index.html'
        })
    ]
};
