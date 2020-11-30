var express = require('express');
var router = express.Router();

/* GET home page. */
const anaSayfa = function(req, res, next) {
    res.render('mekanlar-liste', {
        'baslik': 'Mekan32 | Anasayfa',
        'footer': 'Mehmet Can Hanaylı',
        'sayfaBaslik': {
            'siteAd': 'Mekan 32',
            'aciklama': 'Isparta Civarındaki Mekanları Keşfedin!'
        },
        'mekanlar': [{
                'ad': 'Starbucks',
                'adres': 'Centrum Garden Avm',
                'puan': 3,
                'imkanlar': ['Dunya Kahveleri', 'Kekler', 'Pastalar'],
                'mesafe': '1km'
            },
            {
                'ad': 'Gloria',
                'adres': 'SDU Doğu Kampüs Avm',
                'puan': 2,
                'imkanlar': ['Kahve', 'Çay', 'Pastalar'],
                'mesafe': '1km'
            }
        ]
    });
}

const mekanBilgisi = function(req, res, next) {
    res.render('mekan-detay', {
        'baslik': 'Mekan Bilgisi',
        'sayfaBaslik': 'Starbucks',
        'mekanBilgisi': {
            'ad': 'Starbucks',
            'adres': 'Centrum Garden Avm',
            'puan': 3,
            'imkanlar': ['Dunya Kahveleri', 'Kekler', 'Pastalar'],
            'koordinatlar': {
                'enlem': '37.781885',
                'boylam': '30.566034'
            },
            'saatler': [{
                'gunler': 'Pazartesi-Cuma',
                'acilis': '07:00',
                'kapanis': '23:00',
                'kapali': false
            }, {
                'gunler': 'Cumartesi',
                'acilis': '09:00',
                'kapanis': '22:00',
                'kapali': false
            }, {
                'gunler': 'Pazar',
                'kapali': true
            }],
            'yorumlar': [{
                'yorumYapan': 'Mehmet Can Hanaylı',
                'puan': 3,
                'tarih': '27.11.2020',
                'yorumMetni': 'Kahveler lezzetli.'
            }]
        }
    });
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