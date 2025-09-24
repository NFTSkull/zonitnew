import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-textLight py-20">
      <div className="container-zonit">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Zonit Info */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-5 text-textLight tracking-wide">ZONIT</h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              Especialistas en automatización inteligente para hogares y empresas.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-textLight transition-all duration-200 p-2 rounded-lg hover:bg-gray-800/50">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-textLight transition-all duration-200 p-2 rounded-lg hover:bg-gray-800/50">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-textLight transition-all duration-200 p-2 rounded-lg hover:bg-gray-800/50">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Servicios */}
          <div>
            <h4 className="text-sm font-semibold mb-5 text-textLight tracking-wide uppercase">Servicios</h4>
            <ul className="space-y-3 text-gray-300">
              <li><Link href="/automatizacion/control-iluminacion" className="hover:text-textLight transition-all duration-200 block py-1 text-sm tracking-wide">Control e Iluminación</Link></li>
              <li><Link href="/automatizacion/audio-distribuido" className="hover:text-textLight transition-all duration-200 block py-1 text-sm tracking-wide">Audio Distribuido</Link></li>
              <li><Link href="/automatizacion/control-accesos-seguridad" className="hover:text-textLight transition-all duration-200 block py-1 text-sm tracking-wide">Control de Accesos</Link></li>
              <li><Link href="/paneles-solares" className="hover:text-textLight transition-all duration-200 block py-1 text-sm tracking-wide">Paneles Solares</Link></li>
            </ul>
          </div>
          
          {/* Empresa */}
          <div>
            <h4 className="text-sm font-semibold mb-5 text-textLight tracking-wide uppercase">Empresa</h4>
            <ul className="space-y-3 text-gray-300">
              <li><Link href="/nosotros" className="hover:text-textLight transition-all duration-200 block py-1 text-sm tracking-wide">Nosotros</Link></li>
              <li><Link href="/proyectos" className="hover:text-textLight transition-all duration-200 block py-1 text-sm tracking-wide">Proyectos</Link></li>
              <li><Link href="/blog" className="hover:text-textLight transition-all duration-200 block py-1 text-sm tracking-wide">Blog</Link></li>
              <li><Link href="/contacto" className="hover:text-textLight transition-all duration-200 block py-1 text-sm tracking-wide">Contacto</Link></li>
            </ul>
          </div>
          
          {/* Contacto */}
          <div>
            <h4 className="text-sm font-semibold mb-5 text-textLight tracking-wide uppercase">Contacto</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center transition-all duration-200 hover:text-textLight">
                <Phone className="w-4 h-4 mr-3 text-gray-400" />
                <span className="text-sm tracking-wide">+52 81 1234 5678</span>
              </div>
              <div className="flex items-center transition-all duration-200 hover:text-textLight">
                <Mail className="w-4 h-4 mr-3 text-gray-400" />
                <span className="text-sm tracking-wide">info@zonit.com</span>
              </div>
              <div className="flex items-center transition-all duration-200 hover:text-textLight">
                <MapPin className="w-4 h-4 mr-3 text-gray-400" />
                <span className="text-sm tracking-wide">Monterrey, N.L.</span>
              </div>
            </div>
            
            <div className="mt-8">
              <Link 
                href="/contacto" 
                className="inline-block px-6 py-3 bg-accentLime text-primary rounded-xl font-medium text-sm tracking-wide transition-all duration-200 hover:bg-accentLime/90 hover:shadow-lg hover:-translate-y-0.5"
              >
                Cotiza ahora
              </Link>
            </div>
          </div>
        </div>
        
        {/* Socio Comercial */}
        <div className="border-t border-gray-700/50 mt-16 pt-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 text-gray-400 text-xs tracking-wide">
              <span>Socio comercial:</span>
              <a 
                href="https://tucasainteligente.net/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accentLime hover:text-textLight transition-all duration-200 font-medium"
              >
                Tu Casa Inteligente
              </a>
              <span className="text-gray-600">•</span>
              <span className="text-gray-500">Domótica México</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700/50 pt-8 text-center text-gray-400">
          <p className="text-xs tracking-wide">&copy; 2025 Zonit. Todos los derechos reservados. | <Link href="/aviso-privacidad" className="hover:text-textLight transition-all duration-200">Aviso de Privacidad</Link></p>
        </div>
      </div>
    </footer>
  );
}
