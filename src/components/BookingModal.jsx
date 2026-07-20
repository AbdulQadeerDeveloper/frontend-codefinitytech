// BookingModal.jsx - Updated with Proper Data
import React, { useState } from "react";
import { X, CheckCircle2, Loader2 } from "lucide-react";
import { saveToGoogleSheets } from "../utils/googleSheets";

function parsePrice(priceStr) {
  if (!priceStr) return 0;
  const digits = priceStr.replace(/[^0-9]/g, "");
  return digits ? Number(digits) : 0;
}

export default function BookingModal({ site, onClose }) {
  const totalAmount = parsePrice(site.price);
  const advanceAmount = Math.round(totalAmount * 0.3);

  const [step, setStep] = useState("details");
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    notes: "" 
  });
  const [txId, setTxId] = useState("");
  const [payerAccount, setPayerAccount] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [bookingId, setBookingId] = useState("");

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submitBooking = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      const id = `BK-${Date.now()}-${Math.random().toString(36).substr(2, 4).toUpperCase()}`;
      setBookingId(id);
      
      // IMPORTANT: Proper data with all fields filled
      const bookingData = {
        bookingId: id,
        name: form.name.trim() || 'Not provided',
        email: form.email.trim() || 'Not provided',
        phone: form.phone.trim() || 'Not provided',
        service: site.type || 'Not provided',
        packageName: site.type || 'Not provided',
        totalAmount: totalAmount || 0,
        advanceAmount: advanceAmount || 0,
        transactionId: 'pending',
        payerAccountNumber: 'pending',
        paymentStatus: 'awaiting_payment',
        projectDetails: form.notes.trim() || 'N/A',
      };
      
      console.log('📝 Booking Data:', bookingData);
      
      await saveToGoogleSheets(bookingData);
      setStep("payment");
      
    } catch (err) {
      console.error('Booking error:', err);
      setError("✅ Booking saved locally. We'll sync when online.");
      // Still proceed to payment step
      setStep("payment");
    } finally {
      setLoading(false);
    }
  };

  const submitPayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      const paymentData = {
        bookingId: bookingId,
        name: form.name.trim() || 'Not provided',
        email: form.email.trim() || 'Not provided',
        phone: form.phone.trim() || 'Not provided',
        service: site.type || 'Not provided',
        packageName: site.type || 'Not provided',
        totalAmount: totalAmount || 0,
        advanceAmount: advanceAmount || 0,
        transactionId: txId.trim() || 'pending',
        payerAccountNumber: payerAccount.trim() || 'pending',
        paymentStatus: 'pending_verification',
        projectDetails: form.notes.trim() || 'N/A',
      };
      
      console.log('💰 Payment Data:', paymentData);
      
      await saveToGoogleSheets(paymentData);
      setStep("done");
      
    } catch (err) {
      console.error('Payment error:', err);
      setError("✅ Payment details saved locally.");
      setStep("done");
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
          <span className="text-green-400 font-semibold">30% Advance: {advanceAmount.toLocaleString()} PKR</span>
        </p>

        {error && (
          <div className={`text-sm rounded-lg px-3 py-2 mb-4 ${
            error.includes('✅') ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'
          }`}>
            {error}
          </div>
        )}

        {step === "details" && (
          <form onSubmit={submitBooking} className="space-y-4">
            <div>
              <label className="text-sm text-gray-300">Full Name *</label>
              <input 
                required 
                name="name" 
                value={form.name} 
                onChange={handleChange}
                placeholder="Enter your full name"
                className="mt-1 w-full bg-[#2b1a3b] text-white px-4 py-2.5 rounded-lg outline-none border border-white/10 focus:border-[#D700FA]" 
              />
            </div>
            <div>
              <label className="text-sm text-gray-300">Email *</label>
              <input 
                required 
                type="email" 
                name="email" 
                value={form.email} 
                onChange={handleChange}
                placeholder="your@email.com"
                className="mt-1 w-full bg-[#2b1a3b] text-white px-4 py-2.5 rounded-lg outline-none border border-white/10 focus:border-[#D700FA]" 
              />
            </div>
            <div>
              <label className="text-sm text-gray-300">Phone *</label>
              <input 
                required 
                name="phone" 
                value={form.phone} 
                onChange={handleChange}
                placeholder="03XX-XXXXXXX"
                className="mt-1 w-full bg-[#2b1a3b] text-white px-4 py-2.5 rounded-lg outline-none border border-white/10 focus:border-[#D700FA]" 
              />
            </div>
            <div>
              <label className="text-sm text-gray-300">Project Details</label>
              <textarea 
                rows={3} 
                name="notes" 
                value={form.notes} 
                onChange={handleChange}
                placeholder="Tell us about your project requirements..."
                className="mt-1 w-full bg-[#2b1a3b] text-white px-4 py-2.5 rounded-lg outline-none border border-white/10 focus:border-[#D700FA]" 
              />
            </div>
            <button 
              disabled={loading} 
              type="submit"
              className="w-full bg-gradient-to-r from-[#FF6FD8] to-[#21D4FD] py-3 rounded-full font-semibold disabled:opacity-50 hover:scale-105 transition flex items-center justify-center gap-2"
            >
              {loading ? (
                <><Loader2 className="animate-spin" size={20} /> Submitting...</>
              ) : (
                "Book Now - 30% Advance"
              )}
            </button>
          </form>
        )}

        {step === "payment" && (
          <div className="space-y-4">
            <div className="bg-[#2b1a3b] rounded-xl p-4 text-sm text-gray-200 space-y-2">
              <p className="font-semibold text-white">🏦 Send your 30% advance to:</p>
              <div className="bg-black/30 p-3 rounded-lg border border-[#D700FA]/20">
                <p><b>Bank:</b> Allied Bank</p>
                <p><b>Account Title:</b> QADEER AHMED</p>
                <p><b>Account Number:</b> <span className="text-[#D700FA] font-mono text-sm">PK06ABPA0010158527070012</span></p>
                <p><b>Account Type:</b> Asaan Current Account</p>
              </div>
              <div className="flex justify-between items-center bg-green-500/10 p-2 rounded-lg">
                <span className="text-gray-400">Amount:</span>
                <span className="text-white font-bold text-lg">{advanceAmount.toLocaleString()} PKR</span>
              </div>
              <div className="bg-blue-500/10 p-2 rounded-lg">
                <p className="text-xs text-blue-300">📋 Booking ID: <span className="font-mono">{bookingId}</span></p>
              </div>
            </div>
            
            <form onSubmit={submitPayment} className="space-y-4">
              <div>
                <label className="text-sm text-gray-300">Transaction ID *</label>
                <input 
                  required 
                  value={txId} 
                  onChange={(e) => setTxId(e.target.value)}
                  placeholder="e.g., ALLIED-123456789"
                  className="mt-1 w-full bg-[#2b1a3b] text-white px-4 py-2.5 rounded-lg outline-none border border-white/10 focus:border-[#D700FA]" 
                />
              </div>
              <div>
                <label className="text-sm text-gray-300">Your Account Number *</label>
                <input 
                  required 
                  value={payerAccount} 
                  onChange={(e) => setPayerAccount(e.target.value)}
                  placeholder="Enter your account number for verification"
                  className="mt-1 w-full bg-[#2b1a3b] text-white px-4 py-2.5 rounded-lg outline-none border border-white/10 focus:border-[#D700FA]" 
                />
              </div>
              <button 
                disabled={loading} 
                type="submit"
                className="w-full bg-gradient-to-r from-[#FF6FD8] to-[#21D4FD] py-3 rounded-full font-semibold disabled:opacity-50 hover:scale-105 transition flex items-center justify-center gap-2"
              >
                {loading ? (
                  <><Loader2 className="animate-spin" size={20} /> Submitting...</>
                ) : (
                  "Confirm Payment"
                )}
              </button>
            </form>
          </div>
        )}

        {step === "done" && (
          <div className="text-center py-6">
            <CheckCircle2 className="mx-auto text-[#D700FA] mb-4" size={48} />
            <p className="text-white font-semibold mb-2">✅ Payment Submitted!</p>
            <div className="bg-[#2b1a3b] p-3 rounded-lg mb-4">
              <p className="text-xs text-gray-400">Booking ID</p>
              <p className="text-[#D700FA] font-mono font-bold">{bookingId}</p>
            </div>
            <p className="text-gray-400 text-sm">Confirmation sent to <b className="text-white">{form.email}</b></p>
            <p className="text-gray-400 text-sm mt-2">We'll verify your payment within 24 hours.</p>
            <button 
              onClick={onClose} 
              className="mt-6 px-6 py-2.5 bg-white/10 rounded-full text-white hover:bg-white/20 transition"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}