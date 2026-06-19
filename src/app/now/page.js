import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import JsonLd, { createBreadcrumbSchema } from "@/components/JsonLd";

export const metadata = {
  title: "Now | Zachary Guerrero",
  description: "What Zachary Guerrero is working on right now.",
};

export default function NowPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://zacharyguerrero.com" },
    { name: "Now", url: "https://zacharyguerrero.com/now" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <div className="container my-12 lg:my-16">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <header className="mb-12">
              <h1 className="text-heading-1-bold mb-2">Now</h1>
              <p className="text-microcopy-1 text-gray-500">
                Updated June 18, 2026 from Riverside, California
              </p>
            </header>
          </FadeIn>

          <FadeIn delay={0.1}>
            <section className="mb-12">
              <h2 className="text-heading-5-semibold text-white mb-4">
                Building
              </h2>
              <p className="text-body-1 text-gray-400 mb-6">
                Splash Cards at Member Splash. A prepaid POS payment system rolled out to 460+ clubs, processing thousands of daily transactions. Check-In 2.0 cutting check-in from 30+ seconds to under 10. Shipping features that move real metrics.
              </p>
              <p className="text-body-1 text-gray-400 mb-6">
                LaunchBook. A mobile-first booking platform for independent providers. Ren. An AI memory system designed for how ADHD brains actually work. Both in active development, both owned end to end.
              </p>
              <p className="text-body-1 text-gray-400 mb-6">
                B&F. Auditing and fixing security vulnerabilities across 20+ client sites. Building custom WordPress plugins for mortgage application flows. Modernizing legacy code. Running the Lift hosting infrastructure. And building the content flywheel.
              </p>
            </section>
          </FadeIn>

          <FadeIn delay={0.2}>
            <section className="mb-12">
              <h2 className="text-heading-5-semibold text-white mb-4">
                How I Work
              </h2>
              <p className="text-body-1 text-gray-400 mb-6">
                I own features from problem to production. Research, design, code, deploy, iterate. I direct AI agents to accelerate every step. They execute, I steer. The thinking is mine, the output is amplified.
              </p>
            </section>
          </FadeIn>

          <FadeIn delay={0.3}>
            <section className="mb-12">
              <h2 className="text-heading-5-semibold text-white mb-4">
                Looking
              </h2>
              <p className="text-body-1 text-gray-400 mb-6">
                Senior Product Engineer roles where I can own the full cycle. Also open to consulting engagements that need a full-stack rewrite. Remote or SoCal hybrid.
              </p>
            </section>
          </FadeIn>

          <FadeIn delay={0.4}>
            <section className="mb-12">
              <h2 className="text-heading-5-semibold text-white mb-4">
                Using
              </h2>
              <p className="text-body-1 text-gray-400 mb-6">
                Neovim (always tweaking). React, Next.js, Vue, Python. Docker, Vercel, Cloudflare, AWS. Figma. Obsidian. Way too much coffee.
              </p>
            </section>
          </FadeIn>

          <FadeIn delay={0.5}>
            <section className="text-center pt-8 border-t border-gray-800">
              <p className="text-microcopy-1 text-gray-500 mb-4">
                This is a <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="text-zg-teal hover:text-zg-coral transition-colors">/now page</a>. Updated monthly-ish.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/about" className="text-zg-teal hover:text-zg-coral transition-colors text-body-1-semibold">About Me</Link>
                <Link href="/projects" className="text-zg-teal hover:text-zg-coral transition-colors text-body-1-semibold">My Work</Link>
                <Link href="/process" className="text-zg-teal hover:text-zg-coral transition-colors text-body-1-semibold">My Process</Link>
              </div>
            </section>
          </FadeIn>
        </div>
      </div>
    </>
  );
}
