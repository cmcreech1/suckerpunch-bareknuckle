import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full h-screen bg-sp-black relative overflow-hidden flex items-center justify-center tribal-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-sp-black opacity-50"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="mb-8 w-full h-96 bg-sp-gray border-2 border-sp-red rounded-sm flex items-center justify-center">
            <div className="text-center">
              <p className="text-sp-white opacity-60 mb-4">HERO IMAGE - COMING SOON</p>
              <p className="text-sm opacity-subtle">
                Your 1920×1080px group photo with all 28 athletes will go here
              </p>
            </div>
          </div>

          <h1 className="font-trade text-5xl md:text-6xl font-bold text-sp-white mb-4 leading-tight">
            SUCKERPUNCH ENTERTAINMENT
          </h1>

          <h2 className="font-trade text-2xl md:text-3xl font-bold text-sp-red mb-8">
            BAREKNUCKLE FIGHTING DIVISION
          </h2>

          <p className="text-lg opacity-subtle mb-8 max-w-2xl mx-auto">
            Elite athletes competing at the highest level of bare-knuckle combat.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/roster"
              className="inline-block bg-sp-red text-sp-white px-8 py-3 font-trade font-bold text-sm uppercase hover:bg-sp-red/90 hover:shadow-lg transition"
            >
              View Roster
            </Link>
            <Link
              href="/about"
              className="inline-block border-2 border-sp-red text-sp-red px-8 py-3 font-trade font-bold text-sm uppercase hover:bg-sp-red hover:text-sp-white transition"
            >
              Our Mission
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="bg-sp-dark py-16 border-y-2 border-sp-red tribal-bg">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-trade text-2xl font-bold text-sp-red mb-4">28+</h3>
              <p className="font-trade text-sm font-bold text-sp-white mb-2">Elite Athletes</p>
              <p className="text-sm opacity-subtle">
                A growing roster of professional bare-knuckle fighters.
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-trade text-2xl font-bold text-sp-red mb-4">ATHLETE-FIRST</h3>
              <p className="font-trade text-sm font-bold text-sp-white mb-2">Management</p>
              <p className="text-sm opacity-subtle">
                Relationships, trust, and transparent communication.
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-trade text-2xl font-bold text-sp-red mb-4">HOLISTIC</h3>
              <p className="font-trade text-sm font-bold text-sp-white mb-2">Career Support</p>
              <p className="text-sm opacity-subtle">
                Performance, opportunities, brand, and long-term growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-sp-black py-16 text-center tribal-bg">
        <div className="container mx-auto px-6">
          <h2 className="font-trade text-3xl md:text-4xl font-bold text-sp-white mb-8">
            Learn More About Our Fighters
          </h2>
          <Link
            href="/roster"
            className="inline-block bg-sp-red text-sp-white px-10 py-4 font-trade font-bold text-sm uppercase hover:bg-sp-red/90 hover:shadow-lg transition"
          >
            Explore the Roster
          </Link>
        </div>
      </section>
    </>
  )
}
