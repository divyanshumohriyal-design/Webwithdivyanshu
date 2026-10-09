import React from 'react';

export const Process: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'DISCOVER',
      description: 'Understand your business, audience, services, and goals.',
    },
    {
      num: '02',
      title: 'DESIGN',
      description: 'Create a visual direction suited to your business.',
    },
    {
      num: '03',
      title: 'BUILD',
      description: 'Build a responsive website with the required integrations.',
    },
    {
      num: '04',
      title: 'LAUNCH',
      description: 'Assist with domain setup, hosting, and deployment.',
    },
  ];

  return (
    <section id="process" className="py-24 md:py-32 relative border-t border-[#EBEBEB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 md:mb-18">
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#737373] mb-3">
            05 · Process
          </div>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#171717] mb-4">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-[#525252] font-normal max-w-xl">
            A clear four-stage path from initial conversation to a live website.
          </p>
        </div>

        {/* Minimal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-7 rounded-2xl bg-white border border-[#E5E5E5] flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-[#D4D4D4] transition-all duration-200"
            >
              <div>
                <span className="text-xs font-mono font-semibold text-[#F26522] block mb-5">
                  {step.num}
                </span>
                <h3 className="text-sm font-semibold tracking-wider text-[#171717] uppercase mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#525252] font-normal leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Note */}
        <div className="p-4 sm:p-5 rounded-2xl border border-[#E5E5E5] bg-white text-xs text-[#525252] max-w-2xl shadow-xs">
          <span className="font-semibold text-[#171717]">Project Timeline:</span>{' '}
          Project timelines depend on the requirements, content, and scope.
        </div>
      </div>
    </section>
  );
};
