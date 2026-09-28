import { useReveal } from '../hooks/useReveal';

const buyers = [
  'IMPORTERS',
  'DISTRIBUTORS',
  'OEMs',
  'ENGINEERING\nCOMPANIES',
  'INDUSTRIAL\nBUYERS',
  'MRO SUPPLIERS',
  'CONTRACTORS',
  'RETAIL &\nTRADE BUYERS',
];

export default function WhoWeWorkWith() {
  const { ref, visible } = useReveal(0.08);

  return (
    <section
      style={{
        background: '#080808', padding: 'clamp(80px, 10vw, 140px) 32px',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div ref={ref as React.RefObject<HTMLDivElement>} style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))', gap: 'clamp(40px, 8vw, 100px)', alignItems: 'start' }}>
          {/* Left */}
          <div>
            <div className={`reveal ${visible ? 'visible' : ''}`}>
              <div className="eyebrow" style={{ marginBottom: 20 }}>WHO WE WORK WITH</div>
            </div>
            <h2
              className={`display reveal reveal-d1 ${visible ? 'visible' : ''}`}
              style={{ fontSize: 'clamp(34px, 5.5vw, 62px)', color: '#E8E6DF', marginBottom: 32 }}
            >
              FOR BUYERS<br />WHO BUY WITH<br />
              <span style={{ color: '#C6F135' }}>A SPECIFICATION.</span>
            </h2>
            <p
              className={`reveal reveal-d2 ${visible ? 'visible' : ''}`}
              style={{
                fontFamily: 'Outfit, sans-serif', fontWeight: 300, fontSize: 14,
                color: 'rgba(232,230,223,0.5)', lineHeight: 1.75, maxWidth: 380,
              }}
            >
              Whether you need 100 pieces for evaluation or recurring commercial quantities,
              we can structure the sourcing around your requirement.
            </p>

            <div
              className={`reveal reveal-d3 ${visible ? 'visible' : ''}`}
              style={{ marginTop: 40 }}
            >
              <button
                className="btn-ghost"
                onClick={() => document.getElementById('rfq')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>Send us a requirement</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Right: Buyer type grid */}
          <div className={`reveal reveal-d2 ${visible ? 'visible' : ''}`}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 0,
              border: '1px solid rgba(255,255,255,0.07)',
            }}>
              {buyers.map((b, i) => (
                <div
                  key={i}
                  className="buyer-tag"
                  style={{
                    padding: '24px 22px',
                    borderBottom: i < buyers.length - 2 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                    borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                    animationDelay: `${i * 0.05}s`,
                    cursor: 'none',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(198,241,53,0.04)';
                    const txt = e.currentTarget.querySelector('.buyer-text') as HTMLElement;
                    if (txt) txt.style.color = '#C6F135';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'transparent';
                    const txt = e.currentTarget.querySelector('.buyer-text') as HTMLElement;
                    if (txt) txt.style.color = '#E8E6DF';
                  }}
                >
                  <div
                    className="buyer-text display"
                    style={{
                      fontSize: 'clamp(14px, 1.6vw, 18px)',
                      color: '#E8E6DF',
                      whiteSpace: 'pre-line',
                      transition: 'color 0.3s',
                      lineHeight: 1.15,
                    }}
                  >
                    {b}
                  </div>
                  <div
                    style={{
                      position: 'absolute', bottom: 0, left: 0,
                      width: 0, height: '2px', background: '#C6F135',
                      transition: 'width 0.4s cubic-bezier(0.16,1,0.3,1)',
                    }}
                    className="hover-underline"
                  />
                </div>
              ))}
            </div>

            <div style={{ marginTop: 24, padding: '16px 20px', border: '1px solid rgba(198,241,53,0.12)', background: 'rgba(198,241,53,0.03)' }}>
              <div className="mono" style={{ fontSize: 9, color: '#C6F135', letterSpacing: '0.2em', marginBottom: 8 }}>
                ANY QUANTITY. ANY SPECIFICATION.
              </div>
              <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 12, color: 'rgba(232,230,223,0.45)', lineHeight: 1.65 }}>
                From initial evaluation samples to recurring commercial orders.
                Start with one requirement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
