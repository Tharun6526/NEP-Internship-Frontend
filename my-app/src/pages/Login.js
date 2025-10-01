
import React, { useState } from "react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true); // toggle between login/signup
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
  const [role, setRole] = useState("student"); // default role
  const [name, setName] = useState(""); // only for signup

const handleLogin = async () => {
    const res = await fetch("http://localhost:5000/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, role }),
    });
    const data = await res.json();
    alert(data.message || `Logged in as ${role}!`);
};

const handleSignup = async () => {
    const res = await fetch("http://localhost:5000/api/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password, role }),
    });
    const data = await res.json();
    alert(data.message || `Signed up as ${role}!`);
};

return (
    <div className="flex justify-center items-center py-20">
    <div className="bg-white shadow-md rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold text-center mb-6">
        {isLogin ? "Login" : "Sign Up"}
        </h2>

        {/* Role Dropdown */}
        <div className="mb-4">
        <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-2 border rounded"
        >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="industrial">Industrial</option>
        </select>
        </div>

        {/* Name input for signup */}
        {!isLogin && (
        <input
            type="text"
            placeholder="Name"
            className="w-full p-2 mb-4 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        )}

        <input
        type="email"
        placeholder="Email"
        className="w-full p-2 mb-4 border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <input
        type="password"
        placeholder="Password"
        className="w-full p-2 mb-4 border rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />

        <button
        onClick={isLogin ? handleLogin : handleSignup}
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
        {isLogin ? "Login" : "Sign Up"}
        </button>

        <p className="text-center mt-4">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <span
            className="text-blue-600 cursor-pointer"
            onClick={() => setIsLogin(!isLogin)}
        >
            {isLogin ? "Sign Up" : "Login"}
        </span>
        </p>
    </div>
    </div>
);
}


