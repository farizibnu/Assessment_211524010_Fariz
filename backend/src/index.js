// Contoh untuk app.js
const express = require('express');
const app = express();

// Import rute-rute
const barangRoutes = require('./routes/barang');
// const kasirRoutes = require('./routes/kasir');
// const tenanRoutes = require('./routes/tenan');
// const notaRoutes = require('./routes/nota');
// const barangNotaRoutes = require('./routes/barangNota');

// Gunakan rute-rute
app.use('/api', barangRoutes);
// app.use('/api', kasirRoutes);
// app.use('/api', tenanRoutes);
// app.use('/api', notaRoutes);
// app.use('/api', barangNotaRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
