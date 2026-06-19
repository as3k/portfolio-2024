"use client";

import {
  CodeBracketIcon,
  MagnifyingGlassIcon,
  Square3Stack3DIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/FadeIn";
import JsonLd, { profilePageSchema } from "@/components/JsonLd";
import ToolkitSection from "@/components/ToolkitSection";

function StatCard({ value, label, isAnimated = false, animatedValue = 0, suffix = "" }) {
  return (
    <div className="flex flex-col">
      <span className="text-heading-6-bold md:text-heading-4-bold text-white">
        {isAnimated ? (
          <>
            <span className="sr-only">{animatedValue}{suffix}</span>
            <span aria-hidden="true">
              <AnimatedCounter value={animatedValue} suffix={suffix} />
            </span>
          </>
        ) : (
          value
        )}
      </span>
      <span className="text-microcopy-1 md:text-microcopy-2 text-gray-400">{label}</span>
    </div>
  );
}

function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div className="h-full group bg-zg-dark-0 rounded-lg p-8 hover:ring-2 hover:ring-zg-teal/50 hover:shadow-lg hover:shadow-zg-teal/5 hover:-translate-y-1 transition-all duration-300">
      <div className="w-10 h-10 rounded-lg bg-zg-teal/10 group-hover:bg-zg-teal/20 flex items-center justify-center mb-5 transition-colors duration-300">
        <Icon className="w-5 h-5 text-zg-teal group-hover:scale-110 transition-transform duration-300" />
      </div>
      <h3 className="text-heading-6-semibold text-white mb-3">{title}</h3>
      <p className="text-body-1 text-gray-400">{description}</p>
    </div>
  );
}

function ProjectCard({ project }) {
  const { slug, meta } = project;

  return (
    <Link
      href={`/projects/${slug}`}
      className="group block bg-zg-dark-0 rounded-lg overflow-hidden hover:ring-2 hover:ring-zg-teal hover:shadow-xl hover:shadow-zg-teal/10 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={meta.heroImage}
          alt={meta.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zg-dark-1/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <span className="flex items-center gap-2 text-white text-body-1-semibold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            View Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-microcopy-2 text-gray-400">{meta.category}</span>
          <span className="text-gray-600">•</span>
          <span className="text-microcopy-2 text-gray-400">{meta.year}</span>
        </div>
        <h3 className="text-heading-5-semibold text-white mb-3 group-hover:text-zg-teal transition-colors duration-300">
          {meta.title}
        </h3>
        <p className="text-body-1 text-gray-400 line-clamp-2">{meta.excerpt}</p>
      </div>
    </Link>
  );
}

export default function Home() {
  // Import content at build time via server component would be better,
  // but for client component with animations, we'll use a simple approach
  const featuredWork = useFeaturedWork();

  const services = [
    {
      icon: SwatchIcon,
      title: "Ship from First Sketch to Deployment",
      description:
        "I design end-to-end product experiences from user research to high-fidelity prototypes, then build them in code. No handoff tax, no translation loss.",
    },
    {
      icon: MagnifyingGlassIcon,
      title: "Ship with Confidence, Not Guesswork",
      description:
        "I validate solutions through user interviews, usability testing, and competitive analysis before writing a line of production code.",
    },
    {
      icon: Square3Stack3DIcon,
      title: "Ship Faster Because the System Scales Itself",
      description:
        "I build design systems that keep teams aligned and accelerate product development. Reusable components, documented patterns, scalable architecture.",
    },
    {
      icon: CodeBracketIcon,
      title: "Ship in the Tools Your Team Already Uses",
      description:
        "React, Next.js, Vue, Python, PHP, WordPress - I work in whatever stack the team uses and adapt without ramp-up time.",
    },
  ];

  return (
    <>
      <JsonLd data={profilePageSchema} />
      <div className="container my-3 lg:my-16">
        {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
        <div className="flex flex-col gap-4 lg:gap-6 order-2 lg:order-1">
          <FadeIn>
            <h1 className="flex flex-col gap-1 lg:gap-2">
              <span className="text-body-1-semibold text-zg-teal">Zachary Guerrero</span>
              <span className="text-heading-4-bold md:text-heading-2-bold lg:text-heading-1-bold">
                I own features end to end.
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-3 lg:space-y-4 text-body-1 lg:text-body-2 text-gray-400">
              <p>
                For 10+ years, I have been fixing the same problem: teams that need one person to own the full cycle. Research, design, code, deploy, iterate - no handoffs, no translation loss.
              </p>
              <p className="hidden md:block">
                I design in Figma, build in whatever stack the team uses, deploy on whatever infrastructure fits, and measure what moves. No design theater - just shipped features that move metrics.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-wrap gap-4 lg:gap-6 items-center">
              <Link
                href="/projects"
                className="rounded-md text-white bg-zg-teal hover:bg-zg-coral active:scale-95 active:brightness-90 transition-all duration-300 px-4 lg:px-5 py-2.5 lg:py-3 text-body-1-bold"
              >
                View Case Studies
              </Link>
              <Link
                href="/about"
                className="group text-gray-400 hover:text-zg-teal transition-colors duration-300 text-body-1-semibold inline-flex items-center gap-2"
              >
                About Me
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </FadeIn>

          {/* Stats */}
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap gap-4 md:gap-8 pt-4 lg:pt-6 border-t border-gray-800">
              <StatCard value="End-to-End" label="Full Cycle" />
              <StatCard value="Every Layer" label="Any Stack" />
              <StatCard value="10+ Years" label="Shipping Products" />
            </div>
          </FadeIn>
        </div>

        {/* Hero Images Grid - Collage Style */}
        <FadeIn delay={0.1} direction="left" className="order-1 lg:order-2">
          <div className="flex flex-col gap-2 lg:gap-3">
            {/* Top - Large featured image */}
            <Link
              href="/projects/cydrion"
              className="relative aspect-[16/10] rounded-2xl overflow-hidden group block"
              aria-label="View Cydrion case study"
            >
              <Image
                src="/images/projects/cydrion/Cydrion-Featured-Image.jpg"
                alt="Cydrion project"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-zg-teal/20 mix-blend-color group-hover:opacity-0 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-zg-dark-1/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-5">
                <span className="text-microcopy-2 text-zg-teal mb-1">B2B SaaS</span>
                <h3 className="text-body-1-semibold text-white mb-1">Cydrion</h3>
                <span className="flex items-center gap-1 text-microcopy-2 text-gray-300">
                  View Project
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Bottom - Two smaller images */}
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/projects/manta"
                className="relative aspect-[4/3] rounded-2xl overflow-hidden group block"
                aria-label="View Manta case study"
              >
                <Image
                  src="/images/projects/manta/Manta-Featured-Image.jpg"
                  alt="Manta project"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-zg-teal/20 mix-blend-color group-hover:opacity-0 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-zg-dark-1/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-4">
                  <span className="text-microcopy-2 text-zg-teal mb-1">Personal Project</span>
                  <h3 className="text-body-1-semibold text-white">Manta</h3>
                </div>
              </Link>

              <Link
                href="/projects/high-rapid-networks"
                className="relative aspect-[4/3] rounded-2xl overflow-hidden group block"
                aria-label="View High Rapid Networks case study"
              >
                <Image
                  src="/images/projects/high-rapid-networks/hrn-featured-image.jpg"
                  alt="High Rapid Networks project"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-zg-teal/20 mix-blend-color group-hover:opacity-0 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-zg-dark-1/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-4">
                  <span className="text-microcopy-2 text-zg-teal mb-1">B2B SaaS</span>
                  <h3 className="text-body-1-semibold text-white">High Rapid Networks</h3>
                </div>
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* My Focus Section */}
      <section className="mt-24 lg:mt-32">
        <FadeIn>
          <div className="mb-12">
            <span className="inline-block text-microcopy-2-semibold text-gray-400 border border-gray-700 rounded-full px-4 py-1.5 mb-4 hover:border-zg-teal/50 hover:text-zg-teal/80 transition-colors duration-300">
              My Expertise
            </span>
            <h2 className="text-heading-3-bold md:text-heading-2-bold max-w-3xl mb-4">
              End-to-end ownership. Full-stack delivery. Any stack, full cycle.
            </h2>
            <p className="text-body-2 text-gray-400 max-w-2xl">
              Design, code, infrastructure, deploy, monitor. I own every layer of
              the product lifecycle. From fintech platforms to ISP tools to
              membership systems, I build experiences that users trust and
              businesses count on.
            </p>
          </div>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10" staggerDelay={0.1}>
          {services.map((service) => (
            <FadeInStaggerItem key={service.title} className="h-full">
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </section>

      {/* Project Showcase Section */}
      <section className="mt-24 lg:mt-32">
        <FadeIn>
          <div className="mb-8">
            <h2 className="text-heading-3-bold">Shipped Projects</h2>
          </div>
        </FadeIn>
        {featuredWork.length > 0 && (
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10" staggerDelay={0.15}>
            {featuredWork.map((project) => (
              <FadeInStaggerItem key={project.slug}>
                <ProjectCard project={project} />
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        )}
        <FadeIn delay={0.4}>
          <div className="flex justify-center mt-10">
            <Link
              href="/projects"
              className="group text-body-1-semibold text-gray-400 hover:text-zg-teal transition-colors duration-300 inline-flex flex-col items-center gap-1"
            >
              See all projects
              <svg
                className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* What's in My Toolkit Section */}
      <ToolkitSection />
      </div>
    </>
  );
}

// Client-side hook to get featured work
// Uses dynamic import to work around client component limitation
function useFeaturedWork() {
  const [featuredWork, setFeaturedWork] = React.useState([]);

  React.useEffect(() => {
    // Fetch featured work from API route
    fetch('/api/featured-work')
      .then(res => res.json())
      .then(data => setFeaturedWork(data))
      .catch(err => console.error('Failed to load featured work:', err));
  }, []);

  return featuredWork;
}
