import React from 'react';
import { Logo } from './Logo';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Official Logo Asset Presentation (No fake portrait) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#86868B] mb-5">
              03 · About
            </div>

            <div className="p-3 bg-[#070A12] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-[#E8E2D5]/60 mb-6">
              <Logo size={140} className="rounded-xl" />
            </div>

            <div className="space-y-2.5 text-xs text-[#6E6E73] max-w-xs w-full">
              <div className="flex justify-between py-1.5 border-b border-[#EAE4D7]">
                <span className="text-[#86868B]">Founder</span>
                <span className="font-semibold text-[#1D1D1F]">Divyanshu</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#EAE4D7]">
                <span className="text-[#86868B]">Education</span>
                <span className="font-semibold text-[#1D1D1F]">B.Tech CSE (3rd Year)</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-[#86868B]">Markets</span>
                <span className="font-medium text-amber-800">India & Worldwide</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#1D1D1F] leading-[1.15] mb-8 max-w-2xl">
              About WebWithDivyanshu
            </h2>

            <p className="text-lg sm:text-xl font-medium text-[#1D1D1F] mb-6 leading-relaxed">
              I'm Divyanshu, a B.Tech CSE 3rd-year student and the person behind WebWithDivyanshu.
            </p>

            <div className="space-y-5 text-base sm:text-lg text-[#6E6E73] font-normal leading-relaxed max-w-2xl">
              <p>
                I design and build modern one-page websites for small businesses that want a professional online presence without unnecessary complexity.
              </p>
              <p>
                My workflow is AI-assisted, but the focus remains on thoughtful design, usability and the needs of the business.
              </p>
              <p className="pt-2 text-sm text-[#1D1D1F] font-medium">
                Working with businesses in India and worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
