import { useCallback, useRef, useState } from "react";

// ── Pleading messages cycle ──────────────────────────────────────────────────
const PLEADING_MSGS = [
  "Please Priya, one last chance to prove my worth... 🥺",
  "Cutee, I can't even forget you ever, please just once let me prove myself 😭",
  "I'm truly sorry, I've learned my lesson... please? 🙏",
  "I will make you the happiest person, just give me this one chance! 💖",
  "My hands are shivering writing this... please click Yes. 🏠",
];

// ── Letter body text ─────────────────────────────────────────────────────────
const LETTER_BODY = `I've spent the last few hours sitting with the weight of what's happened, and it's heavy. I'm struggling to find the right words because I realize now how much my 'foolish silence' actually cost us. 🥀

I see now that by waiting to tell you everything in person—because I was too afraid of how a text or call would sound—I prioritized my own comfort over your peace of mind. I left you alone in your thoughts, and that is a mistake I deeply regret. I understand exactly why that made you feel insecure; I broke a layer of trust by not being brave enough to be transparent in the moment. 😔

I'm not asking you to just 'forget' or move on. I'm asking for one chance to show you that I've learned this lesson the hard way. I want to prove to you that your security is my priority. I want to treat you with the kind of consistency and honesty where you never have to guess or wonder again. ✨

I'm not going anywhere, and I'm not giving up on us, but I know the next step is up to you. Please, Priya, just give me one opening to show you I can be the person you deserve. I promise that from this second forward, no matter how difficult or scary a conversation is, I will choose honesty over silence every single time. 🕊️`;

// ── App component ────────────────────────────────────────────────────────────
function App() {
  const [overlayVisible, setOverlayVisible] = useState(true);
  const [overlayFading, setOverlayFading] = useState(false);
  const [letterVisible, setLetterVisible] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [msgDisplay, setMsgDisplay] = useState("");
  const [noCount, setNoCount] = useState(0);
  const [yesFontSize, setYesFontSize] = useState(1.2);
  const [yesPaddingExtra, setYesPaddingExtra] = useState(0);
  const buttonsAreaRef = useRef<HTMLDivElement>(null);
  const noBtnRef = useRef<HTMLButtonElement>(null);

  // Open the letter — fade overlay then show letter
  const openLetter = useCallback(() => {
    setOverlayFading(true);
    setTimeout(() => {
      setOverlayVisible(false);
      setLetterVisible(true);
    }, 1200);
  }, []);

  // Move the NO button to a random spot inside the buttons area
  const moveButton = useCallback(() => {
    const btn = noBtnRef.current;
    const area = buttonsAreaRef.current;
    if (!btn || !area) return;

    const areaW = area.offsetWidth;
    const areaH = area.offsetHeight;
    const btnW = btn.offsetWidth || 80;
    const btnH = btn.offsetHeight || 40;

    const x = Math.random() * Math.max(0, areaW - btnW);
    const y = Math.random() * Math.max(0, areaH - btnH);

    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;

    // Update pleading message
    setMsgDisplay(PLEADING_MSGS[noCount % PLEADING_MSGS.length]);
    setNoCount((prev) => prev + 1);

    // Grow the YES button
    setYesFontSize((prev) => prev + 1.5);
    setYesPaddingExtra((prev) => prev + 1);
  }, [noCount]);

  // YES clicked — show success view
  const accept = useCallback(() => {
    setAccepted(true);
  }, []);

  return (
    <>
      {/* ── Entry Overlay ── */}
      {overlayVisible && (
        <div className={`overlay${overlayFading ? " fading" : ""}`}>
          <button
            type="button"
            className="open-btn"
            onClick={openLetter}
            data-ocid="overlay.open_modal_button"
          >
            To my Cutee Priya ❤️
          </button>
          <p className="open-hint">Please click to open</p>
        </div>
      )}

      {/* ── Letter Container ── */}
      {letterVisible && (
        <div className="letter-container">
          {!accepted ? (
            /* ── Main Content ── */
            <div id="mainContent">
              <div className="letter-header">My Dearest Cutee, 🎀</div>
              <div className="letter-content">{LETTER_BODY}</div>

              {/* Pleading message display */}
              <div className="small-msg">{msgDisplay}</div>

              {/* Buttons area */}
              <div className="buttons-area" ref={buttonsAreaRef}>
                <button
                  type="button"
                  className="yes-btn choice-btn"
                  onClick={accept}
                  style={{
                    fontSize: `${yesFontSize}rem`,
                    padding: `${12 + yesPaddingExtra}px ${35 + yesPaddingExtra * 2}px`,
                  }}
                  data-ocid="letter.primary_button"
                >
                  Yes, one last chance ❤️
                </button>
                <button
                  type="button"
                  className="no-btn choice-btn"
                  ref={noBtnRef}
                  onMouseOver={moveButton}
                  onFocus={moveButton}
                  onClick={moveButton}
                  data-ocid="letter.secondary_button"
                >
                  No
                </button>
              </div>
            </div>
          ) : (
            /* ── Success View ── */
            <div className="success-view" data-ocid="letter.success_state">
              <h2>Thank you, Cutee...</h2>
              <p>
                I promise I will never let you down or let you feel insecure
                ever again. I love you. ❤️
              </p>
            </div>
          )}
        </div>
      )}

      {/* ── Footer Attribution ── */}
      <div className="footer-attribution">
        <span>
          © {new Date().getFullYear()}. Built with ❤️ using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
              typeof window !== "undefined" ? window.location.hostname : "",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            caffeine.ai
          </a>
        </span>
      </div>
    </>
  );
}

export default App;
