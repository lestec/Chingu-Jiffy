var express             = require('express');
var app                 = express();
var router              = express.Router();
var mongoose            = require('mongoose');
var Quote                = require('../models/quote');
var jwt                 = require('jsonwebtoken');
var config              = require('../config');
var middlewares         = require('./middleware');

app.set('superSecret', config.secret);

router.get('/', middlewares.authenticateToken, function(req, res){
    res.json({success: 'you have contacted the quote part of the api.'});
});

router.get('/getquote', middlewares.authenticateToken, function(req, res){
    Quote.find({}, function(err, quote){
        if (err) throw err;
        res.json(quote);
    })
})


module.exports = router;