import { useState, useEffect } from 'react';
import { Heart, Sparkles, Mail } from 'lucide-react';

interface InitialAnimationProps {
  onStart: () => void;
}

function InitialAnimation({ onStart }: InitialAnimationProps) {
  const [hearts, setHearts] = useState<{ id: number; x: number; delay: number }[]>([]);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const newHearts = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setHearts(newHearts);

    setTimeout(() => setShowButton(true), 1000);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-pink-200 via-rose-200 to-red-200">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float"
          style={{
            left: `${heart.x}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        >
          <Heart className="text-red-400 fill-red-400 opacity-60" size={20 + Math.random() * 20} />
        </div>
      ))}

      <div className="text-center z-10 px-4">
        <div className="mb-8 animate-bounce">
          <Sparkles className="mx-auto text-yellow-500 mb-4" size={60} />
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-rose-600 mb-4 animate-pulse">
            Barbara
          </h1>
          <p className="text-2xl md:text-3xl text-rose-600 font-semibold mb-8">
            Tenho algo especial para você...
          </p>
        </div>

        {showButton && (
          <button
            onClick={onStart}
            className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 via-red-500 to-rose-600 text-white text-xl font-bold rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 animate-bounce"
          >
            <div className="flex items-center gap-3">
              <Mail className="group-hover:rotate-12 transition-transform" size={28} />
              <span>Abrir Mensagem</span>
              <Heart className="group-hover:scale-125 transition-transform fill-white" size={28} />
            </div>
            <div className="absolute -top-2 -right-2">
              <Sparkles className="text-yellow-300 animate-spin" size={24} />
            </div>
            <div className="absolute -bottom-2 -left-2">
              <Sparkles className="text-yellow-300 animate-spin" size={24} />
            </div>
          </button>
        )}

        <div className="mt-12 space-y-4">
          {['Você é incrível!', 'Você me inspira!', 'Você me dá forças!'].map((text, index) => (
            <p
              key={text}
              className="text-lg md:text-xl text-rose-700 font-medium opacity-0 animate-fadeIn"
              style={{ animationDelay: `${1.5 + index * 0.5}s` }}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InitialAnimation;
