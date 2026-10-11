import React from 'react';
import { images } from '../../data/images';
import { teamMembers } from '../../data/team';
import { SectionLabel } from '../common/SectionLabel';
import { ImageReveal } from '../common/ImageReveal';

/**
 * 31. ABOUT PAGE — STUDIO & CRAFTSMANSHIP SECTIONS
 */
export const Studio: React.FC = () => {
  return (
    <div className="bg-[#F5F1E8] text-[#171717]">
      {/* Craftsmanship & Workshop Section */}
      <section className="py-24 sm:py-32 border-t border-[#91877A]/20">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <SectionLabel index="03" label="ATELIER & CRAFTSMANSHIP" className="mb-4" />
              <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl leading-[0.98] tracking-tight text-[#171717] mb-8">
                IN-HOUSE JOINERY,
                <br />
                QUARRY STONE &amp;
                <br />
                MASTER EXECUTION.
              </h2>
              <p className="text-sm sm:text-base text-[#4A3528] font-light leading-relaxed mb-6">
                Unlike design-only consultancies that hand drawings over to fragmented
                sub-contractors, Abdul Gaffar &amp; Sons operates its own woodworking atelier,
                stone masonry unit, and surface finishing teams.
              </p>
              <p className="text-sm sm:text-base text-[#4A3528] font-light leading-relaxed">
                Every American walnut louver, bookmatched Calacatta threshold, and curved bouclé
                sofa is prototyped, seasoned, and installed by craftsmen who share a single standard
                of architectural permanence.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-12 gap-6 items-end">
              <div className="col-span-7">
                <ImageReveal
                  src={images.categories.woodDetail}
                  alt="Precision fluted walnut woodwork crafted in the studio workshop"
                  aspectClass="aspect-[4/5]"
                />
              </div>
              <div className="col-span-5">
                <ImageReveal
                  src={images.categories.marbleDetail}
                  alt="Bookmatched Italian Calacatta marble honing and inspection"
                  aspectClass="aspect-[3/4]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Leadership / Team */}
      <section className="py-24 sm:py-32 bg-[#D8CBB8]/25 border-t border-[#91877A]/20">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div>
              <SectionLabel index="04" label="LEADERSHIP" className="mb-4" />
              <h2 className="font-serif-editorial text-4xl sm:text-6xl tracking-tight text-[#171717]">
                ARCHITECTS &amp;
                <br />
                DIRECTORS.
              </h2>
            </div>
            <p className="text-sm text-[#4A3528] max-w-md font-light leading-relaxed">
              Structured studio leadership placeholders ready for principal portraits and biographies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {teamMembers.map((member, index) => (
              <article key={member.id} className="group border-t border-[#91877A]/30 pt-6">
                <span className="text-[10px] uppercase tracking-[0.26em] text-[#91877A] block mb-4">
                  0{index + 1} · {member.role}
                </span>
                <div className="aspect-[4/5] overflow-hidden bg-[#D8CBB8]/40 mb-5">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale-[25%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
                  />
                </div>
                <h3 className="font-serif-editorial text-2xl text-[#171717] mb-1">
                  {member.name}
                </h3>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#4A3528] mb-3">
                  {member.specialty}
                </p>
                <p className="text-xs text-[#4A3528]/85 font-light leading-relaxed">
                  {member.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
