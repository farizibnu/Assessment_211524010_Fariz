const express = require('express');
const router = express.Router();
const barangNotaController = require('../controllers/barangNotaController');

// Route untuk mendapatkan semua barang nota
router.get('/barangnota', barangNotaController.getAllBarangNota);

module.exports = router;
