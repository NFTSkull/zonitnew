import { LucideIcon } from 'lucide-react';

interface StepItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface StepsProps {
  items: StepItem[];
}

export default function Steps({ items }: StepsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container-zonit">
        <div className="grid lg:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-4">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-medium text-textDark mb-4 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
