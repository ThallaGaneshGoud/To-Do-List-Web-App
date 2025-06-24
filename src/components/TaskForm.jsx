import { useState } from "react";

export default function TaskForm({ setTasks }) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("todo");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      title,
      status,
      createdAt: new Date().toLocaleString(),
    };

    setTasks((prev) => [...prev, newTask]);
    setTitle("");
    setStatus("todo");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col cursor-pointer sm:flex-row items-center gap-4 bg-white p-6 rounded-xl shadow-lg mt-4 border border-gray-200 transition-all duration-300 hover:shadow-2xl"
    >
      <input
        className="w-full  sm:w-1/2 px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 shadow-sm"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="✍️ Enter your task..."
        required
      />
      <select
        className="w-full cursor-pointer sm:w-1/4 px-4 py-2 border border-purple-300 rounded-lg bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200 shadow-sm"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="todo">🕒 To-do</option>
        <option value="pending">⏳ Pending</option>
        <option value="completed">✅ Completed</option>
      </select>
      <button
        type="submit"
        className="w-full sm:w-auto cursor-pointer bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 font-semibold"
      >
        ➕ Add Task
      </button>
    </form>
  );
}
