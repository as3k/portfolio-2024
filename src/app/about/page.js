"use client";

import {
  ArrowPathIcon,
  CheckCircleIcon,
  CommandLineIcon,
  CubeIcon,
  RocketLaunchIcon,
  ServerStackIcon,
  WrenchScrewdriverIcon,
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
                            : "text-heading-3-bold text-gray-400"
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
              Today, I work across the boundary between product design and engineering. I help
              teams carry features from problem framing and interaction design through
              implementation, launch, and iteration, staying close to the technical and
              operational details that shape the experience.
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
      description: "Docker, CI/CD, Cloudflare, Vercel, and Linux server management. I contribute to delivery paths that make releases easier to understand and maintain.",
    },
    {
      icon: CubeIcon,
      title: "AI-Assisted Workflows",
      description: "Using AI where it reduces repetitive work while keeping product judgment, technical review, and accountability with the people building the feature.",
    },
    {
      icon: ArrowPathIcon,
      title: "Workflow Orchestration",
      description: "Automation pipelines, cron chains, n8n workflows. I wire systems together so processes run themselves instead of needing human babysitting.",
    },
    {
      icon: WrenchScrewdriverIcon,
      title: "Design to Production",
      description: "From first Figma sketch to live deployment. I use implementation knowledge to make design decisions more concrete and easier for teams to ship.",
    },
    {
      icon: RocketLaunchIcon,
      title: "Security-minded delivery",
      description: "Security audits, vulnerability remediation, standards enforcement, and code review. I bring security considerations into product and implementation decisions early.",
    },
  ];

  const philosophy = [
    {
      principle: "Scope creates room for learning.",
      explanation: "A focused release can teach a team more than an overextended plan. I use deadlines to clarify the essential interaction, the known risks, and what should wait.",
    },
    {
      principle: "Clarity makes action easier.",
      explanation: "When people cannot find the next step or understand the consequence, they hesitate. Clear language, hierarchy, and feedback reduce that effort.",
    },
    {
      principle: "Clarity beats cleverness.",
      explanation: "Users don't need to be impressed. They need to know what to do next.",
    },
    {
      principle: "Good UX reduces avoidable effort.",
      explanation: "The job is not to remove every decision. It is to make necessary decisions understandable and keep routine work from becoming harder than it needs to be.",
    },
  ];

  const lookingFor = [
    "Small B2B SaaS or startups where design and engineering work closely together",
    "Fast-moving teams that ship instead of chase trends",
    "Take ambiguous features from scope to production with clear ownership",
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
              Design Engineer. UX Engineer.
            </h1>
            <span className="inline-block text-microcopy-1 text-zg-teal mb-4">
              Product design, frontend engineering, and systems thinking. Full time or{" "}
              <Link href="/consulting" className="underline underline-offset-2 hover:text-zg-coral transition-colors">consulting</Link>.
            </span>
            <p className="text-body-2 text-gray-400 mb-4">
              I work with teams when a product problem needs both interaction design and implementation judgment: unclear workflows, complicated systems, and features that need to make it into production intact.
            </p>
            <p className="text-body-2 text-gray-400">
              I started in design and learned to code because implementation changes the experience. Today I design in Figma, contribute in code, and collaborate with product, support, and engineering to make the finished product work in the real world.
            </p>
          </FadeIn>
        </div>
        <FadeIn delay={0.2} direction="left" className="lg:col-span-2">
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
            <Image
              src="/images/zg-coffee-ride-profile-photo.webp"
              alt="Zachary Guerrero"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
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
              Across different companies and projects, a few patterns keep appearing:
          </p>
        </FadeIn>
        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10 mb-8" staggerDelay={0.1}>
          {patterns.map((pattern) => (
            <FadeInStaggerItem key={pattern}>
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
              Most of my work is about decisions, not screens. That is why I pay close attention to booking flows,
              multi-step forms, onboarding sequences, and information architecture: the places where people can lose
              their way or abandon a task.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Why Full Stack Ownership Matters */}
      <FadeIn>
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            <div>
              <h2 className="text-heading-4-bold mb-6">Design with Implementation in Mind</h2>
              <div className="space-y-4 text-body-1 text-gray-400">
                <p>
                  I am a designer who also contributes in code. My experience spans React, Next.js, Vue, Python, PHP, Docker, PostgreSQL, and Supabase. I have rebuilt WordPress sites into modern stacks and investigated issues from CSS through network behavior, which helps me understand what is realistic to build.
                </p>
                <p>
                  The difference is not simply that I can code. It is that I understand how a design decision affects the component, state, API, deployment, and support work around it. That context helps me make better tradeoffs before a feature becomes expensive to change.
                </p>
                <p>
                  I use AI as a supporting tool for synthesis and repetitive implementation work. It does not replace collaboration, product judgment, or careful technical review.
                </p>
              </div>
            </div>
            <div className="bg-zg-dark-0 rounded-lg p-6 space-y-4">
              <h3 className="text-body-1-semibold text-white">What this means in practice:</h3>
              <ul className="space-y-3">
                {[
                  "I carry feature context from early discovery through implementation",
                  "I design with implementation constraints in mind",
                  "I adjust scope based on real technical constraints, not guesses",
                  "I contribute to the delivery path alongside the feature",
                  "I can investigate issues from CSS through database queries when the work calls for it",
                  "I help teams reduce rework by keeping design and implementation connected",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
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
            I work across product design, frontend implementation, and the systems that support delivery. I specialize in projects where the hard part is figuring out what to build and how to make it fit together.
          </p>
          <p className="text-body-1 text-gray-400 max-w-2xl mb-8">
            I have shipped work across healthcare, fintech, ISPs, membership platforms, and technical infrastructure. The context changes, but the work benefits from the same discipline: <span className="text-white font-semibold">understand what matters, design it, build it with care, and learn from what ships.</span>
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
          {philosophy.map((item) => (
            <FadeInStaggerItem key={item.principle}>
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
                  I help take ambiguous features to production. I can shape scope, design the interaction, contribute implementation, and stay engaged after launch while working closely with the people who know the product, customers, and system best.
                </p>
                <p>
                  I use AI selectively to accelerate repetitive work, not as the centerpiece of the process. The differentiator is keeping product, interaction, and implementation judgment connected.
                </p>
                <p>
                  I'm direct about tradeoffs. I push back when something hurts the user or the architecture, then explain the consequence in terms the team can use to decide.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-3">
                <p className="text-heading-5-bold text-white text-center">
                  Take ambiguous feature.<br />
                  <span className="text-zg-teal">Ship production feature.</span>
                </p>
                <p className="text-body-1 text-gray-400 text-center max-w-xs">
                  Scope &rarr; Design &rarr; Build &rarr; Deploy &rarr; Iterate. Clear context across the work.
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
          {lookingFor.map((item) => (
            <FadeInStaggerItem key={item}>
              <div className="flex items-start gap-3 bg-zg-dark-0 rounded-lg p-5">
                <CheckCircleIcon className="w-5 h-5 text-zg-teal flex-shrink-0 mt-0.5" />
                <span className="text-body-1 text-gray-300">{item}</span>
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
        <FadeIn delay={0.5}>
          <p className="text-body-1 text-gray-400 max-w-2xl">
            I am looking for a role where design and engineering are close enough to inform each other, and where I can help carry features from problem framing through production.
          </p>
        </FadeIn>
      </section>

      {/* CTA */}
      <FadeIn>
        <section className="bg-zg-dark-0 rounded-lg p-8 md:p-12">
          <h2 className="text-heading-4-bold mb-4">Let's Talk</h2>
          <p className="text-body-1 text-gray-400 max-w-2xl mb-6">
            If you need a Design Engineer or UX Engineer who can help turn an ambiguous product problem into a clear, buildable experience, let’s talk.
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
          <p className="text-microcopy-2 text-gray-400">
            Based in California. Open to remote or hybrid roles at product-focused companies. Also available for{" "}
            <Link href="/consulting" className="text-gray-400 hover:text-zg-teal transition-colors">consulting engagements</Link>.
          </p>
        </section>
      </FadeIn>
      </div>
    </>
  );
}
