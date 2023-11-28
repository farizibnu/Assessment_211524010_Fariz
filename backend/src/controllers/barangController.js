const barangModel = require('../models/barangModel');

// Menambahkan barang baru
const insertBarang = async (req, res) => {
  const {nama_barang, satuan, harga_satuan, stok} = req.body;

  barangModel.insertBarang(nama_barang, satuan, harga_satuan, stok, (err, result) => {
    if (!err) {
      res.send("Insert success");
    } else {
      res.status(500).send(err.message);
    }
  });
};

module.exports = {
  insertBarang,
};
