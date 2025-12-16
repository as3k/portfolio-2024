"use client";

import {
  ChatBubbleLeftRightIcon,
  MagnifyingGlassIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

// Official brand icons
function FigmaIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 38 57" fill="currentColor">
      <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
      <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
      <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
      <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
      <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
    </svg>
  );
}

function ReactIcon({ className }) {
  return (
    <svg className={className} viewBox="-11.5 -10.232 23 20.463" fill="currentColor">
      <circle r="2.05" />
      <g fill="none" stroke="currentColor" strokeWidth="1">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

function NextJsIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.5 5.5h1v8.5l5.5 7.5-1 .7-5.5-7.5V5.5zm6.5 2h1v7h-1v-7z" />
    </svg>
  );
}

function TailwindIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 54 33" fill="currentColor">
      <path d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" />
    </svg>
  );
}

function GitIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.546 10.93L13.067.452a1.55 1.55 0 00-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 012.327 2.341l2.658 2.66a1.838 1.838 0 11-1.103 1.03l-2.479-2.48v6.526a1.838 1.838 0 11-1.512-.104V8.835a1.838 1.838 0 01-.996-2.41L7.636 3.7.45 10.881a1.55 1.55 0 000 2.188l10.48 10.477a1.55 1.55 0 002.186 0l10.43-10.43a1.55 1.55 0 000-2.187" />
    </svg>
  );
}

function ObsidianIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.026.053a.496.496 0 00-.31.073L5.592 4.158a.496.496 0 00-.217.37l-.778 9.407a.496.496 0 00.136.383l5.704 6.058a.496.496 0 00.362.157.496.496 0 00.361-.157l5.705-6.058a.496.496 0 00.135-.383l-.777-9.407a.496.496 0 00-.218-.37L9.88.126a.496.496 0 00-.31-.073zm.122 1.026l5.341 3.502.716 8.658-5.253 5.578v-7.494l4.024-3.78-.677-.72-3.347 3.144V2.08l-.804-.001v7.886L8.8 6.822l-.676.721 4.024 3.78v7.494l-5.254-5.578.717-8.658 5.34-3.502z" />
    </svg>
  );
}

const toolBadges = [
  { name: "Figma", icon: FigmaIcon },
  { name: "React", icon: ReactIcon },
  { name: "Next.js", icon: NextJsIcon },
  { name: "Tailwind", icon: TailwindIcon },
  { name: "Git", icon: GitIcon },
  { name: "Obsidian", icon: ObsidianIcon },
];

function ToolList({ items }) {
  return (
    <ul className="space-y-1.5">
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
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-auto">

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
            {/* Tool Icons Bar */}
            <div className="flex flex-wrap gap-3 mt-2">
              {toolBadges.map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-zg-dark-0 border border-gray-800 hover:border-gray-600 transition-colors"
                  title={name}
                >
                  <Icon className="w-4 h-4 text-gray-400" />
                </div>
              ))}
            </div>
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
            <h3 className="text-heading-5-semibold text-white mb-2">Research & Testing</h3>
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
        {/* Left: CTA Card (dashed border style) - moved from right */}
        <FadeIn delay={0.2} className="md:col-span-4 md:row-span-1">
          <div className="h-full p-6 rounded-2xl border-2 border-dashed border-gray-700 hover:border-zg-teal/50 transition-all duration-300 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-zg-coral flex items-center justify-center">
                <ChatBubbleLeftRightIcon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-heading-5-semibold text-white">Let's Talk</h3>
            </div>
            <p className="text-body-1 text-gray-400 mb-4">
              I'm open to product design roles at B2B SaaS companies.
            </p>
            <Link
              href="/lets-talk"
              className="inline-block rounded-full border border-gray-600 hover:border-zg-teal hover:bg-zg-teal/10 px-5 py-2.5 text-body-1-semibold text-white transition-all duration-300 w-fit mt-auto"
            >
              Contact Me
            </Link>
          </div>
        </FadeIn>

        {/* Middle: Development Card */}
        <FadeIn delay={0.25} className="md:col-span-4 md:row-span-1">
          <div className="h-full p-6 rounded-2xl bg-zg-dark-0 border border-gray-800 hover:border-blue-500/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
            <span className="inline-block text-microcopy-2-semibold text-gray-400 border border-gray-700 rounded-full px-3 py-1 mb-4">
              Development
            </span>
            <h3 className="text-heading-4-bold text-white mb-2">
              10+ Years Building for the Web
            </h3>
            <p className="text-body-1 text-gray-400 mb-4">
              React, Next.js, TypeScript, Tailwind CSS. I don't just design it—I can build it.
            </p>
            <Link
              href="https://github.com/zachguerrero"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-body-1-semibold text-zg-teal hover:text-zg-coral transition-colors"
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
