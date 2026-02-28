interface SurpriseButtonProps {
  visible: boolean;
  onClick: () => void;
}

export default function SurpriseButton({ visible, onClick }: SurpriseButtonProps) {
  if (!visible) return null;

  return (
    <button
      onClick={onClick}
      className="surprise-pulse"
      style={{
        display: 'block',
        margin: '30px auto',
        padding: '15px 35px',
        backgroundColor: 'var(--love)',
        color: 'white',
        border: 'none',
        borderRadius: '50px',
        fontFamily: 'Georgia, serif',
        fontStyle: 'italic',
        cursor: 'pointer',
        fontSize: '1rem',
      }}
    >
      For You, Priya ❤️
    </button>
  );
}
