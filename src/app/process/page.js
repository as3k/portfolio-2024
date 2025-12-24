import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import JsonLd, { createBreadcrumbSchema, createHowToSchema } from "@/components/JsonLd";

export const metadata = {
  title: "Design Process | Zachary Guerrero",
  description:
    "How I approach product design: from understanding the problem to shipping solutions that move metrics.",
  keywords: [
    "design process",
    "UX methodology",
    "product design approach",
    "user-centered design",
  ],
};

function ProcessStep({ number, title, philosophy, whatIDo, whatIDeliver }) {
  return (
    <section className="py-16 border-b border-gray-800 last:border-b-0">
      <div className="flex items-baseline gap-6 mb-8">
        <span className="text-display-2-bold text-zg-teal/30">{number}</span>
        <h2 className="text-heading-3-bold text-white">{title}</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-body-1-semibold text-zg-teal mb-4">What I do</h3>
          <ul className="space-y-3">
            {whatIDo.map((item) => (
              <li key={item.title} className="text-body-1 text-gray-400">
                <span className="text-white font-medium">{item.title}</span>
                {item.description && ` — ${item.description}`}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-body-1-semibold text-zg-teal mb-4">
            What I deliver
          </h3>
          <ul className="space-y-3">
            {whatIDeliver.map((item) => (
              <li
                key={item}
                className="flex gap-2 text-body-1 text-gray-400"
              >
                <span className="text-zg-teal">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-10 text-body-2 text-gray-500 italic border-l-2 border-zg-teal/30 pl-4">
        {philosophy}
      </p>
    </section>
  );
}

const processSteps = [
  {
    number: "01",
    title: "Understand & Research",
    philosophy:
      "You can't design the right solution until you understand the right problem.",
    whatIDo: [
      {
        title: "Talk to stakeholders",
        description:
          "What are the business goals? What constraints exist? What's been tried before?",
      },
      {
        title: "Talk to users",
        description:
          "What are they trying to accomplish? Where do they get stuck? What workarounds have they created?",
      },
      {
        title: "Audit the current experience",
        description:
          "Click through existing flows, note friction points, identify where people drop off",
      },
      {
        title: "Review analytics",
        description:
          "Where are users spending time? Where are they leaving? What paths are they taking?",
      },
      {
        title: "Identify assumptions",
        description: "What does everyone believe is true that might not be?",
      },
    ],
    whatIDeliver: [
      "Clear problem statement (not a feature request)",
      "User pain points mapped to business impact",
      "Constraints and requirements documented",
      "Alignment on what success looks like",
    ],
  },
  {
    number: "02",
    title: "Define & Strategize",
    philosophy:
      "Strategy before aesthetics. If you don't know why you're designing something, you can't design it well.",
    whatIDo: [
      {
        title: "Map user journeys",
        description:
          "What are the steps from awareness to completion? Where's the friction?",
      },
      {
        title: "Prioritize problems",
        description:
          "What will have the biggest impact? What's feasible given time and technical constraints?",
      },
      {
        title: "Set design principles",
        description:
          'The 3-4 rules this solution needs to follow (e.g., "Clarity over features")',
      },
      {
        title: "Define success metrics",
        description: "What will we measure? How will we know this worked?",
      },
      {
        title: "Identify technical constraints",
        description:
          "What's realistic to build? What are the limitations?",
      },
    ],
    whatIDeliver: [
      "User journey maps showing current vs. ideal state",
      "Prioritized list of problems to solve",
      "Design principles specific to this project",
      "Success metrics defined upfront",
    ],
  },
  {
    number: "03",
    title: "Ideate & Prototype",
    philosophy:
      "Test the logic before you polish the pixels. A beautiful design that doesn't work is still broken.",
    whatIDo: [
      {
        title: "Sketch multiple directions",
        description:
          "Explore 2-3 different approaches on paper or in low-fi wireframes",
      },
      {
        title: "Focus on flow, not visuals",
        description:
          "What's the sequence of steps? What information is needed when?",
      },
      {
        title: "Prototype key interactions",
        description:
          "Build clickable prototypes to test the flow, not just show static screens",
      },
      {
        title: "Test internally first",
        description:
          "Walk through the prototype with the team before showing users",
      },
      {
        title: "Refine based on feedback",
        description: "Iterate quickly, adjusting flows before adding polish",
      },
    ],
    whatIDeliver: [
      "Low-fidelity wireframes exploring multiple approaches",
      "Clickable prototypes showing key flows",
      "Rationale for design decisions",
      "Identified edge cases and error states",
    ],
  },
  {
    number: "04",
    title: "Test & Iterate",
    philosophy:
      "Your users will tell you what's broken. Listen to them.",
    whatIDo: [
      {
        title: "Run usability tests",
        description:
          "Watch 3-5 people attempt key tasks. Where do they hesitate?",
      },
      {
        title: 'Ask "why" relentlessly',
        description:
          "When someone clicks the wrong thing, understand what they were thinking",
      },
      {
        title: "Identify patterns",
        description:
          "If one person struggles, it might be them. If three struggle, it's the design",
      },
      {
        title: "Prioritize fixes",
        description:
          "What's breaking the experience vs. what's just suboptimal?",
      },
      {
        title: "Iterate and re-test",
        description: "Major changes get retested. Minor tweaks move forward",
      },
    ],
    whatIDeliver: [
      "Usability test findings with specific recommendations",
      "Updated prototypes addressing critical issues",
      "Confidence that the design will work before development",
    ],
  },
  {
    number: "05",
    title: "Design & Document",
    philosophy:
      "Beautiful design is useless if developers can't build it correctly.",
    whatIDo: [
      {
        title: "Apply visual design",
        description:
          "Typography, color, spacing, imagery—polished and on-brand",
      },
      {
        title: "Design for all states",
        description: "Empty, loading, error, success states",
      },
      {
        title: "Build component libraries",
        description: "Reusable components that scale across the product",
      },
      {
        title: "Create responsive layouts",
        description: "Mobile, tablet, desktop at different viewport sizes",
      },
      {
        title: "Annotate for developers",
        description: "Spacing values, color tokens, font sizes, breakpoints",
      },
    ],
    whatIDeliver: [
      "High-fidelity mockups in Figma",
      "Component library with variants and states",
      "Developer handoff documentation",
      "Responsive designs for multiple breakpoints",
    ],
  },
  {
    number: "06",
    title: "Build & Collaborate",
    philosophy:
      "Design isn't done until it's shipped. Staying involved catches problems before they reach users.",
    whatIDo: [
      {
        title: "Build front-end components",
        description: "I often code the UI myself (React, Next.js, HTML/CSS)",
      },
      {
        title: "Work alongside developers",
        description:
          "In Slack/standup answering questions and unblocking issues",
      },
      {
        title: "Adjust for technical reality",
        description:
          "Sometimes the ideal design isn't feasible. I adjust without compromising UX",
      },
      {
        title: "Review in staging",
        description:
          "QA the implementation to ensure it matches design and functions correctly",
      },
      {
        title: "Handle edge cases",
        description:
          "What happens when the API fails? What if there's no data?",
      },
    ],
    whatIDeliver: [
      "Production-ready code or detailed QA feedback",
      "Solutions to technical blockers during development",
      "Confidence that what ships matches what was designed",
    ],
  },
  {
    number: "07",
    title: "Measure & Optimize",
    philosophy:
      "Design improves when you watch how people actually use it.",
    whatIDo: [
      {
        title: "Track key metrics",
        description:
          "Did completion rates improve? Did drop-off decrease? Did support tickets go down?",
      },
      {
        title: "Gather user feedback",
        description: "What are people saying? What's still confusing?",
      },
      {
        title: "Identify new friction points",
        description: "What problems did this solution create? What did we miss?",
      },
      {
        title: "Iterate based on data",
        description: "Small tweaks can have big impact. Adjust and re-measure",
      },
      {
        title: "Document learnings",
        description: "What worked? What didn't? What would I do differently?",
      },
    ],
    whatIDeliver: [
      "Post-launch analysis showing impact",
      "Recommendations for iteration",
      "Documented learnings for future projects",
    ],
  },
];

const tools = [
  {
    category: "Design",
    items: "Figma, Pen & Paper, Whimsical",
  },
  {
    category: "Development",
    items: "React, Next.js, TypeScript, Tailwind CSS",
  },
  {
    category: "Prototyping",
    items: "Figma, CodeSandbox, Stackblitz",
  },
  {
    category: "Testing",
    items: "Maze, UserTesting, Guerrilla testing",
  },
  {
    category: "Analytics",
    items: "Google Analytics, Hotjar, PostHog",
  },
  {
    category: "Collaboration",
    items: "Slack, Linear, Notion, GitHub",
  },
];

const differentiators = [
  {
    title: "I don't separate design and development",
    description:
      'I design with implementation in mind and often build what I design. Fewer "can we actually build this?" conversations.',
  },
  {
    title: "I prioritize clarity over trends",
    description:
      "I'm not designing for awards. I'm solving real problems for real users. If it works, it works.",
  },
  {
    title: "I design for decisions, not screens",
    description:
      "Every screen is a decision point. My job is to make those decisions obvious and frictionless.",
  },
  {
    title: "I iterate based on data, not opinions",
    description:
      "I have opinions, but I trust data more. If users are struggling, I adjust—even if I love the original design.",
  },
  {
    title: "I explain my thinking",
    description:
      "Stakeholders and developers get context, not just deliverables. I explain why I made specific choices.",
  },
];

export default function ProcessPage() {
  const howToSchema = createHowToSchema(processSteps);
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://zacharyguerrero.com" },
    { name: "Design Process", url: "https://zacharyguerrero.com/process" },
  ]);

  return (
    <>
      <JsonLd data={howToSchema} />
      <JsonLd data={breadcrumbSchema} />
      <div className="container my-12 lg:my-16">
        {/* Header */}
        <FadeIn>
        <header className="max-w-3xl mb-20 lg:mb-24">
          <h1 className="text-heading-1-bold mb-6">How I Work</h1>
          <p className="text-heading-5 text-gray-400">
            My approach is simple: understand the problem, design for clarity,
            build with constraints in mind, and measure what matters.
          </p>
          <p className="mt-6 text-body-1 text-gray-500">
            I don't follow a rigid process. Every project is different. But
            there are patterns in how I approach problems—especially when the
            goal is to turn something complex into something simple.
          </p>
        </header>
      </FadeIn>

      {/* Process Steps */}
      <FadeIn delay={0.1}>
        <div className="mb-20">
          {processSteps.map((step) => (
            <ProcessStep key={step.number} {...step} />
          ))}
        </div>
      </FadeIn>

      {/* Tools */}
      <FadeIn delay={0.2}>
        <section className="mb-20">
          <h2 className="text-heading-3-bold mb-8">Tools I Use</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {tools.map((tool) => (
              <div key={tool.category} className="p-6 bg-zg-dark-0 rounded-lg">
                <h3 className="text-body-1-semibold text-zg-teal mb-3">
                  {tool.category}
                </h3>
                <p className="text-body-1 text-gray-400">{tool.items}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* What Makes Me Different */}
      <FadeIn delay={0.3}>
        <section className="mb-20">
          <h2 className="text-heading-3-bold mb-8">
            What Makes My Process Different
          </h2>
          <div className="space-y-6">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-6 bg-zg-dark-0 rounded-lg"
              >
                <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-zg-teal" />
                <div>
                  <h3 className="text-body-1-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-body-1 text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* How We'd Work Together */}
      <FadeIn delay={0.4}>
        <section className="mb-20 p-8 bg-zg-dark-0 rounded-lg">
          <h2 className="text-heading-3-bold mb-6">How We'd Work Together</h2>
          <p className="text-body-1 text-gray-400 mb-6">
            If you hire me, here's what you can expect:
          </p>
          <ul className="space-y-4 text-body-1 text-gray-400">
            <li className="flex gap-3">
              <span className="text-zg-teal font-bold">→</span>
              <span>
                <strong className="text-white">
                  I ask a lot of questions upfront.
                </strong>{" "}
                I need to understand the problem, constraints, and goals before
                I design anything.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-zg-teal font-bold">→</span>
              <span>
                <strong className="text-white">
                  I show work in progress early.
                </strong>{" "}
                I don't disappear for two weeks. I share rough work, get
                feedback, and iterate.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-zg-teal font-bold">→</span>
              <span>
                <strong className="text-white">
                  I push back when something hurts the user.
                </strong>{" "}
                I'm collaborative, but if a requirement creates a bad
                experience, I'll explain why and propose alternatives.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-zg-teal font-bold">→</span>
              <span>
                <strong className="text-white">I communicate clearly.</strong> I
                avoid jargon, explain tradeoffs, and make sure everyone
                understands what we're building and why.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-zg-teal font-bold">→</span>
              <span>
                <strong className="text-white">I ship.</strong> I don't just
                design—I see things through to launch and measure their impact.
              </span>
            </li>
          </ul>
        </section>
      </FadeIn>

      {/* CTA */}
      <FadeIn delay={0.5}>
        <section className="text-center">
          <h2 className="text-heading-3-bold mb-4">Let's Work Together</h2>
          <p className="text-body-1 text-gray-400 mb-8">
            If this sounds like a good fit, let's talk.
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
              View My Work
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
