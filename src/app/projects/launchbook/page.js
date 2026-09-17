import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import JsonLd, { createBreadcrumbSchema } from "@/components/JsonLd";

export const metadata = {
  title: "LaunchBook | Zachary Guerrero",
  description:
    "A paused PWA proof of concept for local-business appointment booking, documented for its product and business-model decisions.",
};

export default function LaunchBookProjectPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://zacharyguerrero.com" },
    { name: "Case Studies", url: "https://zacharyguerrero.com/projects" },
    { name: "LaunchBook", url: "https://zacharyguerrero.com/projects/launchbook" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <div className="container my-12 lg:my-16">
        <FadeIn>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-microcopy-2 text-gray-400 hover:text-zg-teal transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Case Studies
          </Link>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="relative aspect-video rounded-lg overflow-hidden mb-16">
            <Image
              src="/images/projects/lb-cover.webp"
              alt="LaunchBook booking proof of concept"
              fill
              className="object-cover"
              priority
            />
          </div>
        </FadeIn>

        <section className="mb-16">
          <FadeIn>
            <span className="inline-block text-microcopy-2-semibold text-gray-400 border border-gray-700 rounded-full px-4 py-1.5 mb-4">
              PWA proof of concept &middot; Paused
            </span>
            <h1 className="text-heading-2-bold md:text-heading-1-bold mb-6">LaunchBook</h1>
            <p className="text-body-2 text-gray-400 max-w-2xl mb-4">
              A booking proof of concept for local business owners to manage products or services, set availability, and share an appointment link with customers.
            </p>
            <p className="text-body-1 text-gray-400 max-w-2xl">
              The work is paused. It remains here because the decision to stop was as important as the interaction work that made the booking flow usable.
            </p>
          </FadeIn>
        </section>

        <div className="max-w-3xl mx-auto space-y-16">
          <FadeIn>
            <section>
              <h2 className="text-heading-4-bold mb-4">What the proof of concept demonstrated</h2>
              <div className="space-y-4 text-body-1 text-gray-400">
                <p>
                  The PWA let a local business owner add products or services, schedule availability, and share a booking link. I tested a complete booking flow from the customer side without payment.
                </p>
                <p>
                  No business owners used the proof of concept, so this is not presented as a validated market or a launched service. It was a working product exploration.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn>
            <section className="bg-zg-dark-0 rounded-lg p-6 md:p-8">
              <h2 className="text-heading-4-bold mb-4">Why I paused it</h2>
              <div className="space-y-4 text-body-1 text-gray-400">
                <p>
                  Payment was the next major step. The intended model was to operate as a payment provider and take a percentage of each transaction.
                </p>
                <p>
                  Before building that layer, I evaluated the economics, legal scope, and compliance obligations. Competitor pricing made the transaction-fee model unattractive, and the additional complexity was not justified by the revenue potential.
                </p>
                <p>
                  Stopping was a product decision. Continuing because the prototype worked would have meant investing in a business model I no longer believed was viable.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-heading-4-bold mb-4">What I took from it</h2>
              <p className="text-body-1 text-gray-400">
                A build can be technically successful and still be the wrong product to pursue. LaunchBook reinforced the value of testing the product, operating model, and compliance implications together before treating implementation progress as a reason to keep going.
              </p>
            </section>
          </FadeIn>
        </div>
      </div>
    </>
  );
}
