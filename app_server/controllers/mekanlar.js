var express = require('express');
var router = express.Router();

/* GET home page. */
const anaSayfa = function(req, res, next) {
    res.render('mekanlar-liste', { title: 'Anasayfa' });
}

const mekanBilgisi = function(req, res, next) {
    res.render('mekan-detay', { title: 'Mekan Bilgisi' });
}

const yorumEkle = function(req, res, next) {
    res.render('yorum-ekle', { title: 'Yorum Ekle' });
}

module.exports = {
    anaSayfa,
    mekanBilgisi,
    yorumEkle
}

module.exports.admin = function(req, res, next) {
    res.render('admin', { title: 'Admin' });
};