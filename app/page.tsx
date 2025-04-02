"use client";

import { Play, Lock } from "lucide-react";
import { SocialProofPopup } from "@/components/SocialProofPopup";
import { ExitPopup } from "@/components/ExitPopup";
import { useEffect } from "react";

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  useEffect(() => {
    try {
      // Adiciona o script do WebinarJam dinamicamente
      const script = document.createElement('script');
      script.src = "https://event.webinarjam.com/register/7y2y9c73/embed-form?formButtonText=Sistema%20de%205%20Partes%20-%20Gr%C3%A1tis!%20&formAccentColor=%2329b6f6&formAccentOpacity=0.95&formBgColor=%23ffffff&formBgOpacity=1";
      script.async = true;
      script.onerror = (error) => {
        console.error('Erro ao carregar o script do WebinarJam:', error);
      };
      
      // Encontra o wrapper do formulário e adiciona o script
      const formWrapper = document.querySelector('.wj-embed-wrapper');
      if (formWrapper) {
        formWrapper.appendChild(script);
      } else {
        console.error('Wrapper do WebinarJam não encontrado');
      }

      // Cleanup ao desmontar o componente
      return () => {
        if (formWrapper && script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    } catch (error) {
      console.error('Erro ao inicializar o WebinarJam:', error);
    }
  }, []);

  // Adiciona verificação de carregamento para o iframe
  useEffect(() => {
    const iframe = document.querySelector('iframe');
    if (iframe) {
      iframe.onload = () => console.log('Iframe carregado com sucesso');
      iframe.onerror = () => console.error('Erro ao carregar o iframe');
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#1E1E1E] text-white">
      <SocialProofPopup />
      <ExitPopup />
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-8 pb-8 border-b border-white/10">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Willian Aksenen®</h1>
          <div className="text-sm text-gray-400 mb-4">----------------- Acesso Limitado -----------------</div>
          <h2 className="text-xl md:text-2xl mb-2">Sistema proprietário de 5 partes para Construir Renda Previsível:</h2>
          <div className="text-2xl md:text-4xl font-bold mb-8">
          Como Construir{" "}
            <span className="underline decoration-4">Uma Segunda Renda em Dólar</span> com Apenas 30 Minutos Por Dia
          </div>
        </header>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-[2fr,1fr] gap-8 mb-12 pb-12 border-b border-white/10">
          {/* Video Section */}
          <div className="relative aspect-video bg-black/50 rounded-lg overflow-hidden">
            <iframe 
              className="absolute inset-0 w-full h-full"
              src="https://player-vz-4c3ffc15-b98.tv.pandavideo.com.br/embed/?v=f2f1927d-04b1-4d69-b148-7cede68481e1"
              title="Video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* WebinarJam Form */}
          <div className="bg-[#2a2a2a] rounded-lg p-4 md:p-6">
            <div className="text-center mb-6">
              <div className="mb-4">
                <img
                  src={`${basePath}/images/Mockup.png`}
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
            <div className="wj-embed-wrapper" data-webinar-hash="7y2y9c73"></div>
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
                  src={`${basePath}/images/IMG_1377.JPG`}
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