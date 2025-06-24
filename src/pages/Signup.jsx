import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(form));
    alert("Signup successful! You can now log in.");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-300 via-blue-200 to-cyan-200 animate-fadeIn">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-80 space-y-5 transition-all duration-500 hover:shadow-2xl animate-fadeInUp"
      >
        <h2 className="text-3xl font-extrabold text-center text-gray-800 tracking-wide">
          Sign Up
        </h2>

        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200"
          name="firstName"
          placeholder="👤 First Name"
          onChange={handleChange}
          required
        />
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200"
          name="lastName"
          placeholder="🧑 Last Name"
          onChange={handleChange}
          required
        />
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
          name="email"
          type="email"
          placeholder="📧 Email"
          onChange={handleChange}
          required
        />
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
          name="password"
          type="password"
          placeholder="🔒 Password"
          onChange={handleChange}
          required
        />

        <button
          className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          🚀 Sign Up
        </button>

        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link
            className="text-blue-500 font-semibold hover:underline hover:text-blue-700 transition-all"
            to="/login"
          >
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}
