import Link from "next/link";
import "./globals.css";
import { Poppins } from 'next/font/google'

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
        <header className="flex w-full justify-between px-4 lg:px-8">
          <div className="logo text-heading-3-bold text-white">ZG<span className="text-zg-teal">.</span></div>
          <div className="flex gap-4 lg:gap-6 text-body-1-semibold">
            <nav className="items-center flex">
              <ul className="flex gap-6">
                <li><Link className="hover:text-zg-teal transition duration-500" href="/#work">Design</Link></li>
                <li><Link className="hover:text-zg-teal transition duration-500" href="/blog">Blog</Link></li>
              </ul>
            </nav>
            <div className="buttons flex gap-4 items-center">
              <Link className="rounded-md text-white ring-2 ring-zg-teal hover:ring-zg-coral transition-all duration-500 px-3 py-2" href="/#contact">Say Hi!</Link>
            </div>
          </div>
        </header>
        <main className="flex flex-col flex-1">
          {children}
        </main>
        <footer className="flex w-full justify-center items-center px-4 lg:px-8 py-8">
          <div className="container">
            <div className="text-body-2 flex flex-col items-center">
              <span className="text-microcopy-1">&copy; 2024 Zachary Guerrero. All rights reserved.</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
