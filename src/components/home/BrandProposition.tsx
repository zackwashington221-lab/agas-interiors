import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, Compass, Hammer, ArrowRight } from 'lucide-react';
import { useEnquiry } from '../../context/EnquiryContext';

const PILLARS = [
  {
    step: "01",
    title: "WE DESIGN",
    icon: Compass,
    subtitle: "Spatial Planning & Interior Architecture",
    description: "Every room starts with scale, light, and flow. We produce precise architectural layout plans, 3D photorealistic visualisations, ceiling elevations, and material schedules before fabrication begins.",
    linkText: "Explore Design Services",
    linkHref: "/services/interior-design"
  },
  {
    step: "02",
    title: "WE CREATE",
    icon: Hammer,
    subtitle: "Bespoke Joinery & Custom Furniture Manufacturing",
    description: "From solid American walnut bed suites and marble-top sintered dining tables to handleless Italian-style kitchen cabinetry, every single piece is manufactured with millimeter accuracy in our dedicated workshops.",
    linkText: "Discover Custom Furniture",
    linkHref: "/services/custom-furniture"
  },
  {
    step: "03",
    title: "WE TRANSFORM",
    icon: Palette,
    subtitle: "Turnkey Property Renovations & Site Execution",
    description: "We don't leave you managing multiple sub-contractors. Our in-house site supervisors handle civil masonry, gypsum ceilings, precision marble laying, MEP wiring, and final white-glove staging.",
    linkText: "View Turnkey Renovations",
    linkHref: "/services/home-renovation"
  }
];

export const BrandProposition: React.FC = () => {
  const { openProjectEnquiry } = useEnquiry();

  return (
    <section className="py-20 lg:py-28 bg-[#202321] text-[#F5F3EE] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-[0.6875rem] font-semibold tracking-[0.16em] uppercase text-[#B9B3A8]">
            Architectural Philosophy &amp; Integrated Model
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mt-2 text-[#F5F3EE]">
            Design. Create. Transform.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#B9B3A8] leading-relaxed">
            Unlike retail outlets reselling generic imported flatpacks, AGAS Interiors operates an integrated architectural studio and precision manufacturing workshop based in Karachi.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-white/5 border border-white/10 rounded-xl p-8 sm:p-10 flex flex-col justify-between hover:border-[#806B54] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/30 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-mono font-semibold tracking-widest text-[#9A8C70]">
                      {pillar.step}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#B9B3A8] group-hover:text-white group-hover:bg-[#806B54] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-medium tracking-wide text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#9A8C70] mt-1 mb-4">
                    {pillar.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#B9B3A8] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <Link
                    to={pillar.linkHref}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-white hover:text-[#9A8C70] transition-colors"
                  >
                    <span>{pillar.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Integrated CTA Banner */}
        <div className="mt-16 p-8 sm:p-10 bg-white/5 border border-white/10 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h4 className="text-base sm:text-lg font-medium text-white">
              Planning a renovation or furnishing a new property in Karachi?
            </h4>
            <p className="text-xs sm:text-sm text-[#B9B3A8] mt-1">
              Consult directly with our studio team at our Khayaban-e-Sehar showroom or schedule a site inspection.
            </p>
          </div>
          <button
            type="button"
            onClick={() => openProjectEnquiry()}
            className="whitespace-nowrap px-6 py-3.5 bg-[#806B54] hover:bg-[#9A8C70] text-white text-xs font-semibold uppercase tracking-[0.12em] rounded-md transition-colors"
          >
            Start Your Project Brief
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrandProposition;
