const floatingEmojis = [
  { emoji: '❤️', left: '10%', delay: '0s' },
  { emoji: '✨', left: '30%', delay: '3s' },
  { emoji: '🕊️', left: '70%', delay: '1s' },
  { emoji: '🌹', left: '90%', delay: '5s' },
];

export default function LoveLetterPage() {
  return (
    <div className="love-letter-bg">
      {/* Floating background emojis */}
      {floatingEmojis.map((item, i) => (
        <span
          key={i}
          className="bg-emoji"
          style={{ left: item.left, animationDelay: item.delay }}
        >
          {item.emoji}
        </span>
      ))}

      {/* Letter container */}
      <div className="letter-container">
        {/* Parchment texture overlay */}
        <div className="parchment-overlay" />

        {/* Header */}
        <div className="letter-header">
          To my dearest Priya (Cutee) 📜✨
        </div>

        {/* Body */}
        <div className="letter-body">
          <p>
            Good morning to the person who makes my heart feel at home. 🏠💖 I hope you woke up today feeling the peace and safety you deserve.
          </p>

          <p>
            I am so sorry, my favorite person. 😔{' '}
            <span className="highlight">Please don't misunderstand my intentions;</span>{' '}
            I acted that way because the thought of losing you absolutely terrifies me, and I think it always will. You are, without a doubt, the most important part of my life. 🌎✨
          </p>

          <p>
            Regarding the repost—if you feel like keeping it after thinking, it is totally up to you. You are always free to do what feels right. 🕊️ I am sorry I asked to remove it; I let my fears get the best of me because I am doing my absolute best to make you feel special every single day, and the idea of losing you is the scariest thing I can imagine.
          </p>

          <p>
            I want you to know that your existence is the{' '}
            <span className="highlight">grace note in my life;</span>{' '}
            🎶 you make everything softer, kinder, and so much more meaningful. I wanted to know if I was even capable of treating you the way you deserve, as I always just want you to feel like the most important person in the world—because you are. 👑💎
          </p>

          <p>
            Please forgive me for letting my insecurities cloud the view. ☁️ I promise to keep putting in every ounce of effort for the rest of my life, just for you. No matter where the day takes you, remember that you are my good luck charm, my greatest treasure, and my absolute everything. 🍀💎 I'm always here, silently rooting for you and wishing for your happiness. 🌟
          </p>
        </div>

        {/* Footer signature */}
        <div className="letter-footer">
          Always yours, ❤️
        </div>

        {/* Wax seal */}
        <div className="wax-seal">P</div>
      </div>

      {/* Attribution footer */}
      <footer className="attribution-footer">
        Built with{' '}
        <span style={{ color: 'rgba(212, 175, 55, 0.8)' }}>♥</span>{' '}
        using{' '}
        <a
          href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
            typeof window !== 'undefined' ? window.location.hostname : 'unknown-app'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'rgba(212, 175, 55, 0.65)', textDecoration: 'none' }}
        >
          caffeine.ai
        </a>
      </footer>
    </div>
  );
}
