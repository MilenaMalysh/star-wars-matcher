var webpack = require('webpack');
const path = require('path');

module.exports = {
   entry: './main.js',
   output: {
      path:'/',
      filename: 'index.js',
   },
   devServer: {
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
                      name: "[path][name].[hash].[ext]",
                  },
              },
          },
      ],
   },
    resolve : {
        extensions: ['.js', '.jsx'],
        modules: ['node_modules', path.resolve(__dirname, 'components')]
    }
};