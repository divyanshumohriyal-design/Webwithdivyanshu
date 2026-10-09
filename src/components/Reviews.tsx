import React from 'react';
import { ArrowUpRight, MessageSquareQuote } from 'lucide-react';

interface ReviewsProps {
  onContactClick: () => void;
}

export interface ReviewItem {
  clientName: string;
  businessName: string;
  review: string;
  photoUrl?: string;
  rating?: number;
}

// Ready for authentic reviews as client projects complete.
// Zero fake clients, zero fake quotes, zero fake stars.
export const activeReviews: ReviewItem[] = [];

export const Reviews: React.FC<ReviewsProps> = ({ onContactClick }) => {
  const hasReviews = activeReviews.length > 0;
  const whatsappUrl = `https://wa.me/917579429886?text=${encodeURIComponent(
    "Hi Divyanshu, I came across WebWithDivyanshu and I'm interested in getting a website for my business."
  )}`;

  return (
    <section id="reviews" className="py-24 md:py-32 relative border-t border-[#EBEBEB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14 md:mb-18">
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#737373] mb-3">
            06 · Feedback
          </div>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#171717] mb-4">
            Client Reviews
          </h2>
          <p className="text-base sm:text-lg text-[#525252] font-normal max-w-xl">
            Real feedback from real clients will be added here as projects progress.
          </p>
        </div>

        {hasReviews ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeReviews.map((r, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white border border-[#E5E5E5] shadow-xs">
                <p className="text-sm text-[#171717] mb-6 italic">"{r.review}"</p>
                <div className="text-xs font-semibold text-[#171717]">{r.clientName}</div>
                <div className="text-[11px] text-[#737373]">{r.businessName}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-3xl rounded-3xl bg-white border border-[#E5E5E5] p-8 sm:p-12 text-left shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
            <div className="w-10 h-10 rounded-2xl bg-[#F5F5F5] border border-[#E5E5E5] flex items-center justify-center mb-6 text-[#F26522]">
              <MessageSquareQuote className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#F26522] bg-[#F26522]/10 px-3 py-1 rounded-full inline-block mb-4 font-semibold">
              Future Inquiries
            </span>
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#171717] mb-3">
              Your feedback could be featured here.
            </h3>
            <p className="text-sm sm:text-base text-[#525252] font-normal leading-relaxed mb-8 max-w-xl">
              Every project is handled with direct founder-level attention, thoughtful design standards, and honest communication.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wide text-white bg-[#171717] hover:bg-[#262626] transition-all duration-150 active:scale-98 shadow-xs cursor-pointer group"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-300 group-hover:text-white transition-colors" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};
