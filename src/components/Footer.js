import Link from "next/link";
import { trackExternalLinkClick, trackFooterNavClick, trackResumeDownload } from "@/lib/umami";

export default function Footer() {
  return (
    <footer className="mt-24 lg:mt-32 pt-12 pb-8 border-t border-gray-800">
      <div className="container flex flex-col items-center gap-8">
        <div className="grid w-full justify-items-center gap-8 md:grid-cols-2 md:justify-items-start lg:flex lg:items-center lg:justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3 md:col-span-2 lg:col-auto">
            <span className="text-heading-4-bold text-white">
              ZG<span className="text-zg-teal">.</span>
            </span>
            <div>
              <p className="text-body-1-semibold text-white">Zachary Guerrero</p>
              <p className="text-microcopy-1 text-gray-400">
                Design Engineer · UX Engineer
              </p>
            </div>
          </div>

          {/* Navigation + Social: clear second row on tablet, side-by-side on desktop */}
          <div className="flex w-full flex-col gap-6 md:col-span-2 md:gap-8 md:border-t md:border-gray-800 md:pt-6 lg:col-auto lg:w-auto lg:flex-row lg:flex-nowrap lg:items-center lg:gap-10 lg:border-t-0 lg:pt-0">
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-microcopy-1 md:justify-start" aria-label="Footer navigation">
            <Link
              href="/projects"
              className="text-gray-400 hover:text-zg-teal transition-colors"
              onClick={() => trackFooterNavClick('Projects')}
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="text-gray-400 hover:text-zg-teal transition-colors"
              onClick={() => trackFooterNavClick('About')}
            >
              About
            </Link>
            <Link
              href="/process"
              className="text-gray-400 hover:text-zg-teal transition-colors"
              onClick={() => trackFooterNavClick('Process')}
            >
              Process
            </Link>
            <Link
              href="/resume"
              className="text-gray-400 hover:text-zg-teal transition-colors"
              onClick={() => trackFooterNavClick('Resume')}
            >
              Resume
            </Link>
            <Link
              href="/lets-talk"
              className="text-gray-400 hover:text-zg-teal transition-colors"
              onClick={() => trackFooterNavClick('Contact')}
            >
              Contact
            </Link>
          </nav>

          {/* Social */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-3 text-microcopy-1 md:justify-start">
            <Link
              href="https://linkedin.com/in/zacharyafguerrero"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-zg-teal transition-colors"
              onClick={() => trackExternalLinkClick('linkedin', 'footer')}
            >
              LinkedIn
            </Link>
            <Link
              href="mailto:zack@zkg.io"
              className="text-gray-400 hover:text-zg-teal transition-colors"
              onClick={() => trackExternalLinkClick('email', 'footer')}
            >
              Email
            </Link>
            <Link
              href="/api/resume"
              className="text-gray-400 hover:text-zg-teal transition-colors"
              onClick={() => trackResumeDownload('footer', 'pdf')}
            >
              Download Resume
            </Link>
          </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-center text-microcopy-2 text-gray-400">
          <p>&copy; {new Date().getFullYear()} Zachary Guerrero</p>
          <span aria-hidden="true">•</span>
          <span>Based in California</span>
          <span aria-hidden="true">•</span>
          <span>Open to remote roles</span>
          <span aria-hidden="true">•</span>
          <Link
            href="https://www.beetleandfrog.com/"
            className="hover:text-zg-teal transition-colors"
            onClick={() => trackExternalLinkClick('beetle-and-frog', 'footer')}
          >
            Portfolio by Beetle & Frog
          </Link>
          <span aria-hidden="true">•</span>
          <Link
            href="/privacy-policy"
            className="hover:text-zg-teal transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
