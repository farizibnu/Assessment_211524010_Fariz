const express = require('express');
const router = express.Router();
const kasirController = require('../controllers/kasirController');

// Rute untuk menambahkan kasir baru
router.post('/kasir', kasirController.insertKasir);

router.put('/kasir/:kode_kasir', kasirController.updateKasir);

router.get('/kasir', kasirController.getAllKasir);

router.delete('/kasir/:kode_kasir', kasirController.deleteKasir);

module.exports = router;
