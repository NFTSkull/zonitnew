interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({ title, subtitle, centered = true }: SectionTitleProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-16`}>
      <h2 className="text-3xl md:text-4xl font-light text-primary mb-6 tracking-wide">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-black max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
