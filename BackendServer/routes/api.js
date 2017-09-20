var express             = require('express');
var app                 = express();
var router              = express.Router();
var mongoose            = require('mongoose');
var User                = require('../models/user');
var jwt                 = require('jsonwebtoken');
var config              = require('../config');
var middlewares         = require('./middleware');

app.set('superSecret', config.secret);

router.get('/', function(req, res){
    res.json({success: 'you have just contacted the jiffy express api you are now awesome.'});
});

router.get('/users', middlewares.authenticateToken, function(req, res){
    User.find({}, function(err, users){
        if (err) throw err;
        res.json(users);
    })
})

router.post('/authenticate', function(req, res){
    User.find({
        username: req.body.username
    }, function(err, foundUser){
        if (err) throw err;
        console.log(typeof foundUser[0]);
        if(!foundUser || typeof foundUser[0] == 'undefined'){
            res.json( {success: false, message: 'Authentication failed. User could not be found'} )   
        } else if (foundUser[0]) {
            console.log(foundUser[0].password);
            if(foundUser[0].password !== req.body.password){
                console.log(foundUser[0].password + req.body.password);
                res.json({success: false, message: 'Authentication failed, password incorrect'})
            } else {
                console.log(app.get('superSecret'))
                var token = jwt.sign(foundUser[0], app.get('superSecret'), {
                    expiresIn: 60*24
                });

                res.json({
                    success: true,
                    message: 'Congrats here is your token enjoy',
                    token: token
                })
            }
        }
    })
})

module.exports = router;