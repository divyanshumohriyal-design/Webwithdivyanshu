import React from 'react';
import { MessageCircle, Instagram, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const whatsappUrl = `https://wa.me/917579429886?text=${encodeURIComponent(
    "Hi Divyanshu, I came across WebWithDivyanshu and I'm interested in getting a website for my business."
  )}`;

  return (
    <section id="contact" className="py-24 md:py-32 relative border-t border-[#EAE4D7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#86868B] mb-3">
            08 · Contact
          </div>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#1D1D1F] mb-6">
            Have a business that needs a better website?
          </h2>
          <p className="text-lg sm:text-xl text-[#6E6E73] font-normal leading-relaxed mb-10 max-w-2xl">
            Tell me what you're building and let's see what we can create together.
          </p>

          {/* Direct Contact Actions — Absolutely No Forms */}
          <div className="flex flex-wrap items-center gap-3.5 mb-14">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide text-white bg-[#1D1D1F] hover:bg-[#2C2C2E] transition-all duration-150 active:scale-98 shadow-sm group cursor-pointer"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-[#1D1D1F] bg-[#FAF6ED] hover:bg-[#F2ECE0] border border-[#E5DFD3] transition-all duration-150 active:scale-98"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href="https://instagram.com/webwithdivyanshu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-[#1D1D1F] bg-[#FAF6ED] hover:bg-[#F2ECE0] border border-[#E5DFD3] transition-all duration-150 active:scale-98"
            >
              <Instagram className="w-4 h-4 text-purple-700" />
              <span>DM on Instagram</span>
            </a>
          </div>

          {/* Simple Contact Details */}
          <div className="pt-8 border-t border-[#EAE4D7] flex flex-wrap items-center gap-8 text-xs text-[#6E6E73]">
            <div>
              <span className="text-[#86868B] block mb-0.5">WhatsApp Business</span>
              <span className="font-mono font-medium text-[#1D1D1F]">+91 7579429886</span>
            </div>
            <div>
              <span className="text-[#86868B] block mb-0.5">Instagram Profile</span>
              <span className="font-medium text-[#1D1D1F]">@webwithdivyanshu</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
