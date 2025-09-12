import Header from '../(components)/Header';
import Footer from '../(components)/Footer';
import SectionTitle from '../(components)/SectionTitle';
import ServiceCard from '../(components)/ServiceCard';
import WhatsAppButton from '../(components)/WhatsAppButton';
import { 
  Lightbulb, 
  Volume2, 
  Shield, 
  Phone, 
  Video, 
  Cable, 
  Mic
} from 'lucide-react';

export const metadata = {
  title: 'Automatización - Zonit',
  description: 'Soluciones de automatización inteligente para hogares y empresas. Control de iluminación, audio distribuido, seguridad y más.',
};

export default function Automatizacion() {
  const automationServices = [
    {
      title: 'Control e Iluminación',
      href: '/automatizacion/control-iluminacion',
      icon: Lightbulb,
      imageSrc: '/placeholders/control-lighting.jpg',
      description: 'Sistemas inteligentes de iluminación',
      features: ['Control automático', 'Ahorro energético', 'Escenas personalizadas', 'Detección de presencia']
    },
    {
      title: 'Audio Distribuido',
      href: '/automatizacion/audio-distribuido',
      icon: Volume2,
      imageSrc: '/placeholders/audio-distributed.jpg',
      description: 'Sonido distribuido en múltiples zonas',
      features: ['Múltiples zonas', 'Control independiente', 'Alta calidad', 'Sincronización']
    },
    {
      title: 'Control de Accesos y Seguridad',
      href: '/automatizacion/control-accesos-seguridad',
      icon: Shield,
      imageSrc: '/placeholders/access-control.jpg',
      description: 'Sistemas de seguridad avanzados',
      features: ['Cámaras HD', 'Sensores inteligentes', 'Monitoreo 24/7', 'Alertas instantáneas']
    },
    {
      title: 'Telefonía IP y Videoconferencia',
      href: '/automatizacion/telefonia-ip-videoconferencia',
      icon: Phone,
      imageSrc: '/placeholders/ip-telephony.jpg',
      description: 'Comunicación empresarial profesional',
      features: ['Llamadas HD', 'Videoconferencias', 'Integración empresarial', 'Escalabilidad']
    },
    {
      title: 'Video',
      href: '/automatizacion/video',
      icon: Video,
      imageSrc: '/placeholders/video.jpg',
      description: 'Entretenimiento distribuido',
      features: ['Cine en casa', 'Múltiples pantallas', 'Control centralizado', 'Alta definición']
    },
    {
      title: 'Cableado Estructurado',
      href: '/automatizacion/cableado-estructurado',
      icon: Cable,
      imageSrc: '/placeholders/structured-cabling.jpg',
      description: 'Infraestructura de red robusta',
      features: ['Redes robustas', 'Escalabilidad', 'Mantenimiento fácil', 'Alta velocidad']
    },
    {
      title: 'Audio Profesional',
      href: '/automatizacion/audio-profesional',
      icon: Mic,
      imageSrc: '/placeholders/professional-audio.jpg',
      description: 'Experiencias de audio inmersivas',
      features: ['Auditorios', 'Estadios', 'Eventos corporativos', 'Calidad profesional']
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary py-24">
        <div className="container-zonit text-center">
          <h1 className="text-4xl md:text-5xl font-light text-textLight mb-8 tracking-wide">
            Automatización Inteligente
          </h1>
          <p className="text-lg text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transformamos espacios en entornos inteligentes donde la tecnología se fusiona 
            con la elegancia para crear experiencias únicas.
          </p>
          <a 
            href="/contacto" 
            className="btn-primary px-10 py-5 rounded-2xl text-lg font-medium transition-smooth inline-block"
          >
            Solicitar cotización
          </a>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container-zonit">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light text-textDark mb-8 tracking-wide">
              Soluciones que se adaptan a tu estilo de vida
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Nuestros sistemas de automatización están diseñados para mejorar la eficiencia, 
              seguridad y comodidad de tu hogar o empresa. Cada solución se personaliza 
              según tus necesidades específicas.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Desde el control de iluminación hasta sistemas de audio profesional, 
              ofrecemos tecnología de vanguardia que se integra perfectamente con tu espacio.
            </p>
          </div>
        </div>
      </section>

      {/* Servicios Grid */}
      <section className="py-20 bg-bgLight">
        <div className="container-zonit">
          <SectionTitle 
            title="Nuestros Servicios" 
            subtitle="Descubre todas las posibilidades de la automatización inteligente"
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

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-zonit text-center">
          <h2 className="text-3xl md:text-4xl font-light text-textDark mb-8 tracking-wide">
            ¿Listo para automatizar tu espacio?
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Contáctanos para una consulta gratuita y descubre cómo podemos 
            transformar tu hogar o empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="/contacto" 
              className="btn-primary px-10 py-5 rounded-2xl text-lg font-medium transition-smooth"
            >
              Solicitar cotización
            </a>
            <a 
              href="/proyectos" 
              className="btn-secondary px-10 py-5 rounded-2xl text-lg font-medium transition-smooth"
            >
              Ver proyectos
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
