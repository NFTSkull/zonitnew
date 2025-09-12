import Header from '../(components)/Header';
import Footer from '../(components)/Footer';
import WhatsAppButton from '../(components)/WhatsAppButton';
import Image from 'next/image';

export const metadata = {
  title: 'Nosotros - Zonit',
  description: 'Conoce a Zonit, especialistas en automatización inteligente y sistemas solares. Innovación, eficiencia energética y practicidad.',
};

export default function Nosotros() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary py-24">
        <div className="container-zonit text-center">
          <h1 className="text-4xl md:text-5xl font-light text-textLight mb-8 tracking-wide">
            Nosotros
          </h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Especialistas en automatización inteligente y sistemas solares, 
            comprometidos con la innovación y la eficiencia energética.
          </p>
        </div>
      </section>

      {/* Quiénes somos */}
      <section className="py-20 bg-white">
        <div className="container-zonit">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-light text-textDark tracking-wide">
                Quiénes somos
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Zonit es una empresa especializada en automatización inteligente y sistemas 
                fotovoltaicos, dedicada a transformar espacios en entornos tecnológicamente 
                avanzados y energéticamente eficientes.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Con años de experiencia en el sector, nos hemos consolidado como líderes 
                en la implementación de soluciones tecnológicas que mejoran la calidad de vida 
                y optimizan el consumo energético.
              </p>
            </div>
            <div className="relative">
              <Image 
                src="/placeholders/automation-placeholder.jpg" 
                alt="Equipo Zonit" 
                width={600}
                height={400}
                className="rounded-xl shadow-lg ring-1 ring-gray-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Misión, Visión y Valores */}
      <section className="py-20 bg-bgLight">
        <div className="container-zonit">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-zonit p-8 text-center">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-textDark mb-4">Misión</h3>
              <p className="text-gray-600 leading-relaxed">
                Transformar espacios mediante tecnología inteligente, proporcionando 
                soluciones innovadoras que mejoren la eficiencia energética y la calidad de vida.
              </p>
            </div>
            
            <div className="card-zonit p-8 text-center">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-textDark mb-4">Visión</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser la empresa líder en automatización inteligente y energía solar, 
                reconocida por nuestra innovación, calidad y compromiso con la sostenibilidad.
              </p>
            </div>
            
            <div className="card-zonit p-8 text-center">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-textDark mb-4">Valores</h3>
              <p className="text-gray-600 leading-relaxed">
                Innovación constante, eficiencia energética, practicidad en las soluciones 
                y compromiso con la satisfacción del cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compromiso */}
      <section className="py-20 bg-white">
        <div className="container-zonit">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light text-textDark mb-8 tracking-wide">
              Nuestro Compromiso
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              En Zonit, nos comprometemos con la innovación tecnológica, la eficiencia energética 
              y la practicidad en cada solución que implementamos. Creemos que la tecnología debe 
              simplificar la vida, no complicarla.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nuestro enfoque se centra en crear sistemas que se adapten a tu estilo de vida, 
              proporcionando valor agregado a tu propiedad mientras contribuimos al cuidado 
              del medio ambiente.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container-zonit text-center">
          <h2 className="text-3xl md:text-4xl font-light text-textLight mb-8 tracking-wide">
            ¿Listo para trabajar con nosotros?
          </h2>
          <p className="text-lg text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            Contáctanos para conocer más sobre nuestros servicios y cómo podemos 
            ayudarte a transformar tu espacio.
          </p>
          <a 
            href="/contacto" 
            className="btn-primary px-10 py-5 rounded-2xl text-lg font-medium transition-smooth inline-block"
          >
            Contactar
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
