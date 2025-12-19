"use client";

import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import JsonLd, { createBreadcrumbSchema } from "@/components/JsonLd";

export default function NowPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://zacharyguerrero.com" },
    { name: "Now", url: "https://zacharyguerrero.com/now" },
  ]);

  const nowPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://zacharyguerrero.com/now",
    name: "Now - What I'm Currently Up To | Zachary Guerrero",
    description: "Currently seeking product design roles while redesigning member experiences and rebuilding my portfolio on Next.js.",
    url: "https://zacharyguerrero.com/now",
    mainEntity: {
      "@id": "https://zacharyguerrero.com/#person",
    },
  };

  const dailyDrivers = [
    "Neovim (LazyVim config, constantly tweaking)",
    "Figma (for design)",
    "Next.js 16 + React + TypeScript (for building)",
    "Obsidian (for notes and thinking)",
    "Way too much coffee",
  ];

  const experimenting = [
    "MDX for content management",
    "Supabase for backends",
    "Tailwind CSS v4",
  ];

  const learning = [
    "Advanced Next.js patterns (server components are wild)",
    "B2B SaaS product design patterns",
    "System design for complex flows",
    "How to position myself for the roles I actually want",
  ];

  return (
    <>
      <JsonLd data={nowPageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <div className="container my-12 lg:my-16">
        {/* Header */}
        <FadeIn>
          <div className="max-w-2xl mb-12">
            <h1 className="text-heading-2-bold md:text-heading-1-bold mb-4">Now</h1>
          <p className="text-body-1 text-gray-400 italic">
            Updated December 16, 2024 from Riverside, California
          </p>
        </div>
      </FadeIn>

      {/* What I'm Doing */}
      <FadeIn delay={0.1}>
        <section className="mb-16">
          <h2 className="text-heading-4-bold mb-6 pb-2 border-b border-gray-800">What I'm Doing</h2>
          <div className="space-y-6 max-w-2xl">
            <div>
              <p className="text-body-1">
                <span className="text-white font-semibold">Job hunting.</span>{" "}
                <span className="text-gray-400">
                  I'm looking for product design roles at B2B SaaS companies where I can use both my design and development skills. Open to remote or Southern California hybrid. If you're hiring,{" "}
                  <Link href="/lets-talk" className="text-zg-teal hover:text-zg-coral transition-colors">
                    let's talk
                  </Link>.
                </span>
              </p>
            </div>
            <div>
              <p className="text-body-1">
                <span className="text-white font-semibold">Working.</span>{" "}
                <span className="text-gray-400">
                  I'm currently at Member Splash, redesigning member experiences—applications, renewals, account flows. It's exactly the kind of work I love: reducing friction, simplifying complexity, and actually shipping improvements.
                </span>
              </p>
            </div>
            <div>
              <p className="text-body-1">
                <span className="text-white font-semibold">Building.</span>{" "}
                <span className="text-gray-400">
                  Rebuilding my portfolio from WordPress to Next.js 16. Converting case studies to MDX. Repositioning myself from "freelance web designer" to "product designer who codes." It's going well.
                </span>
              </p>
            </div>
            <div>
              <p className="text-body-1">
                <span className="text-white font-semibold">Exploring.</span>{" "}
                <span className="text-gray-400">
                  Looking into lead generation for high-ticket home services in Southern California. Wildfire mitigation, home hardening, that kind of thing. Regulatory requirements create urgency and premium pricing. Interesting niche.
                </span>
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* What I'm Learning */}
      <FadeIn delay={0.2}>
        <section className="mb-16">
          <h2 className="text-heading-4-bold mb-6 pb-2 border-b border-gray-800">What I'm Learning</h2>
          <div className="max-w-2xl">
            <ul className="space-y-2 mb-6">
              {learning.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-zg-teal mt-1.5">•</span>
                  <span className="text-body-1 text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-body-1 text-gray-400">
              Currently re-reading <em className="text-gray-300">The Design of Everyday Things</em> and realizing how much more sense it makes now than it did five years ago.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* What I'm Using */}
      <FadeIn delay={0.3}>
        <section className="mb-16">
          <h2 className="text-heading-4-bold mb-6 pb-2 border-b border-gray-800">What I'm Using</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-zg-dark-0 rounded-lg p-6">
              <h3 className="text-body-1-semibold text-white mb-4">Daily drivers</h3>
              <ul className="space-y-2">
                {dailyDrivers.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-zg-teal mt-1.5">•</span>
                    <span className="text-body-1 text-gray-400">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-zg-dark-0 rounded-lg p-6">
              <h3 className="text-body-1-semibold text-white mb-4">Currently experimenting with</h3>
              <ul className="space-y-2">
                {experimenting.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-zg-coral mt-1.5">•</span>
                    <span className="text-body-1 text-gray-400">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* What I'm Into */}
      <FadeIn delay={0.4}>
        <section className="mb-16">
          <h2 className="text-heading-4-bold mb-6 pb-2 border-b border-gray-800">What I'm Into</h2>
          <p className="text-body-1 text-gray-400 max-w-2xl">
            Minimal tech setups. Password security. Privacy. Local coffee shops that actually care about their beans. Hiking trails I haven't done yet. Finding the perfect Neovim plugin I didn't know I needed.
          </p>
        </section>
      </FadeIn>

      {/* What's Next */}
      <FadeIn delay={0.5}>
        <section className="mb-16">
          <h2 className="text-heading-4-bold mb-6 pb-2 border-b border-gray-800">What's Next</h2>
          <div className="max-w-2xl">
            <p className="text-body-1 text-gray-400 mb-4">
              Land a product design role where I can do meaningful work on products people actually use. Keep building. Keep learning. Keep shipping.
            </p>
            <p className="text-body-1 text-gray-400">
              If you're hiring or just want to talk design/dev/life,{" "}
              <Link href="mailto:zack@zkg.io" className="text-zg-teal hover:text-zg-coral transition-colors">
                email me
              </Link>.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* Footer note */}
      <FadeIn delay={0.6}>
        <div className="pt-8 border-t border-gray-800">
          <p className="text-microcopy-1 text-gray-500 mb-6">
            This is a{" "}
            <Link
              href="https://nownownow.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-zg-teal transition-colors"
            >
              /now page
            </Link>
            . Updated monthly-ish.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/about"
              className="text-zg-teal hover:text-zg-coral transition-colors text-body-1-semibold"
            >
              About Me
            </Link>
            <Link
              href="/projects"
              className="text-zg-teal hover:text-zg-coral transition-colors text-body-1-semibold"
            >
              My Work
            </Link>
            <Link
              href="/process"
              className="text-zg-teal hover:text-zg-coral transition-colors text-body-1-semibold"
            >
              My Process
            </Link>
          </div>
        </div>
      </FadeIn>
      </div>
    </>
  );
}
