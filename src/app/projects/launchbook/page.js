import Link from "next/link";
import Image from 'next/image';
import { FadeIn } from "@/components/FadeIn";
import JsonLd, { createBreadcrumbSchema } from "@/components/JsonLd";
import PasswordGate from "@/components/PasswordGate";

export const metadata = {
  title: "LaunchBook — Branded Booking | Zachary Guerrero",
  description:
    "A mobile-first branded booking platform for solo providers. Flat 1.5%. No account walls. Your brand, your clients, your rules.",
};

function Tag({ children }) {
  return (
    <span className="text-microcopy-1 bg-zg-dark-0 text-gray-300 px-2.5 py-1 rounded">
      {children}
    </span>
  );
}

export default function LaunchBookProjectPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://zacharyguerrero.com" },
    { name: "Case Studies", url: "https://zacharyguerrero.com/projects" },
    { name: "LaunchBook", url: "https://zacharyguerrero.com/projects/launchbook" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <div className="container my-12 lg:my-16">
        <FadeIn>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-microcopy-2 text-gray-400 hover:text-zg-teal transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Case Studies
          </Link>
        </FadeIn>

        {/* Hero image */}
        <FadeIn delay={0.15}>
          <div className="relative aspect-video rounded-lg overflow-hidden mb-16">
            <Image
              src="/images/projects/lb-cover.png"
              alt="LaunchBook"
              fill
              className="object-cover"
              priority
            />
          </div>
        </FadeIn>

        <section className="mb-16">
          <FadeIn>
            <span className="inline-block text-microcopy-2-semibold text-gray-400 border border-gray-700 rounded-full px-4 py-1.5 mb-4">
              SaaS &middot; Stripe-powered &middot; In Development
            </span>
            <h1 className="text-heading-2-bold md:text-heading-1-bold mb-6">
              LaunchBook
            </h1>
            <p className="text-body-2 text-gray-400 max-w-2xl mb-4">
              A branded booking platform for solo providers. One script tag on your website. Your colors, your logo, your domain. No platform branding, no account walls, no marketplace commissions.
            </p>
            <p className="text-body-1 text-gray-500 max-w-2xl">
              Flat 1.5% per transaction. Auth-hold no-show protection. Currently in development. Full architecture below.
            </p>
          </FadeIn>
        </section>

        {/* Project info grid */}
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 mb-8 border-b border-gray-800">
            <div>
              <h3 className="text-utility-micro-2-semibold text-gray-500 uppercase tracking-wider mb-2">
                Client
              </h3>
              <p className="text-body-1 text-white">Personal Project</p>
            </div>
            <div>
              <h3 className="text-utility-micro-2-semibold text-gray-500 uppercase tracking-wider mb-2">
                Role
              </h3>
              <p className="text-body-1 text-white">Product Designer, Full-Stack Developer</p>
            </div>
            <div>
              <h3 className="text-utility-micro-2-semibold text-gray-500 uppercase tracking-wider mb-2">
                Technologies
              </h3>
              <p className="text-body-1 text-white">Next.js, Stripe Connect, PostgreSQL, TypeScript, Docker</p>
            </div>
          </div>
        </FadeIn>

        <PasswordGate projectId="launchbook">
          <div className="max-w-3xl mx-auto space-y-16">

            {/* ——— BITE: Solo providers lose 20-30% of revenue to platforms ——— */}
            <section>
              <h2 className="text-heading-3-bold mb-3">Solo providers lose 20 to 30 percent of their revenue to booking platforms.</h2>
              <p className="text-body-2 text-gray-300 mb-6">
                Fresha takes up to 20% of new client revenue. Booksy takes 30%. Vagaro pushes per-seat fees. The model works by renting the provider's customers back to them.
              </p>
              <p className="text-body-1 text-gray-400 mb-4">
                On top of the commission, clients hit an account wall. Create a profile on a platform they will never use again. And when they book, they see the platform's branding. The person doing the work becomes invisible.
              </p>
              <p className="text-body-1 text-gray-400 mb-4">
                Most booking tools also assume a desktop workflow. These providers run their business from their phone. Instagram DMs. Google Business messages. Text threads. The booking system should live where they already are.
              </p>
              <p className="text-body-1 text-gray-400">
                I've been building booking and payment systems at Member Splash. Splash Cards, Check-In 2.0. Platforms take. Providers lose. LaunchBook is my take on what booking looks like when the provider's brand comes first and the platform disappears.
              </p>
            </section>

            {/* ——— BITE: The provider's brand is the face of the page ——— */}
            <section>
              <h2 className="text-heading-4-bold mb-6">The provider's brand is the face of the page</h2>
              <p className="text-body-1 text-gray-400 mb-6">
                No "Powered by LaunchBook." No platform logo. No marketplace redirect. The booking page renders the provider's colors, logo, and domain. One script tag on their site. It feels like a natural part of their business because it is.
              </p>

              {/* ——— BITE: Three taps. No password. No account wall. ——— */}
              <h2 className="text-heading-4-bold mb-6">Three taps. No password. No account wall.</h2>
              <p className="text-body-1 text-gray-400 mb-6">
                Client hits the link, picks a time, enters their card. Done. The auth-hold model authorizes at booking and captures after service. Eliminates friction. Protects the provider from no-shows. No chasing payments.
              </p>

              {/* ——— BITE: 1.5% flat. No commission creep. ——— */}
              <h2 className="text-heading-4-bold mb-6">1.5% flat. No commission creep.</h2>
              <p className="text-body-1 text-gray-400">
                No tiers. No per-seat charges. A $120 service costs the provider $1.80. Fresha would take $24. The math is simple because LaunchBook isn't a marketplace. It's infrastructure.
              </p>
            </section>

            {/* ——— BITE: You send five things. We handle the rest in one afternoon. ——— */}
            <section className="bg-zg-dark-0 rounded-lg p-6 md:p-8">
              <h2 className="text-heading-4-bold mb-4">You send five things. We handle the rest in one afternoon.</h2>
              <p className="text-body-1 text-gray-400 mb-4">
                Logo. Brand colors. Service menu. No-show policy. Stripe email. That's it. The branded page is built, services imported, payments connected, Google Business Profile synced. The provider never touches a settings page.
              </p>
              <p className="text-body-1 text-gray-400">
                Currently this is manual. It works for early adopters and validates the model. A self-serve builder is the next major investment.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <Tag>$600 one-time setup</Tag>
                <Tag>$19.95/mo early adopter</Tag>
                <Tag>1.5% per transaction</Tag>
              </div>
            </section>

            {/* ——— BITE: Next.js. Stripe. Mobile-first. ——— */}
            <section>
              <h2 className="text-heading-4-bold mb-6">Next.js. Stripe. Mobile-first.</h2>
              <p className="text-body-1 text-gray-400 mb-4">
                Next.js front end. PostgreSQL for data. Stripe Connect for payments. Auto reminders via SMS and email. Calendar syncs in real time. The provider dashboard surfaces what needs attention. Nothing else.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Tag>Next.js</Tag>
                <Tag>PostgreSQL</Tag>
                <Tag>Stripe Connect</Tag>
                <Tag>Docker / Vercel</Tag>
              </div>
            </section>

            {/* ——— BITE: No marketplace means no discoverability. That's the tradeoff. ——— */}
            <section className="bg-zg-dark-0 rounded-lg p-6 md:p-8">
              <h2 className="text-heading-4-bold mb-6">No marketplace means no discoverability. That's the tradeoff.</h2>

              <div className="space-y-5">
                <div>
                  <p className="text-body-1-semibold text-zg-teal mb-1">You keep your clients, but you need them to start</p>
                  <p className="text-body-1 text-gray-400">Providers bring their own business. LaunchBook doesn't send new clients. You keep 100% of the relationship. This works for established providers. It doesn't work for someone starting from zero. That's okay.</p>
                </div>

                <div>
                  <p className="text-body-1-semibold text-zg-teal mb-1">Auth-hold is harder. Better for the provider.</p>
                  <p className="text-body-1 text-gray-400">Holding a card and charging later means handling expiration, disputes, insufficient funds. The simpler approach would capture at booking and refund on cancellation. But that makes the provider manage refunds. Auth-hold is harder to build. Better for the person doing the work.</p>
                </div>

                <div>
                  <p className="text-body-1-semibold text-zg-teal mb-1">Self-serve should have been first</p>
                  <p className="text-body-1 text-gray-400">Manual onboarding builds relationships with early adopters. It also creates a bottleneck. The self-serve builder should have been the first investment after MVP. It's next on the list.</p>
                </div>
              </div>
            </section>

            {/* ——— BITE: Booking pages work. Self-serve setup is next. ——— */}
            <section>
              <h2 className="text-heading-4-bold mb-4">Booking pages work. Self-serve setup is next.</h2>

              <p className="text-body-1 text-gray-400 mb-4">
                Branded pages. Stripe Connect. Auth-hold payments. Auto reminders. Google sync. All working. What's being wrangled: self-serve setup, admin-to-client messaging for weather cancellations, calendar management, and production scaling.
              </p>

              <p className="text-body-1 text-gray-500">
                LaunchBook is the booking platform I wanted to exist for independent providers. Invisible, fair, and designed for the phone in your pocket.{" "}
                <Link href="/lets-talk" className="text-zg-teal hover:text-zg-coral transition-colors">Get in touch</Link> for early access or to talk architecture.
              </p>
            </section>

          </div>
        </PasswordGate>
      </div>
    </>
  );
}
