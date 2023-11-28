const kasirModel = require('../models/kasirModel');

// Menambahkan kasir baru
const insertKasir = async (req, res) => {
  const { nama, hp } = req.body;

  kasirModel.insertKasir(nama, hp, (err, result) => {
    if (!err) {
      res.send("Insert success");
    } else {
      res.status(500).send(err.message);
    }
  });
};

const updateKasir = async (req, res) => {
  const { kode_kasir } = req.params;
  const { nama, hp } = req.body;

  kasirModel.updateKasir(kode_kasir, nama, hp, (err, result) => {
    if (!err) {
      res.send("Update success");
    } else {
      res.status(500).send(err.message);
    }
  });
};

const getAllKasir = async (req, res) => {
  try {
    const result = await kasirModel.getAllKasir();
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching kasir data:', err.message);
    res.status(500).send(err.message);
  }
};

const deleteKasir = async (req, res) => {
  const { kode_kasir } = req.params;

  kasirModel.deleteKasir(kode_kasir, (err, result) => {
    if (!err) {
      res.send("Delete success");
    } else {
      res.status(500).send(err.message);
    }
  });
};

module.exports = {
  insertKasir,
  updateKasir,
  getAllKasir,
  deleteKasir
};