import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useEnquiry } from '../../context/EnquiryContext';

interface Sector {
  id: string;
  title: string;
  badge: string;
  subtitle: string;
  description: string;
  scope: string[];
  image: string;
  link: string;
}

const SECTORS: Sector[] = [
  {
    id: 'bungalows',
    title: 'Luxury Bungalows & Villas',
    badge: 'Turnkey Residential',
    subtitle: 'From 500 Sq.Yd to 2,000 Sq.Yd Estates in DHA & Clifton',
    description: 'Complete architectural transformation of existing structures. We re-engineer layouts, replace dated plumbing/wiring, install double-height architectural woodwork, and deliver luxury turnkey living.',
    scope: [
      'Structural reconfiguration & layout optimization',
      'Solid Burma teak & American walnut joinery',
      'Imported Italian marble flooring & bathrooms',
      'Terrace gardens & poolside pergolas'
    ],
    image: '/assets/images/projects/marble-villa.webp',
    link: '/services/home-renovation'
  },
  {
    id: 'apartments',
    title: 'Apartments & Penthouses',
    badge: 'Urban Architecture',
    subtitle: 'High-Rise Seafront & City Living across Karachi',
    description: 'Maximizing square footage with tailored spatial intelligence. Custom flush cabinetry, modular chef kitchens, acoustic slatted walls, and ambient indirect lighting designed for luxury apartment life.',
    scope: [
      'Concealed storage & walk-in dressing rooms',
      'Modular European-grade kitchen systems',
      'Acoustic fluted panelling & ceiling coves',
      'Turnkey MEP, HVAC & smart lighting'
    ],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    link: '/services/interior-design'
  },
  {
    id: 'offices',
    title: 'Corporate Offices & Workspaces',
    badge: 'Commercial Fitouts',
    subtitle: 'Executive Suites, Boardrooms & Commercial Sites',
    description: 'Refined, brand-defining commercial interiors engineered to inspire teams and impress global clientele. Delivered with strict timeline commitments and minimal client operational downtime.',
    scope: [
      'Executive wood-panelled boardrooms & conference hubs',
      'Acoustic wood slat walls & architectural ceilings',
      'Ergonomic workstation pods & reception counters',
      'Fire-rated doors, data cabling & HVAC zoning'
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    link: '/services/interior-design'
  },
  {
    id: 'sites',
    title: 'Complete Site & Turnkey Renovations',
    badge: 'End-to-End Build',
    subtitle: 'Grey Structure to White-Glove Handover',
    description: 'A single, accountable point of contact for your entire property. We handle civil masonry, electrical, plumbing, waterproofing, ceiling work, custom woodwork, and final designer styling.',
    scope: [
      'Zero subcontractor headaches — 100% managed',
      'Fixed-price milestone contracts & guaranteed timelines',
      'Daily site supervision & video progress updates',
      '5-Year structural & woodwork guarantee'
    ],
    image: '/assets/images/projects/oak-house.webp',
    link: '/services/home-renovation'
  }
];

export const RenovationSectorsSection: React.FC = () => {
  const { openProjectEnquiry } = useEnquiry();

  return (
    <section className="bg-[#FAF9F7] py-20 lg:py-28 border-b border-[#E8E0D7]">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow text-[#825e2d] mb-2 block tracking-[0.16em]">
              Comprehensive Architectural Renovations
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1A1A1A] leading-tight">
              Bungalows, Apartments &amp; Corporate Sites
            </h2>
            <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed font-light">
              Whether reviving a legacy family bungalow in DHA, transforming a seafront penthouse in Clifton, or executing a high-stakes corporate headquarters, AGAS Interiors delivers turnkey mastery from initial 3D plans to final woodwork installation.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => openProjectEnquiry()}
              className="bg-[#1A1A1A] hover:bg-[#C9A96A] text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.1em] transition-colors rounded-none shadow-sm flex items-center justify-center gap-2"
            >
              Book Site Assessment
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <Link
              to="/projects"
              className="border border-[#1A1A1A] hover:border-[#C9A96A] text-[#1A1A1A] hover:text-[#C9A96A] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.1em] transition-colors rounded-none text-center"
            >
              View Renovation Projects
            </Link>
          </div>
        </div>

        {/* 4 Sectors 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SECTORS.map(sector => (
            <div
              key={sector.id}
              className="group relative bg-white border border-[#E8E0D7] rounded-xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Banner */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-900">
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className="bg-[#1A1A1A]/85 backdrop-blur-xs text-[#C9A96A] border border-white/10 px-3 py-1 text-[0.6875rem] font-semibold tracking-[0.12em] uppercase rounded-sm">
                    {sector.badge}
                  </span>
                </div>

                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="text-[0.7rem] font-medium tracking-wider uppercase text-stone-300 block mb-1">
                    {sector.subtitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white leading-snug">
                    {sector.title}
                  </h3>
                </div>
              </div>

              {/* Scope & Description */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light mb-6">
                    {sector.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-[#F0EAE2] mb-6">
                    <span className="text-[0.6875rem] font-semibold uppercase tracking-wider text-stone-400 block mb-1">
                      Key Turnkey Capabilities:
                    </span>
                    {sector.scope.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A96A] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F0EAE2] flex items-center justify-between">
                  <button
                    onClick={() => openProjectEnquiry()}
                    className="text-xs font-semibold uppercase tracking-[0.1em] text-[#1A1A1A] hover:text-[#C9A96A] transition-colors inline-flex items-center gap-1.5"
                  >
                    Discuss Your {sector.title.split(' ')[0]} &rarr;
                  </button>
                  <Link
                    to={sector.link}
                    className="text-[0.7rem] font-medium text-stone-400 hover:text-stone-800 transition-colors uppercase tracking-wider"
                  >
                    View Scope Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RenovationSectorsSection;
