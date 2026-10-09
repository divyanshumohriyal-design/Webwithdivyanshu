import React from 'react';
import { Logo } from './Logo';
import { MessageCircle, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const whatsappUrl = `https://wa.me/917579429886?text=${encodeURIComponent(
    "Hi Divyanshu, I came across WebWithDivyanshu and I'm interested in getting a website for my business."
  )}`;

  const links = [
    { label: 'Demo Websites', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Process', href: '#process' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="py-16 md:py-20 border-t border-[#E2EBE5] text-[#525252] bg-white/70 backdrop-blur-sm relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-12 border-b border-[#EBEBEB]">
          {/* Logo, Brand & Tagline */}
          <div className="md:col-span-6 flex flex-col items-start">
            <div className="p-1 bg-[#070A12] rounded-xl mb-4 shadow-xs">
              <Logo size={42} className="rounded-lg" />
            </div>
            <div className="text-sm font-semibold text-[#171717] mb-1">
              WebWithDivyanshu
            </div>
            <div className="text-xs text-[#737373] tracking-wider uppercase mb-5 font-mono">
              Simple Websites. Real Businesses.
            </div>
            <div className="flex items-center gap-4 text-xs">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#525252] hover:text-[#171717] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#F26522]" />
                <span>+91 7579429886</span>
              </a>
              <span className="text-[#E5E5E5]">/</span>
              <a
                href="https://instagram.com/webwithdivyanshu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#525252] hover:text-[#171717] transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-[#737373]" />
                <span>@webwithdivyanshu</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-6 flex flex-col md:items-end justify-between h-full">
            <nav className="flex flex-wrap gap-x-6 gap-y-2.5 text-xs font-medium text-[#525252]">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#171717] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#737373]">
          <div>© 2026 WebWithDivyanshu. All rights reserved.</div>
          <div className="text-[11px] font-mono text-[#A3A3A3]">
            Independent Web Design Studio
          </div>
        </div>
      </div>
    </footer>
  );
};
