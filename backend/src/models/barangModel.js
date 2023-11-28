const pool = require('../db');

// Menambahkan barang baru
const insertBarang = ( nama_barang, satuan, harga_satuan, stok, callback) => {
    const query =
      'INSERT INTO barang (nama_barang, satuan, harga_satuan, stok) VALUES ($1, $2, $3, $4)';
    const values =[nama_barang, satuan, harga_satuan, stok]
    pool.query(query, values, callback);
  };

module.exports = {
  insertBarang,
};
