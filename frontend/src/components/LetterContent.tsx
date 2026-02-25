export default function LetterContent() {
  return (
    <div
      style={{
        color: '#333',
        lineHeight: 1.6,
        fontSize: '16px',
        fontFamily: "'Playfair Display', Georgia, serif",
      }}
    >
      {/* Header */}
      <h1
        style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: '28px',
          color: '#800020',
          marginBottom: '15px',
          marginTop: 0,
          borderBottom: '1px solid #d4af37',
          display: 'inline-block',
          paddingBottom: '4px',
        }}
      >
        Welcome, Priya
      </h1>

      {/* Ornament */}
      <div
        style={{
          textAlign: 'center',
          color: '#d4af37',
          fontSize: '1.4rem',
          margin: '12px 0 16px',
          opacity: 0.9,
        }}
      >
        ❦
      </div>

      {/* Letter Body */}
      <div style={{ textAlign: 'justify' }}>
        <p style={{ marginBottom: '1.2em', marginTop: 0 }}>
          Honestly, in the middle of that super quiet exam hall, my mind just completely walked away
          from the paper. I couldn't help it—I just started thinking about you, and suddenly, the
          whole stressful room felt a lot brighter.
        </p>

        <p style={{ marginBottom: '1.2em' }}>
          I get so lost in thoughts of you,{' '}
          <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Priya</span>. It's like the
          rest of the world just fades into the background and stays still while I'm caught up in
          how amazing you are. ☁️✨
        </p>

        <p style={{ marginBottom: '1.2em' }}>
          I'm constantly in awe of you. You have this incredible balance—you're so gentle and kind,
          yet you have a strength that I truly admire. 🌹 You have the purest soul I've ever met,
          and a heart that's literally made of gold and fire. ❤️‍🔥
        </p>

        <p style={{ marginBottom: '1.2em' }}>
          I want you to know how much you truly mean to me. You aren't just "the best," my{' '}
          <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Cutee</span>—you are everything
          to me. 💎 You are the most valuable person in my life, a rare kind of magic that I never
          want to let go of. 🔒💖 You're my favorite thought, my biggest priority, and the person
          I'm most grateful for. 🌎✨
        </p>

        <p style={{ marginBottom: '1.2em' }}>
          You're the kind of magic I never want to lose. I'm so grateful for every moment with you.
        </p>

        <p style={{ marginBottom: '0.5em' }}>
          At the end of the day{' '}
          <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Cutee</span>, you aren't just a
          part of my life—you're the best part of it. I'm so lucky to have you, and I promise to
          always treasure you exactly as you are. ❤️✨
        </p>
      </div>

      {/* Footer Signature */}
      <div
        style={{
          marginTop: '30px',
          textAlign: 'right',
          fontFamily: "'Dancing Script', cursive",
          fontSize: '1.5rem',
          color: '#800020',
        }}
      >
        Always Yours...
      </div>
    </div>
  );
}
