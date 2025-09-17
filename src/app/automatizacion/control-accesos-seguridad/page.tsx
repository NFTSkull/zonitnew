import Header from '../../(components)/Header';
import Footer from '../../(components)/Footer';
import SplitSection from '../../(components)/SplitSection';
import CTA from '../../(components)/CTA';
import WhatsAppButton from '../../(components)/WhatsAppButton';
import Link from 'next/link';

export const metadata = {
  title: 'Control de Accesos y Seguridad - Zonit',
  description: 'Sistemas avanzados de seguridad y control de accesos. Cámaras HD, sensores inteligentes y monitoreo 24/7.',
};

export default function ControlAccesosSeguridad() {
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
              <span className="text-textLight">Control de Accesos y Seguridad</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-light text-textLight mb-8 tracking-wide">
              Control de Accesos y Seguridad
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Protección avanzada con tecnología de vanguardia. Sistemas de seguridad 
              inteligentes que brindan tranquilidad las 24 horas del día.
            </p>
          </div>
        </div>
      </section>

      {/* Sección 1: Visión General */}
      <SplitSection
        title="Seguridad Inteligente y Confiable"
        text="Nuestros sistemas de control de accesos y seguridad combinan tecnología avanzada con facilidad de uso. Desde cámaras de alta definición hasta sensores inteligentes, creamos una red de protección completa que se adapta a las necesidades específicas de cada espacio."
        imageSrc="/placeholders/access-control.png"
        reverse={false}
        features={[
          'Cámaras HD con visión nocturna',
          'Sensores de movimiento inteligentes',
          'Control de accesos biométrico',
          'Monitoreo en tiempo real',
          'Alertas instantáneas por múltiples canales'
        ]}
      />

      {/* Sección 2: Tecnología y Confianza */}
      <SplitSection
        title="Tecnología que Inspira Confianza"
        text="La seguridad moderna requiere sistemas que no solo detecten amenazas, sino que también proporcionen información valiosa para la toma de decisiones. Nuestros sistemas utilizan inteligencia artificial para distinguir entre eventos normales y situaciones que requieren atención inmediata."
        imageSrc="/placeholders/automation-placeholder.png"
        reverse={true}
        features={[
          'Inteligencia artificial para detección precisa',
          'Almacenamiento en la nube seguro',
          'Integración con sistemas de automatización',
          'Acceso remoto desde cualquier dispositivo',
          'Mantenimiento predictivo y actualizaciones automáticas'
        ]}
      />

      {/* Sección 3: Aplicaciones */}
      <section className="py-20 bg-bgLight">
        <div className="container-zonit">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-textDark mb-8 tracking-wide">
              Soluciones Especializadas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nuestros sistemas de seguridad se adaptan a diferentes entornos 
              y niveles de protección requeridos.
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
                Protección completa del hogar con sistemas discretos y eficientes.
              </p>
            </div>
            
            <div className="card-zonit p-8 text-center">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-textDark mb-4">Empresarial</h3>
              <p className="text-gray-600 leading-relaxed">
                Seguridad corporativa con control de accesos y monitoreo avanzado.
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
                Protección de instalaciones industriales con sistemas robustos y confiables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="¿Listo para proteger lo que más valoras?"
        text="Contáctanos para una consulta gratuita y descubre cómo podemos brindarte la seguridad que necesitas."
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

