"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CheckCircleIcon,
  CodeBracketIcon,
  CursorArrowRaysIcon,
  PuzzlePieceIcon,
  ArrowPathIcon,
  ChartBarIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/FadeIn";
import JsonLd, { aboutPageSchema, createBreadcrumbSchema } from "@/components/JsonLd";

export default function AboutPage() {
  const patterns = [
    "People visit, but don't take action",
    "Users start, but don't finish",
    "The process feels confusing even though all the information is there",
    "We're spending money on traffic, but conversions are flat",
  ];

  const skills = [
    {
      icon: ArrowPathIcon,
      title: "Multi-step Flows",
      description: "Redesigning flows that lose users halfway through",
    },
    {
      icon: Squares2X2Icon,
      title: "Information Architecture",
      description: "Simplifying structures that have grown organically over years",
    },
    {
      icon: PuzzlePieceIcon,
      title: "Design Systems",
      description: "Building systems that scale without breaking",
    },
    {
      icon: CursorArrowRaysIcon,
      title: "Onboarding",
      description: "Fixing sequences that confuse instead of guide",
    },
    {
      icon: ChartBarIcon,
      title: "Conversion Optimization",
      description: "Making the path from interest to action obvious",
    },
    {
      icon: CodeBracketIcon,
      title: "Prototyping in Code",
      description: "Showing is faster than explaining",
    },
  ];

  const philosophy = [
    {
      principle: "Clarity beats cleverness.",
      explanation: "Users don't need to be impressed. They need to know what to do next.",
    },
    {
      principle: "Fewer choices beat more features.",
      explanation: "Decision paralysis is real. Give people one clear path, not five mediocre options.",
    },
    {
      principle: "A clear next step is better than a perfect layout.",
      explanation: "Users don't want options—they want confidence. My job is to give them that confidence at every step.",
    },
    {
      principle: "Good UX reduces effort, not adds polish.",
      explanation: "If users have to think hard about your interface, you've already lost.",
    },
  ];

  const lookingFor = [
    "Design decisions are tied to business outcomes",
    "Designers sit at the table when product decisions are made",
    "Technical constraints are real challenges, not excuses",
    "The team values clarity over trends",
    "Metrics matter and design is held accountable",
    "Impact matters more than Dribbble shots",
  ];

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://zkg.io" },
    { name: "About", url: "https://zkg.io/about" },
  ]);

  return (
    <>
      <JsonLd data={aboutPageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <div className="container my-12 lg:my-16">
        {/* Hero Section - Two Column */}
      <section className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center mb-24">
        <div className="lg:col-span-3">
          <FadeIn>
            <span className="inline-block text-microcopy-2-semibold text-gray-400 border border-gray-700 rounded-full px-4 py-1.5 mb-6">
              About Me
            </span>
            <h1 className="text-heading-2-bold md:text-heading-1-bold mb-6">
              I help people make decisions without friction.
            </h1>
            <p className="text-body-2 text-gray-400 mb-4">
              For over a decade, I've been the person companies call when something isn't working.
              Not when they need a pretty interface—when they need someone to figure out why users
              start but don't finish, why traffic doesn't convert, why a simple process feels complicated.
            </p>
            <p className="text-body-2 text-gray-400">
              I'm a product designer who codes. That combination means I design with implementation
              in mind, I understand technical constraints, and I build my own tools when off-the-shelf
              solutions get in the way.
            </p>
          </FadeIn>
        </div>
        <FadeIn delay={0.2} direction="left" className="lg:col-span-2">
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
            <Image
              src="/images/zg-coffee-ride-profile-photo.jpg"
              alt="Zachary Guerrero"
              fill
              className="object-cover"
              priority
            />
          </div>
        </FadeIn>
      </section>

      {/* How I Got Here - Card Treatment */}
      <FadeIn>
        <section className="mb-24">
          <div className="bg-zg-dark-0 rounded-lg p-8 md:p-12">
            <h2 className="text-heading-4-bold mb-6">How I Got Here</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <p className="text-body-1 text-gray-400">
                I didn't start in UX because I wanted to be a designer. I started because things
                were broken and I was the one who could fix them.
              </p>
              <p className="text-body-1 text-gray-400">
                My path was unconventional: I worked in finance, then technical support, taught
                myself to code, and eventually realized that the most interesting problems weren't
                technical—they were about understanding what people needed and removing everything
                that got in their way.
              </p>
              <p className="text-body-1 text-gray-400">
                That path taught me to think in systems first, pages second, and visuals last.
                When something feels off, I trace it back to structure, clarity, or decision
                friction—not colors or fonts.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* The Pattern I Keep Seeing - Quote Cards */}
      <section className="mb-24">
        <FadeIn>
          <h2 className="text-heading-4-bold mb-4">The Pattern I Keep Seeing</h2>
          <p className="text-body-1 text-gray-400 max-w-2xl mb-8">
            Across every company, every industry, every project, the same problems keep appearing:
          </p>
        </FadeIn>
        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8" staggerDelay={0.1}>
          {patterns.map((pattern, index) => (
            <FadeInStaggerItem key={index}>
              <div className="bg-zg-dark-0 rounded-lg p-6 border-l-2 border-zg-coral">
                <p className="text-body-1 text-gray-300 italic">"{pattern}"</p>
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
        <FadeIn delay={0.4}>
          <div className="max-w-2xl">
            <p className="text-body-1 text-white font-semibold mb-4">
              These aren't design problems. They're decision problems.
            </p>
            <p className="text-body-1 text-gray-400">
              Most of my work is about decisions, not screens. That's why I focus on booking flows,
              multi-step forms, onboarding sequences, and information architecture—the unglamorous
              stuff that actually moves metrics.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Why Designer Who Codes Matters */}
      <FadeIn>
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-heading-4-bold mb-6">Why "Designer Who Codes" Actually Matters</h2>
              <div className="space-y-4 text-body-1 text-gray-400">
                <p>
                  I'm not a designer who dabbles in code. I ship production React applications.
                  I've rebuilt entire platforms from WordPress to Supabase. I've spent enough time
                  debugging CSS to know what's realistic to build.
                </p>
                <p>
                  This isn't about being a "full-stack designer." It's about designing with reality in mind.
                  That makes my UX more durable and less fragile.
                </p>
                <p>
                  I work with React, Next.js, Figma, and whatever else gets the job done. My experience
                  with APIs, authentication, and backend services shapes how I design flows. I don't
                  hand things off and hope for the best—I see them through.
                </p>
              </div>
            </div>
            <div className="bg-zg-dark-0 rounded-lg p-6 space-y-4">
              <h3 className="text-body-1-semibold text-white">What this means in practice:</h3>
              <ul className="space-y-3">
                {[
                  "I know what's feasible to build",
                  "I adjust flows based on technical constraints instead of ignoring them",
                  "I think about state, edge cases, errors, and what users see when things fail",
                  "I prototype in code because showing is faster than explaining",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-zg-teal flex-shrink-0 mt-0.5" />
                    <span className="text-body-1 text-gray-400">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* What I Actually Do - Skill Cards */}
      <section className="mb-24">
        <FadeIn>
          <h2 className="text-heading-4-bold mb-4">What I Actually Do</h2>
          <p className="text-body-1 text-gray-400 max-w-2xl mb-4">
            I help B2B SaaS companies turn complex problems into simple experiences. I specialize
            in technical products where complexity meets the need for clarity.
          </p>
          <p className="text-body-1 text-gray-400 max-w-2xl mb-8">
            I've worked across healthcare, fintech, ISPs, nonprofits, and technical service providers.
            The industry changes, but the problem doesn't: <span className="text-white font-semibold">people don't
            understand what's being asked of them.</span>
          </p>
        </FadeIn>
        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.1}>
          {skills.map((skill) => (
            <FadeInStaggerItem key={skill.title}>
              <div className="group bg-zg-dark-0 rounded-lg p-6 hover:ring-1 hover:ring-zg-teal/50 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-zg-teal/10 group-hover:bg-zg-teal/20 flex items-center justify-center mb-4 transition-colors duration-300">
                  <skill.icon className="w-5 h-5 text-zg-teal" />
                </div>
                <h3 className="text-body-1-semibold text-white mb-2">{skill.title}</h3>
                <p className="text-body-1 text-gray-400">{skill.description}</p>
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </section>

      {/* Design Philosophy - Horizontal Cards */}
      <section className="mb-24">
        <FadeIn>
          <h2 className="text-heading-4-bold mb-8">My Design Philosophy</h2>
        </FadeIn>
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-4" staggerDelay={0.1}>
          {philosophy.map((item, index) => (
            <FadeInStaggerItem key={index}>
              <div className="bg-zg-dark-0 rounded-lg p-6 border-l-2 border-zg-teal h-full">
                <p className="text-body-1-semibold text-white mb-2">{item.principle}</p>
                <p className="text-body-1 text-gray-400">{item.explanation}</p>
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
        <FadeIn delay={0.5}>
          <p className="text-body-1 text-gray-400 mt-6 max-w-2xl">
            I design for momentum. If users keep moving forward, the design is working. If they stop, I want to know why.
          </p>
        </FadeIn>
      </section>

      {/* How I Work - Highlight Box */}
      <FadeIn>
        <section className="mb-24">
          <div className="bg-gradient-to-br from-zg-teal/10 to-transparent rounded-lg p-8 md:p-12 border border-zg-teal/20">
            <h2 className="text-heading-4-bold mb-6">How I Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 text-body-1 text-gray-400">
                <p>
                  I'm collaborative but direct. I explain tradeoffs without being defensive. I push back
                  when something hurts the user. I translate UX decisions into business language because
                  I've learned that good design means nothing if you can't explain why it matters.
                </p>
                <p>
                  Part of my job is helping stakeholders figure out what actually matters.
                  I translate complexity into decisions they can act on.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <p className="text-heading-5-bold text-white text-center">
                  I don't oversell.<br />
                  <span className="text-zg-teal">I explain.</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* What I'm Looking For */}
      <section className="mb-24">
        <FadeIn>
          <h2 className="text-heading-4-bold mb-4">What I'm Looking For</h2>
          <p className="text-body-1 text-gray-400 mb-8">
            I'm looking for product design roles at B2B SaaS companies where:
          </p>
        </FadeIn>
        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8" staggerDelay={0.08}>
          {lookingFor.map((item, index) => (
            <FadeInStaggerItem key={index}>
              <div className="flex items-start gap-3 bg-zg-dark-0 rounded-lg p-4">
                <CheckCircleIcon className="w-5 h-5 text-zg-teal flex-shrink-0 mt-0.5" />
                <span className="text-body-1 text-gray-300">{item}</span>
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
        <FadeIn delay={0.5}>
          <p className="text-body-1 text-gray-400 max-w-2xl">
            I'm less interested in design that looks impressive but doesn't move metrics.
            More interested in work that helps people finish what they start.
          </p>
        </FadeIn>
      </section>

      {/* CTA */}
      <FadeIn>
        <section className="bg-zg-dark-0 rounded-lg p-8 md:p-12">
          <h2 className="text-heading-4-bold mb-4">Let's Talk</h2>
          <p className="text-body-1 text-gray-400 max-w-2xl mb-6">
            If you're building products where user decisions matter, where technical complexity
            is real, and where you need someone who can both design the solution and help build
            it—let's talk.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <Link
              href="/lets-talk"
              className="rounded-md text-white bg-zg-teal hover:bg-zg-coral active:scale-95 active:brightness-90 transition-all duration-300 px-5 py-3 text-body-1-bold"
            >
              Get in Touch
            </Link>
            <Link
              href="/projects"
              className="rounded-md text-white ring-2 ring-gray-600 hover:ring-zg-teal hover:bg-zg-teal/10 active:scale-95 active:bg-zg-teal/20 transition-all duration-300 px-5 py-3 text-body-1-bold"
            >
              View My Work
            </Link>
            <Link
              href="/process"
              className="rounded-md text-gray-400 hover:text-zg-teal transition-all duration-300 px-5 py-3 text-body-1-bold"
            >
              My Process
            </Link>
          </div>
          <p className="text-microcopy-2 text-gray-500">
            Based in California. Open to remote roles at product-focused companies.
          </p>
        </section>
      </FadeIn>
      </div>
    </>
  );
}
