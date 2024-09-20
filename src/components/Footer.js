import Link from "next/link";
import ContactForm from "./forms/ContactForm";

export default function Footer({ hideContactForm }) {
  return (
    <footer className="my-16">
      <div className="container flex flex-col gap-16">
        <div id="contact" className="grid grid-cols-1 md:grid-cols-2 gap-12 md:px-8 xl:px-40">
          {!hideContactForm && <ContactForm />}
          <div className="text-side">
            <span id="eyebrow-copy" className="text-utility-micro-1 text-zg-teal uppercase">Get in touch</span>
            <h2 className="text-heading-4-bold">Let's work together!</h2>
            <a href="mailto:zack@zkg.io" className="text-body-2 text-gray-400 text-center">zack@zkg.io</a>
          </div>
        </div>
        <div className="container">
          <div className="text-body-2 flex gap-1 justify-center">
            <span className="text-microcopy-1">&copy; 2024 Zachary Guerrero. All rights reserved.</span>
            <Link href="/privacy-policy" className="text-microcopy-1 text-zg-teal underline">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}