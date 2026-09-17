import Image from 'next/image';

export default function ArchiveProjectCard({ project }) {
  const { meta } = project;

  return (
    <article className="group block bg-zg-dark-0 rounded-lg overflow-hidden">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={meta.heroImage}
          alt={meta.title}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 560px"
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        <span className="absolute top-3 right-3 bg-gray-700 text-gray-300 text-microcopy-1-semibold px-2 py-1 rounded">
          Archived
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-microcopy-2 text-gray-400">{meta.category}</span>
          <span className="text-gray-700">•</span>
          <span className="text-microcopy-2 text-gray-400">{meta.year}</span>
        </div>
        <h2 className="text-heading-5-semibold text-gray-300 mb-3 group-hover:text-white transition-colors duration-300">
          {meta.title}
        </h2>
        <p className="text-body-1 text-gray-400 line-clamp-2">{meta.excerpt}</p>
      </div>
    </article>
  );
}
