import Header from '../(components)/Header';
import Footer from '../(components)/Footer';
import WhatsAppButton from '../(components)/WhatsAppButton';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const metadata = {
  title: 'Contacto - Zonit',
  description: 'Contáctanos para una consulta gratuita sobre automatización inteligente y sistemas solares. Transformamos tu espacio con tecnología de vanguardia.',
};

export default function Contacto() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary pt-24 pb-16">
        <div className="container-zonit">
          <div className="text-center">
            <nav className="text-sm text-gray-300 mb-6">
              <Link href="/" className="hover:text-textLight transition-colors duration-150">Inicio</Link>
              <span className="mx-2">/</span>
              <span className="text-textLight">Contacto</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-light text-textLight mb-6 tracking-wide">
              Contacto
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              ¿Listo para transformar tu espacio? Contáctanos para una consulta gratuita 
              y descubre cómo podemos ayudarte con automatización inteligente y energía solar.
            </p>
          </div>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="container-zonit">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Formulario */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-light tracking-wide mb-4" style={{color: '#74acd8'}}>
                  Envíanos un mensaje
                </h2>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-150 text-sm text-black"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-150 text-sm text-black"
                        placeholder="+52 81 1170 2405"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-150 text-sm text-black"
                      placeholder="tu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="servicio" className="block text-sm font-medium text-gray-700 mb-1">
                      Servicio de interés
                    </label>
                    <select
                      id="servicio"
                      name="servicio"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-150 text-sm text-black"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="automatizacion">Automatización Inteligente</option>
                      <option value="paneles-solares">Paneles Solares</option>
                      <option value="ambos">Ambos servicios</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-150 resize-none text-sm text-black"
                      placeholder="Cuéntanos sobre tu proyecto..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full btn-primary py-2 rounded-lg text-base font-medium transition-smooth"
                  >
                    Enviar mensaje
                  </button>
                </form>
              </div>
            </div>

            {/* Información de contacto */}
            <div className="order-1 lg:order-2">
              <div className="space-y-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-light tracking-wide mb-4" style={{color: '#74acd8'}}>
                    Información de contacto
                  </h2>
                  <p className="text-base text-black leading-relaxed mb-6 hidden lg:block">
                    En Zonit, nos especializamos en crear soluciones inteligentes que transforman 
                    espacios en entornos tecnológicos avanzados. Nuestro equipo de expertos te guiará 
                    desde la consulta inicial hasta la implementación completa.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <Phone className="w-4 h-4" style={{color: '#74acd8'}} />
                    </div>
                    <div>
                      <h3 className="font-medium text-black text-sm">Teléfono</h3>
                      <p className="text-xs text-gray-600">+52 81 1170 2405</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <Mail className="w-4 h-4" style={{color: '#74acd8'}} />
                    </div>
                    <div>
                      <h3 className="font-medium text-black text-sm">Email</h3>
                      <p className="text-xs text-gray-600">info@zonit.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <MapPin className="w-4 h-4" style={{color: '#74acd8'}} />
                    </div>
                    <div>
                      <h3 className="font-medium text-black text-sm">Ubicación</h3>
                      <p className="text-xs text-gray-600">Monterrey, N.L.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <Clock className="w-4 h-4" style={{color: '#74acd8'}} />
                    </div>
                    <div>
                      <h3 className="font-medium text-black text-sm">Horarios</h3>
                      <p className="text-xs text-gray-600">Lun-Vie: 9AM-6PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA WhatsApp */}
      <section className="py-12 sm:py-16 bg-bgLight">
        <div className="container-zonit text-center">
          <h2 className="text-2xl sm:text-3xl font-light tracking-wide mb-4" style={{color: '#74acd8'}}>
            ¿Prefieres WhatsApp?
          </h2>
          <p className="text-lg text-black mb-6 max-w-xl mx-auto leading-relaxed">
            Contacta directamente por WhatsApp para una respuesta más rápida.
          </p>
          <a 
            href="https://wa.me/528111702405" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-smooth"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            Contactar por WhatsApp
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}