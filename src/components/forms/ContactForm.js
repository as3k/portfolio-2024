"use client"
import { useState } from "react"
import { trackContactFormSubmit } from "@/lib/umami"

const Input = ({ label, type, id, value, onChange, disabled }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="form-control flex flex-col gap-1">
      <label
        htmlFor={id}
        className={`text-microcopy-1-semibold transition-colors duration-200 ${
          isFocused ? 'text-zg-teal' : 'text-gray-200'
        }`}
      >
        {label}
      </label>
      <input
        className="rounded-md px-4 py-2 text-body-1 focus:ring-2 focus:ring-zg-teal bg-zg-dark-1/50 border-none text-gray-200 transition-all duration-200 focus:bg-zg-dark-1/80 disabled:opacity-50 disabled:cursor-not-allowed"
        type={type}
        id={id}
        name={id}
        onChange={onChange}
        value={value}
        disabled={disabled}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  )
}

const Textarea = ({ label, id, value, onChange, disabled }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="form-control flex flex-col gap-1">
      <label
        htmlFor={id}
        className={`text-microcopy-1-semibold transition-colors duration-200 ${
          isFocused ? 'text-zg-teal' : 'text-gray-200'
        }`}
      >
        {label}
      </label>
      <textarea
        className="rounded-md px-4 py-2 text-body-1 bg-zg-dark-1/50 text-gray-200 focus:ring-2 focus:ring-zg-teal border-none transition-all duration-200 focus:bg-zg-dark-1/80 disabled:opacity-50 disabled:cursor-not-allowed min-h-[120px]"
        id={id}
        name={id}
        onChange={onChange}
        value={value}
        disabled={disabled}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  )
}

function Spinner() {
  return (
    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
  );
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(`/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        trackContactFormSubmit('success');
      } else {
        setSubmitStatus('error');
        trackContactFormSubmit('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      trackContactFormSubmit('error', 'exception');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="flex flex-col gap-4 p-6 bg-zg-dark-0 rounded-md" onSubmit={handleSubmit}>
      <Input label="Name" type="text" id="name" value={formData.name} onChange={handleChange} disabled={isSubmitting} />
      <Input label="Email" type="email" id="email" value={formData.email} onChange={handleChange} disabled={isSubmitting} />
      <Textarea label="Message" id="message" value={formData.message} onChange={handleChange} disabled={isSubmitting} />
      <div className="button-wrapper flex flex-col gap-3">
        <button
          className="rounded-md text-white bg-zg-teal hover:bg-zg-coral active:scale-95 active:brightness-90 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-zg-teal transition-all duration-300 px-3 py-2 text-body-1-bold flex items-center justify-center gap-2"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Spinner />
              Sending...
            </>
          ) : (
            'Send it!'
          )}
        </button>

        {submitStatus === 'success' && (
          <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-md text-green-400 text-body-1 animate-in fade-in slide-in-from-top-2 duration-300">
            Message sent successfully! I'll get back to you soon.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-md text-red-400 text-body-1 animate-in fade-in slide-in-from-top-2 duration-300">
            Something went wrong. Please try again or email me directly.
          </div>
        )}

        <span className="text-microcopy-1 text-gray-500">
          I'll only use your info to get in touch. No spam, ever, I promise!
        </span>
      </div>
    </form>
  )
}
