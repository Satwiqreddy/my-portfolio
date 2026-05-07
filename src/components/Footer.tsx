import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" style={{
      padding: '6rem 0',
      backgroundColor: 'var(--text-dark)',
      color: 'var(--bg-cream)'
    }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'white' }}>
          Let's Build Something <i style={{ fontWeight: 400 }}>Exceptional</i>.
        </h2>
        <p style={{ maxWidth: '600px', marginBottom: '3rem', opacity: 0.8 }}>
          Available for strategic partnerships and innovative development projects. 
          Reach out to discuss your next big idea.
        </p>
        <a href="mailto:hello@example.com" className="btn-primary" style={{ 
          backgroundColor: 'transparent', 
          borderColor: 'white',
          color: 'white'
        }}>
          Get In Touch
        </a>
        
        <div style={{
          marginTop: '6rem',
          paddingTop: '2rem',
          width: '100%',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '0.8rem',
          opacity: 0.6,
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}>
          <div>© 2026 Developer Portfolio</div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="http://linkedin.com/in/satwiq-reddy-kampamalla-207726289/" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>LinkedIn</a>
            <a href="https://github.com/Satwiqreddy" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>GitHub</a>
            <span>Twitter</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
