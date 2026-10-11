import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getLenisInstance } from '../../hooks/useLenis';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { label: 'WORK', to: '/work', index: '01' },
  { label: 'SERVICES', to: '/services', index: '02' },
  { label: 'ABOUT', to: '/about', index: '03' },
  { label: 'PROCESS', to: '/#process', index: '04' },
  { label: 'CONTACT', to: '/contact', index: '05' },
];

/**
 * 44. MOBILE NAVIGATION
 * Full-screen menu with large typography, smooth open/close, reliable close on navigation,
 * and background scroll lock.
 */
export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const lenis = getLenisInstance();
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      lenis?.stop();
    } else {
      document.body.style.overflow = '';
      lenis?.start();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      lenis?.start();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <div
      id="mobile-fullscreen-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site Navigation"
      className={`fixed inset-0 z-[110] bg-[#171717] text-[#F5F1E8] flex flex-col justify-between px-6 sm:px-12 pt-28 pb-10 transition-all duration-500 ease-out lg:hidden ${
        isOpen
          ? 'opacity-100 pointer-events-auto translate-y-0'
          : 'opacity-0 pointer-events-none -translate-y-3'
      }`}
    >
      <nav aria-label="Mobile Primary" className="flex flex-col space-y-5">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            onClick={onClose}
            className="group flex items-baseline gap-4 border-b border-[#91877A]/20 pb-4 focus-visible:outline-2 focus-visible:outline-[#B49A72]"
          >
            <span className="text-xs tracking-[0.25em] text-[#B49A72] font-normal">
              {item.index}
            </span>
            <span className="font-serif-editorial text-4xl sm:text-5xl tracking-tight text-[#F5F1E8] group-hover:text-[#D8CBB8] transition-colors">
              {item.label}
            </span>
          </Link>
        ))}
      </nav>

      <div className="pt-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6 text-xs text-[#D8CBB8]">
        <div>
          <p className="uppercase tracking-[0.25em] text-[#91877A] mb-2">STUDIO</p>
          <p className="tracking-wider">ABDUL GAFFAR &amp; SONS</p>
          <p className="text-[#91877A] mt-1">Lahore · Islamabad · Karachi</p>
        </div>
        <Link
          to="/contact"
          onClick={onClose}
          className="inline-flex items-center justify-center border border-[#B49A72] px-6 py-3.5 text-xs uppercase tracking-[0.24em] text-[#F5F1E8] hover:bg-[#B49A72] hover:text-[#171717] transition-colors"
        >
          LET&apos;S TALK →
        </Link>
      </div>
    </div>
  );
};
