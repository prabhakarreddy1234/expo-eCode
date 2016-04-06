var express = require('express'),
  bodyParser = require('body-parser');
module.exports = function(app, config) {
  app.set('views', config.rootPath + '/server/views');
  app.use(express.static(config.rootPath + '/public'));
  app.use(express.static(__dirname + '/server/views'));

  app.use(bodyParser.urlencoded({extended:true}));
  app.use(bodyParser.json());
}
