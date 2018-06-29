let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: ["./resources/js/app.js", "./resources/scss/app.scss"],
    output: {
        filename: "./js/app.bundle.js"
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ],
    },
    devServer: {
        historyApiFallback: true,
        port: 3000
    },
    plugins: [
        new ExtractTextPlugin({
            filename: './css/app.bundle.css',
            allChunks: true,
        }),
    ],
}