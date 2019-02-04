// webpack v4
const path = require('path');
const webpack = require( 'webpack' );
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
module.exports = {
  entry: { app: './src/main.js' }, // string | object | array    
  output: { filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),  // store bundle.js to 'dist' folder
    publicPath: "/"   // generate index.html & ( v1=/dist/ )
  },                       // append 'src=/<publicPath>/bundle.js' to <script> section
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: { loader: "babel-loader" } },
      { test: /\.vue$/, loader: 'vue-loader' },     
      { test: /\.html$/, use: [{ loader: "html-loader", options: { minimize: true } }] },
      // { test: /\.css$/, use: ['style-loader','css-loader'] },      
      { test: /\.css$/, use: [ MiniCssExtractPlugin.loader, 'css-loader'] },
      { test: /\.scss$/, use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] },
      { test: /\.styl$/, loader: ['style-loader', 'css-loader', 'stylus-loader'] },      
      { test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader', 
          options: { 
            name: '[name].[ext]', 
            outputPath: 'fonts/' } // index.html cannot see dist/fonts
             }]
      },
      { test: /\.(png|jpg|gif)$/, use: [{ 
          loader: 'file-loader', 
          options: { name: "./images/[hash].[ext]" } 
          }] }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].css", chunkFilename: "[id].css" }),
    new VueLoaderPlugin(),
    new VuetifyLoaderPlugin(),
    new HtmlWebPackPlugin({ filename: 'index.html', template: './src/index.html', inject: true }),
    new webpack.HotModuleReplacementPlugin(),
    new MomentLocalesPlugin({ localesToKeep: ['es-us', 'ru']  }),    
  ],
  resolve: {
    extensions: ['*', '.js', '.vue', '.json'],
    alias: { 
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve('./src') 
    },
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    open: true,
    index: 'index.html',       // call from here (port 8080 - webpack dev server - nodejs)
    proxy: [{                   // execute php programs here (port 80 - apache server )
      context: ['/php', '/api'],
      target: 'http://wp4project',
      changeOrigin: true,
      secure: false      
    }]
  }
};
