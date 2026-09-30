import "./globals.css";
import { Poppins } from "next/font/google";
import Script from "next/script";
import JsonLd, { personSchema, professionalProfileSchema, websiteSchema } from "@/components/JsonLd";
import LayoutWrapper from "@/components/LayoutWrapper";

const poppins = Poppins({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  metadataBase: new URL('https://zacharyguerrero.com'),
  alternates: {
    canonical: '/',
  },
  title: "Zachary Guerrero | Design Engineer",
  description: "Design Engineer and UX Engineer working across product design, frontend engineering, and systems thinking. I take complex product work from research and interaction design through implementation and iteration.",
  keywords: [
    "design engineer",
    "UX engineer",
    "product designer",
    "senior product designer",
    "UX designer",
    "UI designer",
    "React developer",
    "Next.js",
    "TypeScript",
    "B2B SaaS",
    "design systems",
    "front-end development",
    "user experience",
    "California",
    "remote",
    "Figma",
    "conversion optimization"
  ],
  openGraph: {
    title: "Zachary Guerrero | Design Engineer",
    description: "Product design, frontend engineering, and systems thinking for complex products.",
    url: 'https://zacharyguerrero.com',
    siteName: 'Zachary Guerrero',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Zachary Guerrero | Design Engineer",
    description: "Product design, frontend engineering, and systems thinking for complex products.",
  },
};

export default function RootLayout({ children }) {
  const rybbitSiteId = process.env.NEXT_PUBLIC_RYBBIT_SITE_ID || "fafd29329cd3";
  const rybbitScriptUrl = process.env.NEXT_PUBLIC_RYBBIT_SCRIPT_URL || "/analytics/script.js";

  return (
    <html lang="en" className={`${poppins.className} text-gray-200`}>
      <head>
        <JsonLd data={{ "@context": "https://schema.org", ...personSchema }} />
        <JsonLd data={websiteSchema} />
        <JsonLd data={professionalProfileSchema} />
      </head>
      <body className="antialiased overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-zg-teal focus:text-white focus:rounded-md focus:text-body-1-semibold"
        >
          Skip to content
        </a>
        {rybbitScriptUrl ? (
          <Script
            src={rybbitScriptUrl}
            data-site-id={rybbitSiteId}
            strategy="afterInteractive"
          />
        ) : null}
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
