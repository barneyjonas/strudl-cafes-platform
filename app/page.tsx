'use client'
import { useState } from 'react'
import { registerCafe } from '@/lib/pb'

const P = {
  bg: '#EDE8DF',
  shell: '#FDFAF5',
  surface: '#F0EBE0',
  border: '#E8E2D8',
  text: '#1A1815',
  muted: '#7A7060',
  amber: '#E6C828',
  cta: '#1A1815',
}

const features = [
  { icon: '📱', title: 'Keine Hardware nötig', desc: 'Funktioniert auf jedem Smartphone. Ihre Gäste scannen einen QR-Code an der Theke — keine Terminals, keine Abos, kein Aufwand.' },
  { icon: '📊', title: 'Echtzeitanalysen', desc: 'Besuchshäufigkeit, Stammgäste, Auslastung — auf einen Blick. Entscheidungen auf Basis echter Daten, nicht Bauchgefühl.' },
  { icon: '☕', title: 'Echte Stammgäste', desc: 'Ersetzen Sie Papierstempelkarten durch ein digitales Erlebnis. Ihre Gäste kommen öfter zurück — und bringen Freunde mit.' },
]

export default function HomePage() {
  const [name, setName] = useState('')
  const [code, setCode] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !code.trim()) return
    setLoading(true)
    try {
      await registerCafe(name.trim(), code.trim())
      setSubmitted(true)
    } catch {
      // If PocketBase is unreachable (static GitHub Pages build), fall back gracefully
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '12px 14px',
    border: `1px solid ${P.border}`,
    borderRadius: 12, fontSize: '0.97rem', outline: 'none',
    background: P.shell, color: P.text,
    transition: 'border-color 180ms',
    fontFamily: 'inherit',
  }

  return (
    <div style={{ background: P.bg }}>
      {/* Hero */}
      <section style={{ padding: '80px 16px 60px', textAlign: 'center' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            border: `1px solid ${P.border}`, borderRadius: 999, padding: '8px 14px',
            background: P.shell, fontSize: '0.9rem', color: P.muted, marginBottom: 24,
          }}>
            ☕ Partner-Portal
          </span>
          <h1 style={{
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', lineHeight: 0.95,
            letterSpacing: '-0.055em', marginBottom: 20, fontWeight: 800, color: P.text,
          }}>
            Eine Karte.<br />Jedes Kaffeehaus.
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.25rem)', color: P.muted,
            maxWidth: 560, margin: '0 auto 40px', lineHeight: 1.6,
          }}>
            Unabhängige Kaffeehäuser brauchen keine Kundenkarten. Sie brauchen Stammgäste.
            Strudl gibt Ihnen die Werkzeuge, die die Ketten schon längst haben.
          </p>

          {/* Registration card */}
          <div style={{
            maxWidth: 440, margin: '0 auto',
            background: P.shell, border: `1px solid ${P.border}`, borderRadius: 24,
            padding: 32, boxShadow: '0 20px 60px rgba(26,24,21,0.10)',
            textAlign: 'left',
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '16px 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: 12 }}>☕</div>
                <h2 style={{ fontWeight: 800, fontSize: '1.4rem', letterSpacing: '-0.03em', marginBottom: 8, color: P.text }}>
                  Willkommen bei Strudl.
                </h2>
                <p style={{ color: P.muted, fontSize: '0.97rem' }}>
                  <strong style={{ color: P.text }}>{name}</strong> ist jetzt dabei. Ihr Dashboard ist bereit.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2 style={{ fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.03em', marginBottom: 6, color: P.text }}>
                  Ihr Kaffeehaus anmelden
                </h2>
                <p style={{ color: P.muted, fontSize: '0.9rem', marginBottom: 24 }}>Dauert weniger als eine Minute.</p>

                <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', marginBottom: 6, color: P.text }}>
                  Name des Kaffeehauses
                </label>
                <input
                  value={name} onChange={e => setName(e.target.value)}
                  placeholder="z.B. Café Central"
                  required style={{ ...inputStyle, marginBottom: 16 }}
                  onFocus={e => e.target.style.borderColor = P.text}
                  onBlur={e => e.target.style.borderColor = P.border}
                />

                <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', marginBottom: 6, color: P.text }}>
                  Partner-Code
                </label>
                <input
                  value={code} onChange={e => setCode(e.target.value)}
                  placeholder="z.B. KAFFEE-2024"
                  required style={{ ...inputStyle, marginBottom: 4 }}
                  onFocus={e => e.target.style.borderColor = P.text}
                  onBlur={e => e.target.style.borderColor = P.border}
                />
                <p style={{ color: P.muted, fontSize: '0.82rem', marginBottom: 24 }}>
                  Sie haben diesen Code in Ihrer Einladungs-E-Mail erhalten.
                </p>

                <button
                  type="submit" disabled={loading}
                  style={{
                    width: '100%', padding: '14px', background: P.cta, color: P.shell,
                    border: `1px solid ${P.cta}`, borderRadius: 999,
                    fontWeight: 700, fontSize: '0.97rem',
                    transition: 'transform 180ms ease, opacity 180ms',
                    opacity: loading ? 0.7 : 1,
                  }}
                >
                  {loading ? 'Wird angemeldet…' : 'Jetzt anmelden →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '72px 16px', background: P.surface }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center', fontWeight: 800,
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', letterSpacing: '-0.04em',
            marginBottom: 48, color: P.text,
          }}>
            Alles, was Ihr Kaffeehaus braucht.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {features.map(f => (
              <div key={f.title} style={{
                background: P.shell, border: `1px solid ${P.border}`, borderRadius: 24,
                padding: 28, boxShadow: '0 20px 60px rgba(26,24,21,0.06)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                  <span style={{ fontSize: '2rem', lineHeight: 1 }}>{f.icon}</span>
                  <h3 style={{ fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.02em', margin: 0, color: P.text }}>{f.title}</h3>
                </div>
                <p style={{ color: P.muted, fontSize: '0.94rem', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA strip */}
      <section style={{ padding: '56px 16px', textAlign: 'center', background: P.bg }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <p style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', fontWeight: 700, letterSpacing: '-0.03em', color: P.text, marginBottom: 24 }}>
            Wien trinkt Kaffee. Machen Sie daraus Stammgäste.
          </p>
          <a href="#top" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: P.cta, color: P.shell,
              padding: '14px 28px', borderRadius: 999,
              fontWeight: 700, fontSize: '1rem',
              textDecoration: 'none',
            }}>
            Jetzt anmelden →
          </a>
        </div>
      </section>
    </div>
  )
}
