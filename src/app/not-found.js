"use client";

import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

export default function NotFound() {
  return (
    <div className="container flex items-center justify-center min-h-[60vh] my-16">
      <FadeIn>
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-zg-dark-0 mb-6">
              <span className="text-heading-1-bold text-zg-teal">404</span>
            </div>
            <h1 className="text-heading-2-bold lg:text-heading-1-bold text-white mb-4">
              Page not found
            </h1>
            <p className="text-body-1 text-gray-400 mb-2">
              This page doesn't exist. Either I broke something, or you followed a bad link.
            </p>
            <p className="text-body-2 text-gray-400">
              Either way, it's probably worth investigating.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link
              href="/"
              className="rounded-md text-white bg-zg-teal hover:bg-zg-coral active:scale-95 active:brightness-90 transition-all duration-300 px-5 py-3 text-body-1-bold"
            >
              Back to Home
            </Link>
            <Link
              href="/projects"
              className="group text-gray-400 hover:text-zg-teal transition-colors duration-300 text-body-1-semibold inline-flex items-center gap-2"
            >
              View Projects
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-microcopy-1 text-gray-600">
              Looking for something specific?{" "}
              <Link
                href="/lets-talk"
                className="text-zg-teal hover:text-zg-coral transition-colors"
              >
                Let me know
              </Link>
              .
            </p>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
