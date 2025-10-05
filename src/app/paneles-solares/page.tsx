import Header from '../(components)/Header';
import Footer from '../(components)/Footer';
import CTA from '../(components)/CTA';
import WhatsAppButton from '../(components)/WhatsAppButton';
import Link from 'next/link';
import { Sun, DollarSign, TrendingUp, CheckCircle, Calculator, Wrench, Zap } from 'lucide-react';

export const metadata = {
  title: 'Paneles Solares - Zonit',
  description: 'Sistemas fotovoltaicos profesionales. Ahorra hasta 99% en tu recibo de CFE y recupera tu inversión en 2-5 años.',
};

export default function PanelesSolares() {
  const steps = [
    {
      icon: Calculator,
      title: 'Evaluación',
      description: 'Análisis técnico completo de tu propiedad, consumo energético y viabilidad del proyecto.'
    },
    {
      icon: CheckCircle,
      title: 'Cotización',
      description: 'Propuesta detallada con diseño del sistema, costos y proyección de ahorros.'
    },
    {
      icon: Wrench,
      title: 'Instalación',
      description: 'Instalación profesional con equipos de calidad y certificación completa.'
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 sm:pt-28 sm:pb-18 md:pt-32 md:pb-20 lg:pt-40 lg:pb-24 xl:pt-48 xl:pb-32 overflow-hidden min-h-screen flex items-center">
        {/* Background Image optimizado */}
        <div className="absolute inset-0">
          <img src="/placeholders/solar-placeholder.png"
            alt="Paneles Solares" className="object-cover" />
        </div>
        {/* Overlay profesional con opacidad */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/50 to-black/60"></div>
        {/* Contenido centrado con animaciones */}
        <div className="container-zonit relative z-10">
          <div className="text-center">
            <nav className="text-sm text-gray-300 mb-6">
              <Link href="/" className="hover:text-textLight transition-colors duration-150">Inicio</Link>
              <span className="mx-2">/</span>
              <span className="text-textLight">Paneles Solares</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-light text-textLight mb-6 tracking-wide">
              Paneles Solares
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Descubre el poder de la energía solar. Sistemas fotovoltaicos que te permiten 
              ahorrar hasta 99% en tu recibo de CFE y recuperar tu inversión en 2-5 años.
            </p>
          </div>
        </div>
      </section>

      {/* Sección Principal */}
      <section className="py-20 bg-white">
        <div className="container-zonit">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-light tracking-wide text-textDark">
                Sistemas Fotovoltaicos Inteligentes
              </h2>
              <p className="text-lg text-black leading-relaxed">
                Los sistemas fotovoltaicos de Zonit te permiten generar tu propia energía eléctrica 
                utilizando la radiación solar. Con tecnología de vanguardia y instalación profesional, 
                transformamos tu espacio en un entorno energéticamente eficiente.
              </p>
              <p className="text-lg text-black leading-relaxed">
                Nuestros sistemas están diseñados para reducir significativamente tus costos de electricidad, 
                contribuir al cuidado del medio ambiente y aumentar el valor de tu propiedad.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accentBlue rounded-full"></div>
                  <span className="text-black">Ahorro de hasta 99% en tu recibo de CFE</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accentBlue rounded-full"></div>
                  <span className="text-black">Recuperación de inversión en 2-5 años</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accentBlue rounded-full"></div>
                  <span className="text-black">Energía limpia y renovable</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accentBlue rounded-full"></div>
                  <span className="text-black">Incremento del valor de la propiedad</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="/placeholders/solar-placeholder.png" 
                alt="Sistemas Fotovoltaicos Zonit" 
                width={600}
                height={400}
                className="rounded-xl shadow-lg ring-1 ring-gray-200 w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios y Aplicaciones */}
      <section className="py-20 bg-white">
        <div className="container-zonit">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide text-textDark">
              Beneficios de la Energía Solar
            </h2>
            <p className="text-lg text-black max-w-3xl mx-auto leading-relaxed">
              La energía solar ofrece múltiples ventajas tanto económicas como ambientales, 
              convirtiéndose en una inversión inteligente para el futuro.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-zonit p-8 text-center hover-lift transition-elegant">
              <div className="w-16 h-16 bg-accentLime rounded-xl flex items-center justify-center mx-auto mb-6">
                <Sun className="w-8 h-8 text-textDark" />
              </div>
              <h3 className="text-xl font-medium text-black mb-4">Energía Renovable</h3>
              <p className="text-black leading-relaxed">
                Contribuye al cuidado del medio ambiente utilizando energía limpia e inagotable del sol.
              </p>
            </div>
            
            <div className="card-zonit p-8 text-center hover-lift transition-elegant">
              <div className="w-16 h-16 bg-accentLime rounded-xl flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-textDark" />
              </div>
              <h3 className="text-xl font-medium text-black mb-4">Ahorro Económico</h3>
              <p className="text-black leading-relaxed">
                Reduce hasta 99% tu recibo de CFE con sistemas fotovoltaicos eficientes y duraderos.
              </p>
            </div>
            
            <div className="card-zonit p-8 text-center hover-lift transition-elegant">
              <div className="w-16 h-16 bg-accentLime rounded-xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-textDark" />
              </div>
              <h3 className="text-xl font-medium text-black mb-4">Valor de Propiedad</h3>
              <p className="text-black leading-relaxed">
                Incrementa significativamente el valor de tu propiedad con tecnología solar moderna.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Cómo recuperas tu inversión? */}
      <section className="py-20 bg-secondary">
        <div className="container-zonit">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light text-textLight mb-8 tracking-wide">
              ¿Cómo recuperas tu inversión?
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed mb-12">
              La viabilidad de tu proyecto solar se evalúa mediante análisis técnicos especializados 
              como DAC (Diagnóstico de Ahorro de Consumo), PDBT (Proyecto de Diseño de Balance Técnico) 
              y GDBT (Gestión de Diseño de Balance Técnico).
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="card-zonit p-8">
                <div className="w-16 h-16 bg-accentLime rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-textDark" />
                </div>
                <h3 className="text-xl font-medium text-black mb-4">ROI Promedio</h3>
                <p className="text-black leading-relaxed">
                  Recupera tu inversión en un promedio de 2 a 5 años, dependiendo del tamaño 
                  del sistema y tu consumo actual.
                </p>
              </div>
              
              <div className="card-zonit p-8">
                <div className="w-16 h-16 bg-accentLime rounded-xl flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-8 h-8 text-textDark" />
                </div>
                <h3 className="text-xl font-medium text-black mb-4">Ahorro Garantizado</h3>
                <p className="text-black leading-relaxed">
                  Reduce hasta 99% tu recibo de CFE con sistemas diseñados específicamente 
                  para tu consumo energético.
                </p>
              </div>
            </div>
            
            <p className="text-lg text-gray-200 leading-relaxed">
              Nuestros especialistas realizan un análisis completo de viabilidad que incluye 
              evaluación del techo, orientación solar, sombras y consumo histórico para garantizar 
              el máximo rendimiento de tu inversión.
            </p>
          </div>
        </div>
      </section>

      {/* Pasos para comenzar */}
      <section className="py-20 bg-white">
        <div className="container-zonit">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide text-textDark">
              Pasos para comenzar
            </h2>
            <p className="text-lg text-black max-w-3xl mx-auto leading-relaxed">
              Proceso simple y transparente para tu proyecto solar
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="card-zonit p-8 text-center hover-lift transition-elegant">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-medium text-black mb-4">{step.title}</h3>
                <p className="text-black leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTA
        title="Comienza a ahorrar hoy"
        text="Únete a miles de familias que ya disfrutan de los beneficios de la energía solar."
        primaryLabel="Cotiza ahora"
        primaryHref="/contacto"
        dark={true}
      />

      <Footer />
      <WhatsAppButton />
    </main>
  );
}