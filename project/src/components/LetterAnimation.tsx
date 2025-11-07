import { useState, useEffect } from 'react';
import { Heart, Lock, CheckCircle } from 'lucide-react';

function LetterAnimation() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);

      if (position > 100 && !isOpen) {
        setIsOpen(true);
        setShowLogin(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  const handlePasswordSubmit = () => {
    if (password.toLowerCase() === 'quarta') {
      setIsUnlocked(true);
      setError('');
      setPassword('');
    } else {
      setError('Senha incorreta! Tente novamente.');
      setPassword('');
    }
  };

  const openPercentage = Math.min((scrollPosition / 300) * 100, 100);

  if (showLogin && !isUnlocked) {
    return (
      <div className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="relative w-full max-w-md">
          <div className="bg-white rounded-lg shadow-2xl p-8 animate-fadeIn">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-pink-400 to-rose-500 p-4 rounded-full">
                <Lock className="text-white" size={40} />
              </div>
            </div>

            <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-600 mb-2">
              Momento Especial
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Digite a senha para acessar a mensagem especial...
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-rose-600 font-semibold mb-2">
                  Qual foi o dia da semana que nos vimos?
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError('');
                  }}
                  onKeyPress={(e) => e.key === 'Enter' && handlePasswordSubmit()}
                  placeholder="Digite aqui..."
                  className="w-full px-4 py-3 border-2 border-pink-300 rounded-lg focus:outline-none focus:border-rose-500 transition-colors text-center text-lg"
                  autoFocus
                />
              </div>

              {error && (
                <p className="text-red-500 font-semibold text-center animate-bounce">
                  {error}
                </p>
              )}

              <button
                onClick={handlePasswordSubmit}
                className="w-full bg-gradient-to-r from-pink-500 to-rose-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Desbloquear Mensagem
              </button>
            </div>

            <div className="mt-8 text-center">
              <Heart className="text-red-500 fill-red-500 inline-block animate-pulse" size={24} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="relative w-full max-w-3xl">
        {!isUnlocked && (
          <div className="text-center mb-12">
            <p className="text-2xl md:text-3xl text-rose-600 font-semibold animate-pulse">
              Role para baixo para abrir a carta
            </p>
            <div className="mt-4 animate-bounce">
              <svg className="mx-auto w-8 h-8 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        )}

        {isUnlocked && (
          <div className="text-center mb-8 animate-fadeIn">
            <div className="flex justify-center mb-4">
              <CheckCircle className="text-green-500 fill-green-500" size={48} />
            </div>
            <p className="text-2xl md:text-3xl text-rose-600 font-semibold">
              Acesso liberado! Leia a mensagem abaixo...
            </p>
          </div>
        )}

        <div
          className="relative bg-white rounded-lg shadow-2xl overflow-hidden transition-all duration-500"
          style={{
            transform: `perspective(1000px) rotateX(${isUnlocked ? 0 : openPercentage * 0.5}deg)`,
          }}
        >
          <div
            className="absolute top-0 left-0 w-full h-20 bg-gradient-to-br from-pink-300 to-rose-400 origin-top transition-transform duration-700 z-20 flex items-center justify-center"
            style={{
              transform: `rotateX(${isUnlocked ? 0 : -openPercentage * 1.8}deg) translateY(${isUnlocked ? 0 : openPercentage * 0.5}px)`,
              transformOrigin: 'bottom',
            }}
          >
            <Heart className="text-white fill-white" size={32} />
          </div>

          {isUnlocked && (
            <div className="p-8 md:p-12 pt-24 relative z-10 animate-fadeIn">
              <div className="space-y-6 text-gray-800">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-600 mb-4">
                    Para Barbara
                  </h2>
                  <div className="flex justify-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <Heart key={i} className="text-red-500 fill-red-500 animate-pulse" size={20} style={{ animationDelay: `${i * 0.2}s` }} />
                    ))}
                  </div>
                </div>

                <p className="text-lg md:text-xl leading-relaxed text-center md:text-left">
                  Eu admiro você por ser uma pessoa <span className="font-bold text-rose-600">exemplar</span>,
                  alguém que me <span className="font-bold text-rose-600">motiva todos os dias</span>.
                </p>

                <p className="text-lg md:text-xl leading-relaxed text-center md:text-left">
                  Você me <span className="font-bold text-rose-600">dá forças</span> quando mais preciso,
                  e sua presença faz toda a diferença na minha vida.
                </p>

                <p className="text-lg md:text-xl leading-relaxed text-center md:text-left">
                  Sua maneira de ser, sua <span className="font-bold text-rose-600">dedicação</span> e
                  seu <span className="font-bold text-rose-600">caráter</span> são inspiradores.
                  Você é um exemplo que eu quero seguir.
                </p>

                <p className="text-lg md:text-xl leading-relaxed text-center md:text-left">
                  Barbara, você é <span className="font-bold text-rose-600">especial</span>,
                  e quero que saiba o quanto te admiro e o quanto você significa para mim.
                </p>

                <div className="pt-8 text-center">
                  <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-600">
                    Continue sendo essa pessoa incrível!
                  </p>
                  <div className="mt-6 flex justify-center gap-3">
                    {[...Array(7)].map((_, i) => (
                      <Heart
                        key={i}
                        className="text-red-500 fill-red-500 animate-bounce"
                        size={24}
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {!isUnlocked && (
            <div
              className="p-8 md:p-12 pt-24 relative z-10"
              style={{
                opacity: openPercentage / 100,
                transform: `scale(${0.9 + (openPercentage / 1000)})`,
              }}
            >
              <div className="text-center text-rose-600 font-semibold">
                Desbloqueie a mensagem para continuar...
              </div>
            </div>
          )}

          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <Heart
                key={i}
                className="absolute text-pink-300 fill-pink-300 opacity-20 animate-float"
                size={16}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        </div>

        {isUnlocked && (
          <div className="mt-12 text-center animate-fadeIn">
            <p className="text-xl md:text-2xl text-rose-600 font-semibold">
              Com todo carinho e admiração
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default LetterAnimation;
