import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, ChevronDown, MessageSquare, ArrowRight, PhoneCall } from 'lucide-react';
import { AuraLogo } from '../common/AuraLogo';
import { useCart } from '../../context/CartContext';
import { useEnquiry } from '../../context/EnquiryContext';

interface NavDropdownItem {
  title: string;
  href: string;
  badge?: string;
  description?: string;
}

interface NavSection {
  title: string;
  href: string;
  items?: NavDropdownItem[];
  featured?: {
    title: string;
    caption: string;
    image: string;
    href: string;
  };
}

const NAV_SECTIONS: NavSection[] = [
  {
    title: "Portfolio",
    href: "/projects",
    items: [
      { title: "DHA Phase 8 Contemporary Villa", href: "/projects", description: "4,500 sq.ft Complete Turnkey Bungalow" },
      { title: "Clifton Seafront Penthouse", href: "/projects", description: "Bespoke Woodwork & Minimalist Architecture" },
      { title: "DHA Phase 6 Duplex Renovation", href: "/projects", description: "Multi-level residential transformation" },
      { title: "View All Projects & Case Studies", href: "/projects", badge: "Archive" }
    ],
    featured: {
      title: "Featured Monograph",
      caption: "DHA Phase 8 Contemporary Villa Turnkey Makeover",
      image: "/images/hero-wooden-villa.jpg",
      href: "/projects"
    }
  },
  {
    title: "House Plans & Maps",
    href: "/services/architectural-house-plans",
    items: [
      { title: "120 & 240 Sq.Yd Floor Plans", href: "/services/architectural-house-plans", description: "Urban residential floor maps & working drawings" },
      { title: "500 Sq.Yd Luxury Villa Plans", href: "/services/architectural-house-plans", description: "Open-plan living, double-height foyers & basements" },
      { title: "1000 & 2000 Sq.Yd Estates", href: "/services/architectural-house-plans", description: "Palatial master layouts, pavilions & pools" },
      { title: "3D Front Elevation Designs", href: "/services/architectural-house-plans", description: "Photorealistic daytime & twilight exterior renders" },
      { title: "DHA & SBCA Submission Sets", href: "/services/architectural-house-plans", description: "Bylaw-compliant working blueprints & MEP drawings" }
    ],
    featured: {
      title: "Master Architectural Blueprints",
      caption: "Precision 2D floor plans, 3D elevations, and authority submission sets",
      image: "/images/hero-wooden-villa.jpg",
      href: "/services/architectural-house-plans"
    }
  },
  {
    title: "Renovations & Fitouts",
    href: "/services",
    items: [
      { title: "Luxury Bungalows & Villas", href: "/services/home-renovation", description: "Complete structural & interior transformations" },
      { title: "Apartments & Penthouses", href: "/services/interior-design", description: "Spatial optimization & bespoke living suites" },
      { title: "Corporate Offices & Sites", href: "/services/interior-design", description: "Executive boardrooms, acoustic slats & workstations" },
      { title: "Turnkey Site Fitouts", href: "/services/home-renovation", description: "Civil masonry, plumbing, electrical to handover" },
      { title: "Explore All Renovation Services", href: "/services", badge: "Overview" }
    ],
    featured: {
      title: "Full Turnkey Fitouts",
      caption: "Single accountable team from 3D plan to white-glove handover",
      image: "/images/wooden-kitchen-ceiling.jpg",
      href: "/services"
    }
  },
  {
    title: "Master Woodwork",
    href: "/services/kitchens-wardrobes-architectural-joinery",
    items: [
      { title: "Solid Teak & Walnut Joinery", href: "/services/kitchens-wardrobes-architectural-joinery", description: "Grade-A seasoned timber, zero warping guarantee" },
      { title: "Fluted Walls & Acoustic Slats", href: "/services/kitchens-wardrobes-architectural-joinery", description: "Floor-to-ceiling wooden cladding & concealed doors" },
      { title: "Engineered Wooden Ceilings", href: "/services/kitchens-wardrobes-architectural-joinery", description: "Rafter beams, coffered grids & recessed lighting" },
      { title: "Walk-In Closets & Cabinetry", href: "/closet-system", description: "Custom dressing rooms & luxury wardrobe systems" },
      { title: "Architectural Doors", href: "/doors", description: "Pivot exterior & flush interior engineered doors" }
    ],
    featured: {
      title: "In-House Karachi Workshop",
      caption: "100% genuine hardwood joinery crafted by master carpenters",
      image: "/images/wpc-fluted-wall.jpg",
      href: "/services/kitchens-wardrobes-architectural-joinery"
    }
  },
  {
    title: "The Atelier (Products)",
    href: "/products",
    items: [
      { title: "All Bespoke Pieces (50+)", href: "/products", badge: "Atelier" },
      { title: "Living Room Suites", href: "/living-room-furniture", description: "Sectionals, bouclé chairs & marble tables" },
      { title: "Bedroom Collections", href: "/bedroom-furniture", description: "Bespoke beds, benches & dressing consoles" },
      { title: "Dining Sets", href: "/dining-room-furniture", description: "Calacatta stone & solid teak dining tables" },
      { title: "Modular Kitchens", href: "/kitchen-furniture", description: "Custom architectural kitchen cabinetry" },
      { title: "Outdoor & Garden Living", href: "/outdoor-furniture", description: "Weather-resistant teak lounges, daybeds & firepits" }
    ],
    featured: {
      title: "Made to Order in Karachi",
      caption: "Custom dimensions and wood finishes to fit your floor plan",
      image: "/img/outdoor/outdoor-hero.jpg",
      href: "/products"
    }
  },
  {
    title: "Our Process",
    href: "/#process"
  },
  {
    title: "The Studio",
    href: "/about"
  },
  {
    title: "Contact",
    href: "/contact"
  }
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<NavSection | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const { setIsSearchOpen } = useCart();
  const { openProjectEnquiry } = useEnquiry();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on page navigation
  useEffect(() => {
    setActiveSection(null);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 bg-[#FBF6F3]/95 backdrop-blur-md transition-all duration-300 border-b border-[#E8E0D7] ${
        scrolled ? 'shadow-sm' : ''
      }`}
      onMouseLeave={() => setActiveSection(null)}
    >
      {/* 1. Desktop Secondary Utility Bar */}
      <div className="hidden lg:block border-b border-[#E8E0D7] bg-[#F5EFEB]/70">
        <div className="mx-auto flex max-w-[1680px] items-center justify-between px-5 sm:px-8">
          <div className="flex items-center gap-1">
            <Link
              to="/"
              className="px-3.5 py-2 text-[0.6875rem] tracking-[0.1em] uppercase transition-colors bg-[#FBF6F3] font-semibold text-[#1A1A1A]"
            >
              AGAS Interiors
            </Link>
            <span className="text-[0.6875rem] tracking-[0.08em] text-stone-500 uppercase px-3 py-2">
              Turnkey Renovations &bull; Bungalows &bull; Apartments &bull; Corporate Offices &bull; Master Woodwork
            </span>
          </div>

          <div className="flex items-center gap-4 text-[0.6875rem] text-stone-600">
            <a
              href="https://wa.me/923158739625?text=Hello%20AGAS%20Interiors%2C%20I%20would%20like%20to%20inquire%20about%20a%20renovation%20estimate."
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#825e2d] transition-colors flex items-center gap-1"
            >
              <span>Site Assessment WhatsApp:</span>
              <span className="font-semibold text-stone-900">0315 8739625</span>
            </a>
            <span className="text-stone-300">|</span>
            <Link to="/contact" className="hover:text-[#825e2d] transition-colors font-semibold uppercase">
              Karachi Showroom
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Header */}
      <div className="mx-auto grid h-16 max-w-[1680px] grid-cols-[1fr_auto_1fr] items-center gap-3 px-5 sm:h-20 sm:px-8">
        {/* Left Side: Mobile Menu Button & Desktop Search */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="-ml-2 grid h-11 w-11 place-items-center text-[#1A1A1A] transition-colors hover:text-[#C9A96A] lg:hidden"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <button
            type="button"
            onClick={() => setIsSearchOpen(true)}
            className="hidden lg:flex min-h-10 items-center gap-2.5 border-b border-stone-400 pb-1 text-xs tracking-[0.08em] text-stone-600 uppercase transition-colors hover:border-[#1A1A1A] hover:text-[#1A1A1A]"
          >
            <Search className="w-4 h-4" />
            <span>Search Portfolio &amp; Pieces</span>
          </button>
        </div>

        {/* Center: Authentic Logo */}
        <div className="flex items-center justify-center">
          <AuraLogo size="md" />
        </div>

        {/* Right Side: Primary High-Converting CTAs */}
        <div className="flex items-center justify-end gap-2 sm:gap-3">
          <button
            type="button"
            aria-label="Search"
            onClick={() => setIsSearchOpen(true)}
            className="grid h-10 w-10 place-items-center text-[#1A1A1A] transition-colors hover:text-[#C9A96A] lg:hidden"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Consultation CTA */}
          <button
            type="button"
            onClick={() => openProjectEnquiry()}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-[0.6875rem] font-semibold tracking-[0.08em] uppercase bg-[#1A1A1A] hover:bg-[#C9A96A] text-white shadow-xs transition-colors rounded-none"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#C9A96A]" />
            <span className="hidden sm:inline">Book Site Consultation</span>
            <span className="sm:hidden">Consult</span>
          </button>

          {/* Quick Direct WhatsApp Button */}
          <a
            href="https://wa.me/923158739625?text=Hello%20AGAS%20Interiors%2C%20I%20am%20interested%20in%20renovation%20and%20woodwork."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Us"
            className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-2.5 text-[0.6875rem] font-semibold tracking-[0.08em] uppercase bg-[#25D366] hover:bg-[#20bd5a] text-white transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>0315 8739625</span>
          </a>
        </div>
      </div>

      {/* 3. Horizontal Architectural Navigation Menu Bar (Desktop) */}
      <div className="relative hidden border-t border-[#E8E0D7] lg:block">
        <nav aria-label="Main architectural navigation" className="mx-auto max-w-[1680px] px-5 sm:px-8">
          <ul className="flex items-center justify-center gap-1 xl:gap-2">
            {NAV_SECTIONS.map(section => {
              const hasDropdown = section.items && section.items.length > 0;
              const isActive = activeSection?.title === section.title;

              return (
                <li
                  key={section.title}
                  onMouseEnter={() => hasDropdown ? setActiveSection(section) : setActiveSection(null)}
                  className="relative"
                >
                  <Link
                    to={section.href}
                    className={`relative flex items-center gap-1 px-3.5 py-3 text-[0.75rem] font-semibold tracking-[0.1em] uppercase transition-colors xl:px-4.5 ${
                      isActive
                        ? 'text-[#825e2d] border-b-2 border-[#825e2d]'
                        : 'text-[#1A1A1A] hover:text-[#825e2d]'
                    }`}
                  >
                    <span>{section.title}</span>
                    {hasDropdown && (
                      <ChevronDown className="w-3 h-3 text-stone-400 group-hover:text-[#825e2d]" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* 4. Architectural Dropdown Panel */}
        {activeSection && activeSection.items && (
          <div
            className="absolute left-0 right-0 top-full bg-[#FAF9F7] border-b border-[#E8E0D7] shadow-2xl transition-all duration-300 z-50"
            onMouseEnter={() => setActiveSection(activeSection)}
            onMouseLeave={() => setActiveSection(null)}
          >
            <div className="mx-auto max-w-[1400px] px-8 py-8 grid grid-cols-12 gap-8">
              {/* Items List */}
              <div className={activeSection.featured ? "col-span-8" : "col-span-12"}>
                <div className="flex items-center justify-between pb-3 border-b border-[#E8E0D7] mb-6">
                  <h3 className="text-xs font-semibold tracking-[0.14em] uppercase text-[#825e2d]">
                    {activeSection.title} Overview
                  </h3>
                  <Link
                    to={activeSection.href}
                    className="text-xs font-medium text-stone-600 hover:text-black inline-flex items-center gap-1 group"
                  >
                    View All {activeSection.title}
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-y-5 gap-x-8">
                  {activeSection.items.map(item => (
                    <Link
                      key={item.title}
                      to={item.href}
                      className="group block p-2 -m-2 rounded-sm hover:bg-[#F2ECE4] transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[0.8125rem] font-medium text-stone-900 group-hover:text-[#825e2d] transition-colors">
                          {item.title}
                        </span>
                        {item.badge && (
                          <span className="text-[0.625rem] font-semibold uppercase tracking-wider px-1.5 py-0.5 bg-[#825e2d]/10 text-[#825e2d]">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      {item.description && (
                        <p className="text-[0.7rem] text-stone-500 font-light mt-0.5 line-clamp-1">
                          {item.description}
                        </p>
                      )}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Featured Feature Card */}
              {activeSection.featured && (
                <div className="col-span-4 border-l border-[#E8E0D7] pl-8 flex flex-col justify-between">
                  <Link to={activeSection.featured.href} className="group block overflow-hidden bg-stone-900 rounded-sm">
                    <div className="aspect-16/10 overflow-hidden relative">
                      <img
                        src={activeSection.featured.image}
                        alt={activeSection.featured.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <p className="text-[0.625rem] font-semibold tracking-[0.14em] uppercase text-[#E8D7B8]">
                          {activeSection.featured.title}
                        </p>
                        <h4 className="text-xs font-medium text-white mt-0.5 leading-snug">
                          {activeSection.featured.caption}
                        </h4>
                      </div>
                    </div>
                  </Link>
                  <button
                    onClick={() => {
                      setActiveSection(null);
                      openProjectEnquiry();
                    }}
                    className="mt-4 w-full py-2.5 bg-[#1A1A1A] hover:bg-[#825e2d] text-white text-[0.6875rem] font-semibold uppercase tracking-[0.1em] transition-colors text-center"
                  >
                    Request Consultation
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* 5. Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-black/40 backdrop-blur-xs lg:hidden">
          <div className="flex h-full w-[85%] max-w-sm flex-col justify-between bg-[#FBF6F3] p-6 shadow-2xl overflow-y-auto">
            <div>
              {/* Header inside mobile drawer */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E8E0D7] mb-6">
                <span className="text-xs font-semibold tracking-[0.1em] uppercase text-stone-500">
                  Navigation
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1 text-stone-600 hover:text-black"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation links */}
              <div className="space-y-3">
                {NAV_SECTIONS.map(section => {
                  const hasDropdown = section.items && section.items.length > 0;
                  const isExpanded = expandedMobileSection === section.title;

                  return (
                    <div key={section.title} className="border-b border-[#E8E0D7]/60 pb-2.5">
                      <div className="flex items-center justify-between">
                        <Link
                          to={section.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-sm font-semibold tracking-[0.08em] uppercase text-stone-900 hover:text-[#825e2d]"
                        >
                          {section.title}
                        </Link>
                        {hasDropdown && (
                          <button
                            type="button"
                            onClick={() => setExpandedMobileSection(isExpanded ? null : section.title)}
                            className="p-1 text-stone-500 hover:text-black"
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                            />
                          </button>
                        )}
                      </div>

                      {hasDropdown && isExpanded && section.items && (
                        <ul className="mt-2.5 ml-2 space-y-2 border-l-2 border-[#825e2d]/30 pl-3">
                          {section.items.map(sub => (
                            <li key={sub.title}>
                              <Link
                                to={sub.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-xs block py-0.5 text-stone-600 hover:text-[#825e2d]"
                              >
                                {sub.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Mobile CTA */}
              <div className="mt-8 pt-4 border-t border-[#E8E0D7] space-y-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openProjectEnquiry();
                  }}
                  className="w-full py-3 px-4 bg-[#1A1A1A] hover:bg-[#825e2d] text-white text-xs font-semibold uppercase tracking-[0.1em] text-center transition-colors"
                >
                  Book Site Visit &amp; Estimate
                </button>
                <a
                  href="https://wa.me/923158739625"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-[#25D366] text-white text-xs font-semibold uppercase tracking-[0.1em] text-center flex items-center justify-center gap-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>WhatsApp: 0315 8739625</span>
                </a>
              </div>
            </div>

            {/* Mobile Footer */}
            <div className="pt-6 border-t border-[#E8E0D7] text-xs text-stone-500 mt-6">
              <p className="font-semibold text-stone-800">AGAS Interiors &bull; Studio &amp; Workshop</p>
              <p className="mt-0.5">Shop 2, Plot 17-C, Khayaban-e-Sehar, Phase 7, D.H.A., Karachi</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
