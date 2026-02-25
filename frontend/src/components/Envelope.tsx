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

      {/* Letter panel — rises out of envelope when open */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: isOpen
            ? 'translateX(-50%) translateY(-250px)'
            : 'translateX(-50%) translateY(0px)',
          width: isOpen ? '350px' : '270px',
          height: isOpen ? '450px' : '160px',
          background: '#fdf5e6',
          padding: '30px',
          boxSizing: 'border-box',
          transition: 'all 0.8s ease-in-out',
          zIndex: isOpen ? 5 : 0,
          border: '1px solid #e0d0b0',
          boxShadow: isOpen
            ? '0 20px 50px rgba(0,0,0,0.8)'
            : '0 0 10px rgba(0,0,0,0.2)',
          opacity: isOpen ? 1 : 0,
          overflowY: isOpen ? 'auto' : 'hidden',
          borderRadius: '2px',
          // Prevent the invisible closed panel from blocking clicks on the envelope
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
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

      {/* Close hint when open */}
      {isOpen && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleToggle();
          }}
          style={{
            marginTop: '280px',
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 300,
            fontSize: '0.8rem',
            color: 'rgba(212, 175, 55, 0.55)',
            letterSpacing: '1px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '8px 16px',
            zIndex: 6,
            position: 'relative',
          }}
        >
          ✕ close
        </button>
      )}
    </div>
  );
}
