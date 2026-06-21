'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function DashboardLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim() || !password.trim()) {
      setError('Please enter your email and password.')
      return
    }
    setError('')
    setLoading(true)
    setTimeout(() => {
      sessionStorage.setItem('dashboard_auth', 'true')
      router.push('/dashboard')
    }, 600)
  }

  const inputStyle = {
    width: '100%', padding: '12px 14px', border: '1px solid #dadada',
    borderRadius: 12, fontSize: '0.97rem', outline: 'none', fontFamily: 'inherit',
    transition: 'border-color 180ms',
  }

  return (
    <div style={{ minHeight: 'calc(100vh - 72px)', background: '#f6f6f6', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
      <div style={{
        width: '100%', maxWidth: 400,
        background: '#fff', border: '1px solid #dadada', borderRadius: 24,
        padding: 36, boxShadow: '0 20px 60px rgba(0,0,0,0.09)',
      }}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <img src="/Logo_Strudl_no_Background.svg" alt="Strudl" style={{ width: 52, height: 52, borderRadius: 14, objectFit: 'cover', margin: '0 auto 10px' }} />
          <h1 style={{ fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.03em', marginBottom: 6 }}>Dashboard Login</h1>
          <p style={{ color: '#5f5f5f', fontSize: '0.9rem' }}>Sign in to view your analytics</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div>
            <label style={{ display: 'block', fontWeight: 600, fontSize: '0.88rem', marginBottom: 6 }}>Email</label>
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="you@cafe.com" required style={inputStyle}
              onFocus={e => e.target.style.borderColor = '#0f0f0f'}
              onBlur={e => e.target.style.borderColor = '#dadada'} />
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: 600, fontSize: '0.88rem', marginBottom: 6 }}>Password</label>
            <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="••••••••" required style={inputStyle}
              onFocus={e => e.target.style.borderColor = '#0f0f0f'}
              onBlur={e => e.target.style.borderColor = '#dadada'} />
          </div>

          {error && <p style={{ color: '#dc2626', fontSize: '0.87rem' }}>{error}</p>}

          <button type="submit" disabled={loading} style={{
            marginTop: 6, padding: '14px', background: '#0f0f0f', color: '#fff',
            border: '1px solid #0f0f0f', borderRadius: 999, fontWeight: 700, fontSize: '0.97rem',
            opacity: loading ? 0.7 : 1,
          }}>
            {loading ? 'Signing in…' : 'Sign in →'}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <Link href="/" style={{ color: '#5f5f5f', fontSize: '0.88rem' }}>← Back to site</Link>
        </div>
      </div>
    </div>
  )
}
