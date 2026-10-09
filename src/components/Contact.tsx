import React from 'react';
import { MessageCircle, Instagram, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const whatsappUrl = `https://wa.me/917579429886?text=${encodeURIComponent(
    "Hi Divyanshu, I came across WebWithDivyanshu and I'm interested in getting a website for my business."
  )}`;

  return (
    <section id="contact" className="py-24 md:py-32 relative border-t border-[#EBEBEB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#737373] mb-3">
            08 · Contact
          </div>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#171717] mb-6">
            Have a business that needs a better website?
          </h2>
          <p className="text-lg sm:text-xl text-[#525252] font-normal leading-relaxed mb-10 max-w-2xl">
            Tell me about your business, and let's discuss how a website could help you build a stronger online presence.
          </p>

          {/* Direct Contact Actions — Strictly No Form Inputs */}
          <div className="flex flex-wrap items-center gap-3.5 mb-14">
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
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-[#171717] bg-white hover:bg-[#F5F5F5] border border-[#E5E5E5] transition-all duration-150 active:scale-98 shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-[#F26522]" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href="https://instagram.com/webwithdivyanshu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-[#171717] bg-white hover:bg-[#F5F5F5] border border-[#E5E5E5] transition-all duration-150 active:scale-98 shadow-xs"
            >
              <Instagram className="w-4 h-4 text-[#737373]" />
              <span>DM on Instagram</span>
            </a>
          </div>

          {/* Clean Contact Metadata Box */}
          <div className="p-6 rounded-2xl bg-white border border-[#E5E5E5] shadow-xs flex flex-wrap items-center gap-8 text-xs text-[#525252]">
            <div>
              <span className="text-[#737373] block mb-0.5">WhatsApp Direct</span>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono font-medium text-[#171717] hover:text-[#F26522] transition-colors"
              >
                +91 7579429886
              </a>
            </div>
            <div>
              <span className="text-[#737373] block mb-0.5">Instagram Profile</span>
              <a
                href="https://instagram.com/webwithdivyanshu"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#171717] hover:text-[#F26522] transition-colors"
              >
                @webwithdivyanshu
              </a>
            </div>
            <div>
              <span className="text-[#737373] block mb-0.5">Location</span>
              <span className="font-medium text-[#171717]">India · Serving Worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
