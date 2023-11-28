const express = require('express');
const router = express.Router();
const notaController = require('../controllers/notaController');

// Route untuk mendapatkan semua nota
router.get('/nota', notaController.getAllNota);

module.exports = router;
