const express = require('express');
const router = express.Router();
const kasirController = require('../controllers/kasirController');

// Rute untuk menambahkan kasir baru
router.post('/kasir', kasirController.insertKasir);

router.put('/kasir/:kode_kasir', kasirController.updateKasir);

module.exports = router;
