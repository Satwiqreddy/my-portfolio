import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="container" style={{ paddingTop: '8rem' }}>
      <div className="framed-section" style={{ 
        padding: '6rem 4rem',
        backgroundColor: 'var(--bg-teal-light)',
        textAlign: 'left',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: '2rem',
          right: '2rem',
          fontFamily: 'monospace',
          fontSize: '0.7rem',
          opacity: 0.5,
          textAlign: 'right'
        }}>
          STATUS: ACTIVE<br/>
          INDEX: 001.SYS
        </div>
        
        <div className="frame-corner frame-tl"></div>
        <div className="frame-corner frame-tr"></div>
        <div className="frame-corner frame-bl"></div>
        <div className="frame-corner frame-br"></div>
        
        <span style={{ 
          display: 'inline-block',
          marginBottom: '1.5rem',
          fontSize: '0.8rem',
          letterSpacing: '4px',
          textTransform: 'uppercase',
          fontWeight: 700,
          color: 'var(--accent-teal)',
          fontFamily: 'monospace'
        }}>
          [SATWIQ_REDDY.SYS] // FULL_STACK_AI
        </span>
        
        <h1 style={{ 
          fontSize: 'clamp(3rem, 8vw, 5rem)',
          lineHeight: 1.1,
          marginBottom: '2rem',
          maxWidth: '900px'
        }}>
          Architecting <i style={{ fontWeight: 400 }}>Secure</i> & AI-Native Systems.
        </h1>
        
        <p style={{ 
          fontSize: '1.2rem',
          maxWidth: '600px',
          color: 'var(--text-muted)',
          marginBottom: '3rem'
        }}>
          Building production-grade software with a focus on hybrid retrieval, 
          cloud infrastructure, and seamless user experiences.
        </p>
        
        <a href="#work" className="btn-primary">
          Explore Case Studies
        </a>
      </div>
    </section>
  );
};

export default Hero;
