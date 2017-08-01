var express         = require ('express');
var app             = express();
var ejs             = require ('ejs');
var mongoose        = require('mongoose');
var bodyParser      = require("body-parser");
var methodOverride  = require("method-override");
var request         = require("request");


app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));

//Home Route
app.get('/', function(req, res){

  res.render('home', {workData: req.query.workArea});
})

var server = app.listen(3000, '0.0.0.0', function(){
  console.log('Listening to port 3000');
});
