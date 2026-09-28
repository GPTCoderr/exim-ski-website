import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

type FormState = {
  name: string;
  company: string;
  email: string;
  country: string;
  product: string;
  quantity: string;
  specification: string;
  message: string;
};

const INITIAL: FormState = {
  name: '', company: '', email: '', country: '',
  product: '', quantity: '', specification: '', message: '',
};

export default function RFQForm() {
  const { ref, visible } = useReveal(0.06);
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const message = [
        `Name: ${form.name}`,
        `Company: ${form.company}`,
        `Business Email: ${form.email}`,
        `Country: ${form.country}`,
        `Product / Requirement: ${form.product}`,
        `Quantity / Estimated Volume: ${form.quantity}`,
        `Specification / Part Number / Reference: ${form.specification}`,
        form.message ? `Additional Notes: ${form.message}` : '',
      ]
        .filter(Boolean)
        .join('\n');

      const whatsappUrl = `https://wa.me/917715075207?text=${encodeURIComponent(message)}`;

      if (typeof window !== 'undefined') {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      }

      setStatus('success');
      setForm(INITIAL);
    } catch {
      setStatus('error');
    }
  };

  const fields: { key: keyof FormState; label: string; required?: boolean; type?: string; full?: boolean }[] = [
    { key: 'name', label: 'FULL NAME', required: true },
    { key: 'company', label: 'COMPANY / ORGANISATION', required: true },
    { key: 'email', label: 'BUSINESS EMAIL', required: true, type: 'email' },
    { key: 'country', label: 'COUNTRY', required: true },
    { key: 'product', label: 'PRODUCT / REQUIREMENT', required: true, full: true },
  ];

  return (
    <section
      id="rfq"
      style={{
        background: '#060606', padding: 'clamp(80px, 10vw, 140px) 32px',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Background decorative grid */}
      <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
      {/* Right side large text */}
      <div
        className="display"
        aria-hidden="true"
        style={{
          position: 'absolute', right: -20, top: '50%', transform: 'translateY(-50%) rotate(90deg)',
          fontSize: 'clamp(60px, 10vw, 120px)', color: 'rgba(255,255,255,0.025)',
          letterSpacing: '0.1em', lineHeight: 1, pointerEvents: 'none',
          transformOrigin: 'right center',
          whiteSpace: 'nowrap',
        }}
      >
        RFQ_FORM
      </div>

      <div ref={ref as React.RefObject<HTMLDivElement>} style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))', gap: 'clamp(48px, 8vw, 120px)', alignItems: 'start' }}>
          {/* Left: Headline */}
          <div>
            <div className={`reveal ${visible ? 'visible' : ''}`}>
              <div className="eyebrow" style={{ marginBottom: 20 }}>START A CONVERSATION</div>
            </div>
            <h2
              className={`display reveal reveal-d1 ${visible ? 'visible' : ''}`}
              style={{ fontSize: 'clamp(42px, 6.5vw, 84px)', color: '#E8E6DF', marginBottom: 28 }}
            >
              WHAT ARE<br />YOU LOOKING<br />
              <span style={{ color: '#C6F135' }}>FOR?</span>
            </h2>
            <p
              className={`reveal reveal-d2 ${visible ? 'visible' : ''}`}
              style={{
                fontFamily: 'Outfit, sans-serif', fontWeight: 300, fontSize: 15,
                color: 'rgba(232,230,223,0.5)', lineHeight: 1.7, maxWidth: 360,
                marginBottom: 40,
              }}
            >
              Send us the requirement.<br />
              We'll find the Indian sourcing route.
            </p>

            {/* Process mini-diagram */}
            <div className={`reveal reveal-d3 ${visible ? 'visible' : ''}`}>
              {['Specification received', 'Supplier identified', 'Quotation issued', 'Production coordinated'].map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, marginBottom: 14, alignItems: 'center' }}>
                  <div style={{
                    width: 20, height: 20, borderRadius: '50%', flexShrink: 0,
                    background: 'rgba(198,241,53,0.08)', border: '1px solid rgba(198,241,53,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <div className="mono" style={{ fontSize: 7, color: '#C6F135' }}>0{i + 1}</div>
                  </div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, color: 'rgba(232,230,223,0.4)' }}>{step}</div>
                </div>
              ))}
            </div>

            <div className={`reveal reveal-d4 ${visible ? 'visible' : ''}`} style={{ marginTop: 36 }}>
              <div className="mono" style={{ fontSize: 9, color: 'rgba(232,230,223,0.25)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                NO COMMITMENT. START WITH ONE REQUIREMENT.
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className={`reveal reveal-d2 ${visible ? 'visible' : ''}`}>
            {status === 'success' ? (
              <div style={{
                padding: '48px 40px', border: '1px solid rgba(198,241,53,0.25)',
                background: 'rgba(198,241,53,0.04)',
              }}>
                <div className="mono" style={{ fontSize: 9, color: '#C6F135', letterSpacing: '0.2em', marginBottom: 16 }}>
                  REQUIREMENT RECEIVED
                </div>
                <h3 className="display" style={{ fontSize: 36, color: '#E8E6DF', marginBottom: 16 }}>
                  THANK YOU.
                </h3>
                <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 14, color: 'rgba(232,230,223,0.55)', lineHeight: 1.65 }}>
                  We have received your requirement and will revert shortly with a sourcing update.
                </p>
                <button
                  className="btn-ghost"
                  style={{ marginTop: 32 }}
                  onClick={() => setStatus('idle')}
                >
                  <span>Submit another requirement</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {/* Terminal header */}
                <div style={{
                  padding: '12px 16px', background: '#0A0A0A',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderBottom: 'none',
                  display: 'flex', alignItems: 'center', gap: 8,
                }}>
                  <div className="mono" style={{ fontSize: 9, color: 'rgba(198,241,53,0.6)', letterSpacing: '0.18em' }}>
                    SKI / RFQ_INTERFACE / v1.0
                  </div>
                  <div style={{ marginLeft: 'auto', display: 'flex', gap: 6 }}>
                    {['#FF5F57', '#FEBC2E', '#28C840'].map(c => (
                      <div key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c, opacity: 0.6 }} />
                    ))}
                  </div>
                </div>

                <div style={{ border: '1px solid rgba(255,255,255,0.07)', padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: 24 }}>
                  {/* Field grid */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
                    gap: '24px 28px',
                  }}>
                    {fields.filter(f => !f.full).map(f => (
                      <div key={f.key} style={{ gridColumn: undefined }}>
                        <label className="rfq-label">{f.label}{f.required && <span style={{ color: '#C6F135' }}>*</span>}</label>
                        <input
                          type={f.type || 'text'}
                          className="rfq-field"
                          value={form[f.key]}
                          onChange={set(f.key)}
                          required={f.required}
                          placeholder={`_`}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Full-width fields */}
                  {fields.filter(f => f.full).map(f => (
                    <div key={f.key}>
                      <label className="rfq-label">{f.label}{f.required && <span style={{ color: '#C6F135' }}>*</span>}</label>
                      <input
                        type="text"
                        className="rfq-field"
                        value={form[f.key]}
                        onChange={set(f.key)}
                        required={f.required}
                        placeholder={`_`}
                      />
                    </div>
                  ))}

                  <div>
                    <label className="rfq-label">QUANTITY / ESTIMATED VOLUME</label>
                    <input type="text" className="rfq-field" value={form.quantity} onChange={set('quantity')} placeholder="_" />
                  </div>

                  <div>
                    <label className="rfq-label">SPECIFICATION / PART NUMBER / REFERENCE</label>
                    <input type="text" className="rfq-field" value={form.specification} onChange={set('specification')} placeholder="_" />
                  </div>

                  <div>
                    <label className="rfq-label">ADDITIONAL NOTES / MESSAGE</label>
                    <textarea
                      className="rfq-field"
                      value={form.message}
                      onChange={set('message')}
                      placeholder="_"
                      rows={4}
                      style={{
                        background: 'transparent', resize: 'none', border: 'none',
                        borderBottom: '1px solid rgba(232,230,223,0.15)',
                        color: '#E8E6DF', fontFamily: 'Outfit, sans-serif', fontSize: 15,
                        width: '100%', outline: 'none', padding: '14px 0',
                        transition: 'border-color 0.3s',
                      }}
                      onFocus={e => (e.currentTarget.style.borderBottomColor = '#C6F135')}
                      onBlur={e => (e.currentTarget.style.borderBottomColor = 'rgba(232,230,223,0.15)')}
                    />
                  </div>

                  {/* File upload note */}
                  <div style={{
                    padding: '12px 14px',
                    border: '1px dashed rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', gap: 10,
                  }}>
                    <div style={{ width: 24, height: 24, border: '1px solid rgba(198,241,53,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ color: '#C6F135', fontSize: 12 }}>+</span>
                    </div>
                    <div>
                      <div className="mono" style={{ fontSize: 8, color: 'rgba(198,241,53,0.6)', letterSpacing: '0.15em', marginBottom: 2 }}>
                        ATTACH DRAWING / SPECIFICATION
                      </div>
                      <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, color: 'rgba(232,230,223,0.3)' }}>
                        Send drawings to{' '}
                        <a href="mailto:skienterprisesllp@gmail.com" style={{ color: 'rgba(198,241,53,0.6)', textDecoration: 'none', cursor: 'none' }}>
                          skienterprisesllp@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {status === 'error' && (
                    <div style={{ padding: '12px 14px', border: '1px solid rgba(255,80,80,0.3)', background: 'rgba(255,80,80,0.05)' }}>
                      <div className="mono" style={{ fontSize: 9, color: 'rgba(255,100,100,0.8)', letterSpacing: '0.15em' }}>
                        SUBMISSION ERROR — Please email us directly at skienterprisesllp@gmail.com
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn-rfq"
                    disabled={status === 'submitting'}
                  >
                    <span>{status === 'submitting' ? 'TRANSMITTING...' : 'SEND REQUIREMENT'}</span>
                    {status !== 'submitting' && <span>→</span>}
                  </button>
                </div>

                <div className="mono" style={{ fontSize: 8, color: 'rgba(232,230,223,0.2)', letterSpacing: '0.15em', marginTop: 12, textAlign: 'right' }}>
                  SECURE / NO COMMITMENT / INDIA SOURCING ENQUIRY
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
