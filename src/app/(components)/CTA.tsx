import Link from 'next/link';

interface CTAProps {
  title: string;
  text: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  dark?: boolean;
}

export default function CTA({ 
  title, 
  text, 
  primaryLabel, 
  primaryHref, 
  secondaryLabel,
  secondaryHref,
  dark = false 
}: CTAProps) {
  const bgClass = dark ? 'bg-primary' : 'bg-bgLight';
  const textClass = dark ? 'text-textLight' : 'text-textDark';

  return (
    <section className={`${bgClass} py-20`}>
      <div className="container-zonit text-center">
        <h2 className={`text-3xl md:text-4xl font-light mb-8 tracking-wide ${textClass}`}>
          {title}
        </h2>
        
        <p className={`text-lg mb-12 max-w-2xl mx-auto leading-relaxed ${dark ? 'text-gray-200' : 'text-gray-600'}`}>
          {text}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link 
            href={primaryHref} 
            className="btn-primary px-10 py-5 rounded-2xl text-lg font-medium transition-smooth"
          >
            {primaryLabel}
          </Link>
          
          {secondaryLabel && secondaryHref && (
            <Link 
              href={secondaryHref} 
              className={`
                px-10 py-5 rounded-2xl text-lg font-medium transition-smooth
                ${dark 
                  ? 'border border-zonit-text-light text-textLight hover:bg-zonit-text-light hover:text-zonit-primary' 
                  : 'btn-secondary'
                }
              `}
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
