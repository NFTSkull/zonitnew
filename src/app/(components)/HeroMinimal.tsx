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
    <section className={`${bgClass} py-24 relative overflow-hidden`}>
      <div className="container-zonit">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido */}
          <div className={`${textClass} space-y-8`}>
            <h1 className="text-4xl md:text-5xl font-light tracking-wide leading-tight">
              {title}
            </h1>
            
            <p className="text-lg md:text-xl leading-relaxed opacity-90">
              {subtitle}
            </p>
            
            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-4">
              {ctas.map((cta, index) => (
                <Link
                  key={index}
                  href={cta.href}
                  className={`
                    px-8 py-4 rounded-2xl font-medium transition-smooth text-center
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
            <div className="relative">
              <Image
                src={imageSrc}
                alt={title}
                width={600}
                height={400}
                className="rounded-xl shadow-lg ring-1 ring-gray-200"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
