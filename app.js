
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs'); //Setting view as handlebars
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/webworkers', routes.webworkers);
app.get('/websockets', routes.websockets);
app.get('/websocket_res', routes.websocket_res);
app.get('/notifications', routes.notifications);
app.get('/webrtc', routes.webrtc);
app.get('/createjs', routes.createjs);
app.get('/backbonejs', routes.backbonejs);
app.get('/angularjs', routes.angularjs);

app.get('/todo/list',routes.listItems);

//http.createServer(app).listen(app.get('port'), function(){
//  console.log('Express server listening on port ' + app.get('port'));
//});

var server = http.createServer(app);
var io = require('socket.io').listen(server);
server.listen(3000);

io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log("FFFFFFF");
    console.log(data);
  });
});
