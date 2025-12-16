"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Header from "./Header";
import Footer from "./Footer";
import { MobileNav } from "./Header";

export default function LayoutWrapper({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.inset = "0";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.inset = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.inset = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Mobile nav - sits behind content */}
      <MobileNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Close button - positioned to match hamburger location on shrunk page */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.button
            type="button"
            className="fixed z-[100] p-2 text-gray-400 hover:text-white transition-colors lg:hidden"
            style={{
              top: "1rem",
              right: "1rem",
            }}
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <XMarkIcon className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Main content wrapper - transforms when menu is open */}
      <motion.div
        className={`relative z-50 flex flex-col min-h-screen ${
          isMenuOpen ? "pointer-events-none lg:pointer-events-auto" : ""
        }`}
        initial={false}
        animate={{
          x: isMenuOpen ? "70%" : "0%",
          scale: isMenuOpen ? 0.8 : 1,
          borderRadius: isMenuOpen ? 24 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        style={{
          transformOrigin: "center 50vh",
          overflow: isMenuOpen ? "hidden" : "visible",
          boxShadow: isMenuOpen
            ? "0 0 60px rgba(0, 155, 166, 0.3), 0 0 120px rgba(0, 155, 166, 0.15), 0 25px 50px -12px rgba(0, 0, 0, 0.5)"
            : "none",
          background: isMenuOpen
            ? "linear-gradient(180deg, #0f1a24 0%, #0a1018 50%, #060a0e 100%)"
            : "transparent",
        }}
      >
        <Header onMenuToggle={setIsMenuOpen} isMenuOpen={isMenuOpen} />
        <main className="flex flex-col flex-1 mt-8 lg:mt-12">
          {children}
        </main>
        <Footer />
      </motion.div>
    </>
  );
}
