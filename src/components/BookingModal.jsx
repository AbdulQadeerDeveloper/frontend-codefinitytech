import React, { useState } from "react";
import { X, CheckCircle2 } from "lucide-react";
import api from "../api/client";

// Parses "100,000 PKR" -> 100000
function parsePrice(priceStr) {
  const digits = priceStr.replace(/[^0-9]/g, "");
  return digits ? Number(digits) : 0;
}

export default function BookingModal({ site, onClose }) {
  const totalAmount = parsePrice(site.price);
  const advanceAmount = Math.round(totalAmount * 0.5);

  const [step, setStep] = useState("details"); // details -> payment -> done
  const [form, setForm] = useState({ name: "", email: "", phone: "", notes: "" });
  const [consultation, setConsultation] = useState(null);
  const [txId, setTxId] = useState("");
  const [payerAccount, setPayerAccount] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submitDetails = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await api.post("/consultations", {
        name: form.name,
        email: form.email,
        phone: form.phone,
        service: site.type,
        packageName: site.type,
        totalAmount,
        advanceAmount,
        projectDetails: form.notes,
      });
      setConsultation(res.data.consultation);
      setStep("payment");
    } catch (err) {
      setError(err?.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const submitPayment = async (e) => {
    e.preventDefault();
    if (!consultation) return;
    setLoading(true);
    setError("");
    try {
      await api.post(`/consultations/${consultation._id}/payment`, {
        transactionId: txId,
        payerAccountNumber: payerAccount,
        amountPaid: advanceAmount,
      });
      setStep("done");
    } catch (err) {
      setError(err?.response?.data?.message || "Could not submit payment details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
      <div className="bg-[#1A0F2F] border border-[#D700FA]/30 rounded-2xl w-full max-w-lg p-6 relative max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
          <X size={20} />
        </button>

        <h3 className="text-2xl font-bold text-white mb-1">{site.type}</h3>
        <p className="text-gray-400 text-sm mb-6">
          Total: <span className="text-white font-semibold">{totalAmount.toLocaleString()} PKR</span> ·{" "}
          50% Advance: <span className="text-[#D700FA] font-semibold">{advanceAmount.toLocaleString()} PKR</span>
        </p>

        {error && <div className="bg-red-500/20 text-red-300 text-sm rounded-lg px-3 py-2 mb-4">{error}</div>}

        {step === "details" && (
          <form onSubmit={submitDetails} className="space-y-4">
            <div>
              <label className="text-sm text-gray-300">Name</label>
              <input required name="name" value={form.name} onChange={handleChange}
                className="mt-1 w-full bg-[#2b1a3b] text-white px-4 py-2.5 rounded-lg outline-none border border-white/10 focus:border-[#D700FA]" />
            </div>
            <div>
              <label className="text-sm text-gray-300">Email</label>
              <input required type="email" name="email" value={form.email} onChange={handleChange}
                className="mt-1 w-full bg-[#2b1a3b] text-white px-4 py-2.5 rounded-lg outline-none border border-white/10 focus:border-[#D700FA]" />
            </div>
            <div>
              <label className="text-sm text-gray-300">Phone</label>
              <input required name="phone" value={form.phone} onChange={handleChange}
                className="mt-1 w-full bg-[#2b1a3b] text-white px-4 py-2.5 rounded-lg outline-none border border-white/10 focus:border-[#D700FA]" />
            </div>
            <div>
              <label className="text-sm text-gray-300">Project Notes (optional)</label>
              <textarea rows={3} name="notes" value={form.notes} onChange={handleChange}
                className="mt-1 w-full bg-[#2b1a3b] text-white px-4 py-2.5 rounded-lg outline-none border border-white/10 focus:border-[#D700FA]" />
            </div>
            <button disabled={loading} type="submit"
              className="w-full bg-gradient-to-r from-[#FF6FD8] to-[#21D4FD] py-3 rounded-full font-semibold disabled:opacity-50">
              {loading ? "Submitting..." : "Continue to Payment"}
            </button>
          </form>
        )}

        {step === "payment" && (
          <div className="space-y-4">
            <div className="bg-[#2b1a3b] rounded-xl p-4 text-sm text-gray-200 space-y-1">
              <p>Send your 50% advance via <b>Easypaisa</b> to:</p>
              <p className="text-[#D700FA] font-semibold text-base">03XX-XXXXXXX (Codeinfinitytech)</p>
              <p className="text-gray-400 text-xs">Replace with your real Easypaisa account number in the backend .env (EASYPAISA_ACCOUNT_NUMBER) before going live.</p>
              <p className="mt-2">Amount: <b>{advanceAmount.toLocaleString()} PKR</b></p>
            </div>
            <form onSubmit={submitPayment} className="space-y-4">
              <div>
                <label className="text-sm text-gray-300">Easypaisa Transaction ID</label>
                <input required value={txId} onChange={(e) => setTxId(e.target.value)}
                  className="mt-1 w-full bg-[#2b1a3b] text-white px-4 py-2.5 rounded-lg outline-none border border-white/10 focus:border-[#D700FA]" />
              </div>
              <div>
                <label className="text-sm text-gray-300">Your Easypaisa Account Number</label>
                <input required value={payerAccount} onChange={(e) => setPayerAccount(e.target.value)}
                  className="mt-1 w-full bg-[#2b1a3b] text-white px-4 py-2.5 rounded-lg outline-none border border-white/10 focus:border-[#D700FA]" />
              </div>
              <button disabled={loading} type="submit"
                className="w-full bg-gradient-to-r from-[#FF6FD8] to-[#21D4FD] py-3 rounded-full font-semibold disabled:opacity-50">
                {loading ? "Submitting..." : "Submit Payment for Verification"}
              </button>
            </form>
          </div>
        )}

        {step === "done" && (
          <div className="text-center py-6">
            <CheckCircle2 className="mx-auto text-[#D700FA] mb-4" size={48} />
            <p className="text-white font-semibold mb-2">Booking submitted!</p>
            <p className="text-gray-400 text-sm">
              We've emailed a confirmation to {form.email}. Our team will verify your payment and
              reach out to schedule your project kickoff.
            </p>
            <button onClick={onClose} className="mt-6 px-6 py-2.5 bg-white/10 rounded-full text-white hover:bg-white/20">
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
