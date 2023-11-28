const express = require('express');
const router = express.Router();
const barangController = require('../controllers/barangController');

// Rute untuk menambahkan barang baru
router.post('/barang', barangController.insertBarang);

module.exports = router;
