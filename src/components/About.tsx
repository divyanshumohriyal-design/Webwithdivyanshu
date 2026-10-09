import React from 'react';
import { Logo } from './Logo';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative border-t border-[#EBEBEB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Official Logo Asset Presentation (No fake portraits) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#737373] mb-5">
              03 · About WebWithDivyanshu
            </div>

            <div className="p-3 bg-[#070A12] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-[#E5E5E5] mb-6">
              <Logo size={130} className="rounded-xl" />
            </div>

            <div className="space-y-3 text-xs text-[#525252] max-w-xs w-full">
              <div className="flex justify-between py-2 border-b border-[#EBEBEB]">
                <span className="text-[#737373]">Founder</span>
                <span className="font-semibold text-[#171717]">Divyanshu</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#EBEBEB]">
                <span className="text-[#737373]">Education</span>
                <span className="font-semibold text-[#171717]">B.Tech CSE (3rd Year)</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-[#737373]">Location</span>
                <span className="font-medium text-[#F26522]">India · Worldwide Reach</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#737373] mb-3">
              About WebWithDivyanshu
            </div>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#171717] leading-[1.12] mb-8 max-w-2xl">
              Thoughtful websites for growing businesses.
            </h2>

            <p className="text-lg sm:text-xl font-medium text-[#171717] mb-6 leading-relaxed">
              I'm Divyanshu, a B.Tech CSE 3rd-year student and the person behind WebWithDivyanshu.
            </p>

            <div className="space-y-5 text-base sm:text-lg text-[#525252] font-normal leading-relaxed max-w-2xl">
              <p>
                I design and build modern one-page websites for small businesses that want a professional online presence without unnecessary complexity.
              </p>
              <p>
                My workflow is AI-assisted, but the focus remains on thoughtful design, usability, and the needs of each business.
              </p>
              <div className="pt-4 border-t border-[#EBEBEB]">
                <p className="text-sm text-[#171717] font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F26522]" />
                  <span>Working with businesses in India and worldwide.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
