import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
    <h1 className="text-xl font-bold">Internship Portal</h1>
    <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
    </div>
    </nav>
);
}

