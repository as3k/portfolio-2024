/**
 * JSON-LD Schema markup component for SEO
 * Renders structured data in the page head
 */

export default function JsonLd({ data }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script type="application/ld+json">{json}</script>
  );
}

// Base person schema for Zachary Guerrero
export const personSchema = {
  "@type": "Person",
  "@id": "https://zacharyguerrero.com/#person",
  name: "Zachary Guerrero",
  givenName: "Zachary",
  familyName: "Guerrero",
  jobTitle: "Design Engineer",
  description: "Design Engineer and UX Engineer working across product design, frontend engineering, and systems thinking.",
  url: "https://zacharyguerrero.com",
  email: "zack@zkg.io",
  image: "https://zacharyguerrero.com/images/zg-coffee-ride-profile-photo.webp",
  sameAs: [
    "https://linkedin.com/in/zacharyafguerrero",
    "https://github.com/as3k",
  ],
  knowsAbout: [
    "UX Design",
    "UX Engineering",
    "Design Engineering",
    "Product Design",
    "User Interface Design",
    "Design Systems",
    "React",
    "Next.js",
    "Front-End Development",
    "B2B SaaS",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Riverside",
    addressRegion: "CA",
    addressCountry: "US",
  },
};

// Base website schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://zacharyguerrero.com/#website",
  name: "Zachary Guerrero | Design Engineer",
  url: "https://zacharyguerrero.com",
  description: "Portfolio of Zachary Guerrero, a Design Engineer and UX Engineer working across product design, frontend engineering, and systems thinking.",
  publisher: {
    "@id": "https://zacharyguerrero.com/#person",
  },
  inLanguage: "en-US",
};

// Professional profile schema. The site represents Zachary's work, not a service business.
export const professionalProfileSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://zacharyguerrero.com/#professional-profile",
  name: "Zachary Guerrero | Design Engineer",
  url: "https://zacharyguerrero.com",
  description: "Portfolio of Zachary Guerrero, a Design Engineer and UX Engineer working across product design, frontend engineering, and systems thinking.",
  mainEntity: {
    "@id": "https://zacharyguerrero.com/#person",
  },
};

// Helper function to create page-specific schemas
export function createBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Create a creative work schema for case studies
export function createCaseStudySchema(work) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `https://zacharyguerrero.com/projects/${work.slug}`,
    name: work.meta.title,
    description: work.meta.excerpt,
    url: `https://zacharyguerrero.com/projects/${work.slug}`,
    image: `https://zacharyguerrero.com${work.meta.heroImage}`,
    author: {
      "@id": "https://zacharyguerrero.com/#person",
    },
    creator: {
      "@id": "https://zacharyguerrero.com/#person",
    },
    keywords: work.meta.tags?.join(", ") || work.meta.category,
    about: {
      "@type": "Thing",
      name: work.meta.category,
    },
    provider: work.meta.client ? {
      "@type": "Organization",
      name: work.meta.client,
    } : undefined,
  };
}

// Collection page schema for projects list
export function createCollectionPageSchema(projects) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://zacharyguerrero.com/projects",
    name: "Design Engineering Case Studies | Zachary Guerrero",
    description: "Design engineering case studies by Zachary Guerrero, spanning B2B SaaS, enterprise UX, infrastructure, and independent product work.",
    url: "https://zacharyguerrero.com/projects",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://zacharyguerrero.com/projects/${project.slug}`,
        name: project.meta.title,
      })),
    },
    author: {
      "@id": "https://zacharyguerrero.com/#person",
    },
  };
}

// About page schema
export const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://zacharyguerrero.com/about",
  name: "About Zachary Guerrero",
  description: "Learn about Zachary Guerrero, a Design Engineer and UX Engineer with experience in product design, design systems, and frontend development.",
  url: "https://zacharyguerrero.com/about",
  mainEntity: {
    "@id": "https://zacharyguerrero.com/#person",
  },
};

// Contact page schema
export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://zacharyguerrero.com/lets-talk",
  name: "Contact Zachary Guerrero",
  description: "Contact Zachary Guerrero about Design Engineer, UX Engineer, product design, or product engineering opportunities.",
  url: "https://zacharyguerrero.com/lets-talk",
  mainEntity: {
    "@id": "https://zacharyguerrero.com/#person",
  },
};

// FAQ page schema helper
export function createFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// How-to schema for process page
export function createHowToSchema(steps) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": "https://zacharyguerrero.com/process",
    name: "From Concept to Production",
    description: "How Zachary Guerrero connects research, interaction design, implementation, and iteration.",
    url: "https://zacharyguerrero.com/process",
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.body,
    })),
    author: {
      "@id": "https://zacharyguerrero.com/#person",
    },
  };
}

// Profile page schema for home
export const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://zacharyguerrero.com/",
  name: "Zachary Guerrero | Design Engineer Portfolio",
  description: "A portfolio of product design, frontend engineering, and systems-thinking work by Zachary Guerrero.",
  url: "https://zacharyguerrero.com",
  mainEntity: {
    "@id": "https://zacharyguerrero.com/#person",
  },
};
