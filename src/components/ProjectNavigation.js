"use client";

import Link from "next/link";
import { trackProjectNavigation, trackBackToProjects, trackGetInTouchCTA, trackCTAClick } from "@/lib/umami";

export function ProjectBackLink({ currentSlug }) {
  return (
    <Link
      href="/projects"
      className="group inline-flex items-center gap-2 text-gray-400 hover:text-zg-teal transition-colors duration-300 mb-12"
      onClick={() => trackBackToProjects(currentSlug)}
    >
      <span className="inline-block group-hover:-translate-x-1 transition-transform duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </span>
      Back to Projects
    </Link>
  );
}

export function ProjectNavLink({ href, direction, fromProject, toProject, children }) {
  return (
    <Link
      href={href}
      className="group p-4 rounded-lg bg-zg-dark-0 hover:bg-zg-dark-1 transition-colors"
      onClick={() => trackProjectNavigation(direction, fromProject, toProject)}
    >
      {children}
    </Link>
  );
}

export function ProjectCTAButtons() {
  return (
    <div className="mt-12 p-6 bg-zg-dark-0 rounded-lg text-center">
      <p className="text-body-1 text-gray-400 mb-4">
        Interested in working together?
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/lets-talk"
          className="rounded-md text-white bg-zg-teal hover:bg-zg-coral active:scale-95 active:brightness-90 transition-all duration-300 px-5 py-3 text-body-1-bold"
          onClick={() => trackGetInTouchCTA('project_detail')}
        >
          Get in Touch
        </Link>
        <Link
          href="/about"
          className="text-gray-400 hover:text-zg-teal transition-colors px-5 py-3 text-body-1-bold"
          onClick={() => trackCTAClick('about_me', 'project_detail')}
        >
          About Me
        </Link>
      </div>
    </div>
  );
}
