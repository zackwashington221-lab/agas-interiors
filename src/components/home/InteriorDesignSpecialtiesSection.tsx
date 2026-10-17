import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, Palette, Lightbulb, Sparkles, ArrowRight, Check } from 'lucide-react';
import { useEnquiry } from '../../context/EnquiryContext';

interface RoomConcept {
  id: string;
  room: string;
  tagline: string;
  description: string;
  palette: string[];
  specs: string[];
  image: string;
}

const ROOM_CONCEPTS: RoomConcept[] = [
  {
    id: 'living',
    room: 'Architectural Living Salon',
    tagline: 'Warm Minimalist Living & Media Architecture',
    description: 'We orchestrate proportions, acoustic fluted timber walls, and low-slung tactile seating. Custom recessed cove ceilings house concealed magnetic track lights and HVAC diffusers to eliminate visual clutter.',
    palette: ['Burmese Teak', 'Italian Bouclé', 'Honed Roman Travertine', 'Brushed Bronze'],
    specs: [
      'Acoustic slatted media wall with concealed wiring',
      'Indirect 2700K warm LED perimeter illumination',
      'Seamless transition from foyer to formal salon'
    ],
    image: '/images/product-boucle-sofa.jpg'
  },
  {
    id: 'bedroom',
    room: 'Master Bedroom Sanctuary',
    tagline: 'Bespoke Headboard Architecture & Private Dressing Suites',
    description: 'A hotel-grade retreat tailored for restorative rest. Features floor-to-ceiling upholstered velvet headboards, integrated fluted walnut bedside ledges, dimmable reading sconces, and walk-through dressing closets.',
    palette: ['Smoked Walnut', 'Belgian Linen', 'Olive Velvet', 'Soft Champagne Brass'],
    specs: [
      'Floor-to-ceiling acoustic wall panelling',
      'Concealed pivot doors to en-suite bathroom',
      'Dual circuit circadian sleep lighting'
    ],
    image: '/images/master-bedroom-walnut.jpg'
  },
  {
    id: 'kitchen',
    room: 'Modular Chef Kitchen',
    tagline: 'Precision Italian Joinery & Sintered Stone Workflows',
    description: 'Kitchens engineered around how you cook, entertain, and live. Quartzite waterfall islands, handle-less push-to-open German drawers, integrated spice pantries, and concealed appliance garages.',
    palette: ['Calacatta Sintered Stone', 'Matte Anthracite', 'Natural Oak', 'Smoked Glass'],
    specs: [
      'Ergonomic chef triangle preparation flow',
      'Integrated under-cabinet LED task illumination',
      'Zero-stain, heat-resistant sintered stone counters'
    ],
    image: '/img/hero/hero-modular-kitchen.jpg'
  },
  {
    id: 'dining',
    room: 'Formal Dining & Entertaining',
    tagline: 'Statement Stone Surfaces & Architectural Lighting',
    description: 'Spaces crafted to host memorable family feasts and VIP dinners. Solid marble tables with sculptural pedestals, acoustic ceiling rafts, and bespoke back-lit bar credenzas.',
    palette: ['Arabescato Marble', 'Solid Smoked Teak', 'Full-Grain Leather', 'Patinated Brass'],
    specs: [
      'Seating configurations for 8, 10, or 14 guests',
      'Integrated wine & glassware display cabinetry',
      'Acoustic ceiling panelling to reduce dinner reverberation'
    ],
    image: '/images/product-calacatta-table.jpg'
  }
];

export const InteriorDesignSpecialtiesSection: React.FC = () => {
  const [activeConcept, setActiveConcept] = useState<RoomConcept>(ROOM_CONCEPTS[0]);
  const { openProjectEnquiry } = useEnquiry();

  return (
    <section className="bg-[#FAF9F7] py-20 lg:py-28 border-b border-[#E8E0D7]">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-[#825e2d] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Comprehensive Interior Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1A1A1A] leading-tight">
              Interior Design Driven by Spatial Intelligence
            </h2>
            <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed font-light">
              Interior design is not merely placing furniture in an empty room. At AGAS Interiors, we design the envelope: reshaping sightlines, choreographing natural and architectural lighting, designing custom ceilings, and tailoring bespoke materiality to your personal lifestyle.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => openProjectEnquiry()}
              className="bg-[#1A1A1A] hover:bg-[#825e2d] text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.1em] transition-colors rounded-none shadow-sm flex items-center justify-center gap-2"
            >
              <span>Consult an Interior Architect</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/services/interior-design"
              className="border border-[#1A1A1A] hover:border-[#825e2d] text-[#1A1A1A] hover:text-[#825e2d] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.1em] transition-colors rounded-none text-center"
            >
              Explore Design Scope
            </Link>
          </div>
        </div>

        {/* Interior Design Discipline Cards (3 Pillars) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white border border-[#E8E0D7] rounded-xl p-7 shadow-xs hover:shadow-lg transition-all">
            <div className="w-11 h-11 rounded-lg bg-[#FAF5EE] border border-[#E8DFD3] flex items-center justify-center text-[#825e2d] mb-5">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-medium text-stone-900 tracking-tight">
              Photorealistic 3D Visualizations
            </h3>
            <p className="mt-2.5 text-xs text-stone-600 font-light leading-relaxed">
              We render your exact space down to the millimeter before work begins. Experience materials, lighting behavior, and spatial layout in high-fidelity 3D modeling.
            </p>
          </div>

          <div className="bg-white border border-[#E8E0D7] rounded-xl p-7 shadow-xs hover:shadow-lg transition-all">
            <div className="w-11 h-11 rounded-lg bg-[#FAF5EE] border border-[#E8DFD3] flex items-center justify-center text-[#825e2d] mb-5">
              <Lightbulb className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-medium text-stone-900 tracking-tight">
              Architectural Lighting &amp; Ceilings
            </h3>
            <p className="mt-2.5 text-xs text-stone-600 font-light leading-relaxed">
              Eliminate harsh overhead glare. We layer ambient coves, accent wall grazers, low-glare downlights, and custom timber ceiling baffles for warm, inviting evenings.
            </p>
          </div>

          <div className="bg-white border border-[#E8E0D7] rounded-xl p-7 shadow-xs hover:shadow-lg transition-all">
            <div className="w-11 h-11 rounded-lg bg-[#FAF5EE] border border-[#E8DFD3] flex items-center justify-center text-[#825e2d] mb-5">
              <Palette className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-medium text-stone-900 tracking-tight">
              Tactile Materiality &amp; Finishes
            </h3>
            <p className="mt-2.5 text-xs text-stone-600 font-light leading-relaxed">
              Italian book-matched marble, natural European oak veneers, Venetian plaster, textured microcement, and performance bouclés curated for elegance and durability.
            </p>
          </div>
        </div>

        {/* Interactive Room Concepts Showcase */}
        <div className="bg-white border border-[#E8E0D7] rounded-2xl overflow-hidden shadow-xs">
          {/* Room Selector Tabs */}
          <div className="flex border-b border-[#E8E0D7] overflow-x-auto scrollbar-none bg-[#FAF9F7]">
            {ROOM_CONCEPTS.map(rc => {
              const isActive = activeConcept.id === rc.id;
              return (
                <button
                  key={rc.id}
                  onClick={() => setActiveConcept(rc)}
                  className={`px-6 py-4 text-xs font-semibold uppercase tracking-[0.1em] whitespace-nowrap transition-all border-b-2 -mb-[2px] ${
                    isActive
                      ? 'border-[#825e2d] text-[#825e2d] bg-white'
                      : 'border-transparent text-stone-500 hover:text-stone-900'
                  }`}
                >
                  {rc.room}
                </button>
              );
            })}
          </div>

          {/* Active Room Detail Panel */}
          <div className="p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <span className="text-[0.6875rem] font-semibold text-[#825e2d] uppercase tracking-[0.16em] block mb-2">
                  {activeConcept.tagline}
                </span>
                <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-stone-900 leading-snug">
                  {activeConcept.room} Architecture
                </h3>
                <p className="mt-4 text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                  {activeConcept.description}
                </p>

                {/* Material Palette Tags */}
                <div className="mt-6 pt-5 border-t border-[#F0EAE2]">
                  <span className="text-[0.625rem] font-semibold uppercase tracking-wider text-stone-400 block mb-2">
                    Curated Material Palette:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeConcept.palette.map((mat, mIdx) => (
                      <span
                        key={mIdx}
                        className="bg-[#FAF5EE] text-[#825e2d] border border-[#E8DFD3] text-xs px-3 py-1 rounded-sm font-medium"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Spatial Specs */}
                <div className="mt-6 space-y-2">
                  {activeConcept.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs text-stone-700">
                      <Check className="w-3.5 h-3.5 text-[#825e2d] shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#F0EAE2] flex items-center gap-4">
                <button
                  onClick={() => openProjectEnquiry()}
                  className="bg-[#1A1A1A] hover:bg-[#825e2d] text-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] transition-colors"
                >
                  Commission This Space
                </button>
                <Link
                  to="/services/interior-design"
                  className="text-xs font-semibold uppercase tracking-[0.08em] text-[#825e2d] hover:underline"
                >
                  View Full Portfolio &rarr;
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-6">
              <div className="aspect-4/3 rounded-xl overflow-hidden bg-stone-900 border border-[#E8E0D7] shadow-md relative group">
                <img
                  src={activeConcept.image}
                  alt={activeConcept.room}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[0.625rem] uppercase tracking-wider text-[#E8D7B8] font-semibold">
                    AGAS Interior Commission
                  </span>
                  <h4 className="text-sm font-medium text-white mt-0.5">
                    {activeConcept.room} &bull; DHA Karachi
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteriorDesignSpecialtiesSection;
