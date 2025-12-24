"use client";

import Link from "next/link";
import { trackExternalLinkClick } from "@/lib/umami";

export function ContactMethodCard({ href, icon: Icon, title, subtitle, destination, external = false }) {
  return (
    <Link
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className="flex items-center gap-3 p-4 rounded-lg bg-zg-dark-0 hover:bg-zg-dark-1 transition-colors group"
      onClick={() => trackExternalLinkClick(destination, 'contact_page')}
    >
      <div className="w-10 h-10 rounded-full bg-zg-teal/10 flex items-center justify-center group-hover:bg-zg-teal/20 transition-colors">
        {Icon}
      </div>
      <div>
        <p className="text-body-1-semibold text-white">{title}</p>
        <p className="text-microcopy-1 text-gray-400">{subtitle}</p>
      </div>
    </Link>
  );
}
