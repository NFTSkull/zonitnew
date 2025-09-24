import Header from '../../(components)/Header';
import Footer from '../../(components)/Footer';
import SplitSection from '../../(components)/SplitSection';
import CTA from '../../(components)/CTA';
import WhatsAppButton from '../../(components)/WhatsAppButton';
import Link from 'next/link';

export const metadata = {
  title: 'Cableado Estructurado - Zonit',
  description: 'Infraestructura de red robusta y escalable. Cableado estructurado profesional para hogares y empresas.',
};

export default function CableadoEstructurado() {
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
              <span className="text-textLight">Cableado Estructurado</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-light text-textLight mb-6 tracking-wide">
              Cableado Estructurado
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              La base sólida para todos tus sistemas tecnológicos. Infraestructura de red 
              profesional que garantiza conectividad confiable y escalabilidad.
            </p>
          </div>
        </div>
      </section>

      {/* Sección 1: Visión General */}
      <SplitSection
        title="Infraestructura Sólida y Escalable"
        text="El cableado estructurado es la base fundamental de cualquier sistema tecnológico moderno. Nuestros sistemas están diseñados para proporcionar conectividad confiable, alta velocidad y facilidad de mantenimiento, preparando tu espacio para las tecnologías del presente y futuro."
        imageSrc="/placeholders/structured-cabling.png"
        reverse={false}
        features={[
          'Cableado categoría 6A y superior',
          'Diseño escalable y modular',
          'Instalación limpia y organizada',
          'Documentación completa',
          'Garantía extendida'
        ]}
      />

      {/* Sección 2: Estabilidad y Velocidad */}
      <SplitSection
        title="Estabilidad, Velocidad y Soporte Completo"
        text="Una infraestructura de red bien diseñada garantiza estabilidad en las conexiones, velocidades óptimas y facilidad de mantenimiento. Nuestros sistemas incluyen soporte técnico completo, documentación detallada y planes de mantenimiento preventivo para asegurar el funcionamiento óptimo a largo plazo."
        imageSrc="/placeholders/automation-placeholder.png"
        reverse={true}
        features={[
          'Velocidades hasta 10 Gbps',
          'Redundancia y respaldo',
          'Monitoreo de red',
          'Mantenimiento preventivo',
          'Soporte técnico especializado'
        ]}
      />

      {/* CTA Section */}
      <CTA
        title="¿Listo para construir una base tecnológica sólida?"
        text="Contáctanos para una consulta gratuita y descubre cómo podemos crear la infraestructura perfecta para tus necesidades."
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

