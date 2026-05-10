// StorySection — editorial side-by-side image + text
const StorySection = () => {
  return (
    <section style={{ background: 'var(--rols-sand)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div style={{ aspectRatio: '4/5', overflow: 'hidden', borderRadius: 16 }}>
            <img src="../../assets/product-textures.png" alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ paddingRight: 32 }}>
            <div style={{
              fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'var(--color-fg-muted)', marginBottom: 16, fontWeight: 500,
            }}>Nuestra historia</div>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 400,
              fontSize: 'clamp(32px, 3.5vw, 44px)', lineHeight: 1.1, letterSpacing: '-0.015em',
              color: 'var(--color-fg)', margin: '0 0 24px',
            }}>
              Tres generaciones tejiendo en el Mediterráneo.
            </h2>
            <p style={{
              fontSize: 16, lineHeight: 1.65, color: 'var(--color-fg)', margin: '0 0 16px',
              maxWidth: 480,
            }}>
              Desde 1968 cada alfombra Rols se concibe en nuestros talleres familiares.
              Seleccionamos a mano las fibras — yute, sisal, algodón reciclado — y trabajamos
              con tejedores que llevan décadas perfeccionando los patrones.
            </p>
            <p style={{
              fontSize: 16, lineHeight: 1.65, color: 'var(--color-fg)', margin: '0 0 32px',
              maxWidth: 480,
            }}>
              El resultado: piezas que mejoran con los años, que viven con la casa.
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
              Conocer el taller
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

window.StorySection = StorySection;
