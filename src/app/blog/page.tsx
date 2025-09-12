import Header from '../(components)/Header';
import Footer from '../(components)/Footer';
import SectionTitle from '../(components)/SectionTitle';
import WhatsAppButton from '../(components)/WhatsAppButton';
import Image from 'next/image';

export const metadata = {
  title: 'Blog - Zonit',
  description: 'Artículos sobre automatización inteligente, energía solar y tecnología para hogares y empresas.',
};

export default function Blog() {
  const blogPosts = [
    {
      title: 'Guía Completa de Automatización Residencial',
      excerpt: 'Descubre cómo transformar tu hogar en una casa inteligente con los mejores sistemas de automatización.',
      date: '15 de Enero, 2024',
      category: 'Automatización',
      image: '/placeholders/automation-placeholder.jpg'
    },
    {
      title: 'Beneficios de la Energía Solar en México',
      excerpt: 'Conoce las ventajas económicas y ambientales de instalar paneles solares en tu propiedad.',
      date: '10 de Enero, 2024',
      category: 'Energía Solar',
      image: '/placeholders/solar-placeholder.jpg'
    },
    {
      title: 'Sistemas de Seguridad Inteligente',
      excerpt: 'Protege tu hogar con tecnología de vanguardia en sistemas de seguridad y control de accesos.',
      date: '5 de Enero, 2024',
      category: 'Seguridad',
      image: '/placeholders/automation-placeholder.jpg'
    },
    {
      title: 'Ahorro Energético con Iluminación Inteligente',
      excerpt: 'Reduce hasta 60% tu consumo energético con sistemas de iluminación automatizada.',
      date: '28 de Diciembre, 2023',
      category: 'Eficiencia',
      image: '/placeholders/automation-placeholder.jpg'
    },
    {
      title: 'ROI de Sistemas Solares: ¿Cuándo se Paga?',
      excerpt: 'Análisis detallado sobre el retorno de inversión en sistemas fotovoltaicos residenciales.',
      date: '20 de Diciembre, 2023',
      category: 'Energía Solar',
      image: '/placeholders/solar-placeholder.jpg'
    },
    {
      title: 'Integración de Audio Distribuido en el Hogar',
      excerpt: 'Crea experiencias sonoras únicas con sistemas de audio distribuido profesional.',
      date: '15 de Diciembre, 2023',
      category: 'Audio',
      image: '/placeholders/automation-placeholder.jpg'
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary py-24">
        <div className="container-zonit text-center">
          <h1 className="text-4xl md:text-5xl font-light text-textLight mb-8 tracking-wide">
            Blog
          </h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Mantente informado sobre las últimas tendencias en automatización inteligente, 
            energía solar y tecnología para hogares y empresas.
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
              Energía Solar
            </button>
            <button className="px-6 py-3 bg-gray-100 text-gray-600 rounded-xl font-medium hover:bg-gray-200 transition-smooth">
              Seguridad
            </button>
          </div>
        </div>
      </section>

      {/* Grid de Artículos */}
      <section className="py-20 bg-bgLight">
        <div className="container-zonit">
          <SectionTitle 
            title="Últimos Artículos" 
            subtitle="Conoce las últimas novedades en tecnología inteligente"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="card-zonit overflow-hidden group hover:scale-105 transition-transform duration-150">
                <div className="relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-textLight rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-3">{post.date}</div>
                  <h3 className="text-xl font-medium text-textDark mb-3 tracking-wide group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-primary font-medium hover:text-accentBlue transition-colors duration-150"
                  >
                    Leer más
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-white">
        <div className="container-zonit">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light text-textDark mb-8 tracking-wide">
              Mantente Informado
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Suscríbete a nuestro newsletter y recibe las últimas novedades sobre 
              automatización inteligente y energía solar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Tu email" 
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="btn-primary px-6 py-3 rounded-xl font-medium transition-smooth">
                Suscribirse
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
