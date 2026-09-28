import { useReveal } from '../hooks/useReveal';

export default function Contact() {
  const { ref, visible } = useReveal(0.08);

  return (
    <section
      id="contact"
      style={{
        background: '#080808', padding: 'clamp(80px, 10vw, 140px) 32px',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Decorative accent line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: 2,
        background: 'linear-gradient(90deg, #C6F135 0%, rgba(198,241,53,0.1) 60%, transparent 100%)',
      }} />

      <div ref={ref as React.RefObject<HTMLDivElement>} style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))', gap: 'clamp(48px, 8vw, 80px)', alignItems: 'end' }}>
          {/* Left: Big headline */}
          <div>
            <div className={`reveal ${visible ? 'visible' : ''}`}>
              <div className="eyebrow" style={{ marginBottom: 24 }}>GET IN TOUCH</div>
            </div>
            <h2
              className={`display reveal reveal-d1 ${visible ? 'visible' : ''}`}
              style={{
                fontSize: 'clamp(44px, 7.5vw, 96px)',
                color: '#E8E6DF', marginBottom: 0,
              }}
            >
              LET'S SOURCE<br />
              <span style={{ color: '#C6F135' }}>SOMETHING</span><br />
              TOGETHER.
            </h2>
          </div>

          {/* Right: Contact details */}
          <div className={`reveal reveal-d2 ${visible ? 'visible' : ''}`}>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 32, marginBottom: 32 }}>
              <div className="display" style={{ fontSize: 20, color: '#E8E6DF', letterSpacing: '0.04em', marginBottom: 6 }}>
                SKI ENTERPRISES LLP
              </div>
              <div className="mono" style={{ fontSize: 9, color: 'rgba(198,241,53,0.6)', letterSpacing: '0.22em', marginBottom: 28 }}>
                GLOBAL TRADING & INDIA SOURCING
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { label: 'LOCATION', value: 'Mumbai, India' },
                  { label: 'EMAIL', value: 'skienterprisesllp@gmail.com', href: 'mailto:skienterprisesllp@gmail.com' },
                  { label: 'PHONE', value: '+91 7715075207', href: 'tel:+917715075207' },
                  { label: 'WEBSITE', value: 'www.skienterprisesllp.com', href: 'https://www.skienterprisesllp.com' },
                ].map((c, i) => (
                  <div key={i} style={{ display: 'flex', gap: 20, alignItems: 'baseline', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: 14 }}>
                    <div className="mono" style={{ fontSize: 8, color: 'rgba(232,230,223,0.3)', letterSpacing: '0.2em', flexShrink: 0, width: 80 }}>
                      {c.label}
                    </div>
                    {c.href ? (
                      <a
                        href={c.href}
                        style={{
                          fontFamily: 'Outfit, sans-serif', fontSize: 14, color: '#E8E6DF',
                          textDecoration: 'none', cursor: 'none',
                          transition: 'color 0.25s',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.color = '#C6F135')}
                        onMouseLeave={e => (e.currentTarget.style.color = '#E8E6DF')}
                      >
                        {c.value}
                      </a>
                    ) : (
                      <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 14, color: '#E8E6DF' }}>
                        {c.value}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <button
              className="btn-primary"
              onClick={() => document.getElementById('rfq')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}
            >
              <span>Start an RFQ</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
