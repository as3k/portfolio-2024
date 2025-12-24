"use client";

import Link from "next/link";
import { trackResumeDownload } from "@/lib/umami";

export default function ResumeDownloadButton({ href, children, className }) {
  return (
    <Link
      href={href}
      download
      className={className}
      onClick={() => trackResumeDownload('resume_page', 'pdf')}
    >
      {children}
    </Link>
  );
}
