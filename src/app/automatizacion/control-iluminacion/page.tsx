import Header from '../../(components)/Header';
import Footer from '../../(components)/Footer';
import CTA from '../../(components)/CTA';
import WhatsAppButton from '../../(components)/WhatsAppButton';
import Link from 'next/link';

export const metadata = {
  title: 'Control e Iluminación - Zonit | Automatización Inteligente',
  description: 'Sistemas inteligentes de control de iluminación para hogares y empresas. Ahorro energético, escenas personalizadas, control automático y máxima eficiencia.',
};

export default function ControlIluminacion() {
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
              <Link href="/automatizacion" className="hover:text-textLight transition-colors duration-150">Automatización</Link>
              <span className="mx-2">/</span>
              <span className="text-textLight">Control e Iluminación</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-light text-textLight mb-6 tracking-wide">
              Control e Iluminación
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Sistemas inteligentes que transforman la iluminación de tu espacio en una experiencia 
              personalizada y eficiente. Control total desde cualquier dispositivo.
            </p>
          </div>
        </div>
      </section>

      {/* Sección Principal */}
      <section className="py-20 bg-white">
        <div className="container-zonit">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-light tracking-wide text-textDark">
                Control e Iluminación Inteligente
              </h2>
              <p className="text-lg text-black leading-relaxed">
                Nuestros sistemas de control de iluminación utilizan tecnología de vanguardia para crear ambientes perfectos. 
                Desde la automatización básica hasta configuraciones complejas, adaptamos la iluminación a tu estilo de vida y necesidades específicas.
              </p>
              <p className="text-lg text-black leading-relaxed">
                Con control centralizado desde dispositivos móviles, escenas predefinidas para diferentes actividades, 
                detección automática de presencia y reducción del consumo energético hasta 60%.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accentBlue rounded-full"></div>
                  <span className="text-black">Control centralizado desde dispositivos móviles</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accentBlue rounded-full"></div>
                  <span className="text-black">Escenas predefinidas para diferentes actividades</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accentBlue rounded-full"></div>
                  <span className="text-black">Detección automática de presencia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accentBlue rounded-full"></div>
                  <span className="text-black">Reducción del consumo energético hasta 60%</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="/placeholders/control-lighting.png" 
                alt="Control e Iluminación Inteligente" 
                width={600}
                height={400}
                className="rounded-xl shadow-lg ring-1 ring-gray-200 w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Aplicaciones */}
      <section className="py-20 bg-white">
        <div className="container-zonit">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide text-textDark">
              Aplicaciones y Beneficios
            </h2>
            <p className="text-lg text-black max-w-3xl mx-auto leading-relaxed">
              Nuestros sistemas de iluminación inteligente se adaptan a diferentes entornos 
              y necesidades específicas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-zonit p-8 text-center hover-lift transition-elegant">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-black mb-4">Residencial</h3>
              <p className="text-black leading-relaxed">
                Hogares inteligentes con iluminación adaptativa que mejora el confort y la seguridad familiar.
              </p>
            </div>
            
            <div className="card-zonit p-8 text-center hover-lift transition-elegant">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-black mb-4">Comercial</h3>
              <p className="text-black leading-relaxed">
                Oficinas y espacios comerciales con iluminación eficiente que mejora la productividad.
              </p>
            </div>
            
            <div className="card-zonit p-8 text-center hover-lift transition-elegant">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-black mb-4">Industrial</h3>
              <p className="text-black leading-relaxed">
                Instalaciones industriales con sistemas robustos y de alta eficiencia energética.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="¿Listo para transformar tu iluminación?"
        text="Contáctanos para una consulta gratuita y descubre cómo nuestros sistemas de control inteligente pueden mejorar tu espacio."
        primaryLabel="Solicitar cotización"
        primaryHref="/contacto"
        secondaryLabel="Ver más servicios"
        secondaryHref="/automatizacion"
        dark={false}
      />

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
