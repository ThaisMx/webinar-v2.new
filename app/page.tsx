"use client";

import { Play, Lock } from "lucide-react";
import { SocialProofPopup } from "@/components/SocialProofPopup";
import { useState, useEffect } from "react";

function getNextTimeSlot() {
  const now = new Date();
  const minutes = now.getMinutes();
  const roundedMinutes = Math.ceil(minutes / 15) * 15;
  const nextSlot = new Date(now);
  nextSlot.setMinutes(roundedMinutes);
  nextSlot.setSeconds(0);
  
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  };
  
  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: "short",
    day: "2-digit",
    month: "2-digit"
  };
  
  const dateStr = nextSlot.toLocaleDateString('pt-BR', dateOptions).replace(',', '');
  const timeStr = nextSlot.toLocaleTimeString('pt-BR', timeOptions)
    .replace(':00', ':00')
    .toUpperCase();
  
  const diffMinutes = Math.ceil((nextSlot.getTime() - now.getTime()) / (1000 * 60));
  
  return `${dateStr}, ${timeStr} GMT-3 - Em ${diffMinutes} ${diffMinutes === 1 ? 'minuto' : 'minutos'}`;
}

export default function Home() {
  const [timeSlot, setTimeSlot] = useState(getNextTimeSlot());

  useEffect(() => {
    // Atualiza o horário imediatamente
    setTimeSlot(getNextTimeSlot());

    // Configura o intervalo para atualizar a cada minuto
    const interval = setInterval(() => {
      setTimeSlot(getNextTimeSlot());
    }, 60 * 1000); // 1 minuto em milissegundos

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[#1E1E1E] text-white">
      <SocialProofPopup />
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-8 pb-8 border-b border-white/10">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Willian Aksenen®</h1>
          <div className="text-sm text-gray-400 mb-4">----------------- Acesso Limitado -----------------</div>
          <h2 className="text-xl md:text-2xl mb-2">Sistema proprietário de 5 partes para Segurança Financeira:</h2>
          <div className="text-2xl md:text-4xl font-bold mb-8">
            Aprenda Como Conquistar{" "}
            <span className="underline decoration-4">MUITO Dinheiro</span> Investindo em Dólar
          </div>
        </header>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-[2fr,1fr] gap-8 mb-12 pb-12 border-b border-white/10">
          {/* Video Section */}
          <div className="relative aspect-video bg-black/50 rounded-lg overflow-hidden">
            <iframe 
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/l9ttRQ1CyP8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Sign Up Form */}
          <div className="bg-[#2a2a2a] rounded-lg p-4 md:p-6">
            <div className="text-center mb-6">
              <div className="mb-4">
                <img
                  src="/images/Mockup.png"
                  alt="O Segredo das Mesas Proprietárias"
                  className="rounded-lg w-full"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-4">
                Comece Agora Mesmo<br />
                Seu Programa De<br />
                Treinamento<br />
                GRATUITO Em 5<br />
                Partes!
              </h3>
            </div>

            <form className="space-y-4">
              <select className="w-full px-4 py-3 rounded bg-white text-gray-800 text-sm cursor-pointer">
                <option>{timeSlot}</option>
              </select>

              <input
                type="text"
                placeholder="Nome"
                className="w-full px-4 py-3 rounded bg-white text-gray-800 text-sm"
              />

              <input
                type="email"
                placeholder="Seu endereço de e-mail aqui..."
                className="w-full px-4 py-3 rounded bg-white text-gray-800 text-sm"
              />

              <div className="flex gap-2">
                <select className="w-[90px] px-2 py-3 rounded bg-white text-gray-800 text-sm flex items-center">
                  <option value="55">🇧🇷 +55</option>
                </select>
                <input
                  type="tel"
                  placeholder="Número de telefone"
                  className="flex-1 px-4 py-3 rounded bg-white text-gray-800 text-sm"
                />
              </div>

              <button className="w-full bg-[#0096FF] hover:bg-[#0084E0] text-white font-bold py-4 rounded transition-colors">
                <span className="block text-lg">Desbloqueie o Sistema de 5 Partes GRÁTIS!</span>
                <span className="block text-sm">Avaliado em 4.9/5 estrelas no Trustpilot - Desbloqueie agora!</span>
              </button>

              <p className="text-[11px] text-gray-400 text-center mt-2">
                Ao enviar seus dados, você concorda em permitir que coletemos e usemos suas informações de acordo com nossos Termos de Serviço e Política de Privacidade.
              </p>
            </form>
          </div>
        </div>

        {/* Video Modules Section */}
        <section className="text-center mb-12 pb-12 border-b border-white/10">
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-[#0096FF]">Desbloqueie nosso "Sistema de 5 Partes" onde</h2>
          <p className="text-lg md:text-2xl mb-8 font-bold text-white">
            Você aprenderá os 3 segredos e a metodologia exata sobre como apenas 1% dos 
            investidores do mundo realmente conquistam segurança financeira.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
            {[1, 2, 3, 4, 5].map((index) => (
              <div key={index} className="relative aspect-video bg-black/50 rounded-lg overflow-hidden group cursor-pointer">
                <img
                  src="/images/IMG_1377.JPG"
                  alt="Imagem de apresentação"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Play className="w-6 h-6 text-white/90" />
                  </div>
                  <Lock className="absolute top-2 right-2 w-4 h-4 text-white/50" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <section className="text-center mb-12 pb-12 border-b border-white/10">
          <p className="text-xs md:text-sm text-gray-400">
            Willian Aksenen é uma empresa de educação financeira que fornece treinamento sobre investimentos em dólar. 
            Não fazemos alegações ou representações de que ao usar Willian Aksenen você ganhará dinheiro ou garantirá 
            qualquer ganho financeiro. Memorandos legais e declarações de experiência legal estão disponíveis em nosso site. 
            O retorno do seu investimento depende de muitos fatores, incluindo sua dedicação, desejo e motivação. 
            Estamos aqui apenas para ajudá-lo fornecendo educação e treinamento de qualidade.
          </p>
        </section>

        {/* Footer */}
        <footer className="text-center text-xs md:text-sm text-gray-400 pt-4">
          <p className="space-x-2">
            Willian Aksenen © 2024. Todos os direitos reservados
            <a href="#" className="underline hover:text-gray-300">Isenção de responsabilidade</a>
            <a href="#" className="underline hover:text-gray-300">Termos de uso</a>
            <a href="#" className="underline hover:text-gray-300">Política de Privacidade</a>
            <a href="#" className="underline hover:text-gray-300">Política de Cookies</a>
            <a href="#" className="underline hover:text-gray-300">Contato LGPD</a>
          </p>
        </footer>
      </div>
    </main>
  );
}