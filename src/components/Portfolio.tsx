import React from 'react';
import { ArrowRight, Lock, ExternalLink } from 'lucide-react';
import ironforfitScreenshot from '../assets/images/regenerated_image_1791522295217.jpg';

export const Portfolio: React.FC = () => {
  const projects = [
    {
      num: '01',
      name: 'IronForFit',
      category: 'Fitness / Gym',
      url: 'https://ironforfit.netlify.app/',
      displayUrl: 'ironforfit.netlify.app',
      description:
        'A fitness website demo designed around a strong visual identity and an energetic business presence.',
      screenshot: ironforfitScreenshot,
      accentColor: '#E63946',
    },
    {
      num: '02',
      name: 'Alora Dental',
      category: 'Dental / Healthcare',
      url: 'https://alora-dental.vercel.app/',
      displayUrl: 'alora-dental.vercel.app',
      description:
        'A dental website demo focused on a clean, modern, and welcoming visual experience.',
      screenshot: '/alora-dental-screenshot.svg',
      accentColor: '#0D9488',
    },
    {
      num: '03',
      name: 'Lumera Studio',
      category: 'Beauty / Salon',
      url: 'https://lumerastudi.netlify.app/',
      displayUrl: 'lumerastudi.netlify.app',
      description:
        'A beauty studio website demo with a refined layout and a contemporary visual direction.',
      screenshot: '/lumera-studio-screenshot.svg',
      accentColor: '#7C3AED',
    },
  ];

  return (
    <section id="work" className="py-24 md:py-32 relative border-t border-[#EBEBEB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#737373] mb-3">
            01 · Showcase
          </div>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#171717] mb-4">
            Demo Websites
          </h2>
          <p className="text-base sm:text-lg text-[#525252] font-normal leading-relaxed">
            A look at the website experiences I've created for different business types.
          </p>
        </div>

        {/* Project Showcase Cards */}
        <div className="space-y-20 md:space-y-28">
          {projects.map((project, idx) => (
            <article key={project.num} className="group">
              {/* Minimal Browser Window Frame */}
              <div className="rounded-2xl sm:rounded-3xl border border-[#E5E5E5] bg-white p-2.5 sm:p-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-300 hover:shadow-[0_16px_40px_rgba(0,0,0,0.07)] hover:border-[#D4D4D4]">
                {/* Browser Chrome Header */}
                <div className="flex items-center justify-between px-3 py-2 border-b border-[#F0F0F0] mb-2 sm:mb-3 text-xs text-[#737373]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E5E5E5]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E5E5E5]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E5E5E5]" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#F5F5F5] text-[11px] font-mono text-[#525252] border border-[#E5E5E5]">
                    <Lock className="w-3 h-3 text-[#171717]" />
                    <span>{project.displayUrl}</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#737373]">{project.num}</span>
                </div>

                {/* Preserved Project Screenshot Asset */}
                <div className="w-full rounded-xl bg-[#FAFAFA] overflow-hidden relative border border-[#EBEBEB]">
                  <img
                    src={project.screenshot}
                    alt={`${project.name} Live Website Screenshot`}
                    className="w-full h-auto object-contain block transition-transform duration-300 group-hover:scale-[1.006]"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Project Meta and Live Link Below Mockup */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-baseline pt-5 px-1 sm:px-2">
                <div className="md:col-span-2 text-xs font-mono text-[#737373] uppercase tracking-wider">
                  {project.num} · {project.category}
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-2xl font-semibold text-[#171717] tracking-tight">
                    {project.name}
                  </h3>
                  <span className="text-xs text-[#737373]">
                    {project.category}
                  </span>
                </div>
                <div className="md:col-span-4 text-sm text-[#525252] font-normal leading-relaxed">
                  {project.description}
                </div>
                <div className="md:col-span-2 md:text-right">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-[#171717] hover:text-[#F26522] transition-colors group/link pb-0.5 border-b border-[#171717] hover:border-[#F26522]"
                  >
                    <span>View Live Website</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
