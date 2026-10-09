import React from 'react';

/**
 * EditorialMinimalBackground
 * A clean, light, architectural background aligned with the minimal editorial aesthetic.
 * Foundation:
 * - Crisp off-white / light neutral base (#F9F9F8)
 * - Ultra-subtle architectural lighting gradients
 * - Faint geometric dot grid for precision editorial structure
 * - 100% static, zero-runtime overhead
 */
export const HoneyEmberBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none bg-[#FAFAFA]"
    >
      {/* Subtle architectural ambient light washes */}
      <div className="absolute -top-[12%] left-[15%] w-[680px] h-[520px] rounded-full bg-[#E5E5E5]/40 blur-[130px]" />
      <div className="absolute top-[30%] -right-[8%] w-[580px] h-[580px] rounded-full bg-[#F26522]/5 blur-[160px]" />
      <div className="absolute top-[60%] -left-[10%] w-[540px] h-[540px] rounded-full bg-[#E5E5E5]/35 blur-[140px]" />
      <div className="absolute bottom-[0%] right-[20%] w-[620px] h-[480px] rounded-full bg-[#F26522]/4 blur-[160px]" />

      {/* Clean Faint Editorial Dot Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            'radial-gradient(rgba(23, 23, 23, 0.08) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Top and Bottom soft fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA]/40 via-transparent to-[#FAFAFA]/80" />
    </div>
  );
};
