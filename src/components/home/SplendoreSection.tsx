import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../product/ProductCard';

export const SplendoreSection: React.FC = () => {
  const livingProducts = PRODUCTS.filter(p => p.category === 'Living').slice(0, 6);

  return (
    <section className="my-12">
      {/* Immersive Splendore Banner */}
      <div className="relative isolate overflow-hidden bg-stone-900">
        <div className="relative h-[420px] sm:h-[480px] lg:h-[560px] w-full">
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=80"
            alt="Splendore Collection"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1a1a1a]/45"></div>

          <div className="relative mx-auto flex h-full max-w-[1680px] items-center px-5 py-14 sm:px-8 lg:px-16">
            <div className="w-full lg:ml-auto lg:w-1/2 lg:text-right">
              <span className="eyebrow text-[#bf9250] mb-2 block tracking-[0.16em]">
                Architectural Living
              </span>
              <h2 className="display-l text-white uppercase font-normal">
                Splendore Collection
              </h2>
              <p className="mt-4 max-w-md text-[0.9375rem] leading-relaxed text-stone-200 lg:ml-auto">
                Sectionals and sofa sets with the presence to anchor a room, in velvets and bouclés chosen to wear well in daily use.
              </p>
              <Link
                to="/living-room-furniture"
                className="mt-7 inline-block border-b border-dashed border-white pb-1 text-[0.75rem] font-semibold tracking-[0.1em] text-white uppercase transition-colors duration-300 hover:border-[#bf9250] hover:text-[#bf9250]"
              >
                Discover more &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Living Room Products Carousel / Grid */}
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 py-12 lg:py-16">
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#e6e2dc]">
          <div>
            <span className="eyebrow text-[#825e2d]">Featured Living Pieces</span>
            <h3 className="text-xl font-medium text-[#1a1a1a] mt-1">Sectionals, Sofas &amp; Coffee Tables</h3>
          </div>
          <Link
            to="/living-room-furniture"
            className="text-xs font-semibold uppercase tracking-wider text-stone-600 hover:text-[#1a1a1a]"
          >
            View All ({PRODUCTS.filter(p => p.category === 'Living').length}) &rarr;
          </Link>
        </div>

        <ul className="grid grid-cols-2 gap-x-4 gap-y-9 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-12">
          {livingProducts.map(product => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
