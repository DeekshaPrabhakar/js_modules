const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'build'),
        filename: 'bundle.js',
        publicPath: 'build/'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/
            },
            {
                //use: ['style-loader', 'css-loader'],//first style and then css loader, right to left application
                loader: ExtractTextPlugin.extract({
                    loader: 'css-loader'
                }),
                test:/\.css$/
            },
            {
                test:/\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader', 
                        options: { limit: 40000 }
                    },
                    'image-webpack-loader'
                ]
            }
        ]
    },
    plugins:[
        new ExtractTextPlugin('style.css')
    ]
};
module.exports = config;