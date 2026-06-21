'use client'
import { useState } from 'react'

const contactInfo = [
  { icon: '✉️', label: 'Email', value: 'partners@strudl.app' },
  { icon: '📞', label: 'Phone', value: '+44 20 7946 0321' },
  { icon: '📍', label: 'Address', value: '14 Blossom Street, London E1 6PL' },
  { icon: '🕐', label: 'Hours', value: 'Mon–Fri, 9am–6pm GMT' },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  function set(field: string) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm(prev => ({ ...prev, [field]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true) }, 800)
  }

  const inputStyle = {
    width: '100%', padding: '12px 14px', border: '1px solid #dadada',
    borderRadius: 12, fontSize: '0.97rem', outline: 'none',
    fontFamily: 'inherit', transition: 'border-color 180ms',
  }

  return (
    <div>
      {/* Hero */}
      <section style={{ padding: '72px 16px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            border: '1px solid #dadada', borderRadius: 999, padding: '8px 14px',
            background: 'rgba(255,255,255,0.9)', fontSize: '0.9rem', color: '#5f5f5f', marginBottom: 24,
          }}>
            ✦ Get in touch
          </span>
          <h1 style={{ fontWeight: 800, fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', lineHeight: 0.95, letterSpacing: '-0.055em', marginBottom: 18 }}>
            We&apos;d love to<br />hear from you
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#5f5f5f', maxWidth: 440, margin: '0 auto' }}>
            Questions about the partner programme? Reach out and we&apos;ll reply within one business day.
          </p>
        </div>
      </section>

      {/* Two-column */}
      <section style={{ padding: '8px 16px 80px' }}>
        <div style={{
          maxWidth: 1000, margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32,
        }}>
          {/* Contact info */}
          <div>
            <h2 style={{ fontWeight: 800, fontSize: '1.3rem', letterSpacing: '-0.02em', marginBottom: 24 }}>Contact information</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {contactInfo.map(c => (
                <div key={c.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <span style={{
                    width: 40, height: 40, borderRadius: 12, background: '#f6f6f6',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.1rem', flexShrink: 0,
                  }}>{c.icon}</span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.88rem', color: '#5f5f5f', marginBottom: 2 }}>{c.label}</div>
                    <div style={{ fontWeight: 500, fontSize: '0.97rem' }}>{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div style={{
            background: '#fff', border: '1px solid #dadada', borderRadius: 24,
            padding: 32, boxShadow: '0 20px 60px rgba(0,0,0,0.07)',
          }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '24px 0' }}>
                <div style={{ fontSize: '2.8rem', marginBottom: 12 }}>✅</div>
                <h3 style={{ fontWeight: 800, fontSize: '1.3rem', letterSpacing: '-0.02em', marginBottom: 8 }}>Message sent!</h3>
                <p style={{ color: '#5f5f5f', fontSize: '0.95rem' }}>We&apos;ll get back to you within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <h3 style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.02em', marginBottom: 4 }}>Send a message</h3>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: '0.88rem', marginBottom: 6 }}>Name</label>
                  <input value={form.name} onChange={set('name')} placeholder="Your name" required style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#0f0f0f'}
                    onBlur={e => e.target.style.borderColor = '#dadada'} />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: '0.88rem', marginBottom: 6 }}>Email</label>
                  <input value={form.email} onChange={set('email')} type="email" placeholder="you@example.com" required style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#0f0f0f'}
                    onBlur={e => e.target.style.borderColor = '#dadada'} />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: '0.88rem', marginBottom: 6 }}>Message</label>
                  <textarea value={form.message} onChange={set('message')} placeholder="Tell us how we can help…" required rows={5}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={e => e.target.style.borderColor = '#0f0f0f'}
                    onBlur={e => e.target.style.borderColor = '#dadada'} />
                </div>
                <button type="submit" disabled={loading} style={{
                  padding: '14px', background: '#0f0f0f', color: '#fff',
                  border: '1px solid #0f0f0f', borderRadius: 999, fontWeight: 700, fontSize: '0.97rem',
                  opacity: loading ? 0.7 : 1,
                }}>
                  {loading ? 'Sending…' : 'Send message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
