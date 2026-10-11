import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { ShoppingBag, MessageCircle, Truck, Clock, ShieldCheck, ChevronRight } from 'lucide-react';
import { ProductCard } from '../components/product/ProductCard';

export const ProductDetailPage: React.FC = () => {
  const { slug, id } = useParams();
  const { addToCart } = useCart();

  // Find product by id, slug, or matching link
  const product = PRODUCTS.find(
    p =>
      p.id === id ||
      p.link === `/${slug}` ||
      p.link.replace('/', '') === slug ||
      p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug
  ) || PRODUCTS[0];

  const [selectedImg, setSelectedImg] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || 'Standard');
  const [selectedFinish, setSelectedFinish] = useState(product.finishes[0] || 'Standard');
  const [qty, setQty] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSelectedImg(0);
    setSelectedSize(product.sizes[0] || 'Standard');
    setSelectedFinish(product.finishes[0] || 'Standard');
    setQty(1);
  }, [product]);

  const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const whatsappInquiryUrl = `https://wa.me/923158739625?text=${encodeURIComponent(
    `Hi AGAS Interiors! I would like to inquire about "${product.title}" (${selectedSize}, ${selectedFinish}). Price listed: ${product.price}. Please share fabric swatches and lead time.`
  )}`;

  return (
    <div className="bg-[#faf9f7] min-h-screen py-10 lg:py-16">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 mb-8">
          <Link to="/" className="hover:text-[#1a1a1a]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to={`/${product.category.toLowerCase()}-furniture`} className="hover:text-[#1a1a1a]">
            {product.category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#1a1a1a] font-medium truncate max-w-xs">{product.title}</span>
        </nav>

        {/* Product Details Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Gallery Column */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-4/5 overflow-hidden bg-stone-200">
              <img
                src={product.images[selectedImg] || product.images[0]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              {product.discount && (
                <span className="absolute top-4 left-4 bg-[#d31245] text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                  {product.discount}
                </span>
              )}
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelectedImg(i)}
                    className={`relative w-20 h-24 shrink-0 overflow-hidden border-2 transition-all ${
                      selectedImg === i ? 'border-[#a67c3d]' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Configuration & Order Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="eyebrow text-[#825e2d]">
                {product.category} &bull; {product.subcategory}
              </span>
              <h1 className="text-2xl sm:text-3xl font-medium text-[#1a1a1a] mt-1.5 leading-snug">
                {product.title}
              </h1>

              {/* Price */}
              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-2xl font-semibold text-[#1a1a1a]">
                  {product.price}
                </span>
                {product.originalPrice && product.originalPrice !== product.price && (
                  <span className="text-base text-stone-400 line-through">
                    {product.originalPrice}
                  </span>
                )}
                {product.discount && (
                  <span className="text-xs font-semibold text-[#d31245] bg-[#d31245]/10 px-2 py-0.5">
                    Save {product.discount}
                  </span>
                )}
              </div>

              {/* Lead Time */}
              <div className="mt-4 flex items-center gap-2.5 text-xs text-stone-700 bg-[#f2f0ec] p-3 border border-[#e6e2dc]">
                <Clock className="w-4 h-4 text-[#a67c3d] shrink-0" />
                <span>{product.leadTime}</span>
              </div>

              {/* Description */}
              <p className="mt-5 text-xs sm:text-sm text-stone-600 leading-relaxed">
                {product.description}
              </p>

              {/* Size Selector */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mt-6">
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                    <span>Dimensions / Size:</span>
                    <span className="text-stone-500 font-normal">{selectedSize}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map(size => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`px-3.5 py-2 text-xs font-medium border transition-all ${
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
                <div className="mt-6">
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                    <span>Fabric / Surface Material:</span>
                    <span className="text-stone-500 font-normal">{selectedFinish}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.finishes.map(finish => (
                      <button
                        key={finish}
                        type="button"
                        onClick={() => setSelectedFinish(finish)}
                        className={`px-3.5 py-2 text-xs font-medium border transition-all ${
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
                <div className="mt-8 border-t border-[#e6e2dc] pt-6">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-800 mb-3">
                    Construction &amp; Architectural Specifications
                  </h3>
                  <dl className="grid grid-cols-2 gap-y-2 text-xs">
                    {product.specifications.map((spec, i) => (
                      <div key={i} className="col-span-2 sm:col-span-1">
                        <dt className="text-stone-400 text-[0.6875rem] uppercase">{spec.label}</dt>
                        <dd className="font-medium text-stone-800 mt-0.5">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
            </div>

            {/* CTAs */}
            <div className="mt-8 pt-6 border-t border-[#e6e2dc] space-y-3">
              <div className="flex gap-3">
                <div className="flex items-center border border-[#e6e2dc] bg-white">
                  <button
                    type="button"
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="px-3.5 py-2.5 text-stone-600 hover:bg-stone-100"
                  >
                    -
                  </button>
                  <span className="px-3.5 text-xs font-semibold">{qty}</span>
                  <button
                    type="button"
                    onClick={() => setQty(qty + 1)}
                    className="px-3.5 py-2.5 text-stone-600 hover:bg-stone-100"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => addToCart(product, qty, selectedSize, selectedFinish)}
                  className="flex-1 bg-[#1a1a1a] text-white py-3.5 px-6 text-xs font-semibold uppercase tracking-[0.1em] hover:bg-[#a67c3d] transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>

              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white py-3 px-4 text-xs font-semibold uppercase tracking-[0.08em] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Customize or Inquire on WhatsApp
              </a>

              <div className="pt-3 grid grid-cols-2 gap-2 text-[0.6875rem] text-stone-500">
                <div className="flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-[#a67c3d]" />
                  <span>Free tracked delivery</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#a67c3d]" />
                  <span>10-Year Frame Warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Pieces */}
        {related.length > 0 && (
          <div className="mt-20 pt-12 border-t border-[#e6e2dc]">
            <h3 className="display-l text-[#1a1a1a] mb-8 font-medium">
              Pieces that sit together
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {related.map(p => (
                <li key={p.id}>
                  <ProductCard product={p} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default ProductDetailPage;
