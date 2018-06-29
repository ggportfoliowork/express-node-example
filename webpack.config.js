module.exports = {
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
    }
};