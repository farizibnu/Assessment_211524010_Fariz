const express = require('express');
const router = express.Router();
const barangController = require('../controllers/barangController');

router.post('/barang', barangController.insertBarang);

router.put('/barang/:kode_barang', barangController.updateBarang);

router.get('/barang', barangController.getAllBarang);

module.exports = router;
