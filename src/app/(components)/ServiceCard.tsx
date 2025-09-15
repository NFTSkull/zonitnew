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
    <div className="card-zonit p-8 group hover:scale-105 transition-transform duration-150">
      {/* Imagen */}
      {imageSrc && (
        <div className="mb-6">
          <Image
            src={imageSrc}
            alt={title}
            width={400}
            height={250}
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
      )}
      
      {/* Contenido */}
      <div className="flex items-center mb-6">
        <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mr-6 group-hover:scale-105 transition-transform duration-150">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-medium tracking-wide" style={{color: '#d3d801'}}>
            {title}
          </h3>
          {description && (
            <p className="text-black font-light text-sm">
              {description}
            </p>
          )}
        </div>
      </div>
      
      {/* Características */}
      {features.length > 0 && (
        <div className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-black">
              <div className="w-2 h-2 bg-zonit-accent-blue rounded-full mr-3"></div>
              <span className="font-light">{feature}</span>
            </div>
          ))}
        </div>
      )}
      
      {/* Enlace */}
      <div className="flex justify-between items-center">
        <div className="text-sm text-black font-light">
          Ver detalle
        </div>
        <Link 
          href={href} 
          className="inline-flex items-center text-black font-medium hover:text-accentBlue transition-colors duration-150"
        >
          Ver más
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
