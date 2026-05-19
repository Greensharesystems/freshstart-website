'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Our Story', href: '/our-story' },
  { label: 'The Full Circle', href: '/the-full-circle' },
  { label: 'Partners', href: '/partners' },
  { label: 'Sustainability', href: '/sustainability' },
]

function LoginButton() {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: '100%',
        background: hovered ? 'white' : 'transparent',
        border: '1px solid white',
        borderRadius: 999,
        color: hovered ? '#1CB24E' : 'white',
        padding: '6px 16px',
        cursor: 'pointer',
        fontSize: 13,
        fontFamily: "'General Sans', system-ui, sans-serif",
        transition: 'background 0.2s ease, color 0.2s ease',
      }}
    >
      Login
    </button>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 1000,
        backgroundColor: '#1CB24E',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.15)' : 'none',
        transition: 'box-shadow 0.3s ease',
        fontFamily: "'General Sans', system-ui, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 1400,
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'stretch',
        }}
      >
        {/* Logo — vertically centred across both rows */}
        <Link href="/" style={{ textDecoration: 'none', flexShrink: 0, display: 'flex', alignItems: 'center', marginRight: 24 }}>
          <Image
            src="/freshstartlogowhite.png"
            alt="Fresh Start"
            width={150}
            height={72}
            style={{ objectFit: 'contain', display: 'block' }}
            priority
          />
        </Link>

        {/* Centre: two-row section (line starts after logo) */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>

          {/* Content block — pushed to the right; line only spans this block's width */}
          <div style={{ marginLeft: 'auto', display: 'flex', flexDirection: 'column', paddingLeft: 160 }}>

            {/* Row 1: Contact info */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                gap: 32,
                paddingTop: 14,
                paddingBottom: 8,
                borderBottom: '1px solid rgba(255,255,255,0.2)',
              }}
            >
              <a
                href="mailto:care@freshstart.eco"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  color: 'rgba(255,255,255,0.85)',
                  textDecoration: 'none',
                  fontSize: 15,
                  fontWeight: 300,
                }}
              >
                <Mail size={16} color="white" />
                care@freshstart.eco
              </a>

              <a
                href="tel:+97155832236"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  color: 'rgba(255,255,255,0.85)',
                  textDecoration: 'none',
                  fontSize: 15,
                  fontWeight: 300,
                }}
              >
                <Phone size={16} color="white" />
                +971 55 83 22236
              </a>

              <Link
                href="/donate"
                style={{
                  color: 'rgba(255,255,255,0.85)',
                  textDecoration: 'none',
                  fontSize: 15,
                  fontWeight: 300,
                }}
              >
                Donate a Sole
              </Link>
            </div>

            {/* Row 2: Navigation links */}
            <nav
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 36,
                paddingTop: 8,
                paddingBottom: 14,
              }}
            >
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: 20,
                    fontWeight: 400,
                  }}
                >
                  {label}
                </Link>
              ))}
            </nav>

          </div>
        </div>

        {/* Right: Traceability card — spans both rows */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 8,
            border: '1px solid white',
            borderRadius: 10,
            padding: '12px 16px',
            marginLeft: 32,
            minWidth: 164,
            alignSelf: 'center',
            marginTop: 14,
            marginBottom: 14,
          }}
        >
          <div
            style={{
              fontSize: 10,
              fontWeight: 300,
              color: 'rgba(255,255,255,0.85)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            Traceability Platform
          </div>
          <div
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: 'white',
            }}
          >
            Save a Sole
          </div>
          <LoginButton />
        </div>
      </div>
    </header>
  )
}
