import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X, ChevronDown, MessageSquare, ArrowRight } from 'lucide-react';
import { AuraLogo } from '../common/AuraLogo';
import { ThemeToggle } from '../common/ThemeToggle';
import { NAV_CATEGORIES, type NavCategory } from '../../data/navigation';
import { useCart } from '../../context/CartContext';
import { useEnquiry } from '../../context/EnquiryContext';

export const Navbar: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<NavCategory | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileCat, setExpandedMobileCat] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const { totalItems, setIsCartOpen, setIsSearchOpen } = useCart();
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
    setActiveCategory(null);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 bg-[#FBF6F3]/95 backdrop-blur-md transition-all duration-300 border-b border-[#E8E0D7] ${
        scrolled ? 'shadow-sm' : ''
      }`}
      onMouseLeave={() => setActiveCategory(null)}
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
            <Link
              to="/services"
              className="px-3.5 py-2 text-[0.6875rem] tracking-[0.1em] uppercase transition-colors text-stone-600 hover:text-[#C9A96A] font-semibold"
            >
              Services
            </Link>
            <Link
              to="/projects"
              className="px-3.5 py-2 text-[0.6875rem] tracking-[0.1em] uppercase transition-colors text-stone-600 hover:text-[#C9A96A] font-semibold"
            >
              Our Work
            </Link>
            <Link
              to="/faq"
              className="px-3.5 py-2 text-[0.6875rem] tracking-[0.1em] uppercase transition-colors text-stone-600 hover:text-[#1A1A1A]:text-white"
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              className="px-3.5 py-2 text-[0.6875rem] tracking-[0.1em] uppercase transition-colors text-stone-600 hover:text-[#1A1A1A]:text-white"
            >
              Contact
            </Link>
          </div>

          {/* Quick Theme Toggle & Help */}
          <div className="flex items-center gap-3">
            
            <button
              type="button"
              onClick={() => openProjectEnquiry()}
              className="px-3 py-1 text-[0.6875rem] tracking-[0.08em] uppercase transition-colors text-[#C9A96A] hover:underline font-semibold"
            >
              Architectural Feasibility
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Header */}
      <div className="mx-auto grid h-16 max-w-[1680px] grid-cols-[1fr_auto_1fr] items-center gap-3 px-5 sm:h-[4.5rem] sm:px-8">
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
            className="hidden lg:flex min-h-10 items-center gap-2.5 border-b border-stone-400 pb-1 text-xs tracking-[0.08em] text-stone-600 uppercase transition-colors hover:border-[#1A1A1A]:border-white hover:text-[#1A1A1A]:text-white"
          >
            <Search className="w-4 h-4" />
            <span>Search</span>
          </button>
        </div>

        {/* Center: Authentic Logo */}
        <div className="flex items-center justify-center">
          <AuraLogo size="md" />
        </div>

        {/* Right Side: Search (Mobile), Theme Toggle, Get Quote CTA, Cart Icon */}
        <div className="flex items-center justify-end gap-1.5 sm:gap-3">
          <button
            type="button"
            aria-label="Search"
            onClick={() => setIsSearchOpen(true)}
            className="grid h-10 w-10 place-items-center text-[#1A1A1A] transition-colors hover:text-[#C9A96A] lg:hidden"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Theme Toggle Button */}
          <ThemeToggle />

          {/* Primary Gold CTA "Get a Quote" matching the Mockup */}
          <button
            type="button"
            onClick={() => openProjectEnquiry()}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-[0.6875rem] font-semibold tracking-[0.08em] uppercase bg-[#C9A96A] hover:bg-[#B89655] text-white shadow-xs transition-colors rounded-none"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Get a Quote
          </button>

          <button
            type="button"
            aria-label={`Shopping cart, ${totalItems} items`}
            onClick={() => setIsCartOpen(true)}
            className="relative grid h-11 w-11 place-items-center text-[#1A1A1A] transition-colors hover:text-[#C9A96A]"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute top-1.5 right-1.5 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-[#1A1A1A] px-1 text-[0.65rem] font-semibold text-white">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* 3. Horizontal Department Menu Bar (Desktop) */}
      <div className="relative hidden border-t border-[#E8E0D7] lg:block">
        <nav aria-label="Shop categories" className="mx-auto max-w-[1680px] px-5 sm:px-8">
          <ul className="flex items-center justify-center flex-wrap">
            {NAV_CATEGORIES.map(cat => (
              <li
                key={cat.title}
                onMouseEnter={() => setActiveCategory(cat)}
                className="relative"
              >
                <Link
                  to={cat.href}
                  className={`link-rule relative block px-3.5 py-3 text-[0.75rem] font-semibold tracking-[0.1em] uppercase transition-colors xl:px-4.5 ${
                    cat.isSale
                      ? 'text-[#d31245] hover:text-[#a40e35]'
                      : 'text-[#1A1A1A] hover:text-[#C9A96A]:text-[#C9A96A]'
                  }`}
                  data-active={activeCategory?.title === cat.title}
                >
                  {cat.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* 4. Mega-Menu Dropdown Panel */}
        {activeCategory && (
          <div
            className="absolute left-0 right-0 top-full bg-[#FBF6F3] border-b border-[#E8E0D7] shadow-xl transition-all duration-300"
            onMouseEnter={() => setActiveCategory(activeCategory)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <div className="mx-auto max-w-[1400px] px-8 py-8 grid grid-cols-12 gap-8">
              {/* Category Submenu List */}
              <div className="col-span-8">
                <div className="flex items-center justify-between pb-4 border-b border-[#E8E0D7] mb-6">
                  <h3 className="text-xs font-semibold tracking-[0.12em] uppercase text-[#C9A96A]">
                    {activeCategory.title} Department
                  </h3>
                  <Link
                    to={activeCategory.href}
                    className="text-xs font-medium text-stone-600 hover:text-[#1A1A1A]:text-white inline-flex items-center gap-1 group"
                  >
                    View All {activeCategory.title}
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                <ul className="grid grid-cols-3 gap-y-3.5 gap-x-6">
                  {activeCategory.subcategories.map(sub => (
                    <li key={sub.title}>
                      <Link
                        to={sub.href}
                        className={`text-[0.8125rem] tracking-[0.02em] transition-colors hover:text-[#C9A96A] flex items-center justify-between group ${
                          sub.isBadge
                            ? 'text-[#d31245] font-semibold'
                            : 'text-stone-700'
                        }`}
                      >
                        <span>{sub.title}</span>
                        {sub.isBadge && (
                          <span className="text-[0.625rem] uppercase px-1.5 py-0.5 bg-[#d31245]/10 text-[#d31245] font-semibold">
                            Sale
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Featured Department Card */}
              {activeCategory.featuredImage && (
                <div className="col-span-4 border-l border-[#E8E0D7] pl-8 flex flex-col justify-between">
                  <Link to={activeCategory.href} className="group block overflow-hidden bg-stone-200">
                    <div className="aspect-16/10 overflow-hidden relative">
                      <img
                        src={activeCategory.featuredImage}
                        alt={activeCategory.featuredCaption || activeCategory.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[#1A1A1A]/15 group-hover:bg-transparent transition-colors"></div>
                    </div>
                    <div className="mt-3">
                      <p className="text-[0.6875rem] font-semibold tracking-[0.1em] uppercase text-[#C9A96A]">
                        Featured Range
                      </p>
                      <h4 className="text-sm font-medium text-[#1A1A1A] mt-0.5">
                        {activeCategory.featuredCaption}
                      </h4>
                    </div>
                  </Link>

                  <div className="pt-4 border-t border-[#E8E0D7] flex items-center justify-between text-xs text-stone-500">
                    <span>Delivered &amp; assembled nationwide</span>
                    <Link
                      to="/contact"
                      className="font-medium text-[#C9A96A] hover:underline"
                    >
                      D.H.A. Showroom &rarr;
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* 5. Mobile Slide-Over Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 z-50 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="h-[calc(100vh-4rem)] w-full max-w-md bg-[#FBF6F3] overflow-y-auto px-6 py-6 border-r border-[#E8E0D7] shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-semibold tracking-[0.12em] text-[#C9A96A] uppercase">
                  Departments
                </p>
                <ThemeToggle />
              </div>

              <div className="divide-y divide-[#E8E0D7]">
                {NAV_CATEGORIES.map(cat => {
                  const isExpanded = expandedMobileCat === cat.title;
                  return (
                    <div key={cat.title} className="py-2.5">
                      <div className="flex items-center justify-between">
                        <Link
                          to={cat.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`text-sm font-semibold tracking-[0.06em] uppercase ${
                            cat.isSale ? 'text-[#d31245]' : 'text-[#1A1A1A]'
                          }`}
                        >
                          {cat.title}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setExpandedMobileCat(isExpanded ? null : cat.title)}
                          className="p-1.5 text-stone-500 hover:text-[#1A1A1A]:text-white"
                          aria-label={`Expand ${cat.title} subcategories`}
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                          />
                        </button>
                      </div>

                      {isExpanded && (
                        <ul className="mt-3 ml-3 space-y-2.5 border-l-2 border-[#E8E0D7] pl-3">
                          {cat.subcategories.map(sub => (
                            <li key={sub.title}>
                              <Link
                                to={sub.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`text-xs block py-0.5 ${
                                  sub.isBadge
                                    ? 'text-[#d31245] font-semibold'
                                    : 'text-stone-600'
                                }`}
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

              {/* Consultation & Quick Links */}
              <div className="mt-8 pt-6 border-t border-[#E8E0D7] space-y-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openProjectEnquiry();
                  }}
                  className="w-full py-3 px-4 bg-[#C9A96A] hover:bg-[#B89655] text-white text-xs font-semibold uppercase tracking-[0.1em] text-center transition-colors"
                >
                  Get a Free Quote
                </button>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <Link
                    to="/services"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2.5 border border-[#E8E0D7] bg-white text-center font-medium text-[#1A1A1A]"
                  >
                    Services
                  </Link>
                  <Link
                    to="/projects"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2.5 border border-[#E8E0D7] bg-white text-center font-medium text-[#1A1A1A]"
                  >
                    Our Work
                  </Link>
                  <Link
                    to="/faq"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2.5 border border-[#E8E0D7] bg-white text-center text-stone-700"
                  >
                    FAQ
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2.5 border border-[#E8E0D7] bg-white text-center text-stone-700"
                  >
                    Showroom
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile Footer info */}
            <div className="pt-6 border-t border-[#E8E0D7] text-xs text-stone-500">
              <p className="font-semibold text-stone-800">AGAS Interiors Karachi</p>
              <p className="mt-0.5">Shop 2, Plot 17-C, Khayaban-e-Sehar, Phase 7, D.H.A.</p>
              <a
                href="tel:+923158739625"
                className="mt-2 inline-block text-[#C9A96A] font-medium"
              >
                0315 8739625
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
