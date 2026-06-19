import {
  EnvelopeIcon,
  GlobeAltIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import JsonLd, { createBreadcrumbSchema } from "@/components/JsonLd";
import ResumeDownloadButton from "@/components/ResumeDownloadButton";
import { resumeData } from "@/lib/resume-data";

export const metadata = {
  title: "Resume | Zachary Guerrero",
  description: "Professional resume of Zachary Guerrero, Senior Product Engineer with 10+ years of experience in full-stack product engineering and UX design.",
};

function ContactItem({ icon: Icon, children, href }) {
  const content = (
    <span className="flex items-center gap-2 text-gray-400 hover:text-zg-teal transition-colors">
      <Icon className="w-4 h-4" />
      {children}
    </span>
  );

  if (href) {
    return (
      <Link href={href} target={href.startsWith("http") ? "_blank" : undefined}>
        {content}
      </Link>
    );
  }
  return content;
}

function ExperienceItem({ company, location, date, title, children }) {
  return (
    <div className="mb-8 last:mb-0">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
        <div>
          <h3 className="text-heading-6-semibold text-white">{company}</h3>
          <p className="text-body-1-semibold text-zg-teal">{title}</p>
        </div>
        <div className="text-microcopy-2 text-gray-500 md:text-right mt-1 md:mt-0">
          {location && <p>{location}</p>}
          <p>{date}</p>
        </div>
      </div>
      <ul className="space-y-2 mt-4">
        {children}
      </ul>
    </div>
  );
}

function ExperienceBullet({ children }) {
  return (
    <li className="flex gap-3 text-body-1 text-gray-400">
      <span className="text-zg-teal mt-1.5">•</span>
      <span>{children}</span>
    </li>
  );
}

function SkillTag({ children }) {
  return (
    <span className="text-microcopy-2 bg-zg-dark-0 text-gray-300 px-3 py-1.5 rounded hover:bg-zg-teal/10 hover:text-zg-teal transition-colors duration-300">
      {children}
    </span>
  );
}

export default function ResumePage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://zacharyguerrero.com" },
    { name: "Resume", url: "https://zacharyguerrero.com/resume" },
  ]);

  // Resume schema
  const resumeSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://zacharyguerrero.com/resume",
    name: "Resume | Zachary Guerrero",
    description: "Professional resume of Zachary Guerrero, Product Designer with 10+ years of experience in UX design and front-end development.",
    url: "https://zacharyguerrero.com/resume",
    mainEntity: {
      "@id": "https://zacharyguerrero.com/#person",
    },
  };

  return (
    <>
      <JsonLd data={resumeSchema} />
      <JsonLd data={breadcrumbSchema} />
      <div className="container my-12 lg:my-16">
        {/* Header */}
        <header className="mb-12 pb-8 border-b border-gray-800">
          <h1 className="text-heading-1-bold mb-2">{resumeData.name}</h1>
          <p className="text-heading-5-semibold text-zg-teal mb-6">{resumeData.title}</p>

          <div className="flex flex-wrap gap-4 md:gap-6 text-microcopy-2">
            <ContactItem icon={MapPinIcon}>{resumeData.location}</ContactItem>
            <ContactItem icon={PhoneIcon} href={resumeData.phoneHref}>
              {resumeData.phone}
            </ContactItem>
            <ContactItem icon={EnvelopeIcon} href={`mailto:${resumeData.email}`}>
              {resumeData.email}
            </ContactItem>
            <ContactItem icon={GlobeAltIcon} href={resumeData.websiteHref}>
              {resumeData.website}
            </ContactItem>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-12">
          <p className="text-body-2 text-gray-400 max-w-3xl">
            {resumeData.summary}
          </p>
        </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content - Experience */}
        <div className="lg:col-span-2">
          <section className="mb-12">
            <h2 className="text-heading-4-bold mb-8 pb-2 border-b border-gray-800">
              Work Experience
            </h2>

            {resumeData.experience.map((exp) => (
              <ExperienceItem
                key={exp.company}
                company={exp.company}
                location={exp.location}
                date={exp.date}
                title={exp.title}
              >
                {exp.bullets.map((bullet) => (
                  <ExperienceBullet key={bullet.slice(0, 30)}>
                    {bullet}
                  </ExperienceBullet>
                ))}
              </ExperienceItem>
            ))}
          </section>
        </div>

        {/* Sidebar - Skills & Education */}
        <div className="lg:col-span-1">
          <section className="mb-12">
            <h2 className="text-heading-4-bold mb-6 pb-2 border-b border-gray-800">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.map((skill) => (
                <SkillTag key={skill}>{skill}</SkillTag>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-heading-4-bold mb-6 pb-2 border-b border-gray-800">
              Education
            </h2>
            <div>
              <h3 className="text-body-1-semibold text-white">
                {resumeData.education.degree}
              </h3>
              <p className="text-body-1 text-gray-400">{resumeData.education.school}</p>
              <p className="text-microcopy-2 text-gray-500">{resumeData.education.location}</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-heading-4-bold mb-6 pb-2 border-b border-gray-800">
              Download
            </h2>
            <ResumeDownloadButton
              href="/Zachary-Guerrero-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-md text-white bg-zg-teal hover:bg-zg-coral active:scale-95 active:brightness-90 transition-all duration-300 px-5 py-3 text-body-1-bold"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </ResumeDownloadButton>
          </section>

          <section className="p-6 bg-zg-dark-0 rounded-lg">
            <h2 className="text-heading-6-semibold mb-3 text-white">
              Learn More
            </h2>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="text-zg-teal hover:text-zg-coral transition-colors text-body-1-semibold"
              >
                View My Work
              </Link>
              <Link
                href="/process"
                className="text-zg-teal hover:text-zg-coral transition-colors text-body-1-semibold"
              >
                My Process
              </Link>
              <Link
                href="/about"
                className="text-zg-teal hover:text-zg-coral transition-colors text-body-1-semibold"
              >
                About Me
              </Link>
              <Link
                href="/lets-talk"
                className="text-zg-teal hover:text-zg-coral transition-colors text-body-1-semibold"
              >
                Get in Touch
              </Link>
            </div>
          </section>
        </div>
      </div>
      </div>
    </>
  );
}
