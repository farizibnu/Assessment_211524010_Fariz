const pool = require('../db');

// Menambahkan kasir baru
const insertKasir = (nama, hp, callback) => {
  const query = 'INSERT INTO kasir (nama, hp) VALUES ($1, $2)';
  const values = [nama, hp];
  pool.query(query, values, callback);
};

const updateKasir = (kode_kasir, nama, hp, callback) => {
  const query = 'UPDATE kasir SET nama = $2, hp = $3 WHERE kode_kasir = $1';
  const values = [kode_kasir, nama, hp];
  pool.query(query, values, callback);
};

module.exports = {
  insertKasir,
  updateKasir,
};
