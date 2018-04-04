var webpackConfig = require('./webpack.config.js');


module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: ['app/tests/**/*.test.jsx'],     // (globbing pattern =>) match all files that end in '.test.jsx'
    preprocessors: {
      'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    client: {
      mocha: {
        timeout: '5000'     // after 5 sec, if test hasn't finished, just cancel
      }
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    } 
  });
};