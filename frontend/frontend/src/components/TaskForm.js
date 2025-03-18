import React, { useState } from "react";

const TaskForm = ({ onCreate }) => {
  const [task, setTask] = useState({ title: "", description: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title.trim() || !task.description.trim()) return;
    onCreate(task);
    setTask({ title: "", description: "" }); // Reset form
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          required
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
