import React, { useState, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';

export interface RevealTextProps {
  text?: string;
  className?: string;
  overlayColor?: string;
  textColor?: string;
  letterDelay?: number;
  overlayDelay?: number;
  overlayDuration?: number;
  enableImageHover?: boolean;
}

// Curated high-reliability textures matching the small business portfolio themes:
// gym/fitness, modern clinics, creative studios, cafes, salons, modern storefronts
const LETTER_HOVER_IMAGES = [
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80', // W: Minimal abstract architectural wave
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=400&q=80', // E: Fitness / gym strength facility
  'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=400&q=80', // B: Clean modern clinic / dental
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=400&q=80', // S: Beauty & salon aesthetic sanctuary
  'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=400&q=80', // I: Artisanal cafe warm coffee culture
  'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=400&q=80', // T: Modern restaurant culinary craft
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80', // E: Contemporary architectural studio
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80', // S: Independent modern workspace
];

export const RevealText: React.FC<RevealTextProps> = ({
  text = 'WEBSITES',
  className = '',
  overlayColor = '#F26522',
  textColor = '#171717',
  letterDelay = 0.07, // Requested: 0.06 - 0.08s
  overlayDelay = 0.045, // Requested: 0.04 - 0.05s
  overlayDuration = 0.38, // Requested: 0.35 - 0.4s
  enableImageHover = true,
}) => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [canHover, setCanHover] = useState(false);

  // Detect prefers-reduced-motion and hover capability
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(motionQuery.matches);

    const hoverQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    setCanHover(hoverQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    if (motionQuery.addEventListener) {
      motionQuery.addEventListener('change', handleMotionChange);
      return () => motionQuery.removeEventListener('change', handleMotionChange);
    } else {
      motionQuery.addListener(handleMotionChange);
      return () => motionQuery.removeListener(handleMotionChange);
    }
  }, []);

  const letters = Array.from(text);

  // Staggered letter container
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: letterDelay,
        delayChildren: 0.12,
      },
    },
  };

  // Controlled, smooth spring letter entrance
  const letterVariants: Variants = {
    hidden: {
      y: '100%',
      opacity: 0,
      rotateX: 25,
    },
    visible: {
      y: '0%',
      opacity: 1,
      rotateX: 0,
      transition: {
        type: 'spring',
        damping: 18,
        stiffness: 140,
        mass: 0.9,
      },
    },
  };

  // Overlay sweep variant for each letter
  const getOverlayVariants = (index: number): Variants => ({
    hidden: {
      scaleY: 0,
      originY: 1,
    },
    visible: {
      scaleY: [0, 1, 1, 0],
      originY: [1, 1, 0, 0],
      transition: {
        duration: overlayDuration,
        delay: 0.12 + letters.length * letterDelay + index * overlayDelay,
        ease: [0.65, 0, 0.35, 1], // easeInOutCubic
      },
    },
  });

  // Accessible fallback for users with prefers-reduced-motion
  if (isReducedMotion) {
    return (
      <span
        className={`inline-block font-semibold tracking-tight ${className}`}
        style={{ color: textColor }}
      >
        {text}
      </span>
    );
  }

  return (
    <motion.span
      className={`relative inline-flex items-baseline select-none cursor-default font-semibold tracking-tight ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        verticalAlign: 'baseline',
      }}
    >
      {letters.map((char, index) => {
        const isHovered = canHover && enableImageHover && hoveredIndex === index;
        const hoverImage = LETTER_HOVER_IMAGES[index % LETTER_HOVER_IMAGES.length];

        return (
          <span
            key={`${char}-${index}`}
            className="relative inline-block overflow-hidden align-baseline"
            onMouseEnter={() => canHover && setHoveredIndex(index)}
            onMouseLeave={() => canHover && setHoveredIndex(null)}
            style={{
              paddingTop: '0.04em',
              paddingBottom: '0.04em',
            }}
          >
            {/* Letter with controlled spring reveal and image-fill hover */}
            <motion.span
              variants={letterVariants}
              className="inline-block transition-transform duration-200"
              style={{
                display: 'inline-block',
                transformOrigin: 'bottom center',
                transform: isHovered ? 'scale(1.05) translateY(-2px)' : 'none',
              }}
            >
              <span
                className="inline-block transition-all duration-300 leading-none"
                style={{
                  color: isHovered ? 'transparent' : textColor,
                  backgroundImage: isHovered
                    ? `url("${hoverImage}"), linear-gradient(135deg, ${overlayColor} 0%, ${textColor} 100%)`
                    : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundClip: isHovered ? 'text' : 'border-box',
                  WebkitBackgroundClip: isHovered ? 'text' : 'border-box',
                  WebkitTextFillColor: isHovered ? 'transparent' : textColor,
                  textShadow: isHovered ? '0 1px 4px rgba(0,0,0,0.15)' : 'none',
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            </motion.span>

            {/* Colored Text Overlay Sweep (Letter-by-Letter) */}
            <motion.span
              aria-hidden="true"
              variants={getOverlayVariants(index)}
              className="absolute inset-0 pointer-events-none rounded-xs"
              style={{
                backgroundColor: overlayColor,
                opacity: 0.95,
              }}
            />
          </span>
        );
      })}
    </motion.span>
  );
};
