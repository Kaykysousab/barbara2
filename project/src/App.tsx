import { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import LetterAnimation from './components/LetterAnimation';
import HeartRain from './components/HeartRain';
import InitialAnimation from './components/InitialAnimation';

function App() {
  const [showContent, setShowContent] = useState(false);
  const [showHeartRain, setShowHeartRain] = useState(false);

  useEffect(() => {
    if (showContent) {
      setShowHeartRain(true);
    }
  }, [showContent]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 relative overflow-x-hidden">
      {!showContent ? (
        <InitialAnimation onStart={() => setShowContent(true)} />
      ) : (
        <>
          {showHeartRain && <HeartRain />}

          <div className="relative z-10">
            <header className="text-center pt-12 pb-8 px-4">
              <div className="inline-flex items-center gap-2 animate-bounce">
                <Heart className="text-red-500 fill-red-500" size={32} />
                <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-rose-600 animate-pulse">
                  Barbara
                </h1>
                <Heart className="text-red-500 fill-red-500" size={32} />
              </div>
              <div className="mt-4 flex items-center justify-center gap-2">
                <Sparkles className="text-yellow-500 animate-spin" size={20} />
                <p className="text-xl md:text-2xl text-rose-600 font-semibold">
                  Uma pessoa especial que ilumina meus dias
                </p>
                <Sparkles className="text-yellow-500 animate-spin" size={20} />
              </div>
            </header>

            <LetterAnimation />

            <footer className="text-center py-12 px-4">
              <div className="max-w-2xl mx-auto space-y-4">
                <p className="text-lg text-rose-700 font-medium animate-pulse">
                  Você é incrível, Barbara!
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                  {['Inspiradora', 'Especial', 'Admirável', 'Motivadora', 'Maravilhosa'].map((word, index) => (
                    <span
                      key={word}
                      className="px-4 py-2 bg-gradient-to-r from-pink-400 to-rose-500 text-white rounded-full text-sm font-semibold shadow-lg transform hover:scale-110 transition-transform duration-300"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      {word}
                    </span>
                  ))}
                </div>
              </div>
            </footer>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
