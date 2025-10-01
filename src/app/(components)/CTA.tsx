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
    <section className={`${bgClass} py-12 sm:py-16 md:py-20`}>
      <div className="container-zonit text-center">
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-light mb-6 sm:mb-8 tracking-wide px-4 ${textClass}`}>
          {title}
        </h2>
        
        <p className={`text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 ${dark ? 'text-gray-200' : 'text-gray-600'}`}>
          {text}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
          <Link 
            href={primaryHref} 
            className="btn-primary px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl text-base sm:text-lg font-medium transition-smooth w-full sm:w-auto"
          >
            {primaryLabel}
          </Link>
          
          {secondaryLabel && secondaryHref && (
            <Link 
              href={secondaryHref} 
              className={`
                px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl text-base sm:text-lg font-medium transition-smooth w-full sm:w-auto
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
