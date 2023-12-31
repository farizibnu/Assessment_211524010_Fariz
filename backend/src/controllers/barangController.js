const barangModel = require('../models/barangModel');

// Menambahkan barang baru
const insertBarang = async (req, res) => {
  const { kode_barang, nama_barang, satuan, harga_satuan, stok } = req.body;

  barangModel.insertBarang(kode_barang, nama_barang, satuan, harga_satuan, stok, (err, result) => {
    if (!err) {
      res.send("Insert success");
    } else {
      res.status(500).send(err.message);
    }
  });
};

// Memperbarui barang berdasarkan Kode Barang
const updateBarang = async (req, res) => {
  const { kode_barang } = req.params;
  const { nama_barang, satuan, harga_satuan, stok } = req.body;

  barangModel.updateBarang(kode_barang, nama_barang, satuan, harga_satuan, stok, (err, result) => {
    if (!err) {
      res.send("Update success");
    } else {
      res.status(500).send(err.message);
    }
  });
};

const getAllBarang = async (req, res) => {
  try {
    const result = await barangModel.getAllBarang();
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching data:', err.message);
    res.status(500).send(err.message);
  }
};

const deleteBarang = async (req, res) => {
  const { kode_barang } = req.params;

  try {
    await barangModel.deleteBarang(kode_barang);
    res.send("Delete success");
  } catch (err) {
    console.error('Error deleting data:', err.message);
    res.status(500).send(err.message);
  }
};

module.exports = {
  insertBarang,
  updateBarang,
  getAllBarang,
  deleteBarang,
};