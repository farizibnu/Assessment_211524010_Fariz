const express = require('express');
const router = express.Router();
const tenanController = require('../controllers/tenanController');

// Route untuk mendapatkan semua tenan
router.get('/tenan', tenanController.getAllTenan);

module.exports = router;
