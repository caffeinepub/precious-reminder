import { useEffect } from 'react';

interface HeartBurstProps {
  onComplete?: () => void;
}

export default function HeartBurst({ onComplete }: HeartBurstProps) {
  useEffect(() => {
    const hearts: HTMLElement[] = [];

    for (let i = 0; i < 100; i++) {
      const timeout = setTimeout(() => {
        const heart = document.createElement('div');
        heart.className = 'heart-particle';
        heart.innerHTML = i % 2 === 0 ? '❤️' : '💖';

        const x = (Math.random() - 0.5) * window.innerWidth * 1.8;
        const y = (Math.random() - 0.5) * window.innerHeight * 1.8;

        heart.style.setProperty('--hx', `${x}px`);
        heart.style.setProperty('--hy', `${y}px`);

        document.body.appendChild(heart);
        hearts.push(heart);

        setTimeout(() => {
          if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
          }
        }, 3000);
      }, i * 15);

      return () => clearTimeout(timeout);
    }

    if (onComplete) {
      const completeTimeout = setTimeout(onComplete, 500);
      return () => clearTimeout(completeTimeout);
    }
  }, [onComplete]);

  return null;
}
