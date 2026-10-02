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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Process', href: '#process' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'py-3 bg-[#FFFDF7]/92 backdrop-blur-md border-b border-[#EAE5D9] shadow-[0_2px_12px_rgba(29,29,31,0.03)]'
          : 'py-4 sm:py-5 bg-[#FFFDF7]/80 backdrop-blur-sm border-b border-[#EFEAE0]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* LEFT: Exact Official Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group transition-opacity hover:opacity-90"
            aria-label="WebWithDivyanshu"
          >
            <div className="p-1 bg-[#070A12] rounded-xl shadow-xs">
              <Logo size={isScrolled ? 36 : 40} className="rounded-lg" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm font-semibold tracking-tight text-[#1D1D1F]">
                WebWithDivyanshu
              </span>
              <span className="text-[10px] font-medium tracking-wider uppercase text-[#86868B]">
                Independent Web Design
              </span>
            </div>
          </a>

          {/* CENTER: Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-[13px] font-medium text-[#6E6E73]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#1D1D1F] transition-colors relative py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* RIGHT: Primary Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wide text-white bg-[#1D1D1F] hover:bg-[#2C2C2E] transition-all duration-150 active:scale-98 shadow-xs cursor-pointer"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#1D1D1F] hover:bg-[#F4EFE6] transition-colors"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFDF7] border-b border-[#EAE5D9] px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-150 shadow-sm">
          <nav className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-[#1D1D1F] hover:bg-[#F5F0E6] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-[#EAE5D9]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                className="w-full py-2.5 px-4 rounded-full text-xs font-semibold tracking-wide text-white bg-[#1D1D1F] hover:bg-[#2C2C2E] flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Let's Work Together</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
