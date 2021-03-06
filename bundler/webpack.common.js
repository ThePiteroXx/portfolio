const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, '../src/script.js'),
    output:
    {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, '../dist')
    },
    devtool: 'hidden-source-map',
    plugins:
    [  
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, '../static') },
                { from: path.resolve(__dirname, '../public'), to: '' }
            ]
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../src/index.html'),
            minify: true
        }),
        new MiniCSSExtractPlugin(),
    ],
    module:
    {
        rules:
        [
            // HTML
            {
                test: /\.(html)$/,
                use: ["html-loader"]
            },

            // JS
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:
                [
                    'babel-loader'
                ]
            },

            // SASS
            {
                test: /\.(s(a|c)ss)$/,
                use:
                [
                    MiniCSSExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "resolve-url-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        }
                    }
                ]
            },

            // Images
            {
                test: /\.(jpg|png|gif|svg)$/,
                type: 'asset/resource',
                generator:
                {
                    filename: 'assets/images/[hash][ext]'
                },
            },

            // Fonts
            {
                test: /\.(ttf|eot|otf|woff|woff2)$/,
                type: 'asset/resource',
                generator:
                {
                    filename: 'assets/font/[hash][ext]'
                }
            },

            // Models
            {
                test: /\.(glb|gltf|fbx|obj)$/,
                use:
                [
                    {
                        loader: 'file-loader',
                        options:
                        {
                            outputPath: 'assets/models/'
                        }
                    }
                ]
            },

            
            // MP4
            {
                test: /\.(mp4)$/,
                use:
                [
                    {
                        loader: 'file-loader',
                        options:
                        {
                            outputPath: 'assets/media/'
                        }
                    }
                ]
            },

            // Shaders
            {
                test: /\.(glsl|vs|fs|vert|frag)$/,
                exclude: /node_modules/,
                use: [
                    'raw-loader',
                    'glslify-loader'
                ]
            }
        ]
    }
}
