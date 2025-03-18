import React from "react";

const TaskList = ({ tasks, onUpdate, onDelete }) => {
  console.log("Tasks in TaskList:", tasks); // 🛠 Debugging

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.length === 0 ? (
          <p>No tasks available</p>
        ) : (
          tasks.map((task) => (
            <li key={task.id}>
              {task.title} - {task.description}
              <button onClick={() => onUpdate(task.id)}>Update</button>
              <button onClick={() => onDelete(task.id)}>Delete</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TaskList;
