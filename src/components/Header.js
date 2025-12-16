import Link from "next/link";

export default function Header() {
  return (
    <header className="flex w-full justify-between px-4 lg:px-8">
      <div className="logo text-heading-3-bold text-white">
        <Link href="/" className="hover:text-zg-teal transition-colors duration-300">ZG<span className="text-zg-teal">.</span></Link>
      </div>
      <div className="flex gap-4 lg:gap-6 text-microcopy-1-semibold md:text-body-1-semibold">
        <nav className="items-center flex">
          <ul className="flex gap-6">
            <li>
              <Link
                className="relative hover:text-zg-teal transition-colors duration-300 pb-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-zg-teal after:transition-all after:duration-300 hover:after:w-full"
                href="/projects"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="relative hover:text-zg-teal transition-colors duration-300 pb-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-zg-teal after:transition-all after:duration-300 hover:after:w-full"
                href="/process"
              >
                Process
              </Link>
            </li>
            <li>
              <Link
                className="relative hover:text-zg-teal transition-colors duration-300 pb-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-zg-teal after:transition-all after:duration-300 hover:after:w-full"
                href="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="relative hover:text-zg-teal transition-colors duration-300 pb-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-zg-teal after:transition-all after:duration-300 hover:after:w-full"
                href="/now"
              >
                Now
              </Link>
            </li>
            <li>
              <Link
                className="relative hover:text-zg-teal transition-colors duration-300 pb-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-zg-teal after:transition-all after:duration-300 hover:after:w-full"
                href="/blog"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
        <div className="buttons flex gap-4 items-center">
          <Link
            className="rounded-md text-white ring-2 ring-zg-teal hover:bg-zg-teal hover:ring-zg-teal active:scale-95 active:brightness-90 transition-all duration-300 px-3 py-2"
            href="/lets-talk"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  )
}
