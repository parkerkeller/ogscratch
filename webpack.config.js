const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,

  devServer: {
    publicPath: 'http://localhost:8080/build/',
    compress: true,
    historyApiFallback: true,
    proxy: {
      '/': 'http://localhost:3000/',
      '/api': 'http://localhost:3000',
<<<<<<< HEAD
      '/auth/google': 'http://localhost:3000'
=======
      '/chat': 'http://localhost:3000/',
>>>>>>> e4e6644... store is being updated by input box
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },

      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: ['style-loader', 'css-loader']
      },
    ]
  }
}