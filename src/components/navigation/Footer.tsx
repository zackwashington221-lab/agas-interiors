import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const Footer: React.FC = () => {
  const { setIsConsultationOpen } = useCart();

  return (
    <footer className="bg-[#1a1a1a] text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="mx-auto max-w-[1680px] px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-stone-800">
          {/* Brand Bio & Contact */}
          <div className="md:col-span-5 pr-0 md:pr-10">
            <Link
              to="/"
              className="inline-block bg-white p-2.5 rounded-lg shadow-md hover:opacity-95 transition-all group"
            >
              <img
                src="/img/brand/agas-logo-footer.png"
                alt="AGAS Interiors"
                className="h-14 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="mt-6 text-xs sm:text-[0.8125rem] leading-relaxed text-stone-400 max-w-lg">
              AGAS Interiors (Abdul Ghaffar & Sons) is a premier custom furniture manufacturing and interior solutions studio in Karachi, offering custom furniture, modern designs and complete interior solutions for homes and offices. From bedrooms, living rooms and dining spaces to kitchens, walk-in closets, offices and commercial interiors, we create sophisticated spaces that combine luxury, functionality and contemporary design.
            </p>

            <div className="mt-6 space-y-2.5 text-xs text-stone-300">
              <a
                href="tel:+923158739625"
                className="flex items-center gap-2 hover:text-[#bf9250] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#bf9250]" />
                0315 8739625
              </a>
              <a
                href="mailto:ahsan.gaffar00123@gmail.com"
                className="flex items-center gap-2 hover:text-[#bf9250] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#bf9250]" />
                ahsan.gaffar00123@gmail.com
              </a>
              <p className="flex items-start gap-2 text-stone-400">
                <MapPin className="w-3.5 h-3.5 text-[#bf9250] shrink-0 mt-0.5" />
                <span>Shop 2, Plot 17-C, Lane 7, Khayaban-e-Sehar, Phase 7, D.H.A., Karachi</span>
              </p>
            </div>

            <div className="mt-6 flex items-center gap-4 text-stone-400">
              <a
                href="https://wa.me/923158739625"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/923158739625"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/923158739625"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-white mb-4">
              Shop Departments
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <Link to="/bedroom-furniture" className="hover:text-white transition-colors">
                  Bedroom Furniture
                </Link>
              </li>
              <li>
                <Link to="/living-room-furniture" className="hover:text-white transition-colors">
                  Living Room Furniture
                </Link>
              </li>
              <li>
                <Link to="/dining-room-furniture" className="hover:text-white transition-colors">
                  Dining Room Furniture
                </Link>
              </li>
              <li>
                <Link to="/kitchen-furniture" className="hover:text-white transition-colors">
                  Kitchen Furniture
                </Link>
              </li>
              <li>
                <Link to="/closet-system" className="hover:text-white transition-colors">
                  Closet System &amp; Wardrobes
                </Link>
              </li>
              <li>
                <Link to="/doors" className="hover:text-white transition-colors">
                  Architectural Doors
                </Link>
              </li>
              <li>
                <Link to="/entryway-furniture" className="hover:text-white transition-colors">
                  Entryway Furniture
                </Link>
              </li>
              <li>
                <Link to="/outdoor-furniture" className="hover:text-white transition-colors">
                  Outdoor &amp; Garden Furniture
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Column */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-white mb-4">
              Help &amp; Service
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setIsConsultationOpen(true)}
                  className="hover:text-[#bf9250] transition-colors text-left"
                >
                  Free Design Help
                </button>
              </li>
              <li>
                <Link to="/terms-of-sale" className="hover:text-white transition-colors">
                  Terms of Sale
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  Nationwide Delivery
                </Link>
              </li>
            </ul>
          </div>

          {/* Visit & Studio Column */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-white mb-4">
              Studio &amp; Portfolio
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Architectural Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white transition-colors">
                  Case Studies &amp; Monograph
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-white transition-colors">
                  About AGAS Interiors
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  The Journal / Editorial
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Karachi Showroom
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/923158739625"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors"
                >
                  WhatsApp Concierge
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} AGAS Interiors. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-stone-300 transition-colors">
              Privacy
            </Link>
            <Link to="/terms-conditions" className="hover:text-stone-300 transition-colors">
              Terms
            </Link>
            <Link to="/terms-of-sale" className="hover:text-stone-300 transition-colors">
              Terms of Sale
            </Link>
            <Link to="/contact" className="hover:text-stone-300 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
