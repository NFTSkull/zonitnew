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
      {/* Overlay profesional con opacidad */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/50 to-black/60"></div>
      
      {/* Contenido centrado con animaciones */}
      <div className="container-zonit relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge superior con animación */}
          <div className="inline-flex items-center px-8 py-4 bg-black/70 backdrop-blur-md rounded-full border border-white/80 mb-12 animate-fade-in-up">
            <span className="text-white text-sm font-semibold tracking-wider uppercase">
              Tecnología Inteligente
            </span>
          </div>
          
          {/* Título principal con animación escalonada */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extralight text-white tracking-wide leading-tight mb-10 animate-fade-in-up-delay-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            {title}
          </h1>
          
          {/* Subtítulo con animación */}
          <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed max-w-4xl mx-auto mb-16 animate-fade-in-up-delay-2 drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]">
            {subtitle}
          </p>
          
          {/* Botones CTA con animación */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center animate-fade-in-up-delay-3">
            {ctas.map((cta, index) => (
              <Link
                key={index}
                href={cta.href}
                className={`
                  px-12 py-6 rounded-2xl font-bold transition-all duration-500 text-center text-lg relative overflow-hidden group
                  ${cta.primary 
                    ? 'bg-white text-black hover:bg-white/95 hover:scale-105 hover:shadow-2xl transform hover:-translate-y-1' 
                    : 'border-2 border-white text-white hover:bg-white hover:text-black hover:scale-105 hover:shadow-2xl transform hover:-translate-y-1'
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
      
    </section>
  );
}
