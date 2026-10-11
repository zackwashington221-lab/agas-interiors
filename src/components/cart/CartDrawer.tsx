import React from 'react';
import { X, Plus, Minus, Trash2, ArrowRight, MessageCircle, ShieldCheck, Truck } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalItems,
    subtotal
  } = useCart();

  if (!isCartOpen) return null;

  // WhatsApp order text generation
  const buildWhatsAppMessage = () => {
    let msg = `Hi AGAS Interiors! I would like to place an order for the following items:\n\n`;
    cartItems.forEach((item, idx) => {
      msg += `${idx + 1}. *${item.product.title}*\n`;
      msg += `   - Size: ${item.selectedSize}\n`;
      msg += `   - Finish: ${item.selectedFinish}\n`;
      msg += `   - Qty: ${item.quantity}\n`;
      msg += `   - Price: ${item.product.price}\n\n`;
    });
    msg += `*Total Order Value:* Rs ${subtotal.toLocaleString()}\n\n`;
    msg += `Please confirm availability and production lead time. Thank you!`;
    return encodeURIComponent(msg);
  };

  const whatsappUrl = `https://wa.me/923158739625?text=${buildWhatsAppMessage()}`;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1a1a1a]/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer content */}
      <div className="relative z-10 flex h-full w-full max-w-md flex-col bg-[#faf9f7] shadow-2xl border-l border-[#e6e2dc] transition-transform duration-500 ease-out">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#e6e2dc] px-6 py-5">
          <div className="flex items-center gap-2">
            <h2 className="text-sm font-semibold tracking-[0.1em] uppercase text-[#1a1a1a]">
              Your Cart
            </h2>
            <span className="text-xs text-stone-500 font-medium">({totalItems})</span>
          </div>
          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 text-stone-600 hover:text-[#1a1a1a] transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Delivery Banner */}
        <div className="bg-[#f2f0ec] px-6 py-2.5 flex items-center gap-2.5 text-xs text-stone-700 border-b border-[#e6e2dc]">
          <Truck className="w-4 h-4 text-[#a67c3d] shrink-0" />
          <span>Nationwide tracked delivery &amp; white-glove assembly</span>
        </div>

        {/* Body */}
        {cartItems.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-stone-200 flex items-center justify-center mb-4">
              <X className="w-8 h-8 text-stone-400" />
            </div>
            <h3 className="text-base font-semibold text-[#1a1a1a]">Your cart is empty</h3>
            <p className="mt-2 text-xs leading-relaxed text-stone-600 max-w-xs">
              Start with the pieces people come back for — bed sets, sofa sets and dressing tables, all made to order.
            </p>
            <div className="mt-6 flex flex-col w-full gap-2.5">
              <Link
                to="/bedroom-furniture"
                onClick={() => setIsCartOpen(false)}
                className="w-full bg-[#1a1a1a] text-white py-3 px-4 text-xs font-semibold uppercase tracking-[0.08em] hover:bg-[#a67c3d] transition-colors"
              >
                Start shopping
              </Link>
              <Link
                to="/sale"
                onClick={() => setIsCartOpen(false)}
                className="w-full border border-[#e6e2dc] bg-white text-[#d31245] py-3 px-4 text-xs font-semibold uppercase tracking-[0.08em] hover:bg-stone-50 transition-colors"
              >
                Or see what is on sale
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-[#e6e2dc]">
              {cartItems.map(item => (
                <div key={item.id} className="py-4 flex gap-4">
                  {/* Thumbnail */}
                  <div className="w-20 h-24 shrink-0 overflow-hidden bg-stone-200 relative">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-xs font-semibold text-[#1a1a1a] line-clamp-2">
                          {item.product.title}
                        </h4>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="text-stone-400 hover:text-[#d31245] transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="mt-1 space-y-0.5 text-[0.6875rem] text-stone-500">
                        <p>Size: {item.selectedSize}</p>
                        <p>Finish: {item.selectedFinish}</p>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      {/* Quantity controls */}
                      <div className="flex items-center border border-[#e6e2dc] bg-white">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 text-stone-600 hover:bg-stone-100"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2.5 text-xs font-medium text-stone-800">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 text-stone-600 hover:bg-stone-100"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p className="text-xs font-semibold text-[#1a1a1a]">
                          Rs {(item.product.numericPrice * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Summary */}
            <div className="border-t border-[#e6e2dc] bg-white px-6 py-5">
              <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                <span>Shipping</span>
                <span className="font-medium text-emerald-700">Free Nationwide</span>
              </div>
              <div className="flex items-center justify-between text-sm font-semibold text-[#1a1a1a] pb-4 border-b border-[#e6e2dc]">
                <span>Estimated Subtotal</span>
                <span>Rs {subtotal.toLocaleString()}</span>
              </div>

              <div className="mt-4 space-y-2.5">
                {/* WhatsApp Quick Order */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 px-4 text-xs font-semibold uppercase tracking-[0.08em] hover:bg-[#1ebc59] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Order / Inquire via WhatsApp
                </a>

                {/* Direct Checkout */}
                <button
                  type="button"
                  onClick={() => {
                    alert('Order initiated! An AGAS Interiors concierge will connect with you to confirm specifications.');
                    clearCart();
                    setIsCartOpen(false);
                  }}
                  className="w-full bg-[#1a1a1a] text-white py-3 px-4 text-xs font-semibold uppercase tracking-[0.08em] hover:bg-[#a67c3d] transition-colors flex items-center justify-center gap-2"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-3 flex items-center justify-center gap-1.5 text-[0.6875rem] text-stone-500">
                <ShieldCheck className="w-3.5 h-3.5 text-[#a67c3d]" />
                <span>10-Year Structural Frame Guarantee</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
