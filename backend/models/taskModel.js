const pool = require('../config/db');

const getTasks = async () => {
  const result = await pool.query('SELECT * FROM tasks');
  return result.rows;
};

const createTask = async (title, description) => {
  const result = await pool.query(
    'INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *',
    [title, description]
  );
  return result.rows[0];
};

const updateTask = async (id, title, description) => {
  const result = await pool.query(
    'UPDATE tasks SET title = $1, description = $2 WHERE id = $3 RETURNING *',
    [title, description, id]
  );
  return result.rows[0];
};

const deleteTask = async (id) => {
  await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
  return { message: 'Task deleted successfully' };
};

module.exports = { getTasks, createTask, updateTask, deleteTask };