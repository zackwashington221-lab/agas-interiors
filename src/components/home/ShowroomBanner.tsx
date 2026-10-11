import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

export const ShowroomBanner: React.FC = () => {
  return (
    <section className="relative isolate overflow-hidden bg-stone-900 my-8">
      <div className="relative h-[380px] sm:h-[450px] lg:h-[500px] w-full">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1600&q=80"
          alt="AGAS Interiors Showroom"
          className="h-full w-full object-cover"
        />

        {/* Dark Tint Overlay */}
        <div className="absolute inset-0 bg-[#1a1a1a]/40"></div>

        {/* Center Content */}
        <div className="absolute inset-0 flex items-center justify-center px-5 text-center sm:px-8">
          <div className="max-w-2xl">
            <span className="eyebrow text-[#bf9250] mb-2 block tracking-[0.16em]">
              Karachi Design Flagship
            </span>
            <h2 className="display-l text-white font-normal">
              Visit Our Showroom
            </h2>
            <p className="mt-3 text-sm text-stone-200 flex items-center justify-center gap-1.5 max-w-md mx-auto">
              <MapPin className="w-4 h-4 text-[#bf9250] shrink-0" />
              Shop 2, Plot 17-C, Lane 7, Khayaban-e-Sehar, Phase 7, D.H.A., Karachi
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#faf9f7] px-8 py-3.5 text-[0.8125rem] font-semibold tracking-[0.08em] uppercase text-[#1a1a1a] transition-all duration-300 hover:bg-[#a67c3d] hover:text-white"
              >
                Get directions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
