import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/917579429886?text=${encodeURIComponent(
    "Hi Divyanshu, I came across WebWithDivyanshu and I'm interested in getting a website for my business."
  )}`;

  return (
    <aside aria-label="Direct WhatsApp Contact" className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Divyanshu"
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#171717] hover:bg-[#262626] text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)] border border-[#2E2E2E] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F26522] opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F26522]" />
        </span>
        <MessageCircle className="w-4 h-4 text-[#F26522] group-hover:text-white transition-colors" />
        <span className="text-xs font-semibold tracking-wide">WhatsApp</span>
      </a>
    </aside>
  );
};
