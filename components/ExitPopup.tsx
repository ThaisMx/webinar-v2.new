import { useState, useEffect } from 'react';

export function ExitPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setShowPopup(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        {/* Botão de fechar */}
        <button 
          onClick={() => setShowPopup(false)}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        {/* Título */}
        <h2 className="text-2xl font-bold text-[#29b6f6] mb-4">
          Você está quase lá!
        </h2>

        {/* Texto principal */}
        <p className="text-gray-700 mb-6">
          Não deixe nada te atrapalhar – complete seu cadastro agora para desbloquear meu método, 
          que mostra exatamente como fiz meu primeiro milhão no mercado!
        </p>

        {/* Lista de benefícios */}
        <ul className="space-y-2 mb-6">
          <li className="flex items-center text-gray-700">
            <span className="text-[#29b6f6] mr-2">✓</span>
            Eleito o Melhor Curso de Trading por mais de 15 mil alunos
          </li>
          <li className="flex items-center text-gray-700">
            <span className="text-[#29b6f6] mr-2">✓</span>
            Transformou milhares de traders iniciantes em traders lucrativos
          </li>
        </ul>

        {/* Botão de retorno */}
        <button
          onClick={() => setShowPopup(false)}
          className="w-full bg-[#29b6f6] hover:bg-[#0288d1] text-white font-bold py-4 px-6 rounded-lg transition-colors"
        >
          Voltar para o Cadastro
        </button>
      </div>
    </div>
  );
} 