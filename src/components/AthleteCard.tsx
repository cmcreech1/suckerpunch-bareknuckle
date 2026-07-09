import { Athlete } from '@/data/athletes'

interface AthleteCardProps {
  athlete: Athlete
  hasImage?: boolean
}

export default function AthleteCard({ athlete, hasImage = false }: AthleteCardProps) {
  const imagePath = `/images/athletes/${athlete.name.toLowerCase().replace(/[^a-z0-9]+/g, '_')}.jpg`

  return (
    <div className="group">
      <div className="bg-sp-gray overflow-hidden border-2 border-sp-gray hover:border-sp-red transition-all duration-300 aspect-square">
        {hasImage ? (
          <img
            src={imagePath}
            alt={athlete.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-sp-gray to-sp-dark flex items-center justify-center">
            <div className="text-center opacity-50 p-4">
              <p className="text-sm opacity-subtle">Photo coming soon</p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 border-l-3 border-sp-red pl-4">
        <h3 className="font-trade text-sm font-bold text-sp-white mb-1 line-clamp-2">
          {athlete.name}
        </h3>

        <div className="space-y-1 text-xs opacity-subtle font-body">
          <p>
            <span className="text-sp-red">DIVISION:</span> {athlete.weightDivision}
          </p>
          <p>
            <span className="text-sp-red">RECORD:</span> {athlete.bkfcRecord}
          </p>
          <p>
            <span className="text-sp-red">AGE:</span> {athlete.age}
          </p>
        </div>
      </div>
    </div>
  )
}
