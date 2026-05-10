// Hero — full-bleed editorial hero with overlaid headline
const Hero = () => {
  return (
    <section style={{ padding: '24px 24px 0', position: 'relative' }}>
      <div style={{ position: 'relative', width: '100%', height: '78vh', minHeight: 560, overflow: 'hidden', borderRadius: 20 }}>
        <img src="../../assets/product-lemons.png" alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center' }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.0) 40%, rgba(0,0,0,0.25) 100%)',
        }} />
        <div style={{
          position: 'absolute', left: 0, right: 0, bottom: 0,
          padding: '0 32px 56px',
        }}>
          <div className="container" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 32 }}>
            <div>
              <div style={{
                fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.85)', marginBottom: 16, fontWeight: 500,
              }}>
                Nueva colección · primavera 26
              </div>
              <h1 style={{
                fontFamily: 'var(--font-display)', fontWeight: 400,
                fontSize: 'clamp(44px, 6vw, 88px)', lineHeight: 0.98, letterSpacing: '-0.02em',
                color: '#fff', margin: 0, maxWidth: 720,
              }}>
                Tejida a mano,<br/>diseñada para durar.
              </h1>
            </div>
            <a href="#" style={{
              display: 'inline-block',
              background: '#D5B38C', color: '#4D4D4D',
              padding: '14px 28px', borderRadius: 999,
              fontSize: 14, fontWeight: 600, textDecoration: 'none',
              whiteSpace: 'nowrap',
              transition: 'background 280ms var(--ease-out)',
            }}
            onMouseOver={(e) => e.currentTarget.style.background = '#ECECEC'}
            onMouseOut={(e) => e.currentTarget.style.background = '#D5B38C'}>
              Ver colección
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

window.Hero = Hero;
