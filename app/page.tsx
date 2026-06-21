'use client'
import { useState } from 'react'

const features = [
  { icon: '📱', title: 'No Hardware Needed', desc: 'Works on any smartphone. Customers scan a QR code at your counter — no terminals, no subscriptions, no fuss.' },
  { icon: '📊', title: 'Real-Time Analytics', desc: 'See visit frequency, average spend, and retention rates at a glance. Make decisions backed by data, not guesses.' },
  { icon: '❤️', title: 'Customer Loyalty', desc: 'Replace paper stamp cards with a delightful digital experience. Customers come back more often — and bring friends.' },
]

export default function HomePage() {
  const [name, setName] = useState('')
  const [code, setCode] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !code.trim()) return
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 900)
  }

  return (
    <div>
      {/* Hero */}
      <section style={{ padding: '80px 16px 60px', textAlign: 'center', background: 'radial-gradient(circle at top center, rgba(0,0,0,0.03), transparent 50%)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            border: '1px solid #dadada', borderRadius: 999, padding: '8px 14px',
            background: 'rgba(255,255,255,0.9)', fontSize: '0.9rem', color: '#5f5f5f', marginBottom: 24,
          }}>
            ☕ Partner Portal
          </span>
          <h1 style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', lineHeight: 0.95, letterSpacing: '-0.055em', marginBottom: 20, fontWeight: 800 }}>
            Partner with<br />Strudl
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)', color: '#5f5f5f', maxWidth: 520, margin: '0 auto 40px' }}>
            Join hundreds of independent cafés on the Strudl loyalty network. Register below to go live in minutes.
          </p>

          {/* Registration card */}
          <div style={{
            maxWidth: 440, margin: '0 auto',
            background: '#fff', border: '1px solid #dadada', borderRadius: 24,
            padding: 32, boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
            textAlign: 'left',
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '16px 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: 12 }}>🎉</div>
                <h2 style={{ fontWeight: 800, fontSize: '1.4rem', letterSpacing: '-0.03em', marginBottom: 8 }}>Welcome aboard!</h2>
                <p style={{ color: '#5f5f5f', fontSize: '0.97rem' }}>
                  <strong>{name}</strong> is now live on Strudl. Check your dashboard to get started.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2 style={{ fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.03em', marginBottom: 6 }}>Register your café</h2>
                <p style={{ color: '#5f5f5f', fontSize: '0.9rem', marginBottom: 24 }}>Takes less than a minute.</p>

                <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', marginBottom: 6 }}>Business name</label>
                <input
                  value={name} onChange={e => setName(e.target.value)}
                  placeholder="e.g. The Corner Brew"
                  required
                  style={{
                    width: '100%', padding: '12px 14px', border: '1px solid #dadada',
                    borderRadius: 12, fontSize: '0.97rem', marginBottom: 16, outline: 'none',
                    transition: 'border-color 180ms',
                  }}
                  onFocus={e => e.target.style.borderColor = '#0f0f0f'}
                  onBlur={e => e.target.style.borderColor = '#dadada'}
                />

                <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', marginBottom: 6 }}>Partner code</label>
                <input
                  value={code} onChange={e => setCode(e.target.value)}
                  placeholder="e.g. CAFE-2024"
                  required
                  style={{
                    width: '100%', padding: '12px 14px', border: '1px solid #dadada',
                    borderRadius: 12, fontSize: '0.97rem', marginBottom: 4, outline: 'none',
                    transition: 'border-color 180ms',
                  }}
                  onFocus={e => e.target.style.borderColor = '#0f0f0f'}
                  onBlur={e => e.target.style.borderColor = '#dadada'}
                />
                <p style={{ color: '#5f5f5f', fontSize: '0.82rem', marginBottom: 24 }}>You received this in your welcome email.</p>

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: '100%', padding: '14px', background: '#0f0f0f', color: '#fff',
                    border: '1px solid #0f0f0f', borderRadius: 999, fontWeight: 700, fontSize: '0.97rem',
                    transition: 'transform 180ms ease, opacity 180ms',
                    opacity: loading ? 0.7 : 1,
                  }}
                >
                  {loading ? 'Registering…' : 'Register café →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '72px 16px', background: '#f6f6f6' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', letterSpacing: '-0.04em', marginBottom: 48 }}>
            Everything your café needs
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {features.map(f => (
              <div key={f.title} style={{
                background: '#fff', border: '1px solid #dadada', borderRadius: 24,
                padding: 28, boxShadow: '0 20px 60px rgba(0,0,0,0.06)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                  <span style={{ fontSize: '2rem', lineHeight: 1 }}>{f.icon}</span>
                  <h3 style={{ fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.02em', margin: 0 }}>{f.title}</h3>
                </div>
                <p style={{ color: '#5f5f5f', fontSize: '0.94rem', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
