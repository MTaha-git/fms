'use client'
import { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with your login logic
    alert(`Logging in with Username: ${username} and Password: ${password}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-cyan-500 to-blue-600">
      <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-lg">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Login</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username Field */}
          <div>
            <input
              type="text"
              className="w-full px-6 py-4 text-lg text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          
          {/* Password Field */}
          <div>
            <input
              type="password"
              className="w-full px-6 py-4 text-lg text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full py-4 text-white text-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
          >
            Login
          </button>
        </form>
        
        {/* Forgot Password Link */}
        <div className="text-center mt-6">
          <a href="#" className="text-cyan-500 text-sm hover:underline">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
}
