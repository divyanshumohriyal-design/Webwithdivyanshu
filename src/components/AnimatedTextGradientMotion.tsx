import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export interface AnimatedTextGradientMotionProps {
  text?: string;
  className?: string;
  colors?: string[];
  duration?: number;
}

export const AnimatedTextGradientMotion: React.FC<AnimatedTextGradientMotionProps> = ({
  text = 'Websites for Your Business',
  className = '',
  colors = ['#171717', '#F26522', '#262626', '#F26522', '#171717'],
  duration = 2.6, // Requested: approximately 2-3 seconds
}) => {
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

  // Accessible fallback for users with prefers-reduced-motion
  if (isReducedMotion) {
    return (
      <span
        className={`inline-block font-semibold tracking-tight ${className}`}
        style={{
          backgroundImage: `linear-gradient(135deg, ${colors[0]} 40%, ${colors[1]} 100%)`,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: colors[0],
        }}
      >
        {text}
      </span>
    );
  }

  return (
    <motion.span
      className={`inline-block select-none font-semibold tracking-tight will-change-[background-position] ${className}`}
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
      {text}
    </motion.span>
  );
};
