import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { ExternalLink, Lock, RefreshCw, Sparkles, Check, ChevronRight } from 'lucide-react';

interface BrowserPreviewProps {
  project: ProjectItem;
}

export const BrowserPreview: React.FC<BrowserPreviewProps> = ({ project }) => {
  const [useIframe, setUseIframe] = useState(false);
  const [iframeError, setIframeError] = useState(false);

  // Note: alora-dental has frame-ancestors: 'self' which blocks iframes,
  // so we keep iframe toggle available for others or provide safe fallback.
  const canAttemptIframe = project.id !== 'alora-dental';

  return (
    <div className="w-full rounded-2xl bg-[#090D18] border border-white/10 shadow-2xl overflow-hidden group transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_15px_50px_rgba(59,130,246,0.15)] flex flex-col">
      {/* Browser Chrome Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0E1424] border-b border-white/10 shrink-0">
        {/* Window controls */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#EF4444]/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#F59E0B]/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#10B981]/80 inline-block" />
        </div>

        {/* Address Bar */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-black/40 border border-white/5 text-[11px] font-mono text-slate-300 max-w-xs sm:max-w-md w-full mx-3 truncate">
          <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
          <span className="truncate">{project.url}</span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {canAttemptIframe && (
            <button
              onClick={() => {
                setUseIframe(!useIframe);
                setIframeError(false);
              }}
              title={useIframe ? 'Switch to Mockup View' : 'Try Live Embed'}
              className="hidden sm:flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-colors"
            >
              <RefreshCw className="w-2.5 h-2.5" />
              <span>{useIframe ? 'Mockup' : 'Live Embed'}</span>
            </button>
          )}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            title="Open in new window"
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Browser Viewport */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9.5] w-full overflow-hidden bg-[#070A12]">
        {useIframe && !iframeError ? (
          <iframe
            src={project.url}
            title={`${project.name} live preview`}
            className="w-full h-full border-0"
            onError={() => setIframeError(true)}
            loading="lazy"
          />
        ) : (
          <div className="relative w-full h-full flex flex-col overflow-hidden select-none">
            {/* Project-specific visual mockup representing actual site aesthetics */}
            {project.id === 'ironforfit' && (
              <div className="w-full h-full bg-[#0A0F1D] text-white flex flex-col p-6 sm:p-8 justify-between relative overflow-hidden">
                {/* Background athletic accent lines */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 blur-[90px] rounded-full pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-600/10 blur-[80px] rounded-full pointer-events-none" />

                {/* Mockup Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 relative z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-[#E63946] flex items-center justify-center font-black text-xs">
                      IF
                    </div>
                    <span className="font-extrabold tracking-wider text-sm text-white">
                      IRONFORGE FITNESS
                    </span>
                  </div>
                  <div className="hidden sm:flex items-center gap-4 text-xs font-semibold text-slate-300">
                    <span>Programs</span>
                    <span>Trainers</span>
                    <span>Timetable</span>
                    <span className="text-[#E63946]">Free Pass</span>
                  </div>
                </div>

                {/* Mockup Hero Content */}
                <div className="my-auto relative z-10 max-w-lg">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-red-500/20 text-red-400 border border-red-500/30 mb-3">
                    <Sparkles className="w-3 h-3" />
                    <span>Premium Gym & Performance</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-2 leading-tight">
                    Train Smarter. Reach Stronger.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 mb-4 leading-relaxed">
                    Expert coaching, science-backed personal training and programs built around your real fitness milestones.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="px-3.5 py-1.5 rounded-lg bg-[#E63946] text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-red-600/30 flex items-center gap-1.5">
                      <span>Claim Free Pass</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[11px] text-slate-400 font-medium">No Contract Needed</span>
                  </div>
                </div>

                {/* Mockup Bottom Stats Bar */}
                <div className="pt-3 border-t border-white/10 grid grid-cols-3 gap-2 text-left relative z-10">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider">Coaches</div>
                    <div className="text-xs font-bold text-white">Certified Elite</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider">Equipment</div>
                    <div className="text-xs font-bold text-white">Competition Tier</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider">Access</div>
                    <div className="text-xs font-bold text-white">24/7 Member Key</div>
                  </div>
                </div>
              </div>
            )}

            {project.id === 'alora-dental' && (
              <div className="w-full h-full bg-[#F4FBFB] text-[#102A43] flex flex-col p-6 sm:p-8 justify-between relative overflow-hidden">
                {/* Background medical calm gradients */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 blur-[80px] rounded-full pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-sky-500/10 blur-[70px] rounded-full pointer-events-none" />

                {/* Mockup Header */}
                <div className="flex items-center justify-between border-b border-teal-900/10 pb-4 relative z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#22B8B5] flex items-center justify-center text-white font-bold text-xs">
                      +
                    </div>
                    <span className="font-extrabold tracking-wider text-sm text-[#102A43]">
                      ORA DENTAL
                    </span>
                  </div>
                  <div className="hidden sm:flex items-center gap-4 text-xs font-medium text-slate-600">
                    <span>Treatments</span>
                    <span>Smile Gallery</span>
                    <span>Our Clinic</span>
                    <span className="text-[#22B8B5] font-semibold">Book Online</span>
                  </div>
                </div>

                {/* Mockup Hero Content */}
                <div className="my-auto relative z-10 max-w-lg">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-teal-500/15 text-teal-700 border border-teal-500/20 mb-3">
                    <Check className="w-3 h-3" />
                    <span>Modern Dentistry, Made Personal</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-[#102A43] mb-2 leading-tight">
                    Gentle Care. Confident Smiles.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                    Personalized general, cosmetic and orthodontic care focused on anxiety-free patient comfort and modern diagnostics.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="px-3.5 py-1.5 rounded-lg bg-[#22B8B5] text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-teal-500/30 flex items-center gap-1.5">
                      <span>Book Consultation</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[11px] text-teal-800 font-medium">Accepting New Patients</span>
                  </div>
                </div>

                {/* Mockup Bottom Pill Bar */}
                <div className="pt-3 border-t border-teal-900/10 grid grid-cols-3 gap-2 text-left relative z-10">
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">Dentists</div>
                    <div className="text-xs font-bold text-[#102A43]">Specialist Care</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">Technology</div>
                    <div className="text-xs font-bold text-[#102A43]">3D Low-Dose Scan</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">Care Philosophy</div>
                    <div className="text-xs font-bold text-[#102A43]">Zero-Pain Focus</div>
                  </div>
                </div>
              </div>
            )}

            {project.id === 'lumera-studio' && (
              <div className="w-full h-full bg-[#140F1C] text-white flex flex-col p-6 sm:p-8 justify-between relative overflow-hidden">
                {/* Background luxury beauty glows */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/15 blur-[90px] rounded-full pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-pink-500/10 blur-[80px] rounded-full pointer-events-none" />

                {/* Mockup Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="font-serif italic font-bold tracking-widest text-base text-purple-300">
                      LUMÉRA
                    </span>
                    <span className="text-[10px] font-sans tracking-widest text-slate-400 uppercase">
                      Studio
                    </span>
                  </div>
                  <div className="hidden sm:flex items-center gap-4 text-xs font-medium text-slate-300">
                    <span>Hair</span>
                    <span>Skin</span>
                    <span>Bridal</span>
                    <span className="text-purple-300">Appointments</span>
                  </div>
                </div>

                {/* Mockup Hero Content */}
                <div className="my-auto relative z-10 max-w-lg">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30 mb-3">
                    <Sparkles className="w-3 h-3" />
                    <span>Boutique Salon & Beauty Sanctuary</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-normal italic tracking-tight text-white mb-2 leading-tight">
                    Beauty, Sculpted Around You.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 mb-4 leading-relaxed font-sans">
                    Artisanal haircuts, luxury hair spas, clinical skincare rituals and bespoke bridal grooming by master stylists.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-purple-600/30 flex items-center gap-1.5">
                      <span>Reserve Experience</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[11px] text-purple-300 font-medium">Bespoke Consultations</span>
                  </div>
                </div>

                {/* Mockup Bottom Bar */}
                <div className="pt-3 border-t border-white/10 grid grid-cols-3 gap-2 text-left relative z-10 font-sans">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider">Stylists</div>
                    <div className="text-xs font-bold text-white">Master Artists</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider">Products</div>
                    <div className="text-xs font-bold text-white">100% Organic & Clean</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider">Ambiance</div>
                    <div className="text-xs font-bold text-white">Private Sanctuary</div>
                  </div>
                </div>
              </div>
            )}

            {/* Subtle Overlay Badge on Hover */}
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[2px]"
            >
              <div className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-xs uppercase tracking-wider shadow-2xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-200">
                <span>Open Live Project</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
