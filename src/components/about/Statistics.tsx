import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { statistics } from '../../data/testimonials';
import { SectionLabel } from '../common/SectionLabel';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

/**
 * 22. STATISTICS
 * Large editorial typography with subtle counting animation when entering viewport.
 * Respects prefers-reduced-motion.
 */
export const Statistics: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const [counts, setCounts] = useState<number[]>(() =>
    statistics.map((s) => s.numericValue)
  );

  useEffect(() => {
    if (reducedMotion || !sectionRef.current) {
      setCounts(statistics.map((s) => s.numericValue));
      return;
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 82%',
        once: true,
        onEnter: () => {
          statistics.forEach((stat, idx) => {
            const counter = { val: 0 };
            gsap.to(counter, {
              val: stat.numericValue,
              duration: 1.6,
              ease: 'power2.out',
              onUpdate: () => {
                setCounts((prev) => {
                  const next = [...prev];
                  next[idx] = Math.round(counter.val);
                  return next;
                });
              },
            });
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      aria-label="Studio Statistics"
      className="py-24 sm:py-32 bg-[#F5F1E8] text-[#171717] border-t border-[#91877A]/20"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="mb-14">
          <SectionLabel index="08" label="STUDIO SCALE & BENCHMARKS" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {statistics.map((stat, idx) => (
            <div
              key={stat.id}
              className="border-t border-[#91877A]/35 pt-8 flex flex-col justify-between"
            >
              <div className="font-serif-editorial text-6xl sm:text-7xl lg:text-8xl tracking-tight text-[#171717] tabular-nums leading-none mb-6">
                {counts[idx]}
                <span className="text-[#B49A72]">{stat.suffix}</span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.26em] text-[#171717] font-medium">
                  {stat.label}
                </p>
                <p className="text-[11px] text-[#91877A] mt-1 font-light">{stat.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
