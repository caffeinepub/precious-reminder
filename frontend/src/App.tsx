import { useState } from 'react';
import EntryButton from './components/EntryButton';
import ScrollLetter from './components/ScrollLetter';

function App() {
  const [showScroll, setShowScroll] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleOpen = () => {
    setShowScroll(true);
    setIsClosing(false);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowScroll(false);
      setIsClosing(false);
    }, 1900);
  };

  return (
    <div className="app-root">
      {!showScroll && (
        <div id="entry-screen">
          <EntryButton onClick={handleOpen} />
        </div>
      )}

      {showScroll && (
        <div className="scroll-wrapper">
          <ScrollLetter isOpen={!isClosing} onClose={handleClose} />
        </div>
      )}

      {/* Footer attribution */}
      <div className="footer-attribution">
        <span>
          Built with ❤️ using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'unknown-app')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            caffeine.ai
          </a>
        </span>
      </div>
    </div>
  );
}

export default App;
