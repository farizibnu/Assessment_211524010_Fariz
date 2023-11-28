const pool = require('../db');

// Menambahkan barang baru
const insertBarang = (nama_barang, satuan, harga_satuan, stok, callback) => {
  const query = 'INSERT INTO barang (nama_barang, satuan, harga_satuan, stok) VALUES ($1, $2, $3, $4)';
  const values = [nama_barang, satuan, harga_satuan, stok];
  pool.query(query, values, callback);
};

// Memperbarui barang berdasarkan Kode Barang
const updateBarang = (kode_barang, nama_barang, satuan, harga_satuan, stok, callback) => {
    const query = 'UPDATE barang SET nama_barang = $2, satuan = $3, harga_satuan = $4, stok = $5 WHERE kode_barang = $1';
    const values = [kode_barang, nama_barang, satuan, harga_satuan, stok];
    pool.query(query, values, callback);
  };

module.exports = {
  insertBarang,
  updateBarang,
};
