'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const LINKS = {
  Company: [
    { label: 'Our Story', href: '/our-story' },
    { label: 'The Full Circle', href: '/the-full-circle' },
    { label: 'Sustainability', href: '/sustainability' },
    { label: 'Partners', href: '/partners' },
  ],
  Platform: [
    { label: 'Traceability Platform', href: '/platform' },
    { label: 'Save a Sole', href: '/save-a-sole' },
    { label: 'Donate a Sole', href: '/donate' },
  ],
  Contact: [
    { label: 'care@freshstart.eco', href: 'mailto:care@freshstart.eco' },
    { label: '+971 55 83 22236', href: 'tel:+97155832236' },
  ],
}

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <footer
      style={{
        backgroundColor: '#1CB24E',
        fontFamily: "'General Sans', system-ui, sans-serif",
        borderTop: '1px solid rgba(255,255,255,0.15)',
      }}
    >
      {/* Main footer content */}
      <div
        style={{
          maxWidth: 1400,
          margin: '0 auto',
          padding: isMobile ? '48px 20px 32px' : '64px 24px 40px',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr repeat(3, auto)',
          gap: isMobile ? 32 : 64,
        }}
      >
        {/* Brand column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: isMobile ? 'center' : 'flex-start' }}>
          <Link href="/" style={{ textDecoration: 'none', display: 'inline-block' }}>
            <Image
              src="/freshstartlogowhite.png"
              alt="Fresh Start"
              width={130}
              height={62}
              style={{ objectFit: 'contain', display: 'block' }}
            />
          </Link>
          <p
            style={{
              color: 'rgba(255,255,255,0.75)',
              fontSize: 14,
              fontWeight: 300,
              lineHeight: 1.7,
              maxWidth: 280,
              margin: 0,
              textAlign: isMobile ? 'center' : 'left',
            }}
          >
            Collecting, recycling, and repurposing worn footwear to keep shoes
            out of landfills and give soles a second life.
          </p>
        </div>

        {/* Link columns */}
        {Object.entries(LINKS).map(([heading, items]) => (
          <div key={heading} style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: isMobile ? 'center' : 'flex-start' }}>
            <h4
              style={{
                color: 'white',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                margin: 0,
              }}
            >
              {heading}
            </h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10, alignItems: isMobile ? 'center' : 'flex-start' }}>
              {items.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    style={{
                      color: 'rgba(255,255,255,0.75)',
                      textDecoration: 'none',
                      fontSize: 14,
                      fontWeight: 300,
                    }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.15)',
          maxWidth: 1400,
          margin: '0 auto',
          padding: isMobile ? '16px 20px' : '20px 24px',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: isMobile ? 12 : 13, fontWeight: 300, margin: 0, textAlign: 'center' }}>
          &copy; {new Date().getFullYear()} Fresh Start. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: 24 }}>
          {['Privacy Policy', 'Terms of Use'].map((label) => (
            <Link
              key={label}
              href={`/${label.toLowerCase().replace(/ /g, '-')}`}
              style={{ color: 'rgba(255,255,255,0.6)', fontSize: isMobile ? 12 : 13, fontWeight: 300, textDecoration: 'none' }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
