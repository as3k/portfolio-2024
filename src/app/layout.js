import "./globals.css";
import { Poppins } from "next/font/google";
import Script from "next/script";
import JsonLd, { personSchema, professionalServiceSchema, websiteSchema } from "@/components/JsonLd";
import LayoutWrapper from "@/components/LayoutWrapper";

const poppins = Poppins({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  metadataBase: new URL('https://zacharyguerrero.com'),
  title: "Zachary Guerrero - Senior Product Engineer",
  description: "Senior Product Engineer with 10+ years building B2B SaaS products. I design for clarity, build with React, and measure impact. Based in California, open to remote roles.",
  keywords: [
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
    title: "Zachary Guerrero - Senior Product Engineer",
    description: "I help B2B SaaS companies turn complex problems into simple experiences.",
    url: 'https://zacharyguerrero.com',
    siteName: 'Zachary Guerrero',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Zachary Guerrero - Senior Product Engineer",
    description: "I help B2B SaaS companies turn complex problems into simple experiences.",
  },
};

export default function RootLayout({ children }) {
  const umamiScriptUrl = process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL;
  const umamiWebsiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  const umamiHostUrl = process.env.NEXT_PUBLIC_UMAMI_HOST_URL;

  return (
    <html lang="en" className={`${poppins.className} text-gray-200`}>
      <head>
        <JsonLd data={{ "@context": "https://schema.org", ...personSchema }} />
        <JsonLd data={websiteSchema} />
        <JsonLd data={{ "@context": "https://schema.org", ...professionalServiceSchema }} />
      </head>
      <body className="antialiased overflow-x-hidden">
        {umamiScriptUrl && umamiWebsiteId ? (
          <Script
            src={umamiScriptUrl}
            data-website-id={umamiWebsiteId}
            {...(umamiHostUrl ? { "data-host-url": umamiHostUrl } : {})}
            strategy="afterInteractive"
          />
        ) : null}
        {/* stats.zkg.io removed — CORS misconfiguration causes 7 console errors per page */}
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
