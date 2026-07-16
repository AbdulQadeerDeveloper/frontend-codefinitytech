import React, { useMemo, useState } from "react";
import { FaCheckCircle, FaClock, FaVideo } from "react-icons/fa";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from "lucide-react";
import api from "../api/client";

const TIME_SLOTS = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

const MEETING_TYPES = [
  { id: "discovery", label: "Discovery Call", duration: "20 min" },
  { id: "consultation", label: "Project Consultation", duration: "30 min" },
  { id: "technical", label: "Technical Deep Dive", duration: "45 min" },
];

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getMonthMatrix(year, month) {
  const firstDay = new Date(year, month, 1);
  const startWeekday = firstDay.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells = [];
  for (let i = 0; i < startWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  return cells;
}

export default function BookConsultation() {
  const today = useMemo(() => new Date(), []);
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [meetingType, setMeetingType] = useState(MEETING_TYPES[1].id);

  const [form, setForm] = useState({ name: "", email: "", phone: "", notes: "" });
  const [submitted, setSubmitted] = useState(false);

  const cells = useMemo(() => getMonthMatrix(viewYear, viewMonth), [viewYear, viewMonth]);

  const isPastDate = (day) => {
    if (!day) return true;
    const cellDate = new Date(viewYear, viewMonth, day);
    const cmpToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return cellDate < cmpToday;
  };

  const isSunday = (day) => {
    if (!day) return false;
    return new Date(viewYear, viewMonth, day).getDay() === 0;
  };

  const goPrevMonth = () => {
    setSelectedDate(null);
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  };

  const goNextMonth = () => {
    setSelectedDate(null);
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [meetLink, setMeetLink] = useState(null);

  const generateMeetId = () => {
    // Google Meet style id: xxx-yyyy-zzz (lowercase letters)
    const chars = "abcdefghijklmnopqrstuvwxyz";
    const part = (len) =>
      Array.from({ length: len }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
    return `${part(3)}-${part(4)}-${part(3)}`;
  };

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !form.name || !form.email) return;
    setSubmitting(true);
    setSubmitError("");
    try {
      // NOTE: This generates a Meet-style link locally so every booking gets a
      // unique, shareable ID without needing Google Calendar API credentials.
      // To create a REAL Google Meet event automatically, this would need a
      // backend calling the Google Calendar API (OAuth + service account).
      const link = `https://meet.google.com/${generateMeetId()}`;

      await api.post("/consultations", {
        name: form.name,
        email: form.email,
        phone: form.phone,
        service: MEETING_TYPES.find((m) => m.id === meetingType)?.label,
        projectDetails: `${form.notes || ""}\n\nMeeting link: ${link}`.trim(),
        preferredDate: new Date(viewYear, viewMonth, selectedDate),
        preferredTime: selectedTime,
      });

      setMeetLink(link);
      setSubmitted(true);
    } catch (err) {
      setSubmitError(err?.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const formattedDate = selectedDate
    ? `${MONTH_NAMES[viewMonth]} ${selectedDate}, ${viewYear}`
    : null;

  if (submitted) {
    return (
      <div className="bg-[#0d0615] light:bg-[#f7f2ff] text-white light:text-[#1a0f2a] min-h-screen flex items-center justify-center px-6 py-24">
        <div className="max-w-lg w-full bg-[#1d0f2a] light:bg-white border border-[#dc00f9]/30 light:border-[#dc00f9]/40 light:shadow-md rounded-2xl p-10 text-center shadow-lg">
          <FaCheckCircle size={54} className="text-[#dc00f9] mx-auto mb-6" />
          <h1 className="text-3xl font-extrabold mb-3">Consultation Booked!</h1>
          <p className="text-gray-300 light:text-[#4a3b63] mb-6">
            Thanks {form.name}, your{" "}
            {MEETING_TYPES.find((m) => m.id === meetingType)?.label} is scheduled for{" "}
            <span className="text-[#dc00f9] font-semibold">
              {formattedDate} at {selectedTime}
            </span>
            . A confirmation with the meeting link has been sent to{" "}
            <span className="text-[#dc00f9]">{form.email}</span>.
          </p>

          {meetLink && (
            <div className="bg-[#2b1a3b] light:bg-[#f3ebff] rounded-xl p-4 mb-6 text-left">
              <p className="text-xs text-gray-400 light:text-[#7a6a94] mb-1">
                Your meeting link
              </p>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={meetLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#dc00f9] font-medium break-all"
                >
                  {meetLink}
                </a>
                <button
                  type="button"
                  onClick={() => navigator.clipboard?.writeText(meetLink)}
                  className="text-xs shrink-0 px-3 py-1.5 rounded-lg border border-[#dc00f9]/40 hover:bg-[#dc00f9]/10 transition"
                >
                  Copy
                </button>
              </div>
            </div>
          )}

          <a
            href="/"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#dc00f9] to-[#a234fd] rounded-xl font-semibold hover:opacity-90 transition"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0d0615] light:bg-[#f7f2ff] text-white light:text-[#1a0f2a]">
      {/* HERO */}
      <section className="max-w-[1200px] mx-auto px-6 pt-32 pb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Book Your <span className="text-[#dc00f9]">Free Consultation</span>
        </h1>
        <p className="mt-5 text-gray-300 light:text-[#4a3b63] max-w-2xl mx-auto">
          Pick a meeting type, choose a date and time that works for you, and our
          team will confirm your session — no cost, no obligation.
        </p>
      </section>

      {/* MAIN */}
      <section className="max-w-[1100px] mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* LEFT: Meeting types + calendar + time slots */}
        <div className="lg:col-span-3 space-y-8">
          {/* Meeting Type */}
          <div className="bg-[#1d0f2a] light:bg-white border border-[#dc00f9]/30 light:border-[#dc00f9]/40 light:shadow-md rounded-2xl p-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <FaVideo className="text-[#dc00f9]" /> Meeting Type
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {MEETING_TYPES.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setMeetingType(type.id)}
                  className={`rounded-xl p-4 text-left border transition ${
                    meetingType === type.id
                      ? "border-[#dc00f9] bg-[#dc00f9]/10"
                      : "border-gray-700 hover:border-[#dc00f9]/50"
                  }`}
                >
                  <p className="font-medium text-sm">{type.label}</p>
                  <p className="text-xs text-gray-400 light:text-[#7a6a94] mt-1">{type.duration}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Calendar */}
          <div className="bg-[#1d0f2a] light:bg-white border border-[#dc00f9]/30 light:border-[#dc00f9]/40 light:shadow-md rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <button
                type="button"
                onClick={goPrevMonth}
                className="p-2 rounded-lg hover:bg-white/10 transition"
                aria-label="Previous month"
              >
                <ChevronLeft size={18} />
              </button>
              <h3 className="font-semibold flex items-center gap-2">
                <CalendarIcon size={16} className="text-[#dc00f9]" />
                {MONTH_NAMES[viewMonth]} {viewYear}
              </h3>
              <button
                type="button"
                onClick={goNextMonth}
                className="p-2 rounded-lg hover:bg-white/10 transition"
                aria-label="Next month"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center text-xs text-gray-400 light:text-[#7a6a94] mb-2">
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                <div key={d}>{d}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {cells.map((day, idx) => {
                const disabled = isPastDate(day) || isSunday(day);
                const selected = day && day === selectedDate;
                return (
                  <button
                    type="button"
                    key={idx}
                    disabled={!day || disabled}
                    onClick={() => setSelectedDate(day)}
                    className={`aspect-square rounded-lg text-sm flex items-center justify-center transition
                      ${!day ? "invisible" : ""}
                      ${
                        disabled
                          ? "text-gray-600 light:text-gray-300 cursor-not-allowed"
                          : "hover:bg-[#dc00f9]/20 cursor-pointer"
                      }
                      ${selected ? "bg-[#dc00f9] text-white font-semibold" : "text-gray-200"}
                    `}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Time Slots */}
          {selectedDate && (
            <div className="bg-[#1d0f2a] light:bg-white border border-[#dc00f9]/30 light:border-[#dc00f9]/40 light:shadow-md rounded-2xl p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <FaClock className="text-[#dc00f9]" /> Available Times —{" "}
                {formattedDate}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {TIME_SLOTS.map((slot) => (
                  <button
                    type="button"
                    key={slot}
                    onClick={() => setSelectedTime(slot)}
                    className={`py-2 rounded-lg text-sm border transition ${
                      selectedTime === slot
                        ? "border-[#dc00f9] bg-[#dc00f9]/10 font-semibold"
                        : "border-gray-700 hover:border-[#dc00f9]/50"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT: Contact form */}
        <div className="lg:col-span-2">
          <form
            onSubmit={handleSubmit}
            className="bg-[#1d0f2a] light:bg-white border border-[#dc00f9]/30 light:border-[#dc00f9]/40 light:shadow-md rounded-2xl p-6 space-y-5 sticky top-28"
          >
            <h3 className="font-semibold text-lg">Your Details</h3>

            {selectedDate && selectedTime ? (
              <div className="bg-[#dc00f9]/10 border border-[#dc00f9]/30 rounded-lg p-3 text-sm">
                <p className="font-medium text-[#dc00f9]">
                  {MEETING_TYPES.find((m) => m.id === meetingType)?.label}
                </p>
                <p className="text-gray-300 light:text-[#4a3b63] mt-1">
                  {formattedDate} at {selectedTime}
                </p>
              </div>
            ) : (
              <p className="text-xs text-gray-400 light:text-[#7a6a94]">
                Select a date and time on the left to continue.
              </p>
            )}

            <div>
              <label className="text-sm text-gray-300 light:text-[#4a3b63]">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="mt-2 w-full bg-[#2b1a3b] light:bg-[#f3ebff] text-white light:text-[#1a0f2a] px-4 py-3 rounded-lg outline-none focus:border-[#dc00f9] border border-transparent"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300 light:text-[#4a3b63]">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="mt-2 w-full bg-[#2b1a3b] light:bg-[#f3ebff] text-white light:text-[#1a0f2a] px-4 py-3 rounded-lg outline-none focus:border-[#dc00f9] border border-transparent"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300 light:text-[#4a3b63]">Phone (optional)</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Your Phone"
                className="mt-2 w-full bg-[#2b1a3b] light:bg-[#f3ebff] text-white light:text-[#1a0f2a] px-4 py-3 rounded-lg outline-none focus:border-[#dc00f9] border border-transparent"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300 light:text-[#4a3b63]">What would you like to discuss?</label>
              <textarea
                rows={3}
                name="notes"
                value={form.notes}
                onChange={handleChange}
                placeholder="Briefly describe your project..."
                className="mt-2 w-full bg-[#2b1a3b] light:bg-[#f3ebff] text-white light:text-[#1a0f2a] px-4 py-3 rounded-lg outline-none focus:border-[#dc00f9] border border-transparent"
              />
            </div>

            {submitError && (
              <div className="bg-red-500/20 text-red-300 text-sm rounded-lg px-3 py-2">{submitError}</div>
            )}

            <button
              type="submit"
              disabled={!selectedDate || !selectedTime || submitting}
              className="w-full bg-gradient-to-r from-[#dc00f9] to-[#a234fd] py-3 rounded-lg font-medium hover:opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {submitting ? "Booking..." : "Confirm Free Consultation"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
