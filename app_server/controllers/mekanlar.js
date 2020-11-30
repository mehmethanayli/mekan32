var express = require('express');
var router = express.Router();

/* GET home page. */
const anaSayfa = function(req, res, next) {
    res.render('mekanlar-liste', {
        'baslik': 'Mekan32 | Anasayfa',
        'footer': 'Mehmet Hanaylı - Web Programlama 2020',
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
                'ad': 'Kahve Deryası',
                'adres': 'Optimum AVM',
                'puan': 5,
                'imkanlar': ['Kahve', 'Kekler', 'Pastalar', 'Çay'],
                'mesafe': '1.3km'
            },
            {
                'ad': 'Kahve Diyarı',
                'adres': 'Optimum Bornova Avm',
                'puan': 5,
                'imkanlar': ['Dunya Kahveleri', 'Kekler', 'Pastalar'],
                'mesafe': '1km'
            },
            {
                'ad': 'Kahve Sokağı',
                'adres': 'Forum İzmir Avm',
                'puan': 2,
                'imkanlar': ['Dünya Kahveleri', 'Filtre Kahveler', 'Yöresel Kahveler'],
                'mesafe': '10km'
            },
            {
                'ad': 'Kazak Kahvesi',
                'adres': 'Ispaş Avm',
                'puan': 3,
                'imkanlar': ['Türk Kahvesi Çeşitleri', 'Kazak Kahve Çeşitleri', 'Kuru Pastalar'],
                'mesafe': '0,9km'
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
        'footer': 'Mehmet Hanaylı - Web Programlama 2020',
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
                },
                {
                    'yorumYapan': 'Arif Kursavar',
                    'puan': 4,
                    'tarih': '27.12.2021',
                    'yorumMetni': 'Hizmet kalitesi seviyesi iyi, pastalar çok güzel...'
                }
            ]
        }
    });
}

const yorumEkle = function(req, res, next) {
    res.render('yorum-ekle', {
        title: 'Yorum Ekle',
        'footer': 'Mehmet Hanaylı - Web Programlama 2020',
    });
}


module.exports = {
    anaSayfa,
    mekanBilgisi,
    yorumEkle
}

module.exports.admin = function(req, res, next) {
    res.render('admin', { title: 'Admin' });
};