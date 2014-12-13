(function () {
    'use strict';
    var express  = require('express'),
        router   = express.Router();
    
    // Routes
    router.route('/')
        .post(function (req, res) {
            res.send('Hey you tournaments I will create your tournament now');
        })
        .get(function (req, res) {
            res.send('Hey you get  tournaments I will create your tournament now');
        });
    
    router.route('/:id')
        .get(function (req, res) {
            res.send('Hey you tournaments go to this tournament ' + req.params.id);
        });
    
    
    module.exports = router;
}());