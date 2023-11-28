// models/tenanModel.js
const pool = require('../db');

// Menambahkan tenan baru
const insertTenan = (namaTenan, hp, callback) => {
  const query = 'INSERT INTO tenan (nama_tenan, hp) VALUES ($1, $2)';
  const values = [namaTenan, hp];
  pool.query(query, values, callback);
};

const updateTenan = (kode_tenan, namaTenan, hp, callback) => {
  const query = 'UPDATE tenan SET nama_tenan = $2, hp = $3 WHERE kode_tenan = $1';
  const values = [kode_tenan, namaTenan, hp];
  pool.query(query, values, callback);
};

const getAllTenan = async () => {
  const query = 'SELECT * FROM tenan';
  return pool.query(query);
};

const deleteTenan = (kode_tenan, callback) => {
  const query = 'DELETE FROM tenan WHERE kode_tenan = $1';
  const values = [kode_tenan];
  pool.query(query, values, callback);
};

module.exports = {
  insertTenan,
  updateTenan,
  getAllTenan,
  deleteTenan
};
