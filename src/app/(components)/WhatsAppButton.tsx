'use client';

import { MessageCircle, Phone } from 'lucide-react';
import { useState } from 'react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export default function WhatsAppButton({ 
  phoneNumber = '528111702405', 
  message = 'Hola, me interesa conocer más sobre sus servicios de automatización.' 
}: WhatsAppButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* Tooltip */}
      <div className={`absolute bottom-full right-0 mb-3 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg shadow-xl transition-all duration-300 whitespace-nowrap ${
        isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
      }`}>
        <span>¡Chatea con nosotros!</span>
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>

      {/* Botón principal */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Contactar por WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Ícono principal */}
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:scale-110" />
        
        {/* Ícono secundario que aparece en hover */}
        <Phone className="absolute w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-1 translate-y-1" />
        
        {/* Efecto de pulso */}
        <div className="absolute inset-0 rounded-2xl bg-green-400 opacity-0 group-hover:opacity-20 group-hover:animate-ping"></div>
        
        {/* Indicador de notificación */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </a>

      {/* Efecto de ondas */}
      <div className="absolute inset-0 rounded-2xl bg-green-500 opacity-0 group-hover:opacity-30 group-hover:animate-ping animation-delay-75"></div>
    </div>
  );
}

