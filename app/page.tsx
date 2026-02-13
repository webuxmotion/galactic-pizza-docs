// app/page.tsx
import { Hero } from '@/components/Hero'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      {/* Features Section */}
      <section className="border-t border-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Why Galactic Pizza?
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: '⚡',
                title: 'Lightning Fast',
                description: 'Delivery through wormholes in under 5 minutes to any planet.'
              },
              {
                icon: '🛡️',
                title: 'Always Hot',
                description: 'Quantum thermal containers keep your pizza at perfect temperature.'
              },
              {
                icon: '🌍',
                title: 'Universal Coverage',
                description: 'We deliver to 5 planets across the Milky Way galaxy.'
              }
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-lg border border-gray-800 bg-gray-900/50 p-6"
              >
                <div className="mb-4 text-4xl">{feature.icon}</div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}