import Header from './(components)/Header';
import Footer from './(components)/Footer';
import HeroMinimal from './(components)/HeroMinimal';
import SectionTitle from './(components)/SectionTitle';
import ServiceCard from './(components)/ServiceCard';
import BenefitsGrid from './(components)/BenefitsGrid';
import CTA from './(components)/CTA';
import WhatsAppButton from './(components)/WhatsAppButton';
import Image from 'next/image';
import { 
  Lightbulb, 
  Volume2, 
  Shield, 
  Phone, 
  Video, 
  Cable, 
  Mic,
  Zap,
  Smartphone,
  Leaf,
  Users
} from 'lucide-react';

export default function Home() {
  const automationServices = [
    {
      title: 'Control e Iluminación',
      href: '/automatizacion/control-iluminacion',
      icon: Lightbulb,
      imageSrc: '/placeholders/control-lighting.svg',
      description: 'Sistemas inteligentes',
      features: ['Control automático', 'Ahorro energético', 'Escenas personalizadas']
    },
    {
      title: 'Audio Distribuido',
      href: '/automatizacion/audio-distribuido',
      icon: Volume2,
      imageSrc: '/placeholders/audio-distributed.svg',
      description: 'Sonido en toda la casa',
      features: ['Múltiples zonas', 'Control independiente', 'Alta calidad']
    },
    {
      title: 'Control de Accesos y Seguridad',
      href: '/automatizacion/control-accesos-seguridad',
      icon: Shield,
      imageSrc: '/placeholders/access-control.svg',
      description: 'Seguridad avanzada',
      features: ['Cámaras HD', 'Sensores inteligentes', 'Monitoreo 24/7']
    },
    {
      title: 'Telefonía IP y Videoconferencia',
      href: '/automatizacion/telefonia-ip-videoconferencia',
      icon: Phone,
      imageSrc: '/placeholders/ip-telephony.svg',
      description: 'Comunicación profesional',
      features: ['Llamadas HD', 'Videoconferencias', 'Integración empresarial']
    },
    {
      title: 'Video',
      href: '/automatizacion/video',
      icon: Video,
      imageSrc: '/placeholders/video.svg',
      description: 'Entretenimiento distribuido',
      features: ['Cine en casa', 'Múltiples pantallas', 'Control centralizado']
    },
    {
      title: 'Cableado Estructurado',
      href: '/automatizacion/cableado-estructurado',
      icon: Cable,
      imageSrc: '/placeholders/structured-cabling.svg',
      description: 'Infraestructura sólida',
      features: ['Redes robustas', 'Escalabilidad', 'Mantenimiento fácil']
    },
    {
      title: 'Audio Profesional',
      href: '/automatizacion/audio-profesional',
      icon: Mic,
      imageSrc: '/placeholders/professional-audio.svg',
      description: 'Experiencias inmersivas',
      features: ['Auditorios', 'Estadios', 'Eventos corporativos']
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Ahorro Energético',
      text: 'Reduce hasta un 45% tu consumo energético con sistemas inteligentes de control automático.'
    },
    {
      icon: Shield,
      title: 'Seguridad',
      text: 'Protección 24/7 con cámaras HD, sensores inteligentes y monitoreo en tiempo real.'
    },
    {
      icon: Smartphone,
      title: 'Comodidad',
      text: 'Control total desde tu dispositivo móvil con una interfaz intuitiva y fácil de usar.'
    },
    {
      icon: Cable,
      title: 'Conectividad Confiable',
      text: 'Infraestructura robusta que garantiza conexión estable y rendimiento óptimo.'
    },
    {
      icon: Leaf,
      title: 'Eficiencia',
      text: 'Automatización inteligente que optimiza recursos y mejora la productividad.'
    },
    {
      icon: Users,
      title: 'Valor Agregado',
      text: 'Incrementa el valor de tu propiedad con tecnología de vanguardia integrada.'
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <HeroMinimal
        title="SOLUCIONES INTELIGENTES"
        subtitle="Conectamos tu hogar y empresa con el futuro"
        ctas={[
          { label: 'Conoce nuestras soluciones', href: '/automatizacion', primary: true },
          { label: 'Cotiza ahora', href: '/contacto', primary: false }
        ]}
        imageSrc="/placeholders/hero-placeholder.svg"
        dark={true}
      />

      {/* Nosotros Section */}
      <section className="py-20 bg-white">
        <div className="container-zonit">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-light text-primary tracking-wide">
                Nosotros
              </h2>
              <p className="text-lg text-black leading-relaxed">
                Somos especialistas en integración domótica y automatización inteligente. 
                Nuestro enfoque se centra en crear soluciones que mejoren el confort, 
                la seguridad y la eficiencia energética de tu espacio.
              </p>
              <p className="text-lg text-black leading-relaxed">
                Con años de experiencia en el sector, ofrecemos control centralizado 
                y sistemas que se adaptan a tu estilo de vida, proporcionando valor 
                agregado a tu propiedad.
              </p>
              <a 
                href="/nosotros" 
                className="inline-flex items-center text-black font-medium hover:text-accentBlue transition-colors duration-150"
              >
                Saber más
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="relative">
              <Image 
                src="/placeholders/automation-placeholder.svg" 
                alt="Equipo Zonit" 
                width={600}
                height={400}
                className="rounded-xl shadow-lg ring-1 ring-gray-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <BenefitsGrid items={benefits} columns={3} />

      {/* Servicios Section */}
      <section className="py-20 bg-white">
        <div className="container-zonit">
          <SectionTitle 
            title="Servicios" 
            subtitle="Soluciones inteligentes para tu espacio"
          />
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {automationServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                href={service.href}
                icon={service.icon}
                imageSrc={service.imageSrc}
                description={service.description}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Teaser Paneles Solares */}
      <section className="py-20 bg-secondary">
        <div className="container-zonit text-center">
          <h2 className="text-3xl md:text-4xl font-light text-textLight mb-8 tracking-wide">
            Paneles Solares
          </h2>
          <p className="text-lg text-accentLime mb-12 max-w-2xl mx-auto leading-relaxed">
            Descubre el poder de la energía solar. Sistemas fotovoltaicos que te permiten 
            ahorrar hasta 99% en tu recibo de CFE y recuperar tu inversión en 2-5 años.
          </p>
          <a 
            href="/paneles-solares" 
            className="btn-primary px-10 py-5 rounded-2xl text-lg font-medium transition-smooth inline-block"
          >
            Descúbrelo
          </a>
        </div>
      </section>

      {/* CTA Final */}
      <CTA
        title="¿Listo para la automatización?"
        text="Únete a más de 500 familias que ya disfrutan de la tecnología inteligente."
        primaryLabel="Cotiza ahora"
        primaryHref="/contacto"
        dark={true}
      />

      <Footer />
      <WhatsAppButton />
    </main>
  );
}