import { athletes } from '../athletes'

export default function Roster() {
  return (
    <main>
      {/* Header */}
      <section className="bg-black border-b-2 border-red-600 py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            OUR ROSTER
          </h1>
          <p className="text-lg opacity-60 max-w-2xl">
            Meet the elite athletes representing SuckerPunch Entertainment's BareKnuckle Fighting Division.
          </p>
        </div>
      </section>

      {/* Athletes Grid */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {athletes.map((athlete) => (
              <div key={athlete.id} className="group">
                <div className="bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-red-600 transition-all duration-300 aspect-square flex items-center justify-center">
                  <div className="text-center opacity-50 p-4">
                    <p className="text-sm">Photo coming soon</p>
                  </div>
                </div>

                <div className="mt-4 border-l-4 border-red-600 pl-4">
                  <h3 className="font-bold text-sm text-white mb-1 line-clamp-2">
                    {athlete.name}
                  </h3>

                  <div className="space-y-1 text-xs opacity-60">
                    <p><span className="text-red-600 font-bold">DIVISION:</span> {athlete.division}</p>
                    <p><span className="text-red-600 font-bold">RECORD:</span> {athlete.record}</p>
                    <p><span className="text-red-600 font-bold">AGE:</span> {athlete.age}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Placeholder message */}
          <div className="mt-16 text-center border-t border-gray-700 pt-8">
            <p className="text-sm opacity-60 mb-4">
              Individual athlete headshot images will appear above once you upload them to the site.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black border-t-2 border-red-600 py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Interested in Our Athletes?
          </h2>
          <p className="opacity-60 mb-6">
            Contact us for partnership opportunities and sponsorships.
          </p>
          <a
            href="/contact"
            className="inline-block bg-red-600 text-white px-8 py-3 font-bold text-sm uppercase hover:bg-red-700"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  )
}
