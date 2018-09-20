var path = require('path')

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist/static'),
    publicPath: '/vue-inbox/static/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue'],
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ]
  },
  module: {
    rules: [
      // {
      //   test: /\.vue$/,
      //   use: 'eslint-loader',
      //   enforce: 'pre',
      //   exclude: /node_modules/
      // },
      // {
      //   test: /\.js$/,
      //   use: 'eslint-loader',
      //   enforce: 'pre',
      //   exclude: /node_modules/
      // },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: {
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: '[name].[ext]?[hash:7]'
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        use: 'file-loader'
      }
    ]
  }
}
