import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import {
  ShoppingBag,
  MessageCircle,
  Truck,
  Clock,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
  Ruler,
  CheckCircle2
} from 'lucide-react';
import { ProductCard } from '../components/product/ProductCard';
import { optimizeImage, preloadImages } from '../utils/imageOptimizer';

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

    // Instant background preloading for all gallery images
    preloadImages(product.images, 1000, 80);
  }, [product]);

  const handlePrevImg = () => {
    setSelectedImg(prev => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const handleNextImg = () => {
    setSelectedImg(prev => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const whatsappInquiryUrl = `https://wa.me/923158739625?text=${encodeURIComponent(
    `Hi AGAS Interiors! I would like to inquire about "${product.title}" (${selectedSize}, ${selectedFinish}). Price listed: ${product.price}. Please share fabric swatches, wood finishes, and delivery lead time.`
  )}`;

  return (
    <div className="bg-[#faf9f7] min-h-screen py-10 lg:py-16">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 mb-8 flex-wrap">
          <Link to="/" className="hover:text-[#1a1a1a]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/products" className="hover:text-[#1a1a1a]">Products Atelier</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to={`/${product.category.toLowerCase()}-furniture`} className="hover:text-[#1a1a1a]">
            {product.category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#1a1a1a] font-medium truncate max-w-xs">{product.title}</span>
        </nav>

        {/* Product Details Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Gallery Column (At least 3 images interactive showcase) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Stage Image */}
            <div className="relative aspect-4/5 sm:aspect-square lg:aspect-4/5 overflow-hidden bg-stone-200 rounded-2xl border border-stone-200 shadow-md group">
              <img
                src={optimizeImage(product.images[selectedImg] || product.images[0], 1000, 80)}
                alt={`${product.title} - angle ${selectedImg + 1}`}
                referrerPolicy="no-referrer"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />

              {/* Prev / Next navigation arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrevImg}
                    aria-label="Previous Image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#C9A96A] text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow-lg backdrop-blur-sm"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextImg}
                    aria-label="Next Image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#C9A96A] text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow-lg backdrop-blur-sm"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Top Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                {product.discount && (
                  <span className="bg-[#E11D48] text-white text-[0.6875rem] font-bold px-3 py-1 uppercase tracking-wider rounded-md shadow-md">
                    {product.discount}
                  </span>
                )}
                <span className="bg-black/75 backdrop-blur-md text-[#C9A96A] text-[0.625rem] font-semibold px-2.5 py-0.5 uppercase tracking-wider rounded-md border border-[#C9A96A]/30">
                  Artisan Handcrafted
                </span>
              </div>

              {/* Bottom Photo Counter */}
              <div className="absolute bottom-4 right-4 bg-black/75 backdrop-blur-md text-white text-[0.6875rem] px-3 py-1 rounded-full font-medium tracking-wide border border-white/10">
                Photo {selectedImg + 1} of {product.images.length}
              </div>
            </div>

            {/* Thumbnails Row (Displays all 3+ photos with active focus) */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 pt-1">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelectedImg(i)}
                    className={`relative aspect-4/5 overflow-hidden rounded-xl border-2 transition-all ${
                      selectedImg === i
                        ? 'border-[#C9A96A] ring-2 ring-[#C9A96A]/40 shadow-md scale-[1.02]'
                        : 'border-stone-200 opacity-70 hover:opacity-100 hover:border-stone-400'
                    }`}
                  >
                    <img
                      src={optimizeImage(img, 240, 65)}
                      alt={`${product.title} preview ${i + 1}`}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-1 right-1 bg-black/70 text-[0.5625rem] text-white px-1.5 py-0.5 rounded">
                      {i === 0 ? 'Primary' : i === 1 ? 'Angle' : i === 2 ? 'Detail' : `View ${i + 1}`}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Configuration & Order Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#825e2d]">
                {product.category} &bull; {product.subcategory}
              </span>
              <h1 className="text-2xl sm:text-3xl font-medium text-[#1a1a1a] mt-1.5 leading-snug">
                {product.title}
              </h1>

              {/* Price Display */}
              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a]">
                  {product.price}
                </span>
                {product.originalPrice && product.originalPrice !== product.price && (
                  <span className="text-base text-stone-400 line-through">
                    {product.originalPrice}
                  </span>
                )}
                {product.discount && (
                  <span className="text-xs font-semibold text-[#E11D48] bg-[#E11D48]/10 px-2.5 py-1 rounded">
                    Save {product.discount}
                  </span>
                )}
              </div>

              {/* Lead Time */}
              <div className="mt-4 flex items-center gap-2.5 text-xs text-stone-700 bg-[#f2f0ec] p-3 rounded-lg border border-[#e6e2dc]">
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
                        className={`px-3.5 py-2 text-xs font-medium rounded-md border transition-all ${
                          selectedSize === size
                            ? 'border-[#1a1a1a] bg-[#1a1a1a] text-white shadow-sm'
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
                    <span>Fabric / Timber Finish:</span>
                    <span className="text-stone-500 font-normal">{selectedFinish}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.finishes.map(finish => (
                      <button
                        key={finish}
                        type="button"
                        onClick={() => setSelectedFinish(finish)}
                        className={`px-3.5 py-2 text-xs font-medium rounded-md border transition-all ${
                          selectedFinish === finish
                            ? 'border-[#a67c3d] bg-[#f2f0ec] text-[#825e2d] font-semibold'
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
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-800 mb-3 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A96A]" />
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

              {/* Architectural Customization Callout */}
              <div className="mt-6 p-4 bg-[#F4EFEA] border border-[#E2D8CC] rounded-xl flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#C9A96A]/20 flex items-center justify-center shrink-0 text-[#825E2D]">
                  <Ruler className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[0.8125rem] font-bold text-[#1A1A1A]">
                    Architectural Blueprint Customization
                  </h4>
                  <p className="mt-0.5 text-xs text-stone-600 leading-relaxed">
                    Need this piece built to exact room dimensions or customized for your floor plan? AGAS interior architects provide on-site surveys and bespoke carpentry across Karachi.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 pt-6 border-t border-[#e6e2dc] space-y-3">
              <div className="flex gap-3">
                <div className="flex items-center border border-[#e6e2dc] bg-white rounded-lg overflow-hidden">
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
                  className="flex-1 bg-[#1a1a1a] text-white py-3.5 px-6 text-xs font-semibold uppercase tracking-[0.1em] hover:bg-[#a67c3d] rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>

              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white py-3 px-4 text-xs font-semibold uppercase tracking-[0.08em] rounded-lg transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Inquire or Customize on WhatsApp
              </a>

              <div className="pt-2 grid grid-cols-2 gap-2 text-[0.6875rem] text-stone-500">
                <div className="flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-[#a67c3d]" />
                  <span>Free Karachi Delivery &amp; Assembly</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#a67c3d]" />
                  <span>10-Year Frame Warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Pieces Section */}
        {related.length > 0 && (
          <div className="mt-20 pt-12 border-t border-[#e6e2dc]">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#C9A96A]">
                  Harmonized Atelier Collection
                </span>
                <h3 className="text-2xl sm:text-3xl font-medium text-[#1a1a1a] mt-1">
                  Pieces That Sit Together
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Curated by AGAS Interior Architects to harmonize with this aesthetic and material palette.
                </p>
              </div>
              <Link
                to="/products"
                className="text-xs font-semibold text-[#1a1a1a] hover:text-[#C9A96A] uppercase tracking-wider inline-flex items-center gap-1"
              >
                View Full Atelier Collection &rarr;
              </Link>
            </div>
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
