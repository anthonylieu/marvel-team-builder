const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rootroot',
  database: 'marvelteam_db'
});

// Get all characters
router.get('/characters', (req, res) => {
  const sql = 'SELECT * FROM Characters';
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get a character by ID
router.get('/characters/:id', (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM Characters WHERE id = ${id}`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result[0]);
  });
});
router.get('/', (req, res) => {
  res.render("homepage")
});
module.exports = router;