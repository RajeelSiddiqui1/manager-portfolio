
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

  const mailOptions = {
    from: `"${formData.name}" <alifarhan1531@gmail.com>`,
    to: 'alifarhan1531@gmail.com',
    subject: `New Portfolio Inquiry from ${formData.name}`,
    text: `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
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
