export default function About() {
  return (
    <main>
      {/* Header */}
      <section className="bg-sp-black border-b-2 border-sp-red py-12">
        <div className="container mx-auto px-6">
          <h1 className="font-trade text-4xl md:text-5xl font-bold text-sp-white mb-4">
            ABOUT SUCKERPUNCH
          </h1>
          <p className="text-lg opacity-subtle max-w-2xl">
            Athlete-first management built on relationships, trust, and transparent communication.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-sp-dark py-16 tribal-bg">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="space-y-8 font-body text-base leading-relaxed opacity-subtle">
            <div className="border-l-4 border-sp-red pl-6">
              <h2 className="font-trade text-2xl font-bold text-sp-white mb-4">
                WHO WE ARE
              </h2>
              <p>
                SuckerPunch Entertainment's BareKnuckle Fighting Division represents a growing roster of elite athletes competing at the highest level of bare-knuckle combat. As an athlete-first management company, we are built on relationships, trust, and transparent communication. Our mission is not simply to secure fights, but to help athletes build sustainable careers inside and outside of competition.
              </p>
            </div>

            <div className="border-l-4 border-sp-red pl-6">
              <h2 className="font-trade text-2xl font-bold text-sp-white mb-4">
                OUR PHILOSOPHY
              </h2>
              <p>
                We believe every fighter's journey should be viewed holistically, with attention given to their performance, business opportunities, personal brand, long-term growth, and overall wellbeing. The bare-knuckle space is one of the fastest-growing and most exciting sectors in combat sports, and SuckerPunch is committed to helping shape its future the right way.
              </p>
            </div>

            <div className="border-l-4 border-sp-red pl-6">
              <h2 className="font-trade text-2xl font-bold text-sp-white mb-4">
                BUILDING THE RIGHT WAY
              </h2>
              <p>
                We are building a division rooted in professionalism, preparation, and opportunity—one that gives athletes the structure, guidance, and representation they need to compete at the highest level while continuing to grow beyond fight night. Our team works closely with athletes, promoters, coaches, brands, and strategic partners to create meaningful opportunities that extend past the ring.
              </p>
            </div>

            <div className="tribal-divider"></div>

            <div>
              <h2 className="font-trade text-2xl font-bold text-sp-white mb-6">
                WHAT WE DO
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-sp-gray p-6 border-l-4 border-sp-red">
                  <h3 className="font-trade text-sm font-bold text-sp-red mb-3">FIGHT NEGOTIATIONS</h3>
                  <p className="text-sm">
                    Securing optimal fight matchups, terms, and purses to advance each athlete's career.
                  </p>
                </div>

                <div className="bg-sp-gray p-6 border-l-4 border-sp-red">
                  <h3 className="font-trade text-sm font-bold text-sp-red mb-3">CAREER PLANNING</h3>
                  <p className="text-sm">
                    Strategic guidance for long-term career development and trajectory management.
                  </p>
                </div>

                <div className="bg-sp-gray p-6 border-l-4 border-sp-red">
                  <h3 className="font-trade text-sm font-bold text-sp-red mb-3">SPONSORSHIP DEVELOPMENT</h3>
                  <p className="text-sm">
                    Connecting athletes with brand partnerships and revenue-generating opportunities.
                  </p>
                </div>

                <div className="bg-sp-gray p-6 border-l-4 border-sp-red">
                  <h3 className="font-trade text-sm font-bold text-sp-red mb-3">MEDIA & BRANDING</h3>
                  <p className="text-sm">
                    Building personal brands and positioning athletes for media and public presence.
                  </p>
                </div>
              </div>
            </div>

            <div className="tribal-divider"></div>

            <div className="border-l-4 border-sp-red pl-6">
              <h2 className="font-trade text-2xl font-bold text-sp-white mb-4">
                OUR APPROACH
              </h2>
              <p>
                At SuckerPunch, we do not view fighters as short-term transactions. We view them as people, professionals, and long-term partners. The BareKnuckle Fighting Division reflects our larger company vision: to raise the standard of athlete representation, create new pathways in combat sports, and help our athletes build careers with purpose, direction, and lasting impact.
              </p>
            </div>

            <div className="bg-sp-black border-2 border-sp-red p-8 text-center">
              <h3 className="font-trade text-lg font-bold text-sp-red mb-4">READY TO JOIN?</h3>
              <p className="mb-6">
                For athletes, promoters, brands, and partners interested in working with SuckerPunch Entertainment.
              </p>
              <a
                href="/contact"
                className="inline-block bg-sp-red text-sp-white px-8 py-3 font-trade font-bold text-sm uppercase hover:bg-sp-red/90 transition"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-sp-black border-t-2 border-sp-red py-16 tribal-bg">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-trade text-3xl font-bold text-sp-white mb-12 text-center">
            LEADERSHIP
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center border border-sp-red p-8">
              <h3 className="font-trade text-lg font-bold text-sp-red mb-2">
                SCOTT HOWARD
              </h3>
              <p className="font-trade text-sm font-bold text-sp-white mb-4">
                Director, BareKnuckle Fighting Division
              </p>
              <p className="text-sm opacity-subtle">
                <a href="mailto:scotth@suckerpunchent.com" className="hover:text-sp-red transition">
                  scotth@suckerpunchent.com
                </a>
              </p>
            </div>

            <div className="text-center border border-sp-red p-8">
              <h3 className="font-trade text-lg font-bold text-sp-red mb-2">
                CHRISTOPHER CREECH
              </h3>
              <p className="font-trade text-sm font-bold text-sp-white mb-4">
                Director of Athlete Relations
              </p>
              <p className="text-sm opacity-subtle">
                <a href="mailto:chrisc@suckerpunchent.com" className="hover:text-sp-red transition">
                  chrisc@suckerpunchent.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
