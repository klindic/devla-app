const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|svg|jpg|gif|ico)$/,
                use: ['file-loader?name=[name].[ext]']
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin
    ],
    devServer: {
        watchContentBase: true,
        contentBase: path.resolve(__dirname, 'dist'),
        open: true
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        },
    },
}