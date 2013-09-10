
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

//includes modify and create
app.post("/submit" ,function(req,res){
	var user = req.body.user;
	var order = req.body.order;
  var orders=storage.getItem('orders');
  var index=-1;
  for(var i=0;i<orders.length;i++){
    if(orders[i].user==user)
      index=i;
  }
  if(index==-1)
    orders.push({user:user,order:order});
  else
    orders[index]={user:user,order:order};
  storage.setItem('orders',orders);
  //res.json(orders);
  io.sockets.emit('update',orders);
});
// remove order
app.post("/removeOrder",function(req,res){
  var user=req.body.username;
  var orders=storage.getItem('orders');
  var index=-1;
  for(var i=0;i<orders.length;i++){
    if(orders[i].user==user)
      index=i;
  }
  if(index!=-1){
    orders.splice(index, 1);
    storage.setItem('orders',orders);
    io.sockets.emit('update',orders);
    
    
  }
  
  res.json("yeah");
  
});

app.get("/orders" ,function(req,res){
	var orders = storage.getItem('orders');
  //io.sockets.emit('update',orders);
	res.json(orders);
});

app.get('/getOrder',function(req,res){
  var orders = storage.getItem('orders');
  //console.log(req);
  var user=req.query.username;
  console.log(user);
  var index=-1;
  var order=new Array();
  for(var i=0;i<orders.length;i++){
    if(orders[i].user==user)
      index=i;
  }
  if(index!=-1){
    order=orders[index].order;
    console.log(order);
    
    
    res.json(order);
  }
});

app.get("/clearOrders",function(req,res){
  storage.setItem('orders',[]);
  routes.index(req,res);
});

var server=http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
var io=require('socket.io').listen(server);

io.sockets.on('connection',function(socket){
 
});