import { FadeIn } from "@/components/FadeIn";
import ContactForm from "@/components/forms/ContactForm";
import Link from "next/link";
import JsonLd, { contactPageSchema, createBreadcrumbSchema } from "@/components/JsonLd";
import { ContactMethodCard } from "@/components/ContactMethodCard";

export const metadata = {
  title: "Let's Talk | Zachary Guerrero",
  description:
    "Contact Zachary Guerrero about product design roles or potential collaborations.",
};

export default function LetsTalkPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://zacharyguerrero.com" },
    { name: "Contact", url: "https://zacharyguerrero.com/lets-talk" },
  ]);

  return (
    <>
      <JsonLd data={contactPageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <div className="container my-12 lg:my-16">
        <div className="max-w-2xl mx-auto">
        <FadeIn>
          <header className="mb-12">
            <h1 className="text-heading-1-bold mb-4">Let's Talk</h1>
            <p className="text-body-2 text-gray-400">
              I'm currently open to product design roles at B2B SaaS companies
              where design decisions tie directly to business outcomes. If that
              sounds like your team, I'd love to hear from you.
            </p>
          </header>
        </FadeIn>

        <FadeIn delay={0.1}>
          <section className="mb-12">
            <h2 className="text-heading-5-semibold mb-6 text-white">
              Send a Message
            </h2>
            <ContactForm />
          </section>
        </FadeIn>

        <FadeIn delay={0.2}>
          <section className="mb-12">
            <h2 className="text-heading-5-semibold mb-6 text-white">
              Other Ways to Reach Me
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <ContactMethodCard
                href="mailto:zack@zkg.io"
                destination="email"
                title="Email"
                subtitle="zack@zkg.io"
                icon={
                  <svg
                    className="w-5 h-5 text-zg-teal"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                }
              />

              <ContactMethodCard
                href="https://linkedin.com/in/zacharyafguerrero"
                destination="linkedin"
                title="LinkedIn"
                subtitle="zacharyafguerrero"
                external={true}
                icon={
                  <svg
                    className="w-5 h-5 text-zg-teal"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                }
              />
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.3}>
          <section className="p-6 rounded-lg bg-zg-dark-0 border border-gray-800 mb-8">
            <h2 className="text-heading-6-semibold mb-3 text-white">
              What I'm Looking For
            </h2>
            <ul className="space-y-2 text-body-1 text-gray-400">
              <li className="flex gap-2">
                <span className="text-zg-teal">•</span>
                <span>B2B SaaS products with real technical complexity</span>
              </li>
              <li className="flex gap-2">
                <span className="text-zg-teal">•</span>
                <span>Teams where design shapes product direction</span>
              </li>
              <li className="flex gap-2">
                <span className="text-zg-teal">•</span>
                <span>Teams that ship useful things over chasing trends</span>
              </li>
              <li className="flex gap-2">
                <span className="text-zg-teal">•</span>
                <span>Remote or hybrid in Southern California</span>
              </li>
            </ul>
            <p className="mt-4 text-microcopy-1 text-gray-500">
              I typically respond within 24 hours on weekdays.
            </p>
          </section>
        </FadeIn>

        <FadeIn delay={0.4}>
          <section className="text-center">
            <p className="text-body-1 text-gray-500 mb-4">
              Want to learn more about me first?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/about"
                className="text-zg-teal hover:text-zg-coral transition-colors text-body-1-semibold"
              >
                About Me
              </Link>
              <Link
                href="/projects"
                className="text-zg-teal hover:text-zg-coral transition-colors text-body-1-semibold"
              >
                My Work
              </Link>
              <Link
                href="/process"
                className="text-zg-teal hover:text-zg-coral transition-colors text-body-1-semibold"
              >
                My Process
              </Link>
              <Link
                href="/resume"
                className="text-zg-teal hover:text-zg-coral transition-colors text-body-1-semibold"
              >
                Resume
              </Link>
            </div>
          </section>
        </FadeIn>
        </div>
      </div>
    </>
  );
}
