import React from 'react';

const Intro: React.FC = () => {
  return (
    <section style={{ 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: 'var(--bg-cream)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Dynamic Background Element */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '25vw',
        fontWeight: 900,
        opacity: 0.02,
        color: 'var(--accent-teal)',
        zIndex: 0,
        userSelect: 'none',
        letterSpacing: '-20px'
      }}>
        SATWIQ
      </div>
      
      <div style={{ zIndex: 1, position: 'relative' }}>
        <h1 style={{ 
          fontSize: 'clamp(3.5rem, 12vw, 9rem)', 
          fontFamily: 'var(--font-serif)',
          lineHeight: 0.9,
          marginBottom: '2rem'
        }}>
          Hello, I am <br/> 
          <span className="text-gradient" style={{ fontStyle: 'italic' }}>Satwiq</span>.
        </h1>
        
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          {['AIML', 'FULL STACK', 'DATA SCIENTIST'].map((role, i) => (
            <React.Fragment key={role}>
              <span style={{ 
                fontSize: '1rem', 
                letterSpacing: '4px', 
                fontWeight: 700,
                color: 'var(--text-dark)',
                fontFamily: 'monospace'
              }}>
                {role}
              </span>
              {i < 2 && <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-mint)' }}></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
      
      {/* Creative Scroll Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '4rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem'
      }}>
        <div style={{
          width: '30px',
          height: '50px',
          border: '2px solid var(--accent-teal)',
          borderRadius: '20px',
          display: 'flex',
          justifyContent: 'center',
          padding: '8px'
        }}>
          <div style={{
            width: '4px',
            height: '10px',
            background: 'var(--accent-teal)',
            borderRadius: '2px',
            animation: 'scroll-mouse 2s infinite'
          }}></div>
        </div>
      </div>
      
      <style>{`
        @keyframes scroll-mouse {
          0% { transform: translateY(0); opacity: 0; }
          50% { transform: translateY(15px); opacity: 1; }
          100% { transform: translateY(20px); opacity: 0; }
        }
        
        .text-gradient {
          background: linear-gradient(135deg, var(--accent-teal), var(--accent-mint));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  );
};

export default Intro;
