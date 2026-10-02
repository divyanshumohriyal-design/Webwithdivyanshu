import React from 'react';
import { ArrowRight, Lock } from 'lucide-react';

export const Portfolio: React.FC = () => {
  return (
    <section id="work" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#86868B] mb-3">
            01 · Demo Websites
          </div>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#1D1D1F] mb-4">
            Demo Websites
          </h2>
          <p className="text-base sm:text-lg text-[#6E6E73] font-normal leading-relaxed">
            A selection of websites I've designed and built to explore different business styles and industries.
          </p>
        </div>

        <div className="space-y-28 md:space-y-36">
          {/* ============================================================ */}
          {/* PROJECT 01: IronForFit — Large Panoramic Width Mockup */}
          {/* ============================================================ */}
          <article className="group">
            {/* Browser Window Mockup */}
            <div className="rounded-2xl border border-[#E8E2D5] bg-[#FFFDF7] p-2.5 sm:p-3.5 shadow-[0_12px_40px_rgba(40,30,20,0.06)] overflow-hidden transition-all duration-300 hover:shadow-[0_16px_50px_rgba(40,30,20,0.09)] hover:border-[#DDD6C8]">
              {/* Minimal Apple-style Browser Chrome Header */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-[#EFEAE0] mb-2.5 text-xs text-[#86868B]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E8E2D5]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E8E2D5]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E8E2D5]" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#F5F0E6] text-[11px] font-mono text-[#6E6E73] border border-[#EAE4D7]">
                  <Lock className="w-3 h-3 text-[#1D1D1F]" />
                  <span>ironforfit.netlify.app</span>
                </div>
                <span className="text-[11px] font-mono text-[#86868B]">01</span>
              </div>

              {/* Exact Screenshot Asset */}
              <div className="w-full rounded-xl bg-[#F8F8F6] overflow-hidden relative transition-transform duration-300 group-hover:scale-[1.01] border border-[#EAE4D7]">
                <img
                  src="/ironforfit-screenshot.svg?v=2"
                  alt="IronForFit Live Website Screenshot"
                  className="w-full h-auto object-contain block"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Project Details Below Panoramic Preview */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-baseline pt-4 px-1">
              <div className="md:col-span-2 text-xs font-mono text-[#86868B] uppercase tracking-wider">
                01 · FITNESS / GYM
              </div>
              <div className="md:col-span-4">
                <h3 className="text-2xl font-semibold text-[#1D1D1F] tracking-tight">
                  IronForFit
                </h3>
                <span className="text-xs text-[#86868B]">
                  Fitness / Gym
                </span>
              </div>
              <div className="md:col-span-4 text-sm text-[#6E6E73] font-normal leading-relaxed">
                An energetic and modern digital presence created for a fitness-focused business.
              </div>
              <div className="md:col-span-2 md:text-right">
                <a
                  href="https://ironforfit.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-[#1D1D1F] hover:text-amber-800 transition-colors group/link pb-0.5 border-b border-[#1D1D1F] hover:border-amber-800"
                >
                  <span>View Live Website</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          </article>

          {/* ============================================================ */}
          {/* PROJECT 02: Alora Dental — Offset Aside Mockup */}
          {/* ============================================================ */}
          <article className="group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Information Column (Left) */}
              <div className="lg:col-span-4 flex flex-col justify-center">
                <div className="text-xs font-mono text-[#86868B] uppercase tracking-wider mb-2">
                  02 · HEALTHCARE
                </div>
                <h3 className="text-3xl font-semibold text-[#1D1D1F] tracking-tight mb-1">
                  Alora Dental
                </h3>
                <div className="text-xs font-medium text-teal-700 mb-4">
                  Dental / Healthcare
                </div>
                <p className="text-sm text-[#6E6E73] font-normal leading-relaxed mb-6">
                  A clean and trustworthy digital presence designed for a modern dental practice.
                </p>

                <div className="py-4 border-y border-[#EAE4D7] space-y-2.5 text-xs text-[#6E6E73] mb-6">
                  <div className="flex justify-between">
                    <span className="text-[#86868B]">Deliverable</span>
                    <span className="font-medium text-[#1D1D1F]">One-Page Healthcare Website</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#86868B]">Integrations</span>
                    <span className="font-medium text-[#1D1D1F]">Maps & Direct Booking</span>
                  </div>
                </div>

                <div>
                  <a
                    href="https://alora-dental.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-[#1D1D1F] hover:text-amber-800 transition-colors group/link pb-0.5 border-b border-[#1D1D1F] hover:border-amber-800"
                  >
                    <span>View Live Website</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>

              {/* Offset Browser Mockup (Right) */}
              <div className="lg:col-span-8">
                <div className="rounded-2xl border border-[#E8E2D5] bg-[#FFFDF7] p-2.5 sm:p-3.5 shadow-[0_12px_40px_rgba(40,30,20,0.06)] overflow-hidden transition-all duration-300 hover:shadow-[0_16px_50px_rgba(40,30,20,0.09)] hover:border-[#DDD6C8]">
                  <div className="flex items-center justify-between px-3 py-2 border-b border-[#EFEAE0] mb-2.5 text-xs text-[#86868B]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#E8E2D5]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#E8E2D5]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#E8E2D5]" />
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#F5F0E6] text-[11px] font-mono text-[#6E6E73] border border-[#EAE4D7]">
                      <Lock className="w-3 h-3 text-teal-600" />
                      <span>alora-dental.vercel.app</span>
                    </div>
                    <span className="text-[11px] font-mono text-[#86868B]">02</span>
                  </div>

                  {/* Exact Screenshot Asset */}
                  <div className="w-full rounded-xl bg-[#F4F7F8] overflow-hidden relative transition-transform duration-300 group-hover:scale-[1.01] border border-[#EAE4D7]">
                    <img
                      src="/alora-dental-screenshot.svg"
                      alt="Alora Dental Live Website Screenshot"
                      className="w-full h-auto object-contain block"
                      loading="eager"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* ============================================================ */}
          {/* PROJECT 03: Lumera Studio — Editorial Split Mockup */}
          {/* ============================================================ */}
          <article className="group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Browser Mockup (Left) */}
              <div className="lg:col-span-8 order-2 lg:order-1">
                <div className="rounded-2xl border border-[#E8E2D5] bg-[#FFFDF7] p-2.5 sm:p-3.5 shadow-[0_12px_40px_rgba(40,30,20,0.06)] overflow-hidden transition-all duration-300 hover:shadow-[0_16px_50px_rgba(40,30,20,0.09)] hover:border-[#DDD6C8]">
                  <div className="flex items-center justify-between px-3 py-2 border-b border-[#EFEAE0] mb-2.5 text-xs text-[#86868B]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#E8E2D5]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#E8E2D5]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#E8E2D5]" />
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#F5F0E6] text-[11px] font-mono text-[#6E6E73] border border-[#EAE4D7]">
                      <Lock className="w-3 h-3 text-purple-600" />
                      <span>lumerastudi.netlify.app</span>
                    </div>
                    <span className="text-[11px] font-mono text-[#86868B]">03</span>
                  </div>

                  {/* Exact Screenshot Asset */}
                  <div className="w-full rounded-xl bg-[#F9F6F0] overflow-hidden relative transition-transform duration-300 group-hover:scale-[1.01] border border-[#EAE4D7]">
                    <img
                      src="/lumera-studio-screenshot.svg"
                      alt="Lumera Studio Live Website Screenshot"
                      className="w-full h-auto object-contain block"
                      loading="eager"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>

              {/* Information Column (Right) */}
              <div className="lg:col-span-4 flex flex-col justify-center order-1 lg:order-2">
                <div className="text-xs font-mono text-[#86868B] uppercase tracking-wider mb-2">
                  03 · CREATIVE
                </div>
                <h3 className="text-3xl font-semibold text-[#1D1D1F] tracking-tight mb-1">
                  Lumera Studio
                </h3>
                <div className="text-xs font-medium text-purple-700 mb-4">
                  Creative / Business
                </div>
                <p className="text-sm text-[#6E6E73] font-normal leading-relaxed mb-6">
                  A contemporary visual direction created for a creative business brand.
                </p>

                <div className="py-4 border-y border-[#EAE4D7] space-y-2.5 text-xs text-[#6E6E73] mb-6">
                  <div className="flex justify-between">
                    <span className="text-[#86868B]">Aesthetic</span>
                    <span className="font-medium text-[#1D1D1F]">Editorial Boutique Sanctuary</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#86868B]">Focus</span>
                    <span className="font-medium text-[#1D1D1F]">Direct Reservations & Inquiry</span>
                  </div>
                </div>

                <div>
                  <a
                    href="https://lumerastudi.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-[#1D1D1F] hover:text-amber-800 transition-colors group/link pb-0.5 border-b border-[#1D1D1F] hover:border-amber-800"
                  >
                    <span>View Live Website</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
