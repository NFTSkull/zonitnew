import Header from '../../(components)/Header';
import Footer from '../../(components)/Footer';
import SplitSection from '../../(components)/SplitSection';
import CTA from '../../(components)/CTA';
import WhatsAppButton from '../../(components)/WhatsAppButton';
import Link from 'next/link';

export const metadata = {
  title: 'Audio Profesional - Zonit',
  description: 'Sistemas de audio profesional para auditorios, estadios y eventos corporativos. Experiencias sonoras inmersivas.',
};

export default function AudioProfesional() {
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
              <span className="text-textLight">Audio Profesional</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-light text-textLight mb-8 tracking-wide">
              Audio Profesional
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experiencias sonoras de nivel profesional para auditorios, estadios, 
              eventos corporativos y espacios especializados.
            </p>
          </div>
        </div>
      </section>

      {/* Sección 1: Visión General */}
      <SplitSection
        title="Experiencias Sonoras Inmersivas"
        text="Nuestros sistemas de audio profesional están diseñados para crear experiencias sonoras excepcionales en espacios grandes y especializados. Desde auditorios corporativos hasta estadios deportivos, proporcionamos soluciones que garantizan claridad, cobertura uniforme y calidad de nivel profesional."
        imageSrc="/placeholders/professional-audio.jpg"
        reverse={false}
        features={[
          'Equipos de audio de nivel profesional',
          'Diseño acústico especializado',
          'Cobertura uniforme en grandes espacios',
          'Control de audio avanzado',
          'Instalación y calibración profesional'
        ]}
      />

      {/* Sección 2: Aplicaciones Especializadas */}
      <SplitSection
        title="Aplicaciones para Cada Necesidad"
        text="Cada espacio tiene requerimientos únicos de audio. Nuestros sistemas se adaptan a diferentes aplicaciones: presentaciones corporativas, eventos deportivos, conciertos, conferencias y más. Cada solución se personaliza según las características acústicas del espacio y las necesidades específicas del cliente."
        imageSrc="/placeholders/automation-placeholder.jpg"
        reverse={true}
        features={[
          'Auditorios y salas de conferencias',
          'Estadios y arenas deportivas',
          'Centros de convenciones',
          'Teatros y espacios culturales',
          'Eventos corporativos especiales'
        ]}
      />

      {/* CTA Section */}
      <CTA
        title="¿Listo para crear experiencias sonoras excepcionales?"
        text="Contáctanos para una consulta gratuita y descubre cómo podemos transformar tu espacio con audio profesional."
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
