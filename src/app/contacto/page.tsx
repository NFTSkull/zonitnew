import Header from '../(components)/Header';
import Footer from '../(components)/Footer';
import WhatsAppButton from '../(components)/WhatsAppButton';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const metadata = {
  title: 'Contacto - Zonit',
  description: 'Contáctanos para una consulta gratuita sobre automatización inteligente y sistemas solares. Estamos aquí para ayudarte.',
};

export default function Contacto() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary py-16 sm:py-20 md:py-24">
        <div className="container-zonit text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-textLight mb-6 sm:mb-8 tracking-wide px-4">
            Contacto
          </h1>
          <p className="text-base sm:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed px-4">
            ¿Listo para transformar tu espacio? Contáctanos para una consulta gratuita 
            y descubre cómo podemos ayudarte.
          </p>
        </div>
      </section>

      {/* Formulario y Información */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container-zonit">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            {/* Formulario */}
            <div className="order-2 lg:order-1 px-4 lg:px-0">
              <h2 className="text-2xl sm:text-3xl font-light text-textDark mb-6 sm:mb-8 tracking-wide">
                Solicita tu cotización
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                      placeholder="+52 81 1234 5678"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="interes" className="block text-sm font-medium text-gray-700 mb-2">
                    Interés *
                  </label>
                  <select
                    id="interes"
                    name="interes"
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="automatizacion">Automatización</option>
                    <option value="paneles-solares">Paneles Solares</option>
                    <option value="ambos">Ambos</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-primary py-3 sm:py-4 rounded-lg sm:rounded-xl text-base sm:text-lg font-medium transition-smooth"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
            
            {/* Información de contacto */}
            <div className="order-1 lg:order-2 px-4 lg:px-0">
              <h2 className="text-2xl sm:text-3xl font-light text-textDark mb-6 sm:mb-8 tracking-wide">
                Información de contacto
              </h2>
              
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-medium text-textDark mb-1 sm:mb-2">Teléfono</h3>
                    <p className="text-sm sm:text-base text-gray-600">+52 81 1170 2405</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-textDark mb-2">Email</h3>
                    <p className="text-gray-600">info@zonit.com</p>
                    <p className="text-gray-600">ventas@zonit.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-textDark mb-2">Ubicación</h3>
                    <p className="text-gray-600">Monterrey, Nuevo León</p>
                    <p className="text-gray-600">México</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-textDark mb-2">Horarios</h3>
                    <p className="text-gray-600">Lunes - Viernes: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sábados: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
              
              {/* Mapa placeholder */}
              <div className="mt-12">
                <h3 className="text-lg font-medium text-textDark mb-4">Ubicación</h3>
                <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center">
                  <span className="text-gray-500">Mapa interactivo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA adicional */}
      <section className="py-20 bg-bgLight">
        <div className="container-zonit text-center">
          <h2 className="text-3xl md:text-4xl font-light text-textDark mb-8 tracking-wide">
            ¿Prefieres WhatsApp?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            También puedes contactarnos directamente por WhatsApp para una respuesta más rápida.
          </p>
          <a 
            href="https://wa.me/528111702405" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-medium transition-smooth"
          >
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
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

