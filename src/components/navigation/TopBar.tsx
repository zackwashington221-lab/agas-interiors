import React, { useState, useEffect } from 'react';
import { MessageCircle, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const STUDIO_ANNOUNCEMENTS = [
  "Turnkey Bungalow, Apartment & Office Renovations in Karachi",
  "Master Woodwork • Burmese Teak, American Walnut & Custom Cabinetry",
  "Architectural House Plans, 3D Elevations & SBCA/DHA Submission Maps",
  "Visit Our Design Studio & Workshop in DHA Phase 6, Karachi"
];

export const TopBar: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx(prev => (prev + 1) % STUDIO_ANNOUNCEMENTS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <aside aria-label="Studio Announcements" className="bg-[#141414] text-stone-300 border-b border-white/10 text-[0.6875rem]">
      <div className="mx-auto flex h-8 max-w-[1680px] items-center justify-between px-4 sm:px-8">
        {/* Left: Studio Announcement */}
        <div className="flex items-center gap-2 overflow-hidden py-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96A] animate-pulse shrink-0" />
          <p className="font-medium tracking-[0.06em] text-stone-300 uppercase truncate text-[0.6875rem]">
            {STUDIO_ANNOUNCEMENTS[currentIdx]}
          </p>
        </div>

        {/* Right: Quick Location & Consultation WhatsApp */}
        <div className="flex items-center gap-4 shrink-0 text-stone-300">
          <span className="hidden sm:flex items-center gap-1.5 text-stone-400">
            <MapPin className="w-3 h-3 text-[#C9A96A]" />
            <span>DHA Phase 6, Karachi</span>
          </span>
          <span className="hidden sm:inline text-stone-700">|</span>
          <a
            href="https://wa.me/923158739625?text=Hello%20AGAS%20Interiors%2C%20I%20would%20like%20to%20inquire%20about%20a%20site%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-[#C9A96A] font-medium"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>WhatsApp: <strong className="text-white">0315 8739625</strong></span>
          </a>
          <nav aria-label="Quick utility links" className="hidden lg:flex items-center gap-3 border-l border-white/15 pl-3">
            <Link to="/about-us" className="hover:text-white uppercase transition-colors">
              Studio
            </Link>
            <Link to="/faq" className="hover:text-white uppercase transition-colors">
              FAQ
            </Link>
            <Link to="/contact" className="hover:text-white uppercase transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </aside>
  );
};
