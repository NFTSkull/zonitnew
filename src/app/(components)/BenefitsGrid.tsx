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

      // Colores directos usando la paleta de la página web
      const getIconColor = (title: string) => {
        switch (title) {
          case 'Ahorro Energético':
            return '#1e1d37';
          case 'Seguridad':
            return '#02383d';
          case 'Comodidad':
            return '#74acd8';
          case 'Conectividad Confiable':
            return '#d3d801';
          case 'Eficiencia':
            return '#1e1d37';
          case 'Valor Agregado':
            return '#02383d';
          default:
            return '#1e1d37';
        }
      };

      const getBackgroundColor = (title: string) => {
        switch (title) {
          case 'Ahorro Energético':
            return { backgroundColor: '#1e1d3710', borderColor: '#1e1d3730' };
          case 'Seguridad':
            return { backgroundColor: '#02383d10', borderColor: '#02383d30' };
          case 'Comodidad':
            return { backgroundColor: '#74acd810', borderColor: '#74acd830' };
          case 'Conectividad Confiable':
            return { backgroundColor: '#d3d80110', borderColor: '#d3d80130' };
          case 'Eficiencia':
            return { backgroundColor: '#1e1d3710', borderColor: '#1e1d3730' };
          case 'Valor Agregado':
            return { backgroundColor: '#02383d10', borderColor: '#02383d30' };
          default:
            return { backgroundColor: '#1e1d3710', borderColor: '#1e1d3730' };
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
                <div 
                  className="w-16 h-16 border rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-150"
                  style={getBackgroundColor(item.title)}
                >
                  <Icon className="w-7 h-7" style={{ color: getIconColor(item.title) }} />
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
