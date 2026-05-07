import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav style={{
      padding: '1.5rem 0',
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 1000,
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-teal)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          fontFamily: 'var(--font-serif)',
          letterSpacing: '1px'
        }}>
          SATWIQ<span style={{ color: 'var(--accent-teal)' }}>.</span>
        </div>
        <div style={{
          display: 'flex',
          gap: '2.5rem',
          fontSize: '0.9rem',
          fontWeight: 500,
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}>
          <a href="#work" style={{ textDecoration: 'none', color: 'inherit' }}>Work</a>
          <a href="#about" style={{ textDecoration: 'none', color: 'inherit' }}>About</a>
          <a href="#contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
