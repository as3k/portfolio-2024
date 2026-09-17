import {
  CodeBracketIcon,
  MagnifyingGlassIcon,
  Square3Stack3DIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/FadeIn";
import JsonLd, { profilePageSchema } from "@/components/JsonLd";
import ToolkitSection from "@/components/ToolkitSection";
import { getFeaturedWork } from "@/lib/content";

function StatCard({ value, label, isAnimated = false, animatedValue = 0, suffix = "" }) {
  return (
    <div className="flex flex-col">
      <span className="text-heading-6-bold md:text-heading-4-bold text-white">
        {isAnimated ? (
          <>
            <span className="sr-only">{animatedValue}{suffix}</span>
            <span aria-hidden="true">
              <AnimatedCounter value={animatedValue} suffix={suffix} />
            </span>
          </>
        ) : (
          value
        )}
      </span>
      <span className="text-microcopy-1 md:text-microcopy-2 text-gray-400">{label}</span>
    </div>
  );
}

function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div className="h-full group bg-zg-dark-0 rounded-lg p-8 hover:ring-2 hover:ring-zg-teal/50 hover:shadow-lg hover:shadow-zg-teal/5 hover:-translate-y-1 transition-all duration-300">
      <div className="w-10 h-10 rounded-lg bg-zg-teal/10 group-hover:bg-zg-teal/20 flex items-center justify-center mb-5 transition-colors duration-300">
        <Icon className="w-5 h-5 text-zg-teal group-hover:scale-110 transition-transform duration-300" />
      </div>
      <h3 className="text-heading-6-semibold text-white mb-3">{title}</h3>
      <p className="text-body-1 text-gray-400">{description}</p>
    </div>
  );
}

function ProjectCard({ project }) {
  const { slug, meta } = project;

  return (
    <Link
      href={`/projects/${slug}`}
      className="group block bg-zg-dark-0 rounded-lg overflow-hidden hover:ring-2 hover:ring-zg-teal hover:shadow-xl hover:shadow-zg-teal/10 hover:-translate-y-1 transition-all duration-300"
    >
      <div
        className="relative overflow-hidden aspect-video"
      >
        <Image
          src={meta.heroImage}
          alt={meta.title}
          fill
          loading={project.slug === 'member-splash' ? 'eager' : 'lazy'}
          fetchPriority={project.slug === 'member-splash' ? 'high' : 'auto'}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zg-dark-1/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <span className="flex items-center gap-2 text-white text-body-1-semibold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            View Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-microcopy-2 text-gray-400">{meta.category}</span>
          <span className="text-gray-600">•</span>
          <span className="text-microcopy-2 text-gray-400">{meta.year}</span>
        </div>
        <h3 className="text-heading-5-semibold text-white mb-3 group-hover:text-zg-teal transition-colors duration-300">
          {meta.title}
        </h3>
        <p className="text-body-1 text-gray-400 line-clamp-2">{meta.excerpt}</p>
      </div>
    </Link>
  );
}

export default function Home() {
  const featuredWork = getFeaturedWork();

  const services = [
    {
      icon: SwatchIcon,
      title: "Design Through Implementation",
      description:
        "I carry product work from problem framing and interaction design into production interfaces, keeping the rationale intact as constraints emerge.",
    },
    {
      icon: MagnifyingGlassIcon,
      title: "Ground Decisions in Evidence",
      description:
        "I use the evidence appropriate to the work: operational feedback, user research, implementation investigation, and post-launch signals.",
    },
    {
      icon: Square3Stack3DIcon,
      title: "Build Systems That Hold Up",
      description:
        "I build reusable components, clear workflows, and maintainable foundations that make future product work easier.",
    },
    {
      icon: CodeBracketIcon,
      title: "Work Across Product Boundaries",
      description:
        "I collaborate across product, design, support, and engineering, then contribute in code where implementation context matters.",
    },
  ];

  return (
    <>
      <JsonLd data={profilePageSchema} />
      <div className="container my-3 lg:my-16 flex flex-col">
        {/* Hero Section */}
      <section className="order-1">
        <div className="flex flex-col gap-4 lg:gap-6 max-w-3xl">
          <FadeIn>
            <h1 className="flex flex-col gap-1 lg:gap-2">
              <span className="text-body-1-semibold text-zg-teal">Zachary Guerrero · Design Engineer</span>
              <span className="text-heading-4-bold md:text-heading-2-bold lg:text-heading-1-bold">
                I design product experiences that survive implementation.
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-3 lg:space-y-4 text-body-1 lg:text-body-2 text-gray-400">
              <p>
                I work where product design and frontend engineering overlap. I investigate the problem, shape the interaction, build the interface, and stay involved through launch and iteration.
              </p>
              <p className="hidden md:block">
                My strongest work connects user needs, operational realities, and implementation constraints. I prototype in Figma, contribute in code, and work closely with the people who support and ship the product.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-wrap gap-4 lg:gap-6 items-center">
              <Link
                href="/projects/member-splash"
                className="rounded-md text-white bg-zg-teal hover:bg-zg-coral active:scale-95 active:brightness-90 transition-all duration-300 px-4 lg:px-5 py-2.5 lg:py-3 text-body-1-bold"
              >
                Read the Member Splash case study
              </Link>
              <Link
                href="/projects"
                className="group text-gray-400 hover:text-zg-teal transition-colors duration-300 text-body-1-semibold inline-flex items-center gap-2"
              >
                View all work
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </FadeIn>

          {/* Stats */}
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap gap-4 md:gap-8 pt-4 lg:pt-6 border-t border-gray-800">
              <StatCard value="Design + Code" label="Product Delivery" />
              <StatCard value="UX Engineer" label="Adjacent Role" />
              <StatCard value="10+ Years" label="Designing & Building" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* My Focus Section */}
      <section className="order-3 mt-24 lg:mt-32">
        <FadeIn>
          <div className="mb-12">
            <span className="inline-block text-microcopy-2-semibold text-gray-400 border border-gray-700 rounded-full px-4 py-1.5 mb-4 hover:border-zg-teal/50 hover:text-zg-teal/80 transition-colors duration-300">
              My Expertise
            </span>
            <h2 className="text-heading-3-bold md:text-heading-2-bold max-w-3xl mb-4">
              Product design and frontend engineering, connected.
            </h2>
            <p className="text-body-2 text-gray-400 max-w-2xl">
              I bring design judgment into implementation, and implementation knowledge back into design. The result is clearer interactions, better edge-case thinking, and product work that is easier for teams to ship and support.
            </p>
          </div>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10" staggerDelay={0.1}>
          {services.map((service) => (
            <FadeInStaggerItem key={service.title} className="h-full">
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </section>

      {/* Project Showcase Section */}
      <section className="order-2 mt-24 lg:mt-32">
        <FadeIn>
          <div className="mb-8">
            <h2 className="text-heading-3-bold">Shipped Projects</h2>
          </div>
        </FadeIn>
        <FadeInStagger
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
          staggerDelay={0.15}
        >
          {featuredWork.map((project) => (
            <FadeInStaggerItem
              key={project.slug}
              className={
                project.slug === 'member-splash' ? 'md:col-span-2' : ''
              }
            >
              <ProjectCard project={project} />
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
        <FadeIn delay={0.4}>
          <div className="flex justify-center mt-10">
            <Link
              href="/projects"
              className="group text-body-1-semibold text-gray-400 hover:text-zg-teal transition-colors duration-300 inline-flex flex-col items-center gap-1"
            >
              See all projects
              <svg
                className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </Link>
          </div>
        </FadeIn>
      </section>
      <div className="order-4">
        <ToolkitSection />
      </div>
      </div>
    </>
  );
}
