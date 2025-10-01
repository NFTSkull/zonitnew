'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAutomationDropdownOpen, setIsAutomationDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);

  const automationServices = [
    { name: 'Control e Iluminación', href: '/automatizacion/control-iluminacion' },
    { name: 'Audio Distribuido', href: '/automatizacion/audio-distribuido' },
    { name: 'Control de Accesos y Seguridad', href: '/automatizacion/control-accesos-seguridad' },
    { name: 'Telefonía IP y Videoconferencia', href: '/automatizacion/telefonia-ip-videoconferencia' },
    { name: 'Video', href: '/automatizacion/video' },
    { name: 'Cableado Estructurado', href: '/automatizacion/cableado-estructurado' },
    { name: 'Audio Profesional', href: '/automatizacion/audio-profesional' },
  ];

  const handleDropdownEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setIsAutomationDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setIsAutomationDropdownOpen(false);
    }, 150);
    setDropdownTimeout(timeout);
  };

  return (
    <header className="bg-white/95 backdrop-blur-xl border-b border-gray-100/60 fixed w-full top-0 z-50 shadow-sm transition-elegant">
      <div className="container-zonit">
        <div className="flex justify-between items-center py-2 sm:py-3 md:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center hover-scale-subtle transition-elegant">
            <Image
              src="/zonit-logo-black.png?v=2"
              alt="ZONIT"
              width={60}
              height={24}
              className="h-5 sm:h-6 md:h-7 w-auto"
              priority
              style={{ filter: 'none' }}
            />
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden lg:flex items-center">
            <div className="flex items-center space-x-1">
              <Link href="/" className="px-5 py-3 rounded-xl hover:bg-primary/5 hover-scale-subtle transition-elegant text-black font-medium text-sm">
                Inicio
              </Link>
              
              {/* Dropdown Automatización */}
              <div className="relative group">
                <button 
                  className="flex items-center space-x-1 px-5 py-3 rounded-xl hover:bg-primary/5 hover-scale-subtle transition-elegant text-black font-medium text-sm"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <span>Automatización</span>
                  <ChevronDown className={`w-4 h-4 transition-bounce-subtle ${isAutomationDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isAutomationDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-xl border border-gray-100 py-6 z-50"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <div className="px-6">
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Servicios de Automatización</h3>
                      <div className="grid grid-cols-1 gap-2">
                        {automationServices.map((service, index) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="flex items-center px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors duration-150 text-sm text-black font-medium group"
                          >
                            <div className="w-2 h-2 bg-accentBlue rounded-full mr-3 opacity-60 group-hover:opacity-100 transition-colors duration-150"></div>
                            <span className="flex-1">{service.name}</span>
                            <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-colors duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/paneles-solares" className="px-5 py-3 rounded-xl hover:bg-primary/5 hover-scale-subtle transition-elegant text-black font-medium text-sm">
                Paneles Solares
              </Link>
              <Link href="/blog" className="px-5 py-3 rounded-xl hover:bg-primary/5 hover-scale-subtle transition-elegant text-black font-medium text-sm">
                Blog
              </Link>
              <Link href="/contacto" className="px-5 py-3 rounded-xl hover:bg-primary/5 hover-scale-subtle transition-elegant text-black font-medium text-sm">
                Contacto
              </Link>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center">
            <Link 
              href="/contacto" 
              className="btn-primary px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-lg sm:rounded-xl font-medium text-xs sm:text-sm transition-bounce-subtle hover-lift hover-glow hidden sm:block"
            >
              Cotiza ahora
            </Link>
            
            {/* Botón móvil */}
            <button 
              className="lg:hidden ml-2 p-2 rounded-lg hover:bg-primary/5 hover-scale-subtle transition-elegant text-black"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Menú Móvil */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="flex justify-end p-4">
              <button 
                className="text-white text-2xl hover:text-gray-300 hover-scale-subtle transition-elegant"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center h-full -mt-16 px-4">
              <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-w-sm w-full mx-2 sm:mx-4">
                <div className="space-y-6">
                  <Link href="/" className="block text-lg font-medium text-black hover:text-accentBlue transition-colors duration-150">
                    Inicio
                  </Link>
                  
                  <div className="space-y-3">
                    <div className="text-lg font-semibold text-black border-b border-gray-200 pb-2">Automatización</div>
                    <div className="space-y-2">
                      {automationServices.map((service, index) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="flex items-center text-sm text-gray-600 hover:text-black transition-colors duration-150 group"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="w-1.5 h-1.5 bg-accentBlue rounded-full mr-3 opacity-60 group-hover:opacity-100 transition-colors duration-150"></div>
                          <span className="flex-1">{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <Link href="/paneles-solares" className="block text-lg font-medium text-black hover:text-accentBlue transition-colors duration-150">
                    Paneles Solares
                  </Link>
                  <Link href="/blog" className="block text-lg font-medium text-black hover:text-accentBlue transition-colors duration-150">
                    Blog
                  </Link>
                  <Link href="/contacto" className="block text-lg font-medium text-black hover:text-accentBlue transition-colors duration-150">
                    Contacto
                  </Link>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <Link 
                      href="/contacto" 
                      className="w-full btn-primary py-3 px-6 rounded-xl font-semibold text-center block transition-smooth"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Cotiza ahora
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
