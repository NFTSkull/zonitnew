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

  return (
    <section className="py-20 bg-bgLight">
      <div className="container-zonit">
        <div className={`grid md:grid-cols-2 ${gridCols[columns]} gap-8`}>
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="card-zonit p-8 text-center group hover:scale-105 transition-transform duration-150">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-150 shadow-lg">
                  <Icon className="w-10 h-10 text-white" />
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
