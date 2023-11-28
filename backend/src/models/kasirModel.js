const pool = require('../db');

const getAllKasir = async () => {
  try {
    const result = await pool.query('SELECT * FROM kasir');
    return result.rows;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

module.exports = { getAllKasir };
