
var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

var config = require('./server/config/config')[env];

require('./server/config/express')(app, config);

require('./server/config/mongoose')(config);

require('./server/config/routes')(app);

app.use(express.static(__dirname + '/server/views'));
app.get('*', function(req, res) {
  res.sendfile('index.html');
});
app.listen(config.port);
console.log('Listening on port ' + config.port + '...');
