interface FlowerGridProps {
  viewedFlowers: Set<number>;
  onFlowerClick: (index: number) => void;
}

const FLOWERS = ['🌹', '🌸', '🌷', '🌻', '🌼', '🌺'];

export default function FlowerGrid({ viewedFlowers, onFlowerClick }: FlowerGridProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        margin: '30px auto',
        maxWidth: '350px',
      }}
    >
      {FLOWERS.map((flower, index) => {
        const isViewed = viewedFlowers.has(index);
        return (
          <div
            key={index}
            onClick={() => onFlowerClick(index)}
            style={{
              cursor: 'pointer',
              fontSize: '3rem',
              transition: 'all 0.3s ease',
              filter: isViewed ? 'grayscale(0%) sepia(0%)' : 'grayscale(60%) sepia(50%)',
              transform: isViewed ? 'scale(0.9)' : 'scale(1)',
              userSelect: 'none',
              WebkitTapHighlightColor: 'transparent',
              textAlign: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.filter = 'grayscale(0%) sepia(0%)';
            }}
            onMouseLeave={(e) => {
              if (viewedFlowers.has(index)) {
                e.currentTarget.style.transform = 'scale(0.9)';
                e.currentTarget.style.filter = 'grayscale(0%) sepia(0%)';
              } else {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.filter = 'grayscale(60%) sepia(50%)';
              }
            }}
          >
            {flower}
          </div>
        );
      })}
    </div>
  );
}
