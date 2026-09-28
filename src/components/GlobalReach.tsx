import { useReveal } from '../hooks/useReveal';

const markets = [
  { label: 'MUMBAI', sub: 'INDIA / ORIGIN', cx: 590, cy: 248, major: true },
  { label: 'DUBAI', sub: 'UAE', cx: 535, cy: 210, major: false },
  { label: 'RIYADH', sub: 'SAUDI ARABIA', cx: 505, cy: 222, major: false },
  { label: 'NAIROBI', sub: 'KENYA', cx: 488, cy: 315, major: false },
  { label: 'DAR ES SALAAM', sub: 'TANZANIA', cx: 498, cy: 340, major: false },
  { label: 'KAMPALA', sub: 'UGANDA', cx: 466, cy: 308, major: false },
  { label: 'LONDON', sub: 'UNITED KINGDOM', cx: 295, cy: 130, major: false },
  { label: 'AMSTERDAM', sub: 'EUROPE', cx: 335, cy: 118, major: false },
  { label: 'NEW YORK', sub: 'USA', cx: 105, cy: 175, major: false },
];

const routes = [
  { from: { cx: 590, cy: 248 }, to: { cx: 535, cy: 210 }, ctrl: { cx: 562, cy: 218 }, delay: '0s' },
  { from: { cx: 590, cy: 248 }, to: { cx: 505, cy: 222 }, ctrl: { cx: 548, cy: 215 }, delay: '0.4s' },
  { from: { cx: 590, cy: 248 }, to: { cx: 488, cy: 315 }, ctrl: { cx: 535, cy: 285 }, delay: '0.8s' },
  { from: { cx: 590, cy: 248 }, to: { cx: 498, cy: 340 }, ctrl: { cx: 540, cy: 300 }, delay: '1.1s' },
  { from: { cx: 590, cy: 248 }, to: { cx: 466, cy: 308 }, ctrl: { cx: 525, cy: 280 }, delay: '1.4s' },
  { from: { cx: 590, cy: 248 }, to: { cx: 295, cy: 130 }, ctrl: { cx: 440, cy: 60 }, delay: '1.7s' },
  { from: { cx: 590, cy: 248 }, to: { cx: 335, cy: 118 }, ctrl: { cx: 455, cy: 52 }, delay: '2s' },
  { from: { cx: 590, cy: 248 }, to: { cx: 105, cy: 175 }, ctrl: { cx: 350, cy: 40 }, delay: '2.3s' },
];

function WorldMap({ visible }: { visible: boolean }) {
  return (
    <svg
      viewBox="0 0 780 450"
      style={{ width: '100%', height: 'auto', maxHeight: 420 }}
      aria-label="Abstract world sourcing map centered on Mumbai, India"
    >
      <defs>
        {routes.map((r, i) => {
          const d = `M ${r.from.cx} ${r.from.cy} Q ${r.ctrl.cx} ${r.ctrl.cy} ${r.to.cx} ${r.to.cy}`;
          return <path key={i} id={`rt${i}`} d={d} />;
        })}
      </defs>

      {/* Fine dot grid */}
      <defs>
        <pattern id="dotgrid" width="32" height="32" patternUnits="userSpaceOnUse">
          <circle cx="16" cy="16" r="0.8" fill="rgba(232,230,223,0.06)" />
        </pattern>
      </defs>
      <rect width="780" height="450" fill="url(#dotgrid)" />

      {/* Coordinate lines (parallels/meridians – abstract) */}
      {[100, 175, 250, 325, 400].map(y => (
        <line key={y} x1="0" y1={y} x2="780" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
      ))}
      {[80, 200, 320, 440, 560, 680].map(x => (
        <line key={x} x1={x} y1="0" x2={x} y2="450" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
      ))}

      {/* Route paths (static faint) */}
      {routes.map((r, i) => (
        <path
          key={i}
          d={`M ${r.from.cx} ${r.from.cy} Q ${r.ctrl.cx} ${r.ctrl.cy} ${r.to.cx} ${r.to.cy}`}
          fill="none"
          stroke="rgba(198,241,53,0.08)"
          strokeWidth="1"
        />
      ))}

      {/* Animated route lines */}
      {routes.map((r, i) => {
        const d = `M ${r.from.cx} ${r.from.cy} Q ${r.ctrl.cx} ${r.ctrl.cy} ${r.to.cx} ${r.to.cy}`;
        return (
          <path
            key={`anim-${i}`}
            d={d}
            fill="none"
            stroke="#C6F135"
            strokeWidth="0.8"
            strokeDasharray="500"
            strokeDashoffset={visible ? 0 : 500}
            style={{
              transition: `stroke-dashoffset 2s cubic-bezier(0.16,1,0.3,1) ${parseFloat(r.delay) + 0.4}s`,
              opacity: 0.5,
            }}
          />
        );
      })}

      {/* Animated particles */}
      {visible && routes.map((r, i) => (
        <circle key={`p-${i}`} r="2.2" fill="#C6F135">
          <animateMotion dur="5s" repeatCount="indefinite" begin={`${parseFloat(r.delay) + 0.8}s`}>
            <mpath href={`#rt${i}`} />
          </animateMotion>
          <animate attributeName="opacity" values="0;0.9;0.9;0" keyTimes="0;0.05;0.9;1" dur="5s" repeatCount="indefinite" begin={`${parseFloat(r.delay) + 0.8}s`} />
        </circle>
      ))}

      {/* Market nodes */}
      {markets.map((m, i) => (
        <g key={i}>
          {m.major ? (
            <>
              <circle cx={m.cx} cy={m.cy} r={22} fill="rgba(198,241,53,0.06)" />
              <circle cx={m.cx} cy={m.cy} r={12} fill="none" stroke="rgba(198,241,53,0.3)" strokeWidth="1">
                <animate attributeName="r" values="12;20;12" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx={m.cx} cy={m.cy} r={7} fill="#C6F135" />
              <circle cx={m.cx} cy={m.cy} r={3} fill="#080808" />
              {/* Cross-hairs */}
              <line x1={m.cx - 18} y1={m.cy} x2={m.cx - 10} y2={m.cy} stroke="#C6F135" strokeWidth="0.7" opacity="0.6" />
              <line x1={m.cx + 10} y1={m.cy} x2={m.cx + 18} y2={m.cy} stroke="#C6F135" strokeWidth="0.7" opacity="0.6" />
              <line x1={m.cx} y1={m.cy - 18} x2={m.cx} y2={m.cy - 10} stroke="#C6F135" strokeWidth="0.7" opacity="0.6" />
              <line x1={m.cx} y1={m.cy + 10} x2={m.cx} y2={m.cy + 18} stroke="#C6F135" strokeWidth="0.7" opacity="0.6" />
              <text x={m.cx + 14} y={m.cy + 4} fontSize="8" fill="#C6F135" fontFamily="JetBrains Mono" letterSpacing="0.12em">{m.label}</text>
              <text x={m.cx + 14} y={m.cy + 15} fontSize="6.5" fill="rgba(198,241,53,0.5)" fontFamily="JetBrains Mono" letterSpacing="0.1em">{m.sub}</text>
            </>
          ) : (
            <>
              <circle cx={m.cx} cy={m.cy} r={8} fill="none" stroke="rgba(198,241,53,0.2)" strokeWidth="0.7" />
              <circle cx={m.cx} cy={m.cy} r={3.5} fill="#1A1A1A" stroke="#C6F135" strokeWidth="0.8" opacity="0.7" />
              <text
                x={m.cx + (m.cx > 400 ? 8 : -8)}
                y={m.cy - 6}
                fontSize="6.5" fill="rgba(232,230,223,0.55)"
                fontFamily="JetBrains Mono" letterSpacing="0.1em"
                textAnchor={m.cx > 400 ? 'start' : 'end'}
              >{m.label}</text>
              <text
                x={m.cx + (m.cx > 400 ? 8 : -8)}
                y={m.cy + 5}
                fontSize="5.5" fill="rgba(198,241,53,0.3)"
                fontFamily="JetBrains Mono" letterSpacing="0.1em"
                textAnchor={m.cx > 400 ? 'start' : 'end'}
              >{m.sub}</text>
            </>
          )}
        </g>
      ))}
    </svg>
  );
}

export default function GlobalReach() {
  const { ref, visible } = useReveal(0.06);

  return (
    <section
      id="global"
      style={{
        background: '#070707', padding: 'clamp(80px, 10vw, 140px) 32px',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div ref={ref as React.RefObject<HTMLDivElement>} style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: 'clamp(40px, 6vw, 64px)' }}>
          <div className={`reveal ${visible ? 'visible' : ''}`}>
            <div className="eyebrow" style={{ marginBottom: 20 }}>GLOBAL SOURCING REACH</div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
            <h2
              className={`display reveal reveal-d1 ${visible ? 'visible' : ''}`}
              style={{ fontSize: 'clamp(34px, 5.5vw, 66px)', color: '#E8E6DF' }}
            >
              SOURCED IN INDIA.<br />
              <span style={{ color: '#C6F135' }}>DELIVERED TO<br />THE WORLD.</span>
            </h2>
            <div className={`reveal reveal-d2 ${visible ? 'visible' : ''}`} style={{ maxWidth: 300 }}>
              <div className="mono" style={{ fontSize: 9, color: 'rgba(198,241,53,0.6)', letterSpacing: '0.18em', marginBottom: 10, textTransform: 'uppercase' }}>
                MARKETS WE ARE BUILDING TOWARD
              </div>
              <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, color: 'rgba(232,230,223,0.45)', lineHeight: 1.65 }}>
                Wherever your requirement is, our sourcing starts in India.
              </p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div
          className={`reveal reveal-d3 ${visible ? 'visible' : ''}`}
          style={{
            background: '#0A0A0A',
            border: '1px solid rgba(255,255,255,0.06)',
            padding: 'clamp(16px, 3vw, 32px)',
            position: 'relative', overflow: 'hidden',
          }}
        >
          <WorldMap visible={visible} />

          {/* Corner decorations */}
          {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map(pos => (
            <div
              key={pos}
              style={{
                position: 'absolute',
                top: pos.includes('top') ? 12 : undefined,
                bottom: pos.includes('bottom') ? 12 : undefined,
                left: pos.includes('left') ? 12 : undefined,
                right: pos.includes('right') ? 12 : undefined,
                width: 16, height: 16,
                borderTop: pos.includes('top') ? '1px solid rgba(198,241,53,0.3)' : 'none',
                borderBottom: pos.includes('bottom') ? '1px solid rgba(198,241,53,0.3)' : 'none',
                borderLeft: pos.includes('left') ? '1px solid rgba(198,241,53,0.3)' : 'none',
                borderRight: pos.includes('right') ? '1px solid rgba(198,241,53,0.3)' : 'none',
              }}
            />
          ))}
        </div>

        {/* Market list */}
        <div
          className={`reveal reveal-d4 ${visible ? 'visible' : ''}`}
          style={{
            marginTop: 32, paddingTop: 24,
            display: 'flex', flexWrap: 'wrap', gap: '12px 32px',
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {markets.filter(m => !m.major).map((m, i) => (
            <div key={i} className="mono" style={{ fontSize: 9, color: 'rgba(232,230,223,0.4)', letterSpacing: '0.18em' }}>
              {m.sub.split('/')[0].trim()} / {m.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
