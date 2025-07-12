const pool = require('../config');

async function getTasks(userId, filter = '', sort = '') {
  let query = 'SELECT * FROM tasks WHERE user_id = ?';
  const params = [userId];
  if (filter) {
    query += ' AND (title LIKE ? OR description LIKE ?)';
    params.push(`%${filter}%`, `%${filter}%`);
  }
  if (sort === 'asc' || sort === 'desc') {
    query += ' ORDER BY id ' + sort;
  }
  const [rows] = await pool.query(query, params);
  return rows;
}

async function createTask(userId, title, description) {
  const [result] = await pool.query(
    'INSERT INTO tasks (user_id, title, description) VALUES (?, ?, ?)',
    [userId, title, description]
  );
  return result.insertId;
}

async function updateTask(taskId, userId, title, description) {
  await pool.query(
    'UPDATE tasks SET title = ?, description = ? WHERE id = ? AND user_id = ?',
    [title, description, taskId, userId]
  );
}

async function deleteTask(taskId, userId) {
  await pool.query('DELETE FROM tasks WHERE id = ? AND user_id = ?', [taskId, userId]);
}

module.exports = { getTasks, createTask, updateTask, deleteTask };