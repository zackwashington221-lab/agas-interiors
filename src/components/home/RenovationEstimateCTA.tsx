import React from 'react';
import { MessageSquare, ArrowRight, ShieldCheck, Clock, Hammer } from 'lucide-react';
import { useEnquiry } from '../../context/EnquiryContext';

export const RenovationEstimateCTA: React.FC = () => {
  const { openProjectEnquiry } = useEnquiry();

  return (
    <section className="bg-[#141414] text-white py-16 sm:py-24 border-b border-[#2A2A2A] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-luminosity">
        <img
          src="/images/hero-wooden-villa.jpg"
          alt="Bungalow Renovation Karachi"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8 text-center">
        <span className="eyebrow text-[#C9A96A] mb-3 block tracking-[0.2em]">
          Turnkey Interior Architecture &bull; Karachi &amp; Nationwide
        </span>
        <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white max-w-3xl mx-auto leading-tight">
          Planning a Renovation for Your Bungalow, Apartment, or Office?
        </h2>
        <p className="mt-5 text-xs sm:text-base text-stone-300 max-w-2xl mx-auto font-light leading-relaxed">
          Avoid costly contractor errors and project delays. Speak directly with our senior architectural team for a complimentary site inspection, preliminary 3D space audit, and fixed-price cost estimation.
        </p>

        {/* Guarantees Row */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-stone-400">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#C9A96A]" />
            <span>Guaranteed Handover Timelines</span>
          </div>
          <div className="flex items-center gap-2">
            <Hammer className="w-4 h-4 text-[#C9A96A]" />
            <span>100% In-House Master Woodwork</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C9A96A]" />
            <span>5-Year Structural Warranty</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => openProjectEnquiry()}
            className="w-full sm:w-auto bg-[#C9A96A] hover:bg-[#B89655] text-[#141414] px-8 py-4 text-xs font-semibold uppercase tracking-[0.12em] transition-colors rounded-none shadow-lg flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Schedule Site Visit &amp; Estimate</span>
          </button>
          <a
            href="https://wa.me/923158739625?text=Hello%20AGAS%20Interiors%2C%20I%20would%20like%20to%20get%20a%20renovation%20estimate%20for%20my%20property."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white/10 hover:bg-white text-white hover:text-black border border-white/30 px-8 py-4 text-xs font-semibold uppercase tracking-[0.12em] rounded-none transition-colors backdrop-blur-xs flex items-center justify-center gap-2"
          >
            <span>WhatsApp Renovation Team</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default RenovationEstimateCTA;
