const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
const authRoutes = require('./routes/auth');
const barangRoutes = require('./routes/barang');
const barangjnsRoutes = require('./routes/barangjns');

app.use('/api', authRoutes);
app.use('/api', barangRoutes);
app.use('/api', barangjnsRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Selamat datang di API Stok Barang');
});

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server berjalan pada port ${PORT}`);
});
