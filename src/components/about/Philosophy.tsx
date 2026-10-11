import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { SectionLabel } from '../common/SectionLabel';
import { revealText } from '../../animations/gsapAnimations';
import { useReducedMotion } from '../../hooks/useReducedMotion';

/**
 * 16. PHILOSOPHY SECTION
 * Typography-focused editorial statement with generous whitespace.
 */
export const Philosophy: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !sectionRef.current) return;
    const ctx = gsap.context(() => {
      revealText('.philosophy-reveal', sectionRef.current, {
        stagger: 0.12,
        y: 36,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="philosophy-heading"
      className="py-32 sm:py-44 bg-[#F5F1E8] text-[#171717] border-t border-[#91877A]/20"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-3">
            <SectionLabel index="02" label="STUDIO PHILOSOPHY" />
          </div>

          <div className="lg:col-span-9">
            <h2
              id="philosophy-heading"
              className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] leading-[0.98] tracking-tight text-[#171717] uppercase mb-14"
            >
              <span className="philosophy-reveal block">WE DON&apos;T DECORATE</span>
              <span className="philosophy-reveal block mb-6">SPACES.</span>
              <span className="philosophy-reveal block text-[#4A3528] italic font-normal">
                WE DEFINE
              </span>
              <span className="philosophy-reveal block text-[#4A3528] italic font-normal">
                HOW THEY FEEL.
              </span>
            </h2>

            <div className="philosophy-reveal grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-[#91877A]/25">
              <p className="text-base sm:text-lg text-[#171717]/90 font-light leading-relaxed">
                True luxury is never loud. It lives in the quiet weight of a solid walnut door,
                the continuous vein of honed Italian stone underfoot, and the way late-afternoon
                light grazes a hand-troweled lime wall.
              </p>
              <p className="text-sm sm:text-base text-[#4A3528] font-light leading-relaxed">
                At Abdul Gaffar &amp; Sons, architecture, interior design, custom furniture, and
                landscape are conceived as a single unbroken discipline—crafted in-house and
                executed with enduring architectural rigor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
