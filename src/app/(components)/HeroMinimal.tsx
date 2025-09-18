import Link from 'next/link';

interface HeroMinimalProps {
  title: string;
  subtitle: string;
  ctas: Array<{
    label: string;
    href: string;
    primary?: boolean;
  }>;
  imageSrc?: string;
  dark?: boolean;
}

export default function HeroMinimal({ 
  title, 
  subtitle, 
  ctas, 
  imageSrc, 
  dark = false 
}: HeroMinimalProps) {
  return (
    <section 
      className="relative pt-32 pb-20 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center"
      style={{
        backgroundImage: `url('/placeholders/hero-section.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay oscuro para mejor legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      
      {/* Contenido centrado */}
      <div className="container-zonit relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge superior */}
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <span className="text-white/90 text-sm font-medium tracking-wide uppercase">
              Tecnología Inteligente
            </span>
          </div>
          
          {/* Título principal */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-wide leading-tight mb-8">
            {title}
          </h1>
          
          {/* Subtítulo */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-12">
            {subtitle}
          </p>
          
          {/* Información adicional */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-light text-white mb-2">15+</div>
              <div className="text-white/80 text-sm uppercase tracking-wide">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-white mb-2">500+</div>
              <div className="text-white/80 text-sm uppercase tracking-wide">Proyectos Completados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-white mb-2">24/7</div>
              <div className="text-white/80 text-sm uppercase tracking-wide">Soporte Técnico</div>
            </div>
          </div>
          
          {/* Botones CTA */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {ctas.map((cta, index) => (
              <Link
                key={index}
                href={cta.href}
                className={`
                  px-10 py-5 rounded-2xl font-semibold transition-all duration-300 text-center text-lg
                  ${cta.primary 
                    ? 'bg-white text-primary hover:bg-white/90 hover:scale-105 shadow-xl' 
                    : 'border-2 border-white text-white hover:bg-white hover:text-primary hover:scale-105'
                  }
                `}
              >
                {cta.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      {/* Efecto de partículas sutiles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white/35 rounded-full animate-ping delay-500"></div>
      </div>
    </section>
  );
}
