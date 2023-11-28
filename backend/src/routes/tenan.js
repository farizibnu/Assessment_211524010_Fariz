// routes/tenan.js
const express = require('express');
const router = express.Router();
const tenanController = require('../controllers/tenanController');

// Rute untuk menambahkan tenan baru
router.post('/tenan', tenanController.insertTenan);

module.exports = router;
