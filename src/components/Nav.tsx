import { useEffect, useState } from 'react';

const links = [
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Products', href: '#products' },
  { label: 'How We Source', href: '#process' },
  { label: 'Global Reach', href: '#global' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between"
        style={{
          padding: scrolled ? '14px 32px' : '22px 32px',
          background: scrolled ? 'rgba(8,8,8,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        {/* Logo */}
        <a href="#" style={{ cursor: 'none', textDecoration: 'none' }}>
          <div className="display" style={{ color: '#E8E6DF', lineHeight: 1 }}>
            <div style={{ fontSize: 18, letterSpacing: '0.06em' }}>SKI</div>
            <div style={{ fontSize: 9, letterSpacing: '0.22em', fontWeight: 600, color: '#888', marginTop: 1 }}>ENTERPRISES LLP</div>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center" style={{ gap: 36 }}>
          {links.map(l => (
            <button
              key={l.label}
              onClick={() => handleLink(l.href)}
              style={{
                background: 'none', border: 'none', cursor: 'none',
                fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 500,
                letterSpacing: '0.04em', color: 'rgba(232,230,223,0.65)',
                transition: 'color 0.25s', padding: 0,
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#E8E6DF')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(232,230,223,0.65)')}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center" style={{ gap: 16 }}>
          <button
            className="btn-primary hidden lg:inline-flex"
            onClick={() => handleLink('#rfq')}
          >
            <span>Request an RFQ</span>
            <span>→</span>
          </button>
          <button
            className="lg:hidden"
            onClick={() => setOpen(v => !v)}
            style={{
              background: 'none', border: 'none', cursor: 'none',
              display: 'flex', flexDirection: 'column', gap: 5, padding: 4,
            }}
            aria-label="Toggle menu"
          >
            <span style={{ width: 22, height: 1.5, background: open ? '#C6F135' : '#E8E6DF', display: 'block', transition: 'all 0.3s', transform: open ? 'rotate(45deg) translate(4.5px, 4.5px)' : 'none' }} />
            <span style={{ width: 22, height: 1.5, background: open ? '#C6F135' : '#E8E6DF', display: 'block', transition: 'all 0.3s', opacity: open ? 0 : 1 }} />
            <span style={{ width: 22, height: 1.5, background: open ? '#C6F135' : '#E8E6DF', display: 'block', transition: 'all 0.3s', transform: open ? 'rotate(-45deg) translate(4.5px, -4.5px)' : 'none' }} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`mobile-nav-overlay ${open ? 'open' : ''}`}>
        <div className="flex items-center justify-between" style={{ marginBottom: 48 }}>
          <div className="display" style={{ color: '#E8E6DF', lineHeight: 1 }}>
            <div style={{ fontSize: 20, letterSpacing: '0.06em' }}>SKI</div>
            <div style={{ fontSize: 9, letterSpacing: '0.22em', fontWeight: 600, color: '#888', marginTop: 1 }}>ENTERPRISES LLP</div>
          </div>
          <button
            onClick={() => setOpen(false)}
            style={{ background: 'none', border: 'none', cursor: 'none', color: '#888', fontSize: 22 }}
          >✕</button>
        </div>
        <nav style={{ flex: 1 }}>
          {links.map((l, i) => (
            <button
              key={l.label}
              onClick={() => handleLink(l.href)}
              style={{
                display: 'block', width: '100%', textAlign: 'left',
                background: 'none', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.07)',
                cursor: 'none', padding: '22px 0',
                fontFamily: 'Barlow Condensed, sans-serif',
                fontWeight: 700, fontSize: 36, letterSpacing: '0.04em',
                textTransform: 'uppercase', color: '#E8E6DF',
                opacity: 0, animation: `fadeIn 0.5s ease ${0.1 + i * 0.08}s forwards`,
              }}
            >
              {l.label}
            </button>
          ))}
        </nav>
        <button
          className="btn-primary"
          onClick={() => handleLink('#rfq')}
          style={{ marginTop: 32, width: '100%', justifyContent: 'center' }}
        >
          <span>Request an RFQ</span>
          <span>→</span>
        </button>
      </div>
    </>
  );
}
