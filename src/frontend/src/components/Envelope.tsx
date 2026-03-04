import type React from "react";
import { useState } from "react";
import LetterModal from "./LetterModal";

const Envelope: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleEnvelopeClick = () => {
    if (isOpen || showModal) return;
    setIsOpen(true);
    setTimeout(() => {
      setShowModal(true);
    }, 1200);
  };

  const handleClose = () => {
    setShowModal(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };

  return (
    <>
      <button
        type="button"
        className={`envelope-wrapper${isOpen ? " open" : ""}`}
        onClick={handleEnvelopeClick}
        aria-label="Open letter"
        style={{ border: "none", cursor: "pointer" }}
      >
        {/* Triangular flap at top */}
        <div className="envelope-flap" />

        {/* Side triangles for envelope body */}
        <div className="envelope-left" />
        <div className="envelope-right" />
        <div className="envelope-bottom" />

        {/* Wax seal */}
        <div className="wax-seal">P</div>

        {/* Letter peeking out */}
        <div className="letter" />
      </button>

      {showModal && <LetterModal onClose={handleClose} />}
    </>
  );
};

export default Envelope;
