
import { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskItem from "../components/TaskItem";
import FilterBar from "../components/FilterBar";
import { logout } from "../utils/auth";
import { motion } from "framer-motion";

export default function Home() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [filter, setFilter] = useState("all");

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Filter tasks based on selected filter
  const filteredTasks = tasks.filter((task) =>
    filter === "all" ? true : task.status === filter
  );

  // Handle logout
  const handleLogout = () => {
    logout();
    window.location.href = "/login";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-gradient-to-br cursor-pointer from-green-100 to-blue-100 p-6"
    >
      <div className="flex justify-between  cursor-pointer items-center mb-6">
        <h1 className="text-3xl font-bold cursor-pointer text-gray-800">📝 Task Manager</h1>
        <button className="btn bg-red-400 cursor-pointer hover:bg-red-500" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Task Form */}
        <TaskForm setTasks={setTasks} />

        {/* Filter Buttons */}
        <FilterBar setFilter={setFilter} />

        {/* Task List */}
        <div className="mt-6 space-y-4">
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task, index) => (
              <TaskItem
                key={index}
                task={task}
                index={index}
                setTasks={setTasks}
              />
            ))
          ) : (
            <p className="text-center  text-gray-600 mt-4">No tasks found.</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
