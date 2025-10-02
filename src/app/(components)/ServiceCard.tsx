import Link from 'next/link';
import Image from 'next/image';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  href: string;
  icon: LucideIcon;
  imageSrc?: string;
  description?: string;
  features?: string[];
}

export default function ServiceCard({ 
  title, 
  href, 
  icon: Icon, 
  imageSrc, 
  description,
  features = []
}: ServiceCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl hover-lift transition-elegant overflow-hidden border border-gray-100/50 hover:border-primary/20 border-animated">
      {/* Imagen con overlay elegante */}
      {imageSrc && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            width={400}
            height={250}
            className="w-full h-full object-cover transition-elegant-slow group-hover:scale-105"
            loading="lazy"
            quality={75}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-elegant" />
          
          {/* Ícono flotante minimalista */}
          <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-bounce-subtle transform translate-y-2 group-hover:translate-y-0">
            <Icon className="w-5 h-5" style={{ color: '#1e1d37' }} />
          </div>
        </div>
      )}
      
      {/* Contenido elegante */}
      <div className="p-8">
        {/* Header con ícono */}
        <div className="flex items-start space-x-4 mb-6">
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 hover-scale-subtle transition-elegant border hover-glow"
            style={{ 
              background: 'linear-gradient(135deg, #1e1d3715, #02383d15)', 
              borderColor: '#1e1d3720' 
            }}
          >
            <Icon className="w-6 h-6" style={{ color: '#1e1d37' }} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-semibold mb-2 tracking-wide transition-elegant gradient-text-animated">
              {title}
            </h3>
            {description && (
              <p className="text-gray-600 text-sm font-medium leading-relaxed transition-elegant">
                {description}
              </p>
            )}
          </div>
        </div>
        
        {/* Características con diseño minimalista */}
        {features.length > 0 && (
          <div className="mb-8">
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 hover-scale-subtle transition-elegant">
                  <div className="w-1.5 h-1.5 bg-accentBlue rounded-full flex-shrink-0 pulse-subtle" />
                  <span className="text-gray-700 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Footer con enlaces elegantes */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="text-xs text-gray-500 font-medium tracking-wide uppercase transition-elegant">
            Ver detalles
          </div>
          <Link 
            href={href} 
            className="inline-flex items-center space-x-2 font-semibold text-sm transition-bounce-subtle hover-scale-subtle group/link"
            style={{ color: '#1e1d37' }}
          >
            <span>Explorar</span>
            <svg className="w-4 h-4 transition-elegant group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
      
      {/* Efecto de hover sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/2 group-hover:to-secondary/2 transition-elegant-slow pointer-events-none" />
    </div>
  );
}
