import Header from '../(components)/Header';
import Footer from '../(components)/Footer';
import SectionTitle from '../(components)/SectionTitle';
import WhatsAppButton from '../(components)/WhatsAppButton';
import Image from 'next/image';

export const metadata = {
  title: 'Proyectos - Zonit',
  description: 'Conoce nuestros proyectos de automatización inteligente y sistemas solares. Casos de éxito y transformaciones tecnológicas.',
};

export default function Proyectos() {
  const projects = [
    {
      title: 'Casa Inteligente Residencial',
      category: 'Automatización',
      image: '/placeholders/automation-placeholder.jpg',
      description: 'Sistema completo de automatización para hogar familiar con control de iluminación, audio distribuido y seguridad.'
    },
    {
      title: 'Oficina Corporativa',
      category: 'Automatización',
      image: '/placeholders/automation-placeholder.jpg',
      description: 'Automatización empresarial con control de accesos, videoconferencias y gestión energética.'
    },
    {
      title: 'Sistema Solar Residencial',
      category: 'Solar',
      image: '/placeholders/solar-placeholder.jpg',
      description: 'Instalación fotovoltaica residencial que reduce 95% el consumo de CFE.'
    },
    {
      title: 'Complejo Industrial',
      category: 'Automatización',
      image: '/placeholders/automation-placeholder.jpg',
      description: 'Sistema de seguridad y control de accesos para instalación industrial de gran escala.'
    },
    {
      title: 'Sistema Solar Comercial',
      category: 'Solar',
      image: '/placeholders/solar-placeholder.jpg',
      description: 'Instalación solar comercial con ahorro energético del 99% en facturación eléctrica.'
    },
    {
      title: 'Auditorio Profesional',
      category: 'Automatización',
      image: '/placeholders/automation-placeholder.jpg',
      description: 'Sistema de audio profesional y video distribuido para auditorio corporativo.'
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary py-24">
        <div className="container-zonit text-center">
          <h1 className="text-4xl md:text-5xl font-light text-textLight mb-8 tracking-wide">
            Nuestros Proyectos
          </h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Descubre algunos de nuestros proyectos más destacados en automatización 
            inteligente y sistemas solares.
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container-zonit">
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-textLight rounded-xl font-medium transition-smooth">
              Todos
            </button>
            <button className="px-6 py-3 bg-gray-100 text-gray-600 rounded-xl font-medium hover:bg-gray-200 transition-smooth">
              Automatización
            </button>
            <button className="px-6 py-3 bg-gray-100 text-gray-600 rounded-xl font-medium hover:bg-gray-200 transition-smooth">
              Solar
            </button>
          </div>
        </div>
      </section>

      {/* Grid de Proyectos */}
      <section className="py-20 bg-bgLight">
        <div className="container-zonit">
          <SectionTitle 
            title="Casos de Éxito" 
            subtitle="Transformaciones tecnológicas que marcan la diferencia"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="card-zonit overflow-hidden group hover:scale-105 transition-transform duration-150">
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.category === 'Automatización' 
                        ? 'bg-primary text-textLight' 
                        : 'bg-accentLime text-textDark'
                    }`}>
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-textDark mb-3 tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container-zonit text-center">
          <h2 className="text-3xl md:text-4xl font-light text-textDark mb-8 tracking-wide">
            ¿Quieres ser nuestro próximo caso de éxito?
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Contáctanos para conocer cómo podemos transformar tu espacio con 
            tecnología inteligente y eficiencia energética.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="/contacto" 
              className="btn-primary px-10 py-5 rounded-2xl text-lg font-medium transition-smooth"
            >
              Solicitar cotización
            </a>
            <a 
              href="/automatizacion" 
              className="btn-secondary px-10 py-5 rounded-2xl text-lg font-medium transition-smooth"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
