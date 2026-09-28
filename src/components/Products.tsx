import { useRef, useState } from 'react';
import { useReveal } from '../hooks/useReveal';

const categories = [
  {
    num: '01',
    title: 'RUBBER &\nELASTOMERS',
    short: 'Sealing & Profiles',
    items: ['Gaskets', 'O-rings', 'Seals', 'Washers', 'Profiles', 'Custom molded components'],
    svgPath: (
      <svg viewBox="0 0 120 120" style={{ width: 90, height: 90 }}>
        <circle cx="60" cy="60" r="42" fill="none" stroke="#C6F135" strokeWidth="1.5" strokeDasharray="8 4" />
        <circle cx="60" cy="60" r="28" fill="none" stroke="rgba(198,241,53,0.4)" strokeWidth="1" />
        <circle cx="60" cy="60" r="10" fill="none" stroke="rgba(198,241,53,0.2)" strokeWidth="0.8" />
        <circle cx="60" cy="60" r="4" fill="#C6F135" opacity="0.6" />
        {[0,60,120,180,240,300].map(a => (
          <line key={a}
            x1={60 + 28*Math.cos(a*Math.PI/180)} y1={60 + 28*Math.sin(a*Math.PI/180)}
            x2={60 + 42*Math.cos(a*Math.PI/180)} y2={60 + 42*Math.sin(a*Math.PI/180)}
            stroke="rgba(198,241,53,0.5)" strokeWidth="0.8" />
        ))}
      </svg>
    ),
  },
  {
    num: '02',
    title: 'FASTENERS &\nHARDWARE',
    short: 'Fixing & Assembly',
    items: ['Bolts', 'Screws', 'Nuts', 'Washers', 'Studs', 'Custom fasteners'],
    svgPath: (
      <svg viewBox="0 0 120 120" style={{ width: 90, height: 90 }}>
        {/* Hexagonal head */}
        <polygon points="60,12 85,26 85,54 60,68 35,54 35,26" fill="none" stroke="#C6F135" strokeWidth="1.5" />
        <polygon points="60,18 80,30 80,50 60,62 40,50 40,30" fill="none" stroke="rgba(198,241,53,0.3)" strokeWidth="0.8" />
        {/* Shaft */}
        <rect x="53" y="68" width="14" height="42" fill="none" stroke="rgba(198,241,53,0.6)" strokeWidth="1.2" />
        {/* Thread lines */}
        {[72,78,84,90,96,102].map(y => (
          <line key={y} x1="53" y1={y} x2="67" y2={y} stroke="rgba(198,241,53,0.25)" strokeWidth="0.8" />
        ))}
        <circle cx="60" cy="40" r="6" fill="none" stroke="rgba(198,241,53,0.4)" strokeWidth="0.8" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'ELECTRICAL &\nCABLE',
    short: 'Wiring & Connectivity',
    items: ['Cable glands', 'Brass components', 'Industrial electrical', 'Connectors', 'Terminals', 'Conduit fittings'],
    svgPath: (
      <svg viewBox="0 0 120 120" style={{ width: 90, height: 90 }}>
        {/* Cable gland body */}
        <rect x="40" y="35" width="40" height="50" rx="4" fill="none" stroke="#C6F135" strokeWidth="1.5" />
        <rect x="34" y="50" width="52" height="20" rx="2" fill="none" stroke="rgba(198,241,53,0.5)" strokeWidth="1" />
        {/* Thread indication */}
        {[52,56,60,64,68].map(y => (
          <line key={y} x1="34" y1={y} x2="86" y2={y} stroke="rgba(198,241,53,0.2)" strokeWidth="0.5" />
        ))}
        <circle cx="60" cy="60" r="10" fill="none" stroke="rgba(198,241,53,0.6)" strokeWidth="1" />
        <circle cx="60" cy="60" r="4" fill="#C6F135" opacity="0.5" />
        {/* Cable ends */}
        <rect x="52" y="20" width="16" height="15" fill="none" stroke="rgba(198,241,53,0.4)" strokeWidth="1" />
        <rect x="52" y="85" width="16" height="15" fill="none" stroke="rgba(198,241,53,0.4)" strokeWidth="1" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'ENGINEERING\nCOMPONENTS',
    short: 'Precision & OEM',
    items: ['Machined components', 'Fabricated parts', 'OEM components', 'Drawing-based products', 'Turned parts', 'CNC parts'],
    svgPath: (
      <svg viewBox="0 0 120 120" style={{ width: 90, height: 90 }}>
        {/* L-bracket profile */}
        <path d="M 25 95 L 25 25 L 50 25" fill="none" stroke="#C6F135" strokeWidth="1.8" strokeLinecap="square" />
        <path d="M 25 95 L 95 95" fill="none" stroke="#C6F135" strokeWidth="1.8" strokeLinecap="square" />
        {/* Inner relief */}
        <path d="M 33 90 L 33 33 L 50 33" fill="none" stroke="rgba(198,241,53,0.4)" strokeWidth="0.8" strokeLinecap="square" />
        <path d="M 33 90 L 90 90" fill="none" stroke="rgba(198,241,53,0.4)" strokeWidth="0.8" strokeLinecap="square" />
        {/* Dimension lines */}
        <line x1="50" y1="18" x2="25" y2="18" stroke="rgba(198,241,53,0.35)" strokeWidth="0.6" />
        <line x1="25" y1="15" x2="25" y2="21" stroke="rgba(198,241,53,0.35)" strokeWidth="0.6" />
        <line x1="50" y1="15" x2="50" y2="21" stroke="rgba(198,241,53,0.35)" strokeWidth="0.6" />
        {/* Holes */}
        <circle cx="38" cy="60" r="5" fill="none" stroke="rgba(198,241,53,0.5)" strokeWidth="0.8" />
        <circle cx="65" cy="82" r="5" fill="none" stroke="rgba(198,241,53,0.5)" strokeWidth="0.8" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'INDUSTRIAL\n& MRO',
    short: 'Maintenance & Supply',
    items: ['Maintenance components', 'Replacement parts', 'Industrial consumables', 'Bearings', 'Seals', 'Filters'],
    svgPath: (
      <svg viewBox="0 0 120 120" style={{ width: 90, height: 90 }}>
        {/* Gear outer */}
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i / 12) * 2 * Math.PI;
          const r1 = 44, r2 = 38, w = 0.22;
          const x1 = 60 + r1 * Math.cos(a - w); const y1 = 60 + r1 * Math.sin(a - w);
          const x2 = 60 + r1 * Math.cos(a + w); const y2 = 60 + r1 * Math.sin(a + w);
          const x3 = 60 + r2 * Math.cos(a + w + 0.18); const y3 = 60 + r2 * Math.sin(a + w + 0.18);
          const x4 = 60 + r2 * Math.cos(a - w - 0.18); const y4 = 60 + r2 * Math.sin(a - w - 0.18);
          return <path key={i} d={`M${x1},${y1} L${x2},${y2} L${x3},${y3} L${x4},${y4} Z`}
            fill="none" stroke="#C6F135" strokeWidth="1" opacity="0.8" />;
        })}
        <circle cx="60" cy="60" r="28" fill="none" stroke="#C6F135" strokeWidth="0.8" />
        <circle cx="60" cy="60" r="16" fill="none" stroke="rgba(198,241,53,0.4)" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="60" cy="60" r="6" fill="#C6F135" opacity="0.5" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'CUSTOM\nSOURCING',
    short: 'Drawing to Production',
    items: ['Drawing-based products', 'Sample-based sourcing', 'Specification matching', 'MOQ flexible', 'Custom dimensions', 'Material selection'],
    svgPath: (
      <svg viewBox="0 0 120 120" style={{ width: 90, height: 90 }}>
        {/* Drafting compass / coordinate cross */}
        <line x1="60" y1="15" x2="60" y2="105" stroke="rgba(198,241,53,0.2)" strokeWidth="0.8" />
        <line x1="15" y1="60" x2="105" y2="60" stroke="rgba(198,241,53,0.2)" strokeWidth="0.8" />
        {/* Grid */}
        {[30,45,75,90].map(v => (
          <g key={v}>
            <line x1={v} y1="15" x2={v} y2="105" stroke="rgba(198,241,53,0.08)" strokeWidth="0.5" />
            <line x1="15" y1={v} x2="105" y2={v} stroke="rgba(198,241,53,0.08)" strokeWidth="0.5" />
          </g>
        ))}
        {/* Target circles */}
        <circle cx="60" cy="60" r="35" fill="none" stroke="rgba(198,241,53,0.3)" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="60" cy="60" r="20" fill="none" stroke="rgba(198,241,53,0.5)" strokeWidth="1" />
        <circle cx="60" cy="60" r="5" fill="#C6F135" opacity="0.7" />
        {/* Corner marks */}
        <path d="M 22 22 L 22 32 M 22 22 L 32 22" stroke="#C6F135" strokeWidth="1" opacity="0.6" />
        <path d="M 98 22 L 98 32 M 98 22 L 88 22" stroke="#C6F135" strokeWidth="1" opacity="0.6" />
        <path d="M 22 98 L 22 88 M 22 98 L 32 98" stroke="#C6F135" strokeWidth="1" opacity="0.6" />
        <path d="M 98 98 L 98 88 M 98 98 L 88 98" stroke="#C6F135" strokeWidth="1" opacity="0.6" />
      </svg>
    ),
  },
];

export default function Products() {
  const { ref: headRef, visible: headVisible } = useReveal(0.1);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Drag-to-scroll
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (containerRef.current?.offsetLeft || 0);
    scrollLeft.current = containerRef.current?.scrollLeft || 0;
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    containerRef.current.scrollLeft = scrollLeft.current - (x - startX.current);
  };
  const stopDrag = () => { isDragging.current = false; };

  return (
    <section
      id="products"
      style={{
        background: '#080808', paddingTop: 'clamp(80px, 10vw, 140px)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div style={{ padding: '0 32px', maxWidth: 1280, margin: '0 auto 48px' }}>
        <div ref={headRef as React.RefObject<HTMLDivElement>}>
          <div className={`reveal ${headVisible ? 'visible' : ''}`}>
            <div className="eyebrow" style={{ marginBottom: 20 }}>WHAT WE SOURCE</div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20 }}>
            <h2
              className={`display reveal reveal-d1 ${headVisible ? 'visible' : ''}`}
              style={{ fontSize: 'clamp(32px, 5vw, 60px)', color: '#E8E6DF', maxWidth: 600 }}
            >
              BUILT AROUND YOUR<br />REQUIREMENT.
            </h2>
            <p
              className={`reveal reveal-d2 ${headVisible ? 'visible' : ''}`}
              style={{
                fontFamily: 'Outfit, sans-serif', fontWeight: 300, fontSize: 13,
                color: 'rgba(232,230,223,0.5)', maxWidth: 340, lineHeight: 1.65,
              }}
            >
              Sourcing driven by specification rather than a fixed catalogue.
              Each category below represents active sourcing capability.
            </p>
          </div>
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={containerRef}
        className="drag-scroll"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        style={{
          display: 'flex', gap: 0,
          overflowX: 'auto', overflowY: 'visible',
          paddingBottom: 'clamp(80px, 10vw, 140px)',
          paddingLeft: 32,
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          cursor: 'grab',
        }}
      >
        {categories.map((cat, i) => (
          <div
            key={i}
            className="prod-card"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              minWidth: 'clamp(280px, 30vw, 360px)',
              padding: '40px 36px',
              background: hoveredIndex === i ? 'rgba(198,241,53,0.03)' : 'transparent',
              borderRight: i < categories.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              borderLeft: i === 0 ? 'none' : undefined,
              borderTop: '1px solid rgba(255,255,255,0.07)',
              transition: 'background 0.4s',
              cursor: 'none',
            }}
          >
            {/* Number */}
            <div className="mono" style={{ fontSize: 9, color: '#C6F135', letterSpacing: '0.2em', marginBottom: 24 }}>
              {cat.num}
            </div>

            {/* SVG Drawing */}
            <div className="prod-svg" style={{ marginBottom: 24 }}>
              {cat.svgPath}
            </div>

            {/* Title */}
            <h3
              className="display"
              style={{
                fontSize: 'clamp(24px, 2.8vw, 34px)',
                color: hoveredIndex === i ? '#E8E6DF' : 'rgba(232,230,223,0.85)',
                marginBottom: 8, whiteSpace: 'pre-line',
                transition: 'color 0.3s',
              }}
            >
              {cat.title}
            </h3>

            <div className="mono" style={{ fontSize: 9, color: 'rgba(198,241,53,0.5)', letterSpacing: '0.18em', marginBottom: 20 }}>
              {cat.short}
            </div>

            {/* Product items - reveal on hover */}
            <div className="prod-items">
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 16 }}>
                {cat.items.map((item, j) => (
                  <div
                    key={j}
                    style={{
                      fontFamily: 'Outfit, sans-serif', fontSize: 13,
                      color: 'rgba(232,230,223,0.5)',
                      padding: '5px 0',
                      borderBottom: '1px solid rgba(255,255,255,0.04)',
                      display: 'flex', alignItems: 'center', gap: 8,
                      animation: hoveredIndex === i ? `fadeIn 0.3s ease ${j * 0.05}s both` : 'none',
                    }}
                  >
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(198,241,53,0.4)', display: 'inline-block', flexShrink: 0 }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Scroll hint */}
        <div style={{
          minWidth: 120, display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '0 24px',
        }}>
          <div className="mono" style={{
            fontSize: 8, letterSpacing: '0.2em', color: 'rgba(232,230,223,0.2)',
            writingMode: 'vertical-rl', textTransform: 'uppercase',
          }}>
            DRAG TO EXPLORE →
          </div>
        </div>
      </div>
    </section>
  );
}
