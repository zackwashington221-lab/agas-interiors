import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FAQItem {
  q: string;
  a: string;
  cat: string;
}

const FAQS: FAQItem[] = [
  {
    cat: "Delivery & Assembly",
    q: "Do you deliver across Pakistan?",
    a: "Yes. AGAS Interiors delivers nationwide to Karachi, Lahore, Islamabad, Rawalpindi, Peshawar, Multan, Faisalabad, Sialkot, and surrounding areas. Large items arrive built and are unpacked and set up inside your designated room by our logistics team."
  },
  {
    cat: "Delivery & Assembly",
    q: "How long does production and delivery take?",
    a: "Standard in-stock catalogue pieces deliver within 5–10 business days. Made-to-order and custom upholstered beds, sectionals, and modular kitchens typically require 15–30 business days depending on fabric selections and scale."
  },
  {
    cat: "Delivery & Assembly",
    q: "Do pieces arrive flat-packed or pre-assembled?",
    a: "Large pieces arrive built, not in a stack of complex boxes. Our assembly crew handles headboard anchoring, bed frame leveling, sectional bracket alignment, and placement."
  },
  {
    cat: "Customization & Materials",
    q: "Can I choose custom fabrics and dimensions?",
    a: "Absolutely. All beds, sofa sets, sectionals, and dining tables can be customized to match your room's measurements. We offer Turkish velvets, bouclé, textured linen blends, Italian sintered stones, and genuine leather."
  },
  {
    cat: "Customization & Materials",
    q: "What frame construction and foam do you use?",
    a: "Our furniture frames are built exclusively with seasoned, kiln-dried solid hardwood (such as Sheesham and imported Ash/Oak) reinforced with corner blocks and steel joinery. Cushions utilize high-resilience multi-density foam topped with down-fiber wraps."
  },
  {
    cat: "Showroom & Design Help",
    q: "Where is your showroom located in Karachi?",
    a: "Our flagship showroom is located at Shop 2, Plot 17-C, Lane 7, Khayaban-e-Sehar, Phase 7, D.H.A., Karachi. We are open Monday through Saturday from 09:00 AM to 09:00 PM."
  },
  {
    cat: "Showroom & Design Help",
    q: "How does the Free Design Consultation work?",
    a: "Simply send us your room dimensions and photographs via WhatsApp (0315 8739625) or through our website form. Our designers prepare a scaled floor plan recommendation and matching piece suggestions free of charge."
  },
  {
    cat: "Warranty & Payments",
    q: "What warranty comes with AGAS furniture?",
    a: "We provide an industry-leading 10-Year Structural Frame Guarantee on all sofas, beds, and modular cabinetry. We also provide warranty on all European drawer runners and hinges."
  },
  {
    cat: "Warranty & Payments",
    q: "What payment options are available?",
    a: "We accept direct bank transfers (IBFT), credit/debit cards, cheque deposits, and structured installment options. For custom made-to-order pieces, a 50% advance deposit is standard, with the balance due upon delivery."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCat, setSelectedCat] = useState<string>('All');

  const categories = ['All', 'Delivery & Assembly', 'Customization & Materials', 'Showroom & Design Help', 'Warranty & Payments'];

  const filtered = selectedCat === 'All' ? FAQS : FAQS.filter(f => f.cat === selectedCat);

  return (
    <div className="bg-[#faf9f7] py-12 lg:py-16">
      <div className="mx-auto max-w-[1000px] px-5 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="eyebrow text-[#825e2d]">Client Assistance</span>
          <h1 className="display-l text-[#1a1a1a] mt-2 font-medium">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-stone-600">
            Everything you need to know about made-to-order furniture, nationwide delivery, and design consultations.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
          {categories.map(cat => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-2 text-xs uppercase tracking-wider whitespace-nowrap transition-all ${
                selectedCat === cat
                  ? 'bg-[#1a1a1a] text-white font-semibold'
                  : 'bg-white border border-[#e6e2dc] text-stone-600 hover:bg-stone-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {filtered.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className="bg-white border border-[#e6e2dc] transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-xs sm:text-sm font-semibold text-[#1a1a1a] hover:text-[#825e2d]"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-500 shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 text-[#a67c3d]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs leading-relaxed text-stone-600 border-t border-stone-100">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-14 p-8 bg-[#f2f0ec] border border-[#e6e2dc] text-center">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[#1a1a1a]">
            Still have a question?
          </h3>
          <p className="mt-1.5 text-xs text-stone-600">
            Our concierges are available 6 days a week on WhatsApp and telephone.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/923158739625"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-[#1ebc59] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp: 0315 8739625
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center border border-[#1a1a1a] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors"
            >
              Contact Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FAQ;
