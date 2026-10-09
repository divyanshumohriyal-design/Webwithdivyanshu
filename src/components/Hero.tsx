import React from 'react';
import { Logo } from './Logo';
import { ArrowUpRight, ArrowDown, MapPin, Globe } from 'lucide-react';
import { RevealText } from './RevealText';
import { AnimatedTextGradientMotion } from './AnimatedTextGradientMotion';

interface HeroProps {
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const whatsappUrl = `https://wa.me/917579429886?text=${encodeURIComponent(
    "Hi Divyanshu, I came across WebWithDivyanshu and I'm interested in getting a website for my business."
  )}`;

  return (
    <section className="relative pt-32 sm:pt-40 md:pt-48 pb-20 md:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Small Label with Animated Gradient Text */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 px-4 py-1.5 rounded-full bg-white border border-[#E5E5E5] text-[11px] sm:text-xs font-mono uppercase tracking-[0.16em] text-[#525252] shadow-xs mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F26522] shrink-0" />
          <AnimatedTextGradientMotion
            text="Websites for Your Business"
            className="font-semibold"
          />
          <span className="text-neutral-300 hidden sm:inline-block">·</span>
          <span className="hidden sm:inline-block">Independent Web Design</span>
        </div>

        {/* Large Editorial Headline */}
        <h1
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[78px] font-medium tracking-tight text-[#171717] leading-[1.08] mb-7 max-w-4xl mx-auto"
          style={{ textWrap: 'balance' }}
        >
          <RevealText text="WEBSITES" overlayColor="#F26522" textColor="#171717" /> that make Cafes, Salons, Gyms, and Businesses look established.
        </h1>

        {/* Supporting Editorial Paragraph */}
        <p className="text-base sm:text-lg md:text-xl text-[#525252] font-normal leading-relaxed max-w-2xl mx-auto mb-11">
          I design and build modern one-page websites for businesses that want a stronger and more professional online presence.
        </p>

        {/* Action Group */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-14">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide text-white bg-[#171717] hover:bg-[#262626] active:scale-98 transition-all duration-150 shadow-sm group cursor-pointer"
          >
            <span>Let's Work Together</span>
            <ArrowUpRight className="w-4 h-4 text-neutral-300 group-hover:text-white transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-[#171717] bg-white hover:bg-[#F5F5F5] border border-[#E5E5E5] transition-all duration-150 active:scale-98 shadow-xs"
          >
            <span>Explore Demo Websites</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#737373]" />
          </a>
        </div>

        {/* Scope and Studio Note */}
        <div className="flex items-center justify-center gap-2 text-xs text-[#737373] mb-16">
          <MapPin className="w-3.5 h-3.5 text-[#F26522] shrink-0" />
          <span className="font-medium text-[#171717]">Based in India</span>
          <span className="text-[#D4D4D4]">·</span>
          <span>Working with businesses worldwide</span>
        </div>

        {/* Minimal Editorial Studio Showcase Card */}
        <div className="max-w-md mx-auto p-4 sm:p-5 rounded-2xl bg-white border border-[#E5E5E5] shadow-[0_8px_30px_rgba(0,0,0,0.04)] text-left flex items-center gap-4 transition-all duration-200 hover:border-[#D4D4D4]">
          <div className="p-2 bg-[#070A12] rounded-xl shrink-0 shadow-xs">
            <Logo size={52} className="rounded-lg" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-semibold text-[#171717]">
                WebWithDivyanshu
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#F26522] bg-[#F26522]/10 px-2 py-0.5 rounded-full font-medium">
                Studio
              </span>
            </div>
            <p className="text-xs text-[#737373] truncate mt-0.5">
              Simple Websites. Real Businesses.
            </p>
            <p className="text-[11px] text-[#525252] mt-1 flex items-center gap-1.5">
              <Globe className="w-3 h-3 text-[#F26522]" />
              <span>Modern One-Page Business Websites</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
