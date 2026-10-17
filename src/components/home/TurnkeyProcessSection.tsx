import React from 'react';
import { Compass, Eye, Hammer, KeyRound, CheckCircle2, ArrowRight } from 'lucide-react';
import { useEnquiry } from '../../context/EnquiryContext';

const STEPS = [
  {
    number: '01',
    icon: Compass,
    title: 'Site Survey & Spatial Audit',
    duration: 'Week 1',
    description: 'We visit your bungalow, apartment, or commercial site in Karachi. We take laser-accurate measurements, audit electrical/plumbing infrastructure, and map out optimal traffic flows.'
  },
  {
    number: '02',
    icon: Eye,
    title: '3D Renders & Material Board',
    duration: 'Week 2',
    description: 'Before any hammer falls, you walk through photorealistic 3D architectural renders of your finished space and review tangible timber, veneer, stone, and upholstery samples.'
  },
  {
    number: '03',
    icon: Hammer,
    title: 'In-House Factory Fabrication',
    duration: 'Weeks 3–5',
    description: 'Zero third-party carpenters. All custom joinery, slatted wall panels, modular kitchens, and bespoke furniture are fabricated inside our Karachi workshop to millimetric precision.'
  },
  {
    number: '04',
    icon: KeyRound,
    title: 'Turnkey Fitout & Handover',
    duration: 'Weeks 6–8',
    description: 'Our senior site engineers oversee on-site installation, MEP connections, and white-glove styling. Delivered on time with a comprehensive 5-Year Structural Guarantee.'
  }
];

export const TurnkeyProcessSection: React.FC = () => {
  const { openProjectEnquiry } = useEnquiry();

  return (
    <section id="process" className="bg-[#FAF9F7] py-20 lg:py-28 border-b border-[#E8E0D7]">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow text-[#825e2d] mb-2 block tracking-[0.16em]">
            Transparent &bull; Structured &bull; Guaranteed
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1A1A1A] leading-tight">
            Our 4-Step Turnkey Renovation Process
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
            Eliminate the stress, cost overruns, and contractor delays common in Pakistan. We provide a single accountable team from initial floor plans to final handover.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E8E0D7] rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl sm:text-3xl font-light text-[#C9A96A] tracking-tight">
                      {step.number}
                    </span>
                    <span className="text-[0.6875rem] font-semibold uppercase tracking-wider text-stone-400 bg-stone-100 px-2.5 py-1 rounded-xs">
                      {step.duration}
                    </span>
                  </div>

                  <div className="w-11 h-11 rounded-lg bg-[#FAF5EE] border border-[#E8DFD3] flex items-center justify-center text-[#825e2d] mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-medium text-stone-900 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-xs text-stone-600 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F2ECE4] flex items-center gap-1.5 text-[0.6875rem] font-medium text-[#825e2d]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Fixed Milestones</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={() => openProjectEnquiry()}
            className="bg-[#1A1A1A] hover:bg-[#C9A96A] text-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.1em] transition-colors rounded-none shadow-sm inline-flex items-center gap-2"
          >
            <span>Book Your Free Step 1 Site Survey</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TurnkeyProcessSection;
