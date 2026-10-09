import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What type of websites do you build?',
      a: 'I primarily design and build modern one-page business websites for small and local businesses.',
    },
    {
      q: 'Do you work with international clients?',
      a: 'Yes. I work with businesses in India and worldwide.',
    },
    {
      q: 'Is hosting included?',
      a: 'Hosting and deployment assistance are available, but hosting charges are paid separately by the client.',
    },
    {
      q: 'Can you help with domain setup?',
      a: 'Yes. Domain setup assistance is available.',
    },
    {
      q: 'Can you integrate WhatsApp?',
      a: 'Yes. WhatsApp integration can be added so customers can contact the business directly.',
    },
    {
      q: 'How many revisions are included?',
      a: 'Every website includes up to two rounds of revisions.',
    },
    {
      q: 'Do you provide SEO services?',
      a: 'SEO services are not currently included.',
    },
    {
      q: 'How long does a website take?',
      a: 'Project timelines depend on the requirements, content, and scope. There is no fixed delivery timeline.',
    },
  ];

  return (
    <section id="faq" className="py-24 md:py-32 relative border-t border-[#EBEBEB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-14 md:mb-18">
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#737373] mb-3">
            07 · FAQ
          </div>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#171717] mb-4">
            Questions, answered.
          </h2>
          <p className="text-base sm:text-lg text-[#525252] font-normal">
            Clear information about services, deliverables, and working together.
          </p>
        </div>

        <div className="divide-y divide-[#EBEBEB] border-y border-[#EBEBEB]">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-6">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left flex items-start justify-between gap-4 group focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg sm:text-xl font-medium text-[#171717] group-hover:text-[#F26522] transition-colors">
                    {item.q}
                  </span>
                  <span className="text-[#737373] group-hover:text-[#171717] transition-colors pt-1 shrink-0">
                    {isOpen ? <Minus className="w-4 h-4 text-[#F26522]" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="mt-3 text-sm sm:text-base text-[#525252] font-normal leading-relaxed max-w-2xl animate-in fade-in duration-200">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
