import React, { useState, useMemo } from 'react';
import { Search, X, Tag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { PRODUCTS, type Product } from '../../data/products';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, setQuickViewProduct } = useCart();
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Bedroom', 'Living', 'Dining', 'Kitchen', 'Sale'];

  const results = useMemo(() => {
    let filtered = PRODUCTS;
    if (selectedCategory === 'Sale') {
      filtered = filtered.filter(p => p.discount !== null || p.badge === 'Sale');
    } else if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (!query.trim()) {
      return filtered.slice(0, 12);
    }

    const q = query.toLowerCase().trim();
    return filtered.filter(
      p =>
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.subcategory.toLowerCase().includes(q)
    );
  }, [query, selectedCategory]);

  if (!isSearchOpen) return null;

  const handleSelectProduct = (product: Product) => {
    setIsSearchOpen(false);
    setQuickViewProduct(product);
  };

  return (
    <div className="fixed inset-0 z-[110] flex flex-col justify-start">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1a1a1a]/70 backdrop-blur-sm transition-opacity"
        onClick={() => setIsSearchOpen(false)}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 mx-auto mt-12 w-full max-w-4xl bg-[#faf9f7] shadow-2xl border border-[#e6e2dc] overflow-hidden">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 border-b border-[#e6e2dc] px-6 py-4 bg-white">
          <Search className="w-5 h-5 text-[#825e2d] shrink-0" />
          <input
            type="text"
            placeholder="Search bed sets, velvet sectionals, modular kitchens, bar stools..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm text-[#1a1a1a] placeholder-stone-400 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="text-stone-400 hover:text-stone-700"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={() => setIsSearchOpen(false)}
            className="border-l border-[#e6e2dc] pl-4 text-xs font-semibold uppercase tracking-[0.1em] text-stone-600 hover:text-[#1a1a1a]"
          >
            Esc
          </button>
        </div>

        {/* Quick Filter Chips */}
        <div className="flex items-center gap-2 px-6 py-3 bg-[#f2f0ec]/80 border-b border-[#e6e2dc] overflow-x-auto">
          <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-stone-500 mr-2">
            Filter:
          </span>
          {categories.map(cat => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 text-xs uppercase tracking-[0.06em] transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#1a1a1a] text-white font-semibold'
                  : 'bg-white text-stone-700 hover:bg-stone-200 border border-[#e6e2dc]'
              }`}
            >
              {cat === 'Sale' && <Tag className="w-3 h-3 inline mr-1 text-[#d31245]" />}
              {cat}
            </button>
          ))}
        </div>

        {/* Results Grid */}
        <div className="max-h-[60vh] overflow-y-auto p-6">
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs text-stone-500 font-medium">
              Showing {results.length} pieces
            </p>
          </div>

          {results.length === 0 ? (
            <div className="py-12 text-center text-stone-500">
              <p className="text-sm font-medium">No pieces found matching &ldquo;{query}&rdquo;</p>
              <p className="text-xs mt-1">Try searching for &quot;Nova&quot;, &quot;Boucle&quot;, &quot;Modular Kitchen&quot;, or &quot;Table&quot;</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {results.map(product => (
                <div
                  key={product.id}
                  onClick={() => handleSelectProduct(product)}
                  className="group cursor-pointer bg-white border border-[#e6e2dc] hover:border-[#a67c3d] transition-all p-2 flex flex-col justify-between"
                >
                  <div className="aspect-4/5 overflow-hidden bg-stone-200 relative mb-2">
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {product.discount && (
                      <span className="absolute top-1 left-1 bg-[#d31245] text-white text-[0.625rem] font-bold px-1.5 py-0.5 uppercase">
                        {product.discount}
                      </span>
                    )}
                  </div>

                  <div>
                    <span className="text-[0.625rem] font-semibold uppercase tracking-[0.08em] text-[#825e2d] block mb-0.5">
                      {product.category}
                    </span>
                    <h4 className="text-xs font-semibold text-[#1a1a1a] line-clamp-1 group-hover:text-[#a67c3d] transition-colors">
                      {product.title}
                    </h4>
                    <p className="text-xs font-medium text-stone-900 mt-1">
                      {product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
