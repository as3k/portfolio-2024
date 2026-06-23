import Link from "next/link";
import { trackExternalLinkClick, trackFooterNavClick, trackResumeDownload } from "@/lib/umami";

export default function Footer() {
  return (
    <footer className="mt-24 lg:mt-32 pt-12 pb-8 border-t border-gray-800">
      <div className="container flex flex-col items-center gap-8">
        {/* Main Row - stacked on mobile, inline on desktop */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <span className="text-heading-4-bold text-white">
              ZG<span className="text-zg-teal">.</span>
            </span>
            <div>
              <p className="text-body-1-semibold text-white">Zachary Guerrero</p>
              <p className="text-microcopy-1 text-gray-400">
                Senior Product Engineer
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 text-microcopy-1" aria-label="Footer navigation">
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
          <div className="flex gap-4 text-microcopy-1">
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

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-microcopy-2 text-gray-400">
          <p>&copy; {new Date().getFullYear()} Zachary Guerrero</p>
          <span className="hidden sm:inline">•</span>
          <span>Based in California</span>
          <span className="hidden sm:inline">•</span>
          <span>Open to remote roles</span>
          <span className="hidden sm:inline">•</span>
          <Link
            href="https://www.beetleandfrog.com/"
            className="hover:text-zg-teal transition-colors"
            onClick={() => trackExternalLinkClick('beetle-and-frog', 'footer')}
          >
            Portfolio by Beetle & Frog
          </Link>
          <span className="hidden sm:inline">•</span>
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
