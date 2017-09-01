var express     = require('express');
var app         = express();
var router      = express.Router();
var mongoose    = require('mongoose');
var User        = require('../models/user');
var jwt         = require('jsonwebtoken');
var config      = require('../config');

app.set('superSecret', config.secret);

var middlewares = {
    authenticateToken: authenticateToken
}
function authenticateToken (req, res, next){
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if(token){
        jwt.verify(token, app.get('superSecret'), function(err, decoded){
            if (err){
                return res.json({
                    success: false,
                    message: 'Failed to Authenticate token.'
                });
            } else {
                req.decoded = decoded;
                next();
            }
        })

    } else {
        res.status(403).send({
            success: false,
            message: 'No Token Provided'
        });
    }
}


module.exports = middlewares;