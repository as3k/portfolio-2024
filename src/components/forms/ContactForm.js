"use client"
import { useState } from "react"


const Input = ({ label, type, id, value, onChange }) => {
  return (
    <div className="form-control flex flex-col gap-1">
      <label htmlFor={id} className="text-microcopy-1-semibold text-gray-200">{label}</label>
      <input className="rounded-md px-4 py-2 text-body-1 focus:ring-zg-coral bg-zg-dark-1/50 border-none text-gray-200" type={type} id={id} name={id} onChange={onChange} value={value} />
    </div>
  )
}
const Textarea = ({ label, id, value, onChange }) => {
  return (
    <div className="form-control flex flex-col gap-1">
      <label htmlFor={id} className="text-microcopy-1-semibold text-gray-200">{label}</label>
      <textarea className="rounded-md px-4 py-2 text-body-1 bg-zg-dark-1/50 text-gray-200 focus:ring-zg-coral border-none" id={id} name={id} onChange={onChange} value={value} />
    </div>
  )
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(formData);

    try {
      const response = await fetch(`/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      console.log(result);

      if (result.success) {
        alert('Email sent successfully!');
      } else {
        alert('Failed to send email.');
      }
    }
    catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send email.');
    }
  };

  return (
    <form className="flex flex-col gap-4 p-6 bg-zg-dark-0 rounded-md" onSubmit={handleSubmit}>
      <Input label="Name" type="text" id="name" value={formData.name} onChange={handleChange} />
      <Input label="Email" type="email" id="email" value={formData.email} onChange={handleChange} />
      <Textarea label="Message" id="message" value={formData.message} onChange={handleChange} />
      <div className="button-wrapper flex flex-col gap-2">
        <button className="rounded-md text-white bg-zg-teal hover:bg-zg-coral transition-all duration-500 px-3 py-2 text-body-1-bold" type="submit">Send it!</button>
        <span className="text-microcopy-1 text-gray-500">I’ll only use your info to get in touch. No spam, ever, I promise!</span>
      </div>
    </form>
  )
}