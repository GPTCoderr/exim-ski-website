function HeroNetwork() {
  const nodes = [
    { cx: 560, cy: 295, r: 7, label: 'MUMBAI / INDIA', major: true },
    { cx: 195, cy: 128, r: 4, label: 'LONDON' },
    { cx: 710, cy: 160, r: 4, label: 'SINGAPORE' },
    { cx: 75,  cy: 265, r: 4, label: 'NEW YORK' },
    { cx: 672, cy: 390, r: 4, label: 'NAIROBI' },
    { cx: 325, cy: 105, r: 3, label: 'AMSTERDAM' },
    { cx: 500, cy: 195, r: 3, label: 'DUBAI' },
  ];

  const routes = [
    { d: 'M 560 295 Q 380 60 195 128', delay: '0s' },
    { d: 'M 560 295 Q 635 220 710 160', delay: '0.5s' },
    { d: 'M 560 295 Q 320 90 75 265', delay: '1s' },
    { d: 'M 560 295 Q 615 345 672 390', delay: '0.8s' },
    { d: 'M 560 295 Q 440 85 325 105', delay: '1.3s' },
    { d: 'M 560 295 Q 530 235 500 195', delay: '0.3s' },
  ];

  return (
    <svg
      viewBox="0 0 800 520"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.55 }}
      aria-hidden="true"
    >
      <defs>
        {routes.map((r, i) => (
          <path key={i} id={`hr${i}`} d={r.d} />
        ))}
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C6F135" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#C6F135" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Fine grid */}
      <defs>
        <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="800" height="520" fill="url(#grid)" />

      {/* Route lines */}
      {routes.map((r, i) => (
        <path
          key={i} d={r.d} fill="none"
          stroke="#C6F135" strokeWidth="0.75"
          strokeDasharray="3 5" opacity="0.25"
        />
      ))}
      {/* Solid thin route lines */}
      {routes.map((r, i) => (
        <path
          key={`s${i}`} d={r.d} fill="none"
          stroke="rgba(198,241,53,0.12)" strokeWidth="1"
        />
      ))}

      {/* Animated particles along routes */}
      {routes.map((r, i) => (
        <circle key={`p${i}`} r="2" fill="#C6F135" opacity="0.9">
          <animateMotion dur="5s" repeatCount="indefinite" begin={r.delay}>
            <mpath href={`#hr${i}`} />
          </animateMotion>
          <animate attributeName="opacity" values="0;0.9;0.9;0" keyTimes="0;0.05;0.95;1" dur="5s" repeatCount="indefinite" begin={r.delay} />
        </circle>
      ))}

      {/* Secondary nodes */}
      {nodes.slice(1).map((n, i) => (
        <g key={i}>
          <circle cx={n.cx} cy={n.cy} r={n.r + 6} fill="none" stroke="rgba(198,241,53,0.12)" strokeWidth="1" />
          <circle cx={n.cx} cy={n.cy} r={n.r} fill="#111111" stroke="#C6F135" strokeWidth="0.8" opacity="0.7" />
          <text x={n.cx + 8} y={n.cy + 3} fontSize="7" fill="rgba(198,241,53,0.5)" fontFamily="JetBrains Mono" letterSpacing="0.1em">{n.label}</text>
        </g>
      ))}

      {/* Mumbai center node */}
      <circle cx={560} cy={295} r={22} fill="url(#nodeGlow)" />
      <circle cx={560} cy={295} r={14} fill="none" stroke="rgba(198,241,53,0.25)" strokeWidth="1">
        <animate attributeName="r" values="14;22;14" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.25;0;0.25" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx={560} cy={295} r={7} fill="#C6F135" />
      <circle cx={560} cy={295} r={3.5} fill="#080808" />

      {/* Cross-hairs on Mumbai */}
      <line x1={540} y1={295} x2={552} y2={295} stroke="#C6F135" strokeWidth="0.8" opacity="0.6" />
      <line x1={568} y1={295} x2={580} y2={295} stroke="#C6F135" strokeWidth="0.8" opacity="0.6" />
      <line x1={560} y1={275} x2={560} y2={285} stroke="#C6F135" strokeWidth="0.8" opacity="0.6" />
      <line x1={560} y1={305} x2={560} y2={315} stroke="#C6F135" strokeWidth="0.8" opacity="0.6" />

      <text x={572} y={307} fontSize="7.5" fill="#C6F135" fontFamily="JetBrains Mono" letterSpacing="0.12em" opacity="0.8">MUMBAI / INDIA</text>
      <text x={572} y={318} fontSize="6" fill="rgba(198,241,53,0.45)" fontFamily="JetBrains Mono" letterSpacing="0.1em">19.0760° N  72.8777° E</text>
    </svg>
  );
}

export default function Hero() {
  const scrollToCapabilities = () => {
    document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToRFQ = () => {
    document.getElementById('rfq')?.scrollIntoView({ behavior: 'smooth' });
  };

  const floatingLabels = [
    { text: 'SOURCE_001', x: '6%', y: '30%', delay: '1.6s' },
    { text: 'B2B / INDUSTRIAL', x: '7%', y: '70%', delay: '1.8s' },
    { text: 'SPEC → SUPPLY', x: '6%', y: '78%', delay: '2s' },
    { text: 'RFQ_READY', x: '82%', y: '72%', delay: '2.2s' },
  ];

  return (
    <section
      id="hero"
      style={{
        position: 'relative', height: '100svh', minHeight: 600,
        background: '#080808', overflow: 'hidden',
        display: 'flex', alignItems: 'center',
      }}
    >
      {/* Tech grid overlay */}
      <div className="tech-grid" style={{ position: 'absolute', inset: 0, opacity: 0.6 }} />

      {/* SVG network background */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <HeroNetwork />
      </div>

      {/* Left gradient to make text readable */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(105deg, rgba(8,8,8,0.97) 0%, rgba(8,8,8,0.85) 55%, rgba(8,8,8,0.2) 100%)',
      }} />

      {/* Floating technical labels */}
      {floatingLabels.map((l, i) => (
        <div
          key={i}
          className="mono hero-fade"
          style={{
            position: 'absolute', left: l.x, top: l.y,
            fontSize: 8, letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'rgba(198,241,53,0.35)',
            animation: `fadeIn 0.8s ease ${l.delay} forwards, floatY 4s ease-in-out ${parseFloat(l.delay) + 0.8}s infinite`,
          }}
          aria-hidden="true"
        >
          {l.text}
        </div>
      ))}

      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 2, width: '100%', padding: '0 32px', maxWidth: 960, paddingTop: 80 }}>
        {/* Eyebrow */}
        <div
          className="eyebrow hero-fade hero-fade-d1"
          style={{ marginBottom: 28, display: 'flex', alignItems: 'center', gap: 12 }}
        >
          <span style={{ width: 24, height: 1, background: '#C6F135', display: 'inline-block' }} />
          SKI ENTERPRISES LLP  ·  GLOBAL TRADING & INDIA SOURCING
        </div>

        {/* Main headline */}
        <h1
          className="display"
          style={{
            fontSize: 'clamp(72px, 14vw, 148px)',
            color: '#E8E6DF',
            marginBottom: 36,
          }}
        >
          <div className="hero-line">
            <span className="hero-line-inner">INDIA,</span>
          </div>
          <div className="hero-line">
            <span className="hero-line-inner">SOURCED</span>
          </div>
          <div className="hero-line">
            <span className="hero-line-inner" style={{ color: '#C6F135' }}>DIFFERENTLY.</span>
          </div>
        </h1>

        {/* Sub copy */}
        <p
          className="hero-fade hero-fade-d2"
          style={{
            fontFamily: 'Outfit, sans-serif', fontWeight: 300,
            fontSize: 'clamp(14px, 1.8vw, 17px)',
            color: 'rgba(232,230,223,0.65)',
            maxWidth: 460, lineHeight: 1.65,
            marginBottom: 44,
          }}
        >
          Industrial products. Engineering components. Custom sourcing.<br />
          One global supply partner from India.
        </p>

        {/* CTAs */}
        <div className="hero-fade hero-fade-d3" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <button className="btn-primary" onClick={scrollToRFQ}>
            <span>Request an RFQ</span>
            <span>→</span>
          </button>
          <button className="btn-ghost" onClick={scrollToCapabilities}>
            <span>Explore Capabilities</span>
            <span>↓</span>
          </button>
        </div>

        {/* Bottom statement */}
        <div
          className="mono hero-fade hero-fade-d4"
          style={{
            marginTop: 72,
            fontSize: 9, letterSpacing: '0.28em', color: 'rgba(232,230,223,0.3)',
            textTransform: 'uppercase',
          }}
        >
          FROM SPECIFICATION TO SHIPMENT.
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="hero-fade hero-fade-d4"
        style={{
          position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        }}
        aria-hidden="true"
      >
        <div className="mono" style={{ fontSize: 8, letterSpacing: '0.2em', color: 'rgba(232,230,223,0.25)' }}>SCROLL</div>
        <div style={{
          width: 1, height: 40, background: 'linear-gradient(to bottom, rgba(198,241,53,0.4), transparent)',
          animation: 'scrollBounce 2s ease-in-out infinite',
        }} />
      </div>
    </section>
  );
}
