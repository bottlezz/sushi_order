
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var fs = require('fs');
var storage = require('node-persist');


storage.initSync();

if(!storage.getItem('orders')){
	storage.setItem('orders',[]);
}
console.log("orders: " + storage.getItem('orders'));

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
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


app.post("/submit" ,function(req,res){
	var user = req.body.user;
	var order = req.body.order;
  console.log("asdf");
	/*if(user && score){
		var scores = storage.getItem('scores');
		scores.push({'user':user,'score':score});
		scores.sort(function(a,b){
			return b.score - a.score;
		});
		console.log(scores);
		storage.setItem('scores',scores);
		res.json(scores);
	}else{
		res.send("BAD");
	}*/
  var orders=storage.getItem('orders');
  orders.push({user:user,order:order});
  storage.setItem('orders',orders);
  //res.json(orders);
  io.sockets.emit('update',orders);
});

// show scores
app.get("/orders" ,function(req,res){
	var orders = storage.getItem('orders');
	res.json(orders);
});
app.get("/clearOrders",function(req,res){
  storage.setItem('orders',[]);
});

var server=http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
var io=require('socket.io').listen(server);

io.sockets.on('connection',function(socket){
 
});