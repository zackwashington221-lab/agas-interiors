import React, { useState, useEffect } from 'react';
import { TOP_BAR_ANNOUNCEMENTS } from '../../data/navigation';
import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TopBar: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx(prev => (prev + 1) % TOP_BAR_ANNOUNCEMENTS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#1a1a1a] text-stone-200 border-b border-stone-800">
      <div className="mx-auto flex h-9 max-w-[1680px] items-center justify-between px-5 sm:px-8">
        {/* Left / Center Rotating Announcement */}
        <div className="flex items-center gap-2 overflow-hidden py-1">
          <p className="text-[0.6875rem] font-medium tracking-[0.08em] text-stone-300 uppercase transition-opacity duration-500 ease-in-out">
            {TOP_BAR_ANNOUNCEMENTS[currentIdx]}
          </p>
        </div>

        {/* Right Utility Links */}
        <div className="flex items-center gap-5 text-[0.6875rem] tracking-[0.08em] text-stone-300">
          <a
            href="https://wa.me/923158739625?text=Hi%20AGAS%20Interiors%2C%20I%20would%20like%20to%20inquire%20about%20your%20furniture%20collections."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-[#bf9250]"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#3f7d5c]" />
            <span className="hidden md:inline">WhatsApp:</span> 0315 8739625
          </a>
          <nav aria-label="Quick links" className="hidden lg:flex items-center gap-4 border-l border-stone-700 pl-4">
            <Link to="/faq" className="uppercase transition-colors hover:text-stone-100">
              FAQ
            </Link>
            <Link to="/contact" className="uppercase transition-colors hover:text-stone-100">
              Contact
            </Link>
            <Link to="/about-us" className="uppercase transition-colors hover:text-stone-100">
              About
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};
