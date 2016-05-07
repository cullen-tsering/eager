var express =require("express"),
 moment = require("moment"),
 solid = require("consolidate"),
    jade = require("jade"),
 app = express();

app.engine('html', solid.jade);

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
    res.send('hello, cullen on ' + moment().format());
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
app.listen(process.env.PORT || 3000, function(){
    console.log("app started: " + moment().format());
});