'use client';

import { ReactNode } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-left' | 'slide-right' | 'scale-up';
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

export default function ScrollReveal({
  children,
  className = '',
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
}: ScrollRevealProps) {
  const { elementRef, isVisible } = useScrollReveal({
    threshold,
    triggerOnce,
    delay,
  });

  const getAnimationClass = () => {
    const baseClass = animation === 'fade-in' ? 'fade-in-on-scroll' :
                     animation === 'slide-left' ? 'slide-in-left' :
                     animation === 'slide-right' ? 'slide-in-right' :
                     'fade-in-on-scroll';
    
    return isVisible ? `${baseClass} visible` : baseClass;
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
}

// Componente para efectos de hover elegantes
interface HoverEffectProps {
  children: ReactNode;
  className?: string;
  effect?: 'lift' | 'scale' | 'glow' | 'border';
}

export function HoverEffect({
  children,
  className = '',
  effect = 'lift',
}: HoverEffectProps) {
  const getEffectClass = () => {
    switch (effect) {
      case 'lift':
        return 'hover-lift';
      case 'scale':
        return 'hover-scale-subtle';
      case 'glow':
        return 'hover-glow';
      case 'border':
        return 'border-animated';
      default:
        return 'hover-lift';
    }
  };

  return (
    <div className={`${getEffectClass()} transition-elegant ${className}`}>
      {children}
    </div>
  );
}

// Componente para texto con efecto de revelado
interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
}

export function TextReveal({ children, className = '', delay = 0 }: TextRevealProps) {
  const { elementRef, isVisible } = useScrollReveal({
    threshold: 0.1,
    delay,
  });

  return (
    <div
      ref={elementRef}
      className={`text-reveal ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children.split('').map((char, index) => (
        <span
          key={index}
          style={{
            transitionDelay: `${index * 50}ms`,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
}

