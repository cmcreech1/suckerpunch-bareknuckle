'use client'

import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <main>
      {/* Header */}
      <section className="bg-black border-b-2 border-red-600 py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            GET IN TOUCH
          </h1>
          <p className="text-lg opacity-60 max-w-2xl">
            Contact us for partnership opportunities, sponsorships, and fight bookings.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-5xl">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="text-lg font-bold text-red-600 mb-4">DIRECTOR</h3>
                <div className="border-l-4 border-red-600 pl-4">
                  <p className="text-sm font-bold text-white mb-1">SCOTT HOWARD</p>
                  <p className="text-sm font-bold text-red-600 mb-3">BareKnuckle Fighting Division</p>
                  <a href="mailto:scotth@suckerpunchent.com" className="text-sm opacity-60 hover:text-red-600">
                    scotth@suckerpunchent.com
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-red-600 mb-4">ATHLETE RELATIONS</h3>
                <div className="border-l-4 border-red-600 pl-4">
                  <p className="text-sm font-bold text-white mb-1">CHRISTOPHER CREECH</p>
                  <p className="text-sm font-bold text-red-600 mb-3">Director of Athlete Relations</p>
                  <a href="mailto:chrisc@suckerpunchent.com" className="text-sm opacity-60 hover:text-red-600">
                    chrisc@suckerpunchent.com
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6 bg-black p-8 border-2 border-red-600">
                <div>
                  <label className="block font-bold text-sm text-white mb-2">NAME *</label>
                  <input type="text" required className="w-full bg-gray-900 border border-red-600 px-4 py-3 text-white" />
                </div>

                <div>
                  <label className="block font-bold text-sm text-white mb-2">EMAIL *</label>
                  <input type="email" required className="w-full bg-gray-900 border border-red-600 px-4 py-3 text-white" />
                </div>

                <div>
                  <label className="block font-bold text-sm text-white mb-2">SUBJECT *</label>
                  <select required className="w-full bg-gray-900 border border-red-600 px-4 py-3 text-white">
                    <option>Select a subject...</option>
                    <option>Fight Booking</option>
                    <option>Sponsorship</option>
                    <option>Media Inquiry</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-sm text-white mb-2">MESSAGE *</label>
                  <textarea required rows="6" className="w-full bg-gray-900 border border-red-600 px-4 py-3 text-white"></textarea>
                </div>

                <button type="submit" className="w-full bg-red-600 text-white py-3 font-bold text-sm uppercase hover:bg-red-700">
                  Send Message
                </button>

                {submitted && (
                  <div className="bg-red-600 bg-opacity-20 border border-red-600 px-4 py-3 text-white text-sm">
                    ✓ Message received. We'll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
