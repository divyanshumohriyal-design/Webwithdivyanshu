import React from 'react';
import { Logo } from './Logo';
import { MessageCircle, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const links = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Process', href: '#process' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="py-16 md:py-20 border-t border-[#EAE4D7] text-[#6E6E73] relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-12 border-b border-[#EAE4D7]">
          {/* Logo, Brand & Tagline */}
          <div className="md:col-span-6 flex flex-col items-start">
            <div className="p-2 bg-[#070A12] rounded-xl mb-4 shadow-xs">
              <Logo size={44} className="rounded-lg" />
            </div>
            <div className="text-sm font-semibold text-[#1D1D1F] mb-1">
              WebWithDivyanshu
            </div>
            <div className="text-xs text-[#86868B] tracking-wider uppercase mb-5 font-mono">
              Simple Websites. Real Businesses.
            </div>
            <div className="flex items-center gap-4 text-xs">
              <a
                href="https://wa.me/917579429886?text=Hi%20Divyanshu%2C%20I%20came%20across%20WebWithDivyanshu%20and%20I%27m%20interested%20in%20getting%20a%20website%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#6E6E73] hover:text-[#1D1D1F] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>+91 7579429886</span>
              </a>
              <span className="text-[#D8D2C5]">/</span>
              <a
                href="https://instagram.com/webwithdivyanshu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#6E6E73] hover:text-[#1D1D1F] transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-purple-700" />
                <span>@webwithdivyanshu</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-6 flex flex-col md:items-end justify-between h-full">
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-[#6E6E73]">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#1D1D1F] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#86868B]">
          <div>© 2026 WebWithDivyanshu. All rights reserved.</div>
          <div className="text-[11px] font-mono text-[#A1A1A6]">
            Independent Web Design Studio
          </div>
        </div>
      </div>
    </footer>
  );
};
