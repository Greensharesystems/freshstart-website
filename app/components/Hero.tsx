'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section
      style={{
        backgroundColor: '#1CB24E',
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        fontFamily: "'General Sans', system-ui, sans-serif",
        paddingTop: isMobile ? 120 : 0,
      }}
    >
      <div
        style={{
          maxWidth: 1400,
          margin: '0 auto',
          padding: isMobile ? '60px 20px' : '0 24px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 32,
          alignItems: isMobile ? 'center' : 'flex-start',
          textAlign: isMobile ? 'center' : 'left',
        }}
      >
        {/* Eyebrow */}
        <p
          style={{
            color: 'rgba(255,255,255,0.75)',
            fontSize: 14,
            fontWeight: 300,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            margin: 0,
          }}
        >
          Sustainable Footwear Recycling
        </p>

        {/* Headline */}
        <h1
          style={{
            color: 'white',
            fontSize: 'clamp(2.5rem, 8vw, 7rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            margin: 0,
            maxWidth: 800,
          }}
        >
          Give Your Soles<br />
          A Second Life
        </h1>

        {/* Subheading */}
        <p
          style={{
            color: 'rgba(255,255,255,0.85)',
            fontSize: isMobile ? 15 : 'clamp(16px, 2vw, 20px)',
            fontWeight: 300,
            lineHeight: 1.6,
            margin: 0,
            maxWidth: 540,
          }}
        >
          Fresh Start collects, recycles, and repurposes worn footwear —
          keeping shoes out of landfills and putting them back into the world.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 16, width: isMobile ? '100%' : 'auto' }}>
          <Link
            href="/donate"
            style={{
              backgroundColor: 'white',
              color: '#1CB24E',
              textDecoration: 'none',
              padding: '14px 32px',
              borderRadius: 999,
              fontSize: 16,
              fontWeight: 600,
              fontFamily: "'General Sans', system-ui, sans-serif",
              display: 'inline-block',
              textAlign: 'center',
              minHeight: 44,
            }}
          >
            Donate a Sole
          </Link>
          <Link
            href="/our-story"
            style={{
              backgroundColor: 'transparent',
              color: 'white',
              textDecoration: 'none',
              padding: '14px 32px',
              borderRadius: 999,
              fontSize: 16,
              fontWeight: 400,
              fontFamily: "'General Sans', system-ui, sans-serif",
              border: '1px solid rgba(255,255,255,0.6)',
              display: 'inline-block',
              textAlign: 'center',
              minHeight: 44,
            }}
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
