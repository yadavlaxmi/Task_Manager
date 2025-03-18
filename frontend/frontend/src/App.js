import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { getTasks, createTask, updateTask, deleteTask } from "./api";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  const handleCreateTask = async (newTask) => {
    const addedTask = await createTask(newTask);
    setTasks([...tasks, addedTask]);
  };

  const handleUpdateTask = async (id) => {
    const updatedTask = await updateTask(id, {
      title: "Updated Task",
      description: "Updated Description",
    });
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onCreate={handleCreateTask} />
      <TaskList tasks={tasks} onUpdate={handleUpdateTask} onDelete={handleDeleteTask} />
    </div>
  );
}

export default App;
