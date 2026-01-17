// const Task = require('../models/taskModel');

// exports.getTasks = async (req, res) => {
//   try {
//     const tasks = await Task.getTasks();
//     res.json(tasks);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.createTask = async (req, res) => {
//   const { title, description } = req.body;
//   try {
//     const task = await Task.createTask(title, description);
//     res.status(201).json(task);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.updateTask = async (req, res) => {
//   const { id } = req.params;
//   const { title, description } = req.body;
//   try {
//     const task = await Task.updateTask(id, title, description);
//     res.json(task);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.deleteTask = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const message = await Task.deleteTask(id);
//     res.json(message);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


// In-memory array for testing
let tasks = [];

exports.getTasks = async (req, res) => {
  try {
    res.json(tasks); // return array
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }
    const task = { id: Date.now(), title, description };
    tasks.push(task);
    res.status(201).json(task);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const index = tasks.findIndex(t => t.id == id);
    if (index === -1) return res.status(404).json({ error: "Task not found" });
    tasks[index] = { ...tasks[index], title, description };
    res.json(tasks[index]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const index = tasks.findIndex(t => t.id == id);
    if (index === -1) return res.status(404).json({ error: "Task not found" });
    tasks.splice(index, 1);
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
