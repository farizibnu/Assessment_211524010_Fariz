const pool = require('../db');

const getAllNota = async () => {
  try {
    const result = await pool.query('SELECT * FROM nota');
    return result.rows;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

module.exports = { getAllNota };
