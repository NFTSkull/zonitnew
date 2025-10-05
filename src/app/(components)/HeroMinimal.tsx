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
    <section className="relative min-h-[85svh] sm:min-h-[80vh] bg-neutral-100 flex items-center">
      {/* Background Image optimizado */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="/placeholders/hero-section.png"
          alt="Hero background" 
          className="w-full h-full object-cover"
          sizes="100vw"
        />
      </div>
      
      {/* Overlay profesional con opacidad */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/50 to-black/60"></div>
      
      {/* Contenido centrado */}
      <div className="container-zonit relative z-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge superior */}
          <div className="inline-flex items-center px-8 py-4 bg-black/70 backdrop-blur-md rounded-full border border-white/80 mb-12">
            <span className="text-white text-sm font-semibold tracking-wider uppercase">
              Tecnología Inteligente
            </span>
          </div>
          
          {/* Título principal - Optimizado para móvil */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extralight text-white tracking-wide leading-tight mb-6 sm:mb-8 md:mb-10 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] px-4">
            {title}
          </h1>
          
          {/* Subtítulo - Optimizado para móvil */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-white leading-relaxed max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16 drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)] px-4">
            {subtitle}
          </p>
          
          {/* Botones CTA - Optimizados para móvil */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center px-4">
            {ctas.map((cta, index) => (
              <Link
                key={index}
                href={cta.href}
                className={`
                  px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 rounded-xl sm:rounded-2xl font-bold transition-all duration-500 text-center text-sm sm:text-base md:text-lg relative overflow-hidden group w-full sm:w-auto
                  ${cta.primary 
                    ? 'text-black hover:scale-105 hover:shadow-2xl transform hover:-translate-y-1' 
                    : 'border-2 border-white text-white hover:bg-white hover:text-primary hover:scale-105 hover:shadow-2xl transform hover:-translate-y-1'
                  }
                `}
                style={cta.primary ? { backgroundColor: '#d3d801' } : {}}
              >
                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative z-10">{cta.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
}
