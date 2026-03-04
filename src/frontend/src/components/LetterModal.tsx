import type React from "react";
import { useState } from "react";
import InteractiveButtons from "./InteractiveButtons";
import SuccessMessage from "./SuccessMessage";

interface LetterModalProps {
  onClose: () => void;
}

const LetterModal: React.FC<LetterModalProps> = ({ onClose }) => {
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <>
      {/* Backdrop */}
      <div
        className="letter-backdrop"
        onClick={onClose}
        onKeyDown={(e) => e.key === "Escape" && onClose()}
        role="presentation"
      />

      {/* Expanded letter */}
      <dialog className="letter-expanded" aria-modal="true" open>
        <button type="button" className="close-btn" onClick={onClose}>
          Close Letter
        </button>

        <h1 className="letter-heading">My Dear Priya,</h1>

        <p className="letter-text">
          My Cutee... <br />
          <br />
          I'm writing this because the thought of a life without you isn't just
          a worry—it's the one thing I truly cannot afford. 🥀 I realize now
          that before you, I was just drifting. I own my mistakes, but please
          understand that the version of me from the past didn't even know you
          existed yet.
          <br />
          <br />
          From the second we met, my world narrowed down to just you. You are
          the only person I am addicted to, the only person I want to wake up
          to, and the only person I am terrified of losing.
          <br />
          <br />
          You aren't just a part of my life—you are the heartbeat of it. Please
          don't let a ghost from my past take away the future I only want to
          build with you. I am yours, completely and only. ❤️
        </p>

        {!showSuccess ? (
          <div className="question-box">
            <p className="question-text">
              Will you give me one more chance, Priya?
            </p>
            <InteractiveButtons onYes={() => setShowSuccess(true)} />
          </div>
        ) : (
          <SuccessMessage />
        )}
      </dialog>
    </>
  );
};

export default LetterModal;
