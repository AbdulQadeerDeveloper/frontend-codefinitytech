import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "", phone: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await register(form.name, form.email, form.password, form.phone);
      navigate("/");
    } catch (err) {
      setError(err?.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0615] flex items-center justify-center px-4 pt-20">
      <form onSubmit={submit} className="bg-[#1d0f2a] border border-[#dc00f9]/30 rounded-2xl p-8 w-full max-w-sm text-white">
        <h1 className="text-2xl font-bold mb-1">Create Account</h1>
        <p className="text-gray-400 text-sm mb-6">Register to book consultations and track your requests</p>

        {error && <div className="bg-red-500/20 text-red-300 text-sm rounded-lg px-3 py-2 mb-4">{error}</div>}

        <label className="text-sm text-gray-300">Name</label>
        <input required name="name" value={form.name} onChange={handleChange}
          className="w-full mt-1 mb-4 bg-black/30 border border-white/10 rounded-lg px-3 py-2 outline-none focus:border-[#dc00f9]" />

        <label className="text-sm text-gray-300">Email</label>
        <input type="email" required name="email" value={form.email} onChange={handleChange}
          className="w-full mt-1 mb-4 bg-black/30 border border-white/10 rounded-lg px-3 py-2 outline-none focus:border-[#dc00f9]" />

        <label className="text-sm text-gray-300">Phone</label>
        <input name="phone" value={form.phone} onChange={handleChange}
          className="w-full mt-1 mb-4 bg-black/30 border border-white/10 rounded-lg px-3 py-2 outline-none focus:border-[#dc00f9]" />

        <label className="text-sm text-gray-300">Password</label>
        <input type="password" required minLength={6} name="password" value={form.password} onChange={handleChange}
          className="w-full mt-1 mb-6 bg-black/30 border border-white/10 rounded-lg px-3 py-2 outline-none focus:border-[#dc00f9]" />

        <button disabled={loading}
          className="w-full bg-gradient-to-r from-[#dc00f9] to-[#a234fd] rounded-lg py-2.5 font-semibold disabled:opacity-50">
          {loading ? "Creating..." : "Create Account"}
        </button>

        <p className="text-sm text-gray-400 mt-4 text-center">
          Already have an account? <Link to="/login" className="text-[#dc00f9]">Log in</Link>
        </p>
      </form>
    </div>
  );
}
