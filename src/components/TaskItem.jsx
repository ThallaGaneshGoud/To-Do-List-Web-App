export default function TaskItem({ task, index, setTasks }) {
  const handleDelete = () => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setTasks((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], status: newStatus };
      return updated;
    });
  };

  return (
    <div className="bg-white cursor-pointer border border-gray-100 rounded-xl p-4 sm:p-5 flex justify-between items-start sm:items-center flex-col sm:flex-row gap-4 shadow-md hover:shadow-xl transition-all duration-300">
      {/* Task Info */}
      <div className="flex-1">
        <h3 className="text-lg cursor-pointer font-semibold text-gray-800">{task.title}</h3>
        <p className="text-sm cursor-pointer text-gray-500 mt-1">{task.createdAt}</p>
      </div>

      {/* Actions */}
      <div className="flex items-center cursor-pointer gap-4 w-full sm:w-auto">
        <select
          value={task.status}
          onChange={handleStatusChange}
          className={`px-3 py-1.5 rounded-md  cursor-pointer border text-sm font-medium shadow-sm focus:outline-none transition-colors duration-200
            ${
              task.status === "completed"
                ? "bg-green-100 cursor-pointer text-green-800 border-green-300"
                : task.status === "pending"
                ? "bg-yellow-100 cursor-pointer text-yellow-800 border-yellow-300"
                : "bg-blue-100 cursor-pointer text-blue-800 border-blue-300"
            }
          `}
        >
          <option value="todo">🕒 To-do</option>
          <option value="pending">⏳ Pending</option>
          <option value="completed">✅ Completed</option>
        </select>

        <button
          onClick={handleDelete}
          title="Delete Task"
          className="text-red-500 cursor-pointer hover:text-red-600 text-xl font-bold transition-transform hover:scale-110"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
