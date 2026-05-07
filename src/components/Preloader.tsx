import React, { useState, useEffect } from 'react';

const greetings = [
  'Hello',
  'नमस्ते',
  'Hola',
  'Bonjour',
  'こんにちは',
  'Ciao',
  '你好',
  'Hallo',
  'Привет',
  'مرحبا'
];

const loadingTexts = [
  'LOADING',
  'लोड हो रहा है',
  'CARGANDO',
  'CHARGEMENT',
  '読み込み中',
  'CARICAMENTO',
  '加载中',
  'LADEN',
  'ЗАГРУЗКА',
  'جار التحميل'
];

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [index, setIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (index < greetings.length - 1) {
      const timer = setTimeout(() => {
        setIndex(prev => prev + 1);
      }, 250); // Slightly adjusted speed for better readability
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setIsFading(true);
        setTimeout(onComplete, 1000);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [index, onComplete]);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      backgroundColor: 'var(--text-dark)',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
      transition: 'opacity 1s ease-in-out',
      opacity: isFading ? 0 : 1,
      pointerEvents: isFading ? 'none' : 'auto'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem'
      }}>
        <h2 style={{ 
          fontFamily: 'var(--font-serif)', 
          fontSize: '1.2rem', 
          letterSpacing: '5px',
          opacity: 0.5,
          textTransform: 'uppercase'
        }}>
          Hello, I am Satwiq
        </h2>
        
        <div style={{ position: 'relative', height: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h1 style={{ 
            fontSize: 'clamp(3rem, 10vw, 6rem)', 
            fontFamily: 'var(--font-serif)',
            fontWeight: 400,
            fontStyle: 'italic',
            textAlign: 'center'
          }}>
            {greetings[index]}
          </h1>
        </div>
      </div>

      <div style={{
        position: 'absolute',
        bottom: '3rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem'
      }}>
        <div style={{
          width: '60px',
          height: '2px',
          backgroundColor: 'var(--accent-mint)',
          animation: 'pulse 1.5s infinite'
        }}></div>
        <span style={{ 
          fontFamily: 'monospace', 
          fontSize: '0.8rem', 
          opacity: 0.7,
          letterSpacing: '2px',
          textTransform: 'uppercase'
        }}>
          {loadingTexts[index]}... {Math.round(((index + 1) / greetings.length) * 100)}%
        </span>
      </div>

      <style>{`
        @keyframes pulse {
          0% { transform: scaleX(1); opacity: 0.5; }
          50% { transform: scaleX(1.5); opacity: 1; }
          100% { transform: scaleX(1); opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
