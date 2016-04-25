var express =require("express");
var moment = require("moment");
var app = express();

app.get('/', function (req, res) {
    res.send('hello, cullen on ' + moment().format());
    
});

app.listen(process.env.PORT || 3000, function(){
    console.log("app started: " + moment().format());
})