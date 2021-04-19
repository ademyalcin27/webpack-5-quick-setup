const path = require('path');

module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test:/\.html$/,
                use:['html-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
            },
            {
                test:/\.(svg|png|jpg|jpeg|gif)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/img/[hash][ext][query]'
                }
            },
        ]
    },
    resolve: {
        alias: {
            'assets': path.resolve(__dirname, 'src/assets')
        }
    },
}