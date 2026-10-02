import React from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

interface FinalCtaProps {
  onContactClick: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onContactClick }) => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <h2
          className="text-4xl sm:text-6xl font-medium tracking-tight text-[#1D1D1F] leading-[1.08] mb-6"
          style={{ textWrap: 'balance' }}
        >
          Let's build something your customers will remember.
        </h2>

        <p className="text-lg sm:text-xl text-[#6E6E73] font-normal leading-relaxed mb-10 max-w-xl">
          Modern websites for businesses ready to look the part.
        </p>

        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide text-white bg-[#1D1D1F] hover:bg-[#2C2C2E] transition-all duration-150 active:scale-98 shadow-sm group cursor-pointer"
          >
            <span>Let's Work Together</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-[#1D1D1F] bg-[#FAF6ED] hover:bg-[#F2ECE0] border border-[#E5DFD3] transition-all duration-150 active:scale-98"
          >
            <span>View Selected Work</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#86868B]" />
          </a>
        </div>
      </div>
    </section>
  );
};
