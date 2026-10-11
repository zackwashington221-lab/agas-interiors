import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../product/ProductCard';

export const NordikaSection: React.FC = () => {
  const kitchenProducts = PRODUCTS.filter(p => p.category === 'Kitchen').slice(0, 6);

  return (
    <section className="mx-auto w-full px-5 sm:px-8 max-w-[1400px] py-16 lg:py-24">
      <div className="lg:flex lg:gap-8">
        {/* Sticky Collection Feature Card (Left side on desktop) */}
        <div className="lg:w-1/3 lg:order-1 mb-10 lg:mb-0">
          <div className="h-full bg-[#e6e2dc]/60 border border-[#d3cec6] rounded-xl overflow-hidden">
            <div className="px-8 py-10 lg:sticky lg:top-28 lg:px-10 lg:py-12">
              <span className="eyebrow text-[#825e2d]">Kitchen Architecture</span>
              <h2 className="mt-3 text-[1.625rem] leading-[1.15] tracking-[0.02em] text-[#1a1a1a] uppercase lg:text-[1.875rem] font-medium">
                Nordika Collection
              </h2>
              <p className="mt-4 text-[0.875rem] leading-relaxed text-stone-700">
                Modular kitchens planned around your measurements rather than a standard carcass size, with counter seating to match.
              </p>
              <Link
                to="/kitchen-furniture"
                className="mt-7 inline-block border-b border-dashed border-[#1a1a1a] pb-1 text-[0.75rem] font-semibold tracking-[0.1em] uppercase transition-colors duration-300 hover:border-[#a67c3d] hover:text-[#825e2d]"
              >
                Discover more &rarr;
              </Link>

              <div className="mt-8 pt-6 border-t border-[#d3cec6] text-xs text-stone-600 space-y-2">
                <p>&bull; Soft-close Italian Blum hardware</p>
                <p>&bull; Antimicrobial scratch-proof surfaces</p>
                <p>&bull; Free 3D plan &amp; spatial layout consultation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Modular Kitchen Products Grid */}
        <div className="lg:w-2/3 lg:order-2">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
            {kitchenProducts.map(product => (
              <li key={product.id}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
