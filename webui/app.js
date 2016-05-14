var express =require("express"),
    moment = require("moment"),
    solid = require("consolidate"),
    jade = require("jade");
    
var log4node = require("../modules/log4node/log4node.js");
var logger = new log4node("log.log");
var app = express();
 
 

app.engine('html', solid.jade);

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
    var msg = 'hello, cullen on ' + moment().format();
    res.send(msg);
    logger.log_debug(msg)
});

app.get('/hi', function (req, res, next) {
    //res.send('hello, cullen on ' + moment().format());
    console.log("hi");
    var data = {
        pageTitle:'hi',
        foo:true,
        bar: function(a){
            console.log(a);
        },
        youAreUsingJade: true
    };
    res.render('hi', data);
});

app.get('/upload', function(req, res, next){
    res.render('upload');
});
app.post('/upload', function(req, res, next){
    console.log(req);
});
app.listen(process.env.PORT || 3000, function(){
    console.log("app started: " + moment().format() + " on port: " + (process.env.PORT || 3000));
});