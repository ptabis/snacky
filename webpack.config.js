const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "production",

    devtool: "source-map",
    entry: "./src/ts/index.ts",
    resolve: {
        extensions: [".ts", ".js"]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],  
            }
        ]
    }
};
