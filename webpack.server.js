/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './server/index.js',
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: path.resolve('server-build'),
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
            },
            {
                test: /\.(css|s[ac]ss)$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    { loader: 'isomorphic-style-loader' },
                    // Translates CSS into CommonJS
                    {
                        loader: 'css-loader',
                        options: {
                            modules: false,
                        },
                    },
                    // Compiles Sass to CSS
                    { loader: 'sass-loader' },
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'assets',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.jsx', '.js'],
        alias: {
            api: path.resolve(__dirname, 'src/api/'),
            assets: path.resolve(__dirname, 'src/assets/'),
            components: path.resolve(__dirname, 'src/components/'),
            constants: path.resolve(__dirname, 'src/constants/'),
            containers: path.resolve(__dirname, 'src/containers/'),
            helpers: path.resolve(__dirname, 'src/helpers/'),
            languages: path.resolve(__dirname, 'src/languages/'),
            store: path.resolve(__dirname, 'src/store/'),
            styles: path.resolve(__dirname, 'src/styles/'),
        },
    },
};
