const express = require('express');
const bodyParser = require('body-parser');
const client = require('./db/index');
const app = express();

// Import rute-rute
const barangRoutes = require('./routes/barang');

// Gunakan rute-rute
app.use(bodyParser.json());

app.listen(3001, () => {
  console.log(`Server is running on port 3001`);
});

client.connect(err => {
  if(err){
      console.log(err.message);
  } else{
      console.log('Connected');
  }
})

app.use("/", barangRoutes)