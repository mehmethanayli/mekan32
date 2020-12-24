var mongoose = require('mongoose')
var Mekan = mongoose.model('mekan')
const cevapOlustur = function(res, status, content) {
    res
        .status(status)
        .json(content)

}


const yorumEkle = function(req, res) {
    cevapOlustur(res, 200, { "Yorum Ekle Durum": "basarili" });
}

const yorumGetir = function(req, res) {
    cevapOlustur(res, 200, { "Yorum Getir Durum": "basarili" });
}

const yorumGuncelle = function(req, res) {
    cevapOlustur(res, 200, { "Yorum Güncelle Durum": "basarili" });
}

const yorumSil = function(req, res) {
    cevapOlustur(res, 200, { "Yorum Sil Durum": "basarili" });
}

module.exports = {
    yorumEkle,
    yorumGetir,
    yorumSil,
    yorumGuncelle
}