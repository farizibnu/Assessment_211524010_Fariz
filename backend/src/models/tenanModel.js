// models/tenanModel.js
const pool = require('../db');

// Menambahkan tenan baru
const insertTenan = (namaTenan, hp, callback) => {
  const query = 'INSERT INTO tenan (nama_tenan, hp) VALUES ($1, $2)';
  const values = [namaTenan, hp];
  pool.query(query, values, callback);
};

module.exports = {
  insertTenan,
};
