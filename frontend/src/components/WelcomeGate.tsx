import { useState } from 'react';

interface WelcomeGateProps {
  onEnter: () => void;
}

export default function WelcomeGate({ onEnter }: WelcomeGateProps) {
  const [leaving, setLeaving] = useState(false);

  const handleClick = () => {
    setLeaving(true);
    setTimeout(() => {
      onEnter();
    }, 700);
  };

  return (
    <div className={`gate-overlay ${leaving ? 'gate-fade-out' : 'gate-fade-in'}`}>
      {/* Floating hearts background */}
      <div className="gate-hearts" aria-hidden="true">
        {['❤️', '🌹', '✨', '💕', '🕊️', '💖', '🌸', '💝'].map((emoji, i) => (
          <span
            key={i}
            className="gate-heart-particle"
            style={{
              left: `${10 + i * 11}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${8 + (i % 3) * 2}s`,
              fontSize: `${14 + (i % 3) * 6}px`,
            }}
          >
            {emoji}
          </span>
        ))}
      </div>

      {/* Center content */}
      <div className="gate-center">
        {/* Decorative top ornament */}
        <div className="gate-ornament" aria-hidden="true">✦ ❧ ✦</div>

        {/* Title */}
        <h1 className="gate-title">A Message Awaits You</h1>

        {/* Subtitle */}
        <p className="gate-subtitle">Something special has been written just for you…</p>

        {/* Divider */}
        <div className="gate-divider" aria-hidden="true">
          <span className="gate-divider-line" />
          <span className="gate-divider-icon">♥</span>
          <span className="gate-divider-line" />
        </div>

        {/* The gate button */}
        <button
          className="gate-button"
          onClick={handleClick}
          disabled={leaving}
        >
          Welcome Cutee
        </button>

        {/* Bottom ornament */}
        <div className="gate-ornament gate-ornament-bottom" aria-hidden="true">✦ ❧ ✦</div>
      </div>
    </div>
  );
}
