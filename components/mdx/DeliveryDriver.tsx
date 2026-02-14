// components/mdx/DeliveryDriver.tsx
interface DeliveryDriverProps {
  name: string
  emoji: string
  ability: string
  planet: string
  specialty: string
  favoritePizza: string
}

export function DeliveryDriver({
  name,
  emoji,
  ability,
  planet,
  specialty,
  favoritePizza,
}: DeliveryDriverProps) {
  return (
    <div className="my-6 rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-900/50 p-6 not-prose">
      <div className="flex items-start gap-4">
        <div className="text-5xl">{emoji}</div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
          <div className="space-y-2 text-sm">
            <p className="text-gray-300">
              <span className="text-orange-500 font-medium">Ability:</span> {ability}
            </p>
            <p className="text-gray-300">
              <span className="text-orange-500 font-medium">Home Planet:</span> {planet}
            </p>
            <p className="text-gray-300">
              <span className="text-orange-500 font-medium">Specialty:</span> {specialty}
            </p>
            <p className="text-gray-300">
              <span className="text-orange-500 font-medium">Favorite Pizza:</span> {favoritePizza}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}