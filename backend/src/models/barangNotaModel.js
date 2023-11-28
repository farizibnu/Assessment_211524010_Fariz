const pool = require('../db');

const getAllBarangNota = async () => {
  try {
    const result = await pool.query('SELECT * FROM barang_nota');
    return result.rows;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

module.exports = { getAllBarangNota };
