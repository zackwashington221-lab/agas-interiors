import React, { useState, useMemo } from 'react';
import { PRODUCTS, type Product } from '../data/products';
import { ProductCard } from '../components/product/ProductCard';
import { useEnquiry } from '../context/EnquiryContext';
import { Compass, Hammer, ShieldCheck, Sparkles, SlidersHorizontal, ArrowRight } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Collections' },
  { id: 'Living', label: 'Living Room' },
  { id: 'Bedroom', label: 'Bedroom Suites' },
  { id: 'Dining', label: 'Dining Sets' },
  { id: 'Kitchen', label: 'Modular Kitchens' },
  { id: 'Closet System', label: 'Walk-In Closets' },
  { id: 'Doors', label: 'Architectural Doors' },
  { id: 'Outdoor', label: 'Outdoor & Garden' },
  { id: 'Entryway', label: 'Entryway & Consoles' }
];

export const ProductsPage: React.FC = () => {
  const { openProjectEnquiry } = useEnquiry();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSubcat, setSelectedSubcat] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');

  // Available subcategories based on selected category
  const availableSubcats = useMemo(() => {
    if (selectedCategory === 'all') return [];
    const subcats = new Set<string>();
    PRODUCTS.filter(p => p.category === selectedCategory).forEach(p => {
      if (p.subcategory) subcats.add(p.subcategory);
    });
    return Array.from(subcats);
  }, [selectedCategory]);

  const filteredProducts = useMemo(() => {
    let list: Product[] = PRODUCTS;

    if (selectedCategory !== 'all') {
      list = list.filter(p => p.category === selectedCategory);
    }

    if (selectedSubcat !== 'all') {
      list = list.filter(p => p.subcategory?.toLowerCase().includes(selectedSubcat.toLowerCase()));
    }

    if (sortBy === 'price-low') {
      return [...list].sort((a, b) => a.numericPrice - b.numericPrice);
    }
    if (sortBy === 'price-high') {
      return [...list].sort((a, b) => b.numericPrice - a.numericPrice);
    }
    return list;
  }, [selectedCategory, selectedSubcat, sortBy]);

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    setSelectedSubcat('all');
  };

  return (
    <div className="bg-[#FAF9F7] min-h-screen">
      {/* 1. Atelier Hero Section */}
      <section className="relative bg-[#1A1A1A] text-white py-16 sm:py-24 border-b border-[#2E2E2E] overflow-hidden">
        <div className="absolute inset-0 opacity-15 mix-blend-luminosity pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=1600&q=80"
            alt="AGAS Woodwork Atelier"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-[#C9A96A] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              <Hammer className="w-3.5 h-3.5" />
              The AGAS Atelier &bull; In-House Manufacturing
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight">
              Bespoke Furniture &amp; Architectural Woodwork
            </h1>
            <p className="mt-5 text-sm sm:text-base text-stone-300 leading-relaxed font-light">
              Unlike interior firms that outsource to third-party carpenters, AGAS Interiors operates an integrated manufacturing workshop in Karachi. Every bed, sofa, dining table, and walk-in wardrobe is engineered with seasoned Grade-A timber to fit the exact millimeter of your home renovation.
            </p>
          </div>

          {/* Value Badges */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10 text-xs">
            <div className="flex items-center gap-2.5 text-stone-300">
              <Compass className="w-4 h-4 text-[#C9A96A] shrink-0" />
              <span>Custom Sized to Your Floor Plan</span>
            </div>
            <div className="flex items-center gap-2.5 text-stone-300">
              <Hammer className="w-4 h-4 text-[#C9A96A] shrink-0" />
              <span>Burmese Teak &amp; American Walnut</span>
            </div>
            <div className="flex items-center gap-2.5 text-stone-300">
              <ShieldCheck className="w-4 h-4 text-[#C9A96A] shrink-0" />
              <span>5-Year Structural Integrity Warranty</span>
            </div>
            <div className="flex items-center gap-2.5 text-stone-300">
              <Sparkles className="w-4 h-4 text-[#C9A96A] shrink-0" />
              <span>Turnkey On-Site Fitout Included</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Filter Navigation Bar */}
      <section className="bg-[#F5EFEB] border-b border-[#E8E0D7] py-6 shadow-xs">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          {/* Main Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map(cat => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-4 py-2 text-xs font-semibold tracking-[0.08em] uppercase whitespace-nowrap transition-all rounded-full ${
                    isActive
                      ? 'bg-[#1A1A1A] text-white shadow-xs'
                      : 'bg-white text-stone-700 hover:bg-[#EFEAE4] border border-[#E0D8D0]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Subcategory Pills + Sorting Controls */}
          <div className="mt-3 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#E8E0D7]/60 text-xs text-stone-600">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <span className="font-medium text-stone-400 uppercase tracking-wider text-[0.6875rem]">Filter:</span>
              <button
                onClick={() => setSelectedSubcat('all')}
                className={`px-3 py-1 rounded-sm text-xs font-medium transition-colors ${
                  selectedSubcat === 'all'
                    ? 'bg-[#C9A96A] text-white'
                    : 'bg-stone-200/60 hover:bg-stone-200 text-stone-800'
                }`}
              >
                All Subcategories ({filteredProducts.length})
              </button>
              {availableSubcats.map(sub => (
                <button
                  key={sub}
                  onClick={() => setSelectedSubcat(sub)}
                  className={`px-3 py-1 rounded-sm text-xs font-medium transition-colors whitespace-nowrap ${
                    selectedSubcat === sub
                      ? 'bg-[#C9A96A] text-white'
                      : 'bg-stone-200/60 hover:bg-stone-200 text-stone-800'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-3.5 h-3.5 text-stone-400" />
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="bg-white border border-[#E0D8D0] rounded-sm px-3 py-1 text-xs text-stone-800 focus:outline-none focus:border-[#C9A96A]"
              >
                <option value="featured">Featured Curations</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Products Grid */}
      <main className="mx-auto max-w-[1400px] px-5 sm:px-8 py-12 sm:py-16">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-xl border border-[#E8E0D7] p-8">
            <h3 className="text-lg font-medium text-stone-800">No pieces found in this subcategory</h3>
            <p className="mt-2 text-xs text-stone-500">
              We manufacture any bespoke custom design. Request a custom 3D drawing from our studio.
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSelectedSubcat('all'); }}
              className="mt-6 bg-[#C9A96A] text-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-sm"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* 4. Custom Architectural Commission Banner */}
        <section className="mt-20 bg-[#1E1E1E] text-white rounded-2xl p-8 sm:p-14 relative overflow-hidden border border-[#333]">
          <div className="relative z-10 max-w-2xl">
            <span className="eyebrow text-[#C9A96A] mb-2 block tracking-[0.16em]">
              Bespoke Joinery &bull; Made to Measurement
            </span>
            <h2 className="text-2xl sm:text-4xl font-medium tracking-tight">
              Don&apos;t See the Exact Dimensions You Need?
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
              Because AGAS Interiors operates our own joinery workshop in Karachi, we can fabricate any dining table length, sectional configuration, modular wardrobe depth, or headboard height to match your architectural floor plan.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => openProjectEnquiry()}
                className="bg-[#C9A96A] hover:bg-[#B89655] text-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] rounded-sm transition-colors shadow-md"
              >
                Request Custom Dimensions
              </button>
              <a
                href="https://wa.me/923158739625?text=Hello%20AGAS%20Interiors%2C%20I%20want%20to%20discuss%20custom%20furniture%20dimensions%20for%20my%20renovation."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white text-white hover:text-[#1A1A1A] border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] rounded-sm backdrop-blur-xs transition-colors flex items-center gap-2"
              >
                WhatsApp Master Joiner
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductsPage;
