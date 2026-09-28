import { useReveal } from '../hooks/useReveal';

export default function TheIdea() {
  const { ref: leftRef, visible: leftVisible } = useReveal(0.1);
  const { ref: rightRef, visible: rightVisible } = useReveal(0.1);

  const steps = [
    { num: '01', text: 'Tell us what you need — a specification, drawing, sample, or part number.' },
    { num: '02', text: 'We identify the right manufacturing source in India suited to your requirement.' },
    { num: '03', text: 'We qualify the requirement against supplier capability and confirm pricing.' },
    { num: '04', text: 'We coordinate production, quality checks, packing, and export from India.' },
  ];

  return (
    <section
      id="capabilities"
      style={{
        background: '#0A0A0A', padding: 'clamp(80px, 10vw, 140px) 32px',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
          gap: 'clamp(48px, 8vw, 120px)',
          alignItems: 'start',
        }}>
          {/* Left: Quote */}
          <div ref={leftRef as React.RefObject<HTMLDivElement>}>
            <div className={`reveal ${leftVisible ? 'visible' : ''}`}>
              <div className="eyebrow" style={{ marginBottom: 28 }}>THE SKI MODEL</div>
            </div>
            <h2
              className={`display reveal reveal-d1 ${leftVisible ? 'visible' : ''}`}
              style={{
                fontSize: 'clamp(36px, 5.5vw, 68px)',
                color: '#E8E6DF', marginBottom: 40,
              }}
            >
              YOU DON'T NEED<br />
              ANOTHER<br />
              CATALOGUE.<br />
              <span style={{ color: '#C6F135' }}>YOU NEED THE<br />RIGHT SUPPLIER.</span>
            </h2>
            <p
              className={`reveal reveal-d2 ${leftVisible ? 'visible' : ''}`}
              style={{
                fontFamily: 'Outfit, sans-serif', fontWeight: 300,
                fontSize: 15, color: 'rgba(232,230,223,0.55)',
                lineHeight: 1.75, maxWidth: 380,
              }}
            >
              SKI Enterprises LLP is a Mumbai-based global trading and merchant export company
              connecting international buyers with capable Indian manufacturing partners.
            </p>

            {/* Large statement */}
            <div
              className={`reveal reveal-d3 ${leftVisible ? 'visible' : ''}`}
              style={{ marginTop: 56, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div className="display" style={{ fontSize: 'clamp(20px, 2.5vw, 30px)', color: '#E8E6DF', letterSpacing: '0.02em', lineHeight: 1.2 }}>
                YOU SPECIFY.<br />
                <span style={{ color: '#C6F135' }}>WE SOURCE.</span><br />
                INDIA SUPPLIES.
              </div>
            </div>
          </div>

          {/* Right: Animated steps */}
          <div ref={rightRef as React.RefObject<HTMLDivElement>} style={{ paddingTop: 8 }}>
            <div style={{ position: 'relative' }}>
              {/* Vertical connector line */}
              <div style={{
                position: 'absolute', left: 16, top: 28, bottom: 28,
                width: 1,
                background: 'linear-gradient(to bottom, #C6F135, rgba(198,241,53,0.1))',
                opacity: rightVisible ? 1 : 0,
                transition: 'opacity 0.8s ease 0.4s',
              }} />

              {steps.map((s, i) => (
                <div
                  key={i}
                  className={`reveal reveal-d${i + 1} ${rightVisible ? 'visible' : ''}`}
                  style={{
                    display: 'flex', gap: 28, marginBottom: 40,
                    position: 'relative', paddingLeft: 6,
                  }}
                >
                  {/* Node dot */}
                  <div style={{
                    width: 20, height: 20, borderRadius: '50%', flexShrink: 0,
                    border: '1px solid rgba(198,241,53,0.5)',
                    background: '#080808',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginTop: 2,
                  }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#C6F135' }} />
                  </div>

                  <div>
                    <div className="mono" style={{ fontSize: 9, color: '#C6F135', letterSpacing: '0.2em', marginBottom: 8 }}>
                      STEP {s.num}
                    </div>
                    <p style={{
                      fontFamily: 'Outfit, sans-serif', fontSize: 14,
                      color: 'rgba(232,230,223,0.7)', lineHeight: 1.65,
                    }}>
                      {s.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className={`reveal reveal-d5 ${rightVisible ? 'visible' : ''}`}>
              <div
                style={{
                  marginTop: 12, padding: '20px 24px',
                  background: 'rgba(198,241,53,0.05)',
                  border: '1px solid rgba(198,241,53,0.15)',
                }}
              >
                <div className="mono" style={{ fontSize: 9, color: '#C6F135', letterSpacing: '0.2em', marginBottom: 8 }}>
                  SOURCING PHILOSOPHY
                </div>
                <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, color: 'rgba(232,230,223,0.6)', lineHeight: 1.65 }}>
                  We start with your specification, not our catalogue. Each sourcing inquiry is treated
                  as a distinct technical requirement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
