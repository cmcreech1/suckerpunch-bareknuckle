import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full h-screen bg-black flex items-center justify-center">
        <div className="text-center px-6 max-w-4xl mx-auto">
          <div className="mb-8 w-full h-96 bg-gray-900 border-2 border-red-600 rounded flex items-center justify-center">
            <div className="text-center">
              <p className="text-white opacity-60 mb-4">HERO IMAGE - COMING SOON</p>
              <p className="text-sm opacity-40">
                Your 1920×1080px group photo will go here
              </p>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            SUCKERPUNCH ENTERTAINMENT
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-8">
            BAREKNUCKLE FIGHTING DIVISION
          </h2>

          <p className="text-lg opacity-60 mb-8 max-w-2xl mx-auto">
            Elite athletes competing at the highest level of bare-knuckle combat.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/roster"
              className="inline-block bg-red-600 text-white px-8 py-3 font-bold text-sm uppercase hover:bg-red-700"
            >
              View Roster
            </Link>
            <Link
              href="/about"
              className="inline-block border-2 border-red-600 text-red-600 px-8 py-3 font-bold text-sm uppercase hover:bg-red-600 hover:text-white"
            >
              Our Mission
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="bg-gray-900 py-16 border-y-2 border-red-600">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-red-600 mb-4">28+</h3>
              <p className="font-bold text-white mb-2">ELITE ATHLETES</p>
              <p className="text-sm opacity-60">
                Professional bare-knuckle fighters.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-red-600 mb-4">ATHLETE-FIRST</h3>
              <p className="font-bold text-white mb-2">MANAGEMENT</p>
              <p className="text-sm opacity-60">
                Relationships and transparent communication.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-red-600 mb-4">HOLISTIC</h3>
              <p className="font-bold text-white mb-2">CAREER SUPPORT</p>
              <p className="text-sm opacity-60">
                Performance, opportunities, and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Learn More About Our Fighters
          </h2>
          <Link
            href="/roster"
            className="inline-block bg-red-600 text-white px-10 py-4 font-bold text-sm uppercase hover:bg-red-700"
          >
            Explore the Roster
          </Link>
        </div>
      </section>
    </>
  )
}
