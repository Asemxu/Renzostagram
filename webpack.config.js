const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

/** @type {import('webpack').Configuration} */
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
            '.svelte'
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
                    'css-loader',
                ]
            },
            {
                test:/\.(woff|woff2)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        mimetype:"application/font-woff",
                        name:"[name]",
                        outputPath:"./",
                        publicPath:"./Fonts/",
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
        new CleanWebpackPlugin(),
        new Dotenv()
    ],
}