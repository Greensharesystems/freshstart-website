import Hero from './components/Hero'

const SECTIONS = ['Our Story', 'The Full Circle', 'Partners']

export default function Home() {
  return (
    <>
      <Hero />
      {SECTIONS.map((title) => (
        <section
          key={title}
          style={{
            minHeight: '60vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "'General Sans', system-ui, sans-serif",
            borderBottom: '1px solid #e8e6e0',
            padding: 'clamp(60px, 8vw, 120px) clamp(20px, 4vw, 40px)',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 52px)',
              fontWeight: 700,
              color: '#1CB24E',
              margin: 0,
              textAlign: 'center',
            }}
          >
            {title}
          </h2>
        </section>
      ))}
    </>
  )
}

