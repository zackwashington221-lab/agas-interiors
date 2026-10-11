import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, MessageCircle, ArrowRight, Home, Calendar, Phone } from 'lucide-react';
import { useEnquiry } from '../context/EnquiryContext';
import { SITE_CONFIG } from '../data/siteConfig';

export const ThankYou: React.FC = () => {
  const { lastSubmittedEnquiry } = useEnquiry();

  const refId = lastSubmittedEnquiry?.id || `ENQ-${Date.now().toString(36).toUpperCase()}`;

  const buildWhatsAppMessage = () => {
    if (!lastSubmittedEnquiry) {
      return encodeURIComponent(`Hi ${SITE_CONFIG.brandName}! I have submitted an inquiry on your website. My reference ID is ${refId}.`);
    }
    const e = lastSubmittedEnquiry;
    let msg = `*Architectural Consultation Request - ${SITE_CONFIG.brandName}*\n`;
    msg += `*Ref:* ${e.id}\n`;
    msg += `*Client:* ${e.name} (${e.phone})\n`;
    msg += `*Location:* ${e.city}\n`;
    if (e.type === 'product') {
      msg += `*Product:* ${e.productName}\n`;
    } else {
      msg += `*Property:* ${e.projectType || 'General'}\n`;
      msg += `*Disciplines:* ${e.servicesSelected?.join(', ')}\n`;
      msg += `*Budget:* ${e.budgetRange || 'TBD'}\n`;
    }
    if (e.message) msg += `*Notes:* ${e.message}\n`;
    return encodeURIComponent(msg);
  };

  return (
    <div className="bg-[#FAF9F7] min-h-screen py-16 lg:py-24">
      <div className="mx-auto max-w-[800px] px-5 sm:px-8 text-center">
        {/* Success Icon */}
        <div className="w-16 h-16 rounded-full bg-[#806B54]/10 text-[#806B54] mx-auto flex items-center justify-center mb-6">
          <CheckCircle2 className="w-9 h-9 stroke-[1.75]" />
        </div>

        <span className="text-xs font-semibold tracking-[0.12em] uppercase text-[#806B54]">
          Consultation Request Registered
        </span>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#202321] mt-2 mb-4 leading-tight">
          Thank you for reaching out to {SITE_CONFIG.brandName}.
        </h1>

        <p className="text-sm leading-relaxed text-[#6B6B65] max-w-lg mx-auto">
          Your project brief has been logged under reference number{' '}
          <strong className="text-[#202321] font-mono">{refId}</strong>. A dedicated project director from our Karachi studio will review your requirements and connect with you.
        </p>

        {/* Reassurance Card */}
        <div className="mt-10 bg-white border border-[#B9B3A8] p-6 sm:p-8 text-left space-y-4 shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-[#E6E2DC]">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
              Consultation Protocol
            </span>
            <span className="text-xs font-mono text-[#806B54] font-semibold">{refId}</span>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-stone-700">
            <div className="flex items-start gap-3">
              <Calendar className="w-4 h-4 text-[#806B54] shrink-0 mt-0.5" />
              <div>
                <strong>Step 1: Brief Review &amp; Feasibility Check</strong>
                <p className="text-stone-500 text-xs mt-0.5">
                  Our interior architects inspect your spatial notes, room dimensions, or product selections.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-[#806B54] shrink-0 mt-0.5" />
              <div>
                <strong>Step 2: Introductory Discovery Call</strong>
                <p className="text-stone-500 text-xs mt-0.5">
                  We schedule a brief call to align on design preferences, material grades, and timeline targets.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Home className="w-4 h-4 text-[#806B54] shrink-0 mt-0.5" />
              <div>
                <strong>Step 3: On-Site Spatial Assessment in Karachi</strong>
                <p className="text-stone-500 text-xs mt-0.5">
                  Our team visits your villa, penthouse, or plot to take precision laser measurements and verify site conditions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${buildWhatsAppMessage()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] text-white py-3.5 px-6 text-xs font-semibold uppercase tracking-[0.08em] hover:bg-[#1ebc59] transition-colors shadow-xs"
          >
            <MessageCircle className="w-4 h-4" />
            Connect via WhatsApp Immediately
          </a>

          <Link
            to="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#202321] text-[#202321] py-3.5 px-6 text-xs font-semibold uppercase tracking-[0.08em] hover:bg-[#202321] hover:text-white transition-colors"
          >
            <span>Explore Completed Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <p className="mt-8 text-xs text-stone-500">
          Prefer to visit in person? Our flagship design showroom is open Monday through Saturday on Khayaban-e-Sehar, Phase 7, D.H.A., Karachi.
        </p>
      </div>
    </div>
  );
};
export default ThankYou;
