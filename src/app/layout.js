import "./globals.css";
import { Poppins } from "next/font/google";
import Script from "next/script";
import LayoutWrapper from "@/components/LayoutWrapper";
import JsonLd, { personSchema, websiteSchema, professionalServiceSchema } from "@/components/JsonLd";

const poppins = Poppins({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  metadataBase: new URL('https://zacharyguerrero.com'),
  title: "Zachary Guerrero - Senior Product Designer",
  description: "Senior Product Designer with 10+ years building B2B SaaS products. I design for clarity, build with React, and measure impact. Based in California, open to remote roles.",
  openGraph: {
    title: "Zachary Guerrero - Senior Product Designer",
    description: "I help B2B SaaS companies turn complex problems into simple experiences.",
    url: 'https://zacharyguerrero.com',
    siteName: 'Zachary Guerrero',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Zachary Guerrero - Senior Product Designer",
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
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
