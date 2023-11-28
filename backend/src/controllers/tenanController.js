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
  const { kode_tenan } = req.params;
  const { namaTenan, hp } = req.body;

  tenanModel.updateTenan(kode_tenan, namaTenan, hp, (err, result) => {
    if (!err) {
      res.send('Update success');
    } else {
      res.status(500).send(err.message);
    }
  });
};

const getAllTenan = async (req, res) => {
  try {
    const result = await tenanModel.getAllTenan();
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching tenan data:', err.message);
    res.status(500).send(err.message);
  }
};

const deleteTenan = async (req, res) => {
  const { kode_tenan } = req.params;

  tenanModel.deleteTenan(kode_tenan, (err, result) => {
    if (!err) {
      res.send("Delete success");
    } else {
      res.status(500).send(err.message);
    }
  });
};

module.exports = {
  insertTenan,
  updateTenan,
  getAllTenan,
  deleteTenan
};
