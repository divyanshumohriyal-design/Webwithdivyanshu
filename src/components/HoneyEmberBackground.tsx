import React from 'react';

/**
 * HoneyEmberBackground
 * A warm, light, minimal atmospheric background inspired by the Honey Ember concept.
 * Features:
 * - Soft warm ivory base (#FFFDF7)
 * - Heavily diffused ambient color fields in soft amber, golden warmth, peach and blush
 * - Fine warm-gray dot grid texture
 * - Completely STATIC: No cursor tracking, no canvas loops, highly performant
 */
export const HoneyEmberBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none bg-[#FFFDF7]"
    >
      {/* Soft Ambient Atmospheric Glow Fields (Heavily diffused and low-opacity) */}
      <div className="absolute -top-[15%] left-[20%] w-[650px] h-[550px] rounded-full bg-[#FBBF24]/10 blur-[140px]" />
      <div className="absolute top-[25%] -right-[10%] w-[600px] h-[600px] rounded-full bg-[#FB923C]/8 blur-[150px]" />
      <div className="absolute top-[50%] -left-[12%] w-[550px] h-[550px] rounded-full bg-[#F59E0B]/7 blur-[140px]" />
      <div className="absolute top-[75%] right-[15%] w-[600px] h-[500px] rounded-full bg-[#FECACA]/12 blur-[160px]" />
      <div className="absolute bottom-[2%] left-[30%] w-[500px] h-[450px] rounded-full bg-[#FBBF24]/8 blur-[140px]" />

      {/* Very Fine Warm-Gray Dot Matrix Texture */}
      <div
        className="absolute inset-0 opacity-75"
        style={{
          backgroundImage:
            'radial-gradient(rgba(60, 50, 40, 0.065) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Subtle top & bottom ambient vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FFFDF7]/15 to-[#FFFDF7]/40" />
    </div>
  );
};
