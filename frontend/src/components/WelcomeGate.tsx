import { useState } from 'react';

interface WelcomeGateProps {
  onEnter: () => void;
}

export default function WelcomeGate({ onEnter }: WelcomeGateProps) {
  const [fading, setFading] = useState(false);

  const handleEnter = () => {
    setFading(true);
    setTimeout(() => {
      onEnter();
    }, 1200);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'radial-gradient(circle, #ffffff 0%, #f4ecd8 100%)',
        zIndex: 100,
        transition: 'opacity 1.2s ease-in-out',
        opacity: fading ? 0 : 1,
        pointerEvents: fading ? 'none' : 'auto',
      }}
    >
      <p
        style={{
          marginBottom: '25px',
          fontStyle: 'italic',
          color: '#999',
          fontFamily: 'Georgia, serif',
          fontSize: '1rem',
        }}
      >
        A secret garden for Priya...
      </p>
      <button
        onClick={handleEnter}
        style={{
          padding: '18px 45px',
          fontSize: '1rem',
          background: 'white',
          border: '1px solid var(--gold)',
          cursor: 'pointer',
          letterSpacing: '5px',
          textTransform: 'uppercase',
          transition: 'all 0.4s',
          boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
          outline: 'none',
          fontFamily: 'Georgia, serif',
          color: 'var(--ink)',
        }}
        onMouseEnter={(e) => {
          const btn = e.currentTarget;
          btn.style.letterSpacing = '7px';
          btn.style.background = 'var(--ink)';
          btn.style.color = 'white';
        }}
        onMouseLeave={(e) => {
          const btn = e.currentTarget;
          btn.style.letterSpacing = '5px';
          btn.style.background = 'white';
          btn.style.color = 'var(--ink)';
        }}
      >
        Enter
      </button>
    </div>
  );
}
