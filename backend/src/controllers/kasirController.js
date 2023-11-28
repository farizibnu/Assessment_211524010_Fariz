const kasirModel = require('../models/kasirModel');

// Menambahkan kasir baru
const insertKasir = async (req, res) => {
  const { nama, hp } = req.body;

  kasirModel.insertKasir(nama, hp, (err, result) => {
    if (!err) {
      res.send("Insert success");
    } else {
      res.status(500).send(err.message);
    }
  });
};

module.exports = {
  insertKasir,
};
