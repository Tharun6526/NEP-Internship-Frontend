// Imports must always be at the top
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";

// Backend URL from environment variable
const API_URL = process.env.REACT_APP_API_URL;

export default function App() {
  // State to store data from backend
  const [internships, setInternships] = useState([]);

  // Fetch data from backend when component mounts
  useEffect(() => {
    fetch(`${API_URL}/api/internships`) // Replace with your actual endpoint
      .then((res) => res.json())
      .then((data) => setInternships(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          {/* Pass internships data as props to Home */}
          <Route path="/" element={<Home internships={internships} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}
