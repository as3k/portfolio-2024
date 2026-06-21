"use client"
import { useState } from "react"
import { trackContactFormSubmit } from "@/lib/umami"

const Input = ({ label, type = "text", id, value, onChange, disabled, placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="form-control flex flex-col gap-1">
      <label htmlFor={id} className={`text-microcopy-1-semibold transition-colors duration-200 ${isFocused ? 'text-zg-teal' : 'text-gray-200'}`}>
        {label}
      </label>
      <input
        className="rounded-md px-4 py-2 text-body-1 focus:ring-2 focus:ring-zg-teal bg-zg-dark-1/50 border-none text-gray-200 transition-all duration-200 focus:bg-zg-dark-1/80 disabled:opacity-50 disabled:cursor-not-allowed"
        type={type} id={id} name={id} value={value} onChange={onChange} disabled={disabled}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

const Textarea = ({ label, id, value, onChange, disabled, placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="form-control flex flex-col gap-1">
      <label htmlFor={id} className={`text-microcopy-1-semibold transition-colors duration-200 ${isFocused ? 'text-zg-teal' : 'text-gray-200'}`}>
        {label}
      </label>
      <textarea
        className="rounded-md px-4 py-2 text-body-1 bg-zg-dark-1/50 text-gray-200 focus:ring-2 focus:ring-zg-teal border-none transition-all duration-200 focus:bg-zg-dark-1/80 disabled:opacity-50 disabled:cursor-not-allowed min-h-[120px]"
        id={id} name={id} value={value} onChange={onChange} disabled={disabled}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

const Select = ({ label, id, value, onChange, disabled, options }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="form-control flex flex-col gap-1">
      <label htmlFor={id} className={`text-microcopy-1-semibold transition-colors duration-200 ${isFocused ? 'text-zg-teal' : 'text-gray-200'}`}>
        {label}
      </label>
      <select
        className="rounded-md px-4 py-2 text-body-1 focus:ring-2 focus:ring-zg-teal bg-zg-dark-1/50 border-none text-gray-200 transition-all duration-200 focus:bg-zg-dark-1/80 disabled:opacity-50 disabled:cursor-not-allowed"
        id={id} name={id} value={value} onChange={onChange} disabled={disabled}
        onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}
      >
        <option value="">Select…</option>
        {options.map((opt) => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
      </select>
    </div>
  );
};

const RadioGroup = ({ label, id, value, onChange, disabled, options }) => (
  <div className="form-control flex flex-col gap-2">
    <span className="text-microcopy-1-semibold text-gray-200">{label}</span>
    <div className="flex flex-wrap gap-3">
      {options.map((opt) => (
        <label
          key={opt.value}
          className={`flex items-center gap-2 cursor-pointer px-3 py-2 rounded-md border transition-colors duration-200 ${
            value === opt.value
              ? 'border-zg-teal text-zg-teal bg-zg-teal/10'
              : 'border-gray-700 text-gray-400 hover:border-gray-500'
          }`}
        >
          <input
            type="radio"
            name={id}
            value={opt.value}
            checked={value === opt.value}
            onChange={onChange}
            disabled={disabled}
            className="sr-only"
          />
          {opt.label}
        </label>
      ))}
    </div>
  </div>
);

function Spinner() {
  return (
    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
  );
}

const TEAM_SIZES = [
  { value: 'solo', label: 'Solo' },
  { value: '2-5', label: '2–5' },
  { value: '6-15', label: '6–15' },
  { value: '16-50', label: '16–50' },
  { value: '50+', label: '50+' },
];

const OFFER_OPTIONS = [
  { value: 'diagnosis', label: 'The Diagnosis' },
  { value: 'rewire', label: 'The Rewire' },
  { value: 'embedded', label: 'Embedded' },
  { value: 'unsure', label: 'Not sure yet' },
];

const TIMELINES = [
  { value: 'asap', label: 'ASAP' },
  { value: '1-3mo', label: '1–3 months' },
  { value: 'exploring', label: 'Just exploring' },
];

export default function ConsultingForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', companyUrl: '', teamSize: '', stalling: '', offerInterest: '', timeline: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, type: 'consulting' }),
      });
      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', companyUrl: '', teamSize: '', stalling: '', offerInterest: '', timeline: '' });
        trackContactFormSubmit('consulting', 'success');
      } else {
        setSubmitStatus('error');
        trackContactFormSubmit('consulting', 'error');
      }
    } catch {
      setSubmitStatus('error');
      trackContactFormSubmit('consulting', 'error', 'exception');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="flex flex-col gap-5 p-6 bg-zg-dark-0 rounded-md" onSubmit={handleSubmit}>
      <div className="grid sm:grid-cols-2 gap-4">
        <Input label="Name" id="name" value={formData.name} onChange={handleChange} disabled={isSubmitting} />
        <Input label="Email" type="email" id="email" value={formData.email} onChange={handleChange} disabled={isSubmitting} />
      </div>
      <Input label="Company / product URL" type="url" id="companyUrl" value={formData.companyUrl} onChange={handleChange} disabled={isSubmitting} placeholder="https://" />
      <Select label="Team size" id="teamSize" value={formData.teamSize} onChange={handleChange} disabled={isSubmitting} options={TEAM_SIZES} />
      <Textarea label="What's stalling?" id="stalling" value={formData.stalling} onChange={handleChange} disabled={isSubmitting} placeholder="What's the thing you can't seem to ship?" />
      <RadioGroup label="Which offer interests you?" id="offerInterest" value={formData.offerInterest} onChange={handleChange} disabled={isSubmitting} options={OFFER_OPTIONS} />
      <Select label="Timeline" id="timeline" value={formData.timeline} onChange={handleChange} disabled={isSubmitting} options={TIMELINES} />
      <div className="flex flex-col gap-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-md text-white bg-zg-teal hover:bg-zg-coral active:scale-95 active:brightness-90 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-zg-teal transition-all duration-300 px-3 py-2 text-body-1-bold flex items-center justify-center gap-2"
        >
          {isSubmitting ? <><Spinner />Sending...</> : 'Start the conversation'}
        </button>
        {submitStatus === 'success' && (
          <div role="alert" className="p-3 bg-green-500/10 border border-green-500/30 rounded-md text-green-400 text-body-1 animate-in fade-in slide-in-from-top-2 duration-300">
            Got it. I&apos;ll be in touch within 24 hours on weekdays.
          </div>
        )}
        {submitStatus === 'error' && (
          <div role="alert" className="p-3 bg-red-500/10 border border-red-500/30 rounded-md text-red-400 text-body-1 animate-in fade-in slide-in-from-top-2 duration-300">
            Something went wrong. Please try again or email me directly at zack@zkg.io.
          </div>
        )}
        <span className="text-microcopy-1 text-gray-400">No spam. I&apos;ll only use this to follow up.</span>
      </div>
    </form>
  );
}
