import Link from "next/link";
import Image from 'next/image';
import { FadeIn } from "@/components/FadeIn";
import JsonLd, { createBreadcrumbSchema } from "@/components/JsonLd";
import PasswordGate from "@/components/PasswordGate";

export const metadata = {
  title: "Ren — Cognitive Prosthesis | Zachary Guerrero",
  description:
    "Not a productivity app. A cognitive prosthesis. Privacy-first, ADHD-designed, cross-platform memory system.",
};

function Tag({ children }) {
  return (
    <span className="text-microcopy-1 bg-zg-dark-0 text-gray-300 px-2.5 py-1 rounded">
      {children}
    </span>
  );
}

export default function RenProjectPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://zacharyguerrero.com" },
    { name: "Case Studies", url: "https://zacharyguerrero.com/projects" },
    { name: "Ren", url: "https://zacharyguerrero.com/projects/ren" },
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
              src="/images/projects/ren-cover.png"
              alt="Ren"
              fill
              className="object-cover"
              priority
            />
          </div>
        </FadeIn>

        <section className="mb-16">
          <FadeIn>
            <span className="inline-block text-microcopy-2-semibold text-gray-400 border border-gray-700 rounded-full px-4 py-1.5 mb-4">
              Cross-platform &middot; Privacy-first &middot; In Development
            </span>
            <h1 className="text-heading-2-bold md:text-heading-1-bold mb-6">
              Ren
            </h1>
            <p className="text-body-2 text-gray-400 max-w-2xl mb-4">
              Not a productivity app. A cognitive prosthesis. Ren is a body double that lives in your pocket. She remembers what you forget, brings things back at the right time, and makes doing the thing feel possible.
            </p>
            <p className="text-body-1 text-gray-500 max-w-2xl">
              Privacy-first, ADHD-designed, cross-platform. Currently in active development. Full architecture below.
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
              <p className="text-body-1 text-white">React Native (Expo), Next.js, Drizzle ORM, PostgreSQL / Neon, TypeScript, OpenRouter / OpenAI</p>
            </div>
          </div>
        </FadeIn>

        <PasswordGate projectId="ren">
          <div className="max-w-3xl mx-auto space-y-16">

            {/* ——— BITE: Ideas arrive fast. They disappear faster. ——— */}
            <section>
              <h2 className="text-heading-3-bold mb-3">Ideas arrive fast. They disappear faster.</h2>
              <p className="text-body-2 text-gray-300 mb-6">
                Not because you forget. Because they left your field of view. Object permanence failure. It's the core cognitive friction of ADHD, and almost nothing on the market addresses it directly.
              </p>
              <p className="text-body-1 text-gray-400 mb-4">
                Existing tools punish this instead of accommodating it. Streak counters shame you for missing a day. Notification badges demand attention you don't have. Gamification assumes the problem is motivation when it's actually the opposite. You need less noise, not more dopamine.
              </p>
              <p className="text-body-1 text-gray-400 mb-4">
                I abandoned 14 productivity apps before I saw the pattern. They were all designed for neurotypical brains and retrofitted with ADHD features. That's not good enough.
              </p>
              <p className="text-body-1 text-gray-400">
                So I started building one for myself. Not a startup. Not a product play. I wanted something that works the way my brain actually works. Fast capture. Deferred classification. Intelligent recall. Zero guilt. The architecture evolved from that need, not from a pitch deck.
              </p>
            </section>

            {/* ——— BITE: The barrier is categorization at entry time ——— */}
            <section>
              <h2 className="text-heading-4-bold mb-6">The barrier is categorization at entry time</h2>
              <p className="text-body-1 text-gray-400 mb-6">
                Most apps ask you to categorize before you capture. Type, pick a list, choose a tag, set a date, assign a priority. By the time you've done that, the thought is gone. Ren's InputDock is a pill-shaped bar at the bottom of every screen. You type or paste anything. Task, idea, name, random thought. Zero structure required. The raw input lives in Stream forever. Nothing is lost because you didn't file it correctly.
              </p>

              {/* ——— BITE: Classification happens on your schedule ——— */}
              <h2 className="text-heading-4-bold mb-6">Classification happens on your schedule</h2>
              <p className="text-body-1 text-gray-400 mb-6">
                The Sifter runs an AI classifier over every raw input. It identifies intent and routes to the right surface with a confidence percentage. You confirm or correct. It learns. The critical insight: <span className="text-white">classification doesn't need to happen at input time.</span> It happens whenever you have the bandwidth. The thought is captured immediately. The sorting waits for you.
              </p>

              {/* ——— BITE: ADHD tools shouldn't demand attention ——— */}
              <h2 className="text-heading-4-bold mb-6">ADHD tools shouldn't demand attention</h2>
              <p className="text-body-1 text-gray-400">
                Radar is time-grouped. Today, Tomorrow, 2 Days Out. It shows what needs attention without pushing. No badge counts. No red dots. No unread numbers. You check on your schedule, not when a notification tells you to. The surface is always there when you open the app, never demanding it when you don't.
              </p>
            </section>

            {/* ——— BITE: Intentionally boring ——— */}
            <section className="bg-zg-dark-0 rounded-lg p-6 md:p-8">
              <h2 className="text-heading-4-bold mb-4">Intentionally boring</h2>
              <p className="text-body-1 text-gray-400 mb-4">
                This was the hardest design decision and the one I'm most proud of.
              </p>
              <p className="text-body-1 text-gray-400 mb-4">
                No emoji in the UI. No streaks. No celebration animations. The tab bar is hidden. Navigation happens through a drawer you pull open when you need it.
              </p>
              <p className="text-body-1 text-gray-400">
                Every other ADHD tool competes for your attention. Ren refuses to. She speaks as a patient friend, not a coach. When you don't need her, she disappears. You come to her. She never comes to you.
              </p>
            </section>

            {/* ——— BITE: One person, three platforms, one monorepo ——— */}
            <section>
              <h2 className="text-heading-4-bold mb-6">One person, three platforms, one monorepo</h2>
              <p className="text-body-1 text-gray-400 mb-4">
                pnpm monorepo with Turbo. Seven packages, shared utility layer, three targets. Mobile (Expo), web (Next.js), browser extension. All sharing @ren/shared.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="bg-zg-dark-0 rounded p-3">
                  <p className="text-body-1-semibold text-white">@ren/mobile</p>
                  <p className="text-microcopy-2 text-gray-400">Expo / React Native</p>
                </div>
                <div className="bg-zg-dark-0 rounded p-3">
                  <p className="text-body-1-semibold text-white">@ren/web</p>
                  <p className="text-microcopy-2 text-gray-400">Next.js dashboard</p>
                </div>
                <div className="bg-zg-dark-0 rounded p-3">
                  <p className="text-body-1-semibold text-white">@ren/extension</p>
                  <p className="text-microcopy-2 text-gray-400">Browser extension (planned)</p>
                </div>
                <div className="bg-zg-dark-0 rounded p-3">
                  <p className="text-body-1-semibold text-white">@ren/ren-agent</p>
                  <p className="text-microcopy-2 text-gray-400">AI agent logic</p>
                </div>
                <div className="bg-zg-dark-0 rounded p-3">
                  <p className="text-body-1-semibold text-white">@ren/ren-brain</p>
                  <p className="text-microcopy-2 text-gray-400">Drizzle, Postgres, Sifter</p>
                </div>
                <div className="bg-zg-dark-0 rounded p-3">
                  <p className="text-body-1-semibold text-white">@ren/memo-adapter</p>
                  <p className="text-microcopy-2 text-gray-400">Memo MCP integration</p>
                </div>
              </div>

              <p className="text-body-1 text-gray-400 mb-4">
                The mobile app has no direct dependency on the AI layer. The Sifter runs server-side. Mobile captures locally and syncs. AI is an enhancement, not a prerequisite.
              </p>

              <p className="text-body-1 text-gray-400 mb-4">
                Data layer is Drizzle ORM with SQLite on device and PostgreSQL on Neon. Bidirectional sync with op_id idempotency. Capture in a tunnel, on a plane, in a dead zone. Syncs when you're back. Auth is custom JWT in SecureStore on mobile, NextAuth on web.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <Tag>Drizzle ORM</Tag>
                <Tag>SQLite / Neon</Tag>
                <Tag>push/pull sync</Tag>
                <Tag>OpenRouter / OpenAI</Tag>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-zg-dark-0 rounded p-3">
                  <p className="text-body-1-semibold text-white">Today</p>
                  <p className="text-microcopy-2 text-gray-400">Cards with accent borders, capture bar</p>
                </div>
                <div className="bg-zg-dark-0 rounded p-3">
                  <p className="text-body-1-semibold text-white">Radar</p>
                  <p className="text-microcopy-2 text-gray-400">Tomorrow, 2 Days Out, no badges</p>
                </div>
                <div className="bg-zg-dark-0 rounded p-3">
                  <p className="text-body-1-semibold text-white">Inbox</p>
                  <p className="text-microcopy-2 text-gray-400">Classification + confirm</p>
                </div>
                <div className="bg-zg-dark-0 rounded p-3">
                  <p className="text-body-1-semibold text-white">Stream</p>
                  <p className="text-microcopy-2 text-gray-400">Raw input log, time-grouped</p>
                </div>
                <div className="bg-zg-dark-0 rounded p-3">
                  <p className="text-body-1-semibold text-white">Projects / Ideas / People</p>
                  <p className="text-microcopy-2 text-gray-400">Status dots, clusters, relationships</p>
                </div>
                <div className="bg-zg-dark-0 rounded p-3">
                  <p className="text-body-1-semibold text-white">Navigation</p>
                  <p className="text-microcopy-2 text-gray-400">Hidden tab bar, slide-in drawers</p>
                </div>
              </div>
            </section>

            {/* ——— BITE: No notifications means slower loops. That's the point. ——— */}
            <section className="bg-zg-dark-0 rounded-lg p-6 md:p-8">
              <h2 className="text-heading-4-bold mb-6">No notifications means slower loops. That's the point.</h2>

              <div className="space-y-5">
                <div>
                  <p className="text-body-1-semibold text-zg-teal mb-1">One person, three platforms</p>
                  <p className="text-body-1 text-gray-400">Mobile, web, and extension from day one required a shared monorepo. More complexity up front. But one architecture decision serves all three targets. Worth it.</p>
                </div>

                <div>
                  <p className="text-body-1-semibold text-zg-teal mb-1">No push means you come to her, not the other way</p>
                  <p className="text-body-1 text-gray-400">Time-sensitive things may not be seen immediately. That's the cost. The benefit is that Ren never adds to the noise. A deliberate choice that contradicts every other tool in this space.</p>
                </div>

                <div>
                  <p className="text-body-1-semibold text-zg-teal mb-1">Auth should have been first</p>
                  <p className="text-body-1 text-gray-400">`isAuthenticated: true` is hardcoded. The migration exists. But it hasn't been applied yet. Technical debt that needs a dedicated sprint before shipping.</p>
                </div>
              </div>
            </section>

            {/* ——— BITE: The capture loop works. Auth is still being wrangled. ——— */}
            <section>
              <h2 className="text-heading-4-bold mb-4">The capture loop works. Auth is still being wrangled.</h2>

              <p className="text-body-1 text-gray-400 mb-4">
                All six screens are built. The Sifter classifies. Auth backend is written. The capture loop works end to end. What's left: real API wiring, auth migration against production, Apple Sign In, the Sanctuary modal, and the onboarding flow.
              </p>

              <p className="text-body-1 text-gray-500">
                Ren is being built one layer at a time. She's not for everyone. That's the point.{" "}
                <Link href="/lets-talk" className="text-zg-teal hover:text-zg-coral transition-colors">Get in touch</Link> if you want to talk architecture or test early access.
              </p>
            </section>

          </div>
        </PasswordGate>
      </div>
    </>
  );
}
