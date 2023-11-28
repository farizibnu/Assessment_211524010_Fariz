// controllers/tenanController.js
const tenanModel = require('../models/tenanModel');

// Menambahkan tenan baru
const insertTenan = async (req, res) => {
  const { namaTenan, hp } = req.body;

  tenanModel.insertTenan(namaTenan, hp, (err, result) => {
    if (!err) {
      res.send('Insert success');
    } else {
      res.status(500).send(err.message);
    }
  });
};

module.exports = {
  insertTenan,
};
