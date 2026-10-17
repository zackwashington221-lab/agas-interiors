import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { useEnquiry } from '../../context/EnquiryContext';
import { Eye, FileText } from 'lucide-react';
import { optimizeImage } from '../../utils/imageOptimizer';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { setQuickViewProduct } = useCart();
  const { openProductEnquiry } = useEnquiry();

  // Superfast optimized dimensions: 520px wide at q=75 (80%+ payload reduction)
  const primaryImage = optimizeImage(product.images[0], 520, 75);
  const secondaryImage = optimizeImage(product.images[1] || product.images[0], 520, 70);

  return (
    <article className="group relative flex flex-col bg-[#1E1E1E] text-white p-3.5 sm:p-4 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 border border-[#2B2B2B] hover:border-[#444]">
      {/* Image Container with Smooth Placeholder */}
      <div className="relative overflow-hidden bg-[#141414] rounded-lg">
        <Link
          to={`/product/${product.id}`}
          className="block cursor-pointer"
          tabIndex={-1}
          aria-label={product.title}
        >
          <div className="relative aspect-4/5 overflow-hidden rounded-lg bg-[#242424]">
            {/* Primary Image */}
            <img
              src={primaryImage}
              alt={product.title}
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover opacity-100 transition-opacity duration-500 ease-out group-hover:opacity-0"
            />
            {/* Secondary / Hover Image */}
            <img
              src={secondaryImage}
              alt={`${product.title} detail`}
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 group-hover:scale-105 transition-transform"
            />
          </div>
        </Link>

        {/* Top-Left Red SALE Badge */}
        <div className="absolute top-2.5 left-2.5 z-10">
          {product.discount ? (
            <span className="bg-[#E11D48] text-white text-[0.625rem] font-bold tracking-[0.12em] uppercase px-2.5 py-0.5 rounded-sm shadow-sm">
              SALE
            </span>
          ) : product.badge ? (
            <span className="bg-[#C9A96A] text-black text-[0.625rem] font-bold tracking-[0.12em] uppercase px-2.5 py-0.5 rounded-sm shadow-sm">
              {product.badge}
            </span>
          ) : null}
        </div>

        {/* Hover Action Overlay */}
        <div className="absolute bottom-3 inset-x-3 z-10 flex gap-2 opacity-0 translate-y-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0">
          <Link
            to={`/product/${product.id}`}
            className="flex-1 bg-white hover:bg-[#C9A96A] text-[#141414] hover:text-white py-2 text-[0.6875rem] font-bold tracking-[0.08em] uppercase rounded-md shadow-lg transition-colors text-center flex items-center justify-center gap-1.5"
          >
            View Details
          </Link>
          <button
            type="button"
            onClick={e => {
              e.stopPropagation();
              e.preventDefault();
              openProductEnquiry(product);
            }}
            aria-label="Request Quote"
            className="w-9 bg-[#2A2A2A] hover:bg-[#C9A96A] text-white flex items-center justify-center rounded-md shadow-lg transition-colors"
          >
            <FileText className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={e => {
              e.stopPropagation();
              e.preventDefault();
              setQuickViewProduct(product);
            }}
            aria-label="Quick View Details"
            className="w-9 bg-[#2A2A2A] hover:bg-[#C9A96A] text-white flex items-center justify-center rounded-md shadow-lg transition-colors"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Meta info */}
      <div className="mt-3.5 flex flex-col">
        <Link to={`/product/${product.id}`}>
          <h3 className="cursor-pointer text-[0.9375rem] font-medium leading-snug text-white/95 transition-colors duration-200 hover:text-[#C9A96A] line-clamp-1">
            {product.title}
          </h3>
        </Link>

        <div className="mt-2 flex items-baseline flex-wrap gap-2 text-[0.875rem]">
          {/* Main Price */}
          <span className="font-semibold text-[#D4AF37] text-[0.9375rem]">
            {product.price}
          </span>
          {/* Struck-through original price */}
          {product.originalPrice && product.originalPrice !== product.price && (
            <span className="text-[0.8125rem] text-[#6E6E6E] line-through">
              {product.originalPrice}
            </span>
          )}
          {/* Discount Percentage */}
          {product.discount && (
            <span className="text-[0.8125rem] font-medium text-[#E11D48]">
              {product.discount}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};
