import Header from '../../(components)/Header';
import Footer from '../../(components)/Footer';
import SplitSection from '../../(components)/SplitSection';
import CTA from '../../(components)/CTA';
import WhatsAppButton from '../../(components)/WhatsAppButton';
import Link from 'next/link';

export const metadata = {
  title: 'Control e Iluminación - Zonit',
  description: 'Sistemas inteligentes de control de iluminación para hogares y empresas. Ahorro energético, escenas personalizadas y control automático.',
};

export default function ControlIluminacion() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary py-24">
        <div className="container-zonit">
          <div className="text-center">
            <nav className="text-sm text-gray-300 mb-8">
              <Link href="/" className="hover:text-textLight transition-colors">Inicio</Link>
              <span className="mx-2">/</span>
              <Link href="/automatizacion" className="hover:text-textLight transition-colors">Automatización</Link>
              <span className="mx-2">/</span>
              <span className="text-textLight">Control e Iluminación</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-light text-textLight mb-8 tracking-wide">
              Control e Iluminación
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Sistemas inteligentes que transforman la iluminación de tu espacio en una experiencia 
              personalizada y eficiente.
            </p>
          </div>
        </div>
      </section>

      {/* Sección 1: Visión General */}
      <SplitSection
        title="Iluminación Inteligente para Cada Momento"
        text="Nuestros sistemas de control de iluminación utilizan tecnología de vanguardia para crear ambientes perfectos. Desde la automatización básica hasta configuraciones complejas, adaptamos la iluminación a tu estilo de vida y necesidades específicas."
        imageSrc="/placeholders/control-lighting.jpg"
        reverse={false}
        features={[
          'Control centralizado desde dispositivos móviles',
          'Escenas predefinidas para diferentes actividades',
          'Detección automática de presencia',
          'Integración con sistemas de seguridad',
          'Compatibilidad con múltiples protocolos'
        ]}
      />

      {/* Sección 2: Eficiencia y Ahorro */}
      <SplitSection
        title="Eficiencia Energética y Ahorro"
        text="Los sistemas de iluminación inteligente no solo mejoran la comodidad, sino que también optimizan el consumo energético. Con sensores de presencia, regulación automática de intensidad y programación inteligente, puedes reducir significativamente tus costos de electricidad."
        imageSrc="/placeholders/automation-placeholder.jpg"
        reverse={true}
        features={[
          'Reducción del consumo energético hasta 60%',
          'Regulación automática según la luz natural',
          'Programación inteligente por horarios',
          'Monitoreo en tiempo real del consumo',
          'Reportes detallados de eficiencia'
        ]}
      />

      {/* Sección 3: Aplicaciones */}
      <section className="py-20 bg-bgLight">
        <div className="container-zonit">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-textDark mb-8 tracking-wide">
              Aplicaciones y Beneficios
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nuestros sistemas de iluminación inteligente se adaptan a diferentes entornos 
              y necesidades específicas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-zonit p-8 text-center">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-textDark mb-4">Residencial</h3>
              <p className="text-gray-600 leading-relaxed">
                Hogares inteligentes con iluminación adaptativa que mejora el confort y la seguridad familiar.
              </p>
            </div>
            
            <div className="card-zonit p-8 text-center">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-textDark mb-4">Comercial</h3>
              <p className="text-gray-600 leading-relaxed">
                Oficinas y espacios comerciales con iluminación eficiente que mejora la productividad.
              </p>
            </div>
            
            <div className="card-zonit p-8 text-center">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-textDark mb-4">Industrial</h3>
              <p className="text-gray-600 leading-relaxed">
                Instalaciones industriales con sistemas robustos y de alta eficiencia energética.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="¿Listo para iluminar tu espacio de manera inteligente?"
        text="Contáctanos para una consulta gratuita y descubre cómo podemos transformar tu iluminación."
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
