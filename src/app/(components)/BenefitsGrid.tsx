import { LucideIcon } from 'lucide-react';

interface BenefitItem {
  icon: LucideIcon;
  title: string;
  text: string;
}

interface BenefitsGridProps {
  items: BenefitItem[];
  columns?: 2 | 3 | 4;
}

export default function BenefitsGrid({ items, columns = 3 }: BenefitsGridProps) {
  const gridCols = {
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4'
  };

      // Colores unificados para todos los íconos
      const getIconColor = () => {
        return '#74acd8'; // Color azul claro unificado
      };

      const getBackgroundColor = () => {
        return { backgroundColor: '#74acd810', borderColor: '#74acd830' };
      };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-bgLight">
      <div className="container-zonit">
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${gridCols[columns]} gap-6 sm:gap-8`}>
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="card-zonit p-6 sm:p-8 text-center group hover:scale-105 transition-transform duration-150">
                <div 
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-150"
                  style={getBackgroundColor()}
                >
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: getIconColor() }} />
                </div>
                <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4 tracking-wide" className="text-textDark">
                  {item.title}
                </h3>
                <p className="text-black leading-relaxed font-light">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
