/* eslint-disable no-undef */
const config = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    app: __dirname + "/app/assets/javascripts/source/app.js"
  },
  output: {
    path: __dirname + "/app/assets/javascripts",
    publicPath: "/",
    filename: "global.js"
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
      test: /\.js$/,
      exclude: /(node_modules|vendors)/,
      use: [
        'babel-loader',
        'eslint-loader'
      ]
    }]
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm.js'
    }
  }
}

module.exports = [config];