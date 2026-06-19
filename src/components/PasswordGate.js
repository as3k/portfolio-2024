"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "zg_portfolio_access";
const PROJECT_PASSWORDS = {
  ren: "ren-arch-2026",
  launchbook: "lb-arch-2026",
};

export default function PasswordGate({ projectId, children }) {
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const stored = sessionStorage.getItem(`${STORAGE_KEY}_${projectId}`);
    if (stored === "true") {
      setIsUnlocked(true);
    }
  }, [projectId]);

  function handleSubmit(e) {
    e.preventDefault();
    const expected = PROJECT_PASSWORDS[projectId];
    if (password === expected) {
      setError(false);
      setIsUnlocked(true);
      sessionStorage.setItem(`${STORAGE_KEY}_${projectId}`, "true");
    } else {
      setError(true);
    }
  }

  // Avoid hydration mismatch
  if (!isClient) {
    return <div className="animate-pulse bg-zg-dark-0 rounded-lg h-64" />;
  }

  if (isUnlocked) {
    return children;
  }

  return (
    <div className="bg-zg-dark-0 rounded-lg p-8 md:p-12 max-w-lg mx-auto text-center">
      <div className="w-12 h-12 rounded-full bg-zg-teal/10 flex items-center justify-center mx-auto mb-6">
        <svg className="w-6 h-6 text-zg-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      </div>
      <h3 className="text-heading-5-semibold text-white mb-2">
        Architecture Details
      </h3>
      <p className="text-body-1 text-gray-400 mb-6">
        This case study contains detailed architecture information. Enter the password provided by Zachary to continue.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            placeholder="Enter password"
            className="w-full bg-zg-dark-1 border border-gray-700 rounded-lg px-4 py-3 text-body-1 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-zg-teal/50 focus:border-zg-teal transition-colors"
            autoFocus
          />
          {error && (
            <p className="text-microcopy-2 text-zg-coral mt-2 text-left">
              Incorrect password. Reach out to Zachary for access.
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full rounded-md text-white bg-zg-teal hover:bg-zg-coral active:scale-95 active:brightness-90 transition-all duration-300 px-5 py-3 text-body-1-bold"
        >
          Unlock Case Study
        </button>
      </form>
      <p className="text-microcopy-2 text-gray-500 mt-4">
        Don't have the password?{" "}
        <a href="/lets-talk" className="text-zg-teal hover:text-zg-coral transition-colors">
          Request access
        </a>
      </p>
    </div>
  );
}
