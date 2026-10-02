import React from 'react';
import { Logo } from './Logo';
import { ArrowUpRight, ArrowDown, MapPin, Sparkles } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Small Label */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F1E6]/80 border border-[#E8E2D5] text-[11px] font-mono uppercase tracking-[0.16em] text-[#6E6E73] mb-8 animate-in fade-in slide-in-from-bottom-2 duration-700">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          <span>WebWithDivyanshu · Independent Web Design</span>
        </div>

        {/* Main Headline */}
        <h1
          className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-[#1D1D1F] leading-[1.08] mb-6 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-3 duration-700 delay-100"
          style={{ textWrap: 'balance' }}
        >
          Websites that make small businesses look established.
        </h1>

        {/* Supporting Text */}
        <p className="text-lg sm:text-xl text-[#6E6E73] font-normal leading-relaxed max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          I design and build modern one-page websites for businesses that want a stronger and more professional online presence.
        </p>

        {/* Action Group */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-14 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300">
          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide text-white bg-[#1D1D1F] hover:bg-[#2C2C2E] active:scale-98 transition-all duration-150 shadow-sm group cursor-pointer"
          >
            <span>Let's Work Together</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-[#1D1D1F] bg-[#FAF6ED] hover:bg-[#F2ECE0] border border-[#E5DFD3] transition-all duration-150 active:scale-98"
          >
            <span>Explore Demo Websites</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#86868B]" />
          </a>
        </div>

        {/* Scope and Studio Note */}
        <div className="flex items-center justify-center gap-2 text-xs text-[#86868B] mb-16 animate-in fade-in duration-700 delay-400">
          <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
          <span className="font-medium text-[#48484A]">Based in India</span>
          <span className="text-[#C7C7CC]">·</span>
          <span>Working with businesses worldwide</span>
        </div>

        {/* Apple-style Minimal Studio Anchor Card */}
        <div className="max-w-md mx-auto p-4 sm:p-5 rounded-2xl bg-[#FFFDF7]/90 border border-[#E8E2D5] shadow-[0_8px_30px_rgba(40,30,20,0.04)] text-left flex items-center gap-4">
          <div className="p-2 bg-[#070A12] rounded-xl shrink-0 shadow-xs">
            <Logo size={56} className="rounded-lg" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-semibold text-[#1D1D1F]">
                WebWithDivyanshu
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/60">
                Studio
              </span>
            </div>
            <p className="text-xs text-[#6E6E73] truncate mt-0.5">
              Simple Websites. Real Businesses.
            </p>
            <p className="text-[11px] text-[#86868B] mt-1 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-amber-500" />
              <span>Modern One-Page Business Websites</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
