// components/Hero.tsx
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-transparent to-transparent" />

      {/* Stars effect */}
      <div className="absolute inset-0 bg-[url('/stars.svg')] opacity-50" />

      <div className="container relative mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-8 text-8xl">🍕🚀</div>

        {/* Title */}
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Galactic Pizza
          <span className="block text-orange-500">Documentation</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-400">
          Welcome to Pizza Nova Station! Learn how to integrate with the
          best intergalactic pizza delivery service in the known universe.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/docs/getting-started"
            className="rounded-full bg-orange-500 px-8 py-3 text-lg font-medium text-white hover:bg-orange-600 transition-colors"
          >
            Get Started
          </Link>
          <Link
            href="/docs/api"
            className="rounded-full border border-gray-700 px-8 py-3 text-lg font-medium text-white hover:border-gray-500 transition-colors"
          >
            API Reference
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {[
            { value: '5', label: 'Planets' },
            { value: '99.9%', label: 'Uptime' },
            { value: '<5min', label: 'Delivery' },
            { value: '1M+', label: 'Pizzas Delivered' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-orange-500">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}