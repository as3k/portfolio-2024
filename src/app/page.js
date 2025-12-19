"use client";

import {
  CodeBracketIcon,
  MagnifyingGlassIcon,
  Square3Stack3DIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
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
      title: "Product Design",
      description:
        "I design end-to-end product experiences—from user research to high-fidelity prototypes—balancing user needs with technical feasibility.",
    },
    {
      icon: MagnifyingGlassIcon,
      title: "UX Research & Strategy",
      description:
        "I validate solutions through user interviews, usability testing, and competitive analysis before development begins.",
    },
    {
      icon: Square3Stack3DIcon,
      title: "Design Systems",
      description:
        "I build scalable design systems that keep teams aligned and accelerate product development.",
    },
    {
      icon: CodeBracketIcon,
      title: "Front-End Development",
      description:
        "I code what I design using React, Next.js, and modern web technologies—turning prototypes into production-ready products.",
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
                I help B2B SaaS companies turn complex problems into simple experiences.
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-3 lg:space-y-4 text-body-1 lg:text-body-2 text-gray-400">
              <p>
                For 10+ years, I've been fixing the same problem: confusing flows that lose users halfway through.
              </p>
              <p className="hidden md:block">
                I design for clarity, build with code, and measure impact. No design theater—just work that ships and moves metrics.
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
              <StatCard value="10+ Years" label="Designing & Building" />
              <StatCard
                label="Lighthouse Accessibility"
                isAnimated
                animatedValue={92}
                suffix="%"
              />
              <StatCard value="2x" label="User Growth" />
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
              My Focus
            </span>
            <h2 className="text-heading-3-bold md:text-heading-2-bold max-w-3xl mb-4">
              Building products for the companies shaping tomorrow
            </h2>
            <p className="text-body-2 text-gray-400 max-w-2xl">
              I specialize in B2B SaaS and technical products where complex
              problems meet elegant solutions. From fintech platforms to ISP
              tools, I create experiences that empower users and drive business
              results.
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
            <h2 className="text-heading-3-bold">Project Showcase</h2>
          </div>
        </FadeIn>
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10" staggerDelay={0.15}>
          {featuredWork.map((project) => (
            <FadeInStaggerItem key={project.slug}>
              <ProjectCard project={project} />
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
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
// In a real app, this would come from server component or API
function useFeaturedWork() {
  // This is a simplified version - the actual data comes from MDX files
  // For now, we'll return the featured projects statically
  return [
    {
      slug: "art-healing-hearts",
      meta: {
        title: "Art Healing Hearts",
        category: "Nonprofit",
        year: 2025,
        excerpt: "Emergency redesign and rebuild for a nonprofit's website in under a week to support their television feature and streamline donations.",
        heroImage: "/images/projects/art-healing-hearts/art-healing-hearts-featured-image.jpg",
        featured: true,
      },
    },
    {
      slug: "cydrion",
      meta: {
        title: "Cydrion",
        category: "B2B SaaS",
        year: 2025,
        excerpt: "Built a complete digital presence and brand identity from scratch for an ISP support company, establishing them as a leader in network operations.",
        heroImage: "/images/projects/cydrion/Cydrion-Featured-Image.jpg",
        featured: true,
      },
    },
    {
      slug: "manta",
      meta: {
        title: "MANTA: A Secure and Memorable Passphrase Generator",
        category: "Personal Project",
        year: 2025,
        excerpt: "Chrome extension that generates secure, memorable passphrases using a custom-built API. Designed for security-conscious users who want better password practices.",
        heroImage: "/images/projects/manta/Manta-Featured-Image.jpg",
        featured: true,
      },
    },
    {
      slug: "high-rapid-networks",
      meta: {
        title: "High Rapid Networks",
        category: "B2B SaaS",
        year: 2025,
        excerpt: "Complete rebrand and website redesign for a rural ISP that doubled their subscriber base and expanded into larger markets.",
        heroImage: "/images/projects/high-rapid-networks/hrn-featured-image.jpg",
        featured: true,
      },
    },
  ];
}
