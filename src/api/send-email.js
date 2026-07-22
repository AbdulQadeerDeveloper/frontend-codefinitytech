// api/send-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      error: 'Method not allowed' 
    });
  }

  try {
    const { name, email, phone, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, and message are required'
      });
    }

    // Email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Gmail App Password
      },
    });

    // 1. Admin Email
    const adminHtml = generateAdminEmail(name, email, phone, message);
    await transporter.sendMail({
      from: `"CodefinityTech" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || 'qadeerdeveloper312@gmail.com',
      subject: `🔔 New Contact Form Submission from ${name}`,
      html: adminHtml,
      replyTo: email,
    });

    // 2. Client Email (Thank You)
    const clientHtml = generateClientEmail(name, message);
    await transporter.sendMail({
      from: `"CodefinityTech" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: '🎉 Thank You for Contacting CodefinityTech!',
      html: clientHtml,
    });

    res.status(200).json({
      success: true,
      message: 'Emails sent successfully!'
    });

  } catch (error) {
    console.error('❌ Email Error:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to send email'
    });
  }
}

// ============================================================
// EMAIL TEMPLATES
// ============================================================

function generateAdminEmail(name, email, phone, message) {
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
    .btn { display: inline-block; background: linear-gradient(135deg, #dc00f9, #a234fd); color: #fff; padding: 10px 30px; border-radius: 30px; text-decoration: none; font-weight: 600; }
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
      <a href="mailto:${email}" class="btn">📤 Reply to Client</a>
      <p style="color: #6a5a7a; margin-top: 15px;">📍 CodefinityTech · Gujranwala</p>
    </div>
  </div>
</body>
</html>
  `;
}

function generateClientEmail(name, message) {
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
}