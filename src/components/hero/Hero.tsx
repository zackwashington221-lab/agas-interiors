import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { HeroMedia } from './HeroMedia';
import { ScrollIndicator } from './ScrollIndicator';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface HeroProps {
  ready?: boolean;
}

/**
 * 13. HERO SECTION & 14. HERO ANIMATION CHOREOGRAPHY
 * Full viewport 100svh, line-by-line headline reveal, supporting disciplines, and dual CTAs.
 */
export const Hero: React.FC<HeroProps> = ({ ready = true }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!ready || reducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.hero-line-inner',
        { yPercent: 35, opacity: 1 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.06,
        },
        0
      )
        .fromTo(
          '.hero-supporting',
          { y: 12, opacity: 1 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.05 },
          0.05
        )
        .fromTo(
          '.hero-cta-group',
          { y: 12, opacity: 1 },
          { y: 0, opacity: 1, duration: 0.5 },
          0.1
        );
    }, sectionRef);

    return () => ctx.revert();
  }, [ready, reducedMotion]);

  const headlineLines = ['CRAFTING', 'SPACES', 'THAT FEEL', 'TIMELESS.'];

  return (
    <section
      ref={sectionRef}
      aria-label="Hero Introduction"
      className="relative h-[100svh] min-h-[640px] max-h-[1080px] w-full flex flex-col justify-end bg-[#171717] text-[#F5F1E8] pt-28 pb-12 sm:pb-16 overflow-hidden"
    >
      <HeroMedia ready={ready} />

      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          {/* Left Editorial Display Headline */}
          <div className="lg:col-span-8">
            <p className="hero-supporting text-[11px] uppercase tracking-[0.34em] text-[#D8CBB8] mb-6">
              ABDUL GAFFAR &amp; SONS · ARCHITECTURE &amp; DESIGN STUDIO
            </p>

            <h1 className="font-serif-editorial text-5xl sm:text-7xl md:text-8xl lg:text-[6.4rem] leading-[0.93] tracking-tight text-[#F5F1E8] uppercase">
              {headlineLines.map((line) => (
                <span key={line} className="block overflow-hidden pb-1">
                  <span className="hero-line-inner block">{line}</span>
                </span>
              ))}
            </h1>
          </div>

          {/* Right Supporting Disciplines & CTAs */}
          <div className="lg:col-span-4 flex flex-col justify-end lg:pb-2">
            <div className="hero-supporting border-l border-[#B49A72]/60 pl-5 space-y-1.5 text-sm sm:text-base text-[#F5F1E8]/90 font-light tracking-wide mb-9">
              <p>Interior Architecture</p>
              <p>Furniture</p>
              <p>Landscape</p>
            </div>

            <div className="hero-cta-group flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/work"
                data-cursor="project"
                className="group inline-flex items-center justify-center gap-3 bg-[#F5F1E8] text-[#171717] px-7 py-4 text-xs uppercase tracking-[0.22em] font-medium hover:bg-[#B49A72] hover:text-[#0D0D0D] transition-colors duration-500"
              >
                <span>EXPLORE OUR WORK</span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>

              <Link
                to="/contact"
                data-cursor="cta"
                className="inline-flex items-center justify-center border border-[#F5F1E8]/45 text-[#F5F1E8] px-7 py-4 text-xs uppercase tracking-[0.22em] font-medium hover:bg-[#F5F1E8]/15 transition-colors duration-500"
              >
                START A PROJECT
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Scroll Indicator */}
        <div className="hero-scroll-indicator mt-12 pt-6 border-t border-[#F5F1E8]/15 flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-[0.28em] text-[#D8CBB8]/80">
            LAHORE · ISLAMABAD · KARACHI
          </span>
          <ScrollIndicator />
        </div>
      </div>
    </section>
  );
};
