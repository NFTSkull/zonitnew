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
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay con gradiente más sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/50"></div>
      
      {/* Contenido centrado con animaciones */}
      <div className="container-zonit relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge superior con animación */}
          <div className="inline-flex items-center px-8 py-4 bg-white/15 backdrop-blur-md rounded-full border border-white/30 mb-12 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
            <span className="text-white text-sm font-semibold tracking-wider uppercase">
              Tecnología Inteligente
            </span>
          </div>
          
          {/* Título principal con animación escalonada */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extralight text-white tracking-wide leading-tight mb-10 opacity-0 animate-[fadeInUp_1s_ease-out_0.4s_forwards]">
            {title}
          </h1>
          
          {/* Subtítulo con animación */}
          <p className="text-2xl md:text-3xl lg:text-4xl text-white/95 leading-relaxed max-w-4xl mx-auto mb-16 opacity-0 animate-[fadeInUp_1.2s_ease-out_0.6s_forwards]">
            {subtitle}
          </p>
          
          {/* Botones CTA con animación */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center opacity-0 animate-[fadeInUp_1.4s_ease-out_0.8s_forwards]">
            {ctas.map((cta, index) => (
              <Link
                key={index}
                href={cta.href}
                className={`
                  px-12 py-6 rounded-2xl font-bold transition-all duration-500 text-center text-lg relative overflow-hidden group
                  ${cta.primary 
                    ? 'bg-white text-primary hover:bg-white/95 hover:scale-105 hover:shadow-2xl transform hover:-translate-y-1' 
                    : 'border-2 border-white text-white hover:bg-white hover:text-primary hover:scale-105 hover:shadow-2xl transform hover:-translate-y-1'
                  }
                `}
              >
                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative z-10">{cta.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      {/* Efecto de partículas mejorado */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-white/25 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-white/35 rounded-full animate-ping delay-500"></div>
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-white/40 rounded-full animate-ping delay-750"></div>
        <div className="absolute bottom-1/2 right-1/6 w-1.5 h-1.5 bg-white/30 rounded-full animate-pulse delay-1250"></div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
