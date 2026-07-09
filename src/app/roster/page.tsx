import AthleteCard from '@/components/AthleteCard'
import { athletes } from '@/data/athletes'

export default function Roster() {
  return (
    <main>
      {/* Header */}
      <section className="bg-sp-black border-b-2 border-sp-red py-12">
        <div className="container mx-auto px-6">
          <h1 className="font-trade text-4xl md:text-5xl font-bold text-sp-white mb-4">
            OUR ROSTER
          </h1>
          <p className="text-lg opacity-subtle max-w-2xl">
            Meet the elite athletes representing SuckerPunch Entertainment's BareKnuckle Fighting Division.
          </p>
        </div>
      </section>

      {/* Athletes Grid */}
      <section className="bg-sp-dark py-16 tribal-bg">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {athletes.map((athlete) => (
              <AthleteCard key={athlete.id} athlete={athlete} hasImage={false} />
            ))}
          </div>

          {/* Placeholder message */}
          <div className="mt-16 text-center border-t-2 border-sp-gray pt-8">
            <p className="text-sm opacity-subtle mb-4">
              Individual athlete headshot images will appear above once you upload them to the site.
            </p>
            <p className="text-xs opacity-subtle">
              Format: Place images in <code className="bg-sp-gray px-2 py-1 rounded">public/images/athletes/</code>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-sp-black border-t-2 border-sp-red py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-trade text-2xl font-bold text-sp-white mb-4">
            Interested in Our Athletes?
          </h2>
          <p className="opacity-subtle mb-6">
            Contact us for partnership opportunities, sponsorships, and fight bookings.
          </p>
          <a
            href="/contact"
            className="inline-block bg-sp-red text-sp-white px-8 py-3 font-trade font-bold text-sm uppercase hover:bg-sp-red/90 transition"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  )
}
