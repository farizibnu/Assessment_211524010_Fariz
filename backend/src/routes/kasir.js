const express = require('express');
const router = express.Router();
const kasirController = require('../controllers/kasirController');

// Rute untuk menambahkan kasir baru
router.post('/kasir', kasirController.insertKasir);

module.exports = router;
