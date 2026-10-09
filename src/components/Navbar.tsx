import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/917579429886?text=${encodeURIComponent(
    "Hi Divyanshu, I came across WebWithDivyanshu and I'm interested in getting a website for my business."
  )}`;

  const navLinks = [
    { label: 'Demo Websites', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Process', href: '#process' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 pt-3 sm:pt-4 transition-all duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Pill-shaped Navigation Bar */}
        <div
          className={`flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 rounded-full transition-all duration-300 ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-md border border-[#E5E5E5] shadow-[0_8px_30px_rgba(0,0,0,0.06)]'
              : 'bg-white/90 backdrop-blur-sm border border-[#EBEBEB] shadow-[0_2px_16px_rgba(0,0,0,0.03)]'
          }`}
        >
          {/* Brand: Original WebWithDivyanshu Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group transition-opacity hover:opacity-90 pl-1"
            aria-label="WebWithDivyanshu"
          >
            <div className="p-0.5 bg-[#070A12] rounded-xl shadow-xs shrink-0">
              <Logo size={34} className="rounded-lg" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[13px] font-semibold tracking-tight text-[#171717] leading-none">
                WebWithDivyanshu
              </span>
              <span className="text-[9.5px] font-medium tracking-wider uppercase text-[#737373] mt-0.5 hidden sm:inline-block">
                Independent Web Design
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-[12.5px] font-medium text-[#525252]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#171717] transition-colors relative py-1 hover:font-semibold"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Primary Action Button */}
          <div className="flex items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-xs font-semibold tracking-wide text-white bg-[#171717] hover:bg-[#262626] active:scale-98 transition-all duration-150 shadow-xs group"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-300 group-hover:text-white transition-colors" />
            </a>

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-[#171717] hover:bg-neutral-100 transition-colors"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-white/95 backdrop-blur-md border border-[#E5E5E5] rounded-3xl p-5 shadow-[0_12px_40px_rgba(0,0,0,0.08)] animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-[#171717] hover:bg-[#F5F5F5] rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 mt-1 border-t border-[#E5E5E5]">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 px-4 rounded-full text-xs font-semibold tracking-wide text-white bg-[#171717] hover:bg-[#262626] flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <span>Let's Work Together</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
