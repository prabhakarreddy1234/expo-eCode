var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    db: 'mongodb://localhost/expo-e',
    rootPath: rootPath,
    port: process.env.PORT || 27018
  },
  production: {
    rootPath: rootPath,
    db: '',
    port: process.env.PORT || 80
  }
}
