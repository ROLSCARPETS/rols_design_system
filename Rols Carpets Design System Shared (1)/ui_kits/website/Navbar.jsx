// Navbar — large logo, transparent on load, white on scroll
const Navbar = ({ overImage = true }) => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Two states:
  //  - top of page over hero image: transparent bg, dark text (or white if hero is dark)
  //  - scrolled: white bg, dark text, hairline border
  const isOverlay = overImage && !scrolled;
  const textColor = '#2A2A2A'; // graphite-ink, works on light hero backgrounds

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
    background: isOverlay ? 'transparent' : 'rgba(255,255,255,0.98)',
    backdropFilter: isOverlay ? 'none' : 'blur(12px)',
    WebkitBackdropFilter: isOverlay ? 'none' : 'blur(12px)',
    borderBottom: isOverlay ? '1px solid transparent' : '1px solid #ECECEC',
    transition: 'background 280ms var(--ease-out), border-color 280ms var(--ease-out)',
    color: textColor,
  };

  return (
    <header style={navStyle}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '18px 32px', gap: 32,
      }}>
        {/* Left: logo + nav links inline */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src="../../assets/logo-rols-black.png" alt="rols" style={{ height: 56 }} />
          </a>
          <nav style={{ display: 'flex', gap: 28 }}>
            {['Alfombras a medida', 'Moquetas', 'Inspiración', 'Profesionales'].map(label => (
              <a key={label} href="#" className="nav-link" style={{
                fontSize: 14, fontWeight: 500, color: textColor, textDecoration: 'none',
                transition: 'opacity 200ms var(--ease-out)',
              }}>{label}</a>
            ))}
          </nav>
        </div>

        {/* Right: Rols Pro pill + icons */}
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <a href="#" style={{
            fontSize: 13, fontWeight: 500, color: textColor, textDecoration: 'none',
            border: '1px solid ' + textColor, borderRadius: 999, padding: '6px 14px',
            transition: 'all 200ms var(--ease-out)',
          }}>Rols Pro</a>
          <button aria-label="Buscar" style={iconBtn(textColor)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>
            </svg>
          </button>
          <button aria-label="Carrito" style={iconBtn(textColor)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M5 7h14l-1.5 11h-11z"/><path d="M9 7V5a3 3 0 016 0v2"/>
            </svg>
          </button>
          <button aria-label="Menú" style={iconBtn(textColor)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M3 7h18M3 12h18M3 17h18"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

const iconBtn = (color) => ({
  background: 'transparent', border: 'none', color, cursor: 'pointer',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  padding: 6,
});

window.Navbar = Navbar;
