// Newsletter + Footer
const Newsletter = () => {
  const [email, setEmail] = React.useState('');
  return (
    <section style={{ background: 'var(--color-bg)', borderTop: '1px solid var(--color-divider)' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: 640 }}>
        <div style={{
          fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: 'var(--color-fg-muted)', marginBottom: 16, fontWeight: 500,
        }}>Mantente cerca</div>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 400,
          fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1.15, letterSpacing: '-0.015em',
          color: 'var(--color-fg)', margin: '0 0 16px',
        }}>
          Las nuevas colecciones, antes que nadie.
        </h2>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--color-fg-muted)', margin: '0 0 32px' }}>
          Pocos correos al año. Sólo lo que merece la pena.
        </p>
        <form onSubmit={(e) => { e.preventDefault(); alert('Gracias — ' + email); }}
          style={{ display: 'flex', gap: 0, maxWidth: 440, margin: '0 auto', borderBottom: '1px solid var(--color-fg)' }}>
          <input
            type="email" value={email} onChange={(e) => setEmail(e.target.value)}
            placeholder="tu correo"
            style={{
              flex: 1, fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--color-fg)',
              background: 'transparent', border: 'none', outline: 'none', padding: '12px 0',
            }}
          />
          <button type="submit" style={{
            fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 500,
            letterSpacing: '0.08em', textTransform: 'lowercase',
            background: 'transparent', border: 'none', color: 'var(--color-fg)', padding: '12px 0 12px 16px',
          }}>suscribirme →</button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => {
  const cols = [
    { title: 'Comprar', items: ['Interior', 'Exterior', 'A medida', 'Cuidado'] },
    { title: 'Marca', items: ['Historia', 'Taller', 'Sostenibilidad', 'Prensa'] },
    { title: 'Ayuda', items: ['Envíos', 'Devoluciones', 'Contacto', 'FAQ'] },
  ];
  return (
    <footer style={{ background: 'var(--rols-graphite)', color: 'var(--color-fg-inverse)', padding: '64px 0 32px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }}>
          <div>
            <img src="../../assets/logo-rols-black.png" alt="rols"
              style={{ height: 32, filter: 'invert(1) brightness(2)', marginBottom: 20 }} />
            <p style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.7)', maxWidth: 280, margin: 0 }}>
              Alfombras tejidas a mano en el Mediterráneo desde 1968.
            </p>
          </div>
          {cols.map(col => (
            <div key={col.title}>
              <div style={{
                fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.6)', marginBottom: 16, fontWeight: 500,
              }}>{col.title}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.items.map(it => (
                  <li key={it}><a href="#" style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>{it}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{
          paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.12)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontSize: 12, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.04em',
        }}>
          <span>© Rols Carpets · 2026</span>
          <div style={{ display: 'flex', gap: 24 }}>
            <a href="#" style={{ color: 'rgba(255,255,255,0.6)' }}>Privacidad</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.6)' }}>Términos</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.6)' }}>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

window.Newsletter = Newsletter;
window.Footer = Footer;
