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

const updateTenan = async (req, res) => {
  const { id } = req.params;
  const { namaTenan, hp } = req.body;

  tenanModel.updateTenan(id, namaTenan, hp, (err, result) => {
    if (!err) {
      res.send('Update success');
    } else {
      res.status(500).send(err.message);
    }
  });
};

module.exports = {
  insertTenan,
  updateTenan,
};
