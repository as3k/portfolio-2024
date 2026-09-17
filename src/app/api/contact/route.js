import FormData from "form-data";
import Mailgun from "mailgun.js";
import { NextResponse } from "next/server";

const DOMAIN = process.env.MAILGUN_DOMAIN;
const API_KEY = process.env.MAILGUN_API_KEY;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_TYPES = new Set(['general', 'fte', 'consulting']);

function cleanString(value, maxLength) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function validateSubmission(data) {
  const type = ALLOWED_TYPES.has(data.type) ? data.type : 'general';
  const name = cleanString(data.name, 120).replace(/[\r\n]+/g, ' ');
  const email = cleanString(data.email, 254);
  const message = cleanString(data.message, 5000);
  const stalling = cleanString(data.stalling, 5000);

  if (!name || !EMAIL_PATTERN.test(email)) return null;
  if (type === 'general' && !message) return null;
  if (type === 'consulting' && !stalling) return null;

  return {
    type,
    name,
    email,
    message,
    company: cleanString(data.company, 200),
    role: cleanString(data.role, 200),
    companyUrl: cleanString(data.companyUrl, 2048),
    teamSize: cleanString(data.teamSize, 50),
    stalling,
    offerInterest: cleanString(data.offerInterest, 100),
    timeline: cleanString(data.timeline, 100),
  };
}

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

    const body = await request.json();

    // Hidden from people, but commonly populated by basic form bots. Respond with
    // the normal success shape so the endpoint does not advertise the control.
    if (cleanString(body.website, 2048)) {
      return NextResponse.json({ success: true, message: 'Email sent successfully!' });
    }

    const submission = validateSubmission(body);
    if (!submission) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid name, email, and message.' },
        { status: 400 },
      );
    }

    const { name, type } = submission;

    const emailData = {
      from: 'Portfolio Contact Form <noreply@zkg.io>',
      to: 'zack@zkg.io',
      subject: `[${type.toUpperCase()}] Contact from ${name}`,
      text: formatEmailBody(submission),
    };

    await mg.messages.create(DOMAIN, emailData);

    return NextResponse.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, message: 'Failed to send email.' }, { status: 500 });
  }
}
