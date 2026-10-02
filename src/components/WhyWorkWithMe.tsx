import React from 'react';

export const WhyWorkWithMe: React.FC = () => {
  const points = [
    {
      num: '01',
      title: 'Designed around your business',
      detail: 'Every layout is tailored to how your customers discover, evaluate, and choose your specific service.',
    },
    {
      num: '02',
      title: 'Modern and responsive',
      detail: 'Crisp typography, balanced white space, and fast page loading across all screens from iPhone to desktop.',
    },
    {
      num: '03',
      title: 'Simple communication',
      detail: 'Direct contact with the designer building your website. No unnecessary agency layers or delay.',
    },
    {
      num: '04',
      title: 'Built with real customers in mind',
      detail: 'Clean visual hierarchy structured to turn casual visitors into calls, visits, and bookings.',
    },
    {
      num: '05',
      title: 'Available for businesses in India and worldwide',
      detail: 'Reliable collaboration across time zones with clear milestones and steady communication.',
    },
  ];

  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Section Header */}
          <div className="lg:col-span-5">
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#86868B] mb-3">
              04 · Approach
            </div>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#1D1D1F] mb-4">
              Why WebWithDivyanshu?
            </h2>
            <p className="text-base text-[#6E6E73] font-normal leading-relaxed">
              A straightforward freelance approach built on care, craft, and business results.
            </p>
          </div>

          {/* Minimal Editorial List */}
          <div className="lg:col-span-7 space-y-8 divide-y divide-[#EAE4D7]">
            {points.map((p, idx) => (
              <div key={p.num} className={`flex items-start gap-6 group ${idx > 0 ? 'pt-8' : ''}`}>
                <span className="text-xs font-mono font-medium text-amber-800/80 pt-0.5">
                  {p.num}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-[#1D1D1F] mb-1.5 group-hover:text-amber-900 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#6E6E73] font-normal leading-relaxed max-w-xl">
                    {p.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
