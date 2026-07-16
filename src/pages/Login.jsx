import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError(err?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0615] flex items-center justify-center px-4 pt-20">
      <form onSubmit={submit} className="bg-[#1d0f2a] border border-[#dc00f9]/30 rounded-2xl p-8 w-full max-w-sm text-white">
        <h1 className="text-2xl font-bold mb-1">Welcome Back</h1>
        <p className="text-gray-400 text-sm mb-6">Log in to your account</p>

        {error && <div className="bg-red-500/20 text-red-300 text-sm rounded-lg px-3 py-2 mb-4">{error}</div>}

        <label className="text-sm text-gray-300">Email</label>
        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
          className="w-full mt-1 mb-4 bg-black/30 border border-white/10 rounded-lg px-3 py-2 outline-none focus:border-[#dc00f9]" />

        <label className="text-sm text-gray-300">Password</label>
        <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}
          className="w-full mt-1 mb-6 bg-black/30 border border-white/10 rounded-lg px-3 py-2 outline-none focus:border-[#dc00f9]" />

        <button disabled={loading}
          className="w-full bg-gradient-to-r from-[#dc00f9] to-[#a234fd] rounded-lg py-2.5 font-semibold disabled:opacity-50">
          {loading ? "Signing in..." : "Sign In"}
        </button>

        <p className="text-sm text-gray-400 mt-4 text-center">
          No account? <Link to="/register" className="text-[#dc00f9]">Register</Link>
        </p>
      </form>
    </div>
  );
}
