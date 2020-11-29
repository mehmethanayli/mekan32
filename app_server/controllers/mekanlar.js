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

//Mekanlar için Eklenen
const kahveDeryasi = function(req, res, next) {
    res.render('mekan-kahveDeryasi', { title: 'Kahve Deryası' });
}

const kahveDeresi = function(req, res, next) {
    res.render('mekan-kahveDeresi', { title: ' Kahve Deresi' });
}

const kahveDiyari = function(req, res, next) {
    res.render('mekan-kahveDiyari', { title: 'Kahve Diyarı' });
}

const kahveDunyasi = function(req, res, next) {
    res.render('mekan-kahveDunyasi', { title: 'Kahve Dünyası' });
}

const kazakKahvesi = function(req, res, next) {
    res.render('mekan-kazakKahvesi', { title: 'Kazak Kahvesi' })
}


module.exports = {
    anaSayfa,
    mekanBilgisi,
    yorumEkle,
    kahveDeryasi,
    kahveDeresi,
    kahveDiyari,
    kahveDunyasi,
    kazakKahvesi
}

module.exports.admin = function(req, res, next) {
    res.render('admin', { title: 'Admin' });
};