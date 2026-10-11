import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/common/SEOHead';

export const NotFound: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Page Not Found"
        description="The requested page could not be found."
        canonicalPath="/404"
      />
      <section className="min-h-[85svh] flex flex-col items-center justify-center bg-[#F5F1E8] text-[#171717] px-6 text-center pt-24">
        <p className="text-xs uppercase tracking-[0.32em] text-[#91877A] mb-4">
          404 · ARCHITECTURAL ROUTE UNAVAILABLE
        </p>
        <h1 className="font-serif-editorial text-5xl sm:text-7xl tracking-tight text-[#171717] mb-10">
          PROJECT NOT FOUND
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/work"
            className="inline-flex items-center gap-3 bg-[#171717] text-[#F5F1E8] px-8 py-4 text-xs uppercase tracking-[0.24em] hover:bg-[#4A3528] transition-colors"
          >
            <span>RETURN TO OUR WORK</span>
            <span aria-hidden="true">→</span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-3 border border-[#171717]/35 text-[#171717] px-8 py-4 text-xs uppercase tracking-[0.24em] hover:bg-[#171717] hover:text-[#F5F1E8] transition-colors"
          >
            <span>STUDIO HOME</span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
