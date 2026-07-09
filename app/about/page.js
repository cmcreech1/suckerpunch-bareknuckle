export default function About() {
  return (
    <main>
      {/* Header */}
      <section className="bg-black border-b-2 border-red-600 py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ABOUT SUCKERPUNCH
          </h1>
          <p className="text-lg opacity-60 max-w-2xl">
            Athlete-first management built on relationships, trust, and transparent communication.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-red-600 mb-4">WHO WE ARE</h2>
              <p className="opacity-70">
                SuckerPunch Entertainment's BareKnuckle Fighting Division represents a growing roster of elite athletes competing at the highest level of bare-knuckle combat. As an athlete-first management company, we are built on relationships, trust, and transparent communication. Our mission is not simply to secure fights, but to help athletes build sustainable careers inside and outside of competition.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-red-600 mb-4">OUR PHILOSOPHY</h2>
              <p className="opacity-70">
                We believe every fighter's journey should be viewed holistically, with attention given to their performance, business opportunities, personal brand, long-term growth, and overall wellbeing. The bare-knuckle space is one of the fastest-growing and most exciting sectors in combat sports, and SuckerPunch is committed to helping shape its future the right way.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-red-600 mb-4">BUILDING THE RIGHT WAY</h2>
              <p className="opacity-70 mb-6">
                We are building a division rooted in professionalism, preparation, and opportunity—one that gives athletes the structure, guidance, and representation they need to compete at the highest level while continuing to grow beyond fight night. Our team works closely with athletes, promoters, coaches, brands, and strategic partners to create meaningful opportunities that extend past the ring.
              </p>
              <p className="opacity-70">
                From fight negotiations and career planning to sponsorship development, media positioning, and personal branding, we are focused on creating real value for the athletes we represent. At SuckerPunch, we do not view fighters as short-term transactions. We view them as people, professionals, and long-term partners.
              </p>
            </div>

            <div className="border-t-2 border-gray-700 pt-8">
              <h2 className="text-2xl font-bold text-white mb-8">LEADERSHIP</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border border-red-600 p-8 text-center">
                  <h3 className="text-lg font-bold text-red-600 mb-2">SCOTT HOWARD</h3>
                  <p className="text-sm font-bold text-white mb-4">
                    Director, BareKnuckle Fighting Division
                  </p>
                  <p className="text-sm opacity-60">
                    <a href="mailto:scotth@suckerpunchent.com" className="hover:text-red-600">
                      scotth@suckerpunchent.com
                    </a>
                  </p>
                </div>

                <div className="border border-red-600 p-8 text-center">
                  <h3 className="text-lg font-bold text-red-600 mb-2">CHRISTOPHER CREECH</h3>
                  <p className="text-sm font-bold text-white mb-4">
                    Director of Athlete Relations
                  </p>
                  <p className="text-sm opacity-60">
                    <a href="mailto:chrisc@suckerpunchent.com" className="hover:text-red-600">
                      chrisc@suckerpunchent.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
