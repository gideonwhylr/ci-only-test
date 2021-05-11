const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        index: './src/index.js',

      }, 
    plugins: [
        new HtmlWebpackPlugin({
          template: "./src/template.html",
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
            // Order is last to first
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1
                    }
                }, 
                'postcss-loader'
            ],
          },
          {
            test: /\.hbs$/,
            loader: 'handlebars-loader'
         }
        ],
      },

      devServer : {
          watchContentBase: true,
          contentBase: path.resolve(__dirname,'dist'),
          open: true
      }

};