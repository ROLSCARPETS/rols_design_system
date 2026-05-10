// CollectionGrid — three-up product/collection feature
const CollectionGrid = () => {
  const items = [
    { name: 'Calma', meta: 'algodón reciclado · interior', img: '../../assets/product-textures.png' },
    { name: 'Marea', meta: 'PET reciclado · exterior', img: '../../assets/product-poolside.png' },
    { name: 'Mediterráneo', meta: 'fibra natural · edición limitada', img: '../../assets/product-lemons.png' },
  ];

  return (
    <section style={{ background: 'var(--color-bg)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
          <div>
            <div style={{
              fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'var(--color-fg-muted)', marginBottom: 12, fontWeight: 500,
            }}>Colecciones</div>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 400,
              fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.05, letterSpacing: '-0.015em',
              color: 'var(--color-fg)', margin: 0, maxWidth: 540,
            }}>
              Una pieza para cada estancia.
            </h2>
          </div>
          <a href="#" style={{
            fontSize: 13, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'lowercase',
            color: 'var(--color-fg)', display: 'inline-flex', alignItems: 'center', gap: 10,
            borderBottom: '1px solid var(--color-fg)', paddingBottom: 4,
          }}>
            ver todas <span>→</span>
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {items.map((it, i) => (
            <a key={i} href="#" className="collection-card" style={{
              display: 'block', cursor: 'pointer',
            }}>
              <div style={{
                width: '100%', aspectRatio: '4/5', overflow: 'hidden', marginBottom: 16,
                background: 'var(--rols-sand-100)', borderRadius: 16,
              }}>
                <img src={it.img} alt={it.name} style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  transition: 'opacity 280ms var(--ease-out)',
                }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 22,
                    margin: 0, color: 'var(--color-fg)', letterSpacing: '-0.01em',
                  }}>{it.name}</h3>
                  <div style={{ fontSize: 12, color: 'var(--color-fg-muted)', marginTop: 4 }}>{it.meta}</div>
                </div>
                <span style={{ fontSize: 13, letterSpacing: '0.08em', color: 'var(--color-fg)' }}>ver →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

window.CollectionGrid = CollectionGrid;
