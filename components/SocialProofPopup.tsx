"use client";

import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";

interface SocialProof {
  name: string;
  location: string;
  action: string;
}

const socialProofs: SocialProof[] = [
  { name: "Pedro", location: "São Paulo", action: "iniciou o treinamento de 5 partes" },
  { name: "João", location: "Rio de Janeiro", action: "começou o treinamento" },
  { name: "Rafael", location: "Curitiba", action: "desbloqueou o acesso" },
  { name: "Lucas", location: "Porto Alegre", action: "iniciou o programa" },
  { name: "Gabriel", location: "Belo Horizonte", action: "começou o treinamento" },
  { name: "Matheus", location: "Salvador", action: "iniciou o treinamento" },
  { name: "Gustavo", location: "Brasília", action: "desbloqueou o acesso" },
  { name: "Felipe", location: "Florianópolis", action: "começou o programa" },
  { name: "Bruno", location: "Recife", action: "iniciou o treinamento" },
  { name: "Diego", location: "Fortaleza", action: "desbloqueou o acesso" }
];

export function SocialProofPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentProof, setCurrentProof] = useState<SocialProof | null>(null);
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    try {
      const showPopup = () => {
        if (!isEnabled) return;
        
        const randomProof = socialProofs[Math.floor(Math.random() * socialProofs.length)];
        setCurrentProof(randomProof);
        setIsVisible(true);

        setTimeout(() => {
          setIsVisible(false);
        }, 4000);
      };

      // Mostra o primeiro popup após 2 segundos
      const initialTimeout = setTimeout(showPopup, 2000);

      // Configura o intervalo para mostrar os próximos popups
      const interval = setInterval(() => {
        if (!isEnabled) return;
        showPopup();
      }, 6000);

      return () => {
        clearTimeout(initialTimeout);
        clearInterval(interval);
      };
    } catch (error) {
      console.error('Erro no SocialProofPopup:', error);
      setIsEnabled(false);
    }
  }, [isEnabled]);

  if (!isVisible || !currentProof || !isEnabled) return null;

  return (
    <div className="fixed bottom-4 left-4 bg-white text-black p-4 rounded-lg shadow-lg animate-slide-up z-50 max-w-sm">
      <div className="flex items-center gap-3">
        <div className="bg-blue-100 p-2 rounded-full">
          <MapPin className="w-4 h-4 text-blue-500" />
        </div>
        <div className="flex-1">
          <p className="text-sm">
            <span className="font-semibold">{currentProof.name}</span> de{" "}
            <span className="font-semibold">{currentProof.location}</span>{" "}
            {currentProof.action}
          </p>
          <p className="text-xs text-gray-500 mt-1">Há alguns segundos atrás</p>
        </div>
      </div>
    </div>
  );
} 