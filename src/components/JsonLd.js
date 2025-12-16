/**
 * JSON-LD Schema markup component for SEO
 * Renders structured data in the page head
 */

export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Base person schema for Zachary Guerrero
export const personSchema = {
  "@type": "Person",
  "@id": "https://zkg.io/#person",
  name: "Zachary Guerrero",
  givenName: "Zachary",
  familyName: "Guerrero",
  jobTitle: "Product Designer",
  description: "Product designer who codes. Specializing in B2B SaaS, complex flows, and technical products.",
  url: "https://zkg.io",
  email: "zack@zkg.io",
  image: "https://zkg.io/images/zg-coffee-ride-profile-photo.jpg",
  sameAs: [
    "https://linkedin.com/in/zacharyafguerrero",
    "https://github.com/zachguerrero",
  ],
  knowsAbout: [
    "UX Design",
    "Product Design",
    "User Interface Design",
    "Design Systems",
    "React",
    "Next.js",
    "Front-End Development",
    "B2B SaaS",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "California State University, San Bernardino",
  },
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
  "@id": "https://zkg.io/#website",
  name: "Zachary Guerrero - Product Designer",
  url: "https://zkg.io",
  description: "Portfolio of Zachary Guerrero, a product designer who codes. Specializing in B2B SaaS and complex user experiences.",
  publisher: {
    "@id": "https://zkg.io/#person",
  },
  inLanguage: "en-US",
};

// Professional service schema
export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://zkg.io/#service",
  name: "Zachary Guerrero - UX Design Services",
  url: "https://zkg.io",
  description: "Product design, UX research, design systems, and front-end development services for B2B SaaS companies.",
  provider: {
    "@id": "https://zkg.io/#person",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  serviceType: [
    "Product Design",
    "UX Design",
    "UI Design",
    "Design Systems",
    "Front-End Development",
    "UX Research",
  ],
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
    "@id": `https://zkg.io/projects/${work.slug}`,
    name: work.meta.title,
    description: work.meta.excerpt,
    url: `https://zkg.io/projects/${work.slug}`,
    image: `https://zkg.io${work.meta.heroImage}`,
    dateCreated: `${work.meta.year}-01-01`,
    author: {
      "@id": "https://zkg.io/#person",
    },
    creator: {
      "@id": "https://zkg.io/#person",
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
    "@id": "https://zkg.io/projects",
    name: "Project Showcase | Zachary Guerrero",
    description: "UX design case studies and projects by Zachary Guerrero. Explore my portfolio of web design, branding, and product design work.",
    url: "https://zkg.io/projects",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://zkg.io/projects/${project.slug}`,
        name: project.meta.title,
      })),
    },
    author: {
      "@id": "https://zkg.io/#person",
    },
  };
}

// About page schema
export const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://zkg.io/about",
  name: "About Zachary Guerrero",
  description: "Learn about Zachary Guerrero, a product designer who codes. Over a decade of experience in UX design, design systems, and front-end development.",
  url: "https://zkg.io/about",
  mainEntity: {
    "@id": "https://zkg.io/#person",
  },
};

// Contact page schema
export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://zkg.io/lets-talk",
  name: "Contact Zachary Guerrero",
  description: "Contact Zachary Guerrero about product design roles or potential collaborations.",
  url: "https://zkg.io/lets-talk",
  mainEntity: {
    "@id": "https://zkg.io/#person",
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
    "@id": "https://zkg.io/process",
    name: "How I Approach Product Design",
    description: "My design process: from understanding the problem to shipping solutions that move metrics.",
    url: "https://zkg.io/process",
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.philosophy,
    })),
    author: {
      "@id": "https://zkg.io/#person",
    },
  };
}

// Profile page schema for home
export const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://zkg.io/",
  name: "Zachary Guerrero - Product Designer Portfolio",
  description: "Designing B2B SaaS products that users love and engineering teams can build. 10+ years of experience in UX design and front-end development.",
  url: "https://zkg.io",
  mainEntity: {
    "@id": "https://zkg.io/#person",
  },
};
