import React from 'react';

interface LogoProps {
  className?: string;
  size?: number | string;
  alt?: string;
}

/**
 * Official WebWithDivyanshu Logo component.
 * Preserves the exact original brand asset without altering colors, typography,
 * proportions, or background.
 */
export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 52,
  alt = 'WebWithDivyanshu - Simple Websites. Real Businesses.',
}) => {
  return (
    <img
      src="/logo.svg"
      alt={alt}
      width={typeof size === 'number' ? size : undefined}
      height={typeof size === 'number' ? size : undefined}
      style={{
        width: size,
        height: size,
        aspectRatio: '1 / 1',
        objectFit: 'contain',
      }}
      className={`shrink-0 rounded-xl select-none shadow-sm ${className}`}
      loading="eager"
    />
  );
};
