import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Sparkles, Compass, HeartHandshake } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const About: React.FC = () => {
  const { setIsConsultationOpen } = useCart();

  return (
    <div className="bg-[#faf9f7] min-h-screen py-12 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        {/* Hero */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="eyebrow text-[#825e2d]">Architectural Heritage &bull; Est. 1990</span>
          <h1 className="display-l text-[#1a1a1a] mt-2 font-medium">
            About AGAS Interiors
          </h1>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-stone-600">
            Founded by Abdul Ghaffar & Sons, AGAS Interiors is a premier bespoke furniture manufacturing atelier and architectural interior practice delivering made-to-order environments across Pakistan.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="aspect-4/3 overflow-hidden bg-stone-200">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
              alt="AGAS Interiors Craftsmanship and Workshop"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <h2 className="text-xl font-medium text-[#1a1a1a]">
              Master Joinery, Architectural Harmony, Uncompromising Materials
            </h2>
            <p>
              From master suites, lounge layouts, and formal dining settings to integrated Italian-style kitchen cabinetry, custom architectural doors, and turnkey residential spaces, AGAS Interiors delivers complete harmony across every touchpoint.
            </p>
            <p>
              Unlike mass-market imported commercial flatpacks, every AGAS creation is engineered specifically for your spatial plan. Our dedicated Karachi workshops employ master artisans utilizing seasoned solid hardwoods, high-density resilience cushions, and imported performance upholstery tailored for longevity in our regional climate.
            </p>
            <p>
              Whether crafting a bespoke channeled bed, an architectural sintered stone dining table, or complete site-built joinery, we ensure precise millimeter fit and cohesive luxury across your entire residence.
            </p>
          </div>
        </div>

        {/* 4 Pillars */}
        <div className="border-t border-[#e6e2dc] pt-16 mb-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h3 className="text-lg font-semibold uppercase tracking-wider text-[#1a1a1a]">
              The AGAS Standard
            </h3>
            <p className="mt-1 text-xs text-stone-500">
              Guiding every commission from technical drafting to on-site assembly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 border border-[#e6e2dc]">
              <Sparkles className="w-6 h-6 text-[#a67c3d] mb-4" />
              <h4 className="text-sm font-semibold text-[#1a1a1a] mb-2">Bespoke Precision</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Customized to the millimeter. Choose fabric grades, wood finishes, dimensions, and hardware.
              </p>
            </div>

            <div className="bg-white p-6 border border-[#e6e2dc]">
              <Compass className="w-6 h-6 text-[#a67c3d] mb-4" />
              <h4 className="text-sm font-semibold text-[#1a1a1a] mb-2">Architectural Intent</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Created to complement contemporary Pakistani villas, townhouses, and penthouse apartments.
              </p>
            </div>

            <div className="bg-white p-6 border border-[#e6e2dc]">
              <ShieldCheck className="w-6 h-6 text-[#a67c3d] mb-4" />
              <h4 className="text-sm font-semibold text-[#1a1a1a] mb-2">10-Year Frame Warranty</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Structural frames crafted from seasoned hardwood that will not warp, sag, or creak.
              </p>
            </div>

            <div className="bg-white p-6 border border-[#e6e2dc]">
              <HeartHandshake className="w-6 h-6 text-[#a67c3d] mb-4" />
              <h4 className="text-sm font-semibold text-[#1a1a1a] mb-2">White-Glove Delivery</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Large pieces arrive fully built and are assembled directly in your room by our technicians.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#1a1a1a] text-stone-200 p-10 sm:p-14 text-center">
          <h3 className="display-l text-white font-normal">
            Ready to plan your room?
          </h3>
          <p className="mt-3 text-xs sm:text-sm text-stone-300 max-w-lg mx-auto">
            Book a complimentary design consultation or visit our showroom in D.H.A., Karachi to examine finish swatches and floor models.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => setIsConsultationOpen(true)}
              className="bg-white text-[#1a1a1a] px-8 py-3.5 text-xs font-semibold uppercase tracking-wider hover:bg-[#a67c3d] hover:text-white transition-colors"
            >
              Request Free Room Layout
            </button>
            <Link
              to="/contact"
              className="border border-white text-white px-8 py-3.5 text-xs font-semibold uppercase tracking-wider hover:bg-white hover:text-[#1a1a1a] transition-colors"
            >
              Karachi Showroom Location
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
