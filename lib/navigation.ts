// lib/navigation.ts
export interface NavItem {
  title: string
  href?: string
  items?: NavItem[]
  icon?: string
  badge?: string
}

export interface NavSection {
  title: string
  items: NavItem[]
}

export const docsNavigation: NavSection[] = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/docs', icon: '👋' },
      { title: 'Quick Start', href: '/docs/getting-started', icon: '🚀' },
      { title: 'Installation', href: '/docs/installation', icon: '📦' },
    ],
  },
  {
    title: 'Menu',
    items: [
      {
        title: 'Our Pizzas',
        href: '/docs/menu',
        icon: '🍕',
        items: [
          { title: 'Supernova Supreme', href: '/docs/menu/supernova' },
          { title: 'Black Hole', href: '/docs/menu/black-hole' },
          { title: 'Alien Veggie', href: '/docs/menu/alien-veggie' },
          { title: 'Meteor Meat', href: '/docs/menu/meteor-meat' },
          { title: 'Cheesara Special', href: '/docs/menu/cheesara' },
        ],
      },
      { title: 'Sizes & Prices', href: '/docs/menu/prices', icon: '💰' },
      { title: 'Toppings', href: '/docs/menu/toppings', icon: '🧀' },
    ],
  },
  {
    title: 'Delivery',
    items: [
      { title: 'How It Works', href: '/docs/delivery', icon: '🚚' },
      {
        title: 'Planets',
        icon: '🪐',
        items: [
          { title: 'Earth', href: '/docs/delivery/earth' },
          { title: 'Mars', href: '/docs/delivery/mars' },
          { title: 'Kepler-442b', href: '/docs/delivery/kepler' },
          { title: 'Zorgon', href: '/docs/delivery/zorgon' },
          { title: 'Inferno', href: '/docs/delivery/inferno' },
        ],
      },
      { title: 'Delivery Team', href: '/docs/delivery-team', icon: '👾' },
      { title: 'Tracking', href: '/docs/delivery/tracking', icon: '📍' },
    ],
  },
  {
    title: 'API Reference',
    items: [
      { title: 'Overview', href: '/docs/api', icon: '🔌', badge: 'v2.0' },
      { title: 'Authentication', href: '/docs/api/auth', icon: '🔐' },
      { title: 'Orders', href: '/docs/api/orders', icon: '📋' },
      { title: 'Webhooks', href: '/docs/api/webhooks', icon: '🪝' },
    ],
  },
]