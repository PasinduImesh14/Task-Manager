const pool = require('../config');

async function createUser(username, passwordHash) {
  const [result] = await pool.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, passwordHash]);
  return result.insertId;
}

async function findUserByUsername(username) {
  const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
  return rows[0];
}

module.exports = { createUser, findUserByUsername };