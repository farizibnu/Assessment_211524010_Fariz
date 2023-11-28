// models/tenanModel.js
const pool = require('../db');

// Menambahkan tenan baru
const insertTenan = (namaTenan, hp, callback) => {
  const query = 'INSERT INTO tenan (nama_tenan, hp) VALUES ($1, $2)';
  const values = [namaTenan, hp];
  pool.query(query, values, callback);
};

const updateTenan = (id, namaTenan, hp, callback) => {
  const query = 'UPDATE tenan SET nama_tenan = $2, hp = $3 WHERE id_tenan = $1';
  const values = [id, namaTenan, hp];
  pool.query(query, values, callback);
};

const getAllTenan = async () => {
  const query = 'SELECT * FROM tenan';
  return pool.query(query);
};

module.exports = {
  insertTenan,
  updateTenan,
  getAllTenan
};
