import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(0,0,0,0.06)',
      padding: '32px 16px',
      background: '#fafafa',
    }}>
      <div style={{
        maxWidth: 1180, margin: '0 auto',
        display: 'flex', flexWrap: 'wrap',
        alignItems: 'center', justifyContent: 'space-between',
        gap: 12,
      }}>
        <span style={{ fontSize: '0.85rem', color: '#9f9f9f' }}>
          © {new Date().getFullYear()} Strudl. Wien, Österreich.
        </span>
        <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 20px' }}>
          {[
            { href: '/impressum', label: 'Impressum' },
            { href: '/datenschutz', label: 'Datenschutz' },
            { href: '/agb', label: 'AGB' },
            { href: '/dpa', label: 'Auftragsverarbeitung' },
          ].map(l => (
            <Link key={l.href} href={l.href}
              style={{ fontSize: '0.85rem', color: '#9f9f9f', textDecoration: 'none' }}
              className="hover:text-black transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
