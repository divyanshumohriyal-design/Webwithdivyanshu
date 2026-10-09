import React from 'react';

/**
 * SoftGreenGlowBackground
 * Recreates the 21st.dev "Soft Green Glow" aesthetic:
 * - Very light mint-green and pale-white color palette (#FAFCFA / #FFFFFF)
 * - Soft, luminous diffused mint green glow fields blending smoothly into white
 * - Zero banding, no harsh edges, no geometric dot patterns or distractions
 * - Zero orange or yellow tones, no strong neon colors
 * - Covers full viewport and scroll depth with 100% lightweight static CSS
 */
export const HoneyEmberBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none bg-[#FAFCFA]"
    >
      {/* Primary Luminous Top Mint Glow (Hero & Navigation) */}
      <div className="absolute -top-[15%] left-[20%] w-[850px] h-[600px] rounded-full bg-[#BBF7D0]/38 blur-[160px]" />

      {/* Mid-Right Soft Mint Glow Field (Services & Portfolio) */}
      <div className="absolute top-[28%] -right-[12%] w-[750px] h-[700px] rounded-full bg-[#A7F3D0]/30 blur-[175px]" />

      {/* Mid-Left Diffused Mint Ambient (About & Process) */}
      <div className="absolute top-[55%] -left-[14%] w-[700px] h-[650px] rounded-full bg-[#86EFAC]/24 blur-[165px]" />

      {/* Lower Center-Right Luminous Mint Glow (Reviews, FAQ, Contact & Footer) */}
      <div className="absolute bottom-[-5%] right-[15%] w-[800px] h-[600px] rounded-full bg-[#BBF7D0]/35 blur-[170px]" />

      {/* Gentle Bottom-Left Supporting Wash */}
      <div className="absolute bottom-[18%] -left-[8%] w-[550px] h-[550px] rounded-full bg-[#D1FAE5]/40 blur-[150px]" />

      {/* Layered smooth radial color washes for seamless blending without banding */}
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background: `
            radial-gradient(ellipse 70% 45% at 50% 0%, rgba(187, 247, 208, 0.45) 0%, rgba(240, 253, 244, 0.25) 45%, transparent 75%),
            radial-gradient(circle 800px at 90% 40%, rgba(167, 243, 208, 0.28) 0%, transparent 65%),
            radial-gradient(circle 750px at 10% 70%, rgba(187, 247, 208, 0.25) 0%, transparent 65%),
            radial-gradient(ellipse 80% 50% at 50% 100%, rgba(187, 247, 208, 0.4) 0%, rgba(240, 253, 244, 0.2) 45%, transparent 75%)
          `,
        }}
      />

      {/* Pale-white smooth ambient vignette to ensure soft fade into viewport edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAFCFA]/40 via-transparent to-[#FAFCFA]/60" />
    </div>
  );
};
