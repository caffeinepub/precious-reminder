import { ReactNode } from 'react';

interface LetterContainerProps {
  children: ReactNode;
}

export default function LetterContainer({ children }: LetterContainerProps) {
  return (
    <div
      style={{
        maxWidth: '680px',
        width: '90%',
        background:
          'linear-gradient(160deg, rgba(60, 15, 35, 0.92) 0%, rgba(40, 10, 28, 0.95) 50%, rgba(50, 12, 40, 0.92) 100%)',
        border: '1px solid rgba(212, 175, 55, 0.7)',
        boxShadow:
          '0 0 60px rgba(180, 40, 80, 0.25), 0 0 120px rgba(100, 10, 50, 0.3), inset 0 0 30px rgba(212,175,55,0.08), inset 0 0 60px rgba(180,40,80,0.05)',
        position: 'relative',
        zIndex: 1,
        animation: 'bloomIn 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        margin: '40px auto',
        backdropFilter: 'blur(8px)',
        borderRadius: '2px',
        maxHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Top corner ornament lines */}
      <div
        style={{
          position: 'absolute',
          top: '8px',
          left: '8px',
          width: '32px',
          height: '32px',
          borderTop: '1px solid rgba(212,175,55,0.5)',
          borderLeft: '1px solid rgba(212,175,55,0.5)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '8px',
          right: '8px',
          width: '32px',
          height: '32px',
          borderTop: '1px solid rgba(212,175,55,0.5)',
          borderRight: '1px solid rgba(212,175,55,0.5)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '8px',
          left: '8px',
          width: '32px',
          height: '32px',
          borderBottom: '1px solid rgba(212,175,55,0.5)',
          borderLeft: '1px solid rgba(212,175,55,0.5)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '8px',
          right: '8px',
          width: '32px',
          height: '32px',
          borderBottom: '1px solid rgba(212,175,55,0.5)',
          borderRight: '1px solid rgba(212,175,55,0.5)',
          pointerEvents: 'none',
        }}
      />

      {/* Scrollable content area */}
      <div
        style={{
          overflowY: 'auto',
          padding: 'clamp(24px, 5vw, 48px)',
          flex: 1,
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(212,175,55,0.4) transparent',
        }}
      >
        {children}
      </div>
    </div>
  );
}
