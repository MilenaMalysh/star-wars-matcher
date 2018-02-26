var webpack = require('webpack');
const path = require('path');

module.exports = {
   entry: path.resolve(__dirname, 'src','main.js'),
   output: {
      path:'/',
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