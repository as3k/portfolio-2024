import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container my-12 lg:my-16">
      <section id="hero" className="grid grid-cols-1 md:grid-cols-2 gap-12 md:px-8 xl:px-40 items-center">
        <div className="text-side flex flex-col gap-6 lg:gap-8">
          <h1 className="text-heading-4-bold md:text-heading-3-bold lg:text-heading-1-bold">Zachary is a designer who’s all about making people's lives easier, one experience at a time.</h1>
          <p className="text-gray-400">With a passion for creating seamless, user-friendly digital experiences, Zachary specializes in apps, websites, and product design that bring your vision to life.</p>

          <div className="button-wrapper flex">
            <Link className="rounded-md text-white bg-zg-teal hover:bg-zg-coral transition-all duration-500 px-3 py-2 text-body-1-bold" target="_blank" href="https://read.cv/zkg">View resume</Link>
          </div>
        </div>
        <div className="photo-side flex justify-center">
          <Image
            src="/images/zg-coffee-ride-profile-photo.jpg"
            className="rounded-lg shadow-zg max-w-64 md:max-w-full"
            alt="Zachary Guerrero"
            width={600}
            height={600}
          />
        </div>
      </section>
    </div>
  );
}

