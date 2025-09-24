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
          <Link href="/" className="flex items-center hover-scale-subtle transition-elegant">
            <div className="text-3xl font-light text-black tracking-wider gradient-text-animated">
              ZONIT
            </div>
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
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 py-4 z-50 fade-in-on-scroll"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <div className="grid grid-cols-1 gap-1 px-4">
                      {automationServices.map((service, index) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="px-4 py-3 rounded-lg hover:bg-primary/10 hover-scale-subtle transition-elegant text-sm text-black font-medium"
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link href="/paneles-solares" className="px-5 py-3 rounded-xl hover:bg-primary/5 hover-scale-subtle transition-elegant text-black font-medium text-sm">
                Paneles Solares
              </Link>
              <Link href="/nosotros" className="px-5 py-3 rounded-xl hover:bg-primary/5 hover-scale-subtle transition-elegant text-black font-medium text-sm">
                Nosotros
              </Link>
              <Link href="/proyectos" className="px-5 py-3 rounded-xl hover:bg-primary/5 hover-scale-subtle transition-elegant text-black font-medium text-sm">
                Proyectos
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
              className="btn-primary px-6 py-3 rounded-xl font-medium text-sm transition-bounce-subtle hover-lift hover-glow"
            >
              Cotiza ahora
            </Link>
            
            {/* Botón móvil */}
            <button 
              className="lg:hidden ml-3 p-3 rounded-xl hover:bg-primary/5 hover-scale-subtle transition-elegant"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menú Móvil */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm fade-in-on-scroll">
            <div className="flex justify-end p-4">
              <button 
                className="text-white text-2xl hover:text-gray-300 hover-scale-subtle transition-elegant"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center h-full -mt-16">
              <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full mx-4 hover-lift">
                <div className="space-y-6">
                  <Link href="/" className="block text-lg font-medium text-black hover:text-accentBlue hover-scale-subtle transition-elegant">
                    Inicio
                  </Link>
                  
                  <div className="space-y-2">
                    <div className="text-lg font-medium text-black transition-elegant">Automatización</div>
                    <div className="ml-4 space-y-2">
                      {automationServices.map((service, index) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block text-sm text-gray-600 hover:text-black hover-scale-subtle transition-elegant"
                          onClick={() => setIsMobileMenuOpen(false)}
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <Link href="/paneles-solares" className="block text-lg font-medium text-black hover:text-accentBlue hover-scale-subtle transition-elegant">
                    Paneles Solares
                  </Link>
                  <Link href="/nosotros" className="block text-lg font-medium text-black hover:text-accentBlue hover-scale-subtle transition-elegant">
                    Nosotros
                  </Link>
                  <Link href="/proyectos" className="block text-lg font-medium text-black hover:text-accentBlue hover-scale-subtle transition-elegant">
                    Proyectos
                  </Link>
                  <Link href="/blog" className="block text-lg font-medium text-black hover:text-accentBlue hover-scale-subtle transition-elegant">
                    Blog
                  </Link>
                  <Link href="/contacto" className="block text-lg font-medium text-black hover:text-accentBlue hover-scale-subtle transition-elegant">
                    Contacto
                  </Link>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <Link 
                      href="/contacto" 
                      className="w-full btn-primary py-3 px-6 rounded-xl font-semibold text-center block transition-bounce-subtle hover-lift hover-glow"
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
