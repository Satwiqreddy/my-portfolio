import React from 'react';

const Education: React.FC = () => {
  const certifications = [
    'Snowflake Data Warehouse Badge',
    'Infosys Cloud Computing',
    'Infosys Power BI',
    'Google Analytics',
    'Serverless Solutions in AWS',
    'Data Analysis (freeCodeCamp)',
    'Supervised Machine Learning (Coursera)',
    'Advanced SQL (HackerRank)'
  ];

  return (
    <section id="education" className="container" style={{ padding: '6rem 0' }}>
      <div style={{ marginBottom: '4rem', position: 'relative' }}>
        <h2 style={{ fontSize: '3.5rem', marginTop: '0.5rem' }}>Education</h2>
      </div>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1.5fr 1fr', 
        gap: '2rem' 
      }}>
        <div style={{
          padding: '3rem',
          backgroundColor: 'white',
          border: '1px solid var(--border-teal)',
          boxShadow: '10px 10px 0px var(--accent-teal)',
          position: 'relative'
        }}>
          <div className="frame-corner frame-tl" style={{ width: '20px', height: '20px' }}></div>
          <span style={{ 
            fontSize: '0.8rem', 
            fontWeight: 700, 
            letterSpacing: '2px',
            color: 'var(--accent-teal)' 
          }}>
            BACHELOR OF TECHNOLOGY
          </span>
          <h3 style={{ fontSize: '2rem', margin: '1rem 0' }}>Computer Science & Engineering</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.8' }}>
            Focusing on AI & ML, Data Science, Full Stack, Cloud Computing, and Computer Vision. 
            Developing specialized solutions across decentralized and intelligent systems.
          </p>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            borderTop: '1px solid #f0f0f0',
            paddingTop: '1rem'
          }}>
            <span>YEAR: 2023 - 2026</span>
            <span>STATUS: ACTIVE</span>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateRows: 'auto 1fr',
          gap: '2rem'
        }}>
          <div style={{
            padding: '2rem',
            backgroundColor: 'var(--bg-teal-light)',
            border: '1px solid var(--border-teal)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px' }}>CUMULATIVE GPA</span>
            <div style={{ fontSize: '3rem', fontWeight: 600, fontFamily: 'var(--font-serif)' }}>
              6.6 <span style={{ fontSize: '1rem', opacity: 0.5 }}>/ 10.0</span>
            </div>
          </div>
          
          <div style={{
            padding: '2rem',
            backgroundColor: 'var(--bg-teal-light)',
            border: '1px solid var(--border-teal)',
            overflow: 'hidden',
            height: '250px',
            position: 'relative'
          }}>
            <span style={{ 
              fontSize: '0.8rem', 
              fontWeight: 700, 
              letterSpacing: '2px',
              display: 'block',
              marginBottom: '1rem'
            }}>
              VERIFIED CERTIFICATIONS
            </span>
            <div 
              className="scroll-container"
              style={{
                animation: 'scroll-up 20s linear infinite',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}
            >
              {[...certifications, ...certifications].map((cert, i) => (
                <div key={i} style={{ 
                  fontSize: '0.85rem', 
                  lineHeight: '1.8',
                  opacity: 0.9,
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'start'
                }}>
                  <span style={{ color: 'var(--accent-teal)', marginRight: '0.5rem' }}>//</span>
                  {cert}
                </div>
              ))}
            </div>
            
            <style>{`
              @keyframes scroll-up {
                0% { transform: translateY(0); }
                100% { transform: translateY(-50%); }
              }
              .scroll-container:hover {
                animation-play-state: paused;
                cursor: pointer;
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
