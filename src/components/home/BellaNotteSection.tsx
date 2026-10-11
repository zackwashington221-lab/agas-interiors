import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../product/ProductCard';

export const BellaNotteSection: React.FC = () => {
  // Grab the 12 signature bedroom products
  const bedroomProducts = PRODUCTS.filter(p => p.category === 'Bedroom').slice(0, 12);

  return (
    <section className="mx-auto w-full px-5 sm:px-8 max-w-[1400px] py-16 lg:py-24">
      <div className="lg:flex lg:gap-8">
        {/* Sticky Collection Feature Card (Right side on desktop) */}
        <div className="lg:w-1/4 lg:order-2 mb-10 lg:mb-0">
          <div className="h-full bg-[#e6e2dc]/60 border border-[#d3cec6] rounded-xl overflow-hidden">
            <div className="px-8 py-10 lg:sticky lg:top-28 lg:px-10 lg:py-12">
              <span className="eyebrow text-[#825e2d]">Curated Suite</span>
              <h2 className="mt-3 text-[1.625rem] leading-[1.15] tracking-[0.02em] text-[#1a1a1a] uppercase lg:text-[1.875rem] font-medium">
                Bella Notte Collection
              </h2>
              <p className="mt-4 text-[0.875rem] leading-relaxed text-stone-700">
                We have gone to great lengths to bring you furniture ranges that create your perfect bedroom — beds, wardrobes and dressing tables that sit together.
              </p>
              <Link
                to="/bedroom-furniture/bed-sets"
                className="mt-7 inline-block border-b border-dashed border-[#1a1a1a] pb-1 text-[0.75rem] font-semibold tracking-[0.1em] uppercase transition-colors duration-300 hover:border-[#a67c3d] hover:text-[#825e2d]"
              >
                Discover more &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* 12 Products Grid */}
        <div className="lg:w-3/4 lg:order-1">
          <ul className="grid grid-cols-2 gap-x-4 gap-y-9 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-12">
            {bedroomProducts.map(product => (
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
