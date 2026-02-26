
'use server';

import nodemailer from 'nodemailer';

export async function sendContactEmail(formData: { name: string; email: string; message: string }) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'alifarhan1531@gmail.com',
      pass: 'zyvq swtc sqkj mixq',
    },
  });

  const htmlTemplate = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: 'Inter', Helvetica, Arial, sans-serif; line-height: 1.6; color: #1a1a1a; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 20px auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
          .header { background-color: #1e3a8a; color: #ffffff; padding: 32px; text-align: center; }
          .header h1 { margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.025em; }
          .content { padding: 40px; background-color: #ffffff; }
          .field { margin-bottom: 24px; }
          .label { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #6b7280; margin-bottom: 4px; }
          .value { font-size: 16px; color: #111827; font-weight: 500; }
          .message-box { background-color: #f9fafb; border: 1px solid #f3f4f6; border-radius: 8px; padding: 20px; margin-top: 8px; font-style: italic; color: #374151; }
          .footer { background-color: #f3f4f6; padding: 20px; text-align: center; font-size: 12px; color: #9ca3af; }
          .accent { color: #1e3a8a; font-weight: 700; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>STRATEGIC INQUIRY</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Sender Name</div>
              <div class="value">${formData.name}</div>
            </div>
            <div class="field">
              <div class="label">Corporate Email</div>
              <div class="value"><a href="mailto:${formData.email}" style="color: #1e3a8a; text-decoration: none;">${formData.email}</a></div>
            </div>
            <div class="field">
              <div class="label">Project Brief / Message</div>
              <div class="message-box">
                "${formData.message}"
              </div>
            </div>
          </div>
          <div class="footer">
            Sent via <span class="accent">Farhan Raza | Strategic Portfolio</span>
          </div>
        </div>
      </body>
    </html>
  `;

  const mailOptions = {
    from: `"Portfolio Inquiry" <alifarhan1531@gmail.com>`,
    to: 'alifarhan1531@gmail.com',
    subject: `🚀 New Strategic Inquiry from ${formData.name}`,
    text: `New Portfolio Inquiry\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    html: htmlTemplate,
    replyTo: formData.email
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error: 'Failed to send email' };
  }
}
