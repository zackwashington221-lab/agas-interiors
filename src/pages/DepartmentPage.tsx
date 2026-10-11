import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS, type Product } from '../data/products';
import { NAV_CATEGORIES } from '../data/navigation';
import { ProductCard } from '../components/product/ProductCard';
import { ChevronRight, MessageSquare } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface DepartmentPageProps {
  categorySlug?: string;
  isSale?: boolean;
}

export const DepartmentPage: React.FC<DepartmentPageProps> = ({ categorySlug: propSlug, isSale = false }) => {
  const params = useParams();
  const slug = propSlug || params.category || '';
  const { setIsConsultationOpen } = useCart();

  // Map slug to category name
  const categoryMap: Record<string, string> = {
    'bedroom-furniture': 'Bedroom',
    'living-room-furniture': 'Living',
    'dining-room-furniture': 'Dining',
    'kitchen-furniture': 'Kitchen',
    'kids-bedroom-furniture': 'Kids',
    'closet-system': 'Closet System',
    'entryway-furniture': 'Entryway',
    'doors': 'Doors',
    'outdoor-furniture': 'Outdoor',
    'home-decor': 'Home Decor',
    'sale': 'Sale'
  };

  const targetCategory = isSale ? 'Sale' : categoryMap[slug] || 'Bedroom';
  const navCat = NAV_CATEGORIES.find(c => c.title === targetCategory);

  const [selectedSubcat, setSelectedSubcat] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('featured');

  const products = useMemo(() => {
    let list: Product[] = [];
    if (isSale || targetCategory === 'Sale') {
      list = PRODUCTS.filter(p => p.discount !== null || p.badge === 'Sale');
    } else {
      list = PRODUCTS.filter(p => p.category === targetCategory);
      // Fallback if department has fewer items, show curated related items
      if (list.length === 0) {
        list = PRODUCTS.slice(0, 12);
      }
    }

    if (selectedSubcat !== 'All') {
      list = list.filter(p => p.subcategory.toLowerCase().includes(selectedSubcat.toLowerCase()));
    }

    if (sortBy === 'price-low') {
      return [...list].sort((a, b) => a.numericPrice - b.numericPrice);
    }
    if (sortBy === 'price-high') {
      return [...list].sort((a, b) => b.numericPrice - a.numericPrice);
    }
    return list;
  }, [targetCategory, isSale, selectedSubcat, sortBy]);

  return (
    <div className="bg-[#faf9f7] min-h-screen py-10 lg:py-14">
      <div className="mx-auto max-w-[1680px] px-5 sm:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 mb-6">
          <Link to="/" className="hover:text-[#1a1a1a]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#1a1a1a] font-medium uppercase tracking-wider">
            {isSale ? 'Sale & Clearance' : targetCategory}
          </span>
        </nav>

        {/* Header */}
        <div className="pb-8 border-b border-[#e6e2dc] mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="eyebrow text-[#825e2d]">Department Catalogue</span>
            <h1 className="display-l text-[#1a1a1a] mt-1 font-medium">
              {isSale ? 'Sale & Seasonal Markdowns' : `${targetCategory} Furniture`}
            </h1>
            <p className="mt-2 text-sm text-stone-600 max-w-xl">
              {isSale
                ? 'Limited made-to-order markdowns across luxury beds, living room suites, and dining setups with nationwide delivery.'
                : `Tailored architectural furniture designed and manufactured to order for modern residences across Pakistan.`}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsConsultationOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-3 border border-[#1a1a1a] text-xs font-semibold uppercase tracking-[0.1em] hover:bg-[#1a1a1a] hover:text-white transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-[#a67c3d]" />
            Request Free 3D Layout
          </button>
        </div>

        {/* Filter & Sort Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 mb-8 border-b border-[#e6e2dc]">
          {/* Subcategories */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
            <button
              type="button"
              onClick={() => setSelectedSubcat('All')}
              className={`px-3 py-1.5 text-xs uppercase tracking-wider whitespace-nowrap transition-all ${
                selectedSubcat === 'All'
                  ? 'bg-[#1a1a1a] text-white font-semibold'
                  : 'bg-white border border-[#e6e2dc] text-stone-700 hover:bg-stone-100'
              }`}
            >
              All Pieces
            </button>
            {navCat?.subcategories.map(sub => (
              <button
                key={sub.title}
                type="button"
                onClick={() => setSelectedSubcat(sub.title)}
                className={`px-3 py-1.5 text-xs uppercase tracking-wider whitespace-nowrap transition-all ${
                  selectedSubcat === sub.title
                    ? 'bg-[#1a1a1a] text-white font-semibold'
                    : 'bg-white border border-[#e6e2dc] text-stone-700 hover:bg-stone-100'
                }`}
              >
                {sub.title}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs text-stone-500 uppercase tracking-wider font-medium">Sort by:</span>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="bg-white border border-[#e6e2dc] px-3 py-1.5 text-xs text-stone-800 focus:outline-none"
            >
              <option value="featured">Featured Collection</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {products.length === 0 ? (
          <div className="py-20 text-center text-stone-500">
            <p className="text-base font-medium">No pieces found in this subcategory.</p>
            <button
              onClick={() => setSelectedSubcat('All')}
              className="mt-4 px-6 py-2.5 bg-[#1a1a1a] text-white text-xs uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <ul className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-12">
            {products.map(product => (
              <li key={product.id}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default DepartmentPage;
