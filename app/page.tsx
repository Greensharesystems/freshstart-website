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
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 52px)',
              fontWeight: 700,
              color: '#1CB24E',
              margin: 0,
            }}
          >
            {title}
          </h2>
        </section>
      ))}
    </>
  )
}

