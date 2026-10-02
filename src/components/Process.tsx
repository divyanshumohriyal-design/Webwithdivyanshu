import React from 'react';

export const Process: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'DISCOVER',
      description: 'Understand the business, audience, services and goals.',
    },
    {
      num: '02',
      title: 'DESIGN',
      description: 'Shape the visual direction around the business.',
    },
    {
      num: '03',
      title: 'BUILD',
      description: 'Create the responsive website and required integrations.',
    },
    {
      num: '04',
      title: 'LAUNCH',
      description: 'Assist with domain setup, hosting and deployment.',
    },
  ];

  return (
    <section id="process" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 md:mb-18">
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#86868B] mb-3">
            05 · Process
          </div>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#1D1D1F] mb-4">
            How it works
          </h2>
          <p className="text-base sm:text-lg text-[#6E6E73] font-normal max-w-xl">
            A clear four-stage path from initial conversation to a live website.
          </p>
        </div>

        {/* Minimal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-7 rounded-2xl bg-[#FFFDF7] border border-[#E8E2D5] flex flex-col justify-between shadow-[0_4px_20px_rgba(40,30,20,0.03)] hover:border-[#D8D0C0] transition-colors"
            >
              <div>
                <span className="text-xs font-mono font-semibold text-amber-800/80 block mb-5">
                  {step.num}
                </span>
                <h3 className="text-sm font-semibold tracking-wider text-[#1D1D1F] uppercase mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6E6E73] font-normal leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Note */}
        <div className="p-4 sm:p-5 rounded-xl border border-[#E8E2D5] bg-[#FAF6ED]/70 text-xs text-[#6E6E73] max-w-2xl">
          <span className="font-semibold text-[#1D1D1F]">Project Timeline:</span>{' '}
          Timeline depends on the project's requirements, content and scope.
        </div>
      </div>
    </section>
  );
};
