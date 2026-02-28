import { useEffect, useRef, useState } from 'react';

interface MessageDisplayProps {
  selectedIndex: number | null;
}

const MESSAGES = [
  "Cutee, I've been sitting here trying to find the right words, but the truth is, I get completely lost every single time I look at you ✨. It's like the rest of the world just blurs out and you're the only thing left in focus—you have this rare way of pulling me in that I can't even describe. \n\nAnd your voice, cutee? It's genuinely my medicine 💊🎧. Just the sound of it acts like a reset for my soul; it's the one thing that can instantly make everything okay again. That's why those hours yesterday felt like an eternity ⏳. \n\nHaving my phone taken away and struggling for so long just to get it back was torture, mostly because it meant I couldn't reach out to you, Priya. I find myself wanting to be with you for every single moment, to share every breath and every second, because life just feels more 'right' when you're there ❤️. \n\nThank you for being so patient and for understanding the silence, cutee. You're more than just special to me—you're everything, and I admire you more than I could ever put into a single message 🌹💍.",
  "Every time I think of you, I realize how lucky I am to have you in my life. You aren't just a person to me; you're the warmth in a cold room and the light when things get dark.",
  "I wanted to find a way to tell you that the small things you do—the way you laugh, the way you look when you're focused—they mean the absolute world to me.",
  "There is a quiet strength in you that I admire more than anything. You handle the world with such grace, and being by your side is my favorite place to be.",
  "If I could give you one thing, it would be the ability to see yourself through my eyes. Only then would you realize how truly incredible and beautiful you are.",
  "This isn't just a message; it's a promise. A promise to be here, to listen, and to appreciate every single moment we spend together. You are my most special person.",
];

export default function MessageDisplay({ selectedIndex }: MessageDisplayProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
    setAnimKey((k) => k + 1);
  }, [selectedIndex]);

  const formatMessage = (text: string) => {
    return text.split('\n').map((line, i) => (
      <span key={i}>
        {line}
        {i < text.split('\n').length - 1 && <br />}
      </span>
    ));
  };

  return (
    <div
      ref={scrollRef}
      className="garden-scroll"
      style={{
        height: '250px',
        overflowY: 'auto',
        marginTop: '10px',
        padding: '25px',
        borderTop: '1px double var(--gold)',
        borderBottom: '1px double var(--gold)',
        lineHeight: '1.8',
        fontSize: '1.05rem',
        textAlign: 'left',
        background: 'rgba(255,255,255,0.4)',
        borderRadius: '8px',
        fontFamily: 'Georgia, serif',
        color: 'var(--ink)',
      }}
    >
      {selectedIndex === null ? (
        <p
          style={{
            textAlign: 'center',
            color: '#bbb',
            marginTop: '80px',
            fontStyle: 'italic',
          }}
        >
          Select a flower above
        </p>
      ) : (
        <div key={animKey} className="fade-in-text">
          {formatMessage(MESSAGES[selectedIndex])}
        </div>
      )}
    </div>
  );
}
