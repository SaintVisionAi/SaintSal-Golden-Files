'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const routes = [
  { href: '/applehome', label: 'Home' },
  { href: '/auth', label: 'Auth' },
  { href: '/gen', label: 'Dashboard' },
  { href: '/saintgpt', label: 'SAINTGPT' },
  { href: '/crm', label: 'CRM' },
  { href: '/partnertech', label: 'PartnerTech' },
  { href: '/warroom', label: 'War Room' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/why', label: 'Why SVG?' },
  { href: '/help', label: 'Help' },
  { href: '/legal', label: 'Legal' },
  { href: '/institute', label: 'Institute' },
  { href: '/broker', label: 'Broker' },
  { href: '/ai-tools', label: 'AI Tools' },
  { href: '/about', label: 'About' }
]

export default function Nav() {
  const pathname = usePathname()
  return (
    <nav className="p-4 bg-black text-white flex flex-wrap gap-4 sticky top-0 z-50">
      {routes.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`hover:underline ${pathname === href ? 'font-bold' : ''}`}
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}
