import Link from "next/link";
import { FadeIn, } from "@/components/FadeIn";
import JsonLd, { createBreadcrumbSchema, createHowToSchema } from "@/components/JsonLd";

export const metadata = {
  title: "From Concept to Production | Zachary Guerrero",
  description:
    "How Zachary Guerrero connects research, interaction design, implementation, and iteration as a Design Engineer.",
};

function ProcessStep({ number, title, claim, body, detail, ships, isAmplified }) {
  return (
    <section className="py-12 border-b border-gray-800 last:border-b-0">
      <div className="flex items-baseline gap-4 mb-4">
        <span className={`text-display-2-bold ${isAmplified ? "text-zg-teal/40" : "text-zg-teal/30"}`}>
          {number}
        </span>
        <h2 className="text-heading-3-bold text-white">{title}</h2>
      </div>

      {/* Snack: one bold claim */}
      <p className="text-body-1-semibold text-white mb-3 max-w-2xl">
        {claim}
      </p>

      {/* Meal: body paragraph */}
      <p className="text-body-1 text-gray-400 mb-4 max-w-3xl">
        {body}
      </p>

      {detail && (
        <p className="text-body-1 text-gray-400 mb-4 max-w-3xl">
          {detail}
        </p>
      )}

      {/* Snack: deliverables */}
      <div className="flex flex-wrap gap-2">
        <span className="text-microcopy-2 text-gray-400 mr-1">Ships:</span>
        {ships.map((item) => (
          <span
            key={item}
            className="text-microcopy-2 bg-zg-dark-0 text-gray-400 px-2.5 py-1 rounded"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

function DifferentiatorCard({ title, description }) {
  return (
    <div className="flex gap-4 p-6 bg-zg-dark-0 rounded-lg">
      <div className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-zg-teal" />
      <div>
        <h3 className="text-body-1-semibold text-white mb-2">{title}</h3>
        <p className="text-body-1 text-gray-400">{description}</p>
      </div>
    </div>
  );
}

const processSteps = [
  {
    number: "01",
    title: "Understand & Research",
    claim: "Start with the people, workflow, and constraints closest to the problem.",
    body: "The evidence depends on the work: user interviews, support insight, operational feedback, competitive research, analytics, or a current-state audit. I make the assumptions visible before design decisions harden.",
    detail: "Specialized research agents accelerate evidence-gathering and synthesis. I review their output before it shapes scope.",
    ships: ["Problem statement", "User pain points mapped", "Constraints documented"],
    isAmplified: false,
  },
  {
    number: "02",
    title: "Define & Strategize",
    claim: "Turn evidence into a clear problem, a workable scope, and success criteria.",
    body: "I use journey maps, prioritization, design principles, and technical investigation to define what the feature needs to do. Product, support, engineering, and stakeholders add context that changes the decision.",
    ships: ["User journey maps", "Design principles", "Success metrics"],
    isAmplified: false,
  },
  {
    number: "03",
    title: "Ideate & Prototype",
    claim: "Explore the interaction before committing to the implementation.",
    body: "I use wireframes, flow diagrams, prototypes, and implementation sketches to test hierarchy, states, and sequencing. Knowing the code changes what is worth exploring and what is likely to break at the edges.",
    ships: ["Wireframes (multiple directions)", "Clickable prototype", "Edge cases identified"],
    isAmplified: false,
  },
  {
    number: "04",
    title: "Test & Iterate",
    claim: "Validate the riskiest assumptions before and after launch.",
    body: "I use usability tests, stakeholder walkthroughs, operational feedback, and production signals to understand what changed. The goal is not a ceremony. It is to learn enough to make the next decision better.",
    detail: "Independent QA and review agents check the work. The agent that built something is never the only one judging it, and my review is the final gate.",
    ships: ["Test findings with recommendations", "Updated prototype", "Confidence to build"],
    isAmplified: false,
  },
];

const amplifiedSteps = [
  {
    number: "05",
    title: "Build",
    claim: "Build with the interaction, edge cases, and maintenance path in view.",
    body: "I contribute to production interfaces, component architecture, integrations, and tests. One AI orchestrator directs specialized subagents across research, SEO research, planning, development, QA, review, copywriting, and image generation. Copywriting agents work within the brand documents.",
    detail: "Models are selected from task context and constraints, then kept coherent across a session. Human approval gates separate each stage. I conduct the final review before anything ships.",
    ships: ["Production code", "Tests", "Documentation"],
    isAmplified: true,
  },
  {
    number: "06",
    title: "Deploy",
    claim: "Make delivery part of the feature, not an afterthought.",
    body: "Deployment, environment configuration, monitoring, documentation, and rollback planning affect whether a feature is actually usable. I work with the relevant owners to make those paths clear before launch.",
    ships: ["Deployed feature", "Monitoring in place", "Rollback plan"],
    isAmplified: true,
  },
  {
    number: "07",
    title: "Measure & Optimize",
    claim: "Use what happened after launch to guide the next iteration.",
    body: "I look at the evidence available: product metrics, support feedback, operational results, and direct observation. Then I document what worked, what remains uncertain, and what the team should improve next.",
    ships: ["Post-launch analysis", "Iteration backlog", "Learnings documented"],
    isAmplified: true,
  },
];

const differentiators = [
  {
    title: "Context stays connected.",
    description:
      "I stay close to the work from research through implementation, so the product rationale remains available when technical tradeoffs appear.",
  },
  {
    title: "Judgment before automation.",
    description:
      "Agents produce work at scale. I define the workflow, decide which model handles each task, review every stage, and remain responsible for whether the work continues or ships. The human never leaves the loop.",
  },
  {
    title: "Collaboration across disciplines.",
    description:
      "I work directly with product, engineering, support, operations, and stakeholders to surface the information that shapes the feature.",
  },
  {
    title: "Design with reality, not theory.",
    description:
      "I design with real implementation constraints in mind. Prototypes, code, and system knowledge help expose risk before the work becomes expensive to change.",
  },
];

const tools = [
  { category: "Design", items: "Figma, Pen & Paper" },
  { category: "Build", items: "Next.js, React, Vue, Python, PHP, Node.js" },
  { category: "Ship", items: "Docker, Vercel, Cloudflare, CI/CD, AWS" },
  { category: "Workflow support", items: "Claude Code, Hermes, agentic subagent workflows (orchestrator + specialists), Vercel AI Gateway model routing" },
  { category: "Test", items: "Production monitoring, Rybbit, session replay" },
  { category: "Manage", items: "Obsidian, Linear, GitHub, n8n" },
];

const expectations = [
  {
    claim: "I ask a lot of questions upfront.",
    body: "I need to understand the problem, constraints, and goals before I design or build anything. Expect a deep discovery phase.",
  },
  {
    claim: "I show work early and often.",
    body: "First in Figma, then in a live staging environment when the work calls for it. You see the reasoning and progress as the work develops.",
  },
  {
    claim: "I push back when it hurts the user or the architecture.",
    body: "I'm collaborative but direct. If a requirement creates a bad experience or technical debt that will bite you later, I will explain why and propose alternatives.",
  },
  {
    claim: "I ship the full pipeline.",
    body: "Design, code, deploy, and monitor. I stay involved through production so the product rationale remains available when implementation tradeoffs appear.",
  },
];

export default function ProcessPage() {
  // Build HowTo steps from our data
  const howToSteps = [...processSteps, ...amplifiedSteps].map((step) => ({
    title: step.title,
    body: `${step.claim} ${step.body}`,
  }));
  const howToSchema = createHowToSchema(howToSteps);
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://zacharyguerrero.com" },
    { name: "Process", url: "https://zacharyguerrero.com/process" },
  ]);

  return (
    <>
      <JsonLd data={howToSchema} />
      <JsonLd data={breadcrumbSchema} />
      <div className="container my-12 lg:my-16">
        {/* Hero --- Bite + Snack + Meal */}
        <FadeIn>
        <header className="max-w-3xl mb-16 lg:mb-20">
          {/* Bite */}
          <h1 className="text-heading-1-bold mb-4">
            From Concept to Production
          </h1>
          <p className="text-heading-5 text-zg-teal mb-6">
            A flexible path from discovery to iteration.
          </p>
          {/* Snack */}
          <p className="text-body-2 text-gray-300 mb-4">
            The sequence is not rigid, but the connection matters: understand the problem, shape the interaction, build with real constraints in view, then learn from what ships.
          </p>
          {/* Meal */}
          <p className="text-body-1 text-gray-400">
            I work across product, design, engineering, support, and operations. My contribution is keeping the context visible as the feature moves between those conversations.
          </p>
        </header>
      </FadeIn>

      {/* Process Steps --- Discovery and interaction (01-04) */}
      <FadeIn delay={0.1}>
        <div className="mb-12">
          {processSteps.map((step) => (
            <ProcessStep key={step.number} {...step} />
          ))}
        </div>
      </FadeIn>

      {/* Delivery context */}
      <FadeIn delay={0.15}>
        <section className="mb-12 p-8 md:p-10 bg-gradient-to-br from-zg-teal/10 to-zg-dark-0 rounded-lg border border-zg-teal/20">
          {/* Bite */}
          <h2 className="text-heading-3-bold text-white mb-3">
            Design work changes shape when it meets implementation.
          </h2>
          {/* Snack */}
          <p className="text-body-1-semibold text-zg-teal mb-4">
            The product decision becomes a delivery decision.
          </p>
          {/* Meal */}
          <p className="text-body-1 text-gray-400 mb-6 max-w-3xl">
            Research and interaction design create a direction. Implementation tests that direction against state, APIs, performance, accessibility, operations, and maintenance. Staying involved across both surfaces makes tradeoffs easier to see and discuss.
          </p>
          {/* Bite-level visual: two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-zg-dark-0 rounded-lg p-4 border border-gray-700/50">
              <span className="text-microcopy-1 text-gray-400">Problem and interaction</span>
              <div className="flex items-center gap-2 text-body-1 text-white">
                <span className="text-zg-teal">01&ndash;04</span>
                <span>Research &rarr; Define &rarr; Ideate &rarr; Test</span>
              </div>
            </div>
            <div className="bg-zg-dark-0 rounded-lg p-4 border border-zg-teal/20">
              <span className="text-microcopy-1 text-zg-teal">Implementation and delivery</span>
              <div className="flex items-center gap-2 text-body-1 text-white">
                <span className="text-zg-teal">05&ndash;07</span>
                <span>Build &rarr; Deploy &rarr; Measure</span>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Process Steps --- Delivery (05-07) */}
      <FadeIn delay={0.2}>
        <div className="mb-16">
          {amplifiedSteps.map((step) => (
            <ProcessStep key={step.number} {...step} />
          ))}
        </div>
      </FadeIn>

      {/* Design engineering in practice */}
      <FadeIn delay={0.25}>
        <section className="mb-16">
          <h2 className="text-heading-3-bold mb-8">Why this strengthens the work</h2>
          <div className="space-y-4">
            <DifferentiatorCard
              title="Leverage without abdication."
              description="One person carries context from research through implementation, now with agent scale."
            />
            <DifferentiatorCard
              title="Review is structural, not aspirational."
              description="Separate QA and review agents check the work before it reaches a human approval gate."
            />
            <DifferentiatorCard
              title="Models are selected with context, not habit."
              description="Task context and constraints determine a session's home model, with controlled escalation when the work changes."
            />
            <div className="flex gap-4 p-6 bg-zg-dark-0 rounded-lg">
              <div className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-zg-teal" />
              <div>
                <h3 className="text-body-1-semibold text-white mb-2">Outcomes stay measurable.</h3>
                <p className="text-body-1 text-gray-400">
                  As of September 26, 2026, hemettowing.com ranks on page 1 for “emergency towing hemet.” That is a dated search snapshot, not a permanent ranking claim.{' '}
                  <Link href="/projects/hemet-towing" className="text-zg-teal hover:text-zg-coral transition-colors">
                    Read the Hemet Towing case study.
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-heading-3-bold mb-8">Design Engineering in Practice</h2>
          <div className="space-y-4">
            {differentiators.map((item) => (
              <DifferentiatorCard
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Tools --- Snack grid */}
      <FadeIn delay={0.3}>
        <section className="mb-16">
          <h2 className="text-heading-3-bold mb-8">Tools I Use</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <div key={tool.category} className="p-5 bg-zg-dark-0 rounded-lg">
                <h3 className="text-body-1-semibold text-zg-teal mb-2">
                  {tool.category}
                </h3>
                <p className="text-body-1 text-gray-400">{tool.items}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* What to Expect */}
      <FadeIn delay={0.35}>
        <section className="mb-16 p-8 bg-zg-dark-0 rounded-lg">
          <h2 className="text-heading-3-bold mb-6">What to Expect</h2>
          <div className="space-y-5">
            {expectations.map((item) => (
              <div key={item.claim} className="flex gap-3">
                <span className="text-zg-teal font-bold mt-0.5">&rarr;</span>
                <div>
                  <p className="text-body-1-semibold text-white mb-1">
                    {item.claim}
                  </p>
                  <p className="text-body-1 text-gray-400">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* CTA */}
      <FadeIn delay={0.4}>
        <section className="text-center">
          <h2 className="text-heading-3-bold mb-4">Let's Work Together</h2>
          <p className="text-body-1 text-gray-400 mb-8">
            If this sounds like how you want features built, let's talk.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/lets-talk"
              className="inline-flex items-center gap-2 rounded-md text-white bg-zg-teal hover:bg-zg-coral active:scale-95 active:brightness-90 transition-all duration-300 px-6 py-3 text-body-1-bold"
            >
              Get in Touch
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-md text-white ring-2 ring-gray-600 hover:ring-zg-teal hover:text-zg-teal active:scale-95 transition-all duration-300 px-6 py-3 text-body-1-bold"
            >
              View Case Studies
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 rounded-md text-gray-400 hover:text-zg-teal active:scale-95 transition-all duration-300 px-6 py-3 text-body-1-bold"
            >
              View Resume
            </Link>
            <Link
              href="/consulting"
              className="inline-flex items-center gap-2 rounded-md text-gray-400 hover:text-zg-teal active:scale-95 transition-all duration-300 px-6 py-3 text-body-1-bold"
            >
              Consulting Engagements
            </Link>
          </div>
        </section>
      </FadeIn>
      </div>
    </>
  );
}
