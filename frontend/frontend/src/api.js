const BASE_URL = "process.env.REACT_APP_API_URL"; // Update with your backend URL

export const getTasks = async () => {
  const response = await fetch(`${BASE_URL}/tasks`);
  return response.json();
};

export const createTask = async (task) => {
  const response = await fetch(`${BASE_URL}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  return response.json();
};

export const updateTask = async (id, updatedTask) => {
  const response = await fetch(`${BASE_URL}/tasks/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedTask),
  });
  return response.json();
};

export const deleteTask = async (id) => {
  await fetch(`${BASE_URL}/tasks/${id}`, { method: "DELETE" });
};
