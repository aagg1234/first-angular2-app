const webpack = require('webpack');
const path = require('path');

/**
 * Webpack Plugins
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * Webpack Constants
 */
const ROOT = path.resolve(__dirname, 'src');
const DESTINATION = path.resolve(__dirname, 'dist');

const webpackConfigPlugins = [
  /**
   * Plugin: HtmlWebpackPlugin
   * Description: Simplifies creation of HTML files to serve your webpack bundles.
   * This is especially useful for webpack bundles that include a hash in the filename
   * which changes every compilation.
   *
   * See: https://github.com/ampedandwired/html-webpack-plugin
   */
  new HtmlWebpackPlugin({
    template: path.resolve(ROOT, 'index.html'),
    chunksSortMode: 'dependency'
  })
];

module.exports = {

    entry: './src/main.ts',
    output: {
        path: DESTINATION,
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
    },
    plugins: webpackConfigPlugins

};
