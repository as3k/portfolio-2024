"use client";

import {
  ArrowPathIcon,
  ChartBarIcon,
  CheckCircleIcon,
  CodeBracketIcon,
  CursorArrowRaysIcon,
  PuzzlePieceIcon,
  Squares2X2Icon,
  ServerStackIcon,
  CommandLineIcon,
  CubeIcon,
  WrenchScrewdriverIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/FadeIn";
import JsonLd, { aboutPageSchema, createBreadcrumbSchema } from "@/components/JsonLd";
import { trackTimelineScroll } from "@/lib/umami";

function TimelineSection() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const lastTrackedYear = useRef(null);

  const startYear = 2008;
  const endYear = new Date().getFullYear();
  const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i);

  const initialTopRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;

      // Capture initial position on first render
      if (initialTopRef.current === null) {
        initialTopRef.current = rect.top;
      }

      // Progress based on scroll from initial position
      // 0 = initial position, 1 = scrolled through entire section
      const scrolled = initialTopRef.current - rect.top;
      const scrollRange = sectionHeight;
      const progress = Math.max(0, Math.min(1, scrolled / scrollRange));

      setScrollProgress(progress);

      // Track timeline scroll when reaching certain milestones (every 5 years)
      const yearIndex = Math.floor(progress * (years.length - 1));
      const currentYear = years[Math.min(yearIndex, years.length - 1)];
      
      // Only track when we reach a new milestone year (every 5 years)
      if (currentYear % 5 === 0 && currentYear !== lastTrackedYear.current) {
        lastTrackedYear.current = currentYear;
        trackTimelineScroll(currentYear);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [years]);

  // Calculate which year to highlight based on scroll progress
  const yearIndex = Math.floor(scrollProgress * (years.length - 1));
  const currentYear = years[Math.min(yearIndex, years.length - 1)];

  // Calculate offset for the wheel effect
  const wheelOffset = scrollProgress * (years.length - 1) * 48; // 48px per year

  return (
    <section ref={sectionRef} className="mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Timeline Wheel - Left 1/3 */}
        <div className="lg:col-span-1">
          <div className="lg:sticky lg:top-32">
            <div className="bg-zg-dark-0 rounded-lg p-8 h-64 flex items-center justify-center overflow-hidden">
              <div className="relative h-full w-full overflow-hidden">
                {/* Scrolling years - 2008 starts centered */}
                <div
                  className="absolute inset-x-0 flex flex-col items-center transition-transform duration-150 ease-out"
                  style={{
                    top: "50%",
                    transform: `translateY(calc(-24px - ${wheelOffset}px))`,
                  }}
                >
                  {years.map((year, index) => {
                    const distanceFromCurrent = Math.abs(index - yearIndex);
                    const opacity = distanceFromCurrent === 0 ? 1 : distanceFromCurrent === 1 ? 0.4 : 0.15;
                    return (
                      <div
                        key={year}
                        className={`h-12 flex items-center justify-center transition-all duration-300 ${
                          year === currentYear
                            ? "text-display-2-bold text-zg-teal scale-110"
                            : "text-heading-3-bold text-gray-600"
                        }`}
                        style={{ opacity }}
                      >
                        {year}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content - Right 2/3 */}
        <div className="lg:col-span-2">
          <h2 className="text-heading-4-bold mb-6">From Design to the Full Stack</h2>
          <div className="space-y-4 text-body-1 text-gray-400">
            <p>
              I started designing websites in 2008. At the time, I was focused on how things looked,
              but I was always more interested in how people actually used them. Why someone clicked
              one thing and ignored another. Why small changes quietly changed behavior.
            </p>
            <p>
              That curiosity pulled me toward UX and CX long before I had the language for it.
              In 2015, while working at ProBoards, I moved fully into UX and realized this was
              the work I cared about most. Not decoration, but understanding how people think,
              decide, and move through a system.
            </p>
            <p>
              Over the years, that focus deepened through my work with Multimedia LLC, Aeries,
              Beetle & Frog, and now Member Splash. But something shifted along the way. I kept
              wanting to cross the line from design to build. Designing something and handing it
              off felt like stopping at the interesting part. So I started writing code. Then
              infrastructure. Then automation. Step by step, I became someone who doesn't just
              figure out what to build and how it should work. I build it and ship it too.
            </p>
            <p>
              Today, I own features from problem to production. I research, define, design,
              prototype, validate, build, QA, deploy, and iterate. Every role in that pipeline
              is me. I work with teams. I don't depend on them to cross the finish line.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  const patterns = [
    "People visit, but don't take action",
    "Users start, but don't finish",
    "The process feels confusing even though all the information is there",
    "We're spending money on traffic, but conversions are flat",
  ];

  const skills = [
    {
      icon: CommandLineIcon,
      title: "Full-Stack Architecture",
      description: "Architecting and building production systems across React, Next.js, Vue, Python, PHP, Supabase, and PostgreSQL. I pick the stack that fits the problem.",
    },
    {
      icon: ServerStackIcon,
      title: "DevOps & Infrastructure",
      description: "Docker, CI/CD, Cloudflare, Vercel, Linux server management. I build deployment pipelines that let me ship without thinking about it.",
    },
    {
      icon: CubeIcon,
      title: "AI Agent Workflows",
      description: "Directing multiple AI agents to accelerate every phase of development. I research and design the foundation, then amplify the build with agents under my direction.",
    },
    {
      icon: ArrowPathIcon,
      title: "Workflow Orchestration",
      description: "Automation pipelines, cron chains, n8n workflows. I wire systems together so processes run themselves instead of needing human babysitting.",
    },
    {
      icon: WrenchScrewdriverIcon,
      title: "Design to Production",
      description: "From first Figma sketch to live deployment. I own the full cycle, so there is no handoff tax and no translation loss between design and code.",
    },
    {
      icon: RocketLaunchIcon,
      title: "Security & Automation",
      description: "Security audits across 20+ client sites. Vulnerability remediation, standards enforcement, AI-assisted code reviews. Security built in, not bolted on.",
    },
  ];

  const philosophy = [
    {
      principle: "Shipping beats perfect. Deadlines sharpen judgment.",
      explanation: "A shipped product with rough edges teaches you more than a polished one that never launches. Scope is a feature. The deadline is the forcing function.",
    },
    {
      principle: "Confusion kills conversion.",
      explanation: "Every moment a user stops to think is a moment they might walk away. Clarity is the highest form of polish. Good UX guides, bad UX asks questions.",
    },
    {
      principle: "Clarity beats cleverness.",
      explanation: "Users don't need to be impressed. They need to know what to do next.",
    },
    {
      principle: "Good UX reduces effort, not adds polish.",
      explanation: "If users have to think hard about your interface, you've already lost. The best experiences don't announce themselves.",
    },
  ];

  const lookingFor = [
    "Small B2B SaaS or startups where I own features end to end",
    "Fast-moving teams that ship instead of chase trends",
    "Take ambiguous features from scope to deploy without handoffs",
    "Design, code, and infrastructure decisions made together, not in silos",
    "Remote or hybrid in Southern California",
  ];

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://zacharyguerrero.com" },
    { name: "About", url: "https://zacharyguerrero.com/about" },
  ]);

  return (
    <>
      <JsonLd data={aboutPageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <div className="container my-12 lg:my-16">
        {/* Hero Section - Two Column */}
      <section className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center mb-16 lg:mb-20">
        <div className="lg:col-span-3">
          <FadeIn>
            <span className="inline-block text-microcopy-2-semibold text-gray-400 border border-gray-700 rounded-full px-4 py-1.5 mb-6">
              About Me
            </span>
            <h1 className="text-heading-2-bold md:text-heading-1-bold mb-4">
              I own the full cycle.
            </h1>
            <span className="inline-block text-microcopy-1 text-zg-teal mb-4">
              Design, code, infrastructure. End to end. Full time or consulting.
            </span>
            <p className="text-body-2 text-gray-400 mb-4">
              Companies call me when their product isn't shipping, their systems are tangled, or they need someone to take an ambiguous feature to production without handoffs.
            </p>
            <p className="text-body-2 text-gray-400">
              I'm a builder who owns the full stack. That means I don't hand off designs and hope for the best. I design it, I code it, I deploy it, I monitor it. If something breaks, I fix it. If something needs to ship faster, I build the pipeline that makes that possible. I work full time or consulting.
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

      {/* How I Got Here - Timeline */}
      <TimelineSection />

      {/* The Pattern I Keep Seeing - Quote Cards */}
      <section className="mb-24">
        <FadeIn>
          <h2 className="text-heading-4-bold mb-4">Same Problems, Every Industry</h2>
          <p className="text-body-1 text-gray-400 max-w-2xl mb-8">
            Across every company, every industry, every project, the same problems keep appearing:
          </p>
        </FadeIn>
        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10 mb-8" staggerDelay={0.1}>
          {patterns.map((pattern, index) => (
            <FadeInStaggerItem key={index}>
              <div className="bg-zg-dark-0 rounded-lg p-6 pl-5 border-l-2 border-zg-coral">
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
              multi-step forms, onboarding sequences, and information architecture. The unglamorous
              stuff that actually moves metrics.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Why Full Stack Ownership Matters */}
      <FadeIn>
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            <div>
              <h2 className="text-heading-4-bold mb-6">Full Cycle, One Person</h2>
              <div className="space-y-4 text-body-1 text-gray-400">
                <p>
                  I'm not a designer who dabbles in code. I ship production applications across the full stack. React, Next.js, Vue, Python, PHP. Docker, PostgreSQL, Supabase. I've rebuilt entire platforms from WordPress to modern stacks. I've debugged enough CSS and enough network latency to know what's realistic to build.
                </p>
                <p>
                  The difference is not that I can code. The difference is that one person owns the entire lifecycle. No handoff tax between design and engineering. No translation loss between prototype and production. When I design a feature, I know how I'm going to build it. When I build it, I already know how I'm going to deploy it.
                </p>
                <p>
                  I use AI agents as force multipliers, not replacements. I direct them under my strategy and feedback. That means I can ship what takes most teams two weeks in two days, without cutting corners on thinking or judgment.
                </p>
              </div>
            </div>
            <div className="bg-zg-dark-0 rounded-lg p-6 space-y-4">
              <h3 className="text-body-1-semibold text-white">What this means in practice:</h3>
              <ul className="space-y-3">
                {[
                  "I own features from vague idea to live deployment",
                  "I design with the implementation already in mind",
                  "I adjust scope based on real technical constraints, not guesses",
                  "I build the deployment pipeline alongside the feature",
                  "I debug at every layer from CSS to database queries",
                  "I ship faster because there are no handoffs to wait on",
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
          <h2 className="text-heading-4-bold mb-4">What I Ship</h2>
          <p className="text-body-1 text-gray-400 max-w-2xl mb-4">
            I work across the full stack. Design, code, infrastructure. DevOps, AI pipelines, architecture, automation. I specialize in projects where the hardest part is figuring out what to build and how to make it fit together.
          </p>
          <p className="text-body-1 text-gray-400 max-w-2xl mb-8">
            I've shipped across healthcare, fintech, ISPs, membership platforms, and technical infrastructure. The industry changes but the playbook doesn't: <span className="text-white font-semibold">figure out what matters, design it, build it, ship it, iterate it.</span>
          </p>
        </FadeIn>
        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10" staggerDelay={0.1}>
          {skills.map((skill) => (
            <FadeInStaggerItem key={skill.title}>
              <div className="group bg-zg-dark-0 rounded-lg p-6 hover:ring-1 hover:ring-zg-teal/50 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-zg-teal/10 group-hover:bg-zg-teal/20 flex items-center justify-center mb-5 transition-colors duration-300">
                  <skill.icon className="w-5 h-5 text-zg-teal" />
                </div>
                <h3 className="text-body-1-semibold text-white mb-3">{skill.title}</h3>
                <p className="text-body-1 text-gray-400">{skill.description}</p>
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </section>

      {/* Engineering Philosophy - Horizontal Cards */}
      <section className="mb-24">
        <FadeIn>
          <h2 className="text-heading-4-bold mb-8">How I Decide</h2>
        </FadeIn>
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10" staggerDelay={0.1}>
          {philosophy.map((item, index) => (
            <FadeInStaggerItem key={index}>
              <div className="bg-zg-dark-0 rounded-lg p-6 pl-5 border-l-2 border-zg-teal h-full">
                <p className="text-body-1-semibold text-white mb-3">{item.principle}</p>
                <p className="text-body-1 text-gray-400">{item.explanation}</p>
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
        <FadeIn delay={0.5}>
          <p className="text-body-1 text-gray-400 mt-6 max-w-2xl">
            I design and build for momentum. If a feature keeps shipping and users keep moving forward, the architecture is working. If it stalls, I want to know why.
          </p>
        </FadeIn>
      </section>

      {/* How I Work - Highlight Box */}
      <FadeIn>
        <section className="mb-24">
          <div className="bg-gradient-to-br from-zg-teal/10 to-transparent rounded-lg p-8 md:p-12 border border-zg-teal/20">
            <h2 className="text-heading-4-bold mb-6">Scope to Ship</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
              <div className="space-y-4 text-body-1 text-gray-400">
                <p>
                  I take an ambiguous feature and drive it to production. Scope it, design it, build it, ship it, iterate it. Every step in that pipeline is mine to own. I work with teams, but I don't depend on a chain of handoffs to get things done.
                </p>
                <p>
                  I use AI agents to amplify every phase. I do the thinking, the strategy, the design, the direction. The agents accelerate the execution under my feedback. This lets me move at a velocity that most teams can't match without sacrificing judgment.
                </p>
                <p>
                  I'm direct about tradeoffs. I push back when something hurts the user or the architecture. I translate technical decisions into business language because a feature that ships is better than a perfect one that never launches.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-3">
                <p className="text-heading-5-bold text-white text-center">
                  Take ambiguous feature.<br />
                  <span className="text-zg-teal">Ship production feature.</span>
                </p>
                <p className="text-body-1 text-gray-400 text-center max-w-xs">
                  Scope &rarr; Design &rarr; Build &rarr; Deploy &rarr; Iterate. One person, full cycle, no handoff tax.
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
        </FadeIn>
        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-8" staggerDelay={0.08}>
          {lookingFor.map((item, index) => (
            <FadeInStaggerItem key={index}>
              <div className="flex items-start gap-3 bg-zg-dark-0 rounded-lg p-5">
                <CheckCircleIcon className="w-5 h-5 text-zg-teal flex-shrink-0 mt-0.5" />
                <span className="text-body-1 text-gray-300">{item}</span>
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
        <FadeIn delay={0.5}>
          <p className="text-body-1 text-gray-400 max-w-2xl">
            I'm not looking for a role where I design screens and hand them off. I'm looking for a role where I own the outcome. Features from problem to production. Full cycle, every layer, any stack.
          </p>
        </FadeIn>
      </section>

      {/* CTA */}
      <FadeIn>
        <section className="bg-zg-dark-0 rounded-lg p-8 md:p-12">
          <h2 className="text-heading-4-bold mb-4">Let's Talk</h2>
          <p className="text-body-1 text-gray-400 max-w-2xl mb-6">
            If you need a Senior Product Engineer who can take a feature from vague idea to live deployment without handoffs, or a consultant who can untangle a stalled system and get it shipping again. Let's talk.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
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
            Based in California. Open to remote or hybrid roles at product-focused companies. Also available for consulting engagements.
          </p>
        </section>
      </FadeIn>
      </div>
    </>
  );
}
