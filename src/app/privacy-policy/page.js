import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="container flex justify-center">
      <div className="prose-sm prose-h1:text-heading-1-bold prose-h2:text-heading-3-bold md:max-w-3xl">
        <h1>Privacy Policy</h1>

        <p>I respect your privacy and am committed to protecting the personal information you share with me. This policy outlines how I collect, use, and protect your information when you visit my website.</p>

        <h2>1. Information I Collect</h2>
        <p>I collect two types of information:</p>
        <ul>
          <li><b>Analytics Data:</b> I use analytics software to track website traffic and understand user behavior. This may include information like your IP address, browser type, and pages visited.</li>
          <li><b>Contact Information:</b> If you choose to get in touch through my contact form, I collect your email address and any additional details you provide.</li>
        </ul>

        <h2>2. How I Use Your Information</h2>
        <ul>
          <li><b>Analytics:</b> I use analytics data to improve the user experience and optimize the content on my website.</li>
          <li><b>Contact:</b> I use your email address to respond to your inquiries or follow up on communication. I will never send unwanted emails or spam.</li>
        </ul>

        <h2>3. Information Sharing</h2>
        <p>I value your privacy. Any information collected is solely for internal use and is never shared, sold, or distributed to third parties.</p>

        <h2>4. Your Rights</h2>
        <p>You have the right to request the deletion of any personal information you’ve provided. Simply reach out to me if you have any concerns.</p>

        <h2>5. Changes to This Policy</h2>
        <p>I may update this privacy policy from time to time. Please check back periodically for any changes.</p>

        <p>If you have any questions or concerns, feel free to contact me at <Link href="mailto:zack@zkg.io">zack@zkg.io</Link>.</p>
      </div>
    </div>
  )
}