// src/pages/ContactPage.jsx
import React, { useState, useRef } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaClock,
} from "react-icons/fa";

// ============================================================
// ENVIRONMENT VARIABLES (No Backend!)
// ============================================================
const ELASTIC_EMAIL_API_KEY = import.meta.env.VITE_ELASTIC_EMAIL_API_KEY || '676B17DE945D89810BC5E04704C2768A3B725DFA5B2B457BE0FBCA71C1F6687D8ECD30BFEB8FC0E6492BEB4D634BBCCD';
const ELASTIC_EMAIL_FROM = import.meta.env.VITE_ELASTIC_EMAIL_FROM || 'no-reply@api.elasticemail.com';
const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL || 'qadeerdeveloper312@gmail.com';
const GOOGLE_SHEETS_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL || 'https://script.google.com/macros/s/AKfycbyb3kphGghZeo31RS-QXxS1-2on0-SOS92Uq6w6FSL8vvjjT0rV5IF5sk8zZ18t_fw1Lw/exec';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: "",
    error: "",
  });

  const formRef = useRef(null);

  const contactInfo = {
    address: "H-3 Block, Office No. 1, Near Jinnah Library, Trust Plaza, Gujranwala",
    email: "qadeerdeveloper312@gmail.com",
    phone: "+92 317 0704493",
    whatsapp: "923170704493",
    hours: "Mon - Fri: 9:00 AM - 6:00 PM",
  };

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/share/19HTAjwpuC/",
      color: "hover:text-[#1877F2]",
      label: "Facebook",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/mehar_abdulqadeer_11",
      color: "hover:text-[#E4405F]",
      label: "Instagram",
    },
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/muhammad-qadeer-62518a214",
      color: "hover:text-[#0A66C2]",
      label: "LinkedIn",
    },
    {
      icon: <FaWhatsapp />,
      url: `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(
        "Hi CodefinityTech! 👋 I visited your website and I'm interested in your services."
      )}`,
      color: "hover:text-[#25D366]",
      label: "WhatsApp",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (status.error || status.success) {
      setStatus({ loading: false, success: "", error: "" });
    }
  };

  // ============================================================
  // 1. SEND EMAIL VIA ELASTIC EMAIL API (Frontend Only)
  // ============================================================
  const sendEmail = async (toEmail, subject, htmlContent, replyTo = null) => {
    console.log(`📧 Sending email to: ${toEmail}`);
    
    try {
      const params = new URLSearchParams({
        apikey: ELASTIC_EMAIL_API_KEY,
        from: ELASTIC_EMAIL_FROM,
        fromName: 'CodefinityTech',
        to: toEmail,
        subject: subject,
        bodyHtml: htmlContent,
        replyTo: replyTo || ADMIN_EMAIL,
        isTransactional: 'true',
        trackOpens: 'true',
        trackClicks: 'true',
        charset: 'UTF-8',
      });

      const response = await fetch('https://api.elasticemail.com/v2/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params,
      });

      const result = await response.json();
      
      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to send email');
      }

      console.log(`✅ Email sent to ${toEmail}`);
      return result;
    } catch (error) {
      console.error(`❌ Email error (${toEmail}):`, error);
      throw error;
    }
  };

  // ============================================================
  // 2. SAVE TO GOOGLE SHEETS (Frontend Only)
  // ============================================================
  const saveToGoogleSheets = async (data) => {
    if (!GOOGLE_SHEETS_URL) {
      console.warn('⚠️ Google Sheets URL not configured');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('phone', data.phone || 'Not provided');
      formData.append('message', data.message);
      formData.append('timestamp', new Date().toLocaleString('en-US', {
        dateStyle: 'full',
        timeStyle: 'medium'
      }));

      await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });
      
      console.log('✅ Saved to Google Sheets');
    } catch (error) {
      console.error('❌ Google Sheets error:', error);
    }
  };

  // ============================================================
  // 3. EMAIL TEMPLATES
  // ============================================================
  const generateAdminEmail = (name, email, phone, message) => {
    const date = new Date().toLocaleString('en-US', {
      dateStyle: 'full',
      timeStyle: 'medium'
    });

    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>New Contact Form Submission</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Segoe UI', Arial, sans-serif; background: #0d0615; color: #fff; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #1a0f2a, #0d0615); border-radius: 20px; border: 1px solid rgba(168, 85, 247, 0.3); overflow: hidden; }
    .header { background: linear-gradient(135deg, #dc00f9, #a234fd); padding: 30px; text-align: center; }
    .header h1 { font-size: 24px; color: #fff; }
    .content { padding: 30px; }
    .info-item { background: rgba(255,255,255,0.05); padding: 15px; border-radius: 12px; margin-bottom: 12px; border-left: 3px solid #dc00f9; }
    .label { font-size: 12px; color: #a234fd; text-transform: uppercase; letter-spacing: 1px; }
    .value { font-size: 16px; color: #fff; margin-top: 5px; }
    .message-box { background: rgba(255,255,255,0.05); padding: 20px; border-radius: 12px; border: 1px solid rgba(168,85,247,0.2); margin-top: 10px; }
    .message-box p { color: #e0d0f0; line-height: 1.6; }
    .footer { padding: 20px; text-align: center; border-top: 1px solid rgba(168,85,247,0.1); }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📩 New Contact Form Submission</h1>
      <p style="color: rgba(255,255,255,0.9);">Someone has reached out to you</p>
    </div>
    <div class="content">
      <h2 style="color: #dc00f9; margin-bottom: 20px;">📋 Contact Details</h2>
      <div class="info-item"><div class="label">👤 Name</div><div class="value">${name}</div></div>
      <div class="info-item"><div class="label">📧 Email</div><div class="value"><a href="mailto:${email}" style="color: #dc00f9; text-decoration: none;">${email}</a></div></div>
      <div class="info-item"><div class="label">📱 Phone</div><div class="value">${phone || 'Not provided'}</div></div>
      <div class="info-item"><div class="label">⏰ Submitted At</div><div class="value">${date}</div></div>
      <div class="message-box">
        <div class="label">💬 Message</div>
        <p>${message.replace(/\n/g, '<br>')}</p>
      </div>
    </div>
    <div class="footer">
      <p style="color: #6a5a7a;">📍 CodefinityTech · Gujranwala</p>
    </div>
  </div>
</body>
</html>
    `;
  };

  const generateClientEmail = (name, message) => {
    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Thank You for Contacting CodefinityTech</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Segoe UI', Arial, sans-serif; background: #0d0615; color: #fff; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #1a0f2a, #0d0615); border-radius: 20px; border: 1px solid rgba(168, 85, 247, 0.3); overflow: hidden; }
    .header { background: linear-gradient(135deg, #dc00f9, #a234fd); padding: 40px 30px; text-align: center; }
    .header h1 { font-size: 28px; color: #fff; }
    .content { padding: 30px; }
    .greeting { font-size: 20px; color: #dc00f9; font-weight: 600; margin-bottom: 15px; }
    .content p { color: #d0c0e0; line-height: 1.8; margin-bottom: 15px; }
    .highlight-box { background: rgba(220,0,249,0.1); padding: 20px; border-radius: 12px; border: 1px solid rgba(220,0,249,0.2); margin: 20px 0; }
    .highlight-box .label { color: #a234fd; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; }
    .highlight-box .quote { color: #fff; font-style: italic; margin-top: 10px; }
    .next-steps { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 20px 0; }
    .step-card { background: rgba(255,255,255,0.05); padding: 15px; border-radius: 12px; text-align: center; border: 1px solid rgba(168,85,247,0.15); }
    .step-card .icon { font-size: 28px; margin-bottom: 8px; }
    .step-card .step-label { font-size: 12px; color: #a234fd; font-weight: 600; }
    .step-card .step-desc { font-size: 13px; color: #b0a0c0; margin-top: 4px; }
    .footer { padding: 30px; text-align: center; border-top: 1px solid rgba(168,85,247,0.1); }
    .btn { display: inline-block; background: linear-gradient(135deg, #dc00f9, #a234fd); color: #fff; padding: 12px 35px; border-radius: 30px; text-decoration: none; font-weight: 600; }
    .footer p { color: #6a5a7a; font-size: 13px; line-height: 1.6; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎉 Thank You for Reaching Out!</h1>
      <p style="color: rgba(255,255,255,0.9);">We've received your message and we're excited to connect with you</p>
    </div>
    <div class="content">
      <div class="greeting">Hello ${name}! 👋</div>
      <p>Thank you for contacting <strong>CodefinityTech</strong>. We truly appreciate your interest in our services.</p>
      <div class="highlight-box">
        <span class="label">📋 Your Message Summary</span>
        <div class="quote">"${message.substring(0, 100)}${message.length > 100 ? '...' : ''}"</div>
      </div>
      <p style="font-size: 14px; color: #b0a0c0;"><strong>📧 We'll Reply Within:</strong> <span style="color: #22c55e;">24 Hours</span></p>
      <h3 style="color: #dc00f9; margin: 25px 0 15px; font-size: 18px;">🚀 What Happens Next?</h3>
      <div class="next-steps">
        <div class="step-card"><div class="icon">📩</div><div class="step-label">Step 1</div><div class="step-desc">We'll review your message</div></div>
        <div class="step-card"><div class="icon">📞</div><div class="step-label">Step 2</div><div class="step-desc">We'll contact you via email/phone</div></div>
        <div class="step-card"><div class="icon">💡</div><div class="step-label">Step 3</div><div class="step-desc">We'll discuss your project</div></div>
        <div class="step-card"><div class="icon">🚀</div><div class="step-label">Step 4</div><div class="step-desc">Let's build something amazing!</div></div>
      </div>
    </div>
    <div class="footer">
      <a href="https://codefinitytech.vercel.app" class="btn">🌐 Visit Our Website</a>
      <p style="margin-top: 15px;">📍 H-3 Block, Trust Plaza, Gujranwala<br>📧 qadeerdeveloper312@gmail.com | 📞 +92 317 0704493</p>
    </div>
  </div>
</body>
</html>
    `;
  };

  // ============================================================
  // 4. HANDLE FORM SUBMIT (Frontend Only)
  // ============================================================
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('📝 Form Data:', form);
    setStatus({ loading: true, success: "", error: "" });

    try {
      const formData = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
      };

      // 1. Save to Google Sheets
      await saveToGoogleSheets(formData);

      // 2. Send Admin Email
      await sendEmail(
        ADMIN_EMAIL,
        `🔔 New Contact Form Submission from ${formData.name}`,
        generateAdminEmail(formData.name, formData.email, formData.phone, formData.message),
        formData.email
      );

      // 3. Send Client Email (Thank You)
      await sendEmail(
        formData.email,
        '🎉 Thank You for Contacting CodefinityTech!',
        generateClientEmail(formData.name, formData.message)
      );

      setStatus({
        loading: false,
        success: '✅ Message sent! A confirmation email has been sent to you.',
        error: '',
      });

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

    } catch (error) {
      console.error('❌ Error:', error);
      setStatus({
        loading: false,
        success: '',
        error: error.message || '❌ Failed to send message. Please try again.',
      });
    }
  };

  return (
    <div className="bg-[#0d0615] text-white min-h-screen pt-15">
      {/* HERO SECTION */}
      <section className="relative flex flex-col md:flex-row items-center justify-between max-w-[1200px] mx-auto px-6 py-16 md:py-20 gap-8 md:gap-10">
        <div className="max-w-lg text-center md:text-left">
          <div className="inline-block px-4 py-1 mb-4 text-xs font-semibold tracking-wider text-purple-300 uppercase bg-purple-900/30 rounded-full border border-purple-500/30">
            Get In Touch
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Stay <span className="text-[#dc00f9]">Connected</span> With{" "}
            <span className="bg-gradient-to-r from-[#dc00f9] to-[#a234fd] bg-clip-text text-transparent">
              CodefinityTech
            </span>
          </h1>
          <p className="mt-5 text-gray-300 text-lg">
            Have questions or project ideas? Let's build something amazing together.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-[#1a0f2a] p-4 rounded-xl border border-purple-500/20">
              <div className="text-[#dc00f9] text-2xl mb-1">⭐</div>
              <div className="text-sm font-semibold">200+ Projects</div>
              <div className="text-xs text-gray-400">Delivered</div>
            </div>
            <div className="bg-[#1a0f2a] p-4 rounded-xl border border-purple-500/20">
              <div className="text-[#dc00f9] text-2xl mb-1">😊</div>
              <div className="text-sm font-semibold">100%</div>
              <div className="text-xs text-gray-400">Client Satisfaction</div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-md mx-auto animate-float">
          <img
            src="/images/imgi_2_ContactHero-2.webp"
            alt="Contact CodefinityTech"
            className="w-full"
          />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 px-6 pb-12 pt-10">
        {/* LEFT - Contact Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-gradient-to-br from-[#1a0f2a] to-[#0d0615] p-6 rounded-2xl border border-purple-500/20">
            <h2 className="text-2xl font-bold mb-6 text-[#dc00f9]">Get in Touch</h2>
            
            <div className="flex items-start gap-4 mb-4 p-3 rounded-xl bg-[#0d0615] border border-purple-500/10">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-[#dc00f9] flex-shrink-0">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-gray-400">Address</h4>
                <p className="text-sm">{contactInfo.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-4 p-3 rounded-xl bg-[#0d0615] border border-purple-500/10">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-[#dc00f9] flex-shrink-0">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-gray-400">Email</h4>
                <a href={`mailto:${contactInfo.email}`} className="text-sm hover:text-[#dc00f9] transition">
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-4 p-3 rounded-xl bg-[#0d0615] border border-purple-500/10">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-[#dc00f9] flex-shrink-0">
                <FaPhoneAlt />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-gray-400">Phone</h4>
                <a href={`tel:${contactInfo.phone}`} className="text-sm hover:text-[#dc00f9] transition">
                  {contactInfo.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-3 rounded-xl bg-[#0d0615] border border-purple-500/10">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-[#dc00f9] flex-shrink-0">
                <FaClock />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-gray-400">Working Hours</h4>
                <p className="text-sm">{contactInfo.hours}</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1a0f2a] to-[#0d0615] p-6 rounded-2xl border border-purple-500/20">
            <h3 className="font-semibold mb-4 text-lg">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-12 h-12 rounded-full bg-[#0d0615] border border-purple-500/20 flex items-center justify-center text-xl transition-all duration-300 ${social.color} hover:scale-110 hover:border-purple-500/50`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT - Form */}
        <div className="lg:col-span-3">
          <div className="bg-gradient-to-br from-[#1a0f2a] to-[#0d0615] rounded-2xl border border-purple-500/20 p-6 md:p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-[#dc00f9]">Send Us a Message</h3>
              <p className="text-gray-400 text-sm mt-1">
                Fill in the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              {status.success && (
                <div className="bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-3 rounded-lg text-sm">
                  {status.success}
                </div>
              )}

              {status.error && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg text-sm">
                  {status.error}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-[#0d0615] px-4 py-3 rounded-xl border border-purple-500/20 focus:border-[#dc00f9] focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-[#0d0615] px-4 py-3 rounded-xl border border-purple-500/20 focus:border-[#dc00f9] focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+92 300 1234567"
                  className="w-full bg-[#0d0615] px-4 py-3 rounded-xl border border-purple-500/20 focus:border-[#dc00f9] focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Tell us about your project..."
                  className="w-full bg-[#0d0615] px-4 py-3 rounded-xl border border-purple-500/20 focus:border-[#dc00f9] focus:outline-none transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className="w-full bg-gradient-to-r from-[#dc00f9] to-[#a234fd] py-3.5 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status.loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>

              <p className="text-xs text-gray-500 text-center mt-3">
                We respect your privacy. Your information will not be shared.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* MAP */}
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="pt-10">
          <div className="rounded-2xl overflow-hidden border border-purple-500/20 shadow-2xl shadow-purple-500/5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27184.113599999998!2d74.1839!3d32.1628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f0e8b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sGujranwala%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CodefinityTech Location"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="pb-16"></div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
}