const pool = require('../db');

const getAllBarangNota = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM barang_nota');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getAllBarangNota };
