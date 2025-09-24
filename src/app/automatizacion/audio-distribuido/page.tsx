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

      {/* Sección Principal */}
      <section className="py-20 bg-white">
        <div className="container-zonit">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-light tracking-wide" style={{color: '#74acd8'}}>
                Audio Distribuido Inteligente
              </h2>
              <p className="text-lg text-black leading-relaxed">
                Nuestros sistemas de audio distribuido permiten disfrutar de música de alta calidad en múltiples zonas de manera independiente. 
                Desde ambientes residenciales hasta espacios comerciales, creamos experiencias auditivas excepcionales que se adaptan a cada momento y actividad.
              </p>
              <p className="text-lg text-black leading-relaxed">
                Con control desde dispositivos móviles, integración con asistentes de voz, programación automática por horarios, 
                fácil expansión del sistema y mantenimiento mínimo requerido.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accentBlue rounded-full"></div>
                  <span className="text-black">Múltiples zonas de audio independientes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accentBlue rounded-full"></div>
                  <span className="text-black">Control individual por zona</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accentBlue rounded-full"></div>
                  <span className="text-black">Sincronización perfecta entre espacios</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accentBlue rounded-full"></div>
                  <span className="text-black">Integración con sistemas de automatización</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/placeholders/audio-distributed.png" 
                alt="Audio Distribuido Inteligente" 
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
              Nuestros sistemas de audio distribuido se adaptan a diferentes entornos 
              y necesidades específicas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-zonit p-8 text-center hover-lift transition-elegant">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-black mb-4">Hogares</h3>
              <p className="text-black leading-relaxed">
                Música ambiente en toda la casa con control independiente por habitación.
              </p>
            </div>
            
            <div className="card-zonit p-8 text-center hover-lift transition-elegant">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-black mb-4">Oficinas</h3>
              <p className="text-black leading-relaxed">
                Ambientes sonoros que mejoran la productividad y el bienestar laboral.
              </p>
            </div>
            
            <div className="card-zonit p-8 text-center hover-lift transition-elegant">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-black mb-4">Retail</h3>
              <p className="text-black leading-relaxed">
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
