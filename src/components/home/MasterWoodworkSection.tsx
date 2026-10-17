import React from 'react';
import { Link } from 'react-router-dom';
import { Hammer, Sparkles, ArrowRight, Cpu } from 'lucide-react';
import { useEnquiry } from '../../context/EnquiryContext';

const WOODWORK_SPECIALTIES = [
  {
    title: 'Solid Teak & Walnut Joinery',
    tag: 'Timber Mastery',
    description: 'We exclusively procure seasoned Grade-A Burmese teak, American walnut, and white oak. Kiln-dried to 8–10% moisture content to eliminate swelling, warping, and shrinkage in Pakistan’s coastal humidity.',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80',
    features: ['Hand-scraped grain matching', 'Traditional mortise & tenon joints', 'Matte Italian PU & natural oil finishes']
  },
  {
    title: 'Fluted Walls & Architectural Slats',
    tag: 'Wall Panelling',
    description: 'Transforming plain masonry into textured, acoustic wooden sanctuaries. Seamless floor-to-ceiling slatted panelling with integrated LED channels, concealed doorways, and sound-dampening acoustic cores.',
    image: '/images/wpc-fluted-wall.jpg',
    features: ['Hidden pivot door integrations', 'Acoustic sound dampening', 'Custom fluting spacing & profiles']
  },
  {
    title: 'Engineered Wooden Ceilings & Beams',
    tag: 'Ceiling Architecture',
    description: 'Elevate your living room, double-height lobby, or master dining area with architectural timber rafters, coffered wooden grids, and warm wood-panelled ceilings with integrated indirect lighting.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    features: ['Structural aesthetic rafter beams', 'Integrated recessed spot & linear lighting', 'Termite-proof pressure-treated timber']
  },
  {
    title: 'Walk-In Wardrobes & Luxury Closets',
    tag: 'Bespoke Cabinetry',
    description: 'Made-to-measure dressing rooms tailored around your lifestyle. Featuring smoked tempered glass doors, German soft-close hardware, leather-lined watch trays, and motion-activated illuminated shelves.',
    image: '/images/product-bespoke-wardrobe.jpg',
    features: ['German Häfele / Blum mechanism fittings', 'Custom island display drawers', 'Integrated humidity-regulated cabinetry']
  }
];

export const MasterWoodworkSection: React.FC = () => {
  const { openProjectEnquiry } = useEnquiry();

  return (
    <section className="bg-[#141414] text-white py-20 lg:py-28 relative overflow-hidden border-b border-[#2B2B2B]">
      {/* Background Subtle Wood Grain Texture */}
      <div className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Section Top Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-[#C9A96A] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              <Hammer className="w-3.5 h-3.5" />
              The In-House Karachi Timber Atelier
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
              Pakistan&apos;s Foremost Master Woodwork &amp; Joinery Artisans
            </h2>
            <p className="mt-4 text-sm sm:text-base text-stone-300 leading-relaxed font-light">
              Most interior design studios are middlemen who sub-contract your woodwork to unverified street carpenters. AGAS Interiors owns and operates our own full-scale woodworking workshop in Karachi. From solid teak dining sets to double-height slatted wall claddings, we guarantee millimeter perfection and 100% genuine hardwoods.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => openProjectEnquiry()}
              className="bg-[#C9A96A] hover:bg-[#B89655] text-[#141414] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.1em] transition-colors rounded-none shadow-md flex items-center justify-center gap-2"
            >
              Commission Custom Woodwork
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/products"
              className="bg-transparent hover:bg-white/10 text-white border border-white/30 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.1em] transition-colors rounded-none text-center"
            >
              Browse Woodwork Pieces
            </Link>
          </div>
        </div>

        {/* 4 Woodwork Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WOODWORK_SPECIALTIES.map((spec, idx) => (
            <div
              key={idx}
              className="group bg-[#1E1E1E] border border-[#2E2E2E] hover:border-[#C9A96A]/60 rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div>
                {/* Photo Thumbnail */}
                <div className="relative aspect-16/10 overflow-hidden bg-stone-900">
                  <img
                    src={spec.image}
                    alt={spec.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="bg-black/75 backdrop-blur-xs text-[#E8D7B8] text-[0.625rem] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-xs border border-white/10">
                      {spec.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-medium tracking-tight text-white group-hover:text-[#C9A96A] transition-colors">
                    {spec.title}
                  </h3>
                  <p className="mt-3 text-xs text-stone-300 leading-relaxed font-light">
                    {spec.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-[#2C2C2C] space-y-2">
                    {spec.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-[0.7rem] text-stone-300">
                        <Sparkles className="w-3 h-3 text-[#C9A96A] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => openProjectEnquiry()}
                  className="w-full py-2.5 border border-[#3A3A3A] hover:border-[#C9A96A] hover:bg-[#C9A96A] hover:text-black text-stone-300 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  Consult on Woodwork &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Workshop Credibility Banner */}
        <div className="mt-16 bg-[#1A1A1A] border border-[#2B2B2B] rounded-xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-[#C9A96A]/10 border border-[#C9A96A]/30 flex items-center justify-center text-[#C9A96A] shrink-0">
              <Cpu className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-medium text-white">
                Visit Our Manufacturing Facility on Khayaban-e-Sehar, D.H.A., Karachi
              </h4>
              <p className="text-xs text-stone-400 mt-1 font-light">
                Inspect timber seasoning, witness master joiners hand-carving panels, and review finish samples in person before committing.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/923158739625?text=Hello%20AGAS%20Interiors%2C%20I%20would%20like%20to%20schedule%20a%20visit%20to%20your%20woodwork%20workshop."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-white hover:bg-[#C9A96A] text-[#141414] hover:text-black px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] rounded-xs transition-colors"
          >
            Schedule Workshop Visit
          </a>
        </div>
      </div>
    </section>
  );
};

export default MasterWoodworkSection;
