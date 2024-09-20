import Link from "next/link";

export default function Header() {
  return (
    <header className="flex w-full justify-between px-4 lg:px-8">
      <div className="logo text-heading-3-bold text-white">
        <Link href="/">ZG<span className="text-zg-teal">.</span></Link>
      </div>
      <div className="flex gap-4 lg:gap-6 text-microcopy-1-semibold md:text-body-1-semibold">
        <nav className="items-center flex">
          <ul className="flex gap-6">
            <li><Link className="hover:text-zg-teal transition duration-500" href="/#work">work</Link></li>
            <li><Link className="hover:text-zg-teal transition duration-500" href="/blog">Blog</Link></li>
          </ul>
        </nav>
        <div className="buttons flex gap-4 items-center">
          <Link className="rounded-md text-white ring-2 ring-zg-teal hover:ring-zg-coral transition-all duration-500 px-3 py-2" href="/#contact">Say Hi!</Link>
        </div>
      </div>
    </header>
  )
}