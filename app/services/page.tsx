const services = [
  {
    icon: '🎫',
    title: 'Digital Stamp Cards',
    desc: 'Replace paper with beautiful digital loyalty cards. Customers collect stamps by scanning a QR code at your counter — no app download required.',
    detail: 'Works instantly on any browser.',
  },
  {
    icon: '📊',
    title: 'Analytics Dashboard',
    desc: 'Real-time insights on customer visits, spend patterns, and redemption rates. Understand your regulars and spot growth opportunities.',
    detail: 'Updated every 60 seconds.',
  },
  {
    icon: '📣',
    title: 'Campaign Manager',
    desc: 'Run targeted promotions to your most loyal customers. Double-stamp Tuesdays, birthday offers, and flash sales — set up in under 2 minutes.',
    detail: 'Push notifications included.',
  },
]

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section style={{ padding: '72px 16px 56px', background: 'radial-gradient(circle at top center, rgba(0,0,0,0.03), transparent 50%)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', textAlign: 'center' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            border: '1px solid #dadada', borderRadius: 999, padding: '8px 14px',
            background: 'rgba(255,255,255,0.9)', fontSize: '0.9rem', color: '#5f5f5f', marginBottom: 24,
          }}>
            ✦ What we offer
          </span>
          <h1 style={{ fontWeight: 800, fontSize: 'clamp(2.4rem, 6vw, 4.8rem)', lineHeight: 0.95, letterSpacing: '-0.055em', marginBottom: 18 }}>
            Built for<br />independent cafés
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', color: '#5f5f5f', maxWidth: 480, margin: '0 auto' }}>
            Every feature designed around the real needs of café owners — not enterprise chains.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section style={{ padding: '16px 16px 80px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {services.map(s => (
              <div key={s.title} style={{
                background: '#fff', border: '1px solid #dadada', borderRadius: 24,
                padding: 32, boxShadow: '0 20px 60px rgba(0,0,0,0.06)',
                display: 'flex', flexDirection: 'column', gap: 12,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontSize: '2.4rem', lineHeight: 1 }}>{s.icon}</span>
                  <h3 style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.02em', margin: 0 }}>{s.title}</h3>
                </div>
                <p style={{ color: '#5f5f5f', fontSize: '0.95rem', lineHeight: 1.65, flex: 1 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '64px 16px', background: '#0f0f0f', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', letterSpacing: '-0.04em', color: '#fff', marginBottom: 16 }}>
            Ready to grow your café?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', marginBottom: 32 }}>
            Register in under a minute. No card required.
          </p>
          <a href="/"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#fff', color: '#0f0f0f', border: '1px solid #fff',
              borderRadius: 999, padding: '14px 28px', fontWeight: 700, fontSize: '1rem',
            }}>
            Get started →
          </a>
        </div>
      </section>
    </div>
  )
}
