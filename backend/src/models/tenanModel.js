const pool = require('../db');

const getAllTenan = async () => {
  try {
    const result = await pool.query('SELECT * FROM tenan');
    return result.rows;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

module.exports = { getAllTenan };
