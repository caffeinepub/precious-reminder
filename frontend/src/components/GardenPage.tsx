import { useState, useEffect } from 'react';
import FlowerGrid from './FlowerGrid';
import MessageDisplay from './MessageDisplay';
import SurpriseButton from './SurpriseButton';
import HeartBurst from './HeartBurst';
import ThankYouModal from './ThankYouModal';

const TOTAL_FLOWERS = 6;

export default function GardenPage() {
  const [viewedFlowers, setViewedFlowers] = useState<Set<number>>(new Set());
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showSurprise, setShowSurprise] = useState(false);
  const [burstActive, setBurstActive] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleFlowerClick = (index: number) => {
    setSelectedIndex(index);
    setViewedFlowers((prev) => {
      const next = new Set(prev);
      next.add(index);
      return next;
    });
  };

  useEffect(() => {
    if (viewedFlowers.size === TOTAL_FLOWERS && !showSurprise) {
      const timer = setTimeout(() => {
        setShowSurprise(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [viewedFlowers, showSurprise]);

  const handleSurpriseClick = () => {
    setBurstActive(true);
    setShowModal(true);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--parchment)',
        fontFamily: 'Georgia, serif',
        color: 'var(--ink)',
      }}
    >
      <main
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          padding: '40px 20px',
          textAlign: 'center',
          flexGrow: 1,
          width: '100%',
        }}
      >
        {/* Header */}
        <header>
          <h1
            style={{
              fontWeight: 'normal',
              fontStyle: 'italic',
              fontSize: '2.2rem',
              marginBottom: '5px',
              fontFamily: 'Georgia, serif',
              color: 'var(--ink)',
            }}
          >
            For My Everything
          </h1>
          {/* Gold divider */}
          <div
            style={{
              width: '80px',
              height: '1px',
              background: 'var(--gold)',
              margin: '15px auto',
            }}
          />
          <p
            style={{
              fontSize: '0.85rem',
              color: '#777',
              fontStyle: 'italic',
              margin: 0,
            }}
          >
            Tap each bloom to reveal my heart...
          </p>
        </header>

        {/* Flower Grid */}
        <FlowerGrid
          viewedFlowers={viewedFlowers}
          onFlowerClick={handleFlowerClick}
        />

        {/* Message Display */}
        <MessageDisplay selectedIndex={selectedIndex} />

        {/* Surprise Button */}
        <SurpriseButton visible={showSurprise} onClick={handleSurpriseClick} />

        {/* Heart Burst */}
        {burstActive && <HeartBurst />}

        {/* Thank You Modal */}
        <ThankYouModal visible={showModal} onClose={() => setShowModal(false)} />
      </main>

      {/* Footer */}
      <footer
        style={{
          marginTop: 'auto',
          textAlign: 'center',
          padding: '20px 0 10px',
        }}
      >
        <p
          style={{
            fontSize: '0.7rem',
            letterSpacing: '4px',
            color: 'var(--gold)',
            textTransform: 'uppercase',
            margin: '0 0 6px 0',
          }}
        >
          Eternally Yours
        </p>
        <p style={{ fontSize: '0.65rem', color: '#bbb', margin: 0, letterSpacing: '1px' }}>
          Built with{' '}
          <span style={{ color: 'var(--love)' }}>♥</span>{' '}
          using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname || 'unknown-app')}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--gold)', textDecoration: 'none' }}
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
