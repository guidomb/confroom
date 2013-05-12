var path = require('path')
  , rootPath = path.normalize(__dirname + '/..')

module.exports = {
  development: {
    root: rootPath,
    errorHandler: true
  },
  production: {
    errorHandler: false
  },
  staging: {
    errorHandler: true
  }
};