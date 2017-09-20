var express         = require ('express');
var app             = express();
var ejs             = require ('ejs');
var mongoose        = require('mongoose');
var bodyParser      = require("body-parser");
var methodOverride  = require("method-override");
var request         = require("request");
var passport        = require("passport");
var User            = require("./models/user");
var Quote           = require('./models/quote');
var morgan          = require('morgan');
var jwt             = require("jsonwebtoken");

var apiRoutes       = require('./routes/api.js');
var quoteRoutes     = require('./routes/quote.js')
var middlewares     = require('./routes/middleware');
var config          = require('./config.js');


mongoose.connect(config.database, {
  useMongoClient: true,
  /* other options */
});


app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride("_method"));
app.set('supersecret', config.secret);

app.use(morgan('dev'));

app.use('/api', apiRoutes);
app.use('/quote', quoteRoutes);

//Home Route
app.get('/', function(req, res){
  res.json({message: 'good work this is the home of the api'});
});

app.get('/setup', function(req, res){

  var newQuotes = [
    {
      author: "Rick",
      genre: "comedy",
      quote: "Weddings are basically funerals with cake."
    }

  ];

  for(var i = 0; i < newQuotes.length; i++){
    (
      function(index){
      var newQuote = new Quote(newQuotes[index]);
      
      newQuote.save(function(err, quote){
        console.log('save' + quote);
        if (err){
          console.log(err);
        }
        });
      }
    )(i)
  }
    
  
  res.json({success: true});

  //   var newUser = new User ({
//     username: req.body.username,
//     password: req.body.password,
//     admin: req.body.admin
//   })

//   brian.save(function(err, user){
//     if(err) throw err
//     console.log('user account has been created');
//     res.json( {success: true} );
//   })
});

app.post('/login', function(req, res){
  User.findOne({username: req.body.username}, function(err, user){
    console.log(user);
    if(err){
      console.log(err)
    } else {
      res.json({ user: user });
    }
  });
});

app.post('/user/create', function(req, res){
  User.create({username: req.body.username, password: req.body.password, admin: req.body.admin}, function(err, user){
    if(err){
      console.log(err);
    } else {
      console.log("new user has been created" + user);
      res.json({message: 'success user ' + user.username + ' has been created successfully.'});
    }
  });
});

app.post('/addtodo', function(req, res){
  //add to todo on the user model
});

var server = app.listen(3000, '0.0.0.0', function(){
  console.log('Listening to port 3000');
});
