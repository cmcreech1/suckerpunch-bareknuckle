'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-black border-b-2 border-red-600">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white hover:text-red-600">
          SUCKERPUNCH
        </Link>

        <button
          className="md:hidden text-red-600 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <div className="hidden md:flex gap-8">
          <Link href="/" className="text-sm font-bold text-white hover:text-red-600">HOME</Link>
          <Link href="/about" className="text-sm font-bold text-white hover:text-red-600">ABOUT</Link>
          <Link href="/roster" className="text-sm font-bold text-white hover:text-red-600">ROSTER</Link>
          <Link href="/contact" className="text-sm font-bold text-white hover:text-red-600">CONTACT</Link>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <Link href="/" className="text-sm font-bold text-white hover:text-red-600">HOME</Link>
            <Link href="/about" className="text-sm font-bold text-white hover:text-red-600">ABOUT</Link>
            <Link href="/roster" className="text-sm font-bold text-white hover:text-red-600">ROSTER</Link>
            <Link href="/contact" className="text-sm font-bold text-white hover:text-red-600">CONTACT</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
