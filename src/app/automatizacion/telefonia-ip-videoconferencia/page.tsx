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
      <section className="bg-primary py-24">
        <div className="container-zonit">
          <div className="text-center">
            <nav className="text-sm text-gray-300 mb-8">
              <Link href="/" className="hover:text-textLight transition-colors">Inicio</Link>
              <span className="mx-2">/</span>
              <Link href="/automatizacion" className="hover:text-textLight transition-colors">Automatización</Link>
              <span className="mx-2">/</span>
              <span className="text-textLight">Telefonía IP y Videoconferencia</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-light text-textLight mb-8 tracking-wide">
              Telefonía IP y Videoconferencia
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Comunicación empresarial de nivel profesional con tecnología IP avanzada 
              y sistemas de videoconferencia de alta calidad.
            </p>
          </div>
        </div>
      </section>

      {/* Sección 1: Visión General */}
      <SplitSection
        title="Comunicación Empresarial Profesional"
        text="Nuestros sistemas de telefonía IP y videoconferencia están diseñados para empresas que requieren comunicación clara, confiable y escalable. Desde pequeñas oficinas hasta grandes corporaciones, proporcionamos soluciones que mejoran la productividad y facilitan la colaboración."
        imageSrc="/placeholders/ip-telephony.svg"
        reverse={false}
        features={[
          'Llamadas HD con calidad cristalina',
          'Videoconferencias multipunto',
          'Integración con sistemas empresariales',
          'Escalabilidad según necesidades',
          'Administración centralizada'
        ]}
      />

      {/* Sección 2: Colaboración y Agilidad */}
      <SplitSection
        title="Colaboración Eficiente y Ágil"
        text="La videoconferencia moderna va más allá de las llamadas simples. Nuestros sistemas incluyen funciones avanzadas como compartir pantalla, grabación de sesiones, pizarras digitales y integración con herramientas de productividad, facilitando la colaboración remota y presencial."
        imageSrc="/placeholders/automation-placeholder.svg"
        reverse={true}
        features={[
          'Compartir pantalla y documentos',
          'Grabación automática de sesiones',
          'Pizarras digitales interactivas',
          'Integración con calendarios',
          'Acceso desde cualquier dispositivo'
        ]}
      />

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

