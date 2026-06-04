import React from "react";
import { useNavigate } from "react-router-dom"
function LogIn() {
  const navigate = useNavigate()
  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-end items-center px-40"
      style={{
        backgroundImage: "url('/images/login.png')",
      }}
    >
      {/* Login Card */}
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl w-[90%] max-w-md ">

        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
          Fresh Mart
        </h1>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border rounded-lg outline-none focus:border-green-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg outline-none focus:border-green-500"
          />

        </form>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition mt-4"
          onClick={() => navigate('/items')}
        >
          Login
        </button>
        <p className="text-center text-slate-900 mt-4">
          Don't have an account?{" "}
          <span className="text-blue-800 cursor-pointer hover:text-red-500 transition " onClick={() => navigate('/signup')}>
            Sign Up
          </span>
        </p>

      </div>
    </div>
  );
}

export default LogIn;
