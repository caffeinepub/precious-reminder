import { useMemo } from 'react';

interface Particle {
  id: number;
  top: number;
  left: number;
  opacity: number;
  size: number;
  twinkleDuration: string;
  twinkleDelay: string;
  driftDuration: string;
  driftDelay: string;
  driftX: number;
  driftY: number;
}

interface FloatingShape {
  id: number;
  top: number;
  left: number;
  size: number;
  opacity: number;
  duration: string;
  delay: string;
  type: 'heart' | 'sparkle';
  rotateDeg: number;
}

export default function StarBackground() {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 90 }, (_, i) => {
      const sizeClass = Math.random();
      const size = sizeClass < 0.5 ? 1.5 : sizeClass < 0.8 ? 2 : 3;
      return {
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        // Softer opacity range — dimmer, more ambient
        opacity: 0.12 + Math.random() * 0.38,
        size,
        twinkleDuration: `${3 + Math.random() * 5}s`,
        twinkleDelay: `${Math.random() * 5}s`,
        driftDuration: `${16 + Math.random() * 22}s`,
        driftDelay: `${Math.random() * 12}s`,
        driftX: (Math.random() - 0.5) * 22,
        driftY: (Math.random() - 0.5) * 16,
      };
    });
  }, []);

  const floatingShapes = useMemo<FloatingShape[]>(() => {
    return Array.from({ length: 10 }, (_, i) => ({
      id: i,
      top: Math.random() * 90,
      left: Math.random() * 95,
      size: 9 + Math.random() * 11,
      // Softer opacity — more whisper-like
      opacity: 0.08 + Math.random() * 0.14,
      duration: `${22 + Math.random() * 26}s`,
      delay: `${Math.random() * 14}s`,
      type: i % 3 === 0 ? 'sparkle' : 'heart',
      rotateDeg: Math.random() * 20 - 10,
    }));
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      {/* Star particles — muted warm gold, softer glow */}
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background:
              p.size > 2.5
                ? 'radial-gradient(circle, #e8d08a 0%, #c9a84c 60%, transparent 100%)'
                : '#c9a84c',
            boxShadow:
              p.size > 2.5
                ? `0 0 ${p.size * 2.5}px rgba(201,168,76,0.35), 0 0 ${p.size * 5}px rgba(201,168,76,0.15)`
                : `0 0 ${p.size * 1.8}px rgba(201,168,76,0.25)`,
            borderRadius: '50%',
            opacity: p.opacity,
            animation: `twinkle ${p.twinkleDuration} ease-in-out infinite, floatDrift ${p.driftDuration} ease-in-out infinite`,
            animationDelay: `${p.twinkleDelay}, ${p.driftDelay}`,
            '--drift-x': `${p.driftX}px`,
            '--drift-y': `${p.driftY}px`,
          } as React.CSSProperties}
        />
      ))}

      {/* Floating hearts and sparkles — muted blush & soft gold */}
      {floatingShapes.map((shape) => (
        <div
          key={`shape-${shape.id}`}
          style={{
            position: 'absolute',
            top: `${shape.top}%`,
            left: `${shape.left}%`,
            opacity: shape.opacity,
            fontSize: `${shape.size}px`,
            // Softer, more muted blush rose and warm gold
            color: shape.type === 'heart' ? '#c47a8a' : '#c9a84c',
            animation: `floatUp ${shape.duration} ease-in-out infinite`,
            animationDelay: shape.delay,
            transform: `rotate(${shape.rotateDeg}deg)`,
            filter:
              shape.type === 'heart'
                ? 'drop-shadow(0 0 3px rgba(180,100,120,0.25))'
                : 'drop-shadow(0 0 3px rgba(201,168,76,0.2))',
            userSelect: 'none',
          }}
        >
          {shape.type === 'heart' ? '♥' : '✦'}
        </div>
      ))}
    </div>
  );
}
