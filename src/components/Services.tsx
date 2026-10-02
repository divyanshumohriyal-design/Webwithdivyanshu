import React from 'react';

export const Services: React.FC = () => {
  const serviceList = [
    {
      num: '01',
      title: 'Responsive Design',
      note: 'Designed to adapt with natural proportion across desktop, tablet, and mobile screens.',
    },
    {
      num: '02',
      title: 'Mobile Optimization',
      note: 'Fast, touch-friendly layouts so customers can discover offerings and get in touch instantly.',
    },
    {
      num: '03',
      title: 'WhatsApp Integration',
      note: 'Direct click-to-chat setup so website visitors convert into immediate real-time conversations.',
    },
    {
      num: '04',
      title: 'Google Maps Integration',
      note: 'Embed your physical storefront, studio, or clinic location for straightforward customer navigation.',
    },
    {
      num: '05',
      title: 'Social Media Links',
      note: 'Seamless links to your Instagram, Google profiles, and official business channels.',
    },
    {
      num: '06',
      title: 'Domain Setup Assistance',
      note: 'Clear hands-on guidance connecting your custom web domain name and DNS configuration.',
    },
    {
      num: '07',
      title: 'Hosting & Deployment',
      note: 'Full assistance setting up production deployment so your site launches smoothly and securely.',
    },
    {
      num: '08',
      title: 'Two Rounds of Revisions',
      note: 'Two structured revision rounds to adjust layout, typography, and copy to match your exact goals.',
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 md:mb-18">
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#86868B] mb-3">
            02 · Services
          </div>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#1D1D1F] mb-4">
            What I Do
          </h2>
          <p className="text-base sm:text-lg text-[#6E6E73] font-normal leading-relaxed">
            Focused website design and implementation for businesses that want to look professional online.
          </p>
        </div>

        {/* Primary Service Showcase Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#FFFDF7] border border-[#E8E2D5] shadow-[0_8px_30px_rgba(40,30,20,0.03)] mb-14">
          <div className="max-w-3xl">
            <span className="text-[11px] font-mono uppercase tracking-widest text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60 inline-block mb-4 font-semibold">
              Primary Service
            </span>
            <h3 className="text-2xl sm:text-4xl font-semibold tracking-tight text-[#1D1D1F] mb-4">
              One-Page Business Website
            </h3>
            <p className="text-base sm:text-lg text-[#6E6E73] font-normal leading-relaxed">
              Modern, responsive websites designed around your business, your customers and your goals.
            </p>
          </div>
        </div>

        {/* Clean Editorial List with Thin Separators */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-9 border-t border-[#EAE4D7] pt-12 mb-14">
          {serviceList.map((service) => (
            <div key={service.num} className="flex items-start gap-5 group">
              <span className="text-xs font-mono font-medium text-amber-800/80 pt-0.5">
                {service.num}
              </span>
              <div>
                <h4 className="text-base font-semibold text-[#1D1D1F] mb-1 group-hover:text-amber-900 transition-colors">
                  {service.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#6E6E73] font-normal leading-relaxed">
                  {service.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Clearly Visible Hosting Disclosure */}
        <div className="p-5 sm:p-6 rounded-2xl border border-[#E8E2D5] bg-[#FAF6ED]/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#6E6E73]">
          <div className="max-w-2xl leading-relaxed">
            <strong className="text-[#1D1D1F] font-semibold">Important Hosting Notice:</strong>{' '}
            Hosting charges are paid separately by the client. You keep direct ownership and full administrative control of your hosting account.
          </div>
          <div className="text-[11px] font-mono text-[#86868B] shrink-0">
            Transparent Terms
          </div>
        </div>
      </div>
    </section>
  );
};
