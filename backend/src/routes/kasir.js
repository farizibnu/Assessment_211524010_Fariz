const express = require('express');
const router = express.Router();
const kasirController = require('../controllers/kasirController');

// Route untuk mendapatkan semua kasir
router.get('/kasir', kasirController.getAllKasir);

module.exports = router;
