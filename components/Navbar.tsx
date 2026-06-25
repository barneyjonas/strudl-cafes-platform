'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const path = usePathname()

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        background: 'rgba(253,250,245,0.82)',
        borderBottom: '1px solid rgba(26,24,21,0.07)',
      }}
    >
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 16px' }}>
        <nav style={{ minHeight: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
          {/* Brand */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 800, letterSpacing: '-0.03em', fontSize: '1.45rem' }}>
            <span style={{ width: 48, height: 48, borderRadius: 14, overflow: 'hidden', flexShrink: 0, transition: 'transform 240ms ease' }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'rotate(-6deg) scale(1.04)')}
              onMouseLeave={e => (e.currentTarget.style.transform = '')}>
              <img src="/Logo_Strudl_no_Background.svg" alt="Strudl logo" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </span>
            Strudl
          </Link>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 28, fontSize: '0.97rem', color: '#5f5f5f' }} className="hidden sm:flex">
            {links.map(l => (
              <Link key={l.href} href={l.href}
                style={{ color: path === l.href ? '#0f0f0f' : '#5f5f5f', fontWeight: path === l.href ? 600 : 400 }}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Dashboard CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Link href="/dashboard"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                borderRadius: 999, padding: '10px 18px', fontWeight: 700, fontSize: '0.9rem',
                background: '#0f0f0f', color: '#fff', border: '1px solid #0f0f0f',
                transition: 'transform 180ms ease',
              }}
              className="hover:-translate-y-px"
            >
              Dashboard →
            </Link>
            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              style={{ padding: 8, display: 'none' }}
              className="sm:hidden"
              aria-label="Toggle menu"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                {open ? (
                  <path d="M4 4L18 18M4 18L18 4" stroke="#0f0f0f" strokeWidth="2" strokeLinecap="round"/>
                ) : (
                  <>
                    <line x1="2" y1="6" x2="20" y2="6" stroke="#0f0f0f" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="2" y1="11" x2="20" y2="11" stroke="#0f0f0f" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="2" y1="16" x2="20" y2="16" stroke="#0f0f0f" strokeWidth="2" strokeLinecap="round"/>
                  </>
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div style={{ padding: '12px 0 16px', borderTop: '1px solid rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column', gap: 4 }}
            className="sm:hidden">
            {links.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                style={{ padding: '10px 4px', fontWeight: path === l.href ? 600 : 400, color: path === l.href ? '#0f0f0f' : '#5f5f5f' }}>
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
