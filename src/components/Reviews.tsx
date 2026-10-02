import React from 'react';
import { ArrowUpRight } from 'lucide-react';

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
// Intentionally empty: zero fake clients, zero fake quotes.
export const activeReviews: ReviewItem[] = [];

export const Reviews: React.FC<ReviewsProps> = ({ onContactClick }) => {
  const hasReviews = activeReviews.length > 0;

  return (
    <section id="reviews" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14 md:mb-18">
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#86868B] mb-3">
            06 · Feedback
          </div>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#1D1D1F] mb-4">
            Client Reviews
          </h2>
          <p className="text-base sm:text-lg text-[#6E6E73] font-normal max-w-xl">
            Real feedback from real projects will live here.
          </p>
        </div>

        {hasReviews ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeReviews.map((r, i) => (
              <div key={i} className="p-8 rounded-2xl bg-[#FFFDF7] border border-[#E8E2D5] shadow-xs">
                <p className="text-sm text-[#1D1D1F] mb-6 italic">"{r.review}"</p>
                <div className="text-xs font-semibold text-[#1D1D1F]">{r.clientName}</div>
                <div className="text-[11px] text-[#86868B]">{r.businessName}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-2xl rounded-3xl bg-[#FFFDF7] border border-[#E8E2D5] p-8 sm:p-12 text-left shadow-[0_8px_30px_rgba(40,30,20,0.03)]">
            <span className="text-[11px] font-mono uppercase tracking-widest text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60 inline-block mb-4 font-semibold">
              Future Inquiries
            </span>
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D1D1F] mb-3">
              Your feedback could be featured here.
            </h3>
            <p className="text-sm sm:text-base text-[#6E6E73] font-normal leading-relaxed mb-8">
              Every project is handled with direct founder-level attention, thoughtful design standards, and honest communication.
            </p>
            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wide text-white bg-[#1D1D1F] hover:bg-[#2C2C2E] transition-all duration-150 active:scale-98 shadow-xs cursor-pointer"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
