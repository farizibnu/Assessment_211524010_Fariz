// routes/tenan.js
const express = require('express');
const router = express.Router();
const tenanController = require('../controllers/tenanController');

// Rute untuk menambahkan tenan baru
router.post('/tenan', tenanController.insertTenan);

router.put('/tenan/:id', tenanController.updateTenan);

router.get('/tenan', tenanController.getAllTenan);



module.exports = router;
