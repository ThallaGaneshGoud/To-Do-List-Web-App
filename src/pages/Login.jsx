import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const stored = JSON.parse(localStorage.getItem("user"));

    if (stored?.email === form.email && stored?.password === form.password) {
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "/";
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-yellow-200 via-pink-200 to-red-300 animate-fadeIn">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl space-y-6 w-80 transform transition-all duration-500 hover:shadow-2xl animate-fadeInUp"
      >
        <h2 className="text-3xl font-extrabold text-center text-gray-800 tracking-wide">
          Login
        </h2>

        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200"
          name="email"
          type="email"
          placeholder="📧 Email"
          onChange={handleChange}
          required
        />
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all duration-200"
          name="password"
          type="password"
          placeholder="🔒 Password"
          onChange={handleChange}
          required
        />
        <button
          className="w-full bg-gradient-to-r from-yellow-400 to-red-500 text-white py-2 rounded-lg font-semibold hover:from-yellow-500 hover:to-red-600 shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-105"
        >
          🚀 Login
        </button>

        <p className="text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-500 font-semibold hover:underline hover:text-blue-700 transition-all"
          >
            Create new
          </Link>
        </p>
      </form>
    </div>
  );
}
