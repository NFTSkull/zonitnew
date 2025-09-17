import Header from '../../(components)/Header';
import Footer from '../../(components)/Footer';
import SplitSection from '../../(components)/SplitSection';
import CTA from '../../(components)/CTA';
import WhatsAppButton from '../../(components)/WhatsAppButton';
import Link from 'next/link';
import { Home, Building2, ShoppingBag } from 'lucide-react';

export const metadata = {
  title: 'Audio Distribuido - Zonit',
  description: 'Sistemas de audio distribuido para hogares y empresas. Múltiples zonas, control independiente y alta calidad de sonido.',
};

export default function AudioDistribuido() {
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
              <span className="text-textLight">Audio Distribuido</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-light text-textLight mb-8 tracking-wide">
              Audio Distribuido
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Lleva la música a cada rincón de tu espacio con sistemas de audio distribuido 
              de alta calidad y control independiente.
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
      <section className="py-20 bg-bgLight">
        <div className="container-zonit">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-textDark mb-8 tracking-wide">
              Aplicaciones Especializadas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nuestros sistemas de audio distribuido se adaptan a diferentes entornos 
              y necesidades específicas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-zonit p-8 text-center group hover:scale-105 transition-transform duration-200">
              <div 
                className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 border"
                style={{ 
                  background: 'linear-gradient(135deg, #1e1d3715, #02383d15)', 
                  borderColor: '#1e1d3720' 
                }}
              >
                <Home className="w-8 h-8" style={{ color: '#1e1d37' }} />
              </div>
              <h3 className="text-xl font-medium mb-4" style={{ color: '#74acd8' }}>Hogares</h3>
              <p className="text-black leading-relaxed font-light">
                Música ambiente en toda la casa con control independiente por habitación.
              </p>
            </div>
            
            <div className="card-zonit p-8 text-center group hover:scale-105 transition-transform duration-200">
              <div 
                className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 border"
                style={{ 
                  background: 'linear-gradient(135deg, #02383d15, #74acd815)', 
                  borderColor: '#02383d20' 
                }}
              >
                <Building2 className="w-8 h-8" style={{ color: '#02383d' }} />
              </div>
              <h3 className="text-xl font-medium mb-4" style={{ color: '#74acd8' }}>Oficinas</h3>
              <p className="text-black leading-relaxed font-light">
                Ambientes sonoros que mejoran la productividad y el bienestar laboral.
              </p>
            </div>
            
            <div className="card-zonit p-8 text-center group hover:scale-105 transition-transform duration-200">
              <div 
                className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 border"
                style={{ 
                  background: 'linear-gradient(135deg, #74acd815, #d3d80115)', 
                  borderColor: '#74acd820' 
                }}
              >
                <ShoppingBag className="w-8 h-8" style={{ color: '#74acd8' }} />
              </div>
              <h3 className="text-xl font-medium mb-4" style={{ color: '#74acd8' }}>Retail</h3>
              <p className="text-black leading-relaxed font-light">
                Experiencias de compra mejoradas con audio ambiente personalizado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="¿Listo para disfrutar del audio perfecto en cada espacio?"
        text="Contáctanos para una consulta gratuita y descubre cómo podemos transformar tu experiencia auditiva."
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
