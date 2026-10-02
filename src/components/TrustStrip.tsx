import React from 'react';
import { Smartphone, Layout, Target, Cpu, Globe2 } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const points = [
    { label: 'Responsive Design', icon: Layout },
    { label: 'Mobile Optimized', icon: Smartphone },
    { label: 'Business-Focused', icon: Target },
    { label: 'AI-Assisted Development', icon: Cpu },
    { label: 'India + Worldwide', icon: Globe2 },
  ];

  return (
    <section className="relative z-10 border-y border-white/10 bg-[#090D18]/70 backdrop-blur-sm py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-4 items-center justify-between">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={point.label}
                className="flex items-center gap-3 justify-center sm:justify-start lg:justify-center text-slate-300 group"
              >
                <div className="w-8 h-8 rounded-md bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-sky-400 group-hover:text-purple-400 group-hover:border-purple-500/40 transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-200 group-hover:text-white transition-colors whitespace-nowrap">
                  {point.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
