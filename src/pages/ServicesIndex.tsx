import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../data/services';
import { ArrowRight, CheckCircle2, Compass, ShieldCheck, Hammer } from 'lucide-react';
import { useEnquiry } from '../context/EnquiryContext';

export const ServicesIndex: React.FC = () => {
  const { openProjectEnquiry } = useEnquiry();

  return (
    <div className="bg-[#FAF9F7] min-h-screen py-12 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[0.6875rem] font-semibold tracking-[0.14em] uppercase text-[#806B54]">
            Comprehensive Architectural Capabilities
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#202321] mt-2 leading-tight">
            We Design. We Create. We Transform.
          </h1>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#6B6B65]">
            From bespoke furniture and refined interior architecture to complete turnkey renovations and outdoor retreats, we bring every trade together under one roof in Karachi.
          </p>
        </div>

        {/* 7 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {SERVICES.map((service, idx) => (
            <article
              key={service.id}
              className="bg-white border border-[#B9B3A8] overflow-hidden group flex flex-col justify-between transition-all hover:border-[#806B54]"
            >
              <div>
                {/* Visual Header */}
                <div className="relative aspect-16/10 overflow-hidden bg-stone-200">
                  <img
                    src={service.gallery[0]?.url || '/img/tile/bedroom-furniture.webp'}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-[#202321] text-white text-[0.625rem] font-semibold px-2.5 py-1 uppercase tracking-wider">
                    0{idx + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h2 className="text-lg font-medium text-[#202321] group-hover:text-[#806B54] transition-colors leading-snug">
                    <Link to={`/services/${service.slug}`}>
                      {service.name}
                    </Link>
                  </h2>
                  <p className="mt-2 text-xs leading-relaxed text-[#6B6B65] line-clamp-3">
                    {service.summary}
                  </p>

                  {/* Highlights list */}
                  <ul className="mt-4 pt-4 border-t border-[#E6E2DC] space-y-2 text-xs text-stone-700">
                    {service.inclusions.slice(0, 3).map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#806B54] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action */}
              <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2">
                <Link
                  to={`/services/${service.slug}`}
                  className="w-full inline-flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#202321] hover:text-[#806B54] transition-colors border-t border-[#E6E2DC] pt-4"
                >
                  <span>Explore Service Scope</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Turnkey Property Transformation Spotlight */}
        <div className="bg-[#202321] text-stone-200 p-8 sm:p-12 lg:p-16 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="text-[0.6875rem] font-semibold tracking-[0.16em] uppercase text-[#9A8C70]">
                Whole-Property Turnkey Execution
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white mt-2 leading-tight">
                Single-Contract Accountability for Your Entire Property
              </h2>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-stone-300">
                Coordinating multiple independent contractors for flooring, ceilings, carpentry, electrical, and landscaping inevitably leads to finger-pointing and delays. We assign one senior project director who manages every trade from initial demolition to bespoke furniture placement.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#9A8C70]" />
                  <span>Integrated Architectural Drawings</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#9A8C70]" />
                  <span>Fixed-Price Itemized BOQ</span>
                </div>
                <div className="flex items-center gap-2">
                  <Hammer className="w-4 h-4 text-[#9A8C70]" />
                  <span>In-House Carpentry Workshops</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9A8C70]" />
                  <span>Milestone-Based Handover</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => openProjectEnquiry()}
                  className="bg-[#FAF9F7] text-[#202321] px-7 py-3 text-xs font-semibold uppercase tracking-wider hover:bg-[#806B54] hover:text-white transition-colors"
                >
                  Start a Turnkey Project Brief
                </button>
                <Link
                  to="/projects"
                  className="border border-white/60 text-white px-7 py-3 text-xs font-semibold uppercase tracking-wider hover:bg-white hover:text-[#202321] transition-colors"
                >
                  View Completed Projects
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 aspect-4/3 overflow-hidden bg-stone-800">
              <img
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80"
                alt="Turnkey Property Transformation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* 6-Step Architectural Working Process */}
        <div className="border-t border-[#B9B3A8] pt-16">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[0.6875rem] font-semibold tracking-[0.12em] uppercase text-[#806B54]">
              The Execution Blueprint
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium text-[#202321] mt-1">
              How We Work With You
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Initial Consultation",
                desc: "Discovery conversation at our D.H.A. showroom or virtually to understand your aesthetic vision, timeline, and preliminary budget."
              },
              {
                num: "02",
                title: "Site Assessment in Karachi",
                desc: "Laser survey, structural inspection, and light study at your property to identify spatial challenges and exact measurements."
              },
              {
                num: "03",
                title: "Design Concept & BOQ",
                desc: "3D architectural visualizations, space plans, material palettes, and a transparent itemized quotation."
              },
              {
                num: "04",
                title: "Client Review & Approval",
                desc: "Physical inspection of fabric swatches, wood finishes, and marble slabs before signing off on execution drawings."
              },
              {
                num: "05",
                title: "Manufacturing & Site Execution",
                desc: "Precision carpentry in our Karachi facilities and on-site MEP, ceiling, and surface finishing under full-time supervision."
              },
              {
                num: "06",
                title: "Inspection & Turnkey Handover",
                desc: "Deep cleaning, white-glove furniture styling, hardware commissioning, and presentation of the 10-year warranty certificate."
              }
            ].map(step => (
              <div key={step.num} className="bg-white p-6 sm:p-8 border border-[#B9B3A8]">
                <span className="font-mono text-xl font-semibold text-[#806B54]">{step.num}</span>
                <h3 className="text-base font-semibold text-[#202321] mt-2 mb-2">{step.title}</h3>
                <p className="text-xs leading-relaxed text-[#6B6B65]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServicesIndex;
