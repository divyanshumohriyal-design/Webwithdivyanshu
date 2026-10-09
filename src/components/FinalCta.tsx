import React from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

interface FinalCtaProps {
  onContactClick: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onContactClick }) => {
  const whatsappUrl = `https://wa.me/917579429886?text=${encodeURIComponent(
    "Hi Divyanshu, I came across WebWithDivyanshu and I'm interested in getting a website for my business."
  )}`;

  return (
    <section className="py-24 md:py-32 relative border-t border-[#EBEBEB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#737373] mb-3">
          Get Started
        </div>
        <h2
          className="text-4xl sm:text-6xl font-medium tracking-tight text-[#171717] leading-[1.08] mb-6"
          style={{ textWrap: 'balance' }}
        >
          Let's build something your customers will remember.
        </h2>

        <p className="text-lg sm:text-xl text-[#525252] font-normal leading-relaxed mb-10 max-w-xl">
          Modern websites for businesses ready to look the part.
        </p>

        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide text-white bg-[#171717] hover:bg-[#262626] transition-all duration-150 active:scale-98 shadow-sm group cursor-pointer"
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
      </div>
    </section>
  );
};
