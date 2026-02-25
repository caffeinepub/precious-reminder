import Envelope from './components/Envelope';
import LetterContent from './components/LetterContent';
import StarBackground from './components/StarBackground';

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'radial-gradient(circle, #1a1a1a 0%, #000 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflowX: 'hidden',
        position: 'relative',
        padding: '40px 16px 80px',
      }}
    >
      {/* Star / particle background — always shown for ambiance */}
      <StarBackground />

      {/* Envelope with letter inside */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Envelope>
          <LetterContent />
        </Envelope>
      </div>

      {/* Footer attribution */}
      <footer
        style={{
          position: 'fixed',
          bottom: 0,
          width: '100%',
          textAlign: 'center',
          padding: '12px 16px',
          fontFamily: "'Cinzel', serif",
          fontSize: '0.7rem',
          letterSpacing: '1px',
          color: 'rgba(212, 175, 55, 0.45)',
          zIndex: 2,
        }}
      >
        Built with{' '}
        <span style={{ color: 'rgba(212, 175, 55, 0.7)' }}>♥</span>{' '}
        using{' '}
        <a
          href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
            typeof window !== 'undefined' ? window.location.hostname : 'unknown-app'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'rgba(212, 175, 55, 0.55)', textDecoration: 'none' }}
        >
          caffeine.ai
        </a>
      </footer>
    </div>
  );
}

export default App;
