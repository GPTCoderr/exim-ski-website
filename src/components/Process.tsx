import { useReveal } from '../hooks/useReveal';

const steps = [
  {
    num: '01', key: 'SPECIFY',
    title: 'SPECIFY',
    desc: 'Drawing / Sample / Part Number / Dimensions / Material',
  },
  {
    num: '02', key: 'SOURCE',
    title: 'SOURCE',
    desc: 'Qualified Indian manufacturing partner matched to requirement',
  },
  {
    num: '03', key: 'VALIDATE',
    title: 'VALIDATE',
    desc: 'Specification / Material / Quality / Commercials confirmed',
  },
  {
    num: '04', key: 'PRODUCE',
    title: 'PRODUCE',
    desc: 'Buyer-approved production against confirmed specification',
  },
  {
    num: '05', key: 'EXPORT',
    title: 'EXPORT',
    desc: 'Packing / Documentation / Shipment from India',
  },
];

export default function Process() {
  const { ref, visible } = useReveal(0.08);

  return (
    <section
      id="process"
      style={{
        background: '#060606', padding: 'clamp(80px, 10vw, 140px) 32px',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div ref={ref as React.RefObject<HTMLDivElement>}>
          {/* Header */}
          <div style={{ marginBottom: 'clamp(48px, 7vw, 96px)' }}>
            <div className={`reveal ${visible ? 'visible' : ''}`}>
              <div className="eyebrow" style={{ marginBottom: 20 }}>THE SOURCING PROCESS</div>
            </div>
            <h2
              className={`display reveal reveal-d1 ${visible ? 'visible' : ''}`}
              style={{ fontSize: 'clamp(36px, 6vw, 78px)', color: '#E8E6DF' }}
            >
              FROM A DRAWING<br />
              <span style={{ color: '#C6F135' }}>TO A GLOBAL</span><br />
              SHIPMENT.
            </h2>
          </div>

          {/* Steps: Horizontal on desktop, vertical on mobile */}
          <div
            className={`reveal reveal-d2 ${visible ? 'visible' : ''}`}
            style={{ position: 'relative' }}
          >
            {/* Desktop layout */}
            <div className="hidden lg:block">
              {/* Connector line SVG */}
              <svg
                viewBox="0 0 1000 4"
                style={{ width: '100%', height: 4, marginBottom: -2, display: 'block' }}
                aria-hidden="true"
              >
                <line x1="0" y1="2" x2="1000" y2="2"
                  stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <line
                  x1="0" y1="2" x2="1000" y2="2"
                  stroke="#C6F135" strokeWidth="1"
                  strokeDasharray="1000"
                  strokeDashoffset={visible ? 0 : 1000}
                  style={{ transition: 'stroke-dashoffset 2.5s cubic-bezier(0.16,1,0.3,1) 0.5s' }}
                />
              </svg>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 1 }}>
                {steps.map((s, i) => (
                  <div
                    key={i}
                    className={`reveal reveal-d${i + 2} ${visible ? 'visible' : ''}`}
                    style={{
                      padding: '32px 24px 28px',
                      borderTop: '1px solid rgba(255,255,255,0.06)',
                      borderRight: i < 4 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                      position: 'relative',
                    }}
                  >
                    {/* Node */}
                    <div style={{
                      position: 'absolute', top: -6, left: 24,
                      width: 12, height: 12, borderRadius: '50%',
                      background: i === 0 || i === 4 ? '#C6F135' : '#1A1A1A',
                      border: '1px solid rgba(198,241,53,0.6)',
                      boxShadow: i === 0 || i === 4 ? '0 0 12px rgba(198,241,53,0.4)' : 'none',
                    }} />

                    <div className="mono" style={{ fontSize: 9, color: '#C6F135', letterSpacing: '0.2em', marginBottom: 16 }}>
                      {s.num}
                    </div>
                    <h3 className="display" style={{ fontSize: 26, color: '#E8E6DF', marginBottom: 12 }}>
                      {s.title}
                    </h3>
                    <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 12, color: 'rgba(232,230,223,0.45)', lineHeight: 1.65 }}>
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile layout: vertical */}
            <div className="lg:hidden">
              <div style={{ position: 'relative', paddingLeft: 40 }}>
                {/* Vertical line */}
                <div style={{
                  position: 'absolute', left: 10, top: 12, bottom: 12,
                  width: 1,
                  background: visible ? 'linear-gradient(to bottom, #C6F135, rgba(198,241,53,0.1))' : 'transparent',
                  transition: 'background 0.8s ease 0.4s',
                }} />

                {steps.map((s, i) => (
                  <div
                    key={i}
                    className={`reveal reveal-d${i + 2} ${visible ? 'visible' : ''}`}
                    style={{ marginBottom: 40, position: 'relative' }}
                  >
                    {/* Node */}
                    <div style={{
                      position: 'absolute', left: -34, top: 4,
                      width: 10, height: 10, borderRadius: '50%',
                      background: '#C6F135',
                      border: '1px solid rgba(198,241,53,0.6)',
                    }} />
                    <div className="mono" style={{ fontSize: 9, color: '#C6F135', letterSpacing: '0.2em', marginBottom: 8 }}>
                      {s.num}
                    </div>
                    <h3 className="display" style={{ fontSize: 28, color: '#E8E6DF', marginBottom: 8 }}>
                      {s.title}
                    </h3>
                    <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, color: 'rgba(232,230,223,0.5)', lineHeight: 1.65 }}>
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom statement */}
          <div
            className={`reveal reveal-d7 ${visible ? 'visible' : ''}`}
            style={{ marginTop: 64, paddingTop: 40, borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20 }}>
              <div className="display" style={{ fontSize: 'clamp(18px, 2.5vw, 26px)', color: 'rgba(232,230,223,0.6)' }}>
                ONE SOURCING PARTNER.<br />
                <span style={{ color: '#E8E6DF' }}>MULTIPLE MANUFACTURING CAPABILITIES.</span>
              </div>
              <button
                className="btn-ghost"
                onClick={() => document.getElementById('rfq')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>Start an RFQ</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
