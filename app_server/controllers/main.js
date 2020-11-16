var express = require('express');
var router = express.Router();

/* GET home page. */
module.exports.index = function(req, res, next) {
    res.render('index', { title: 'Mehmet Can Hanaylı' });
};

module.exports.admin = function(req, res, next) {
    res.render('admin', { title: 'Admin' });
};