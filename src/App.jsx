import { Routes, Route, Navigate } from 'react-router-dom';
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import { isAuthenticated } from './utils/auth.js';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={isAuthenticated() ? <Home /> : <Navigate to="/login" />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
