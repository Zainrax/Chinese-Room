console.log("test");
var letters = ["A", "B", "C", "D", "E", "F", "G"];
var send = []
var length = 4
for (i = 0; i < length; i++){
    send[i] = letters[Math.floor(Math.random()*letters.length)]
}

var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('reply')
})

app.listen(3000);
