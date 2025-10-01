import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
return (
    <aside className="w-64 bg-white shadow-md p-6">
    <h2 className="text-xl font-bold mb-6">Student Dashboard</h2>
    <nav className="flex flex-col gap-4">
        <Link to="/profile" className="hover:text-blue-600">Profile</Link>
        <Link to="/internships" className="hover:text-blue-600">Internships</Link>
        <Link to="/applications" className="hover:text-blue-600">Applications</Link>
    </nav>
    </aside>
);
};

export default Sidebar;
