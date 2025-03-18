const Task = require('../models/taskModel');

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.getTasks();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createTask = async (req, res) => {
  const { title, description } = req.body;
  try {
    const task = await Task.createTask(title, description);
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const task = await Task.updateTask(id, title, description);
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const message = await Task.deleteTask(id);
    res.json(message);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
