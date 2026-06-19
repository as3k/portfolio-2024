import Link from "next/link";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/FadeIn";
import JsonLd, { createBreadcrumbSchema, createHowToSchema } from "@/components/JsonLd";

export const metadata = {
  title: "From Concept to Production | Zachary Guerrero",
  description:
    "Seven stages. One person. Full cycle. How I own features from research through deployment with AI amplification at every step.",
};

function ProcessStep({ number, title, claim, body, ships, isAmplified }) {
  return (
    <section className="py-12 border-b border-gray-800 last:border-b-0">
      <div className="flex items-baseline gap-4 mb-4">
        <span className={`text-display-2-bold ${isAmplified ? "text-zg-teal/40" : "text-zg-teal/30"}`}>
          {number}
        </span>
        <h2 className="text-heading-3-bold text-white">{title}</h2>
        {isAmplified && (
          <span className="inline-flex items-center gap-1 text-microcopy-2 text-zg-teal bg-zg-teal/10 px-2 py-0.5 rounded-full">
            AI-amplified
          </span>
        )}
      </div>

      {/* Snack: one bold claim */}
      <p className="text-body-1-semibold text-white mb-3 max-w-2xl">
        {claim}
      </p>

      {/* Meal: body paragraph */}
      <p className="text-body-1 text-gray-400 mb-4 max-w-3xl">
        {body}
      </p>

      {/* Snack: deliverables */}
      <div className="flex flex-wrap gap-2">
        <span className="text-microcopy-2 text-gray-500 mr-1">Ships:</span>
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
    claim: "I do the research myself. No handoff to a separate researcher.",
    body: "User interviews, competitive analysis, analytics review, current-state audit. I go straight to the source. AI helps me synthesize sessions, spot patterns across datasets, and flag assumptions I might have missed. But I ask the questions. I watch the recordings. I decide what matters.",
    ships: ["Problem statement", "User pain points mapped", "Constraints documented"],
    isAmplified: false,
  },
  {
    number: "02",
    title: "Define & Strategize",
    claim: "I scope the feature. I set the principles. No PM gatekeeper.",
    body: "Journey maps, prioritization, success metrics, design principles. I define what we are solving and why before anyone touches a design tool. AI helps me generate journey alternatives, stress-test assumptions against edge cases I might not have considered, and document decisions as I go.",
    ships: ["User journey maps", "Design principles", "Success metrics"],
    isAmplified: false,
  },
  {
    number: "03",
    title: "Ideate & Prototype",
    claim: "Human-led exploration. AI-accelerated iteration.",
    body: "I sketch in Figma first. Low-fi wireframes, flow diagrams, rough layouts. The thinking is mine — the information architecture, the decision hierarchy, the sequencing. Once the structure is right, AI helps me generate visual alternatives, fill in component variations, and spin up clickable prototypes faster so I can test sooner.",
    ships: ["Wireframes (multiple directions)", "Clickable prototype", "Edge cases identified"],
    isAmplified: false,
  },
  {
    number: "04",
    title: "Test & Iterate",
    claim: "I watch every session. I decide what to fix.",
    body: "Usability tests, stakeholder walkthroughs, pattern analysis. If one person struggles, I note it. If three struggle, I redesign it. AI helps me pull themes across test sessions, compile findings faster, and track which patterns keep appearing across projects so I don't solve the same problem twice.",
    ships: ["Test findings with recommendations", "Updated prototype", "Confidence to build"],
    isAmplified: false,
  },
];

const amplifiedSteps = [
  {
    number: "05",
    title: "Build",
    claim: "Foundation is locked. AI flips the switch on execution.",
    body: "I direct agents to generate code, write tests, scaffold components. They execute under my feedback and review. Every pull request runs through AI-assisted review alongside my eyes. I catch issues before they hit production. The result: what takes most teams two weeks ships in two days, without cutting corners on judgment.",
    ships: ["Production code", "Tests", "Documentation"],
    isAmplified: true,
  },
  {
    number: "06",
    title: "Deploy",
    claim: "I handle the pipeline. Code doesn't ship until I ship it.",
    body: "Docker images, CI/CD pipelines, DNS, SSL, environment configs, monitoring. I build the deployment infrastructure alongside the feature so there is no 'throw it over the wall to DevOps.' If something breaks at 2am, I know the stack well enough to fix it without escalating.",
    ships: ["Deployed feature", "Monitoring in place", "Rollback plan"],
    isAmplified: true,
  },
  {
    number: "07",
    title: "Measure & Optimize",
    claim: "Did it move the needle? I track it. I iterate it.",
    body: "Post-launch metrics, user feedback, session replays, support ticket analysis. I don't launch and walk away. I watch how people actually use what I built, identify new friction points, and prioritize the next iteration. AI helps me surface anomalies across datasets and flag regression patterns early.",
    ships: ["Post-launch analysis", "Iteration backlog", "Learnings documented"],
    isAmplified: true,
  },
];

const differentiators = [
  {
    title: "One person, full cycle.",
    description:
      "From research to deploy. No handoff tax, no translation loss. The person who designs it builds it. The person who builds it ships it.",
  },
  {
    title: "Human direction, AI amplification.",
    description:
      "I do the thinking. I set the strategy. AI accelerates the execution under my feedback. That means I ship what takes most teams two weeks in two days, without sacrificing judgment.",
  },
  {
    title: "No PM buffer, no handoff chain.",
    description:
      "I scope features, prioritize decisions, and manage tradeoffs directly with stakeholders. The person you talk to is the person building it. One conversation replaces a chain of meetings.",
  },
  {
    title: "Design with reality, not theory.",
    description:
      "I design in the stack. I prototype in production-grade tools. Every decision is made knowing how it will be built, deployed, and maintained. No surprises at implementation time.",
  },
];

const tools = [
  { category: "Design", items: "Figma, Pen & Paper" },
  { category: "Build", items: "Next.js, React, Vue, Python, PHP, Node.js" },
  { category: "Ship", items: "Docker, Vercel, Cloudflare, CI/CD, AWS" },
  { category: "Amplify", items: "Claude Code, Pi, Hermes, Codex" },
  { category: "Test", items: "Production monitoring, Umami, session replay" },
  { category: "Manage", items: "Obsidian, Linear, GitHub, n8n" },
];

const expectations = [
  {
    claim: "I ask a lot of questions upfront.",
    body: "I need to understand the problem, constraints, and goals before I design or build anything. Expect a deep discovery phase.",
  },
  {
    claim: "I show work early and often.",
    body: "First in Figma, then in a live staging environment. I don't disappear for two weeks. You see progress in real time.",
  },
  {
    claim: "I push back when it hurts the user or the architecture.",
    body: "I'm collaborative but direct. If a requirement creates a bad experience or technical debt that will bite you later, I will explain why and propose alternatives.",
  },
  {
    claim: "I ship the full pipeline.",
    body: "Design, code, deploy, monitor. I don't hand off and disappear. I see features through to production and measure their impact. That is the full cycle.",
  },
];

export default function ProcessPage() {
  // Build HowTo steps from our data
  const howToSteps = [...processSteps, ...amplifiedSteps].map((step) => ({
    title: step.title,
    body: step.claim + " " + step.body,
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
            Seven stages. One person. Full cycle.
          </p>
          {/* Snack */}
          <p className="text-body-2 text-gray-300 mb-4">
            I am the researcher, the definer, the designer, the builder, the QA tester, the shipper. Every role in this pipeline is me. I work with teams, but I don't depend on them to cross the finish line.
          </p>
          {/* Meal */}
          <p className="text-body-1 text-gray-500">
            AI agents amplify every stage under my direction. Research synthesis, prototype iteration, code generation, deployment orchestration, monitoring. They accelerate the execution. I own the decisions. The thinking is human. The output is amplified.
          </p>
        </header>
      </FadeIn>

      {/* Process Steps --- Human-led (01-04) */}
      <FadeIn delay={0.1}>
        <div className="mb-12">
          {processSteps.map((step) => (
            <ProcessStep key={step.number} {...step} />
          ))}
        </div>
      </FadeIn>

      {/* AI Amplifier Callout --- Bite-level visual breakpoint */}
      <FadeIn delay={0.15}>
        <section className="mb-12 p-8 md:p-10 bg-gradient-to-br from-zg-teal/10 to-zg-dark-0 rounded-lg border border-zg-teal/20">
          {/* Bite */}
          <h2 className="text-heading-3-bold text-white mb-3">
            At this point, the process changes.
          </h2>
          {/* Snack */}
          <p className="text-body-1-semibold text-zg-teal mb-4">
            Human direction shifts to AI-amplified execution.
          </p>
          {/* Meal */}
          <p className="text-body-1 text-gray-400 mb-6 max-w-3xl">
            Steps 1 through 4 are where the thinking happens. Research, strategy, design, testing. I own every decision. No AI shortcuts on judgment. Step 5 is where AI flips the switch. The foundation is locked, the direction is clear. Now I direct agents to build, iterate, and ship at a velocity most teams cannot match.
          </p>
          {/* Bite-level visual: two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-zg-dark-0 rounded-lg p-4 border border-gray-700/50">
              <span className="text-microcopy-1 text-gray-400">Human-led</span>
              <div className="flex items-center gap-2 text-body-1 text-white">
                <span className="text-zg-teal">01&ndash;04</span>
                <span>Research &rarr; Define &rarr; Ideate &rarr; Test</span>
              </div>
            </div>
            <div className="bg-zg-dark-0 rounded-lg p-4 border border-zg-teal/20">
              <span className="text-microcopy-1 text-zg-teal">AI-amplified</span>
              <div className="flex items-center gap-2 text-body-1 text-white">
                <span className="text-zg-teal">05&ndash;07</span>
                <span>Build &rarr; Deploy &rarr; Measure</span>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Process Steps --- AI-amplified (05-07) */}
      <FadeIn delay={0.2}>
        <div className="mb-16">
          {amplifiedSteps.map((step) => (
            <ProcessStep key={step.number} {...step} />
          ))}
        </div>
      </FadeIn>

      {/* The Product Engineer Difference */}
      <FadeIn delay={0.25}>
        <section className="mb-16">
          <h2 className="text-heading-3-bold mb-8">The Product Engineer Difference</h2>
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
          </div>
        </section>
      </FadeIn>
      </div>
    </>
  );
}
