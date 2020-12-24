db.mekanlar.save({
    'ad': 'Starbucks',
    'adres': 'Centrum Garden Avm',
    'puan': 3,
    'imkanlar': ['Dunya Kahveleri', 'Kekler', 'Pastalar'],
    'koordinatlar': [37.781885, 30.566034],
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
        },
        {
            'gunler': 'Pazar',
            'kapali': true
        }
    ],
    'yorumlar': [{
        '_id': ObjectId(),
        'yorumYapan': 'Mehmet Can Hanaylı',
        'puan': 3,
        'tarih': new Date(),
        'yorumMetni': 'sadece kahve icin bile gidilir.'
    }]
})

db.mekanlar.update({ 'ad': 'Starbucks' }, {
    $push: {
        'yorumlar': {
            '_id': ObjectId(),
            'yorumYapan': 'Mustafa Burak Gündüz',
            'puan': 5,
            'tarih': new Date(),
            'yorumMetni': 'Kahveler mukemmel'
        }
    }
})