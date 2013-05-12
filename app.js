
/**
 * Module dependencies.
 */
var express   = require('express'),
    resource  = require('express-resource'),
    http      = require('http'),
    path      = require('path'),
    envs      = require('./config/environments'),
    mongoose  = require('mongoose');

// express initialization
var app = express();
var config = envs[app.get('env')];
app.set('port', process.env.PORT || 3000);
app.set('views',  __dirname + '/views');
app.set('view options', { pretty: true });
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

if (config.errorHandler) {
  app.use(express.errorHandler());
}

mongoose.connect('mongodb://localhost/confroom' + app.get('env'));

// routes
require('./config/routes')(app)

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});