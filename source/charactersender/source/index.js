console.log("test");
var letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
var length = 4

var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    var send = []
    for (i = 0; i < length; i++){
        send[i] = letters[Math.floor(Math.random()*letters.length)]
    }
    res.send("test");
    // res.send(send);
  });





// var express = require('express');
// var app = express();

// app.get('/', function(req, res){
//     res.send('reply')
// })

// app.listen(3000);
