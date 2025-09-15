import Link from 'next/link';
import Image from 'next/image';

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
  const bgClass = dark ? 'bg-primary' : 'bg-bgLight';
  const textClass = dark ? 'text-textLight' : 'text-textDark';

  return (
    <section className={`${bgClass} pt-32 pb-20 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 relative overflow-hidden min-h-[80vh] flex items-center`}>
      <div className="container-zonit">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Contenido */}
          <div className={`${textClass} space-y-10`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide leading-tight">
              {title}
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed opacity-90 max-w-2xl">
              {subtitle}
            </p>
            
            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              {ctas.map((cta, index) => (
                <Link
                  key={index}
                  href={cta.href}
                  className={`
                    px-10 py-5 rounded-2xl font-medium transition-smooth text-center text-lg
                    ${cta.primary 
                      ? 'btn-primary' 
                      : dark 
                        ? 'border border-zonit-text-light text-textLight hover:bg-zonit-text-light hover:text-zonit-primary' 
                        : 'btn-secondary'
                    }
                  `}
                >
                  {cta.label}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Imagen */}
          {imageSrc && (
            <div className="relative order-first lg:order-last">
              <Image
                src={imageSrc}
                alt={title}
                width={700}
                height={500}
                className="rounded-2xl shadow-2xl ring-1 ring-gray-200/50 w-full h-auto"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
