import Header from '../../(components)/Header';
import Footer from '../../(components)/Footer';
import SplitSection from '../../(components)/SplitSection';
import CTA from '../../(components)/CTA';
import WhatsAppButton from '../../(components)/WhatsAppButton';
import Link from 'next/link';
import { Home, Building2, ShoppingBag } from 'lucide-react';

export const metadata = {
  title: 'Audio Distribuido - Zonit | Automatización Inteligente',
  description: 'Sistemas de audio distribuido para hogares y empresas. Múltiples zonas, control independiente, alta calidad de sonido y control total desde cualquier dispositivo.',
};

export default function AudioDistribuido() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container-zonit">
          <div className="text-center">
            <nav className="text-sm text-gray-300 mb-6">
              <Link href="/" className="hover:text-textLight transition-colors duration-150">Inicio</Link>
              <span className="mx-2">/</span>
              <Link href="/automatizacion" className="hover:text-textLight transition-colors duration-150">Automatización</Link>
              <span className="mx-2">/</span>
              <span className="text-textLight">Audio Distribuido</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-light text-textLight mb-6 tracking-wide">
              Audio Distribuido
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Lleva la música a cada rincón de tu espacio con sistemas de audio distribuido 
              de alta calidad y control independiente. Control total desde cualquier dispositivo.
            </p>
          </div>
        </div>
      </section>

      {/* Sección 1: Visión General */}
      <SplitSection
        title="Sonido Perfecto en Cada Ambiente"
        text="Nuestros sistemas de audio distribuido permiten disfrutar de música de alta calidad en múltiples zonas de manera independiente. Desde ambientes residenciales hasta espacios comerciales, creamos experiencias auditivas excepcionales que se adaptan a cada momento y actividad."
        imageSrc="/placeholders/audio-distributed.png"
        reverse={false}
        features={[
          'Múltiples zonas de audio independientes',
          'Control individual por zona',
          'Sincronización perfecta entre espacios',
          'Integración con sistemas de automatización',
          'Calidad de audio profesional'
        ]}
      />

      {/* Sección 2: Beneficios Prácticos */}
      <SplitSection
        title="Flexibilidad y Control Total"
        text="Con nuestros sistemas de audio distribuido, cada habitación puede reproducir contenido diferente simultáneamente, o todas pueden sincronizarse para crear una experiencia envolvente. El control se realiza desde dispositivos móviles, paneles táctiles o comandos de voz."
        imageSrc="/placeholders/automation-placeholder.png"
        reverse={true}
        features={[
          'Control desde dispositivos móviles',
          'Integración con asistentes de voz',
          'Programación automática por horarios',
          'Fácil expansión del sistema',
          'Mantenimiento mínimo requerido'
        ]}
      />

      {/* Sección 3: Aplicaciones */}
      <section className="py-16 bg-bgLight">
        <div className="container-zonit">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-textDark mb-6 tracking-wide">
              Aplicaciones Especializadas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nuestros sistemas de audio distribuido se adaptan a diferentes entornos 
              y necesidades específicas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card-zonit p-6 text-center hover-lift transition-elegant">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Home className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-medium text-textDark mb-3">Hogares</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Música ambiente en toda la casa con control independiente por habitación.
              </p>
            </div>
            
            <div className="card-zonit p-6 text-center hover-lift transition-elegant">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-medium text-textDark mb-3">Oficinas</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Ambientes sonoros que mejoran la productividad y el bienestar laboral.
              </p>
            </div>
            
            <div className="card-zonit p-6 text-center hover-lift transition-elegant">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-medium text-textDark mb-3">Retail</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Experiencias de compra mejoradas con audio ambiente personalizado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="¿Listo para transformar tu experiencia auditiva?"
        text="Contáctanos para una consulta gratuita y descubre cómo nuestros sistemas de audio distribuido pueden mejorar cada espacio de tu hogar o empresa."
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
