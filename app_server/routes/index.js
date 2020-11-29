var express = require('express');
var router = express.Router();
var ctrlMekanlar = require('../controllers/mekanlar');
var ctrlDigerleri = require('../controllers/digerleri');

/* GET home page. */
router.get('/', ctrlMekanlar.anaSayfa);
router.get('/mekan', ctrlMekanlar.mekanBilgisi);
router.get('/mekan/yorum/yeni', ctrlMekanlar.yorumEkle);
router.get('/hakkinda', ctrlDigerleri.hakkinda);

/* Mekanların Route Adresleri */

router.get('/mekan/kahveDeryasi', ctrlMekanlar.kahveDeryasi);
router.get('/mekan/kahveDeresi', ctrlMekanlar.kahveDeresi);
router.get('/mekan/kahveDiyari', ctrlMekanlar.kahveDiyari);
router.get('/mekan/kahveDunyasi', ctrlMekanlar.kahveDunyasi);
router.get('/mekan/kazakKahvesi', ctrlMekanlar.kazakKahvesi);
module.exports = router;