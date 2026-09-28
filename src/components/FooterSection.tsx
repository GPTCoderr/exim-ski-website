const links = [
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Products', href: '#products' },
  { label: 'Sourcing', href: '#process' },
  { label: 'Global Reach', href: '#global' },
  { label: 'Contact', href: '#contact' },
];

export default function FooterSection() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#040404', borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: 'clamp(40px, 6vw, 64px) 32px 28px',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Top row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
          gap: 'clamp(32px, 5vw, 60px)',
          marginBottom: 48,
          paddingBottom: 40,
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          {/* Brand */}
          <div>
            <div className="display" style={{ fontSize: 28, color: '#E8E6DF', lineHeight: 1, letterSpacing: '0.04em', marginBottom: 8 }}>
              SKI<br />ENTERPRISES LLP
            </div>
            <div className="mono" style={{ fontSize: 8, color: 'rgba(198,241,53,0.55)', letterSpacing: '0.22em', marginBottom: 14 }}>
              GLOBAL TRADING & INDIA SOURCING
            </div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 12, color: 'rgba(232,230,223,0.35)', lineHeight: 1.6 }}>
              Mumbai, India
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="mono" style={{ fontSize: 8, color: 'rgba(232,230,223,0.3)', letterSpacing: '0.2em', marginBottom: 18, textTransform: 'uppercase' }}>
              Navigation
            </div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {links.map(l => (
                <button
                  key={l.label}
                  onClick={() => scrollTo(l.href)}
                  style={{
                    background: 'none', border: 'none', cursor: 'none', padding: 0,
                    textAlign: 'left', fontFamily: 'Outfit, sans-serif', fontSize: 13,
                    color: 'rgba(232,230,223,0.45)', transition: 'color 0.25s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#E8E6DF')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(232,230,223,0.45)')}
                >
                  {l.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <div className="mono" style={{ fontSize: 8, color: 'rgba(232,230,223,0.3)', letterSpacing: '0.2em', marginBottom: 18, textTransform: 'uppercase' }}>
              Contact
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a
                href="mailto:skienterprisesllp@gmail.com"
                style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, color: 'rgba(232,230,223,0.45)', textDecoration: 'none', cursor: 'none', transition: 'color 0.25s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#C6F135')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(232,230,223,0.45)')}
              >
                skienterprisesllp@gmail.com
              </a>
              <a
                href="tel:+917715075207"
                style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, color: 'rgba(232,230,223,0.45)', textDecoration: 'none', cursor: 'none', transition: 'color 0.25s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#C6F135')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(232,230,223,0.45)')}
              >
                +91 7715075207
              </a>
              <a
                href="https://www.skienterprisesllp.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, color: 'rgba(232,230,223,0.45)', textDecoration: 'none', cursor: 'none', transition: 'color 0.25s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#C6F135')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(232,230,223,0.45)')}
              >
                www.skienterprisesllp.com
              </a>
            </div>
          </div>

          {/* RFQ CTA */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
            <div className="mono" style={{ fontSize: 8, color: 'rgba(232,230,223,0.3)', letterSpacing: '0.2em', marginBottom: 18, textTransform: 'uppercase' }}>
              Ready to source?
            </div>
            <button
              className="btn-primary"
              onClick={() => scrollTo('#rfq')}
              style={{ alignSelf: 'flex-start' }}
            >
              <span>Start an RFQ</span>
              <span>→</span>
            </button>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div className="mono" style={{ fontSize: 9, color: 'rgba(232,230,223,0.2)', letterSpacing: '0.15em' }}>
            © 2026 SKI Enterprises LLP. All rights reserved.
          </div>
          <div className="mono" style={{ fontSize: 9, color: 'rgba(232,230,223,0.2)', letterSpacing: '0.12em' }}>
            GLOBAL TRADING & INDIA SOURCING · MUMBAI, INDIA
          </div>
        </div>
      </div>
    </footer>
  );
}
