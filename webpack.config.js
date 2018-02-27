const webpack = require('webpack');
const path = require('path');
const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
   entry: path.resolve(__dirname, 'src','index.js'),
   output: {
      path: path.join(__dirname, '/build'),
      filename: 'index.js',
   },
   devServer: {
      contentBase: 'public',
      inline: true,
      port: 8080
   },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            'React':     'react',
            _:     'underscore'
        }),
        new HTMLPlugin ({
            inject: true,
            template: path.resolve(__dirname, 'public','index.html'),
        })
    ],
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         },
          {
              test: /\.coffee$/,
              loader: [ 'coffee-loader' ]
          },
          { test: /\.css$/, loader: 'style-loader!css-loader' },
          {
              test: /\.(jpg|png|svg)$/,
              use: {
                  loader: "file-loader",
                  options: {
                      name: "images/[name].[ext]",
                      include: "./src/images"
                  },
              },
          },
      ],
   },
    resolve : {
        extensions: ['.js', '.jsx'],
        modules: ['node_modules', path.resolve(__dirname, 'src','components')]
    }
};