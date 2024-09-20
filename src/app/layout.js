import "./globals.css";
import { Poppins } from 'next/font/google'
import Footer from "@/components/Footer";
import Header from "@/components/Header";

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
  return (
    <html lang="en" className={`${poppins.className} bg-zg-dark-1 text-gray-200`}>
      <body className={`antialiased flex flex-col min-h-screen py-4 lg:py-6`}>
        <Header />
        <main className="flex flex-col flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
