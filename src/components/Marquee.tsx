import React from 'react';

const Marquee: React.FC = () => {
  const items = [
    'BLOCKCHAIN', 'AI AGENTS', 'FULL STACK', 'RAG', 'BIOMETRICS', 
    'CLOUD NATIVE', 'DATA ANALYTICS', 'SYSTEM DESIGN', 'IOT'
  ];
  
  return (
    <div style={{
      width: '100%',
      padding: '1rem 0',
      borderTop: '1px solid var(--border-teal)',
      borderBottom: '1px solid var(--border-teal)',
      backgroundColor: 'var(--bg-teal-light)',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      marginTop: '4rem'
    }}>
      <div style={{
        display: 'inline-block',
        paddingLeft: '100%',
        animation: 'marquee 30s linear infinite'
      }}>
        {[...items, ...items].map((item, index) => (
          <span key={index} style={{
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '4px',
            color: 'var(--accent-teal)',
            marginRight: '2rem'
          }}>
            {item} <span style={{ opacity: 0.3 }}>///</span>
          </span>
        ))}
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-100%, 0); }
        }
      `}</style>
    </div>
  );
};

export default Marquee;
