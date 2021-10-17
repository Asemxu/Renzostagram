const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'bundle.js'
    },
    resolve:{
        extensions:[
            '*',
            '.mjs',
            '.js',
            '.svelte',
            '.css',
            '.svg',
            '.jpg',
            '.jpeg',
            '.png',
            '.gif',
            '.jpg',
            '.gif'
        ]
    },
    module:{
        rules:[
            {
                test:/\.js?$/,
                exclude:/node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test:/\.svelte$/,
                exclude:/node_modules/,
                use:{
                    loader:'svelte-loader'
                }
            },
            {
                test: /\.css$/i,
                use: [ "css-loader"],
            },
            // {
            //     test: /\.(jpe?g|png|gif|svg)$/i,
            //     use: [
            //       'url-loader?limit=10000',
            //       'img-loader'
            //     ]
            // },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {}  
                  }
                ]
              },
              {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'file-loader'
              }

        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            inject:true,
            template:'./public/index.html',
            filename:'./index.html'
        })
    ]
}