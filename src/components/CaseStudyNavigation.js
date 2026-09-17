/**
 * Compact in-page navigation for long, decision-led case studies.
 * Section IDs and labels are explicit content metadata so anchors remain stable.
 */
export default function CaseStudyNavigation({ sections }) {
  if (!sections?.length) return null;

  return (
    <nav
      aria-label="Case study sections"
      className="mb-12 border-y border-gray-800 py-4"
    >
      <p className="text-utility-micro-2-semibold text-gray-400 uppercase tracking-wider mb-3">
        In this case study
      </p>
      <ol className="flex flex-wrap gap-x-5 gap-y-3">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="text-microcopy-2 text-gray-300 hover:text-zg-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zg-teal focus-visible:ring-offset-2 focus-visible:ring-offset-zg-dark rounded transition-colors"
            >
              {section.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
