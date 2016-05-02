var express = require('express');
var app = express();

var connections = [];
var users = [];

app.use(express.static('./public'));

var server = app.listen(3000);
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
    socket.once('disconnect', function(){
        connections.splice(connections.indexOf(socket),1);
        socket.disconnect();
        console.log('Disconnected: %s sockets connected', connections.length);
        io.emit('disconnect');
    });
    socket.on('messageAdded', function(payload){
        var newMessage = {
            timeStamp: payload.timeStamp,
            text: payload.text
        }
        io.emit('messageAdded', newMessage);
    });
    connections.push(socket);
    console.log('connected: %s sockets connected', connections.length);
});

console.log('server is running on port 3000');
