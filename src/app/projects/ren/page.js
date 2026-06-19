import Image from 'next/image';
import Link from "next/link";
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
              Not a productivity app. A cognitive prosthesis. She lives in your pocket. Captures what you'd lose. Brings things back when you need them. Privacy-first. ADHD-designed.
            </p>
            <p className="text-body-1 text-gray-500 max-w-2xl">
              In active development. Real code. Real architecture.
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

            {/* BITE: Ideas arrive fast. They disappear faster. */}
            <section>
              <h2 className="text-heading-3-bold mb-3">Ideas arrive fast. They disappear faster.</h2>
              <p className="text-body-2 text-gray-300 mb-6">
                Not because you forget. Because they left your field of view. Object permanence failure. Almost nothing on the market addresses it directly.
              </p>
              <p className="text-body-1 text-gray-400 mb-4">
                Existing tools punish this instead of accommodating it. Streak counters shame you for missing a day. Notification badges demand attention you don't have. Gamification assumes the problem is motivation when it's the opposite. You need less noise, not more dopamine.
              </p>
              <p className="text-body-1 text-gray-400 mb-4">
                I abandoned 14 productivity apps before I saw the pattern. They were all designed for neurotypical brains and retrofitted with ADHD features.
              </p>
              <p className="text-body-1 text-gray-400 mb-4">
                So I built one. I made every product call, every architecture call, every tradeoff. Fast capture. Deferred classification. Intelligent recall. Zero guilt. The architecture evolved from that need, not from a pitch deck.
              </p>
              <p className="text-body-1 text-gray-400">
                Built solo. Four days from blank repo to working capture loop and memory system. Currently extending to on-device React Native. The UX constraints — no notifications, deferred classification, intentionally boring UI — drove every architecture decision that follows.
              </p>
            </section>

            {/* BITE: The barrier is categorization at entry time */}
            <section>
              <h2 className="text-heading-4-bold mb-6">The barrier is categorization at entry time</h2>
              <p className="text-body-1 text-gray-400 mb-6">
                Most apps ask you to categorize before you capture. Type, pick a list, choose a tag, set a date, assign a priority. By the time you've done that, the thought is gone. Ren's InputDock is a pill-shaped bar at the bottom of every screen. You type or paste anything. Task, idea, name, random thought. Zero structure required. The raw input lives in Stream forever. Nothing is lost because you didn't file it correctly.
              </p>

              {/* BITE: Classification happens on your schedule */}
              <h2 className="text-heading-4-bold mb-6">Classification happens on your schedule</h2>
              <p className="text-body-1 text-gray-400 mb-6">
                The Sifter runs an AI classifier over every raw input. It identifies intent and routes to the right surface with a confidence percentage. You confirm or correct. It learns. <span className="text-white">Classification doesn't need to happen at input time.</span> It happens whenever you have the bandwidth. The thought is captured immediately. The sorting waits for you.
              </p>

              {/* BITE: ADHD tools shouldn't demand attention */}
              <h2 className="text-heading-4-bold mb-6">ADHD tools shouldn't demand attention</h2>
              <p className="text-body-1 text-gray-400">
                Radar is time-grouped. Today, Tomorrow, 2 Days Out. It shows what needs attention without pushing. No badge counts. No red dots. No unread numbers. You check on your schedule, not when a notification tells you to. The surface is always there when you open the app, never demanding it when you don't.
              </p>
            </section>

            {/* BITE: Intentionally boring */}
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

            {/* BITE: One person, three platforms, one monorepo */}
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
            </section>

            {/* BITE: Offline is not a fallback. It's the architecture. */}
            <section className="bg-zg-dark-0 rounded-lg p-6 md:p-8">
              <h2 className="text-heading-4-bold mb-6">Offline is not a fallback. It's the architecture.</h2>

              <p className="text-body-1 text-gray-400 mb-4">
                A body double that disappears when you lose signal isn't a body double. Every write lands in local SQLite on the device, classified by an on-device Gemma 4 model. No network call. No loading state. No wall. When the device reconnects, the sync queue fires automatically against Neon in the cloud. Conflict resolution uses op_id idempotency with last-write-wins at the record level, so two devices capturing the same thought offline converge cleanly.
              </p>

              <p className="text-body-1 text-gray-400 mb-4">
                The mobile app has zero direct dependency on the AI layer. Capture, surfacing, and navigation all work without a model loaded. The LLM is an enhancement, not a prerequisite.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <Tag>SQLite on device</Tag>
                <Tag>Neon PostgreSQL cloud</Tag>
                <Tag>op_id idempotency</Tag>
                <Tag>Gemma 4 on-device</Tag>
                <Tag>auto-sync on reconnect</Tag>
              </div>
            </section>

            {/* BITE: A cognition stack that adapts to the device in your pocket */}
            <section>
              <h2 className="text-heading-4-bold mb-6">A cognition stack that adapts to the device in your pocket</h2>

              <p className="text-body-1 text-gray-400 mb-4">
                At startup, Ren assigns a device tier based on available RAM and an on-device benchmark. The model stack adjusts accordingly — no one-size-fits-all.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="bg-zg-dark-0 rounded p-3 border-l-2 border-emerald-500">
                  <p className="text-body-1-semibold text-white mb-1">Tier HIGH</p>
                  <p className="text-microcopy-2 text-gray-400">Gemma 4 4B Q4 (~2.5GB) on device. Direct extraction. Best experience.</p>
                </div>
                <div className="bg-zg-dark-0 rounded p-3 border-l-2 border-amber-500">
                  <p className="text-body-1-semibold text-white mb-1">Tier MID</p>
                  <p className="text-microcopy-2 text-gray-400">Gemma 4 1B Q4 (~700MB). Two-pass chunking. Cloud fallback when low confidence.</p>
                </div>
                <div className="bg-zg-dark-0 rounded p-3 border-l-2 border-zg-coral">
                  <p className="text-body-1-semibold text-white mb-1">Tier LOW</p>
                  <p className="text-microcopy-2 text-gray-400">Rule-based extraction offline. Xiaomi MiMo API when connected.</p>
                </div>
              </div>

              <p className="text-body-1 text-gray-400 mb-4">
                The local model only handles one thing: <span className="text-white">narration.</span> Not reasoning, not retrieval, not scoring. Rules and embeddings do the heavy lifting — the LLM converts structured data into a warm sentence. This keeps the on-device model small and reliable.
              </p>

              <h3 className="text-heading-5-semibold text-white mb-3">The local RAG loop</h3>
              <p className="text-body-1 text-gray-400 mb-3">
                At write time, every note is embedded via MiniLM (~50MB model) and stored as a vector in sqlite-vec, eliminating the need for a separate vector database. At nudge time:
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-body-1 text-gray-400 mb-4">
                <li>Build context: current time, energy level, day of week</li>
                <li>Query sqlite-vec for similar past items</li>
                <li>Check upcoming events in the next 30 days</li>
                <li>Score candidates by relevance, recency, energy pattern, and time since last surfaced</li>
                <li>Pass top 1-2 candidates as structured data to the local LLM</li>
                <li>LLM narrates a natural-language nudge</li>
              </ol>

              <div className="flex flex-wrap gap-2">
                <Tag>MiniLM embeddings</Tag>
                <Tag>sqlite-vec</Tag>
                <Tag>device-adaptive</Tag>
                <Tag>Gemma 4 / MiMo</Tag>
                <Tag>262K context window</Tag>
              </div>
            </section>

            {/* BITE: The Sifter runs every night, not at input time */}
            <section className="bg-zg-dark-0 rounded-lg p-6 md:p-8">
              <h2 className="text-heading-4-bold mb-6">The Sifter runs every night, not at input time</h2>

              <p className="text-body-1 text-gray-400 mb-4">
                Classification doesn't have to happen when the thought arrives. That's the key insight. Capture is zero-friction — type or paste anything, no categorization required. The raw input lives in the Inbox table forever. Nothing is lost because you didn't file it correctly.
              </p>

              <p className="text-body-1 text-gray-400 mb-4">
                Every night, the Sifter processes unclassified inputs in batch. It pulls raw items, chunks multi-thought dumps into individual items (two-pass: split then classify), extracts entities (people, dates, actions), and routes each item to the appropriate table — tasks, people, events, ideas, or projects. Each classification carries a confidence score. Low-confidence items surface for user confirmation in the Inbox screen.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <div className="bg-zg-dark-0 rounded p-3">
                  <p className="text-body-1-semibold text-white mb-1">Raw capture</p>
                  <p className="text-microcopy-2 text-gray-400">Input dock, text only, zero structure</p>
                </div>
                <div className="bg-zg-dark-0 rounded p-3">
                  <p className="text-body-1-semibold text-white mb-1">Nightly batch</p>
                  <p className="text-microcopy-2 text-gray-400">Sifter processes unclassified items</p>
                </div>
                <div className="bg-zg-dark-0 rounded p-3">
                  <p className="text-body-1-semibold text-white mb-1">Two-pass chunking</p>
                  <p className="text-microcopy-2 text-gray-400">Split then classify each chunk</p>
                </div>
                <div className="bg-zg-dark-0 rounded p-3">
                  <p className="text-body-1-semibold text-white mb-1">User confirmation</p>
                  <p className="text-microcopy-2 text-gray-400">Low-confidence items surface for review</p>
                </div>
              </div>

              <p className="text-body-1 text-gray-400">
                On high-tier devices, extraction happens directly via Gemma 4 4B. On mid-tier devices offline, a two-pass approach splits the input into discrete items first, then classifies each one — two simple tasks the 1B model handles reliably. On low-tier devices, rule-based extraction flags items for review when connectivity returns, with Xiaomi MiMo-V2-Flash as the cloud fallback. MiMo was chosen for its 262K context window — large enough to hold a full week of captures in one call — and its cost ($0.09/M input tokens), which makes nightly batch processing economically viable.
              </p>
            </section>

            {/* BITE: Nine core tables. JSONB where it counts. */}
            <section>
              <h2 className="text-heading-4-bold mb-6">Nine core tables. JSONB where it counts.</h2>

              <p className="text-body-1 text-gray-400 mb-4">
                Drizzle ORM with SQLite on device and PostgreSQL on Neon. The schema is designed around entity types with flexible relationships, not rigid folders.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="bg-zg-dark-0 rounded p-3">
                  <p className="text-body-2-semibold text-zg-teal mb-1">Capture Layer</p>
                  <p className="text-microcopy-2 text-gray-400">inbox_items — raw input, timestamp, classification status</p>
                </div>
                <div className="bg-zg-dark-0 rounded p-3">
                  <p className="text-body-2-semibold text-zg-teal mb-1">Entity Layer</p>
                  <p className="text-microcopy-2 text-gray-400">tasks, people, events, projects, ideas — typed entities with relationships</p>
                </div>
                <div className="bg-zg-dark-0 rounded p-3">
                  <p className="text-body-2-semibold text-zg-teal mb-1">Meta Layer</p>
                  <p className="text-microcopy-2 text-gray-400">app_users (JSONB), links (entity connections), dopamine_rewards</p>
                </div>
              </div>

              <p className="text-body-1 text-gray-400 mb-3">
                <span className="text-white">Key design choice:</span> user preferences, inbox classification results, and tags all use JSONB columns. The schema stays stable while the classification taxonomy evolves. No migrations needed when the Sifter learns a new entity type.
              </p>

              <p className="text-body-1 text-gray-400">
                The links table is the most important structural decision. Any entity can connect to any other entity — a task linked to a person, an idea linked to a project, an event linked to multiple people. This replaces the folder hierarchy that traditional productivity apps impose. Relationships are first-class data.
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                <Tag>Drizzle ORM</Tag>
                <Tag>SQLite / Neon</Tag>
                <Tag>JSONB</Tag>
                <Tag>entity graph</Tag>
                <Tag>links table</Tag>
              </div>
            </section>

            {/* BITE: Nightly distillation turns raw history into patterns */}
            <section className="bg-zg-dark-0 rounded-lg p-6 md:p-8">
              <h2 className="text-heading-4-bold mb-6">Nightly distillation turns raw history into patterns</h2>

              <p className="text-body-1 text-gray-400 mb-4">
                Once per night, when the device is charging and on wifi, Ren sends the last 7 days of captures, interactions, and completions to the cloud model (Xiaomi MiMo-V2-Flash, 262K context). The response writes back <span className="text-white">UserPattern</span> rows — avoidance patterns, focus windows, completion rates. Next day's nudges are richer without any extra API cost during the day.
              </p>

              <p className="text-body-1 text-gray-400 mb-4">
                The 262K context window fits months of user history in a single call. No chunking, no sliding window, no lossy summarization. At $0.09/M input, nightly batch processing across all users costs less than a coffee per day.
              </p>

              <p className="text-body-1 text-gray-400">
                All UserPattern data writes back to the local SQLite database on the next sync. The local model reads these patterns when generating nudges. The cloud enhances. It never owns.
              </p>
            </section>

            {/* BITE: Agent, Brain, and Memo: three layers, one system */}
            <section>
              <h2 className="text-heading-4-bold mb-6">Agent, Brain, and Memo: three layers, one system</h2>

              <p className="text-body-1 text-gray-400 mb-4">
                Ren isn't one service. It's three, each with a clear boundary:
              </p>

              <div className="space-y-4 mb-4">
                <div>
                  <p className="text-body-1-semibold text-zg-teal mb-1">Ren Agent — the persona in your pocket</p>
                  <p className="text-body-1 text-gray-400">Runs on device. Fast, local, always available. Handles the real-time interaction — capture, classification, surfacing. References on-device data without network calls. This is what users talk to.</p>
                </div>
                <div>
                  <p className="text-body-1-semibold text-zg-teal mb-1">Ren Brain — cold storage and deep synthesis</p>
                  <p className="text-body-1 text-gray-400">Runs in the cloud with a compact local mirror. Long-term pattern analysis, nightly distillation, cross-session reasoning. The brain reflects. It doesn't react.</p>
                </div>
                <div>
                  <p className="text-body-1-semibold text-zg-teal mb-1">Memo — the memory system</p>
                  <p className="text-body-1 text-gray-400">Honcho-based MCP memory layer connecting both. Structured persistence for facts, relationships, and context that survives beyond the current session. Memo is the substrate. Agent and Brain are the processes that read and write it.</p>
                </div>
              </div>

              <p className="text-body-1 text-gray-400 mb-4">
                The separation exists for speed. The mobile agent doesn't need to query the cloud to know what you captured 10 seconds ago. And the brain doesn't need to process every individual capture in real time. Two loops, different cadences, same data underneath.
              </p>

              <div className="flex flex-wrap gap-2">
                <Tag>on-device agent loop</Tag>
                <Tag>cloud brain loop</Tag>
                <Tag>Memo MCP adapter</Tag>
                <Tag>Honcho memory</Tag>
                <Tag>cold / warm tiering</Tag>
              </div>
            </section>

            {/* BITE: No notifications means slower loops. That's the point. */}
            <section className="bg-zg-dark-0 rounded-lg p-6 md:p-8">
              <h2 className="text-heading-4-bold mb-6">No notifications means slower loops. That's the point.</h2>

              <div className="space-y-5">
                <div>
                  <p className="text-body-1-semibold text-zg-teal mb-1">No push means you come to her, not the other way</p>
                  <p className="text-body-1 text-gray-400">Time-sensitive things may not be seen immediately. That's the cost. The benefit is that Ren never adds to the noise. A deliberate choice that contradicts every other tool in this space.</p>
                </div>

                <div>
                  <p className="text-body-1-semibold text-zg-teal mb-1">Auth is deferred, not missing</p>
                  <p className="text-body-1 text-gray-400">`isAuthenticated: true` is hardcoded — an intentional deferral while validating the capture UX. The migration is written: Neon Auth with Row-Level Security and custom JWT in SecureStore. It applies before anything ships to users.</p>
                </div>

                <div>
                  <p className="text-body-1-semibold text-zg-teal mb-1">Offline-first is non-negotiable</p>
                  <p className="text-body-1 text-gray-400">Every decision flows from one constraint: the app must work fully without internet. SQLite on device. Local models. Async sync. Cloud is enhancement, never a requirement. An ADHD companion that requires a signal is not reliable enough.</p>
                </div>
              </div>
            </section>

            {/* BITE: The capture loop works. Auth is still being wrangled. */}
            <section>
              <h2 className="text-heading-4-bold mb-4">The capture loop works. Auth is still being wrangled.</h2>

              <p className="text-body-1 text-gray-400 mb-4">
                All six screens are built. The Sifter classifies. Auth backend is written. The capture loop works end to end. What's left: real API wiring, auth migration against production, Apple Sign In, the Sanctuary modal, and the onboarding flow.
              </p>

              <p className="text-body-1 text-gray-500">
                She's not for everyone. That's the point.{" "}
                <Link href="/lets-talk" className="text-zg-teal hover:text-zg-coral transition-colors">Get in touch</Link> to talk architecture or how this translates to your stack.
              </p>
            </section>

          </div>
        </PasswordGate>
      </div>
    </>
  );
}
