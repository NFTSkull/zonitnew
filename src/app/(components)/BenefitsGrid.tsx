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

  // Colores específicos para cada tipo de ícono
  const getIconColor = (title: string) => {
    switch (title) {
      case 'Ahorro Energético':
        return 'text-green-500';
      case 'Seguridad':
        return 'text-red-500';
      case 'Comodidad':
        return 'text-blue-500';
      case 'Conectividad Confiable':
        return 'text-purple-500';
      case 'Eficiencia':
        return 'text-orange-500';
      case 'Valor Agregado':
        return 'text-indigo-500';
      default:
        return 'text-primary';
    }
  };

  const getBackgroundColor = (title: string) => {
    switch (title) {
      case 'Ahorro Energético':
        return 'bg-green-50 border-green-200';
      case 'Seguridad':
        return 'bg-red-50 border-red-200';
      case 'Comodidad':
        return 'bg-blue-50 border-blue-200';
      case 'Conectividad Confiable':
        return 'bg-purple-50 border-purple-200';
      case 'Eficiencia':
        return 'bg-orange-50 border-orange-200';
      case 'Valor Agregado':
        return 'bg-indigo-50 border-indigo-200';
      default:
        return 'bg-gray-50 border-gray-200';
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
                <div className={`w-20 h-20 ${getBackgroundColor(item.title)} border-2 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-150 shadow-lg`}>
                  <Icon className={`w-10 h-10 ${getIconColor(item.title)}`} />
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
