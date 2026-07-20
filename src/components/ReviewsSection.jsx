import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwJ4cFq-UmzoWLthD4jD5mPWKQAD3SJ_dppe-N0eHEItpJnF9_yBZ9uSTrlElRzSC5CzQ/exec";

export default function ReviewsSection() {
  const [reviews, setReviews] = useState([]); // (optional if you fetch later)
  const [form, setForm] = useState({
    name: "",
    email: "",
    rating: 5,
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: "",
    error: "",
  });

  // (Optional) remove backend load
  useEffect(() => {
    // If later you want to fetch from Google Sheet, we can add here
    setReviews([]);
  }, []);

  const handleChange = (e) => {
    setForm((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: "", error: "" });

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        redirect: "follow",
        headers: {
          "Content-Type": "text/plain;charset=utf-8", // 🔥 CORS FIX
        },
        body: JSON.stringify(form),
      });

      setStatus({
        loading: false,
        success: "Thanks! Your review has been submitted.",
        error: "",
      });

      setForm({
        name: "",
        email: "",
        rating: 5,
        message: "",
      });
    } catch (err) {
      setStatus({
        loading: false,
        success: "",
        error: "Failed to submit review.",
      });
    }
  };

  return (
    <section className="py-20 px-6 md:px-16 bg-[#0B0713]">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
        Client <span className="text-[#D700FA]">Reviews</span>
      </h2>

      {/* (Optional) Reviews grid - currently empty */}
      {reviews.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-[#1A0F2F] border border-[#D700FA]/20 rounded-2xl p-6"
            >
              <div className="flex gap-1 mb-3 text-[#D700FA]">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-300 text-sm">{r.message}</p>
              <p className="text-white font-semibold mt-3">— {r.name}</p>
            </div>
          ))}
        </div>
      )}

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-[#1A0F2F] border border-[#D700FA]/20 rounded-2xl p-6 space-y-4"
      >
        <h3 className="text-white font-semibold text-lg">
          Leave a Review
        </h3>

        {status.success && (
          <div className="bg-green-500/20 text-green-300 text-sm rounded-lg px-3 py-2">
            {status.success}
          </div>
        )}

        {status.error && (
          <div className="bg-red-500/20 text-red-300 text-sm rounded-lg px-3 py-2">
            {status.error}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            required
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="bg-[#2b1a3b] text-white px-4 py-2.5 rounded-lg outline-none border border-white/10 focus:border-[#D700FA]"
          />

          <input
            required
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="bg-[#2b1a3b] text-white px-4 py-2.5 rounded-lg outline-none border border-white/10 focus:border-[#D700FA]"
          />
        </div>

        <select
          name="rating"
          value={form.rating}
          onChange={handleChange}
          className="w-full bg-[#2b1a3b] text-white px-4 py-2.5 rounded-lg outline-none border border-white/10 focus:border-[#D700FA]"
        >
          {[5, 4, 3, 2, 1].map((n) => (
            <option key={n} value={n}>
              {n} Stars
            </option>
          ))}
        </select>

        <textarea
          required
          rows={3}
          name="message"
          placeholder="Your review..."
          value={form.message}
          onChange={handleChange}
          className="w-full bg-[#2b1a3b] text-white px-4 py-2.5 rounded-lg outline-none border border-white/10 focus:border-[#D700FA]"
        />

        <button
          disabled={status.loading}
          type="submit"
          className="w-full bg-gradient-to-r from-[#FF6FD8] to-[#21D4FD] py-3 rounded-full font-semibold disabled:opacity-50"
        >
          {status.loading ? "Submitting..." : "Submit Review"}
        </button>
      </form>
    </section>
  );
}