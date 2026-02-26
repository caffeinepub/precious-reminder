import { useState } from 'react';

interface EnvelopeProps {
  children: React.ReactNode;
}

export default function Envelope({ children }: EnvelopeProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* Envelope body — always in normal flow */}
      <div
        className="envelope-wrapper"
        style={{
          position: 'relative',
          cursor: isOpen ? 'default' : 'pointer',
          transition: 'transform 0.5s ease',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        onClick={!isOpen ? handleToggle : undefined}
      >
        {/* Envelope body */}
        <div
          style={{
            position: 'relative',
            width: '300px',
            height: '200px',
            background: '#800020',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            borderRadius: '0 0 5px 5px',
            perspective: '600px',
          }}
        >
          {/* Top flap (triangle) */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: 0,
              height: 0,
              borderTop: '110px solid #a31535',
              borderLeft: '150px solid transparent',
              borderRight: '150px solid transparent',
              transformOrigin: 'top center',
              transition: 'transform 0.5s ease-in-out, z-index 0s linear 0.25s',
              transform: isOpen ? 'rotateX(180deg)' : 'rotateX(0deg)',
              zIndex: isOpen ? 0 : 2,
            }}
          />

          {/* Bottom triangle panels (left and right sides) */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: 0,
              height: 0,
              borderLeft: '150px solid #8b0000',
              borderRight: '150px solid #8b0000',
              borderBottom: '100px solid #70001a',
              borderTop: '100px solid transparent',
              zIndex: 1,
            }}
          />

          {/* Wax seal */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '50px',
              height: '50px',
              background: '#c41e3a',
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 4,
              boxShadow: '0 2px 5px rgba(0,0,0,0.5)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              transition: 'opacity 0.3s ease',
              opacity: isOpen ? 0 : 1,
              pointerEvents: 'none',
            }}
          >
            <span style={{ color: '#d4af37', fontSize: '24px', lineHeight: 1 }}>♥</span>
          </div>
        </div>

        {/* Hint text when closed */}
        {!isOpen && (
          <p
            style={{
              marginTop: '20px',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 300,
              fontSize: '0.85rem',
              color: 'rgba(212, 175, 55, 0.6)',
              letterSpacing: '1px',
              textAlign: 'center',
              pointerEvents: 'none',
            }}
          >
            click to open
          </p>
        )}
      </div>

      {/* Letter panel — fixed, centered in viewport when open */}
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <div
            onClick={handleToggle}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.55)',
              zIndex: 50,
              cursor: 'pointer',
            }}
          />

          {/* Letter panel — uses letterReveal animation that only affects opacity/scale, never translateY */}
          <div
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 'min(90vw, 400px)',
              maxHeight: '80vh',
              background: '#fdf5e6',
              padding: '30px',
              boxSizing: 'border-box',
              zIndex: 51,
              border: '1px solid #e0d0b0',
              boxShadow: '0 20px 60px rgba(0,0,0,0.85)',
              overflowY: 'auto',
              borderRadius: '2px',
              animation: 'letterReveal 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}

            {/* Close button inside letter */}
            <div style={{ textAlign: 'center', marginTop: '24px' }}>
              <button
                onClick={handleToggle}
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 300,
                  fontSize: '0.8rem',
                  color: 'rgba(212, 175, 55, 0.7)',
                  letterSpacing: '1px',
                  background: 'transparent',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  padding: '6px 20px',
                }}
              >
                ✕ close
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
