(function () {
    'use strict';
    var express = require('express'),
        app     = express(),
        tournament = require('./routes/tournament.js');
    
    // set the root folder
    app.use('/webroot', function (req, res, next) {
        next();
    });
    app.get('/', function(req, res){
        res.sendFile(__dirname + '/webroot/index.html');
    });
    app.use('/tournament', tournament);
    
    
    var server = app.listen(3000, function () {
        var host = server.address().address,
            port = server.address().port;
        
        console.log('Example app listening at http://%s:%s', host, port);
    });
    
    app.on('connecting', function (){
        console.log('stating to connect');
    })
    .on('connected', function (){
        console.log(' connected to the database');
    });
    
    
}());