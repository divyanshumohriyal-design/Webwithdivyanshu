import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export interface LoopingWordsProps {
  words?: string[];
  className?: string;
  wordClassName?: string;
  pauseDuration?: number; // seconds to pause on each word (default: 2.2)
  transitionDuration?: number; // seconds for the slide transition (default: 0.6)
  highlightColor?: string;
}

export const LoopingWords: React.FC<LoopingWordsProps> = ({
  words = ['Salons', 'Cafes', 'Gyms', 'Clinics', 'Businesses'],
  className = '',
  wordClassName = '',
  pauseDuration = 2.2,
  transitionDuration = 0.6,
  highlightColor = '#F26522',
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const trackRef = useRef<HTMLSpanElement>(null);
  const measureContainerRef = useRef<HTMLSpanElement>(null);
  const [widths, setWidths] = useState<number[]>([]);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [ready, setReady] = useState(false);

  // Append first word at the end to create a seamless infinite loop
  const displayWords = [...words, words[0]];

  // Check prefers-reduced-motion
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  // Measure word widths accurately
  useEffect(() => {
    const measure = () => {
      if (!measureContainerRef.current) return;
      const spans = measureContainerRef.current.children;
      const measured: number[] = [];
      for (let i = 0; i < spans.length; i++) {
        const span = spans[i] as HTMLElement;
        // add 2px buffer to prevent any subpixel truncation
        measured.push(Math.ceil(span.getBoundingClientRect().width) + 2);
      }
      if (measured.length === words.length) {
        setWidths(measured);
        setReady(true);
      }
    };

    measure();

    // Re-measure when document fonts are loaded
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(measure);
    }

    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [words]);

  // GSAP Animation lifecycle
  useEffect(() => {
    if (!ready || isReducedMotion || widths.length !== words.length) return;
    if (!containerRef.current || !trackRef.current) return;

    // Set initial width
    gsap.set(containerRef.current, { width: widths[0] });
    gsap.set(trackRef.current, { yPercent: 0 });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        repeat: -1,
        defaults: { ease: 'power2.inOut' },
      });

      const totalItems = words.length;

      for (let i = 0; i < totalItems; i++) {
        const nextIndex = i + 1;
        const targetPercent = -(nextIndex * 100);
        const targetWidth = widths[nextIndex % totalItems];

        // Slide up and smoothly morph width simultaneously
        tl.to(
          trackRef.current,
          {
            yPercent: targetPercent,
            duration: transitionDuration,
          },
          `+=${pauseDuration}`
        ).to(
          containerRef.current,
          {
            width: targetWidth,
            duration: transitionDuration,
          },
          '<'
        );
      }

      // Seamless instantaneous jump back to 0% after reaching duplicate of word 0
      tl.set(trackRef.current, { yPercent: 0 });
      tl.set(containerRef.current, { width: widths[0] });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [ready, isReducedMotion, widths, words, pauseDuration, transitionDuration]);

  // Fallback if reduced motion is enabled
  if (isReducedMotion) {
    return (
      <span
        className={`inline-block font-semibold transition-colors ${className}`}
        style={{ color: highlightColor }}
      >
        Businesses
      </span>
    );
  }

  return (
    <>
      {/* Hidden off-screen measurement spans */}
      <span
        ref={measureContainerRef}
        aria-hidden="true"
        className="fixed -left-[9999px] -top-[9999px] opacity-0 pointer-events-none select-none invisible whitespace-nowrap"
      >
        {words.map((w, idx) => (
          <span
            key={idx}
            className={`inline-block px-1 font-semibold ${wordClassName}`}
          >
            {w}
          </span>
        ))}
      </span>

      {/* Visible Looping Words Container */}
      <span
        ref={containerRef}
        aria-label={words.join(', ')}
        className={`relative inline-flex overflow-hidden align-baseline text-left select-none will-change-[width] ${className}`}
        style={{
          height: '1.18em',
          verticalAlign: '-0.14em',
          width: widths.length > 0 ? `${widths[0]}px` : 'auto',
          minWidth: widths.length > 0 ? `${widths[0]}px` : '4ch',
        }}
      >
        <span
          ref={trackRef}
          className="flex flex-col w-full will-change-transform"
        >
          {displayWords.map((word, index) => (
            <span
              key={`${word}-${index}`}
              className={`h-[1.18em] flex items-center justify-start whitespace-nowrap px-1 font-semibold transition-colors leading-none ${wordClassName}`}
              style={{ color: highlightColor }}
            >
              {word}
            </span>
          ))}
        </span>
      </span>
    </>
  );
};
