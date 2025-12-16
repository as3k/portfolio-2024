import "./globals.css";
import { Poppins } from "next/font/google";
import Script from "next/script";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd, { personSchema, websiteSchema, professionalServiceSchema } from "@/components/JsonLd";

const poppins = Poppins({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  title: "User experience design portfolio of Zachary Guerrero.",
  description: "Zachary Guerrero, a UX designer crafting seamless, user-friendly digital experiences. Specializing in apps, websites, and product design that bring your vision to life.",
};

export default function RootLayout({ children }) {
  const umamiScriptUrl = process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL;
  const umamiWebsiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  const umamiHostUrl = process.env.NEXT_PUBLIC_UMAMI_HOST_URL;

  return (
    <html lang="en" className={`${poppins.className} bg-zg-dark-1 text-gray-200`}>
      <head>
        <JsonLd data={{ "@context": "https://schema.org", ...personSchema }} />
        <JsonLd data={websiteSchema} />
        <JsonLd data={{ "@context": "https://schema.org", ...professionalServiceSchema }} />
      </head>
      <body className={`antialiased flex flex-col min-h-screen py-4 lg:py-6`}>
        {umamiScriptUrl && umamiWebsiteId ? (
          <Script
            src={umamiScriptUrl}
            data-website-id={umamiWebsiteId}
            data-host-url={umamiHostUrl}
            strategy="afterInteractive"
          />
        ) : null}
        <Header />
        <main className="flex flex-col flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
