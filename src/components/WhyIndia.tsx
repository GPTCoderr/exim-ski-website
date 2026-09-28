import { useReveal } from '../hooks/useReveal';

const principles = [
  {
    title: 'SPECIFICATION FIRST',
    desc: 'We start with what you actually need — not what we have in stock. Every inquiry begins with your specification.',
  },
  {
    title: 'SUPPLIER MATCH',
    desc: 'We identify manufacturing partners in India suited to the technical and commercial requirements of each project.',
  },
  {
    title: 'COMMERCIAL CLARITY',
    desc: 'We build quotations around actual quantities and specifications. No padding, no guesswork.',
  },
  {
    title: 'EXPORT READY',
    desc: 'We coordinate the commercial, documentation, and export workflow from India. You receive the shipment.',
  },
];

export default function WhyIndia() {
  const { ref: headRef, visible: headVisible } = useReveal(0.08);
  const { ref: cardsRef, visible: cardsVisible } = useReveal(0.08);

  return (
    <section
      className="section-light"
      style={{ padding: 'clamp(80px, 10vw, 140px) 32px' }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div ref={headRef as React.RefObject<HTMLDivElement>}>
          <div className={`reveal ${headVisible ? 'visible' : ''}`}>
            <div className="eyebrow" style={{ marginBottom: 20 }}>THE SKI ADVANTAGE</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: 'clamp(32px, 6vw, 80px)', alignItems: 'start', marginBottom: 'clamp(48px, 8vw, 100px)' }}>
            <div>
              <h2
                className={`display reveal reveal-d1 ${headVisible ? 'visible' : ''}`}
                style={{ fontSize: 'clamp(34px, 5.5vw, 66px)', color: '#080808', marginBottom: 32 }}
              >
                INDIA HAS<br />THE FACTORIES.<br />
                <span style={{ color: '#2A5500' }}>WE BUILD<br />THE CONNECTION.</span>
              </h2>
            </div>
            <div className={`reveal reveal-d2 ${headVisible ? 'visible' : ''}`} style={{ paddingTop: 8 }}>
              <p style={{
                fontFamily: 'Outfit, sans-serif', fontSize: 15,
                color: '#3A3A3A', lineHeight: 1.75, marginBottom: 20,
              }}>
                India has a deep manufacturing ecosystem across engineering, rubber, metals,
                electrical components, hardware, textiles and industrial products.
              </p>
              <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 15, color: '#555', lineHeight: 1.75 }}>
                Our role is to make that ecosystem easier for international buyers to access — with
                one accountable sourcing partner managing the process from specification to shipment.
              </p>
              <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid rgba(0,0,0,0.1)' }}>
                <div
                  className="display"
                  style={{ fontSize: 'clamp(15px, 2vw, 20px)', color: '#080808', lineHeight: 1.2 }}
                >
                  WE WORK WITH INDIAN MANUFACTURING PARTNERS<br />
                  SELECTED ACCORDING TO THE TECHNICAL AND<br />
                  COMMERCIAL REQUIREMENTS OF EACH PROJECT.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Principles */}
        <div ref={cardsRef as React.RefObject<HTMLDivElement>}>
          <div
            className={`reveal ${cardsVisible ? 'visible' : ''}`}
            style={{ marginBottom: 24 }}
          >
            <div className="eyebrow" style={{ color: '#3A6B00' }}>FOUR PRINCIPLES</div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
            gap: 0,
            borderTop: '1px solid rgba(0,0,0,0.12)',
          }}>
            {principles.map((p, i) => (
              <div
                key={i}
                className={`reveal reveal-d${i + 1} ${cardsVisible ? 'visible' : ''}`}
                style={{
                  padding: '32px 28px 32px 0',
                  borderTop: '2px solid transparent',
                  borderRight: i < 3 ? '1px solid rgba(0,0,0,0.08)' : 'none',
                  paddingRight: i < 3 ? 28 : 0,
                  paddingLeft: i > 0 ? 28 : 0,
                  transition: 'border-top-color 0.3s',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderTopColor = '#3A6B00')}
                onMouseLeave={e => (e.currentTarget.style.borderTopColor = 'transparent')}
              >
                <div className="mono" style={{ fontSize: 9, color: '#3A6B00', letterSpacing: '0.2em', marginBottom: 14 }}>
                  0{i + 1}
                </div>
                <h3
                  className="display"
                  style={{ fontSize: 'clamp(17px, 2vw, 22px)', color: '#080808', marginBottom: 14, letterSpacing: '0.01em' }}
                >
                  {p.title}
                </h3>
                <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, color: '#555', lineHeight: 1.7 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
