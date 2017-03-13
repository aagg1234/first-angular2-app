var webpack = require('webpack');

module.exports = {

    entry: './src/main.ts',
    output: {
        path: 'dist/',
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            emitErrors: false,
                            failOnHint: false,
                            resourcePath: 'src'
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']/*,
        modules: [
            ROOT, // Make sure root is src
            'node_modules'
        ]*/
    }

};
