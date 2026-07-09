'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-sp-black border-b-2 border-sp-red">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-trade text-2xl font-bold text-sp-white hover:text-sp-red transition">
          SUCKERPUNCH
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-sp-red hover:text-sp-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8">
          <Link href="/" className="font-trade text-sm font-bold text-sp-white hover:text-sp-red transition">
            HOME
          </Link>
          <Link href="/about" className="font-trade text-sm font-bold text-sp-white hover:text-sp-red transition">
            ABOUT
          </Link>
          <Link href="/roster" className="font-trade text-sm font-bold text-sp-white hover:text-sp-red transition">
            ROSTER
          </Link>
          <Link href="/contact" className="font-trade text-sm font-bold text-sp-white hover:text-sp-red transition">
            CONTACT
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-sp-dark border-t border-sp-gray">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <Link href="/" className="font-trade text-sm font-bold text-sp-white hover:text-sp-red transition" onClick={() => setIsOpen(false)}>
              HOME
            </Link>
            <Link href="/about" className="font-trade text-sm font-bold text-sp-white hover:text-sp-red transition" onClick={() => setIsOpen(false)}>
              ABOUT
            </Link>
            <Link href="/roster" className="font-trade text-sm font-bold text-sp-white hover:text-sp-red transition" onClick={() => setIsOpen(false)}>
              ROSTER
            </Link>
            <Link href="/contact" className="font-trade text-sm font-bold text-sp-white hover:text-sp-red transition" onClick={() => setIsOpen(false)}>
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
