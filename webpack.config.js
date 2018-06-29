module.exports = {
    mode: 'development',
    entry: "./resources/js/app.js",
    output: {
        filename: "./js/bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        port: 3000
    }
}