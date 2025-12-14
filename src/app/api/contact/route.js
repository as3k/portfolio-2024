import FormData from "form-data";
import Mailgun from "mailgun.js";
import { NextResponse } from "next/server";

const DOMAIN = process.env.MAILGUN_DOMAIN;
const API_KEY = process.env.MAILGUN_API_KEY;

export async function POST(request) {

  try {
    if (!DOMAIN || !API_KEY) {
      console.error('Mailgun environment variables are not configured');
      return NextResponse.json({ success: false, message: 'Email service not configured.' }, { status: 500 });
    }

    const mailgun = new Mailgun(FormData);
    const mg = mailgun.client({
      username: 'api',
      key: API_KEY,
    });

    // Parse form data from the request body
    const formData = await request.json();
    const { name, email, message } = formData;

    // Compose the email data
    const emailData = {
      from: 'Portfolio Contact Form <noreply@zkg.io>', // Replace with your Mailgun authorized sender
      to: 'zack@zkg.io', // The email address you want to send the message to
      subject: `Portfolio Contact Form Submission from ${name}`, // Optional subject
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
    };

    // Send the email using Mailgun
    await mg.messages.create(DOMAIN, emailData);

    // Respond with a success message
    return NextResponse.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, message: 'Failed to send email.' }, { status: 500 });
  }
}
