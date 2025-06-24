export default function FilterBar({ setFilter }) {
  const filters = [
    { label: "All", value: "all", color: "bg-gray-200 text-gray-800" },
    { label: "To-do", value: "todo", color: "bg-blue-200 text-blue-900" },
    { label: "Pending", value: "pending", color: "bg-yellow-200 text-yellow-900" },
    { label: "Completed", value: "completed", color: "bg-green-200 text-green-900" },
  ];

  return (
    <div className="flex flex-wrap gap-2 justify-center mt-6">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => setFilter(filter.value)}
          className={`px-4 py-2 rounded-full shadow-md cursor-pointer hover:scale-105 transition-all duration-200 font-medium ${filter.color} hover:shadow-lg`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
