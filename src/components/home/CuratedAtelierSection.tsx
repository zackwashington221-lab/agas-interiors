import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS, type Product } from '../../data/products';
import { ProductCard } from '../product/ProductCard';
import { ArrowRight } from 'lucide-react';

const TABS = [
  { id: 'all', label: 'Curated Highlights' },
  { id: 'Living', label: 'Living' },
  { id: 'Bedroom', label: 'Bedroom' },
  { id: 'Dining', label: 'Dining' },
  { id: 'Outdoor', label: 'Outdoor' }
];

export const CuratedAtelierSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const displayedProducts: Product[] = React.useMemo(() => {
    if (activeTab === 'all') {
      // Pick 8 signature pieces across categories
      const selectedIds = [
        'agas-living-1', // Splendore sofa
        'agas-bed-1',    // Bella Notte bed
        'agas-dining-1', // Calacatta table
        'agas-outdoor-1',// Aero teak outdoor lounge
        'agas-outdoor-5',// Riviera sun loungers
        'agas-outdoor-7',// Suspended timber daybed swing
        'agas-outdoor-8',// Teak travertine coffee table
        'agas-living-2'  // Boucle accent chair
      ];
      const matches = PRODUCTS.filter(p => selectedIds.includes(p.id));
      return matches.length >= 6 ? matches : PRODUCTS.slice(0, 8);
    }
    return PRODUCTS.filter(p => p.category === activeTab).slice(0, 8);
  }, [activeTab]);

  return (
    <section className="bg-[#FAF9F7] py-20 lg:py-28 border-b border-[#E8E0D7]">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="eyebrow text-[#825e2d] mb-2 block tracking-[0.16em]">
              The Furniture Atelier
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1A1A1A] leading-tight">
              Bespoke Handcrafted Furniture
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-stone-600 max-w-xl font-light leading-relaxed">
              Every piece in our catalogue is manufactured inside our Karachi workshop to match the exact floor plan, timber finish, and upholstery of your home renovation project.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#C9A96A] text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.1em] transition-colors rounded-none shadow-xs shrink-0 self-start md:self-end"
          >
            <span>Explore All 50+ Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-[#E8E0D7] scrollbar-none">
          {TABS.map(tab => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-xs font-semibold tracking-[0.08em] uppercase transition-all whitespace-nowrap rounded-full ${
                  isActive
                    ? 'bg-[#1A1A1A] text-white shadow-xs'
                    : 'bg-white text-stone-700 hover:bg-[#EFEAE4] border border-[#E0D8D0]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Products Banner Callout */}
        <div className="mt-14 p-6 sm:p-8 bg-[#F3EDE6] border border-[#E0D8D0] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-base sm:text-lg font-medium text-stone-900">
              Looking for Kitchens, Wardrobes, Doors, or Custom Dining?
            </h4>
            <p className="text-xs text-stone-600 mt-1 font-light">
              Visit our dedicated Products Atelier to view our full collection of bespoke bedroom sets, modular kitchens, closets, and architectural woodwork.
            </p>
          </div>
          <Link
            to="/products"
            className="shrink-0 bg-[#C9A96A] hover:bg-[#B89655] text-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] transition-colors rounded-none shadow-sm flex items-center gap-2"
          >
            <span>View Complete Products Hub</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CuratedAtelierSection;
