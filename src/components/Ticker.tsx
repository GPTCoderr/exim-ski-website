const items = [
  'INDUSTRIAL SOURCING', 'ENGINEERING COMPONENTS', 'RUBBER & ELASTOMERS',
  'FASTENERS & HARDWARE', 'CABLE COMPONENTS', 'CUSTOM MANUFACTURING',
  'INDIA TO WORLD', 'SPECIFICATION FIRST', 'MERCHANT EXPORT',
  'B2B SUPPLY', 'DRAWING-BASED SOURCING', 'EXPORT READY',
];

export default function Ticker() {
  const repeated = [...items, ...items];
  return (
    <div
      style={{
        background: '#C6F135', overflow: 'hidden', padding: '12px 0',
        borderTop: '1px solid rgba(0,0,0,0.1)', borderBottom: '1px solid rgba(0,0,0,0.1)',
      }}
    >
      <div className="ticker-track">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="display"
            style={{
              fontSize: 13, letterSpacing: '0.22em', color: '#080808',
              paddingRight: 48, display: 'inline-block',
            }}
          >
            {item}
            <span style={{ marginLeft: 48, color: 'rgba(8,8,8,0.3)' }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
