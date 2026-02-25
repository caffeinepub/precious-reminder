interface SealButtonProps {
  onClick: () => void;
}

export default function SealButton({ onClick }: SealButtonProps) {
  return (
    <div
      style={{
        position: 'relative',
        cursor: 'pointer',
        transition: 'transform 0.5s ease',
        display: 'inline-block',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
      }}
    >
      <button
        onClick={onClick}
        style={{
          background: 'radial-gradient(circle, #D4AF37, #996515)',
          color: '#fff',
          border: '2px solid #D4AF37',
          padding: '20px 40px',
          fontFamily: "'Cinzel', serif",
          fontSize: '1.2rem',
          letterSpacing: '3px',
          borderRadius: '50px',
          boxShadow: '0 0 20px rgba(212, 175, 55, 0.4), 0 0 40px rgba(212, 175, 55, 0.15)',
          cursor: 'pointer',
          textTransform: 'uppercase',
          transition: 'box-shadow 0.3s ease',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.boxShadow =
            '0 0 35px rgba(212, 175, 55, 0.7), 0 0 60px rgba(212, 175, 55, 0.3)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.boxShadow =
            '0 0 20px rgba(212, 175, 55, 0.4), 0 0 40px rgba(212, 175, 55, 0.15)';
        }}
      >
        To My Priya ✉️
      </button>
    </div>
  );
}
