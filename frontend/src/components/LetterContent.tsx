interface LetterContentProps {
  onClose: () => void;
}

export default function LetterContent({ onClose }: LetterContentProps) {
  return (
    <div className="letter-content">
      <h1>To My Most Special Person 🌹</h1>

      <p>
        To my cutee who holds my entire world together 🌍✨, I wanted to take a moment to remind
        you just how much you truly mean to me and I realized that words sometimes feel too small
        to hold it all. 💖
      </p>

      <p>
        You aren't just a part of my life; <strong>you are the very heart of it.</strong> Without
        you, my days lose their color and meaning 🌈☁️. Everything feels "off" and out of sync
        until I've spoken to you; it's like your voice is the only thing that can truly ground me
        and make the world feel right again. 🫂
      </p>

      <p>
        You are the most precious person I have ever known, the only one I feel this deeply for,
        and the one I cherish above all others. 💎 Every moment we spend apart feels like a quiet
        countdown until I can be near you again. ⏳❤️
      </p>

      <p>
        You have this incredible way of making everything better just by being yourself. Your
        presence is my safe haven 🏡, and your happiness is my biggest priority. I want you to
        always remember that you are loved beyond measure—not just for what you do, but for the
        beautiful, brilliant person you are. 🌟
      </p>

      <hr className="gold-divider" />

      <p className="highlight">✍️ A Note for Your Maths Exam ✍️</p>

      <p>
        As you head into your exam, I want you to take a deep breath and remember how capable you
        are 🧘‍♀️. I know how much pressure these numbers and formulas can bring, but they don't
        define your worth or your brilliance. 🧠🔥
      </p>

      <p>
        You have the focus and the mind to conquer every challenge on that paper! 📝✅ I am
        sending you every bit of luck and positive energy I have 🍀✨. Clear your mind, trust your
        instincts, and know that I am right here rooting for you through every single question.
        📣❤️
      </p>

      <p>
        <strong>You've got this!</strong> I'll be waiting right here to hear all about it. Wishing
        you the absolute best—you deserve nothing less than total success! 🏆🥇
      </p>

      <button className="close-btn" onClick={onClose}>
        Roll Back &amp; Close 📜
      </button>
    </div>
  );
}
