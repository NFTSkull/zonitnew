import Header from '../(components)/Header';
import Footer from '../(components)/Footer';
import HeroMinimal from '../(components)/HeroMinimal';
import SectionTitle from '../(components)/SectionTitle';
import BenefitsGrid from '../(components)/BenefitsGrid';
import Steps from '../(components)/Steps';
import CTA from '../(components)/CTA';
import WhatsAppButton from '../(components)/WhatsAppButton';
import { 
  Sun, 
  DollarSign, 
  TrendingUp, 
  CheckCircle, 
  Calculator, 
  Wrench, 
  Zap
} from 'lucide-react';

export const metadata = {
  title: 'Paneles Solares - Zonit',
  description: 'Sistemas fotovoltaicos profesionales. Ahorra hasta 99% en tu recibo de CFE y recupera tu inversión en 2-5 años.',
};

export default function PanelesSolares() {
  const benefits = [
    {
      icon: Sun,
      title: 'Energía Renovable y Sostenible',
      text: 'Contribuye al cuidado del medio ambiente utilizando energía limpia e inagotable del sol.'
    },
    {
      icon: DollarSign,
      title: 'Ahorro en Costos de Energía',
      text: 'Reduce hasta 99% tu recibo de CFE con sistemas fotovoltaicos eficientes y duraderos.'
    },
    {
      icon: TrendingUp,
      title: 'Valor Agregado para la Propiedad',
      text: 'Incrementa significativamente el valor de tu propiedad con tecnología solar moderna.'
    }
  ];

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
      <HeroMinimal
        title="Sistemas Fotovoltaicos"
        subtitle="Descubre el poder de la energía solar"
        ctas={[
          { label: 'Cotiza ahora', href: '/contacto', primary: true }
        ]}
        imageSrc="/placeholders/solar-placeholder.png"
        dark={false}
      />

      {/* Introducción */}
      <section className="py-20 bg-white">
        <div className="container-zonit">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light text-textDark mb-8 tracking-wide">
              Energía Solar para tu Hogar o Empresa
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Los sistemas fotovoltaicos de Zonit te permiten generar tu propia energía eléctrica 
              utilizando la radiación solar, reduciendo significativamente tus costos de electricidad 
              y contribuyendo al cuidado del medio ambiente.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              Con tecnología de vanguardia y instalación profesional, puedes ahorrar hasta 99% 
              en tu recibo de CFE y recuperar tu inversión en un promedio de 2 a 5 años.
            </p>
            <a 
              href="/contacto" 
              className="btn-primary px-10 py-5 rounded-2xl text-lg font-medium transition-smooth inline-block"
            >
              Cotiza ahora
            </a>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <BenefitsGrid items={benefits} columns={3} />

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
                <h3 className="text-xl font-medium text-textDark mb-4">ROI Promedio</h3>
                <p className="text-gray-600 leading-relaxed">
                  Recupera tu inversión en un promedio de 2 a 5 años, dependiendo del tamaño 
                  del sistema y tu consumo actual.
                </p>
              </div>
              
              <div className="card-zonit p-8">
                <div className="w-16 h-16 bg-accentLime rounded-xl flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-8 h-8 text-textDark" />
                </div>
                <h3 className="text-xl font-medium text-textDark mb-4">Ahorro Garantizado</h3>
                <p className="text-gray-600 leading-relaxed">
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
          <SectionTitle 
            title="Pasos para comenzar" 
            subtitle="Proceso simple y transparente para tu proyecto solar"
          />
          <Steps items={steps} />
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

