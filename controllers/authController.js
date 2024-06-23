const db = require('../config/db');
const bcrypt = require('bcrypt');

exports.register = (req, res) => {
  const { username, password } = req.body;
  const saltRounds = 10;
  const hashedPassword = bcrypt.hashSync(password, saltRounds);

  const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
  db.query(query, [username, hashedPassword], (err, results) => {
    if (err) {
      res.status(500).send('Registrasi gagal');
    } else {
      res.send('Registrasi berhasil');
    }
  });
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  const query = 'SELECT * FROM users WHERE username = ?';

  db.query(query, [username], (err, results) => {
    if (err) {
      res.status(500).send('Login gagal');
    } else if (results.length > 0) {
      const user = results[0];
      const isValidPassword = bcrypt.compareSync(password, user.password);

      if (isValidPassword) {
        res.send('Login sukses');
      } else {
        res.status(401).send('Password salah');
      }
    } else {
      res.status(404).send('Pengguna tidak ditemukan');
    }
  });
};
