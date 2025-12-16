"use client";

import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

export default function AboutPage() {
  return (
    <div className="container my-12 lg:my-16">
      {/* Hero Section */}
      <FadeIn>
        <section className="max-w-3xl mb-16">
          <h1 className="text-heading-2-bold md:text-heading-1-bold mb-6">
            I help people make decisions without friction.
          </h1>
          <p className="text-body-2 text-gray-400">
            For over a decade, I've been the person companies call when something isn't working.
            Not when they need a pretty interface—when they need someone to figure out why users
            start but don't finish, why traffic doesn't convert, why a simple process feels complicated.
          </p>
          <p className="text-body-2 text-gray-400 mt-4">
            I'm a product designer who codes. That combination means I design with implementation
            in mind, I understand technical constraints, and I build my own tools when off-the-shelf
            solutions get in the way.
          </p>
        </section>
      </FadeIn>

      {/* How I Got Here */}
      <FadeIn delay={0.1}>
        <section className="mb-16">
          <h2 className="text-heading-4-bold mb-6">How I Got Here</h2>
          <div className="max-w-3xl space-y-4 text-body-1 text-gray-400">
            <p>
              I didn't start in UX because I wanted to be a designer. I started because things
              were broken and I was the one who could fix them.
            </p>
            <p>
              My path was unconventional: I worked in finance, then technical support, taught
              myself to code, and eventually realized that the most interesting problems weren't
              technical—they were about understanding what people needed and removing everything
              that got in their way.
            </p>
            <p>
              That path taught me to think in systems first, pages second, and visuals last.
              When something feels off, I trace it back to structure, clarity, or decision
              friction—not colors or fonts.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* The Pattern I Keep Seeing */}
      <FadeIn delay={0.2}>
        <section className="mb-16">
          <h2 className="text-heading-4-bold mb-6">The Pattern I Keep Seeing</h2>
          <div className="max-w-3xl space-y-4 text-body-1 text-gray-400">
            <p>
              Across every company, every industry, every project, the same problems keep appearing:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="list-disc">"People visit, but don't take action"</li>
              <li className="list-disc">"Users start, but don't finish"</li>
              <li className="list-disc">"The process feels confusing even though all the information is there"</li>
              <li className="list-disc">"We're spending money on traffic, but conversions are flat"</li>
            </ul>
            <p>
              These aren't design problems. They're decision problems.
              And that's what I've learned to solve.
            </p>
            <p>
              Most of my work is about decisions, not screens. That's why I focus on booking flows,
              multi-step forms, onboarding sequences, and information architecture—the unglamorous
              stuff that actually moves metrics.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* Why Designer Who Codes Matters */}
      <FadeIn delay={0.3}>
        <section className="mb-16">
          <h2 className="text-heading-4-bold mb-6">Why "Designer Who Codes" Actually Matters</h2>
          <div className="max-w-3xl space-y-4 text-body-1 text-gray-400">
            <p>
              I'm not a designer who dabbles in code. I ship production React applications.
              I've rebuilt entire platforms from WordPress to Supabase. I've spent enough time
              debugging CSS to know what's realistic to build.
            </p>
            <p>
              This isn't about being a "full-stack designer" (whatever that means). It's about
              designing with reality in mind:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="list-disc">I know what's feasible to build</li>
              <li className="list-disc">I adjust flows based on technical constraints instead of ignoring them</li>
              <li className="list-disc">I think about state, edge cases, errors, and what users see when things fail</li>
              <li className="list-disc">I prototype in code because showing is faster than explaining</li>
            </ul>
            <p>
              That makes my UX more durable and less fragile.
            </p>
            <p>
              I work with React, Next.js, Figma, and whatever else gets the job done. My experience
              with APIs, authentication, and backend services shapes how I design flows. I don't
              hand things off and hope for the best—I see them through.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* What I Actually Do */}
      <FadeIn delay={0.4}>
        <section className="mb-16">
          <h2 className="text-heading-4-bold mb-6">What I Actually Do</h2>
          <div className="max-w-3xl space-y-4 text-body-1 text-gray-400">
            <p>
              I help B2B SaaS companies turn complex problems into simple experiences. I specialize
              in technical products where complexity meets the need for clarity.
            </p>
            <p>
              I've worked across healthcare, fintech, ISPs, nonprofits, and technical service providers.
              The industry changes, but the problem doesn't: <strong className="text-white">people don't
              understand what's being asked of them.</strong>
            </p>
            <p>
              I make things understandable without talking down to anyone.
            </p>
            <h3 className="text-heading-6-semibold text-white mt-8 mb-4">I'm especially good at:</h3>
            <ul className="space-y-2 ml-6">
              <li className="list-disc">Redesigning multi-step flows that lose users halfway through</li>
              <li className="list-disc">Simplifying information architecture that's grown organically over years</li>
              <li className="list-disc">Building design systems that scale without breaking</li>
              <li className="list-disc">Fixing onboarding sequences that confuse instead of guide</li>
              <li className="list-disc">Conversion rate optimization—making the path from interest to action obvious</li>
            </ul>
          </div>
        </section>
      </FadeIn>

      {/* Design Philosophy */}
      <FadeIn delay={0.5}>
        <section className="mb-16">
          <h2 className="text-heading-4-bold mb-6">My Design Philosophy</h2>
          <div className="max-w-3xl space-y-6">
            <div className="border-l-2 border-zg-teal pl-6">
              <p className="text-body-1-semibold text-white">Clarity beats cleverness.</p>
              <p className="text-body-1 text-gray-400">
                Users don't need to be impressed. They need to know what to do next.
              </p>
            </div>
            <div className="border-l-2 border-zg-teal pl-6">
              <p className="text-body-1-semibold text-white">Fewer choices beat more features.</p>
              <p className="text-body-1 text-gray-400">
                Decision paralysis is real. Give people one clear path, not five mediocre options.
              </p>
            </div>
            <div className="border-l-2 border-zg-teal pl-6">
              <p className="text-body-1-semibold text-white">A clear next step is better than a perfect layout.</p>
              <p className="text-body-1 text-gray-400">
                Users don't want options—they want confidence. My job is to give them that confidence at every step.
              </p>
            </div>
            <div className="border-l-2 border-zg-teal pl-6">
              <p className="text-body-1-semibold text-white">Good UX reduces effort, not adds polish.</p>
              <p className="text-body-1 text-gray-400">
                If users have to think hard about your interface, you've already lost.
              </p>
            </div>
            <p className="text-body-1 text-gray-400 mt-4">
              I design for momentum. If users keep moving forward, the design is working. If they stop, I want to know why.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* How I Work */}
      <FadeIn delay={0.6}>
        <section className="mb-16">
          <h2 className="text-heading-4-bold mb-6">How I Work</h2>
          <div className="max-w-3xl space-y-4 text-body-1 text-gray-400">
            <p>
              I'm collaborative but direct. I explain tradeoffs without being defensive. I push back
              when something hurts the user. I translate UX decisions into business language because
              I've learned that good design means nothing if you can't explain why it matters.
            </p>
            <p>
              Part of my job is helping stakeholders figure out what actually matters.
              I translate complexity into decisions they can act on.
            </p>
            <p className="text-white">
              I don't oversell. I explain.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* What I'm Looking For */}
      <FadeIn delay={0.7}>
        <section className="mb-16">
          <h2 className="text-heading-4-bold mb-6">What I'm Looking For</h2>
          <div className="max-w-3xl space-y-4 text-body-1 text-gray-400">
            <p>
              I'm looking for product design roles at B2B SaaS companies where:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="list-disc">Design decisions are tied to business outcomes</li>
              <li className="list-disc">Designers sit at the table when product decisions are made</li>
              <li className="list-disc">Technical constraints are real challenges to work with, not excuses to compromise</li>
              <li className="list-disc">The team values clarity over trends</li>
              <li className="list-disc">Metrics matter and design is held accountable for results</li>
              <li className="list-disc">Impact matters more than Dribbble shots</li>
            </ul>
            <p>
              I'm less interested in design that looks impressive but doesn't move metrics.
              More interested in work that helps people finish what they start.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* CTA */}
      <FadeIn delay={0.8}>
        <section className="bg-zg-dark-0 rounded-lg p-8 md:p-12">
          <h2 className="text-heading-4-bold mb-4">Let's Talk</h2>
          <p className="text-body-1 text-gray-400 max-w-2xl mb-6">
            If you're building products where user decisions matter, where technical complexity
            is real, and where you need someone who can both design the solution and help build
            it—let's talk.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <Link
              href="mailto:zack@zkg.io"
              className="rounded-md text-white bg-zg-teal hover:bg-zg-coral active:scale-95 active:brightness-90 transition-all duration-300 px-5 py-3 text-body-1-bold"
            >
              Email Me
            </Link>
            <Link
              href="https://linkedin.com/in/zacharyafguerrero"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md text-white ring-2 ring-gray-600 hover:ring-zg-teal hover:bg-zg-teal/10 active:scale-95 active:bg-zg-teal/20 transition-all duration-300 px-5 py-3 text-body-1-bold"
            >
              LinkedIn
            </Link>
          </div>
          <p className="text-microcopy-2 text-gray-500">
            Based in California. Open to remote roles at product-focused companies.
          </p>
        </section>
      </FadeIn>
    </div>
  );
}
