import Image from 'next/image';
import Link from 'next/link';

/**
 * Custom MDX components mapping
 * These components replace standard HTML elements when rendering MDX content
 */
const MDXComponents = {
  // Headings
  h1: ({ children, ...props }) => (
    <h1 className="text-heading-1-bold mb-6 mt-8" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 className="text-heading-3-bold mb-4 mt-8" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="text-heading-5-bold mb-3 mt-6" {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4 className="text-heading-6-bold mb-2 mt-4" {...props}>
      {children}
    </h4>
  ),

  // Paragraphs and text
  p: ({ children, ...props }) => (
    <p className="text-body-1 text-gray-300 mb-4 md:mb-6 leading-relaxed" {...props}>
      {children}
    </p>
  ),
  strong: ({ children, ...props }) => (
    <strong className="font-semibold text-white" {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }) => (
    <em className="italic text-gray-200" {...props}>
      {children}
    </em>
  ),

  // Links
  a: ({ href, children, ...props }) => {
    const isExternal = href?.startsWith('http');
    if (isExternal) {
      return (
        <a
          href={href}
          className="text-zg-teal hover:text-zg-coral transition-colors underline"
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href || '#'}
        className="text-zg-teal hover:text-zg-coral transition-colors underline"
        {...props}
      >
        {children}
      </Link>
    );
  },

  // Lists
  ul: ({ children, ...props }) => (
    <ul className="list-disc list-inside mb-4 md:mb-6 space-y-3 text-gray-300" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="list-decimal list-inside mb-4 md:mb-6 space-y-3 text-gray-300" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="text-body-1" {...props}>
      {children}
    </li>
  ),

  // Blockquote
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="border-l-4 border-zg-teal pl-4 my-6 italic text-gray-400"
      {...props}
    >
      {children}
    </blockquote>
  ),

  // Code
  code: ({ children, ...props }) => (
    <code
      className="bg-zg-dark-0 px-1.5 py-0.5 rounded text-zg-teal text-sm font-mono"
      {...props}
    >
      {children}
    </code>
  ),
  pre: ({ children, ...props }) => (
    <pre
      className="bg-zg-dark-0 p-4 rounded-lg overflow-x-auto mb-4 text-sm"
      {...props}
    >
      {children}
    </pre>
  ),

  // Horizontal rule
  hr: (props) => <hr className="border-gray-700 my-8" {...props} />,

  // Images - use Next.js Image component
  img: ({ src, alt, ...props }) => (
    <span className="block my-6">
      <Image
        src={src || ''}
        alt={alt || ''}
        width={800}
        height={450}
        className="rounded-lg w-full h-auto"
        {...props}
      />
    </span>
  ),

  // Custom wrapper for the entire MDX content
  wrapper: ({ children }) => (
    <article className="prose prose-invert max-w-none">{children}</article>
  ),
};

export default MDXComponents;
