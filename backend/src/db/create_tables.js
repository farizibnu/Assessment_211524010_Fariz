const pool = require('./index');

const createTables = async () => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    // Tabel Barang
    await client.query(`
      CREATE TABLE IF NOT EXISTS barang (
        kode_barang SERIAL PRIMARY KEY,
        nama_barang VARCHAR(255) NOT NULL,
        satuan VARCHAR(50) NOT NULL,
        harga_satuan INTEGER NOT NULL,
        stok INTEGER NOT NULL
      );
    `);

    // Tabel Kasir
    await client.query(`
      CREATE TABLE IF NOT EXISTS kasir (
        kode_kasir SERIAL PRIMARY KEY,
        nama VARCHAR(255) NOT NULL,
        hp VARCHAR(15) NOT NULL
      );
    `);

    // Tabel Tenan
    await client.query(`
      CREATE TABLE IF NOT EXISTS tenan (
        kode_tenan SERIAL PRIMARY KEY,
        nama_tenan VARCHAR(255) NOT NULL,
        hp VARCHAR(15) NOT NULL
      );
    `);

    // Tabel Nota
    await client.query(`
      CREATE TABLE IF NOT EXISTS nota (
        kode_nota SERIAL PRIMARY KEY,
        kode_tenan INTEGER REFERENCES tenan(kode_tenan),
        kode_kasir INTEGER REFERENCES kasir(kode_kasir),
        tgl_nota DATE NOT NULL,
        jam_nota TIME NOT NULL,
        jumlah_belanja INTEGER NOT NULL,
        diskon INTEGER NOT NULL,
        total INTEGER NOT NULL
      );
    `);

    // Tabel BarangNota
    await client.query(`
      CREATE TABLE IF NOT EXISTS barang_nota (
        kode_nota INTEGER REFERENCES nota(kode_nota),
        kode_barang INTEGER REFERENCES barang(kode_barang),
        jumlah_barang INTEGER NOT NULL,
        harga_satuan INTEGER NOT NULL,
        jumlah INTEGER NOT NULL
      );
    `);

    await client.query('COMMIT');
  } catch (e) {
    await client.query('ROLLBACK');
    throw e;
  } finally {
    client.release();
  }
};

createTables().catch(e => console.error(e.stack));
