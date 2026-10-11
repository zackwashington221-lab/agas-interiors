import React from 'react';
import { ContactForm } from './ContactForm';
import { SectionLabel } from '../common/SectionLabel';

/**
 * 32. PROJECT INQUIRY SECTION
 * Combines studio consultation details with the ContactForm.
 */
export const ProjectInquiry: React.FC = () => {
  return (
    <section
      aria-label="Project Inquiry and Studio Details"
      className="py-20 sm:py-28 bg-[#F5F1E8] text-[#171717]"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Studio Consultation Info */}
          <div className="lg:col-span-4 space-y-10 border-t border-[#91877A]/30 pt-8">
            <div>
              <SectionLabel index="01" label="PRIVATE CONSULTATION" className="mb-4" />
              <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#171717] mb-4">
                COMMISSIONING THE STUDIO
              </h2>
              <p className="text-sm text-[#4A3528] font-light leading-relaxed">
                We undertake a select number of residential villa transformations, bespoke
                interior architecture commissions, and commercial projects each year to ensure
                uncompromising studio focus.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-[#91877A]/25 text-xs">
              <div>
                <p className="uppercase tracking-[0.26em] text-[#91877A] mb-1.5">
                  STUDIO ATELIER
                </p>
                <p className="text-sm text-[#171717] font-medium">
                  Lahore · Islamabad · Karachi
                </p>
                <p className="text-[#4A3528] font-light mt-1">
                  DHA Phase 8 &amp; Gulberg Galleria, Lahore
                </p>
              </div>

              <div>
                <p className="uppercase tracking-[0.26em] text-[#91877A] mb-1.5">
                  DIRECT CONCIERGE
                </p>
                <p className="text-sm text-[#171717] font-medium">
                  concierge@abdulgaffarandsons.pk
                </p>
                <p className="text-[#4A3528] font-light mt-1">+92 300 8459210</p>
              </div>

              <div>
                <p className="uppercase tracking-[0.26em] text-[#91877A] mb-1.5">
                  CONSULTATION HOURS
                </p>
                <p className="text-[#4A3528] font-light">
                  Monday – Saturday · 10:00 AM – 7:00 PM PKT
                  <br />
                  By Private Appointment
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-8 bg-[#D8CBB8]/20 border border-[#91877A]/25 p-8 sm:p-12 lg:p-14">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
