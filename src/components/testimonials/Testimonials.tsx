import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import { SectionLabel } from '../common/SectionLabel';

/**
 * 23. TESTIMONIALS
 * Displays one primary testimonial at a time with minimal controls and subtle background photography.
 */
export const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);
  const current = testimonials[index] || testimonials[0];

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section
      aria-label="Client Perspectives"
      className="relative py-28 sm:py-36 bg-[#171717] text-[#F5F1E8] overflow-hidden"
    >
      {/* Subtle Background Photography */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          key={current.id}
          src={current.image}
          alt={current.projectTitle}
          loading="lazy"
          className="w-full h-full object-cover opacity-20 transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/80 to-[#171717]" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between mb-16">
          <SectionLabel index="09" label="CLIENT PERSPECTIVES" light />
          <span className="text-xs uppercase tracking-[0.28em] text-[#B49A72]">
            0{index + 1} / 0{testimonials.length}
          </span>
        </div>

        <blockquote className="max-w-5xl">
          <p className="font-serif-editorial text-3xl sm:text-5xl lg:text-6xl leading-[1.12] tracking-tight text-[#F5F1E8] mb-12">
            “{current.quote}”
          </p>

          <footer className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 pt-8 border-t border-[#91877A]/25">
            <div>
              <cite className="not-italic text-xs uppercase tracking-[0.28em] text-[#F5F1E8] block font-medium">
                — {current.author}
              </cite>
              <span className="text-xs text-[#D8CBB8]/80 font-light mt-1 block">
                {current.role} · {current.projectTitle}
              </span>
            </div>

            {/* Minimal Navigation Controls */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="w-12 h-12 border border-[#91877A]/35 flex items-center justify-center text-[#F5F1E8] hover:border-[#B49A72] hover:bg-[#B49A72] hover:text-[#171717] transition-colors focus-visible:outline-2 focus-visible:outline-[#B49A72]"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next testimonial"
                className="w-12 h-12 border border-[#91877A]/35 flex items-center justify-center text-[#F5F1E8] hover:border-[#B49A72] hover:bg-[#B49A72] hover:text-[#171717] transition-colors focus-visible:outline-2 focus-visible:outline-[#B49A72]"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </footer>
        </blockquote>
      </div>
    </section>
  );
};
