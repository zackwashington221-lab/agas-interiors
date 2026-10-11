import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { socialGalleryItems } from '../../data/testimonials';
import { SectionLabel } from '../common/SectionLabel';

/**
 * 24. SOCIAL / INSTAGRAM SECTION
 * Title: FOLLOW THE JOURNEY
 * Asymmetrical editorial image gallery (7 images).
 * Desktop: asymmetric layout. Mobile: swipeable horizontal gallery.
 */
export const EditorialGallery: React.FC = () => {
  return (
    <section
      aria-labelledby="social-gallery-heading"
      className="py-28 sm:py-36 bg-[#F5F1E8] text-[#171717] border-t border-[#91877A]/20"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <SectionLabel index="10" label="STUDIO ARCHIVE & JOURNAL" className="mb-4" />
            <h2
              id="social-gallery-heading"
              className="font-serif-editorial text-4xl sm:text-6xl tracking-tight text-[#171717]"
            >
              FOLLOW THE JOURNEY
            </h2>
          </div>

          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.26em] text-[#4A3528] hover:text-[#171717] font-medium"
          >
            <span>@ABDULGAFFARANDSONS</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Swipeable Horizontal Gallery / Desktop Asymmetric Editorial Grid */}
        <div className="flex lg:grid lg:grid-cols-12 gap-6 overflow-x-auto lg:overflow-visible pb-6 lg:pb-0 snap-x snap-mandatory">
          {socialGalleryItems.map((item, idx) => {
            const colSpanClasses = [
              'lg:col-span-4',
              'lg:col-span-4 lg:mt-12',
              'lg:col-span-4',
              'lg:col-span-5',
              'lg:col-span-3 lg:mt-8',
              'lg:col-span-4',
              'lg:col-span-12',
            ][idx % 7];

            return (
              <Link
                key={item.id}
                to="/work"
                data-cursor="image"
                aria-label={`Explore ${item.title}`}
                className={`group relative shrink-0 w-[78vw] sm:w-[46vw] lg:w-auto snap-start overflow-hidden bg-[#D8CBB8]/30 block ${colSpanClasses}`}
              >
                <div
                  className={`relative overflow-hidden ${
                    idx === 6 ? 'aspect-[16/9] lg:aspect-[21/8]' : item.aspect
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Subtle Hover Overlay */}
                  <div className="absolute inset-0 bg-[#171717]/0 group-hover:bg-[#171717]/55 transition-colors duration-500 flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100">
                    <div className="flex justify-end">
                      <span className="w-9 h-9 rounded-full bg-[#F5F1E8] text-[#171717] flex items-center justify-center">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.26em] text-[#B49A72] block mb-1">
                        {item.category}
                      </span>
                      <p className="font-serif-editorial text-xl text-[#F5F1E8]">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
