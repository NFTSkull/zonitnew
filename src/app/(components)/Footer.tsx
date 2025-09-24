import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-textLight py-16">
      <div className="container-zonit">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Zonit Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-textLight">ZONIT</h3>
            <p className="text-gray-300 mb-4">
              Especialistas en automatización inteligente para hogares y empresas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-textLight transition-colors duration-150 p-2 rounded-lg hover:bg-gray-800">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-textLight transition-colors duration-150 p-2 rounded-lg hover:bg-gray-800">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-textLight transition-colors duration-150 p-2 rounded-lg hover:bg-gray-800">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Servicios */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-textLight">Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/automatizacion/control-iluminacion" className="hover:text-textLight transition-colors duration-150 block py-1 rounded px-2 hover:bg-gray-800">Control e Iluminación</Link></li>
              <li><Link href="/automatizacion/audio-distribuido" className="hover:text-textLight transition-colors duration-150 block py-1 rounded px-2 hover:bg-gray-800">Audio Distribuido</Link></li>
              <li><Link href="/automatizacion/control-accesos-seguridad" className="hover:text-textLight transition-colors duration-150 block py-1 rounded px-2 hover:bg-gray-800">Control de Accesos</Link></li>
              <li><Link href="/paneles-solares" className="hover:text-textLight transition-colors duration-150 block py-1 rounded px-2 hover:bg-gray-800">Paneles Solares</Link></li>
            </ul>
          </div>
          
          {/* Empresa */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-textLight">Empresa</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/nosotros" className="hover:text-textLight transition-colors duration-150 block py-1 rounded px-2 hover:bg-gray-800">Nosotros</Link></li>
              <li><Link href="/proyectos" className="hover:text-textLight transition-colors duration-150 block py-1 rounded px-2 hover:bg-gray-800">Proyectos</Link></li>
              <li><Link href="/blog" className="hover:text-textLight transition-colors duration-150 block py-1 rounded px-2 hover:bg-gray-800">Blog</Link></li>
              <li><Link href="/contacto" className="hover:text-textLight transition-colors duration-150 block py-1 rounded px-2 hover:bg-gray-800">Contacto</Link></li>
            </ul>
          </div>
          
          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-textLight">Contacto</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center transition-colors duration-150 p-2 rounded-lg hover:bg-gray-800">
                <Phone className="w-4 h-4 mr-2" />
                <span>+52 81 1234 5678</span>
              </div>
              <div className="flex items-center transition-colors duration-150 p-2 rounded-lg hover:bg-gray-800">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@zonit.com</span>
              </div>
              <div className="flex items-center transition-colors duration-150 p-2 rounded-lg hover:bg-gray-800">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Monterrey, N.L.</span>
              </div>
            </div>
            
            <div className="mt-6">
              <Link 
                href="/contacto" 
                className="btn-primary px-6 py-3 rounded-xl font-medium transition-smooth inline-block"
              >
                Cotiza ahora
              </Link>
            </div>
          </div>
        </div>
        
        {/* Socio Comercial */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 text-gray-300 text-sm">
              <span>Socio comercial:</span>
              <a 
                href="https://tucasainteligente.net/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-textLight transition-colors duration-150 font-medium"
              >
                Tu Casa Inteligente
              </a>
              <span className="text-gray-500">•</span>
              <span className="text-gray-400 text-xs">Domótica México</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
          <p>&copy; 2025 Zonit. Todos los derechos reservados. | <Link href="/aviso-privacidad" className="hover:text-textLight transition-colors duration-150">Aviso de Privacidad</Link></p>
        </div>
      </div>
    </footer>
  );
}
