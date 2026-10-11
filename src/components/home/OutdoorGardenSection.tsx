import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../product/ProductCard';
import { Sun, Shield, Droplets } from 'lucide-react';

export const OutdoorGardenSection: React.FC = () => {
  const outdoorProducts = PRODUCTS.filter(p => p.category === 'Outdoor');

  return (
    <section id="outdoor-garden-section" className="mx-auto w-full px-5 sm:px-8 max-w-[1400px] py-16 lg:py-24">
      {/* Editorial Section Hero Banner */}
      <div className="relative mb-14 rounded-2xl overflow-hidden bg-stone-900 border border-[#E8E0D7] shadow-xl">
        <div className="relative h-[320px] sm:h-[400px] lg:h-[460px] w-full">
          <img
            src="/img/outdoor/outdoor-hero.jpg"
            alt="AGAS Interiors Outdoor & Garden Living"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent flex items-center">
            <div className="max-w-xl px-8 sm:px-12 text-white">
              <span className="eyebrow text-[#C9A96A] mb-2 block tracking-[0.16em]">
                Terrace &bull; Garden &bull; Poolside
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-tight">
                Outdoor &amp; Garden Architecture
              </h2>
              <p className="mt-4 text-xs sm:text-sm text-stone-200 leading-relaxed max-w-md">
                Bespoke solid Grade-A teak joinery, all-weather Sunbrella textiles, and architectural lounging designed specifically to withstand Pakistan&apos;s heat, humidity, and coastal weather.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  to="/outdoor-furniture"
                  className="bg-[#C9A96A] hover:bg-[#B89655] text-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] rounded-md transition-colors shadow-md"
                >
                  Explore Outdoor Pieces
                </Link>
                <Link
                  to="/contact"
                  className="bg-white/10 hover:bg-white text-white hover:text-[#1A1A1A] border border-white/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] rounded-md backdrop-blur-xs transition-colors"
                >
                  Custom Site Inquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:flex lg:gap-8">
        {/* Sticky Collection Feature Card */}
        <div className="lg:w-1/3 lg:order-1 mb-10 lg:mb-0">
          <div className="h-full bg-[#e6e2dc]/60 border border-[#d3cec6] rounded-xl overflow-hidden">
            <div className="px-8 py-10 lg:sticky lg:top-28 lg:px-10 lg:py-12">
              <span className="eyebrow text-[#825e2d]">Architectural Materiality</span>
              <h3 className="mt-3 text-[1.625rem] leading-[1.15] tracking-[0.02em] text-[#1a1a1a] uppercase lg:text-[1.875rem] font-medium">
                The Riviera Outdoor Suite
              </h3>
              <p className="mt-4 text-[0.875rem] leading-relaxed text-stone-700">
                Engineered for open-air rooftops, beachfront verandas, and courtyard lawns. Built with zero-maintenance powder-coated aluminum framing and sustainably sourced teak wood.
              </p>
              <Link
                to="/outdoor-furniture"
                className="mt-7 inline-block border-b border-dashed border-[#1a1a1a] pb-1 text-[0.75rem] font-semibold tracking-[0.1em] uppercase transition-colors duration-300 hover:border-[#a67c3d] hover:text-[#825e2d]"
              >
                Discover Outdoor Catalogue &rarr;
              </Link>

              <div className="mt-8 pt-6 border-t border-[#d3cec6] text-xs text-stone-700 space-y-3">
                <div className="flex items-center gap-2.5">
                  <Sun className="w-4 h-4 text-[#825e2d] shrink-0" />
                  <span>UV-stabilized polyolefin rope &amp; marine fabrics</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Droplets className="w-4 h-4 text-[#825e2d] shrink-0" />
                  <span>Quick-dry antimicrobial foam filling</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Shield className="w-4 h-4 text-[#825e2d] shrink-0" />
                  <span>Seasoned Grade-A solid teakwood framing</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Outdoor Products Grid */}
        <div className="lg:w-2/3 lg:order-2">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
            {outdoorProducts.map(product => (
              <li key={product.id}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Architectural Outdoor Lookbook Gallery */}
      <div className="mt-20 pt-16 border-t border-[#E8E0D7]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
          <div>
            <span className="eyebrow text-[#825e2d]">Architectural Living Spaces</span>
            <h3 className="mt-2 text-2xl sm:text-3xl font-medium tracking-tight text-[#1a1a1a]">
              Outdoor &amp; Garden Installations
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-stone-600 max-w-xl">
              From beachfront verandas in Karachi to estate courtyards in Islamabad and Lahore, explore bespoke open-air projects engineered by AGAS Interiors.
            </p>
          </div>
          <Link
            to="/outdoor-furniture"
            className="mt-4 sm:mt-0 text-xs font-semibold uppercase tracking-[0.12em] text-[#825e2d] hover:text-[#1a1a1a] transition-colors inline-flex items-center gap-1.5"
          >
            View Complete Catalogue &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Sunken Firepit Courtyard",
              location: "DHA Phase VIII, Karachi",
              image: "/img/outdoor/outdoor-firepit.jpg",
              tag: "Architectural Suite"
            },
            {
              title: "Pergola Hanging Daybed",
              location: "Gulberg Greens, Islamabad",
              image: "/img/outdoor/outdoor-pergola-swing.jpg",
              tag: "Bespoke Teak"
            },
            {
              title: "Veranda Bar & Waterfall Island",
              location: "Sector F-7, Islamabad",
              image: "/img/outdoor/outdoor-bar-counter.jpg",
              tag: "Outdoor Kitchen"
            },
            {
              title: "Private Estate Lap Pool",
              location: "Defence Raya, Lahore",
              image: "/img/outdoor/outdoor-estate-pool.jpg",
              tag: "Poolside Architecture"
            },
            {
              title: "Teak & Travertine Lounge",
              location: "Clifton Beachfront, Karachi",
              image: "/img/outdoor/outdoor-coffee-table.jpg",
              tag: "Living Terrace"
            },
            {
              title: "Courtyard Veranda & Garden",
              location: "DHA Phase V, Lahore",
              image: "/img/outdoor/outdoor-garden-terrace.jpg",
              tag: "Architectural Villa"
            }
          ].map((item, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden bg-stone-900 border border-[#E8E0D7] shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute top-3 left-3">
                  <span className="bg-black/60 backdrop-blur-xs text-[#E8D7B8] text-[0.625rem] font-semibold tracking-[0.14em] uppercase px-2.5 py-1 rounded-sm border border-white/10">
                    {item.tag}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h4 className="text-base font-medium tracking-tight leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[0.7rem] text-stone-300 font-light mt-0.5">
                    {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutdoorGardenSection;
