"use client";

import { useEffect, useState } from "react";

export default function BlogTableOfContents({ headings }) {
  const [activeId, setActiveId] = useState(headings[0]?.id);

  useEffect(() => {
    const articleHeadings = document.querySelectorAll("article h2");

    headings.forEach((heading, index) => {
      const element = articleHeadings[index];

      if (element) {
        element.id = heading.id;
      }
    });

    const updateActiveHeading = () => {
      const currentHeading = headings.reduce((current, heading) => {
        const element = document.getElementById(heading.id);

        if (element && element.getBoundingClientRect().top <= window.innerHeight * 0.35) {
          return heading.id;
        }

        return current;
      }, headings[0]?.id);

      setActiveId(currentHeading);
    };

    updateActiveHeading();
    window.addEventListener("scroll", updateActiveHeading, { passive: true });
    window.addEventListener("resize", updateActiveHeading);

    return () => {
      window.removeEventListener("scroll", updateActiveHeading);
      window.removeEventListener("resize", updateActiveHeading);
    };
  }, [headings]);

  return (
    <ol className="space-y-3">
      {headings.map((heading) => {
        const isActive = activeId === heading.id;

        return (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              aria-current={isActive ? "location" : undefined}
              className={`text-microcopy-2 transition-colors ${isActive ? "font-bold text-white" : "text-gray-400 hover:text-white"}`}
            >
              {heading.title}
            </a>
          </li>
        );
      })}
    </ol>
  );
}
