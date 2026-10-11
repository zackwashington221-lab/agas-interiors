import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../data/images';

const ArchitecturalScene = lazy(() => import('../3d/ArchitecturalScene'));

/**
 * 25. FINAL CTA
 * Major visual moment with powerful architectural image transitioning naturally into the footer.
 * Headline: LET'S CREATE SOMETHING EXTRAORDINARY.
 * CTA: START A PROJECT ->
 */
export const FinalCTA: React.FC = () => {
  return (
    <section
      aria-label="Start a Project Call to Action"
      className="relative min-h-[540px] max-h-[960px] flex items-center bg-[#171717] text-[#F5F1E8] py-28 sm:py-36 overflow-hidden"
    >
      {/* Background Architectural Image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={images.categories.luxuryKitchen}
          alt="Luxury architectural interior in walnut and stone"
          loading="lazy"
          className="w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#171717]/75 via-[#171717]/65 to-[#171717]" />
      </div>

      {/* Selective 3D Wireframe Accent */}
      <Suspense fallback={null}>
        <ArchitecturalScene
          accentColor="#B49A72"
          className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 w-[380px] h-[380px] opacity-30"
        />
      </Suspense>

      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-16">
        <p className="text-[11px] uppercase tracking-[0.34em] text-[#B49A72] mb-6">
          PRIVATE CONSULTATIONS · LAHORE · ISLAMABAD · KARACHI
        </p>

        <h2 className="font-serif-editorial text-5xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-[#F5F1E8] uppercase max-w-4xl mb-12">
          LET&apos;S CREATE
          <br />
          SOMETHING
          <br />
          EXTRAORDINARY.
        </h2>

        <Link
          to="/contact"
          data-cursor="cta"
          className="group inline-flex items-center gap-4 bg-[#F5F1E8] text-[#171717] px-9 py-5 text-xs uppercase tracking-[0.26em] font-medium hover:bg-[#B49A72] hover:text-[#0D0D0D] transition-all duration-500"
        >
          <span>START A PROJECT</span>
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1.5"
          >
            →
          </span>
        </Link>
      </div>
    </section>
  );
};
