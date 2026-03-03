import { useEffect, useState } from 'react';
import LetterContent from './LetterContent';

interface ScrollLetterProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ScrollLetter({ isOpen, onClose }: ScrollLetterProps) {
  const [animateOpen, setAnimateOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setAnimateOpen(true), 100);
      return () => clearTimeout(timer);
    } else {
      setAnimateOpen(false);
    }
  }, [isOpen]);

  return (
    <div className="scroll-container">
      {/* Top wooden roll handle */}
      <div className="scroll-roll scroll-roll-top"></div>

      {/* Parchment body */}
      <div className={`parchment-body${animateOpen ? ' open' : ''}`}>
        <div className={`letter-content-wrapper${animateOpen ? ' visible' : ''}`}>
          <LetterContent onClose={onClose} />
        </div>
      </div>

      {/* Bottom wooden roll handle */}
      <div className="scroll-roll scroll-roll-bottom"></div>
    </div>
  );
}
