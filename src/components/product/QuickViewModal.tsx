import React, { useState, useEffect } from 'react';
import { X, MessageCircle, ShoppingBag, Clock } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const QuickViewModal: React.FC = () => {
  const { quickViewProduct, setQuickViewProduct, addToCart } = useCart();
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedFinish, setSelectedFinish] = useState<string>('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (quickViewProduct) {
      setSelectedImageIdx(0);
      setSelectedSize(quickViewProduct.sizes[0] || 'Standard');
      setSelectedFinish(quickViewProduct.finishes[0] || 'Standard');
      setQuantity(1);
    }
  }, [quickViewProduct]);

  if (!quickViewProduct) return null;

  const product = quickViewProduct;

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize, selectedFinish);
    setQuickViewProduct(null);
  };

  const whatsappInquiryUrl = `https://wa.me/923158739625?text=${encodeURIComponent(
    `Hi AGAS Interiors! I would like to inquire about "${product.title}" (${selectedSize}, ${selectedFinish}). Price listed: ${product.price}. Please share fabric swatches and lead time.`
  )}`;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1a1a1a]/75 backdrop-blur-xs transition-opacity"
        onClick={() => setQuickViewProduct(null)}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 max-h-[90vh] w-full max-w-4xl bg-[#faf9f7] border border-[#e6e2dc] shadow-2xl overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 p-2 text-stone-500 hover:text-[#1a1a1a] bg-white/80 backdrop-blur-xs"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Gallery */}
          <div className="p-6 bg-[#f2f0ec]/60 border-b md:border-b-0 md:border-r border-[#e6e2dc] flex flex-col justify-between">
            <div className="relative aspect-4/5 overflow-hidden bg-stone-200">
              <img
                src={product.images[selectedImageIdx] || product.images[0]}
                alt={product.title}
                className="w-full h-full object-cover transition-all duration-500"
              />
              {product.discount && (
                <span className="absolute top-3 left-3 bg-[#d31245] text-white text-xs font-semibold px-2.5 py-1 uppercase tracking-wider">
                  {product.discount}
                </span>
              )}
            </div>

            {/* Thumbnail list */}
            {product.images.length > 1 && (
              <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelectedImageIdx(i)}
                    className={`relative w-16 h-16 shrink-0 overflow-hidden border-2 transition-all ${
                      selectedImageIdx === i ? 'border-[#a67c3d]' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Details & Form */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-[#825e2d]">
                {product.category} &bull; {product.subcategory}
              </span>
              <h2 className="mt-1 text-xl sm:text-2xl font-medium text-[#1a1a1a] leading-snug">
                {product.title}
              </h2>

              {/* Price Row */}
              <div className="mt-3 flex items-baseline gap-3">
                <span className="text-xl font-semibold text-[#1a1a1a]">
                  {product.price}
                </span>
                {product.originalPrice && product.originalPrice !== product.price && (
                  <span className="text-sm text-stone-400 line-through">
                    {product.originalPrice}
                  </span>
                )}
                {product.discount && (
                  <span className="text-xs font-semibold text-[#d31245]">
                    Save {product.discount}
                  </span>
                )}
              </div>

              {/* Lead Time Note */}
              <div className="mt-3 flex items-center gap-2 text-xs text-stone-600 bg-stone-100 px-3 py-2 border border-[#e6e2dc]">
                <Clock className="w-3.5 h-3.5 text-[#a67c3d] shrink-0" />
                <span>{product.leadTime}</span>
              </div>

              {/* Description */}
              <p className="mt-4 text-xs leading-relaxed text-stone-600">
                {product.description}
              </p>

              {/* Size Selector */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mt-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-700">
                      Configuration / Size:
                    </span>
                    <span className="text-xs text-stone-500">{selectedSize}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map(size => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`px-3 py-1.5 text-xs font-medium border transition-all ${
                          selectedSize === size
                            ? 'border-[#1a1a1a] bg-[#1a1a1a] text-white'
                            : 'border-[#e6e2dc] bg-white text-stone-700 hover:border-stone-400'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Finish Selector */}
              {product.finishes && product.finishes.length > 0 && (
                <div className="mt-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-700">
                      Upholstery / Finish:
                    </span>
                    <span className="text-xs text-stone-500">{selectedFinish}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.finishes.map(finish => (
                      <button
                        key={finish}
                        type="button"
                        onClick={() => setSelectedFinish(finish)}
                        className={`px-3 py-1.5 text-xs font-medium border transition-all ${
                          selectedFinish === finish
                            ? 'border-[#a67c3d] bg-[#f2f0ec] text-[#825e2d]'
                            : 'border-[#e6e2dc] bg-white text-stone-700 hover:border-stone-400'
                        }`}
                      >
                        {finish}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Specifications */}
              {product.specifications && (
                <div className="mt-6 border-t border-[#e6e2dc] pt-4">
                  <p className="text-[0.6875rem] font-semibold uppercase tracking-wider text-stone-500 mb-2">
                    Craftsmanship &amp; Construction
                  </p>
                  <dl className="grid grid-cols-2 gap-y-1.5 text-xs">
                    {product.specifications.map((spec, i) => (
                      <div key={i} className="col-span-2 sm:col-span-1">
                        <dt className="text-stone-400 text-[0.6875rem]">{spec.label}</dt>
                        <dd className="font-medium text-stone-700">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
            </div>

            {/* CTAs */}
            <div className="mt-8 pt-4 border-t border-[#e6e2dc] space-y-3">
              <div className="flex gap-3">
                {/* Quantity */}
                <div className="flex items-center border border-[#e6e2dc] bg-white">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-stone-600 hover:bg-stone-100"
                  >
                    -
                  </button>
                  <span className="px-3 text-xs font-semibold">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-stone-600 hover:bg-stone-100"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart */}
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex-1 bg-[#1a1a1a] text-white py-3 px-6 text-xs font-semibold uppercase tracking-[0.1em] hover:bg-[#a67c3d] transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>

              {/* Inquire on WhatsApp */}
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white py-2.5 px-4 text-xs font-semibold uppercase tracking-[0.08em] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Inquire or Customize via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
