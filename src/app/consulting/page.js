import Link from "next/link";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/FadeIn";
import JsonLd, { createBreadcrumbSchema } from "@/components/JsonLd";

export const metadata = {
  title: "Consulting | Zachary Guerrero",
  description:
    "Product engineering consulting for B2B SaaS teams with stalled velocity and developer-built UX. The Diagnosis, The Rewire, Embedded Product Engineer.",
};

function OfferCard({ label, price, timeline, description, deliverable, guarantee, convertsTo, featured }) {
  return (
    <div
      className={`h-full flex flex-col rounded-lg p-8 ${
        featured
          ? "bg-zg-teal/10 ring-2 ring-zg-teal/50"
          : "bg-zg-dark-0"
      }`}
    >
      <div className="mb-5">
        <span className="text-microcopy-2-semibold text-zg-teal">{label}</span>
        <p className="text-heading-4-bold text-white mt-1">{price}</p>
        <p className="text-microcopy-1 text-gray-500 mt-1">{timeline}</p>
      </div>
      <p className="text-body-1 text-gray-400 mb-5 flex-1">{description}</p>
      <div className="space-y-3">
        <div className="bg-zg-dark-0/80 rounded p-3">
          <span className="text-microcopy-2 text-gray-500 block mb-1">Deliverable</span>
          <p className="text-microcopy-2 text-gray-300">{deliverable}</p>
        </div>
        {guarantee && (
          <div className="bg-zg-teal/5 border border-zg-teal/20 rounded p-3">
            <span className="text-microcopy-2 text-zg-teal block mb-1">Guarantee</span>
            <p className="text-microcopy-2 text-gray-300">{guarantee}</p>
          </div>
        )}
        {convertsTo && (
          <p className="text-microcopy-2 text-gray-500 text-center pt-1">
            {"→ Often becomes "}
            <span className="text-zg-teal">{convertsTo}</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default function ConsultingPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://zacharyguerrero.com" },
    { name: "Consulting", url: "https://zacharyguerrero.com/consulting" },
  ]);

  const painPoints = [
    "Features promised 12+ months ago, still stuck in a branch",
    "Developer-built UI your users can't figure out",
    "One or two engineers, no designer, growing backlog",
    "You know what's broken. You can't fix it without two new hires.",
  ];

  const offers = [
    {
      label: "The Diagnosis",
      price: "$2,500",
      timeline: "5 business days",
      description:
        "I find exactly what's stalling your product: stuck features, broken UX flows, the design-eng gap your team can't bridge on its own.",
      deliverable:
        "Written diagnosis + prioritized fix list + recommended next step",
      guarantee: "Specific, actionable plan you can act on immediately — or full refund",
      convertsTo: "The Rewire",
      featured: false,
    },
    {
      label: "The Rewire",
      price: "$9,500 – $14,000",
      timeline: "2–4 weeks · fixed scope",
      description:
        "I fix the top priorities from the Diagnosis — design it, build it, ship it to production. Fixed price. No scope creep.",
      deliverable:
        "Shipped feature or flow. No handoff debt. No translation loss.",
      guarantee: null,
      convertsTo: "Embedded",
      featured: true,
    },
    {
      label: "Embedded Product Engineer",
      price: "$6,500/mo",
      timeline: "15 hrs/week · 3-month min",
      description:
        "I own a product area like a senior hire — design + engineering, full cycle. No $180K overhead, no 6-month ramp, no handoff chain.",
      deliverable:
        "Ongoing product area ownership — features scoped, built, and shipped",
      guarantee: null,
      convertsTo: null,
      featured: false,
    },
  ];

  const expectations = [
    "I ask hard questions upfront. I need to understand the problem before I design or build anything.",
    "You see work in staging within the first week.",
    "I push back when something hurts the user or the architecture. I'll explain why and propose an alternative.",
    "Fixed price means fixed price.",
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <div className="container my-12 lg:my-16">
        {/* Hero */}
        <FadeIn>
          <section className="max-w-3xl mb-20">
            <span className="inline-block text-microcopy-2-semibold text-gray-400 border border-gray-700 rounded-full px-4 py-1.5 mb-6 hover:border-zg-teal/50 hover:text-zg-teal/80 transition-colors duration-300">
              Consulting
            </span>
            <h1 className="text-heading-2-bold md:text-heading-1-bold mb-4">
              Your product is stalled.
              <br />
              I fix that.
            </h1>
            <p className="text-body-2 text-gray-400 mb-8 max-w-2xl">
              You shipped the MVP. Now features are stuck in branches, the UX is a mess,
              and you can{"'"}t fix both without hiring two people. I{"'"}m the one person
              who owns the full fix — research, design, code, deploy. No handoffs.
            </p>
            <Link
              href="/lets-talk"
              className="inline-flex items-center gap-2 rounded-md text-white bg-zg-teal hover:bg-zg-coral active:scale-95 active:brightness-90 transition-all duration-300 px-5 py-3 text-body-1-bold"
            >
              Start with The Diagnosis — $2,500
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </section>
        </FadeIn>

        {/* Who this is for */}
        <FadeIn delay={0.1}>
          <section className="mb-20">
            <h2 className="text-heading-4-bold mb-6">If this sounds like your team:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
              {painPoints.map((point) => (
                <div
                  key={point}
                  className="flex gap-3 bg-zg-dark-0 rounded-lg p-5 border-l-2 border-zg-coral"
                >
                  <p className="text-body-1 text-gray-300">{point}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-body-1 text-gray-400 max-w-2xl">
              This is one problem: nobody on your team owns design{" "}
              <em>and</em> engineering <em>and</em> shipping. That{"'"}s the gap I fill.
            </p>
          </section>
        </FadeIn>

        {/* The Offers */}
        <section className="mb-20">
          <FadeIn>
            <h2 className="text-heading-4-bold mb-3">How I Work</h2>
            <p className="text-body-1 text-gray-400 mb-10 max-w-2xl">
              Three offers. One ladder. Each converts naturally to the next.
            </p>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {offers.map((offer) => (
              <FadeInStaggerItem key={offer.label}>
                <OfferCard {...offer} />
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </section>

        {/* Social proof */}
        <FadeIn delay={0.1}>
          <section className="mb-20 p-8 bg-gradient-to-br from-zg-teal/10 to-zg-dark-0 rounded-lg border border-zg-teal/20">
            <span className="text-microcopy-2 text-zg-teal mb-2 block">From the Work</span>
            <p className="text-heading-5-semibold text-white mb-3">
              Years of stalled features. Shipped in weeks.
            </p>
            <p className="text-body-1 text-gray-400 max-w-2xl">
              MemberSplash had features promised for years sitting in dormant branches —
              check-in flows, core UX work that never made it to production. I picked them
              up, rebuilt what needed rebuilding, and shipped them. Full case study coming
              soon.
            </p>
          </section>
        </FadeIn>

        {/* What to Expect */}
        <FadeIn delay={0.15}>
          <section className="mb-20">
            <h2 className="text-heading-4-bold mb-8">What to Expect</h2>
            <div className="space-y-4 max-w-2xl">
              {expectations.map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="text-zg-teal font-bold mt-0.5 flex-shrink-0">&rarr;</span>
                  <p className="text-body-1 text-gray-400">{item}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.2}>
          <section className="bg-zg-dark-0 rounded-lg p-8 md:p-12">
            <h2 className="text-heading-4-bold mb-4">Ready to unblock your product?</h2>
            <p className="text-body-1 text-gray-400 mb-6 max-w-xl">
              The Diagnosis is the right starting point. Five days. $2,500. Guaranteed
              actionable output — or full refund.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/lets-talk"
                className="rounded-md text-white bg-zg-teal hover:bg-zg-coral active:scale-95 active:brightness-90 transition-all duration-300 px-5 py-3 text-body-1-bold"
              >
                Start with The Diagnosis
              </Link>
              <Link
                href="/process"
                className="rounded-md text-gray-400 hover:text-zg-teal transition-all duration-300 px-5 py-3 text-body-1-bold"
              >
                See My Process
              </Link>
            </div>
          </section>
        </FadeIn>
      </div>
    </>
  );
}
