const webpack = require('webpack')
const webpackConfig = require('./webpack.build.config')
webpack(webpackConfig, function(error, stats) {
  if(error){
    throw error
  }
  console.log(stats.toString())
})