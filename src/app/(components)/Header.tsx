'use client';

import { useState } from 'react';
import Link from 'next/link';
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
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <Link href="/" className="flex items-center transition-all duration-200 hover:opacity-80">
            <div className="text-2xl font-medium text-primary tracking-[0.15em]">
              ZONIT
            </div>
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden lg:flex items-center">
            <div className="flex items-center space-x-0.5">
              <Link href="/" className="px-4 py-2.5 rounded-lg hover:bg-primary/8 transition-all duration-200 text-gray-700 font-medium text-sm tracking-wide">
                Inicio
              </Link>
              
              {/* Dropdown Automatización */}
              <div className="relative group">
                <button 
                  className="flex items-center space-x-1.5 px-4 py-2.5 rounded-lg hover:bg-primary/8 transition-all duration-200 text-gray-700 font-medium text-sm tracking-wide"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <span>Automatización</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isAutomationDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isAutomationDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100/80 backdrop-blur-sm py-4 z-50"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <div className="px-5">
                      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-[0.1em] mb-3 px-2">Servicios</h3>
                      <div className="space-y-1">
                        {automationServices.map((service, index) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="flex items-center px-3 py-2.5 rounded-xl hover:bg-primary/8 transition-all duration-200 text-sm text-gray-700 font-medium group"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 opacity-40 group-hover:opacity-80 transition-all duration-200"></div>
                            <span className="flex-1 tracking-wide">{service.name}</span>
                            <svg className="w-3.5 h-3.5 opacity-0 group-hover:opacity-60 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/paneles-solares" className="px-4 py-2.5 rounded-lg hover:bg-primary/8 transition-all duration-200 text-gray-700 font-medium text-sm tracking-wide">
                Paneles Solares
              </Link>
              <Link href="/blog" className="px-4 py-2.5 rounded-lg hover:bg-primary/8 transition-all duration-200 text-gray-700 font-medium text-sm tracking-wide">
                Blog
              </Link>
              <Link href="/contacto" className="px-4 py-2.5 rounded-lg hover:bg-primary/8 transition-all duration-200 text-gray-700 font-medium text-sm tracking-wide">
                Contacto
              </Link>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center">
            <Link 
              href="/contacto" 
              className="px-5 py-2.5 bg-primary text-white rounded-xl font-medium text-sm tracking-wide transition-all duration-200 hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5"
            >
              Cotiza ahora
            </Link>
            
            {/* Botón móvil */}
            <button 
              className="lg:hidden ml-3 p-2.5 rounded-xl hover:bg-gray-100 transition-all duration-200"
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
            <div className="flex flex-col items-center justify-center h-full -mt-16">
              <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full mx-4">
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
