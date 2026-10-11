import React from 'react';
import { Link } from 'react-router-dom';
import { DEPARTMENT_TILES } from '../../data/navigation';

export const ShopTheHouse: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 max-w-[1680px] mx-auto px-5 sm:px-8">
      {/* Section Header */}
      <div className="mx-auto max-w-xl text-center mb-10 sm:mb-14">
        <p className="eyebrow">Shop the house</p>
        <h2 className="display-l mt-2 text-[#1a1a1a]">Start with a room</h2>
        <p className="mt-3.5 text-[0.9375rem] leading-relaxed text-stone-600">
          Seven core departments, one material language. Everything here is built to sit next to everything else.
        </p>
      </div>

      {/* 7 Department Tiles Grid */}
      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 sm:gap-3 lg:gap-4">
        {DEPARTMENT_TILES.map((dept) => (
          <li key={dept.title}>
            <Link to={dept.href} className="group block">
              <div className="relative aspect-6/7 overflow-hidden bg-stone-200 rounded-xl">
                <img
                  src={dept.image}
                  alt={dept.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-[1.05]"
                />
                {/* Subtle dark overlay on hover */}
                <div className="absolute inset-0 bg-[#1a1a1a]/0 transition-colors duration-500 group-hover:bg-[#1a1a1a]/15"></div>

                {/* Floating Bottom Label */}
                <div className="absolute inset-x-0 bottom-[7%] flex justify-center px-3 pointer-events-none">
                  <div className="bg-[#faf9f7] px-4 py-2 sm:px-6 sm:py-2.5 text-center shadow-[0_2px_12px_-4px_rgba(31,29,26,0.4)] rounded-full transition-all duration-300 group-hover:bg-white border border-[#E8E0D7]">
                    <h3 className="text-[0.6875rem] sm:text-[0.75rem] font-semibold tracking-[0.12em] uppercase transition-colors duration-300 group-hover:text-[#825e2d] text-[#1a1a1a]">
                      {dept.title}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
