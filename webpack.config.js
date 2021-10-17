const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

/** @type {import('webpack').Configuration} */
module.exports ={
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'bundle.js'
    },
    mode:'development',
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
            '.gif',
            '.ttf',
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
                    loader:'svelte-loader',
                    options: {
						compilerOptions: {
							dev: !prod
						},
						emitCss: prod,
						hotReload: !prod
					}
                }
            },
            {
                test:/\.css|.styl$/i,
                use:[
                    MiniCssExractPlugin.loader,
                    'css-loader',
                ]
            },
            {
                test:/\.(ttf)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        limit:10000,
                        mimetype:"font/ttf",
                        name:"[name].[contenthash].[ext]",
                        outputPath:"./fonts/",
                        publicPath:"./Fonts",
                        esModule:false 
                    }
                }
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
        }),
        new MiniCssExractPlugin({
            filename:'assets/[name].[contenthash].css'
        })
    ],
    devtool: prod ? false : 'source-map',
}