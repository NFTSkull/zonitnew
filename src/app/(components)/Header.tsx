'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAutomationDropdownOpen, setIsAutomationDropdownOpen] = useState(false);

  const automationServices = [
    { name: 'Control e Iluminación', href: '/automatizacion/control-iluminacion' },
    { name: 'Audio Distribuido', href: '/automatizacion/audio-distribuido' },
    { name: 'Control de Accesos y Seguridad', href: '/automatizacion/control-accesos-seguridad' },
    { name: 'Telefonía IP y Videoconferencia', href: '/automatizacion/telefonia-ip-videoconferencia' },
    { name: 'Video', href: '/automatizacion/video' },
    { name: 'Cableado Estructurado', href: '/automatizacion/cableado-estructurado' },
    { name: 'Audio Profesional', href: '/automatizacion/audio-profesional' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-xl border-b border-gray-100/60 fixed w-full top-0 z-50 shadow-sm">
      <div className="container-zonit">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4">
            <div className="text-3xl font-light text-black tracking-wider">
              ZONIT
            </div>
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden lg:flex items-center space-x-2">
            <Link href="/" className="px-6 py-3 rounded-xl hover:bg-primary/5 transition-colors duration-150 text-black">
              Inicio
            </Link>
            
            {/* Dropdown Automatización */}
            <div className="relative group">
              <button 
                className="flex items-center space-x-2 px-6 py-3 rounded-xl hover:bg-primary/5 transition-colors duration-150 text-black"
                onMouseEnter={() => setIsAutomationDropdownOpen(true)}
                onMouseLeave={() => setIsAutomationDropdownOpen(false)}
              >
                <span>Automatización</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-150 group-hover:rotate-180" />
              </button>
              
              {isAutomationDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-100 py-4"
                  onMouseEnter={() => setIsAutomationDropdownOpen(true)}
                  onMouseLeave={() => setIsAutomationDropdownOpen(false)}
                >
                  <div className="grid grid-cols-1 gap-2 px-4">
                    {automationServices.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="px-4 py-3 rounded-lg hover:bg-primary/5 transition-colors duration-150 text-sm text-black"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/paneles-solares" className="px-6 py-3 rounded-xl hover:bg-primary/5 transition-colors duration-150 text-black">
              Paneles Solares
            </Link>
            <Link href="/nosotros" className="px-6 py-3 rounded-xl hover:bg-primary/5 transition-colors duration-150 text-black">
              Nosotros
            </Link>
            <Link href="/proyectos" className="px-6 py-3 rounded-xl hover:bg-primary/5 transition-colors duration-150 text-black">
              Proyectos
            </Link>
            <Link href="/blog" className="px-6 py-3 rounded-xl hover:bg-primary/5 transition-colors duration-150 text-black">
              Blog
            </Link>
            <Link href="/contacto" className="px-6 py-3 rounded-xl hover:bg-primary/5 transition-colors duration-150 text-black">
              Contacto
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-3">
            <Link 
              href="/contacto" 
              className="btn-primary px-8 py-4 rounded-2xl font-medium transition-smooth"
            >
              Cotiza ahora
            </Link>
            
            {/* Botón móvil */}
            <button 
              className="lg:hidden p-3 rounded-xl hover:bg-primary/5 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menú Móvil */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="flex justify-end p-4">
              <button 
                className="text-white text-2xl hover:text-gray-300 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center h-full -mt-16">
              <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full mx-4">
                <div className="space-y-6">
                  <Link href="/" className="block text-lg font-medium text-black hover:text-accentBlue transition-colors">
                    Inicio
                  </Link>
                  
                  <div className="space-y-2">
                    <div className="text-lg font-medium text-black">Automatización</div>
                    <div className="ml-4 space-y-2">
                      {automationServices.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block text-sm text-gray-600 hover:text-black transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <Link href="/paneles-solares" className="block text-lg font-medium text-black hover:text-accentBlue transition-colors">
                    Paneles Solares
                  </Link>
                  <Link href="/nosotros" className="block text-lg font-medium text-black hover:text-accentBlue transition-colors">
                    Nosotros
                  </Link>
                  <Link href="/proyectos" className="block text-lg font-medium text-black hover:text-accentBlue transition-colors">
                    Proyectos
                  </Link>
                  <Link href="/blog" className="block text-lg font-medium text-black hover:text-accentBlue transition-colors">
                    Blog
                  </Link>
                  <Link href="/contacto" className="block text-lg font-medium text-black hover:text-accentBlue transition-colors">
                    Contacto
                  </Link>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <Link 
                      href="/contacto" 
                      className="w-full btn-primary py-3 px-6 rounded-xl font-semibold text-center block"
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
