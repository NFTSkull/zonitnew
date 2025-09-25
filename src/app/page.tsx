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
  Smartphone,
  Battery,
  Camera,
  Wifi,
  TrendingUp,
  Home as HomeIcon
} from 'lucide-react';

export default function Home() {
  const automationServices = [
    {
      title: 'Control e Iluminación',
      href: '/automatizacion/control-iluminacion',
      icon: Lightbulb,
      imageSrc: '/placeholders/control-lighting.png',
      description: 'Sistemas inteligentes',
      features: ['Control automático', 'Ahorro energético', 'Escenas personalizadas']
    },
    {
      title: 'Audio Distribuido',
      href: '/automatizacion/audio-distribuido',
      icon: Volume2,
      imageSrc: '/placeholders/audio-distributed.png',
      description: 'Sonido en toda la casa',
      features: ['Múltiples zonas', 'Control independiente', 'Alta calidad']
    },
    {
      title: 'Control de Accesos y Seguridad',
      href: '/automatizacion/control-accesos-seguridad',
      icon: Shield,
      imageSrc: '/placeholders/access-control.png',
      description: 'Seguridad avanzada',
      features: ['Cámaras HD', 'Sensores inteligentes', 'Monitoreo 24/7']
    },
    {
      title: 'Telefonía IP y Videoconferencia',
      href: '/automatizacion/telefonia-ip-videoconferencia',
      icon: Phone,
      imageSrc: '/placeholders/ip-telephony.png',
      description: 'Comunicación profesional',
      features: ['Llamadas HD', 'Videoconferencias', 'Integración empresarial']
    },
    {
      title: 'Video',
      href: '/automatizacion/video',
      icon: Video,
      imageSrc: '/placeholders/video.png',
      description: 'Entretenimiento distribuido',
      features: ['Cine en casa', 'Múltiples pantallas', 'Control centralizado']
    },
    {
      title: 'Cableado Estructurado',
      href: '/automatizacion/cableado-estructurado',
      icon: Cable,
      imageSrc: '/placeholders/structured-cabling.png',
      description: 'Infraestructura sólida',
      features: ['Redes robustas', 'Escalabilidad', 'Mantenimiento fácil']
    },
    {
      title: 'Audio Profesional',
      href: '/automatizacion/audio-profesional',
      icon: Mic,
      imageSrc: '/placeholders/professional-audio.png',
      description: 'Experiencias inmersivas',
      features: ['Auditorios', 'Estadios', 'Eventos corporativos']
    }
  ];

  const benefits = [
    {
      icon: Battery,
      title: 'Ahorro Energético',
      text: 'Reduce hasta un 45% tu consumo energético con sistemas inteligentes de control automático.'
    },
    {
      icon: Camera,
      title: 'Seguridad',
      text: 'Protección 24/7 con cámaras HD, sensores inteligentes y monitoreo en tiempo real.'
    },
    {
      icon: Smartphone,
      title: 'Comodidad',
      text: 'Control total desde tu dispositivo móvil con una interfaz intuitiva y fácil de usar.'
    },
    {
      icon: Wifi,
      title: 'Conectividad Confiable',
      text: 'Infraestructura robusta que garantiza conexión estable y rendimiento óptimo.'
    },
    {
      icon: TrendingUp,
      title: 'Eficiencia',
      text: 'Automatización inteligente que optimiza recursos y mejora la productividad.'
    },
    {
      icon: HomeIcon,
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
        imageSrc="/placeholders/hero-placeholder.png"
        dark={true}
      />

      {/* Nosotros Section */}
      <section className="py-20 bg-white">
        <div className="container-zonit">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-light tracking-wide" style={{color: '#74acd8'}}>
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
                src="/placeholders/automation-placeholder.png" 
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

      {/* Servicios Section - Masterpiece */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accentBlue rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-accentBlue/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-zonit relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block relative group">
              <h2 className="text-5xl md:text-6xl font-light tracking-wide mb-6" style={{color: '#74acd8'}}>
                Servicios
              </h2>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary via-accentBlue to-primary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></div>
            </div>
            <p className="text-xl text-black max-w-2xl mx-auto leading-relaxed font-light">
              Soluciones inteligentes para tu espacio
            </p>
          </div>
          
          {/* Innovative Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[280px] lg:auto-rows-[320px]">
            {/* Featured Service - Large Card */}
            <div className="lg:col-span-2 lg:row-span-2 group cursor-pointer">
              <a href={automationServices[0].href} className="block h-full">
                <div className="h-full bg-gradient-to-br from-white/80 via-gray-50/70 to-white/80 rounded-3xl p-8 border border-gray-100/60 shadow-lg hover:shadow-2xl transition-all duration-700 ease-out hover:-translate-y-2 hover:scale-[1.02] relative overflow-hidden group-hover:border-primary/20">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-35 group-hover:opacity-45 transition-opacity duration-700">
                  <img 
                    src={automationServices[0].imageSrc} 
                    alt={automationServices[0].title}
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      {(() => {
                        const IconComponent = automationServices[0].icon;
                        return <IconComponent className="w-8 h-8 text-white" />;
                      })()}
                    </div>
                    <h3 className="text-2xl font-medium text-black mb-3 group-hover:text-primary transition-colors duration-300 drop-shadow-sm">
                      {automationServices[0].title}
                    </h3>
                    <p className="text-lg text-black mb-4 font-light drop-shadow-sm">
                      {automationServices[0].description}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    {automationServices[0].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500" style={{transitionDelay: `${idx * 100}ms`}}>
                        <div className="w-2 h-2 bg-accentBlue rounded-full"></div>
                        <span className="text-black text-sm font-medium drop-shadow-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="absolute bottom-6 right-6 w-12 h-12 bg-accentBlue/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <svg className="w-6 h-6 text-accentBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
              </a>
            </div>
            
            {/* Regular Services - Smaller Cards */}
            {automationServices.slice(1, 7).map((service, index) => (
              <div key={index} className="group cursor-pointer">
                <a href={service.href} className="block h-full">
                  <div className="h-full bg-white/80 rounded-2xl p-6 border border-gray-100/60 shadow-md hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.03] relative overflow-hidden group-hover:border-primary/20">
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-30 group-hover:opacity-40 transition-opacity duration-500">
                    <img 
                      src={service.imageSrc} 
                      alt={service.title}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-400">
                        {(() => {
                          const IconComponent = service.icon;
                          return <IconComponent className="w-6 h-6 text-white" />;
                        })()}
                      </div>
                      <h4 className="text-lg font-medium text-black mb-2 group-hover:text-primary transition-colors duration-300 drop-shadow-sm">
                        {service.title}
                      </h4>
                      <p className="text-black text-sm font-light mb-3 drop-shadow-sm">
                        {service.description}
                      </p>
                    </div>
                    
                    <div className="space-y-1">
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-400" style={{transitionDelay: `${idx * 80}ms`}}>
                          <div className="w-1.5 h-1.5 bg-accentBlue rounded-full"></div>
                          <span className="text-black text-xs font-medium drop-shadow-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="absolute bottom-4 right-4 w-8 h-8 bg-accentBlue/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                      <svg className="w-4 h-4 text-accentBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
                </a>
              </div>
            ))}
          </div>
          
          {/* Floating Action Elements */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg border border-gray-100/60">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-accentBlue rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
              <span className="text-black font-medium">Explora todas nuestras soluciones</span>
              <svg className="w-5 h-5 text-accentBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Teaser Paneles Solares */}
      <section className="py-20" style={{ backgroundColor: '#2d5a3d' }}>
        <div className="container-zonit">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8 tracking-wide">
                Paneles Solares
              </h2>
              <p className="text-lg text-green-200 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
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
            <div className="relative order-first lg:order-last">
              <Image 
                src="/placeholders/solar-placeholder.png" 
                alt="Paneles Solares Zonit" 
                width={600}
                height={400}
                className="rounded-xl shadow-lg ring-1 ring-gray-200/50 w-full h-auto"
              />
            </div>
          </div>
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