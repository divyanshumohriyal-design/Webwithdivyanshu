import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export interface AnimatedTextGradientMotionProps {
  text?: string;
  children?: React.ReactNode;
  className?: string;
  colors?: string[];
  duration?: number;
}

export const AnimatedTextGradientMotion: React.FC<AnimatedTextGradientMotionProps> = ({
  text,
  children,
  className = '',
  colors = ['#0D9488', '#0284C7', '#2563EB', '#0D9488'], // Smooth teal-to-blue continuous loop
  duration = 3.5, // Subtle, polished, and professional duration
}) => {
  const content = children ?? text ?? 'Demo Websites';
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  const gradientString = `linear-gradient(90deg, ${colors.join(', ')})`;

  // Accessible fallback for users with prefers-reduced-motion: static teal-to-blue gradient
  if (isReducedMotion) {
    return (
      <span
        className={`inline-block max-w-full ${className}`}
        style={{
          backgroundImage: `linear-gradient(135deg, ${colors[0]} 20%, ${colors[1]} 60%, ${colors[2]} 100%)`,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: colors[0],
        }}
      >
        {content}
      </span>
    );
  }

  // Automatic, continuous, non-hover-dependent animated teal-to-blue gradient
  return (
    <motion.span
      className={`inline-block max-w-full will-change-[background-position] ${className}`}
      style={{
        backgroundImage: gradientString,
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: colors[0], // Solid fallback if background-clip is unsupported
      }}
      animate={{
        backgroundPosition: ['0% 50%', '-200% 50%'],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {content}
    </motion.span>
  );
};
