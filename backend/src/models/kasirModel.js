const pool = require('../db');

// Menambahkan kasir baru
const insertKasir = (nama, hp, callback) => {
  const query = 'INSERT INTO kasir (nama, hp) VALUES ($1, $2)';
  const values = [nama, hp];
  pool.query(query, values, callback);
};

module.exports = {
  insertKasir,
};
