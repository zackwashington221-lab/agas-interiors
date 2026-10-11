import React, { useState } from 'react';
import { X, MessageCircle, CheckCircle2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const ConsultationModal: React.FC = () => {
  const { isConsultationOpen, setIsConsultationOpen, showToast } = useCart();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Karachi');
  const [roomType, setRoomType] = useState('Bedroom');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isConsultationOpen) return null;

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*Free Design Consultation Request - AGAS Interiors*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*City:* ${city}\n*Room Type:* ${roomType}\n*Notes / Room Details:* ${notes || 'Photo / measurements to be provided in chat.'}`;
    const url = `https://wa.me/923158739625?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    setSubmitted(true);
    showToast('Consultation request forwarded to AGAS design team on WhatsApp');
    setTimeout(() => {
      setIsConsultationOpen(false);
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[130] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1a1a1a]/70 backdrop-blur-xs transition-opacity"
        onClick={() => setIsConsultationOpen(false)}
      />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-lg bg-[#faf9f7] border border-[#e6e2dc] shadow-2xl p-6 sm:p-8">
        <button
          type="button"
          onClick={() => setIsConsultationOpen(false)}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-[#1a1a1a]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <span className="eyebrow text-[#825e2d]">Complimentary Service</span>
        <h2 className="text-xl sm:text-2xl font-medium text-[#1a1a1a] mt-1">
          Free Design Help
        </h2>
        <p className="mt-2 text-xs leading-relaxed text-stone-600">
          Send us your room dimensions or photos. Our interior design team in D.H.A., Karachi will create a to-scale plan with matching pieces — no purchase required.
        </p>

        {submitted ? (
          <div className="py-12 text-center text-stone-800">
            <CheckCircle2 className="w-12 h-12 text-[#3f7d5c] mx-auto mb-3" />
            <h3 className="text-base font-semibold">Inquiry Sent Successfully!</h3>
            <p className="text-xs text-stone-600 mt-1">
              Opening WhatsApp chat with our lead design consultant...
            </p>
          </div>
        ) : (
          <form onSubmit={handleWhatsAppSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-[0.6875rem] font-semibold uppercase tracking-wider text-stone-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="e.g. Haris Khan"
                className="w-full bg-white border border-[#d3cec6] px-3.5 py-2.5 text-xs text-[#1a1a1a] focus:outline-none focus:border-[#a67c3d]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[0.6875rem] font-semibold uppercase tracking-wider text-stone-600 mb-1">
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  placeholder="+92 3XX XXXXXXX"
                  className="w-full bg-white border border-[#d3cec6] px-3.5 py-2.5 text-xs text-[#1a1a1a] focus:outline-none focus:border-[#a67c3d]"
                />
              </div>

              <div>
                <label className="block text-[0.6875rem] font-semibold uppercase tracking-wider text-stone-600 mb-1">
                  City
                </label>
                <select
                  value={city}
                  onChange={e => setCity(e.target.value)}
                  className="w-full bg-white border border-[#d3cec6] px-3.5 py-2.5 text-xs text-[#1a1a1a] focus:outline-none focus:border-[#a67c3d]"
                >
                  <option value="Karachi">Karachi</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Rawalpindi">Rawalpindi</option>
                  <option value="Peshawar">Peshawar</option>
                  <option value="Multan">Multan</option>
                  <option value="Faisalabad">Faisalabad</option>
                  <option value="Other">Other City</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[0.6875rem] font-semibold uppercase tracking-wider text-stone-600 mb-1">
                Room or Department
              </label>
              <select
                value={roomType}
                onChange={e => setRoomType(e.target.value)}
                className="w-full bg-white border border-[#d3cec6] px-3.5 py-2.5 text-xs text-[#1a1a1a] focus:outline-none focus:border-[#a67c3d]"
              >
                <option value="Bedroom">Master Bedroom / Bed Set</option>
                <option value="Living Room">Living Room / Sectional &amp; TV Unit</option>
                <option value="Modular Kitchen">Nordika Modular Kitchen</option>
                <option value="Dining Room">Dining Suite &amp; Display Cabinet</option>
                <option value="Walk-in Closet">Walk-in Closet System</option>
                <option value="Complete Home">Complete Home Interior</option>
              </select>
            </div>

            <div>
              <label className="block text-[0.6875rem] font-semibold uppercase tracking-wider text-stone-600 mb-1">
                Room Dimensions or Requirements (Optional)
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={e => setNotes(e.target.value)}
                placeholder="e.g. Master bedroom 14x16 ft, looking for king bed and 2 bedside tables in neutral bouclé finish."
                className="w-full bg-white border border-[#d3cec6] px-3.5 py-2.5 text-xs text-[#1a1a1a] focus:outline-none focus:border-[#a67c3d]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#25D366] text-white py-3 px-4 text-xs font-semibold uppercase tracking-[0.08em] hover:bg-[#1ebc59] transition-colors flex items-center justify-center gap-2 mt-4"
            >
              <MessageCircle className="w-4 h-4" />
              Connect with Designer on WhatsApp
            </button>

            <div className="pt-3 border-t border-[#e6e2dc] text-[0.6875rem] text-stone-500 flex items-center justify-between">
              <span>Showroom: Khayaban-e-Sehar, Phase 7, D.H.A., Karachi</span>
              <a href="tel:+923158739625" className="font-semibold text-stone-700">
                0315 8739625
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
