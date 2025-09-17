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

      // Colores contrastantes usando la paleta de la página web
      const getIconColor = (title: string) => {
        switch (title) {
          case 'Ahorro Energético':
            return 'text-primary';
          case 'Seguridad':
            return 'text-secondary';
          case 'Comodidad':
            return 'text-accentBlue';
          case 'Conectividad Confiable':
            return 'text-accentLime';
          case 'Eficiencia':
            return 'text-primary';
          case 'Valor Agregado':
            return 'text-secondary';
          default:
            return 'text-primary';
        }
      };

      const getBackgroundColor = (title: string) => {
        switch (title) {
          case 'Ahorro Energético':
            return 'bg-primary/10 border-primary/30';
          case 'Seguridad':
            return 'bg-secondary/10 border-secondary/30';
          case 'Comodidad':
            return 'bg-accentBlue/10 border-accentBlue/30';
          case 'Conectividad Confiable':
            return 'bg-accentLime/10 border-accentLime/30';
          case 'Eficiencia':
            return 'bg-primary/10 border-primary/30';
          case 'Valor Agregado':
            return 'bg-secondary/10 border-secondary/30';
          default:
            return 'bg-primary/10 border-primary/30';
        }
      };

  return (
    <section className="py-20 bg-bgLight">
      <div className="container-zonit">
        <div className={`grid md:grid-cols-2 ${gridCols[columns]} gap-8`}>
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="card-zonit p-8 text-center group hover:scale-105 transition-transform duration-150">
                <div className={`w-16 h-16 ${getBackgroundColor(item.title)} border rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-150`}>
                  <Icon className={`w-7 h-7 ${getIconColor(item.title)}`} />
                </div>
                <h3 className="text-xl font-medium mb-4 tracking-wide" style={{color: '#74acd8'}}>
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
