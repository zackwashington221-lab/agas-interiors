import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Layers, CheckCircle2, ArrowRight, FileText, Maximize2 } from 'lucide-react';
import { useEnquiry } from '../../context/EnquiryContext';

const PLOT_TIERS = [
  {
    size: '120 & 240 Sq. Yards',
    title: 'Urban Residential Homes',
    ideal: 'DHA, Bahria Town, Gulshan & Scheme 33',
    description: 'Precision spatial planning where every square inch counts. Multi-generational layouts, natural ventilation shafts, and smart storage circulation.',
    deliverables: ['Ground + 1st Floor 2D working maps', 'Modern 3D front elevation design', 'DHA/SBCA submission blueprints']
  },
  {
    size: '500 Sq. Yards',
    title: 'Luxury Contemporary Villas',
    ideal: 'DHA Phase 6, 7 & 8, Clifton, Overseas Enclaves',
    description: 'Bespoke open-plan living, double-height foyer architecture, basement entertainment suites, and private internal landscaped courtyards.',
    deliverables: ['Basement + Ground + 1st + Rooftop plans', 'Day & Twilight 3D elevation renders', 'Complete MEP & structural schematics']
  },
  {
    size: '1,000 & 2,000 Sq. Yards',
    title: 'Palatial Bungalows & Estates',
    ideal: 'DHA Phase 5 & 8, Old Clifton, Farmhouses',
    description: 'Grand architectural master planning. Segregated guest entertainment pavilions, multi-car underground parking, infinity pools, and expansive gardens.',
    deliverables: ['Comprehensive architectural dossier', '3D virtual video walkthrough', 'Landscape & swimming pool mapping']
  },
  {
    size: 'Commercial Plots',
    title: 'Plazas, Offices & Mixed-Use',
    ideal: 'Commercial Boulevards, Tech Parks & Corporate HQs',
    description: 'Maximum Floor Area Ratio (FAR) efficiency, fire safety compliance, high-traffic elevators, and striking corporate facade architecture.',
    deliverables: ['Multi-story retail & office maps', 'Parking & core circulation design', 'Authority approval documentation']
  }
];

export const HousePlanningSection: React.FC = () => {
  const { openProjectEnquiry } = useEnquiry();

  return (
    <section className="bg-[#FAF9F7] py-20 lg:py-28 border-b border-[#E8E0D7]">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-[#825e2d] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              <Compass className="w-3.5 h-3.5" />
              Architectural Mapping &amp; Spatial Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1A1A1A] leading-tight">
              Architectural House Plans, 2D/3D Maps &amp; Elevation Design
            </h2>
            <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed font-light">
              Before pouring concrete or laying bricks, an extraordinary home starts with an uncompromising architectural map. AGAS Interiors engineers high-performance 2D working floor plans, stunning 3D exterior elevations, and authority-approved submission sets (DHA, CBC, SBCA) for plots across Pakistan.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => openProjectEnquiry()}
              className="bg-[#1A1A1A] hover:bg-[#825e2d] text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.1em] transition-colors rounded-none shadow-sm flex items-center justify-center gap-2"
            >
              <span>Commission Your House Map</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/services/architectural-house-plans"
              className="border border-[#1A1A1A] hover:border-[#825e2d] text-[#1A1A1A] hover:text-[#825e2d] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.1em] transition-colors rounded-none text-center"
            >
              View Plan Specifications
            </Link>
          </div>
        </div>

        {/* 4 Plot Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLOT_TIERS.map((tier, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E8E0D7] rounded-xl p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-[#825e2d] bg-[#FAF5EE] border border-[#E8DFD3] px-2.5 py-1 rounded-sm uppercase tracking-wider">
                    {tier.size}
                  </span>
                  <Maximize2 className="w-4 h-4 text-stone-400 group-hover:text-[#825e2d] transition-colors" />
                </div>

                <h3 className="text-lg font-medium text-stone-900 tracking-tight">
                  {tier.title}
                </h3>
                <p className="text-[0.6875rem] font-medium text-stone-400 uppercase tracking-wider mt-1 mb-3">
                  {tier.ideal}
                </p>
                <p className="text-xs text-stone-600 font-light leading-relaxed mb-6">
                  {tier.description}
                </p>

                <div className="pt-4 border-t border-[#F2ECE4] space-y-2 mb-6">
                  <span className="text-[0.625rem] font-semibold uppercase tracking-wider text-stone-400 block mb-1">
                    Drawing Package:
                  </span>
                  {tier.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-1.5 text-xs text-stone-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#825e2d] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => openProjectEnquiry()}
                className="w-full py-2.5 bg-[#FAF9F7] hover:bg-[#1A1A1A] text-stone-800 hover:text-white border border-[#E0D8D0] hover:border-black text-xs font-semibold uppercase tracking-wider transition-colors text-center"
              >
                Inquire for {tier.size.split(' ')[0]}
              </button>
            </div>
          ))}
        </div>

        {/* What You Receive Blueprint Highlights */}
        <div className="mt-14 bg-[#1E1E1E] text-white rounded-xl p-8 sm:p-10 border border-[#2E2E2E]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#C9A96A]/10 border border-[#C9A96A]/30 flex items-center justify-center text-[#C9A96A] shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-white uppercase tracking-wider">
                  Complete Working Blueprints
                </h4>
                <p className="text-xs text-stone-300 font-light mt-1.5 leading-relaxed">
                  Every wall thickness, door swing, window schedule, and ceiling level documented for contractors to build without guesswork.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#C9A96A]/10 border border-[#C9A96A]/30 flex items-center justify-center text-[#C9A96A] shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-white uppercase tracking-wider">
                  Full MEP &amp; Structural Schematics
                </h4>
                <p className="text-xs text-stone-300 font-light mt-1.5 leading-relaxed">
                  Electrical load calculations, conduit paths, plumbing risers, sewage drainage, and beam placements coordinated to prevent future leaks.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#C9A96A]/10 border border-[#C9A96A]/30 flex items-center justify-center text-[#C9A96A] shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-white uppercase tracking-wider">
                  Bylaw &amp; Approval Compliance
                </h4>
                <p className="text-xs text-stone-300 font-light mt-1.5 leading-relaxed">
                  Pre-engineered to pass DHA Karachi, Cantonment Board (CBC), and SBCA regulations on the first submission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HousePlanningSection;
