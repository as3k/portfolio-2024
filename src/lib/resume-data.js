export const resumeData = {
  name: "Zachary Guerrero",
  title: "Design Engineer / UX Engineer",
  location: "Riverside, California",
  phone: "(702) 469-5962",
  phoneHref: "tel:+1702****962",
  email: "zack@zkg.io",
  website: "zacharyguerrero.com",
  websiteHref: "https://zacharyguerrero.com",

  summary: `Design Engineer and UX Engineer with 10+ years across enterprise SaaS, insurance, and membership platforms. I work where product design and implementation overlap: framing workflows, designing interactions, building interfaces, and staying involved through launch. At Member Splash, I have shipped payment capabilities, redesigned member check-in, and improved the developer environment while working with Customer Success, support, and engineering. I work in React, Vue, Next.js, Python, and PHP.`,

  skills: [
    // Design
    "Product Strategy",
    "Product Design & UX",
    "Design Systems",
    "User Research & Testing",
    "Information Architecture",
    "Prototyping",
    "Product Analytics",
    "Accessibility (WCAG)",
    // Engineering
    "Full-Stack Development (React, Next.js, TypeScript, Vue, Python, PHP)",
    "System Architecture & Design",
    "API Design & Integration",
    "Database Design (PostgreSQL, MySQL)",
    "DevOps & Cloud Infrastructure (Docker, Vercel, Cloudflare, AWS)",
    "CI/CD & Deployment Pipelines",
    // Delivery
    "End to End Product Ownership",
    "AI-Assisted Development",
  ],

  experience: [
    {
      company: "Member Splash",
      location: "Ladera Ranch, CA",
      date: "05/2025 - Present",
      title: "Senior Product Engineer",
      bullets: [
        "Shipped Splash Cards, a prepaid digital stored-value system available across 499 clubs. In 2026, 72 clubs used it, serving roughly 4,979 card participants and supporting approximately $76,000 in card loads. Owned product and implementation delivery: scoped the work, designed and built the feature, integrated payments, documented it, and trained staff.",
        "Redesigned the member check-in experience, simplifying primary-member, guest, and credit-purchase paths. Internal timing reduced the workflow from 30+ seconds to under 10 seconds; shipped with staff and club-admin documentation.",
        "Built a shareable, cross-platform Docker development environment that replaced an unreliable Lando setup. After environment configuration, setup normally takes minutes and slower cases remain under an hour.",
        "Identified and remediated a sensitive-data exposure in an API response by rewriting the handler so the data was no longer returned.",
      ],
    },
    {
      company: "Beetle & Frog Design",
      location: "Riverside, CA",
      date: "10/2018 - Present",
      title: "UX Consultant (part-time)",
      bullets: [
        "Designed and shipped strategy-first websites for local service businesses, spanning brand, information architecture, conversion copy, development, and deployment.",
        "Built and shipped booking systems and automation flows for service providers. Intake forms, payment collection, reminder sequences, and lead routing.",
        "Designed and built Lift, the hosting and security infrastructure serving all B&F client sites. Audited and remediated vulnerabilities across 20+ properties.",
      ],
    },
    {
      company: "Pacific Life Insurance Company",
      location: "Newport Beach, CA",
      date: "11/2022 - 10/2024",
      title: "User Experience Designer II",
      bullets: [
        "Led UX research for policyholder, agent, and internal tools. Ran interviews and usability tests that shaped what the product team built next.",
        "Designed enterprise portals and internal tools for claims and underwriting. Built design system components that other teams adopted.",
        "Worked with product, engineering, and business analysts to ship accessible experiences while navigating technical and regulatory constraints.",
      ],
    },
    {
      company: "Aeries Software",
      location: "Orange, CA",
      date: "07/2019 - 07/2021",
      title: "Product Designer",
      bullets: [
        "Designed parent and community portals for a K-12 student information system. Made it easier for families to find grades, attendance, and student info.",
        "Worked with marketing and product to keep designs consistent across public and logged-in experiences. Built reusable components.",
      ],
    },
    {
      company: "Multimedia LLC",
      location: "Laguna Hills, CA",
      date: "04/2018 - 07/2019",
      title: "UX/UI Designer",
      bullets: [
        "Redesigned the payment and add-ons purchase flow to reduce checkout drop-off.",
        "Streamlined the content upload-to-broadcast workflow for content creators, improving discoverability of advanced features.",
      ],
    },
  ],

  education: {
    degree: "Associates of Applied Science in Information Technology",
    school: "ITT Technical Institute",
    location: "Henderson, NV",
  },
};
