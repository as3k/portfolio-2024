"use client";

import {
  MagnifyingGlassIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { trackExternalLinkClick } from "@/lib/umami";

const toolBadges = [
  { name: "Figma", src: "/images/icons/Figma Logo.png" },
  { name: "React", src: "/images/icons/react.png" },
  { name: "Next.js", src: "/images/icons/nextjs.svg" },
  { name: "Tailwind", src: "/images/icons/Tailwind CSS Logo.png" },
  { name: "Obsidian", src: "/images/icons/Obsidian_logo.svg.png" },
];

function ToolList({ items }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="text-body-1 text-gray-400 flex items-start gap-2">
          <span className="text-zg-teal mt-1.5 text-xs">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ToolkitSection() {
  return (
    <section className="mt-24 lg:mt-32">
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 auto-rows-auto">

        {/* Row 1: Header + Top cards */}
        {/* Left: Section Header with Tool Badges */}
        <FadeIn className="md:col-span-4 md:row-span-1">
          <div className="h-full flex flex-col justify-center">
            <span className="inline-block text-microcopy-2-semibold text-gray-400 border border-gray-700 rounded-full px-4 py-1.5 mb-4 w-fit">
              My Capabilities
            </span>
            <h2 className="text-heading-3-bold md:text-heading-2-bold mb-4">
              What's in My Toolkit
            </h2>
          </div>
        </FadeIn>

        {/* Middle-Top: Research Card */}
        <FadeIn delay={0.1} className="md:col-span-4 md:row-span-1">
          <div className="h-full p-6 rounded-2xl bg-zg-dark-0 border border-gray-800 hover:border-zg-coral/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-zg-coral/10 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-zg-dark-1 border border-gray-700 flex items-center justify-center">
                <MagnifyingGlassIcon className="w-4 h-4 text-white" />
              </div>
            </div>
            <h3 className="text-heading-5-semibold text-white mb-3">Research & Testing</h3>
            <p className="text-body-1 text-gray-400">
              I validate before I build. Watch what users do, not what they say.
            </p>
          </div>
        </FadeIn>

        {/* Right: Design Card (Large, tall) - moved from left */}
        <FadeIn delay={0.15} className="md:col-span-4 md:row-span-2">
          <div className="h-full p-6 rounded-2xl bg-zg-dark-0 border border-gray-800 hover:border-zg-teal/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-zg-teal/10 transition-all duration-300 flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-zg-teal/10 flex items-center justify-center">
                <SwatchIcon className="w-5 h-5 text-zg-teal" />
              </div>
              <h3 className="text-heading-5-semibold text-white">Design</h3>
            </div>

            <div className="mb-5">
              <h4 className="text-utility-micro-2-semibold text-gray-500 uppercase tracking-wider mb-2">
                Tools I Use
              </h4>
              <ToolList
                items={[
                  "Figma (daily driver)",
                  "Pen & Paper (early ideation)",
                  "Whimsical (flows, maps)",
                  "FigJam (collaboration)",
                ]}
              />
            </div>

            <div className="mb-5">
              <h4 className="text-utility-micro-2-semibold text-gray-500 uppercase tracking-wider mb-2">
                What I Do
              </h4>
              <ToolList
                items={[
                  "Wireframing & prototyping",
                  "High-fidelity mockups",
                  "Design systems",
                  "Visual design & branding",
                ]}
              />
            </div>

            <p className="text-body-1 text-gray-400 mt-auto">
              <span className="text-white font-medium">My Approach:</span>{" "}
              Sketch first, prototype to validate, then build systems that scale.
            </p>
          </div>
        </FadeIn>

        {/* Row 2: CTA Card + Development Card */}
        {/* Left: Tool Icons Card */}
        <FadeIn delay={0.2} className="md:col-span-4 md:row-span-1">
          <div className="h-full p-6 rounded-2xl bg-zg-dark-0 border border-gray-800 hover:border-gray-700 transition-all duration-300 flex items-center justify-center">
            <div className="flex flex-wrap justify-center gap-6">
              {toolBadges.map(({ name, src }) => (
                <div
                  key={name}
                  className="relative w-14 h-14"
                  title={name}
                >
                  <Image
                    src={src}
                    alt={name}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Middle: Development Card */}
        <FadeIn delay={0.25} className="md:col-span-4 md:row-span-1">
          <div className="h-full p-6 rounded-2xl bg-zg-dark-0 border border-gray-800 hover:border-blue-500/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
            <span className="inline-block text-microcopy-2-semibold text-gray-400 border border-gray-700 rounded-full px-3 py-1 mb-4">
              Development
            </span>
            <h3 className="text-heading-4-bold text-white mb-3">
              10+ Years Building for the Web
            </h3>
            <p className="text-body-1 text-gray-400 mb-4">
              React, Next.js, TypeScript, Tailwind CSS. I don't just design it—I can build it.
            </p>
            <Link
              href="https://github.com/as3k/portfolio-2024"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-body-1-semibold text-zg-teal hover:text-zg-coral transition-colors"
              onClick={() => trackExternalLinkClick('github', 'toolkit_section')}
            >
              View My Code
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
