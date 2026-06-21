"use client"
import { useState } from "react"
import Link from "next/link"
import FTEForm from "@/components/forms/FTEForm"
import ContactForm from "@/components/forms/ContactForm"

const INTENTS = [
  {
    id: 'fte',
    title: 'I want to hire you full-time',
    description: 'Senior Product Engineer role at your company',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 'consulting',
    title: 'I need consulting help',
    description: 'Unblock a stalled product or fix a broken UX flow',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: 'general',
    title: 'Something else',
    description: 'A question, collaboration, or other message',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
];

export default function IntentGate() {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <div className="grid sm:grid-cols-3 gap-3 mb-8">
        {INTENTS.map((intent) => (
          <button
            key={intent.id}
            type="button"
            onClick={() => setSelected(intent.id)}
            className={`text-left p-4 rounded-lg border transition-all duration-200 ${
              selected === intent.id
                ? 'border-zg-teal bg-zg-teal/10 text-white'
                : 'border-gray-700 bg-zg-dark-0 text-gray-400 hover:border-gray-500 hover:text-gray-300'
            }`}
          >
            <div className={`mb-2 ${selected === intent.id ? 'text-zg-teal' : 'text-gray-500'}`}>
              {intent.icon}
            </div>
            <p className="text-body-1-semibold leading-snug mb-1">{intent.title}</p>
            <p className="text-microcopy-1 opacity-70">{intent.description}</p>
          </button>
        ))}
      </div>

      {selected === 'fte' && <FTEForm />}

      {selected === 'general' && <ContactForm />}

      {selected === 'consulting' && (
        <div className="p-6 bg-zg-dark-0 rounded-md border border-zg-teal/20">
          <p className="text-body-1 text-gray-300 mb-4">
            The consulting page walks through how I work and has a form built for that conversation.
          </p>
          <Link
            href="/consulting#contact"
            className="inline-flex items-center gap-2 rounded-md text-white bg-zg-teal hover:bg-zg-coral active:scale-95 active:brightness-90 transition-all duration-300 px-5 py-3 text-body-1-bold"
          >
            Start with The Diagnosis
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
}
