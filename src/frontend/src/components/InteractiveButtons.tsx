import type React from "react";
import { useState } from "react";

interface InteractiveButtonsProps {
  onYes: () => void;
}

const InteractiveButtons: React.FC<InteractiveButtonsProps> = ({ onYes }) => {
  const [noPos, setNoPos] = useState<{ x: number; y: number } | null>(null);

  const moveNo = () => {
    const btnW = 100;
    const btnH = 44;
    const x = Math.random() * (window.innerWidth - btnW - 20);
    const y = Math.random() * (window.innerHeight - btnH - 20);
    setNoPos({ x, y });
  };

  const noStyle: React.CSSProperties = noPos
    ? { position: "fixed", left: noPos.x, top: noPos.y, zIndex: 9999 }
    : {};

  return (
    <div className="btn-container">
      <button
        type="button"
        className="choice-btn yes-btn"
        onClick={(e) => {
          e.stopPropagation();
          onYes();
        }}
      >
        Yes
      </button>
      <button
        type="button"
        className="choice-btn no-btn"
        style={noStyle}
        onMouseEnter={moveNo}
        onFocus={moveNo}
        onClick={(e) => {
          e.stopPropagation();
          moveNo();
        }}
      >
        No
      </button>
    </div>
  );
};

export default InteractiveButtons;
