interface ThankYouModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function ThankYouModal({ visible, onClose }: ThankYouModalProps) {
  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.2)',
          zIndex: 999,
        }}
        onClick={onClose}
      />
      {/* Modal */}
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1000,
          fontSize: '1.4rem',
          color: 'var(--love)',
          fontStyle: 'italic',
          textShadow: '1px 1px 10px white',
          textAlign: 'center',
          width: '85%',
          maxWidth: '500px',
          background: 'rgba(253, 250, 241, 0.98)',
          padding: '35px',
          border: '1px solid var(--gold)',
          borderRadius: '15px',
          boxShadow: '0 15px 50px rgba(0,0,0,0.15)',
          fontFamily: 'Georgia, serif',
        }}
      >
        <p style={{ margin: '0 0 20px 0', lineHeight: '1.7' }}>
          "Thank you for spending your valuable time with me. My cutee, I will be forever grateful to you for everything. I hope I've been able to make you feel special and bring a smile to your face today."
        </p>
        <span
          style={{
            fontSize: '1rem',
            color: 'var(--ink)',
            fontStyle: 'italic',
          }}
        >
          — I admire you more than words can say. —
        </span>
        <br /><br />
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--gold)',
            cursor: 'pointer',
            fontSize: '0.8rem',
            fontFamily: 'Georgia, serif',
            letterSpacing: '2px',
          }}
        >
          [ Close ]
        </button>
      </div>
    </>
  );
}
