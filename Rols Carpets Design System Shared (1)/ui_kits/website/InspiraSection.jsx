// InspiraSection — editorial side-by-side, sand background, pill CTA
// Mirrors the live Rols web pattern: small text block left, generous padding,
// large rounded image right.
const InspiraSection = () => {
  return (
    <section style={{ background: 'var(--rols-sand)', padding: '0' }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 0,
        minHeight: 600, alignItems: 'center',
      }}>
        <div style={{ padding: '80px 80px 80px 120px', maxWidth: 520 }}>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 500,
            fontSize: 36, lineHeight: 1.15, letterSpacing: '-0.01em',
            color: '#2A2A2A', margin: '0 0 24px',
          }}>
            Inspírate con<br/>proyectos reales
          </h2>
          <p style={{
            fontSize: 14, lineHeight: 1.6, color: '#4D4D4D',
            margin: '0 0 32px', maxWidth: 360,
          }}>
            Las alfombras y moquetas definen y transforman los espacios.
            Descubre los entornos únicos creados con nuestros productos
            y déjate inspirar por los proyectos de nuestros clientes.
          </p>
          <a href="#" style={{
            display: 'inline-block',
            background: '#D5B38C', color: '#4D4D4D',
            padding: '14px 28px', borderRadius: 999,
            fontSize: 14, fontWeight: 600, textDecoration: 'none',
            transition: 'background 280ms var(--ease-out)',
          }}
          onMouseOver={(e) => e.currentTarget.style.background = '#ECECEC'}
          onMouseOut={(e) => e.currentTarget.style.background = '#D5B38C'}>
            Ver todos los proyectos
          </a>
        </div>
        <div style={{ padding: '40px 40px 40px 0', height: '100%' }}>
          <div style={{
            width: '100%', height: '100%', minHeight: 520,
            borderRadius: 16, overflow: 'hidden',
          }}>
            <img src="../../assets/product-poolside.png" alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

window.InspiraSection = InspiraSection;
