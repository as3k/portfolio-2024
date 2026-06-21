"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { trackLetsTalkCTA, trackLogoClick, trackMobileMenuToggle, trackNavigationClick } from "@/lib/umami";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/process", label: "Process" },
  { href: "/consulting", label: "Consulting" },
  { href: "/blog", label: "Blog" },
];

export default function Header({ onMenuToggle, isMenuOpen }) {
  const pathname = usePathname();

  // Close menu on route change
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentionally only depends on pathname
  useEffect(() => {
    if (isMenuOpen && onMenuToggle) {
      onMenuToggle(false);
    }
  }, [pathname]);

  return (
    <header className="flex w-full justify-between items-center px-4 lg:px-8 py-4 lg:py-6">
      <div className="logo text-heading-3-bold text-white">
        <Link
          href="/"
          className="hover:text-zg-teal transition-colors duration-300"
          aria-label="ZG. – Zachary Guerrero home page"
          onClick={() => trackLogoClick('header')}
        >
          ZG<span className="text-zg-teal">.</span>
        </Link>
      </div>

      {/* Mobile menu button */}
      <button
        type="button"
        className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
        onClick={() => {
          const newState = !isMenuOpen;
          onMenuToggle?.(newState);
          trackMobileMenuToggle(newState ? 'open' : 'close');
        }}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <Bars3Icon className="w-6 h-6" />
      </button>

      {/* Desktop nav */}
      <div className="hidden lg:flex gap-4 lg:gap-6 text-microcopy-1-semibold md:text-body-1-semibold">
        <nav className="items-center flex" aria-label="Main navigation">
          <ul className="flex gap-6">
            {navItems.map((item) => {
              const isActive = item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname?.startsWith(`${item.href}/`);
              return (
                <li key={item.href}>
                  <Link
                    className={`relative transition-colors duration-300 pb-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-zg-teal after:transition-all after:duration-300 ${
                      isActive
                        ? "text-zg-teal after:w-full"
                        : "hover:text-zg-teal after:w-0 hover:after:w-full"
                    }`}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => trackNavigationClick(item.label, 'desktop')}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="buttons flex gap-4 items-center">
          <Link
            className="rounded-md text-white ring-2 ring-zg-teal hover:bg-zg-teal hover:ring-zg-teal active:scale-95 active:brightness-90 transition-all duration-300 px-3 py-2"
            href="/lets-talk"
            onClick={() => trackLetsTalkCTA('header_desktop')}
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </header>
  );
}

// Mobile navigation overlay
export function MobileNav({ isOpen, onClose }) {
  const pathname = usePathname();

  return (
    <div className="fixed inset-0 z-40 lg:hidden pointer-events-none">
      {/* Nav content - sits on left side */}
      <nav
        className={`absolute left-0 top-0 bottom-0 w-72 pt-8 px-6 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
        }`}
        aria-label="Mobile navigation"
      >
        {/* Logo */}
        <div className="text-heading-3-bold text-white mb-8">
          ZG<span className="text-zg-teal">.</span>
        </div>

        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname?.startsWith(`${item.href}/`);
            return (
              <li key={item.href}>
                <Link
                  className={`block py-3 text-body-2 transition-colors duration-300 ${
                    isActive ? "text-zg-teal" : "text-gray-300 hover:text-white"
                  }`}
                  href={item.href}
                  onClick={() => {
                    trackNavigationClick(item.label, 'mobile');
                    onClose();
                  }}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="mt-6 pt-6 border-t border-gray-700">
          <Link
            className="inline-block rounded-md text-white bg-zg-teal hover:bg-zg-coral active:scale-95 transition-all duration-300 px-4 py-3 text-body-1-semibold"
            href="/lets-talk"
            onClick={() => {
              trackLetsTalkCTA('mobile_nav');
              onClose();
            }}
          >
            Let's Talk
          </Link>
        </div>
      </nav>
    </div>
  );
}
