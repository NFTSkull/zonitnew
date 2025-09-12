import Header from '../../(components)/Header';
import Footer from '../../(components)/Footer';
import SplitSection from '../../(components)/SplitSection';
import CTA from '../../(components)/CTA';
import WhatsAppButton from '../../(components)/WhatsAppButton';
import Link from 'next/link';

export const metadata = {
  title: 'Video - Zonit',
  description: 'Sistemas de video distribuido y cine en casa. Entretenimiento de alta calidad con control centralizado.',
};

export default function Video() {
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
              <span className="text-textLight">Video</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-light text-textLight mb-8 tracking-wide">
              Video Distribuido
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experiencias cinematográficas en casa con sistemas de video distribuido 
              de alta definición y control centralizado.
            </p>
          </div>
        </div>
      </section>

      {/* Sección 1: Visión General */}
      <SplitSection
        title="Cine en Casa y Video Distribuido"
        text="Transforma cualquier espacio en una sala de cine profesional con nuestros sistemas de video distribuido. Desde una sola pantalla hasta múltiples displays sincronizados, creamos experiencias visuales inmersivas que se adaptan a tu estilo de vida y entretenimiento."
        imageSrc="/placeholders/video.jpg"
        reverse={false}
        features={[
          'Múltiples pantallas sincronizadas',
          'Calidad 4K y HDR',
          'Control centralizado',
          'Integración con sistemas de audio',
          'Fuentes de contenido múltiples'
        ]}
      />

      {/* Sección 2: Integración y Control */}
      <SplitSection
        title="Integración Perfecta y Control Intuitivo"
        text="Nuestros sistemas de video se integran perfectamente con otros sistemas de automatización, permitiendo crear experiencias completas donde la iluminación, audio y video trabajan en armonía. El control se realiza desde dispositivos móviles o paneles táctiles con interfaces intuitivas."
        imageSrc="/placeholders/automation-placeholder.jpg"
        reverse={true}
        features={[
          'Control desde dispositivos móviles',
          'Escenas predefinidas',
          'Integración con sistemas de automatización',
          'Actualizaciones automáticas',
          'Mantenimiento remoto'
        ]}
      />

      {/* CTA Section */}
      <CTA
        title="¿Listo para crear tu propio cine en casa?"
        text="Contáctanos para una consulta gratuita y descubre cómo podemos transformar tu experiencia de entretenimiento."
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
