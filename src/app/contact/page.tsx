'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // This is a placeholder—normally you'd send this to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <main>
      {/* Header */}
      <section className="bg-sp-black border-b-2 border-sp-red py-12">
        <div className="container mx-auto px-6">
          <h1 className="font-trade text-4xl md:text-5xl font-bold text-sp-white mb-4">
            GET IN TOUCH
          </h1>
          <p className="text-lg opacity-subtle max-w-2xl">
            Contact us for partnership opportunities, sponsorships, fight bookings, or general inquiries.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-sp-dark py-16 tribal-bg">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-5xl">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="font-trade text-lg font-bold text-sp-red mb-4">
                  DIRECTOR
                </h3>
                <div className="border-l-4 border-sp-red pl-4">
                  <p className="font-trade text-sm font-bold text-sp-white mb-1">
                    SCOTT HOWARD
                  </p>
                  <p className="text-sm font-trade font-bold text-sp-red mb-3">
                    BareKnuckle Fighting Division
                  </p>
                  <a
                    href="mailto:scotth@suckerpunchent.com"
                    className="text-sm opacity-subtle hover:text-sp-red transition break-all"
                  >
                    scotth@suckerpunchent.com
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-trade text-lg font-bold text-sp-red mb-4">
                  ATHLETE RELATIONS
                </h3>
                <div className="border-l-4 border-sp-red pl-4">
                  <p className="font-trade text-sm font-bold text-sp-white mb-1">
                    CHRISTOPHER CREECH
                  </p>
                  <p className="text-sm font-trade font-bold text-sp-red mb-3">
                    Director of Athlete Relations
                  </p>
                  <a
                    href="mailto:chrisc@suckerpunchent.com"
                    className="text-sm opacity-subtle hover:text-sp-red transition break-all"
                  >
                    chrisc@suckerpunchent.com
                  </a>
                </div>
              </div>

              <div className="tribal-divider"></div>

              <div>
                <h3 className="font-trade text-sm font-bold text-sp-white mb-4">
                  INQUIRY TYPES
                </h3>
                <ul className="space-y-2 text-sm opacity-subtle">
                  <li className="flex items-start gap-2">
                    <span className="text-sp-red mt-1">→</span>
                    <span>Fight bookings & negotiations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sp-red mt-1">→</span>
                    <span>Sponsorship opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sp-red mt-1">→</span>
                    <span>Media & press inquiries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sp-red mt-1">→</span>
                    <span>Partnership proposals</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6 bg-sp-gray p-8 border-2 border-sp-red">
                <div>
                  <label className="block font-trade text-sm font-bold text-sp-white mb-2">
                    NAME *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-sp-dark border border-sp-red px-4 py-3 text-sp-white placeholder-gray-600 focus:outline-none focus:border-sp-white transition"
                  />
                </div>

                <div>
                  <label className="block font-trade text-sm font-bold text-sp-white mb-2">
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-sp-dark border border-sp-red px-4 py-3 text-sp-white placeholder-gray-600 focus:outline-none focus:border-sp-white transition"
                  />
                </div>

                <div>
                  <label className="block font-trade text-sm font-bold text-sp-white mb-2">
                    SUBJECT *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-sp-dark border border-sp-red px-4 py-3 text-sp-white focus:outline-none focus:border-sp-white transition"
                  >
                    <option value="">Select a subject...</option>
                    <option value="fight-booking">Fight Booking</option>
                    <option value="sponsorship">Sponsorship</option>
                    <option value="media">Media Inquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block font-trade text-sm font-bold text-sp-white mb-2">
                    MESSAGE *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-sp-dark border border-sp-red px-4 py-3 text-sp-white placeholder-gray-600 focus:outline-none focus:border-sp-white transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-sp-red text-sp-white py-3 font-trade font-bold text-sm uppercase hover:bg-sp-red/90 transition"
                >
                  Send Message
                </button>

                {submitted && (
                  <div className="bg-sp-red/20 border border-sp-red px-4 py-3 text-sp-white text-sm">
                    ✓ Message received. We'll get back to you soon.
                  </div>
                )}
              </form>

              <div className="mt-8 p-6 bg-sp-black border-2 border-sp-red">
                <p className="text-sm opacity-subtle">
                  <span className="text-sp-red">*</span> Required fields. All inquiries will be reviewed and responded to within 1-2 business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
