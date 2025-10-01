import Header from '../../(components)/Header';
import Footer from '../../(components)/Footer';
import SplitSection from '../../(components)/SplitSection';
import CTA from '../../(components)/CTA';
import WhatsAppButton from '../../(components)/WhatsAppButton';
import Link from 'next/link';

export const metadata = {
  title: 'Telefonía IP y Videoconferencia - Zonit',
  description: 'Sistemas de comunicación empresarial profesional. Telefonía IP, videoconferencias HD y colaboración avanzada.',
};

export default function TelefoniaIpVideoconferencia() {
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
              <span className="text-textLight">Telefonía IP y Videoconferencia</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-light text-textLight mb-6 tracking-wide">
              Telefonía IP y Videoconferencia
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Comunicación empresarial de nivel profesional con tecnología IP avanzada 
              y sistemas de videoconferencia de alta calidad.
            </p>
          </div>
        </div>
      </section>

      {/* Sección Principal */}
      <section className="py-20 bg-white">
        <div className="container-zonit">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-light tracking-wide" style={{color: '#74acd8'}}>
                Comunicación Empresarial Profesional
              </h2>
              <p className="text-lg text-black leading-relaxed">
                Nuestros sistemas de telefonía IP y videoconferencia están diseñados para empresas que requieren comunicación clara, confiable y escalable. 
                Desde pequeñas oficinas hasta grandes corporaciones, proporcionamos soluciones que mejoran la productividad y facilitan la colaboración.
              </p>
              <p className="text-lg text-black leading-relaxed">
                Con llamadas HD de calidad cristalina, videoconferencias multipunto, integración con sistemas empresariales, 
                escalabilidad según necesidades y administración centralizada.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accentBlue rounded-full"></div>
                  <span className="text-black">Llamadas HD con calidad cristalina</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accentBlue rounded-full"></div>
                  <span className="text-black">Videoconferencias multipunto</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accentBlue rounded-full"></div>
                  <span className="text-black">Integración con sistemas empresariales</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accentBlue rounded-full"></div>
                  <span className="text-black">Escalabilidad según necesidades</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/placeholders/ip-telephony.png" 
                alt="Comunicación Empresarial Profesional" 
                className="rounded-xl shadow-lg ring-1 ring-gray-200 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Aplicaciones */}
      <section className="py-20 bg-white">
        <div className="container-zonit">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide" style={{color: '#74acd8'}}>
              Aplicaciones Especializadas
            </h2>
            <p className="text-lg text-black max-w-3xl mx-auto leading-relaxed">
              Nuestros sistemas de comunicación se adaptan a diferentes entornos 
              y necesidades específicas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-zonit p-8 text-center hover-lift transition-elegant">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-black mb-4">Oficinas</h3>
              <p className="text-black leading-relaxed">
                Comunicación clara y eficiente para equipos de trabajo colaborativo.
              </p>
            </div>
            
            <div className="card-zonit p-8 text-center hover-lift transition-elegant">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-black mb-4">Corporativo</h3>
              <p className="text-black leading-relaxed">
                Sistemas escalables para grandes organizaciones y multinacionales.
              </p>
            </div>
            
            <div className="card-zonit p-8 text-center hover-lift transition-elegant">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-black mb-4">Remoto</h3>
              <p className="text-black leading-relaxed">
                Colaboración eficiente para equipos distribuidos y trabajo remoto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="¿Listo para mejorar la comunicación de tu empresa?"
        text="Contáctanos para una consulta gratuita y descubre cómo podemos optimizar tu comunicación empresarial."
        primaryLabel="Solicitar cotización"
        primaryHref="/contacto"
        secondaryLabel="Ver proyectos"
        secondaryHref="/proyectos"
        dark={false}
      />

      <Footer />
      <WhatsAppButton />
    </main>
  );
}

