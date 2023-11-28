// routes/tenan.js
const express = require('express');
const router = express.Router();
const tenanController = require('../controllers/tenanController');

// Rute untuk menambahkan tenan baru
router.post('/tenan', tenanController.insertTenan);

router.put('/tenan/:kode_tenan', tenanController.updateTenan);

router.get('/tenan', tenanController.getAllTenan);

router.delete('/tenan/:kode_tenan', tenanController.deleteTenan);

module.exports = router;
