import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface HeartParticle {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
}

function HeartRain() {
  const [hearts, setHearts] = useState<HeartParticle[]>([]);

  useEffect(() => {
    const generateHearts = () => {
      const newHearts = Array.from({ length: 20 }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * 100,
        size: 15 + Math.random() * 25,
        duration: 3 + Math.random() * 4,
        delay: Math.random() * 5,
      }));
      setHearts(newHearts);
    };

    generateHearts();
    const interval = setInterval(generateHearts, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-fall opacity-70"
          style={{
            left: `${heart.x}%`,
            top: '-50px',
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          <Heart
            className="text-red-400 fill-red-400"
            size={heart.size}
          />
        </div>
      ))}
    </div>
  );
}

export default HeartRain;
