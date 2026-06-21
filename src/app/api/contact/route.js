import FormData from "form-data";
import Mailgun from "mailgun.js";
import { NextResponse } from "next/server";

const DOMAIN = process.env.MAILGUN_DOMAIN;
const API_KEY = process.env.MAILGUN_API_KEY;

function formatEmailBody(data) {
  const { type, name, email, message, company, role, companyUrl, teamSize, stalling, offerInterest, timeline } = data;

  if (type === 'fte') {
    return `TYPE: Full-Time Hire

Name: ${name}
Email: ${email}
Company: ${company || '—'}
Role: ${role || '—'}

Message:
${message}`.trim();
  }

  if (type === 'consulting') {
    return `TYPE: Consulting

Name: ${name}
Email: ${email}
Company URL: ${companyUrl || '—'}
Team Size: ${teamSize || '—'}
Offer Interest: ${offerInterest || '—'}
Timeline: ${timeline || '—'}

What's stalling:
${stalling || '—'}`.trim();
  }

  return `TYPE: General

Name: ${name}
Email: ${email}

Message:
${message}`.trim();
}

export async function POST(request) {
  try {
    if (!DOMAIN || !API_KEY) {
      console.error('Mailgun environment variables are not configured');
      return NextResponse.json({ success: false, message: 'Email service not configured.' }, { status: 500 });
    }

    const mailgun = new Mailgun(FormData);
    const mg = mailgun.client({ username: 'api', key: API_KEY });

    const formData = await request.json();
    const { name, type = 'general' } = formData;

    const emailData = {
      from: 'Portfolio Contact Form <noreply@zkg.io>',
      to: 'zack@zkg.io',
      subject: `[${type.toUpperCase()}] Contact from ${name}`,
      text: formatEmailBody(formData),
    };

    await mg.messages.create(DOMAIN, emailData);

    return NextResponse.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, message: 'Failed to send email.' }, { status: 500 });
  }
}
