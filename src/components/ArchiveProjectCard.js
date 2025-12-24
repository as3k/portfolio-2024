"use client";

import Image from 'next/image';
import Link from 'next/link';
import { trackProjectCardClick, trackProjectCardHover } from "@/lib/umami";

export default function ArchiveProjectCard({ project }) {
  const { slug, meta } = project;

  return (
    <Link
      href={`/projects/${slug}`}
      className="group block bg-zg-dark-0 rounded-lg overflow-hidden hover:ring-2 hover:ring-gray-600 hover:shadow-xl hover:shadow-gray-900/20 hover:-translate-y-1 transition-all duration-300"
      onClick={() => trackProjectCardClick(slug, 'archive_page', { archived: true })}
      onMouseEnter={() => trackProjectCardHover(slug, 'archive_page')}
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={meta.heroImage}
          alt={meta.title}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        <span className="absolute top-3 right-3 bg-gray-700 text-gray-300 text-microcopy-1-semibold px-2 py-1 rounded">
          Archived
        </span>
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
          <span className="text-microcopy-2 text-gray-500">{meta.category}</span>
          <span className="text-gray-700">•</span>
          <span className="text-microcopy-2 text-gray-500">{meta.year}</span>
        </div>
        <h2 className="text-heading-5-semibold text-gray-300 mb-3 group-hover:text-white transition-colors duration-300">
          {meta.title}
        </h2>
        <p className="text-body-1 text-gray-500 line-clamp-2">{meta.excerpt}</p>
      </div>
    </Link>
  );
}
