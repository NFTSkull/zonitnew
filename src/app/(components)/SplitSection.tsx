
interface SplitSectionProps {
  title: string;
  text: string;
  imageSrc: string;
  reverse?: boolean;
  features?: string[];
}

export default function SplitSection({ 
  title, 
  text, 
  imageSrc, 
  reverse = false,
  features = []
}: SplitSectionProps) {
  const contentOrder = reverse ? 'lg:order-2' : 'lg:order-1';
  const imageOrder = reverse ? 'lg:order-1' : 'lg:order-2';

  return (
    <section className="py-20 bg-white">
      <div className="container-zonit">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido */}
          <div className={`${contentOrder} space-y-6`}>
            <h2 className="text-3xl md:text-4xl font-light text-textDark tracking-wide">
              {title}
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              {text}
            </p>
            
            {/* Características */}
            {features.length > 0 && (
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-accentLime rounded-full mr-4"></div>
                    <span className="text-gray-700 font-light">{feature}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Imagen */}
          <div className={`${imageOrder} relative`}>
            <img src={imageSrc}
              alt={title}
              width={600}
              height={400}
              className="rounded-xl shadow-lg ring-1 ring-gray-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
