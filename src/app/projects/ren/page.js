import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import JsonLd, { createBreadcrumbSchema } from "@/components/JsonLd";

export const metadata = {
  title: "Ren | Zachary Guerrero",
  description: "An active React Native prototype, currently under reconstruction as a case study.",
};

export default function RenProjectPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://zacharyguerrero.com" },
    { name: "Case Studies", url: "https://zacharyguerrero.com/projects" },
    { name: "Ren", url: "https://zacharyguerrero.com/projects/ren" },
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
              src="/images/projects/ren-cover.webp"
              alt="Ren prototype"
              fill
              className="object-cover"
              priority
            />
          </div>
        </FadeIn>

        <section className="mb-16">
          <FadeIn>
            <span className="inline-block text-microcopy-2-semibold text-gray-400 border border-gray-700 rounded-full px-4 py-1.5 mb-4">
              React Native prototype &middot; Active, not currently in development
            </span>
            <h1 className="text-heading-2-bold md:text-heading-1-bold mb-6">Ren</h1>
            <p className="text-body-2 text-gray-400 max-w-2xl mb-4">
              A partial React Native app that runs in Expo Go. Ren is Zachary&apos;s attempt to create a more interactive external memory and accountability system: something that can hold the things his brain is carrying and bring them back when needed.
            </p>
            <p className="text-body-1 text-gray-400 max-w-2xl mb-4">
              The problem is especially visible for professionals managing dense personal and work responsibilities while focus is low. Ren uses Google OAuth to access a calendar and can create, read, update, and delete appointments. It is intended to recognize useful patterns and offer support without adding more noise.
            </p>
            <p className="text-body-1 text-gray-400 max-w-2xl">
              This is a solo project, informed by informal feedback from friends and family with ADHD. It remains active, though development has paused for a while. The case study is being reconstructed from confirmed product and implementation facts.
            </p>
          </FadeIn>
        </section>

        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <section className="mb-16">
              <h2 className="text-heading-4-bold mb-4">Support that is present, not loud</h2>
              <div className="space-y-4 text-body-1 text-gray-400">
                <p>
                  RADAR is the current overview: a prioritized view of the next seven days using calendar events, tasks, and things the person has marked as important. Ren is also designed around a daily rhythm rather than continuous interruption: a morning view of the day, a place to capture midday thoughts before they disappear, and an evening “close the tabs” moment for anything that should not be lost before bed.
                </p>
                <p>
                  The first screen is Today, focused on what a person needs to function that day. Opening RADAR reveals more of what is ahead. Keeping those as separate screens is an intentional progressive-disclosure choice to reduce overwhelm.
                </p>
                <p>
                  Today shows tasks due that day, calendar events that have not passed, and what Ren identifies as important. Past events are intentionally removed from the home view, so a 10 a.m. appointment is not still demanding attention at noon.
                </p>
                <p>
                  Due tasks are currently ordered by when they were added. That is an unfinished part of the model: the view needs a more useful ordering method than creation time. The planned fix is drag-and-drop ordering, so the person can decide what matters most in the moment.
                </p>
                <p>
                  The system can only act on context that has been shared with it. That limitation is deliberate to state clearly: Ren cannot reliably surface a commitment it was never told about.
                </p>
                <p>
                  Low-focus mode is designed to reduce overwhelm by offering only the three most useful things to do next. More detail is available when wanted, but it is not forced into the moment when a longer list would make action harder. The prototype includes the toggle and replacement UI, which currently renders placeholder actions and calendar context such as appointments and meetings. The model-driven selection behind the final three actions is still being integrated.
                </p>
                <p>
                  Ren can send timed check-ins for upcoming events, incomplete tasks, and morning, midday, and evening routines. In low-focus mode, the intended behavior is to surface only what matters most, using the model to support one smallest next action.
                </p>
                <p>
                  In early personal use, RADAR has been useful for seeing what is coming up beyond the immediate moment, such as an appointment followed by a weekend commitment. The additional early user has used RADAR only. This is qualitative feedback from two users, not broad validation.
                </p>
                <div className="bg-zg-dark-0 rounded-lg p-5 space-y-3">
                  <p className="text-body-1-semibold text-white">A task system built around time and dependencies</p>
                  <p>
                    Important items are usually added by telling Memo that they matter. Rather than a conventional priority list, Ren organizes tasks as <strong>NOW</strong> for what needs attention now, <strong>Soon</strong> for what is approaching, <strong>Waiting</strong> for work blocked by another person, and <strong>Blocked</strong> for work blocked by an external condition.
                  </p>
                  <p>
                    Soon covers tasks within five days. NOW applies at “today + 1.” Those time-bound states change as a task gets closer, making the current situation legible without asking someone to constantly maintain an abstract priority ranking.
                  </p>
                  <p>
                    Waiting and Blocked can be updated manually. The stale-task check-in currently runs as a concept in Hermes: after three untouched days, it surfaces a task and asks whether to keep it, discard it, or elevate it. Elevating it moves the task to NOW, where it becomes an actionable item that needs attention. The intended destination for this behavior is Ren.
                  </p>
                </div>
              </div>
            </section>
          </FadeIn>

          <FadeIn>
            <section className="mb-16">
              <h2 className="text-heading-4-bold mb-4">A capture model for messy input</h2>
              <div className="space-y-4 text-body-1 text-gray-400">
                <p>
                  Ren is intended to turn an unstructured brain dump into organized, contextual memories, tasks, and action items. Voice is the first-class capture mode, with text available when it is the better fit. Today, voice capture transcribes into an editable text box. It works, but it is still early and needs substantial refinement. The next planned step is sending that speech-to-text output to a model for post-processing.
                </p>
                <p>
                  The latest work also partially implements a review step: Ren can show what it understood and give the user a chance to edit before saving. The full review, classification, and save loop is not complete yet.
                </p>
                <p>
                  A future meeting mode is intended to turn a deliberately started meeting recording into the same kind of useful context. Ren is not designed to listen continuously. Respecting the user&apos;s choice about when it can listen is a core privacy principle.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn>
            <section className="mb-16">
              <h2 className="text-heading-4-bold mb-4">A memory system with fast and durable layers</h2>
              <div className="space-y-4 text-body-1 text-gray-400">
                <p>
                  The working backend centers on Memo, a memory system backed by a three-layer model. A daily process classifies memories and stores them in a database for durable retrieval.
                </p>
                <p>
                  The AI layer can use Memo for fast access and query the database for longer-lasting facts. That separation is intended to make recall useful without treating every piece of information the same way.
                </p>
                <p>
                  The complete memory loop currently runs primarily in code and partially through the Hermes agent, rather than through the React Native interface. Memo is actively used as a memory store across Pi, Hermes, OpenCode, Claude, and Codex. Integrating that working system into Ren is still in progress.
                </p>
                <p>
                  Important data is also stored locally in PGlite and can sync back to the primary database when network connectivity returns. On-device AI models are still in development. The goal is a helper that remains useful when a network-dependent service is unavailable, but that capability is not yet complete.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn>
            <section className="mb-16">
              <h2 className="text-heading-4-bold mb-4">Availability without a hidden cost</h2>
              <div className="space-y-4 text-body-1 text-gray-400">
                <p>
                  Ren’s data model and storage are in place. The open implementation question is how to keep the assistant useful during a network outage without making every installation unnecessarily large.
                </p>
                <p>
                  On-device models could keep computation local, but a downloaded model consumes storage and may not be practical on every phone. The current direction is to make that tradeoff explicit: use cloud computation by default, or let a person download a model with clear storage expectations.
                </p>
                <p>
                  This is still a design and technical decision in progress. The intended paid product would include access to cloud models, with an option for people who prefer to use their own local model.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn>
            <section className="bg-zg-dark-0 rounded-lg p-6 md:p-8">
              <h2 className="text-heading-4-bold mb-4">Current status</h2>
              <p className="text-body-1 text-gray-400">
                Ren is an early prototype, not a completed or broadly validated product. It has been used by Zachary and one additional person while the implementation is still taking shape. Its public story will distinguish the product goal, the architecture and AI pieces that work independently, and the work that has not yet been integrated into the app.
              </p>
            </section>
          </FadeIn>
        </div>
      </div>
    </>
  );
}
